            "use strict";
            n.r(t), n.d(t, {
                ClydeNotice: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("455841");

            function c(e) {
                let {
                    narrow: t
                } = e, n = r.default.getArticleURL(o.HelpdeskArticles.CLYDE_AI);
                return (0, a.jsx)("div", {
                    className: l(d.chatHeaderBar, {
                        [d.narrow]: t
                    }),
                    children: (0, a.jsx)(i.Text, {
                        className: d.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: u.default.Messages.CLYDE_NOTICE.format({
                            learnMoreUrl: n
                        })
                    })
                })
            }