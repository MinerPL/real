            "use strict";
            n.r(e), n.d(e, {
                trace: function() {
                    return s
                }
            });
            var r = n("103787"),
                i = n("369590"),
                a = n("943523");

            function s(t, e) {
                let n, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
                    o = {
                        ...t
                    };
                void 0 !== o.name && void 0 === o.description && (o.description = o.name);
                let c = (0, i.getCurrentHub)(),
                    l = c.getScope(),
                    u = l.getSpan(),
                    d = function() {
                        if ((0, a.hasTracingEnabled)()) return u ? u.startChild(o) : c.startTransaction(o)
                    }();

                function h() {
                    d && d.finish(), c.getScope().setSpan(u)
                }
                l.setSpan(d);
                try {
                    n = e(d)
                } catch (t) {
                    throw d && d.setStatus("internal_error"), s(t), h(), t
                }
                return (0, r.isThenable)(n) ? Promise.resolve(n).then(() => {
                    h()
                }, t => {
                    d && d.setStatus("internal_error"), s(t), h()
                }) : h(), n
            }