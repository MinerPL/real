            "use strict";
            n.r(e), n.d(e, {
                getDynamicSamplingContextFromClient: function() {
                    return a
                }
            });
            var r = n("103787"),
                i = n("958679");

            function a(t, e, n) {
                let a = e.getOptions(),
                    {
                        publicKey: s
                    } = e.getDsn() || {},
                    {
                        segment: o
                    } = n && n.getUser() || {},
                    c = (0, r.dropUndefinedKeys)({
                        environment: a.environment || i.DEFAULT_ENVIRONMENT,
                        release: a.release,
                        user_segment: o,
                        public_key: s,
                        trace_id: t
                    });
                return e.emit && e.emit("createDsc", c), c
            }