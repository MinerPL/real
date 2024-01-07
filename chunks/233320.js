            "use strict";
            n.r(e), n.d(e, {
                GlobalHandlers: function() {
                    return o
                }
            }), n("70102"), n("222007"), n("424973");
            var r = n("675065"),
                i = n("103787"),
                a = n("4362"),
                s = n("714090");
            class o {
                static __initStatic() {
                    this.id = "GlobalHandlers"
                }
                __init() {
                    this.name = o.id
                }
                __init2() {
                    this._installFunc = {
                        onerror: c,
                        onunhandledrejection: l
                    }
                }
                setupOnce() {
                    Error.stackTraceLimit = 50;
                    let t = this._options;
                    for (let e in t) {
                        let n = this._installFunc[e];
                        n && t[e] && (function(t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("Global Handler attached: ".concat(t))
                        }(e), n(), this._installFunc[e] = void 0)
                    }
                }
                constructor(t) {
                    o.prototype.__init.call(this), o.prototype.__init2.call(this), this._options = {
                        onerror: !0,
                        onunhandledrejection: !0,
                        ...t
                    }
                }
            }

            function c() {
                (0, i.addInstrumentationHandler)("error", t => {
                    let [e, n, r] = h();
                    if (!e.getIntegration(o)) return;
                    let {
                        msg: c,
                        url: l,
                        line: f,
                        column: p,
                        error: _
                    } = t;
                    if ((0, s.shouldIgnoreOnError)() || _ && _.__sentry_own_request__) return;
                    let g = void 0 === _ && (0, i.isString)(c) ? function(t, e, n, r) {
                        let a = (0, i.isErrorEvent)(t) ? t.message : t,
                            s = "Error",
                            o = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        o && (s = o[1], a = o[2]);
                        let c = {
                            exception: {
                                values: [{
                                    type: s,
                                    value: a
                                }]
                            }
                        };
                        return u(c, e, n, r)
                    }(c, l, f, p) : u((0, a.eventFromUnknownInput)(n, _ || c, void 0, r, !1), l, f, p);
                    g.level = "error", d(e, _, g, "onerror")
                })
            }

            function l() {
                (0, i.addInstrumentationHandler)("unhandledrejection", t => {
                    let [e, n, r] = h();
                    if (!e.getIntegration(o)) return;
                    let c = t;
                    try {
                        "reason" in t ? c = t.reason : "detail" in t && "reason" in t.detail && (c = t.detail.reason)
                    } catch (t) {}
                    if ((0, s.shouldIgnoreOnError)() || c && c.__sentry_own_request__) return !0;
                    let l = (0, i.isPrimitive)(c) ? function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: ".concat(String(t))
                                }]
                            }
                        }
                    }(c) : (0, a.eventFromUnknownInput)(n, c, void 0, r, !0);
                    l.level = "error", d(e, c, l, "onunhandledrejection")
                })
            }
            o.__initStatic();

            function u(t, e, n, r) {
                let a = t.exception = t.exception || {},
                    s = a.values = a.values || [],
                    o = s[0] = s[0] || {},
                    c = o.stacktrace = o.stacktrace || {},
                    l = c.frames = c.frames || [],
                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                    d = isNaN(parseInt(n, 10)) ? void 0 : n,
                    h = (0, i.isString)(e) && e.length > 0 ? e : (0, i.getLocationHref)();
                return 0 === l.length && l.push({
                    colno: u,
                    filename: h,
                    function: "?",
                    in_app: !0,
                    lineno: d
                }), t
            }

            function d(t, e, n, r) {
                (0, i.addExceptionMechanism)(n, {
                    handled: !1,
                    type: r
                }), t.captureEvent(n, {
                    originalException: e
                })
            }

            function h() {
                let t = (0, r.getCurrentHub)(),
                    e = t.getClient(),
                    n = e && e.getOptions() || {
                        stackParser: () => [],
                        attachStacktrace: !1
                    };
                return [t, n.stackParser, n.attachStacktrace]
            }