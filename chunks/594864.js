            "use strict";
            n.r(t), n.d(t, {
                MessageNoticeBanner: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                i = n("46716");

            function r(e) {
                let {
                    bannerIcon: t,
                    bannerHeader: n,
                    bannerSubtext: a,
                    containerStyles: r,
                    headerStyles: o,
                    children: u
                } = e;
                return (0, s.jsxs)("div", {
                    className: i.spamBanner,
                    children: [(0, s.jsxs)("div", {
                        className: l(i.bannerTextContainer, r),
                        children: ["string" == typeof t ? (0, s.jsx)("img", {
                            src: t,
                            alt: "",
                            className: i.bannerIcon
                        }) : t, (0, s.jsxs)("div", {
                            className: i.bannerText,
                            children: [(0, s.jsx)("div", {
                                className: l(i.bannerHeader, o),
                                children: n
                            }), (0, s.jsx)("div", {
                                className: i.bannerSubtext,
                                children: a
                            })]
                        })]
                    }), (0, s.jsx)("div", {
                        className: i.actionButtons,
                        children: u
                    })]
                })
            }