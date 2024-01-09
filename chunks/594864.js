            "use strict";
            n.r(t), n.d(t, {
                MessageNoticeBanner: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("46716");

            function r(e) {
                let {
                    bannerIcon: t,
                    bannerHeader: n,
                    bannerSubtext: s,
                    containerStyles: r,
                    headerStyles: o,
                    children: u
                } = e;
                return (0, a.jsxs)("div", {
                    className: i.spamBanner,
                    children: [(0, a.jsxs)("div", {
                        className: l(i.bannerTextContainer, r),
                        children: ["string" == typeof t ? (0, a.jsx)("img", {
                            src: t,
                            alt: "",
                            className: i.bannerIcon
                        }) : t, (0, a.jsxs)("div", {
                            className: i.bannerText,
                            children: [(0, a.jsx)("div", {
                                className: l(i.bannerHeader, o),
                                children: n
                            }), (0, a.jsx)("div", {
                                className: i.bannerSubtext,
                                children: s
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: i.actionButtons,
                        children: u
                    })]
                })
            }