            "use strict";
            n.r(e), n.d(e, {
                Dedupe: function() {
                    return i
                }
            }), n("854508"), n("222007");
            var r = n("103787");
            class i {
                static __initStatic() {
                    this.id = "Dedupe"
                }
                __init() {
                    this.name = i.id
                }
                setupOnce(t, e) {
                    let n = t => {
                        if (t.type) return t;
                        let n = e().getIntegration(i);
                        if (n) {
                            try {
                                if (function(t, e) {
                                        return !!e && (!!(function(t, e) {
                                            let n = t.message,
                                                r = e.message;
                                            return !!((n || r) && (!n || r) && (n || !r) && n === r && s(t, e) && a(t, e)) || !1
                                        }(t, e) || function(t, e) {
                                            let n = o(e),
                                                r = o(t);
                                            return !!(n && r && n.type === r.type && n.value === r.value && s(t, e) && a(t, e)) || !1
                                        }(t, e)) || !1)
                                    }(t, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (t) {}
                            return n._previousEvent = t
                        }
                        return t
                    };
                    n.id = this.name, t(n)
                }
                constructor() {
                    i.prototype.__init.call(this)
                }
            }
            i.__initStatic();

            function a(t, e) {
                let n = c(t),
                    r = c(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r || r.length !== n.length) return !1;
                for (let t = 0; t < r.length; t++) {
                    let e = r[t],
                        i = n[t];
                    if (e.filename !== i.filename || e.lineno !== i.lineno || e.colno !== i.colno || e.function !== i.function) return !1
                }
                return !0
            }

            function s(t, e) {
                let n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function o(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function c(t) {
                let e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {}
            }