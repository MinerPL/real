            "use strict";
            n.r(e), n.d(e, {
                InboundFilters: function() {
                    return s
                }
            }), n("854508"), n("222007");
            var r = n("103787");
            let i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                a = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
            class s {
                static __initStatic() {
                    this.id = "InboundFilters"
                }
                __init() {
                    this.name = s.id
                }
                setupOnce(t, e) {
                    let n = t => {
                        let n = e();
                        if (n) {
                            let e = n.getIntegration(s);
                            if (e) {
                                let s = n.getClient(),
                                    c = s ? s.getOptions() : {},
                                    l = function() {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return {
                                            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : i],
                                            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : a],
                                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                        }
                                    }(e._options, c);
                                return function(t, e) {
                                    return e.ignoreInternal && function(t) {
                                        try {
                                            return "SentryError" === t.exception.values[0].type
                                        } catch (t) {}
                                        return !1
                                    }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: ".concat((0, r.getEventDescription)(t))), !0) : function(t, e) {
                                        return !t.type && !!e && !!e.length && (function(t) {
                                            if (t.message) return [t.message];
                                            if (t.exception) {
                                                let {
                                                    values: e
                                                } = t.exception;
                                                try {
                                                    let {
                                                        type: t = "",
                                                        value: n = ""
                                                    } = e && e[e.length - 1] || {};
                                                    return ["".concat(n), "".concat(t, ": ").concat(n)]
                                                } catch (e) {
                                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Cannot extract message for event ".concat((0, r.getEventDescription)(t)))
                                                }
                                            }
                                            return []
                                        })(t).some(t => (0, r.stringMatchesSomePattern)(t, e))
                                    }(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: ".concat((0, r.getEventDescription)(t))), !0) : function(t, e) {
                                        if ("transaction" !== t.type || !e || !e.length) return !1;
                                        let n = t.transaction;
                                        return !!n && (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: ".concat((0, r.getEventDescription)(t))), !0) : function(t, e) {
                                        if (!e || !e.length) return !1;
                                        let n = o(t);
                                        return !!n && (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: ".concat((0, r.getEventDescription)(t), ".\nUrl: ").concat(o(t))), !0) : ! function(t, e) {
                                        if (!e || !e.length) return !0;
                                        let n = o(t);
                                        return !n || (0, r.stringMatchesSomePattern)(n, e)
                                    }(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: ".concat((0, r.getEventDescription)(t), ".\nUrl: ").concat(o(t))), !0)
                                }(t, l) ? null : t
                            }
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
                constructor(t = {}) {
                    this._options = t, s.prototype.__init.call(this)
                }
            }
            s.__initStatic();

            function o(t) {
                try {
                    let e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return e ? function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        for (let e = t.length - 1; e >= 0; e--) {
                            let n = t[e];
                            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                        }
                        return null
                    }(e) : null
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Cannot extract url for event ".concat((0, r.getEventDescription)(t))), null
                }
            }