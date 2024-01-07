            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("866227"),
                n = s.n(i),
                u = s("249654"),
                r = s("446674"),
                o = s("669491"),
                d = s("77078"),
                c = s("272030"),
                E = s("401642"),
                I = s("26989"),
                S = s("697218"),
                f = s("578706"),
                T = s("381546"),
                _ = s("841811"),
                R = s("433487"),
                p = s("549103"),
                m = s("567054"),
                N = s("49111"),
                A = s("782340"),
                M = s("127953");

            function h(e) {
                var t;
                let {
                    guildJoinRequest: i,
                    guild: h,
                    guildJoinRequestUser: g
                } = e, [x, G] = l.useState(!1), {
                    createdAt: C,
                    actionedAt: v,
                    guildId: D,
                    userId: O
                } = i, j = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id, U = (0, r.useStateFromStores)([S.default], () => S.default.getUser(j)), P = (0, r.useStateFromStores)([I.default], () => null != j ? I.default.getMember(D, j) : null, [j, D]), L = l.useCallback(() => {
                    (0, d.showToast)((0, d.createToast)(A.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
                }, []), J = async () => {
                    if (!x) {
                        G(!0);
                        try {
                            await p.default.updateGuildJoinRequest(D, O, m.GuildJoinRequestApplicationStatuses.APPROVED)
                        } catch {
                            L()
                        } finally {
                            G(!1)
                        }
                    }
                }, b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, F = (0, a.jsx)(_.default, {
                    width: 24,
                    height: 24,
                    className: M.icon
                });
                i.applicationStatus === m.GuildJoinRequestApplicationStatuses.APPROVED ? (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, F = (0, a.jsx)(f.default, {
                    width: 24,
                    height: 24,
                    className: M.iconApproved,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                })) : i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, F = (0, a.jsx)(T.default, {
                    width: 24,
                    height: 24,
                    className: M.iconRejected,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                }));
                let B = null != U && null != v ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
                    date: n(u.default.extractTimestamp(v)).format("ll"),
                    usernameHook: function() {
                        var e;
                        return (0, a.jsx)(d.Clickable, {
                            className: M.actionedByUser,
                            onClick: () => (0, E.openUserProfileModal)({
                                userId: U.id,
                                guildId: D,
                                analyticsLocation: {
                                    section: N.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                    object: N.AnalyticsObjects.ACTIONED_BY_USER
                                }
                            }),
                            tag: "div",
                            role: "link",
                            children: (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: null !== (e = null == P ? void 0 : P.nick) && void 0 !== e ? e : U.username
                            })
                        }, "username-hook")
                    }
                }) : n(C).format("lll");
                return (0, a.jsxs)("div", {
                    className: M.container,
                    children: [(0, a.jsxs)("div", {
                        className: M.wrapper,
                        children: [(0, a.jsxs)("div", {
                            className: M.inline,
                            children: [F, (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: b
                                }), (0, a.jsx)(d.Text, {
                                    className: M.headerSubtext,
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: B
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: M.inline,
                            children: [i.applicationStatus === m.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
                                className: M.buttons,
                                children: [(0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.GREEN,
                                    submitting: x,
                                    onClick: () => J(),
                                    children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                                }), (0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.RED,
                                    onClick: () => {
                                        (0, d.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await s.el("155554").then(s.bind(s, "155554"));
                                            return t => (0, a.jsx)(e, {
                                                modalProps: t,
                                                guildId: D,
                                                userId: O,
                                                onError: L
                                            })
                                        })
                                    },
                                    disabled: x,
                                    children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
                                })]
                            }), (0, a.jsx)(d.Clickable, {
                                onClick: e => {
                                    (0, c.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await s.el("176032").then(s.bind(s, "176032"));
                                        return t => (0, a.jsx)(e, {
                                            ...t,
                                            guild: h,
                                            user: g
                                        })
                                    })
                                },
                                className: M.overflow,
                                children: (0, a.jsx)(R.default, {
                                    width: 20,
                                    height: 20,
                                    className: M.iconInteractive
                                })
                            })]
                        })]
                    }), i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && null != i.rejectionReason && (0, a.jsx)("div", {
                        className: M.rejectionReason,
                        children: (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: i.rejectionReason
                        })
                    })]
                })
            }