            "use strict";
            n.r(e), n.d(e, {
                hasTracingEnabled: function() {
                    return i
                }
            });
            var r = n("369590");

            function i(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                let e = (0, r.getCurrentHub)().getClient(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }