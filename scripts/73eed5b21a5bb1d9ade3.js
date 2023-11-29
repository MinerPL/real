(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49650"], {
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l, i, o = n("37983"),
                r = n("884691"),
                u = n("748820"),
                a = n("599110"),
                d = n("117362"),
                c = n("49111");
            (l = class extends r.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: l,
                        page: i,
                        object: r,
                        objectType: u,
                        children: d
                    } = this.props, c = this.mergeLocation(e.location, this.getLocation(i, l, r, u)), s = this.getContext(c, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, o.jsx)(a.AnalyticsContext.Provider, {
                        value: s,
                        children: d
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, o.jsx)(a.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, d.cachedFunction)((e, t, n, l) => {
                        let i = {};
                        return null != e && (i.page = e), null != t && (i.section = t), null != n && (i.object = n), null != l && (i.objectType = l), i
                    }), this.mergeLocation = (0, d.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, d.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, u.v4)())
                }
            }).Pages = c.AnalyticsPages, l.Sections = c.AnalyticsSections, l.Objects = c.AnalyticsObjects, l.ObjectTypes = c.AnalyticsObjectTypes, l.defaultProps = {
                root: !1
            }, i = l
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("901582");

            function o(e, t) {
                return function(n) {
                    return (0, l.jsx)(i.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, l.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("685665");

            function o(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: o
                    } = (0, i.default)(t);
                    return (0, l.jsx)(o, {
                        children: (0, l.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return E
                },
                useTrackMemberFilterRolesUsed: function() {
                    return M
                },
                MemberSafetyFlagType: function() {
                    return o
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return A
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return h
                },
                trackMembersPageViewed: function() {
                    return v
                }
            });
            var l, i, o, r, u = n("884691"),
                a = n("812204"),
                d = n("716241"),
                c = n("271938"),
                s = n("599110"),
                f = n("49111");

            function _(e, t, n) {
                var l;
                let i = {
                    ...t,
                    ...(0, d.collectGuildAnalyticsMetadata)(null !== (l = t.guild_id) && void 0 !== l ? l : n)
                };
                s.default.track(e, i)
            }

            function E(e) {
                let t = u.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function M(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(l = o || (o = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled";

            function A(e) {
                let t = u.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function h(e, t) {
                let {
                    location: n,
                    targetUserId: l,
                    targets: i
                } = t, o = u.useCallback(t => {
                    let o = {
                        action_type: t,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != l ? l : void 0,
                        targets: null != i ? i : void 0
                    };
                    _(f.AnalyticEvents.MODERATION_ACTION, o)
                }, [e, n, l, i]);
                return o
            }

            function v(e, t) {
                _(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(i = r || (r = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"
        },
        522651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("272030"),
                r = n("838446"),
                u = n("158534"),
                a = n("812204"),
                d = n("685665"),
                c = n("97508"),
                s = n("49111"),
                f = n("782340"),
                _ = (0, u.default)((0, r.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: r,
                        onSelect: u,
                        analyticsLocations: s,
                        onCloseContextMenu: _
                    } = e, {
                        analyticsLocations: E
                    } = (0, d.default)(a.default.CONTEXT_MENU), M = null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : E[0], A = (0, c.default)(n.id, r, !0, M);
                    return (0, l.jsx)(i.Menu, {
                        navId: "guild-moderation-roles",
                        onClose: () => {
                            (0, o.closeContextMenu)(), null == _ || _()
                        },
                        "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: u,
                        children: (0, l.jsx)(i.MenuGroup, {
                            children: A
                        })
                    })
                }, {
                    object: s.AnalyticsObjects.CONTEXT_MENU
                }), [a.default.CONTEXT_MENU, a.default.GUILD_MODERATION_USER_MENU])
        },
        97508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("509043"),
                o = n("446674"),
                r = n("77078"),
                u = n("206230"),
                a = n("130037"),
                d = n("592407"),
                c = n("26989"),
                s = n("305961"),
                f = n("957255"),
                _ = n("449008"),
                E = n("49111"),
                M = n("782340"),
                A = n("640659");

            function h(e, t) {
                var n, o;
                return (0, l.jsxs)("div", {
                    className: A.roleRow,
                    children: ["dot" === t ? (0, l.jsx)(r.RoleDot, {
                        className: A.roleDot,
                        color: null !== (n = e.colorString) && void 0 !== n ? n : (0, i.int2hex)(E.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, l.jsx)(r.RoleCircle, {
                        className: A.roleDot,
                        color: null !== (o = e.colorString) && void 0 !== o ? o : (0, i.int2hex)(E.DEFAULT_ROLE_COLOR)
                    }), (0, l.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function v(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    A = (0, o.useStateFromStores)([s.default], () => s.default.getGuild(t), [t]),
                    v = (0, o.useStateFromStores)([u.default], () => u.default.roleStyle),
                    g = (0, a.useTrackModerationAction)(t, {
                        location: i,
                        targetUserId: e
                    }),
                    {
                        userRoles: O,
                        isGuildMember: T,
                        canManageRoles: b
                    } = (0, o.useStateFromStoresObject)([c.default, f.default], () => {
                        let n = c.default.getMember(t, e);
                        return {
                            userRoles: null != n ? n.roles : [],
                            isGuildMember: null != n,
                            canManageRoles: null != A && f.default.can(E.Permissions.MANAGE_ROLES, A)
                        }
                    }, [e, t, A]);
                if (__OVERLAY__ || null == O || null == A || !T) return null;
                let m = f.default.getHighestRole(A),
                    p = Object.values(A.roles).filter(e => e.id !== A.id),
                    R = b ? p.map(n => {
                        let i = n.managed || !f.default.isRoleHigher(A, m, n),
                            o = -1 !== O.indexOf(n.id);
                        return i && !o ? null : (0, l.jsx)(r.MenuCheckboxItem, {
                            id: n.id,
                            label: () => h(n, v),
                            disabled: i,
                            action: () => {
                                var l;
                                return l = n, void(O.includes(l.id) ? (d.default.updateMemberRoles(t, e, O.filter(e => e !== l.id), [], [l.id]), g(a.ModerationActionType.REMOVE_ROLE)) : (d.default.updateMemberRoles(t, e, O.concat([l.id]), [l.id], []), g(a.ModerationActionType.ADD_ROLE)))
                            },
                            checked: o
                        }, n.id)
                    }) : p.filter(e => -1 !== O.indexOf(e.id)).map(e => e.id === A.id ? null : (0, l.jsx)(r.MenuItem, {
                        id: e.id,
                        label: () => h(e, v)
                    }, e.id));
                return 0 === R.filter(_.isNotNullish).length ? null : n ? R : (0, l.jsx)(r.MenuItem, {
                    id: "roles",
                    label: M.default.Messages.ROLES_LIST.format({
                        numRoles: R.length
                    }),
                    children: R
                })
            }
        }
    }
]);