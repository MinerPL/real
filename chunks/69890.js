            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return a
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                l = n("782340");
            let r = e => i.default.compare("992549565104128000", e) > -1,
                a = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = r(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let i = a(e, n);
                    return "0" === i ? l.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                o = (e, t) => u(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)