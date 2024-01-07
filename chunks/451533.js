            "use strict";
            n.r(e), n.d(e, {
                extractTraceparentData: function() {
                    return s
                },
                generateSentryTraceHeader: function() {
                    return c
                },
                tracingContextFromHeaders: function() {
                    return o
                }
            });
            var r = n("167875"),
                i = n("648473");
            let a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function s(t) {
                let e;
                if (!t) return;
                let n = t.match(a);
                if (n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
                    traceId: n[1],
                    parentSampled: e,
                    parentSpanId: n[2]
                }
            }

            function o(t, e) {
                let n = s(t),
                    a = (0, r.baggageHeaderToDynamicSamplingContext)(e),
                    {
                        traceId: o,
                        parentSpanId: c,
                        parentSampled: l
                    } = n || {},
                    u = {
                        traceId: o || (0, i.uuid4)(),
                        spanId: (0, i.uuid4)().substring(16),
                        sampled: void 0 !== l && l
                    };
                return c && (u.parentSpanId = c), a && (u.dsc = a), {
                    traceparentData: n,
                    dynamicSamplingContext: a,
                    propagationContext: u
                }
            }

            function c() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.uuid4)(),
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.uuid4)().substring(16),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), "".concat(t, "-").concat(e).concat(r)
            }