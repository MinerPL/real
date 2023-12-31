            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("65597"),
                u = n("77078"),
                o = n("178406"),
                d = n("553275"),
                c = n("412013"),
                f = n("305961"),
                h = n("957255"),
                p = n("151185"),
                m = n("136281"),
                E = n("49111"),
                C = n("782340"),
                S = n("63893");

            function g(e) {
                let {
                    member: t
                } = e, n = (0, r.default)([f.default], () => f.default.getGuild(t.guildId), [t.guildId]), s = l.useMemo(() => {
                    var e;
                    if (null == n) return [];
                    let a = null !== (e = null == n ? void 0 : n.roles) && void 0 !== e ? e : {};
                    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
                        var n, l, s, i;
                        return null !== (i = null !== (s = null === (n = a[t]) || void 0 === n ? void 0 : n.position) && void 0 !== s ? s : 0 - (null === (l = a[e]) || void 0 === l ? void 0 : l.position)) && void 0 !== i ? i : 0
                    })
                }, [t.roles, t.highestRoleId, n]), g = (0, r.default)([o.default], () => o.default.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), _ = (0, d.useHighestRole)(g), I = new Intl.NumberFormat(C.default.getLocale()).format(s.length), T = (0, d.useContextMenuModerateRoles)(t), v = (0, r.default)([h.default], () => h.default.can(E.Permissions.MANAGE_ROLES, n), [n]);
                return null == n ? null : (0, a.jsx)(u.FormItem, {
                    title: C.default.Messages.ROLES,
                    titleClassName: S.infoTitle,
                    children: (0, a.jsx)(m.UserModInfoItemContainer, {
                        children: (0, a.jsx)(m.UserModInfoItem, {
                            description: (0, a.jsxs)("div", {
                                className: S.roleContainer,
                                children: [null != _ && (0, a.jsx)(c.default, {
                                    className: i(S.roleTooltipItem, S.highestRole),
                                    role: _,
                                    guildId: t.guildId
                                }), s.length > 0 && (0, a.jsx)(u.Tooltip, {
                                    "aria-label": C.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                                    tooltipContentClassName: S.roleTooltip,
                                    allowOverflow: !0,
                                    text: (0, a.jsx)("div", {
                                        className: S.roleTooltipItemContainer,
                                        children: s.map(e => (0, a.jsx)(c.default, {
                                            className: i(S.roleTooltipItem),
                                            role: n.roles[e],
                                            guildId: t.guildId
                                        }, e))
                                    }),
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: n
                                        } = e;
                                        return (0, a.jsx)(u.Clickable, {
                                            className: i(S.otherRoles),
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            children: (0, a.jsxs)(u.Text, {
                                                variant: "text-xs/medium",
                                                color: "header-primary",
                                                children: ["+", I]
                                            })
                                        })
                                    }
                                }), v && (0, a.jsx)(u.Clickable, {
                                    className: i(S.otherRoles, S.addRoleContainer),
                                    onClick: T,
                                    children: (0, a.jsx)(p.default, {
                                        className: i(S.addRoleIcon),
                                        width: m.USER_MOD_ICON_SIZE_PX,
                                        height: m.USER_MOD_ICON_SIZE_PX
                                    })
                                })]
                            })
                        })
                    })
                })
            }