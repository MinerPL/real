            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("990766"),
                r = n("374014"),
                i = n("701909"),
                l = n("607391"),
                u = n("49111"),
                o = n("782340");
            let d = n("242412");

            function c(e) {
                let {
                    stream: t,
                    width: n,
                    selected: c = !1,
                    noArt: f = !1
                } = e;
                return (0, a.jsx)(l.default, {
                    artURL: d,
                    header: o.default.Messages.STREAM_FAILED_TITLE,
                    size: (0, l.getSizeForWidth)(n),
                    noArt: f,
                    selected: c,
                    description: o.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                        helpUrl: i.default.getArticleURL(u.HelpdeskArticles.STREAM_FAILED)
                    }),
                    onCTAClick: () => (0, s.closeStream)((0, r.encodeStreamKey)(t)),
                    callToAction: o.default.Messages.CLOSE_STREAM
                })
            }