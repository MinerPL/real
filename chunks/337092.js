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
                m = l("87657"),
                E = l("149638"),
                M = l("685665"),
                h = l("681937"),
                T = l("509"),
                x = l("654017"),
                H = l("305961"),
                _ = l("957255"),
                A = l("697218"),
                L = l("91551"),
                g = l("4845"),
                N = l("635731"),
                p = l("491401"),
                S = l("663745"),
                v = l("781896"),
                R = l("864982"),
                I = l("151185"),
                j = l("387111"),
                b = l("158998"),
                D = l("536999"),
                O = l("466818"),
                V = l("178406"),
                B = l("150162"),
                F = l("998940"),
                U = l("290491"),
                w = l("624663"),
                Z = l("553275"),
                k = l("412013"),
                y = l("49111"),
                P = l("782340"),
                Y = l("236807");
            let G = n.memo(function(e) {
                let {
                    member: t
                } = e, l = n.useMemo(() => (0, T.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, D.isInMembersTableSafetySignalsExperiment)(t.guildId);
                return (0, a.jsxs)("div", {
                    className: i(Y.flagContainer),
                    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
                        text: P.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
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
                    }), l && (0, a.jsx)(f.Tooltip, {
                        "aria-label": P.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
                        allowOverflow: !0,
                        text: (0, a.jsxs)("div", {
                            className: Y.communicationDisabledTooltip,
                            children: [(0, a.jsx)("div", {
                                children: P.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
                            }), (0, a.jsx)(L.default, {
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
                            return (0, a.jsx)(p.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_DANGER.css
                            })
                        }
                    }), o && (0, x.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
                        text: P.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(R.default, {
                                width: 20,
                                height: 20,
                                onMouseEnter: t,
                                onMouseLeave: l,
                                color: c.default.colors.TEXT_DANGER.css
                            })
                        }
                    }), o && (0, h.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
                        text: P.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: l
                            } = e;
                            return (0, a.jsx)(N.default, {
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

            function q(e) {
                let {
                    member: t
                } = e, l = (0, u.default)([H.default], () => H.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
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
                    children: s.map(e => (0, a.jsx)(k.default, {
                        className: i(Y.roleTooltipItem),
                        role: l.roles[e],
                        guildId: t.guildId
                    }, e))
                })
            }
            let K = n.memo(function(e) {
                    let {
                        member: t,
                        highestRole: l
                    } = e, s = (0, u.default)([H.default], () => H.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), C = t.roles.length - 1, r = n.useMemo(() => new Intl.NumberFormat(P.default.getLocale()).format(C), [C]), c = (0, Z.useContextMenuModerateRoles)(t), m = (0, u.default)([_.default], () => _.default.can(y.Permissions.MANAGE_ROLES, s), [s]), E = n.useCallback(e => () => {
                        d(!0), null == e || e()
                    }, []), M = n.useCallback(e => () => {
                        d(!1), null == e || e()
                    }, []);
                    return null == s ? null : (0, a.jsxs)("div", {
                        className: i(Y.roleContainer),
                        children: [null != l && (0, a.jsx)(k.default, {
                            className: i(Y.roleTooltipItem, Y.highestRole),
                            role: l,
                            guildId: t.guildId
                        }), C > 0 && (0, a.jsx)(f.Tooltip, {
                            "aria-label": P.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
                            tooltipContentClassName: Y.roleTooltip,
                            allowOverflow: !0,
                            text: (0, a.jsx)("div", {
                                className: Y.roleTooltipSafetyContainer,
                                children: o ? (0, a.jsx)(q, {
                                    member: t
                                }) : P.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
                            }),
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                } = e;
                                return (0, a.jsx)(f.Clickable, {
                                    className: i(Y.otherRoles),
                                    onMouseEnter: E(t),
                                    onMouseLeave: M(l),
                                    children: (0, a.jsxs)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-primary",
                                        children: ["+", r]
                                    })
                                })
                            }
                        }), m && (0, a.jsx)(f.Tooltip, {
                            text: P.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
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
                                    children: (0, a.jsx)(I.default, {
                                        className: i(Y.addRoleIcon),
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }
                        })]
                    })
                }),
                z = n.memo(function(e) {
                    var t;
                    let {
                        member: l,
                        user: n
                    } = e;
                    return null == n || null == l ? null : (0, a.jsxs)("div", {
                        className: i(Y.memberNameContainer),
                        children: [(0, a.jsx)("div", {
                            className: i(Y.memberAvatar),
                            children: (0, a.jsx)(m.default, {
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

            function W(e) {
                let t = null == e ? null : (0, F.formatDateRelativeTime)(e, F.MembersTableDateFormats.JOINED_AT),
                    l = new Date(null != e ? e : 0).toLocaleDateString(P.default.getLocale(), F.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
                return {
                    short: t,
                    long: l
                }
            }

            function J(e) {
                let {
                    member: t,
                    showLongDate: l
                } = e, [s, o] = n.useState(null);
                return (n.useEffect(() => {
                    o(W(t.joinedAtTimestamp))
                }, [t.joinedAtTimestamp]), (0, E.default)(() => {
                    o(W(t.joinedAtTimestamp))
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
            let Q = n.memo(function(e) {
                    let {
                        member: t,
                        showLongDate: l
                    } = e, {
                        accountCreationDateShort: s,
                        accountCreationDateLong: i
                    } = n.useMemo(() => {
                        let e = r.default.extractTimestamp(t.userId),
                            l = (0, F.formatDateRelativeTime)(e, F.MembersTableDateFormats.ACCOUNT_AGE),
                            a = new Date(e).toLocaleDateString(P.default.getLocale(), F.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
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
                X = n.memo(function(e) {
                    var t;
                    let {
                        member: l,
                        user: s,
                        highestRole: o,
                        isHoldingAdvancedInfoKey: d,
                        onOpenModerationMenu: C,
                        onOpenProfileMenu: r,
                        compact: c
                    } = e, m = (0, u.default)([_.default, H.default], () => _.default.can(y.Permissions.MANAGE_GUILD, H.default.getGuild(l.guildId)), [l.guildId]), {
                        selectedUserIds: E,
                        addUsers: h,
                        removeUser: T
                    } = (0, w.default)(l.guildId), {
                        analyticsLocations: x
                    } = (0, M.default)(), A = null !== (t = null == x ? void 0 : x[0]) && void 0 !== t ? t : null, L = (0, O.useCanAccessBulkBanningFeature)(l.guildId, A, !0), g = (0, O.useCanBulkBanUser)(l.guildId, L, l.userId), N = n.useCallback(e => {
                        e.stopPropagation(), e.preventDefault(), null != l && g && (E.has(l.userId) ? T(l.userId) : h([l.userId]))
                    }, [h, g, l, T, E]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [L && (0, a.jsx)(f.Tooltip, {
                            tooltipClassName: Y.disabledActionTooltip,
                            shouldShow: !g,
                            text: P.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
                            children: e => (0, a.jsx)("td", {
                                ...e,
                                children: (0, a.jsx)("div", {
                                    className: i(Y.checkbox, Y.xsmallCol),
                                    children: (0, a.jsx)(f.Clickable, {
                                        onClick: N,
                                        children: (0, a.jsx)(f.Checkbox, {
                                            type: f.Checkbox.Types.INVERTED,
                                            value: E.has(l.userId),
                                            disabled: !g
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)("td", {
                            className: i({
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(z, {
                                member: l,
                                user: s
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(J, {
                                showLongDate: d,
                                member: l
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(Q, {
                                showLongDate: d,
                                member: l
                            })
                        }), m && (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(U.default, {
                                userId: l.userId,
                                guildId: l.guildId
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.mediumCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(K, {
                                member: l,
                                highestRole: o
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsx)(G, {
                                member: l
                            })
                        }), (0, a.jsx)("td", {
                            className: i(Y.smallCol, {
                                [Y.compact]: c
                            }),
                            children: (0, a.jsxs)("div", {
                                className: i(Y.actionCell),
                                children: [(0, a.jsx)(f.Tooltip, {
                                    text: P.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
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
                                            children: (0, a.jsx)(v.default, {
                                                width: $,
                                                height: $
                                            })
                                        })
                                    }
                                }), (0, a.jsx)(f.Tooltip, {
                                    text: P.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
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
                                            children: (0, a.jsx)(S.default, {
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
                let {
                    userId: t,
                    guildId: l,
                    style: s,
                    onSelect: d,
                    rowSelected: r,
                    isHoldingAdvancedInfoKey: c = !1,
                    compact: f = !1
                } = e, m = (0, u.default)([V.default], () => V.default.getEnhancedMember(l, t), [l, t]), E = (0, Z.useHighestRole)(m), M = (0, u.default)([A.default], () => A.default.getUser(t), [t]), h = (0, Z.useContextMenuModerateUser)(null != m ? m : void 0), T = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), h(e)
                }, [h]), x = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), null != m && (null == d || d(m))
                }, [d, m]), H = n.useCallback(e => {
                    e.stopPropagation(), e.preventDefault(), null != m && (0, Z.openMemberProfile)(m)
                }, [m]), _ = n.useCallback((e, t) => C((0, o.omit)(e, ee), (0, o.omit)(t, ee)), []);
                return null == m ? null : (0, a.jsx)(B.default, {
                    role: "row",
                    value: m,
                    style: s,
                    className: i(Y.roundedRow, Y.memberRowContainer, r && Y.selected),
                    equalityFn: _,
                    onClick: x,
                    onContextMenu: T,
                    children: (0, a.jsx)(X, {
                        member: m,
                        user: M,
                        highestRole: E,
                        isHoldingAdvancedInfoKey: c,
                        onOpenModerationMenu: T,
                        onOpenProfileMenu: H,
                        compact: f
                    })
                })
            })