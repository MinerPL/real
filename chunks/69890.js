            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return r
                },
                formatMessageCountLabel: function() {
                    return u
                }
            });
            var a = n("299039"),
                s = n("648564"),
                l = n("782340");
            let i = e => a.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = i(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                d = (e, t, n) => {
                    let a = r(e, n);
                    return "0" === a ? l.default.Messages.SEE_THREAD : t.format({
                        count: a
                    })
                },
                u = (e, t) => d(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)