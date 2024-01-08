            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("669491"),
                d = a("77078"),
                l = a("450911"),
                s = a("145079"),
                i = a("87657"),
                o = a("697218"),
                f = a("782340"),
                c = a("839938");

            function m(e) {
                let {
                    color: t,
                    className: a
                } = e;
                return (0, n.jsx)("svg", {
                    className: a,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, n.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, n.jsxs)("g", {
                            stroke: t,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, n.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, n.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, n.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, n.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function M(e, t) {
                let a = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return null == a || t.ownerId !== a.id || e.id === a.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, n.jsx)(d.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: f.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var u;
                        return u = a, void(0, d.openModal)(a => (0, n.jsxs)(d.ConfirmModal, {
                            bodyClassName: c.confirmModal,
                            header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: f.default.Messages.CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: () => l.default.setDMOwner(t.id, e.id),
                            ...a,
                            children: [(0, n.jsx)(m, {
                                color: r.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, n.jsxs)("div", {
                                className: c.fromToWrapper,
                                children: [(0, n.jsx)("div", {
                                    className: c.from,
                                    children: (0, n.jsx)(i.default, {
                                        user: u,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                }), (0, n.jsx)("div", {
                                    className: c.to,
                                    children: (0, n.jsx)(i.default, {
                                        user: e,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, a) => (0, n.jsx)(s.default, {
                                        usernameIcon: (0, n.jsx)(d.Avatar, {
                                            className: c.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: d.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: c.discordTag,
                                        usernameClass: c.username,
                                        discriminatorClass: c.discriminator,
                                        user: e
                                    }, a)
                                })
                            })]
                        }))
                    }
                })
            }