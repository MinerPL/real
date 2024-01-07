            "use strict";
            let r, i, a;
            n.r(e), n.d(e, {
                SENTRY_XHR_DATA_KEY: function() {
                    return p
                },
                addInstrumentationHandler: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var s = n("106145"),
                o = n("587254"),
                c = n("654069"),
                l = n("979605"),
                u = n("78634"),
                d = n("232945"),
                h = n("811517");
            let f = (0, d.getGlobalObject)(),
                p = "__sentry_xhr_v2__",
                _ = {},
                g = {};

            function m(t, e) {
                _[t] = _[t] || [], _[t].push(e), ! function(t) {
                    if (!g[t]) switch (g[t] = !0, t) {
                        case "console":
                            (function() {
                                "console" in f && o.CONSOLE_LEVELS.forEach(function(t) {
                                    t in f.console && (0, c.fill)(f.console, t, function(e) {
                                        return function() {
                                            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                            y("console", {
                                                args: r,
                                                level: t
                                            }), e && e.apply(f.console, r)
                                        }
                                    })
                                })
                            })();
                            break;
                        case "dom":
                            (function() {
                                if (!("document" in f)) return;
                                let t = y.bind(null, "dom"),
                                    e = b(t, !0);
                                f.document.addEventListener("click", e, !1), f.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
                                    let n = f[e] && f[e].prototype;
                                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, c.fill)(n, "addEventListener", function(e) {
                                        return function(n, r, i) {
                                            if ("click" === n || "keypress" == n) try {
                                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                    a = r[n] = r[n] || {
                                                        refCount: 0
                                                    };
                                                if (!a.handler) {
                                                    let r = b(t);
                                                    a.handler = r, e.call(this, n, r, i)
                                                }
                                                a.refCount++
                                            } catch (t) {}
                                            return e.call(this, n, r, i)
                                        }
                                    }), (0, c.fill)(n, "removeEventListener", function(t) {
                                        return function(e, n, r) {
                                            if ("click" === e || "keypress" == e) try {
                                                let n = this.__sentry_instrumentation_handlers__ || {},
                                                    i = n[e];
                                                i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete n[e]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                                            } catch (t) {}
                                            return t.call(this, e, n, r)
                                        }
                                    }))
                                })
                            })();
                            break;
                        case "xhr":
                            (function() {
                                if (!("XMLHttpRequest" in f)) return;
                                let t = XMLHttpRequest.prototype;
                                (0, c.fill)(t, "open", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let i = n[1],
                                            a = this[p] = {
                                                method: (0, s.isString)(n[0]) ? n[0].toUpperCase() : n[0],
                                                url: n[1],
                                                request_headers: {}
                                            };
                                        (0, s.isString)(i) && "POST" === a.method && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                                        let o = () => {
                                            let t = this[p];
                                            if (t && 4 === this.readyState) {
                                                try {
                                                    t.status_code = this.status
                                                } catch (t) {}
                                                y("xhr", {
                                                    args: n,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: this
                                                })
                                            }
                                        };
                                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, c.fill)(this, "onreadystatechange", function(t) {
                                            return function() {
                                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                return o(), t.apply(this, n)
                                            }
                                        }) : this.addEventListener("readystatechange", o), (0, c.fill)(this, "setRequestHeader", function(t) {
                                            return function() {
                                                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                                let [i, a] = n, s = this[p];
                                                return s && (s.request_headers[i.toLowerCase()] = a), t.apply(this, n)
                                            }
                                        }), t.apply(this, n)
                                    }
                                }), (0, c.fill)(t, "send", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let i = this[p];
                                        return i && void 0 !== n[0] && (i.body = n[0]), y("xhr", {
                                            args: n,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }), t.apply(this, n)
                                    }
                                })
                            })();
                            break;
                        case "fetch":
                            (function() {
                                (0, u.supportsNativeFetch)() && (0, c.fill)(f, "fetch", function(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        let {
                                            method: i,
                                            url: a
                                        } = function(t) {
                                            if (0 === t.length) return {
                                                method: "GET",
                                                url: ""
                                            };
                                            if (2 === t.length) {
                                                let [e, n] = t;
                                                return {
                                                    url: E(e),
                                                    method: v(n, "method") ? String(n.method).toUpperCase() : "GET"
                                                }
                                            }
                                            let e = t[0];
                                            return {
                                                url: E(e),
                                                method: v(e, "method") ? String(e.method).toUpperCase() : "GET"
                                            }
                                        }(n), s = {
                                            args: n,
                                            fetchData: {
                                                method: i,
                                                url: a
                                            },
                                            startTimestamp: Date.now()
                                        };
                                        return y("fetch", {
                                            ...s
                                        }), t.apply(f, n).then(t => (y("fetch", {
                                            ...s,
                                            endTimestamp: Date.now(),
                                            response: t
                                        }), t), t => {
                                            throw y("fetch", {
                                                ...s,
                                                endTimestamp: Date.now(),
                                                error: t
                                            }), t
                                        })
                                    }
                                })
                            })();
                            break;
                        case "history":
                            (function() {
                                if (!(0, h.supportsHistory)()) return;
                                let t = f.onpopstate;

                                function e(t) {
                                    return function() {
                                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                        let a = n.length > 2 ? n[2] : void 0;
                                        if (a) {
                                            let t = r,
                                                e = String(a);
                                            r = e, y("history", {
                                                from: t,
                                                to: e
                                            })
                                        }
                                        return t.apply(this, n)
                                    }
                                }
                                f.onpopstate = function() {
                                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                    let a = f.location.href,
                                        s = r;
                                    if (r = a, y("history", {
                                            from: s,
                                            to: a
                                        }), t) try {
                                        return t.apply(this, n)
                                    } catch (t) {}
                                }, (0, c.fill)(f.history, "pushState", e), (0, c.fill)(f.history, "replaceState", e)
                            })();
                            break;
                        case "error":
                            (function() {
                                S = f.onerror, f.onerror = function(t, e, n, r, i) {
                                    return y("error", {
                                        column: r,
                                        error: i,
                                        line: n,
                                        msg: t,
                                        url: e
                                    }), !!S && !S.__SENTRY_LOADER__ && S.apply(this, arguments)
                                }, f.onerror.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        case "unhandledrejection":
                            (function() {
                                w = f.onunhandledrejection, f.onunhandledrejection = function(t) {
                                    return y("unhandledrejection", t), !w || !!w.__SENTRY_LOADER__ || w.apply(this, arguments)
                                }, f.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
                            })();
                            break;
                        default:
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.warn("unknown instrumentation type:", t);
                            return
                    }
                }(t)
            }

            function y(t, e) {
                if (t && _[t])
                    for (let n of _[t] || []) try {
                        n(e)
                    } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.error("Error while triggering instrumentation handler.\nType: ".concat(t, "\nName: ").concat((0, l.getFunctionName)(n), "\nError:"), e)
                    }
            }

            function v(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }

            function E(t) {
                return "string" == typeof t ? t : t ? v(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }

            function b(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return n => {
                    if (!n || a === n || function(t) {
                            if ("keypress" !== t.type) return !1;
                            try {
                                let e = t.target;
                                if (!e || !e.tagName) return !0;
                                if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                            } catch (t) {}
                            return !0
                        }(n)) return;
                    let r = "keypress" === n.type ? "input" : n.type;
                    void 0 === i ? (t({
                        event: n,
                        name: r,
                        global: e
                    }), a = n) : function(t, e) {
                        if (!t || t.type !== e.type) return !0;
                        try {
                            if (t.target !== e.target) return !0
                        } catch (t) {}
                        return !1
                    }(a, n) && (t({
                        event: n,
                        name: r,
                        global: e
                    }), a = n), clearTimeout(i), i = f.setTimeout(() => {
                        i = void 0
                    }, 1e3)
                }
            }
            let S = null,
                w = null