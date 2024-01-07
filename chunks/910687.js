            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("87657"),
                d = s("612039"),
                u = s("945330"),
                c = s("987772"),
                E = s("467094"),
                _ = s("41170"),
                T = s("782340"),
                I = s("9278"),
                S = e => {
                    let {
                        className: t,
                        isDisabled: l,
                        sticker: S,
                        canManageSticker: N
                    } = e, [g, f] = n.useState(!1), [A, L] = (0, d.default)(null, 4e3), m = () => {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("54666").then(s.bind(s, "54666"));
                            return t => (0, a.jsx)(e, {
                                sticker: S,
                                guildId: S.guild_id,
                                ...t
                            })
                        })
                    }, C = async () => {
                        L(null), f(!0);
                        try {
                            await (0, E.deleteGuildSticker)(S)
                        } catch (e) {
                            L(e.body.message), f(!1)
                        }
                    };
                    return (0, a.jsx)(r.Tooltip, {
                        color: r.Tooltip.Colors.RED,
                        forceOpen: null != A,
                        text: A,
                        children: () => (0, a.jsxs)("div", {
                            className: i(I.wrapper, t, {
                                [I.wrapperDisabled]: l
                            }),
                            children: [(0, a.jsxs)("div", {
                                className: i(I.content, {
                                    [I.contentRemoving]: g
                                }),
                                children: [(0, a.jsx)(_.default, {
                                    className: I.sticker,
                                    size: 72,
                                    sticker: S
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)(r.Text, {
                                        color: "header-primary",
                                        variant: "text-xs/semibold",
                                        className: I.stickerName,
                                        children: S.name
                                    }), null != S.user && (0, a.jsxs)("div", {
                                        className: I.user,
                                        children: [(0, a.jsx)(o.default, {
                                            className: I.userAvatar,
                                            size: r.AvatarSizes.SIZE_16,
                                            user: S.user
                                        }), (0, a.jsx)(r.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: S.user.username
                                        })]
                                    })]
                                }), N ? (0, a.jsxs)("div", {
                                    className: I.actions,
                                    children: [(0, a.jsx)(r.Clickable, {
                                        className: i(I.action, I.actionEdit),
                                        onClick: m,
                                        "aria-label": T.default.Messages.EDIT,
                                        children: (0, a.jsx)(c.default, {
                                            className: I.icon
                                        })
                                    }), (0, a.jsx)(r.Clickable, {
                                        className: i(I.action, I.actionRemove),
                                        onClick: C,
                                        "aria-label": T.default.Messages.REMOVE,
                                        children: (0, a.jsx)(u.default, {
                                            className: I.icon
                                        })
                                    })]
                                }) : null]
                            }), g && (0, a.jsx)(r.Spinner, {
                                className: I.spinner
                            })]
                        })
                    })
                }