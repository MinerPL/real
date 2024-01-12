            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("913365"),
                r = n("227645"),
                a = n("577776"),
                o = n("79798"),
                d = n("315102"),
                u = n("568734"),
                l = n("8222"),
                f = n("49111"),
                _ = n("52904"),
                c = n("782340"),
                g = n("347819");

            function m(e) {
                let {
                    id: t,
                    user: n,
                    application: m,
                    bot: h,
                    accountScopes: v,
                    showLogout: E,
                    location: p,
                    isTrustedName: y
                } = e, T = d.default.getApplicationIconURL({
                    id: m.id,
                    icon: m.icon
                }), C = d.default.getUserAvatarURL(n);
                return (0, s.jsxs)("header", {
                    id: t,
                    className: g.header,
                    children: [(0, s.jsxs)("div", {
                        className: g.headerIcons,
                        children: [(0, s.jsx)(i.Avatar, {
                            src: T,
                            size: _.AvatarSizes.SIZE_80,
                            "aria-label": m.name
                        }), (0, s.jsxs)("div", {
                            className: g.ellipseGroup,
                            children: [(0, s.jsx)("div", {
                                className: g.ellipse
                            }), (0, s.jsx)("div", {
                                className: g.ellipse
                            }), (0, s.jsx)("div", {
                                className: g.ellipse
                            })]
                        }), (0, s.jsx)(i.Avatar, {
                            src: C,
                            size: _.AvatarSizes.SIZE_80,
                            "aria-label": n.username
                        })]
                    }), !y && (0, s.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: g.label,
                        children: c.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
                    }), (0, s.jsxs)(a.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: [m.name, null != h ? (0, s.jsx)(o.default, {
                            className: g.botTag,
                            verified: null != h.public_flags && (0, u.hasFlag)(h.public_flags, f.UserFlags.VERIFIED_BOT)
                        }) : null]
                    }), v.length > 0 ? (0, s.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.label,
                        children: c.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
                    }) : (0, s.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.label,
                        children: c.default.Messages.OAUTH2_CONNECT_TO_DISCORD
                    }), E ? (0, s.jsx)("div", {
                        className: g.currentUser,
                        children: (0, s.jsxs)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [c.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                                userHook: () => (0, s.jsxs)(a.Text, {
                                    className: g.currentUserTag,
                                    variant: "text-sm/normal",
                                    children: [n.username, !n.isPomelo() && (0, s.jsx)(a.Text, {
                                        className: g.currentUserDiscriminator,
                                        variant: "text-sm/normal",
                                        children: "#".concat(n.discriminator)
                                    })]
                                }, n.id)
                            }), (0, s.jsx)(r.Clickable, {
                                tag: "a",
                                className: g.logoutLink,
                                onClick: () => (0, l.logoutWithRedirect)(p),
                                children: c.default.Messages.OAUTH2_LOGOUT
                            })]
                        })
                    }) : null]
                })
            }