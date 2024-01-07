            "use strict";
            n.r(e), n.d(e, {
                addTracingExtensions: function() {
                    return f
                },
                startIdleTransaction: function() {
                    return h
                }
            });
            var r = n("103787"),
                i = n("369590"),
                a = n("943523"),
                s = n("654517"),
                o = n("86285"),
                c = n("371747");

            function l() {
                let t = this.getScope(),
                    e = t.getSpan();
                return e ? {
                    "sentry-trace": e.toTraceparent()
                } : {}
            }

            function u(t, e, n) {
                let i;
                return (0, a.hasTracingEnabled)(e) ? void 0 !== t.sampled ? (t.setMetadata({
                    sampleRate: Number(t.sampled)
                }), t) : ("function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
                    sampleRate: Number(i)
                })) : void 0 !== n.parentSampled ? i = n.parentSampled : void 0 !== e.tracesSampleRate ? (i = e.tracesSampleRate, t.setMetadata({
                    sampleRate: Number(i)
                })) : (i = 1, t.setMetadata({
                    sampleRate: i
                })), ! function(t) {
                    return (0, r.isNaN)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), ".")), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ".concat(t, ".")), !1)
                }(i)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : i ? (t.sampled = Math.random() < i, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] starting ".concat(t.op, " transaction - ").concat(t.name)), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ".concat(Number(i), ")")), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Discarding transaction because ".concat("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (t.sampled = !1, t)
            }

            function d(t, e) {
                let n = this.getClient(),
                    i = n && n.getOptions() || {},
                    a = i.instrumenter || "sentry",
                    s = t.instrumenter || "sentry";
                a !== s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("A transaction was started with instrumenter=`".concat(s, "`, but the SDK is configured with the `").concat(a, "` instrumenter.\nThe transaction will not be sampled. Please use the ").concat(a, " instrumentation to start transactions.")), t.sampled = !1);
                let o = new c.Transaction(t, this);
                return (o = u(o, i, {
                    parentSampled: t.parentSampled,
                    transactionContext: t,
                    ...e
                })).sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
            }

            function h(t, e, n, r, i, a, s) {
                let c = t.getClient(),
                    l = c && c.getOptions() || {},
                    d = new o.IdleTransaction(e, t, n, r, s, i);
                return (d = u(d, l, {
                    parentSampled: e.parentSampled,
                    transactionContext: e,
                    ...a
                })).sampled && d.initSpanRecorder(l._experiments && l._experiments.maxSpans), c && c.emit && c.emit("startTransaction", d), d
            }

            function f() {
                let t = (0, i.getMainCarrier)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = d), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = l), (0, s.registerErrorInstrumentation)())
            }