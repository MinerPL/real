            "use strict";
            n.r(e), n.d(e, {
                BREADCRUMB_INTEGRATION_ID: function() {
                    return s
                },
                Breadcrumbs: function() {
                    return o
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("714090");
            let s = "Breadcrumbs";
            class o {
                static __initStatic() {
                    this.id = s
                }
                __init() {
                    this.name = o.id
                }
                setupOnce() {
                    this.options.console && (0, i.addInstrumentationHandler)("console", c), this.options.dom && (0, i.addInstrumentationHandler)("dom", function(t) {
                        return function(e) {
                            let n;
                            let a = "object" == typeof t ? t.serializeAttribute : void 0,
                                s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            s && s > 1024 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("`dom.maxStringLength` cannot exceed ".concat(1024, ", but a value of ").concat(s, " was configured. Sentry will use ").concat(1024, " instead.")), s = 1024), "string" == typeof a && (a = [a]);
                            try {
                                let t = e.event;
                                n = function(t) {
                                    return !!t && !!t.target
                                }(t) ? (0, i.htmlTreeAsString)(t.target, {
                                    keyAttrs: a,
                                    maxStringLength: s
                                }) : (0, i.htmlTreeAsString)(t, {
                                    keyAttrs: a,
                                    maxStringLength: s
                                })
                            } catch (t) {
                                n = "<unknown>"
                            }
                            0 !== n.length && (0, r.getCurrentHub)().addBreadcrumb({
                                category: "ui.".concat(e.name),
                                message: n
                            }, {
                                event: e.event,
                                name: e.name,
                                global: e.global
                            })
                        }
                    }(this.options.dom)), this.options.xhr && (0, i.addInstrumentationHandler)("xhr", l), this.options.fetch && (0, i.addInstrumentationHandler)("fetch", u), this.options.history && (0, i.addInstrumentationHandler)("history", d)
                }
                addSentryBreadcrumb(t) {
                    this.options.sentry && (0, r.getCurrentHub)().addBreadcrumb({
                        category: "sentry.".concat("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: (0, i.getEventDescription)(t)
                    }, {
                        event: t
                    })
                }
                constructor(t) {
                    o.prototype.__init.call(this), this.options = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...t
                    }
                }
            }
            o.__initStatic();

            function c(t) {
                for (let e = 0; e < t.args.length; e++)
                    if ("ref=Ref<" === t.args[e]) {
                        t.args[e + 1] = "viewRef";
                        break
                    } let e = {
                    category: "console",
                    data: {
                        arguments: t.args,
                        logger: "console"
                    },
                    level: (0, i.severityLevelFromString)(t.level),
                    message: (0, i.safeJoin)(t.args, " ")
                };
                if ("assert" === t.level) {
                    if (!1 !== t.args[0]) return;
                    e.message = "Assertion failed: ".concat((0, i.safeJoin)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                }(0, r.getCurrentHub)().addBreadcrumb(e, {
                    input: t.args,
                    level: t.level
                })
            }

            function l(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t, a = t.xhr[i.SENTRY_XHR_DATA_KEY];
                if (!e || !n || !a) return;
                let {
                    method: s,
                    url: o,
                    status_code: c,
                    body: l
                } = a, u = {
                    xhr: t.xhr,
                    input: l,
                    startTimestamp: e,
                    endTimestamp: n
                };
                (0, r.getCurrentHub)().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: s,
                        url: o,
                        status_code: c
                    },
                    type: "http"
                }, u)
            }

            function u(t) {
                let {
                    startTimestamp: e,
                    endTimestamp: n
                } = t;
                if (!!n) {
                    if (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method) {
                        if (t.error) {
                            let i = t.fetchData,
                                a = {
                                    data: t.error,
                                    input: t.args,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, r.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: i,
                                level: "error",
                                type: "http"
                            }, a)
                        } else {
                            let i = {
                                    ...t.fetchData,
                                    status_code: t.response && t.response.status
                                },
                                a = {
                                    input: t.args,
                                    response: t.response,
                                    startTimestamp: e,
                                    endTimestamp: n
                                };
                            (0, r.getCurrentHub)().addBreadcrumb({
                                category: "fetch",
                                data: i,
                                type: "http"
                            }, a)
                        }
                    }
                }
            }

            function d(t) {
                let e = t.from,
                    n = t.to,
                    s = (0, i.parseUrl)(a.WINDOW.location.href),
                    o = (0, i.parseUrl)(e),
                    c = (0, i.parseUrl)(n);
                !o.path && (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (e = o.relative), (0, r.getCurrentHub)().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: e,
                        to: n
                    }
                })
            }