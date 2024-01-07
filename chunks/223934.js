            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("913365"),
                l = n("227645"),
                s = n("577776"),
                r = n("79798"),
                u = n("315102"),
                o = n("568734"),
                d = n("8222"),
                c = n("49111"),
                _ = n("52904"),
                E = n("782340"),
                f = n("347819");

            function h(e) {
                let {
                    id: t,
                    user: n,
                    application: h,
                    bot: p,
                    accountScopes: T,
                    showLogout: C,
                    location: m,
                    isTrustedName: S
                } = e, I = u.default.getApplicationIconURL({
                    id: h.id,
                    icon: h.icon
                }), g = u.default.getUserAvatarURL(n);
                return (0, i.jsxs)("header", {
                    id: t,
                    className: f.header,
                    children: [(0, i.jsxs)("div", {
                        className: f.headerIcons,
                        children: [(0, i.jsx)(a.Avatar, {
                            src: I,
                            size: _.AvatarSizes.SIZE_80,
                            "aria-label": h.name
                        }), (0, i.jsxs)("div", {
                            className: f.ellipseGroup,
                            children: [(0, i.jsx)("div", {
                                className: f.ellipse
                            }), (0, i.jsx)("div", {
                                className: f.ellipse
                            }), (0, i.jsx)("div", {
                                className: f.ellipse
                            })]
                        }), (0, i.jsx)(a.Avatar, {
                            src: g,
                            size: _.AvatarSizes.SIZE_80,
                            "aria-label": n.username
                        })]
                    }), !S && (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        className: f.label,
                        children: E.default.Messages.OAUTH2_THIRD_PARTY_APPLICATION
                    }), (0, i.jsxs)(s.Text, {
                        variant: "text-lg/bold",
                        color: "header-primary",
                        children: [h.name, null != p ? (0, i.jsx)(r.default, {
                            className: f.botTag,
                            verified: null != p.public_flags && (0, o.hasFlag)(p.public_flags, c.UserFlags.VERIFIED_BOT)
                        }) : null]
                    }), T.length > 0 ? (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: f.label,
                        children: E.default.Messages.OAUTH2_REQUESTS_ACCOUNT_ACCESS
                    }) : (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: f.label,
                        children: E.default.Messages.OAUTH2_CONNECT_TO_DISCORD
                    }), C ? (0, i.jsx)("div", {
                        className: f.currentUser,
                        children: (0, i.jsxs)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [E.default.Messages.OAUTH2_SIGNED_IN_AS.format({
                                userHook: () => (0, i.jsxs)(s.Text, {
                                    className: f.currentUserTag,
                                    variant: "text-sm/normal",
                                    children: [n.username, !n.isPomelo() && (0, i.jsx)(s.Text, {
                                        className: f.currentUserDiscriminator,
                                        variant: "text-sm/normal",
                                        children: "#".concat(n.discriminator)
                                    })]
                                }, n.id)
                            }), (0, i.jsx)(l.Clickable, {
                                tag: "a",
                                className: f.logoutLink,
                                onClick: () => (0, d.logoutWithRedirect)(m),
                                children: E.default.Messages.OAUTH2_LOGOUT
                            })]
                        })
                    }) : null]
                })
            }