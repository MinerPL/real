(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78075"], {
        158534: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("685665");

            function i(e, t) {
                return function(l) {
                    let {
                        AnalyticsLocationProvider: i
                    } = (0, u.default)(t);
                    return (0, n.jsx)(i, {
                        children: (0, n.jsx)(e, {
                            ...l
                        })
                    })
                }
            }
        },
        471085: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("77078"),
                i = l("272030"),
                r = l("901582"),
                o = l("158534"),
                a = l("812204"),
                d = l("861370"),
                s = l("421602"),
                c = l("806179"),
                f = l("97508"),
                M = l("49111"),
                O = l("782340"),
                h = (0, o.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        analyticsContext: o,
                        onSelect: a
                    } = e, h = (0, c.default)(t.id), p = (0, f.default)(t.id, l), x = (0, d.default)({
                        id: t.id,
                        label: O.default.Messages.COPY_ID_USER
                    }), E = (0, s.default)(t.id), _ = t.isNonUserBot();
                    return (0, n.jsx)(r.default, {
                        context: o,
                        object: M.AnalyticsObjects.CONTEXT_MENU,
                        children: (0, n.jsxs)(u.Menu, {
                            navId: "user-context",
                            onClose: i.closeContextMenu,
                            "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                            onSelect: a,
                            children: [(0, n.jsxs)(u.MenuGroup, {
                                children: [!_ && h, !_ && E]
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: !_ && p
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: x
                            })]
                        })
                    })
                }, [a.default.CONTEXT_MENU, a.default.AUDIT_LOG_USER_MENU])
        },
        421602: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("77078"),
                i = l("450911"),
                r = l("54239"),
                o = l("271938"),
                a = l("49111"),
                d = l("782340");

            function s(e, t) {
                let l = o.default.getId(),
                    s = t === a.AppContext.POPOUT;
                return l === e || s ? null : (0, n.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: d.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        i.default.openPrivateChannel(e), (0, r.popLayer)()
                    }
                })
            }
        },
        806179: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983"),
                u = l("884691"),
                i = l("77078"),
                r = l("244201"),
                o = l("401642"),
                a = l("599110"),
                d = l("49111"),
                s = l("782340");

            function c(e, t, l) {
                let c = u.useContext(a.AnalyticsContext),
                    f = (0, r.useWindowDispatch)();
                return (0, n.jsx)(i.MenuItem, {
                    id: "user-profile",
                    label: s.default.Messages.PROFILE,
                    action: () => {
                        (0, o.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != l ? l : void 0,
                            analyticsLocation: c.location
                        }), f.dispatch(d.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        97508: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("509043"),
                i = l("446674"),
                r = l("77078"),
                o = l("206230"),
                a = l("130037"),
                d = l("592407"),
                s = l("26989"),
                c = l("305961"),
                f = l("957255"),
                M = l("449008"),
                O = l("49111"),
                h = l("782340"),
                p = l("640659");

            function x(e, t) {
                var l, i;
                return (0, n.jsxs)("div", {
                    className: p.roleRow,
                    children: ["dot" === t ? (0, n.jsx)(r.RoleDot, {
                        className: p.roleDot,
                        color: null !== (l = e.colorString) && void 0 !== l ? l : (0, u.int2hex)(O.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, n.jsx)(r.RoleCircle, {
                        className: p.roleDot,
                        color: null !== (i = e.colorString) && void 0 !== i ? i : (0, u.int2hex)(O.DEFAULT_ROLE_COLOR)
                    }), (0, n.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function E(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    p = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]),
                    E = (0, i.useStateFromStores)([o.default], () => o.default.roleStyle),
                    _ = (0, a.useTrackModerationAction)(t, {
                        location: u,
                        targetUserId: e
                    }),
                    {
                        userRoles: R,
                        isGuildMember: m,
                        canManageRoles: g
                    } = (0, i.useStateFromStoresObject)([s.default, f.default], () => {
                        let l = s.default.getMember(t, e);
                        return {
                            userRoles: null != l ? l.roles : [],
                            isGuildMember: null != l,
                            canManageRoles: null != p && f.default.can(O.Permissions.MANAGE_ROLES, p)
                        }
                    }, [e, t, p]);
                if (__OVERLAY__ || null == R || null == p || !m) return null;
                let v = f.default.getHighestRole(p),
                    S = Object.values(p.roles).filter(e => e.id !== p.id),
                    b = g ? S.map(l => {
                        let u = l.managed || !f.default.isRoleHigher(p, v, l),
                            i = -1 !== R.indexOf(l.id);
                        return u && !i ? null : (0, n.jsx)(r.MenuCheckboxItem, {
                            id: l.id,
                            label: () => x(l, E),
                            disabled: u,
                            action: () => {
                                var n;
                                return n = l, void(R.includes(n.id) ? (d.default.updateMemberRoles(t, e, R.filter(e => e !== n.id), [], [n.id]), _(a.ModerationActionType.REMOVE_ROLE)) : (d.default.updateMemberRoles(t, e, R.concat([n.id]), [n.id], []), _(a.ModerationActionType.ADD_ROLE)))
                            },
                            checked: i
                        }, l.id)
                    }) : S.filter(e => -1 !== R.indexOf(e.id)).map(e => e.id === p.id ? null : (0, n.jsx)(r.MenuItem, {
                        id: e.id,
                        label: () => x(e, E)
                    }, e.id));
                return 0 === b.filter(M.isNotNullish).length ? null : l ? b : (0, n.jsx)(r.MenuItem, {
                    id: "roles",
                    label: h.default.Messages.ROLES_LIST.format({
                        numRoles: b.length
                    }),
                    children: b
                })
            }
        }
    }
]);