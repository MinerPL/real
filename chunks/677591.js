            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("414456"),
                a = s.n(r),
                l = s("77078"),
                o = s("326880"),
                n = s("51947"),
                d = s("890128"),
                u = s("782340"),
                c = s("212993"),
                E = s("506197");

            function _(e) {
                let {
                    className: t,
                    icon: s,
                    children: r
                } = e;
                return (0, i.jsxs)("li", {
                    className: a(c.card, t),
                    children: [(0, i.jsx)(s, {
                        className: c.icon
                    }), (0, i.jsx)(l.Text, {
                        className: c.description,
                        variant: "text-sm/medium",
                        children: r
                    })]
                })
            }
            var T = function(e) {
                let {
                    cardClassName: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.wrapper,
                    children: [(0, i.jsxs)("div", {
                        className: c.content,
                        children: [(0, i.jsx)(l.Heading, {
                            className: c.heading,
                            color: "always-white",
                            variant: "heading-xxl/bold",
                            children: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
                        }), (0, i.jsxs)("ul", {
                            className: c.cards,
                            children: [(0, i.jsx)(_, {
                                className: t,
                                icon: o.default,
                                children: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: e => (0, i.jsx)("img", {
                                    className: a(e.className, c.iconImage),
                                    src: E,
                                    alt: ""
                                }),
                                children: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: d.default,
                                children: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
                            }), (0, i.jsx)(_, {
                                className: t,
                                icon: n.default,
                                children: u.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: c.backgroundImages
                    })]
                })
            }