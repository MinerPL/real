            "use strict";
            n.r(e), n.d(e, {
                registerBackgroundTabDetection: function() {
                    return s
                }
            });
            var r = n("675065"),
                i = n("103787"),
                a = n("307447");

            function s() {
                a.WINDOW && a.WINDOW.document ? a.WINDOW.document.addEventListener("visibilitychange", () => {
                    let t = (0, r.getActiveTransaction)();
                    if (a.WINDOW.document.hidden && t) {
                        let e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Transaction: ".concat(e, " -> since tab moved to the background, op: ").concat(t.op)), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
                    }
                }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
            }