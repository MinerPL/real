            "use strict";
            n.r(e), n.d(e, {
                createTransport: function() {
                    return i
                }
            }), n("424973");
            var r = n("103787");

            function i(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.makePromiseBuffer)(t.bufferSize || 30),
                    i = {};

                function s(s) {
                    let o = [];
                    if ((0, r.forEachEnvelopeItem)(s, (e, n) => {
                            let s = (0, r.envelopeItemTypeToDataCategory)(n);
                            if ((0, r.isRateLimited)(i, s)) {
                                let r = a(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", s, r)
                            } else o.push(e)
                        }), 0 === o.length) return (0, r.resolvedSyncPromise)();
                    let c = (0, r.createEnvelope)(s[0], o),
                        l = e => {
                            (0, r.forEachEnvelopeItem)(c, (n, i) => {
                                let s = a(n, i);
                                t.recordDroppedEvent(e, (0, r.envelopeItemTypeToDataCategory)(i), s)
                            })
                        };
                    return n.add(() => e({
                        body: (0, r.serializeEnvelope)(c, t.textEncoder)
                    }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Sentry responded with status code ".concat(t.statusCode, " to sent event.")), i = (0, r.updateRateLimits)(i, t), t), t => {
                        throw l("network_error"), t
                    })).then(t => t, t => {
                        if (t instanceof r.SentryError) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), l("queue_overflow"), (0, r.resolvedSyncPromise)();
                        throw t
                    })
                }
                return s.__sentry__baseTransport__ = !0, {
                    send: s,
                    flush: t => n.drain(t)
                }
            }

            function a(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }