            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                i = s.n(l),
                n = s("77078"),
                u = s("401642"),
                r = s("315102"),
                o = s("49111"),
                d = s("782340"),
                c = s("22727");

            function E(e) {
                let {
                    user: t,
                    className: s
                } = e, {
                    discriminator: l,
                    username: E
                } = t, I = r.default.getUserAvatarURL(t);
                return (0, a.jsxs)("div", {
                    className: i(c.container, s),
                    children: [(0, a.jsx)(n.Avatar, {
                        src: I,
                        size: n.AvatarSizes.SIZE_80,
                        "aria-label": E,
                        className: c.avatar
                    }), (0, a.jsxs)("div", {
                        className: c.username,
                        children: [(0, a.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: E
                        }), (0, a.jsxs)(n.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: ["#", l]
                        })]
                    }), (0, a.jsx)(n.Anchor, {
                        onClick: () => {
                            (0, u.openUserProfileModal)({
                                userId: t.id,
                                analyticsLocation: {
                                    section: o.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                    object: o.AnalyticsObjects.JOIN_REQUEST
                                }
                            })
                        },
                        children: d.default.Messages.VIEW_PROFILE
                    })]
                })
            }