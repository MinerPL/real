            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return et
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("917351"),
                d = l("969176"),
                C = l.n(d),
                r = l("249654"),
                u = l("65597"),
                c = l("669491"),
                f = l("77078"),
                E = l("87657"),
                m = l("149638"),
                M = l("685665"),
                T = l("681937"),
                h = l("509"),
                x = l("654017"),
                _ = l("305961"),
                H = l("957255"),
                A = l("697218"),
                N = l("91551"),
                p = l("4845"),
                g = l("635731"),
                S = l("491401"),
                L = l("663745"),
                I = l("781896"),
                v = l("864982"),
                R = l("151185"),
                j = l("387111"),
                b = l("158998"),
                O = l("536999"),
                D = l("466818"),
                V = l("178406"),
                B = l("150162"),
                y = l("998940"),
                U = l("624663"),
                F = l("553275"),
                w = l("412013"),
                Z = l("451373"),
                P = l("49111"),
                k = l("782340"),
                Y = l("236807");
            let G = n.memo(function(e) {
                let {
                    member: t
                } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, O.isInMembersTableSafetySignalsExperiment)(t.guildId);
                return (0, a.jsxs)("div", {
                    className: i(Y.flagContainer),
                    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
                        text: k.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(p.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_MUTED.css
                            })
                        }
                    }), l && (0, a.jsx)(f.Tooltip, {
                        "aria-label": k.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                        allowOverflow: !0,
                        text: (0, a.jsxs)("div", {
                            className: Y.communicationDisabledTooltip,
                            children: [(0, a.jsx)("div", {
                                children: k.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
                            }), (0, a.jsx)(N.default, {
                                deadline: s,
                                showUnits: !0,
                                stopAtOneSec: !0
                            })]
                        }),
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(S.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_DANGER.css
                            })
                        }
                    }), o && (0, x.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
                        text: k.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(v.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_DANGER.css
                            })
                        }
                    }), o && (0, T.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
                        text: k.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(g.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_MUTED.css
                            })
                        }
                    })]
                })
            });

            function J(e) {
                let {
                    member: t
                } = e, l = (0, u.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
                    var e;
                    if (null == l) return [];
                    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
                    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
                        var l, n, s, i;
                        return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
                    })
                }, [t.roles, t.highestRoleId, l]);
                return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
                    className: Y.roleTooltipItemContainer,
                    children: s.map(e => (0, a.jsx)(w.default, {
                        className: i(Y.roleTooltipItem),
                        role: l.roles[e],
                        guildId: t.guildId
                    }, e))
                })
            }
            let q = n.memo(function(e) {
                    let {
                        member: t,
                        highestRole: l
                    } = e, s = (0, u.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), C = t.roles.length - 1, r = n.useMemo(() => new Intl.NumberFormat(k.default.getLocale()).format(C), [C]), c = (0, F.useContextMenuModerateRoles)(t), E = (0, u.default)([H.default], () => H.default.can(P.Permissions.MANAGE_ROLES, s), [s]), m = n.useCallback(e => () => {
                        d(!0), null == e || e()
                    }, []), M = n.useCallback(e => () => {
                        d(!1), null == e || e()
                    }, []);
                    return null == s ? null : (0, a.jsxs)("div", {
                        className: i(Y.roleContainer),
                        children: [null != l && (0, a.jsx)(w.default, {
                            className: i(Y.roleTooltipItem, Y.highestRole),
                            role: l,
                            guildId: t.guildId
                        }), C > 0 && (0, a.jsx)(f.Tooltip, {
                            "aria-label": k.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
                            tooltipContentClassName: Y.roleTooltip,
                            allowOverflow: !0,
                            text: (0, a.jsx)("div", {
                                className: Y.roleTooltipSafetyContainer,
                                children: o ? (0, a.jsx)(J, {
                                    member: t
                                }) : k.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
                            }),
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                } = e;
                                return (0, a.jsx)(f.Clickable, {
                                    className: i(Y.otherRoles),
                                    onMouseEnter: m(t),
                                    onMouseLeave: M(l),
                                    children: (0, a.jsxs)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-primary",
                                        children: ["+", r]
                                    })
                                })
                            }
                        }), E && (0, a.jsx)(f.Tooltip, {
                            text: k.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                } = e;
                                return (0, a.jsx)(f.Clickable, {
                                    className: i(Y.otherRoles, Y.addRoleContainer),
                                    onClick: c,
                                    onMouseEnter: t,
                                    onMouseLeave: l,
                                    children: (0, a.jsx)(R.default, {
                                        className: i(Y.addRoleIcon),
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }
                        })]
                    })
                }),
                K = n.memo(function(e) {
                    var t;
                    let {
                        member: l,
                        user: n
                    } = e;
                    return null == n || null == l ? null : (0, a.jsxs)("div", {
                        className: i(Y.memberNameContainer),
                        children: [(0, a.jsx)("div", {
                            className: i(Y.memberAvatar),
                            children: (0, a.jsx)(E.default, {
                                user: n
                            })
                        }), (0, a.jsx)("div", {
                            className: i(Y.memberName),
                            children: (0, a.jsx)(f.Text, {
                                variant: "text-sm/medium",
                                children: (0, a.jsx)(f.NameWithRole, {
                                    name: j.default.getName(l.guildId, null, n),
                                    color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
                                    className: i(Y.memberNameText)
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: i(Y.memberGlobalName),
                            children: (0, a.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: b.default.getUserTag(n)
                            })
                        })]
                    })
                });

            function z(e) {
                let t = null == e ? null : (0, y.formatDateRelativeTime)(e, y.MembersTableDateFormats.JOINED_AT),
                    l = new Date(null != e ? e : 0).toLocaleDateString(k.default.getLocale(), y.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
                return {
                    short: t,
                    long: l
                }
            }

            function W(e) {
                let {
                    member: t,
                    showLongDate: l
                } = e, [s, o] = n.useState(null);
                return (n.useEffect(() => {
                    o(z(t.joinedAtTimestamp))
                }, [t.joinedAtTimestamp]), (0, m.default)(() => {
                    o(z(t.joinedAtTimestamp))
                }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
                    className: i(Y.joinedAtContainer),
                    children: (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: s.long
                    })
                }) : (0, a.jsx)("div", {
                    className: i(Y.joinedAtContainer),
                    children: (0, a.jsx)(f.Tooltip, {
                        align: "left",
                        text: s.long,
                        children: e => (0, a.jsx)(f.Text, {
                            ...e,
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: s.short
                        })
                    })
                })
            }
            let X = n.memo(function(e) {
                    let {
                        member: t,
                        showLongDate: l
                    } = e, {
                        accountCreationDateShort: s,
                        accountCreationDateLong: i
                    } = n.useMemo(() => {
                        let e = r.default.extractTimestamp(t.userId),
                            l = (0, y.formatDateRelativeTime)(e, y.MembersTableDateFormats.ACCOUNT_AGE),
                            a = new Date(e).toLocaleDateString(k.default.getLocale(), y.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
                        return {
                            accountCreationDateShort: l,
                            accountCreationDateLong: a
                        }
                    }, [t.userId]);
                    return l ? (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: i
                    }) : (0, a.jsx)(f.Tooltip, {
                        align: "left",
                        text: i,
                        children: e => (0, a.jsx)(f.Text, {
                            ...e,
                            variant: "text-sm/medium",
                            color: "text-normal",
                            children: s
                        })
                    })
                }),
                Q = n.memo(function(e) {
                    var t;
                    let {
                        member: l,
                        user: s,
                        highestRole: o,
                        isHoldingAdvancedInfoKey: d,
                        onOpenModerationMenu: C,
                        onOpenProfileMenu: r,
                        inviterUser: c,
                        inviterMember: E,
                        compact: m
                    } = e, T = (0, u.default)([H.default, _.default], () => H.default.can(P.Permissions.MANAGE_GUILD, _.default.getGuild(l.guildId)), [l.guildId]), {
                        selectedUserIds: h,
                        addUsers: x,
                        removeUser: A
                    } = (0, U.default)(l.guildId), {
                        analyticsLocations: N
                    } = (0, M.default)(), p = null !== (t = null == N ? void 0 : N[0]) && void 0 !== t ? t : null, g = (0, D.useCanAccessBulkBanningFeature)(l.guildId, p, !0), S = (0, D.useCanBulkBanUser)(l.guildId, g, l.userId), v = n.useCallback(e => {
                        e.stopPropagation(), e.preventDefault(), null != l && S && (h.has(l.userId) ? A(l.userId) : x([l.userId]))
                    }, [x, S, l, A, h]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [g && (0, a.jsx)(f.Tooltip, {
                            tooltipClassName: Y.disabledActionTooltip,
                            shouldShow: !S,
                            text: k.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
                            children: e => (0, a.jsx)("td", {
                                ...e,
                                children: (0, a.jsx)("div", {
                                    className: i(Y.checkbox, Y.xsmallCol),
                                    children: (0, a.jsx)(f.Clickable, {
                                        onClick: v,
                                        children: (0, a.jsx)(f.Checkbox, {
                                            type: f.Checkbox.Types.INVERTED,
                                            value: h.has(l.userId),
                                            disabled: !S
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)("td", {
                            className: i({
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(K, {
                                member: l,
                                user: s
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(W, {
                                showLongDate: d,
                                member: l
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(X, {
                                showLongDate: d,
                                member: l
                            })
                        }), T && (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(Z.default, {
                                inviteCode: l.sourceInviteCode,
                                inviterUser: c,
                                inviterMember: E,
                                joinSourceType: l.joinSourceType,
                                integrationType: l.integrationType
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.mediumCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(q, {
                                member: l,
                                highestRole: o
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsx)(G, {
                                member: l
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: m
                            }),
                            children: (0, a.jsxs)("div", {
                                className: i(Y.actionCell),
                                children: [(0, a.jsx)(f.Tooltip, {
                                    text: k.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, a.jsx)(f.Clickable, {
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onClick: r,
                                            className: i(Y.button),
                                            children: (0, a.jsx)(I.default, {
                                                width: $,
                                                height: $
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(f.Tooltip, {
                                    text: k.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, a.jsx)(f.Clickable, {
                                            onMouseEnter: t,
                                            onMouseLeave: l,
                                            onClick: C,
                                            className: i(Y.button),
                                            children: (0, a.jsx)(L.default, {
                                                width: $,
                                                height: $
                                            })
                                        })
                                    }
                                })]
                            })
                        })]
                    })
                }),
                $ = 18,
                ee = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
            var et = n.memo(function(e) {
                var t;
                let {
                    userId: l,
                    guildId: s,
                    style: d,
                    onSelect: r,
                    rowSelected: c,
                    isHoldingAdvancedInfoKey: f = !1,
                    compact: E = !1
                } = e, m = (0, u.default)([V.default], () => V.default.getEnhancedMember(s, l), [s, l]), M = (0, F.useHighestRole)(m), T = (0, u.default)([A.default], () => A.default.getUser(l), [l]), h = (0, u.default)([V.default], () => {
                    var e;
                    return V.default.getEnhancedMember(s, null !== (e = null == m ? void 0 : m.inviterId) && void 0 !== e ? e : "")
                }), x = (0, F.useContextMenuModerateUser)(null != m ? m : void 0), _ = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), x(e)
                }, [x]), H = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), null != m && (null == r || r(m))
                }, [r, m]), N = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), null != m && (0, F.openMemberProfile)(m)
                }, [m]), p = n.useCallback((e, t) => C((0, o.omit)(e, ee), (0, o.omit)(t, ee)), []);
                return null == m ? null : (0, a.jsx)(B.default, {
                    role: "row",
                    value: m,
                    style: d,
                    className: i(Y.roundedRow, Y.memberRowContainer, c && Y.selected),
                    equalityFn: p,
                    onClick: H,
                    onContextMenu: _,
                    children: (0, a.jsx)(Q, {
                        member: m,
                        user: T,
                        highestRole: M,
                        isHoldingAdvancedInfoKey: f,
                        onOpenModerationMenu: _,
                        onOpenProfileMenu: N,
                        inviterUser: null !== (t = null == h ? void 0 : h.user) && void 0 !== t ? t : void 0,
                        inviterMember: h,
                        compact: E
                    })
                })
            })