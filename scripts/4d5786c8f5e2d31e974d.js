(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25960"], {
        59709: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                u = l.n(i),
                s = l("446674"),
                o = l("872717"),
                r = l("77078"),
                d = l("130037"),
                c = l("271938"),
                E = l("26989"),
                _ = l("305961"),
                N = l("957255"),
                A = l("697218"),
                M = l("599110"),
                f = l("158998"),
                v = l("49111"),
                C = l("782340"),
                I = l("244369");

            function m(e) {
                let {
                    disabled: t = !1,
                    user: l,
                    setNickname: i,
                    nickname: s,
                    error: o,
                    hasNick: d
                } = e, E = a.useRef(null), _ = a.useCallback(() => {
                    var e;
                    i(""), null === (e = E.current) || void 0 === e || e.focus()
                }, [i]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [t || null == l || l.id === c.default.getId() ? null : (0, n.jsx)(r.Card, {
                        type: r.Card.Types.WARNING,
                        className: I.card,
                        children: (0, n.jsx)(r.Text, {
                            className: I.warning,
                            variant: "text-md/normal",
                            children: C.default.Messages.CHANGE_NICKNAME_WARNING
                        })
                    }), (0, n.jsx)(r.FormTitle, {
                        className: u(I.itemGroup, {
                            [I.disabled]: t
                        }),
                        children: t ? C.default.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED : C.default.Messages.NICKNAME
                    }), (0, n.jsx)(r.TextInput, {
                        disabled: t,
                        inputRef: E,
                        maxLength: v.USERNAME_MAX_LENGTH,
                        value: s,
                        placeholder: f.default.getName(l),
                        onChange: i,
                        autoFocus: !0
                    }), null != o ? (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: I.nickError,
                        children: o
                    }) : null, d && !t ? (0, n.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.LINK,
                        size: r.Button.Sizes.NONE,
                        onClick: _,
                        className: I.reset,
                        children: C.default.Messages.RESET_NICKNAME
                    }) : null]
                })
            }
            var g = function(e) {
                var t;
                let {
                    transitionState: l,
                    user: i,
                    guildId: u,
                    onClose: c,
                    analyticsSource: f,
                    analyticsLocations: g
                } = e, k = (0, s.useStateFromStores)([E.default], () => null != u ? E.default.getMember(u, i.id) : null), T = (0, s.useStateFromStores)([N.default, A.default, _.default], () => {
                    var e;
                    let t = _.default.getGuild(u);
                    return null != t && ((null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === i.id ? N.default.can(v.Permissions.CHANGE_NICKNAME, t) || N.default.can(v.Permissions.MANAGE_NICKNAMES, t) : N.default.canManageUser(v.Permissions.MANAGE_NICKNAMES, i.id, t))
                }), [S, R] = a.useState(!1), [h, D] = a.useState(null !== (t = null == k ? void 0 : k.nick) && void 0 !== t ? t : ""), [y, b] = a.useState({});
                a.useEffect(() => {
                    M.default.track(v.AnalyticEvents.OPEN_MODAL, {
                        type: "Change Server Identity",
                        location: v.AnalyticsPages.GUILD_CHANNEL,
                        source: f
                    })
                }, []);
                let p = (0, d.useTrackModerationAction)(u, {
                        location: null == g ? void 0 : g[0],
                        targetUserId: i.id
                    }),
                    L = a.useCallback(async e => {
                        var t, l, n, a, s, r, E, _, N;
                        e.preventDefault();
                        let A = null;
                        if (h !== (null !== (t = null == k ? void 0 : k.nick) && void 0 !== t ? t : "") && ((A = null != A ? A : {}).nick = h), null == A) {
                            c();
                            return
                        }
                        try {
                            R(!0), await o.default.patch({
                                url: v.Endpoints.GUILD_MEMBER(u, i.id),
                                body: A
                            }), p(d.ModerationActionType.CHANGE_NICKNAME), c()
                        } catch (i) {
                            let e;
                            R(!1);
                            let t = null !== (n = null === (l = i.body) || void 0 === l ? void 0 : l.errors) && void 0 !== n ? n : null;
                            (null == t ? void 0 : t.nick) != null ? e = (null === (r = t.nick) || void 0 === r ? void 0 : null === (s = r._errors) || void 0 === s ? void 0 : null === (a = s[0]) || void 0 === a ? void 0 : a.message) || C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR : (null == t ? void 0 : t.username) != null && (e = (null === (N = t.username) || void 0 === N ? void 0 : null === (_ = N._errors) || void 0 === _ ? void 0 : null === (E = _[0]) || void 0 === E ? void 0 : E.message) || C.default.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR), b({
                                nick: e
                            })
                        }
                    }, [u, h, c, i, k, p]);
                return (0, n.jsx)(r.ModalRoot, {
                    "aria-label": C.default.Messages.CHANGE_IDENTITY,
                    transitionState: l,
                    children: (0, n.jsxs)("form", {
                        onSubmit: L,
                        children: [(0, n.jsx)(r.ModalHeader, {
                            separator: !1,
                            children: (0, n.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: C.default.Messages.CHANGE_NICKNAME
                            })
                        }), (0, n.jsx)(r.ModalContent, {
                            className: I.modalContent,
                            children: (0, n.jsx)(m, {
                                disabled: !T,
                                user: i,
                                error: y.nick,
                                nickname: h,
                                setNickname: D,
                                hasNick: (null == k ? void 0 : k.nick) != null
                            })
                        }), (0, n.jsxs)(r.ModalFooter, {
                            children: [(0, n.jsx)(r.Button, {
                                type: "submit",
                                disabled: S,
                                children: C.default.Messages.SAVE
                            }), (0, n.jsx)(r.Button, {
                                onClick: c,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                children: C.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        },
        130037: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useTrackMemberSearchUsed: function() {
                    return N
                },
                useTrackMemberFilterRolesUsed: function() {
                    return A
                },
                MemberSafetyFlagType: function() {
                    return i
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return M
                },
                ModerationActionType: function() {
                    return u
                },
                useTrackModerationAction: function() {
                    return f
                },
                trackMembersPageViewed: function() {
                    return v
                }
            });
            var n, a, i, u, s = l("884691"),
                o = l("812204"),
                r = l("716241"),
                d = l("271938"),
                c = l("599110"),
                E = l("49111");

            function _(e, t, l) {
                var n;
                let a = {
                    ...t,
                    ...(0, r.collectGuildAnalyticsMetadata)(null !== (n = t.guild_id) && void 0 !== n ? n : l)
                };
                c.default.track(e, a)
            }

            function N(e) {
                let t = s.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function A(e) {
                let t = s.useCallback(t => {
                    ! function(e, t) {
                        let l = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, l)
                    }(e, t)
                }, [e]);
                return t
            }(n = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", n.COMMUNICATION_DISABLED = "communication_disabled";

            function M(e) {
                let t = s.useCallback(t => {
                    ! function(e, t) {
                        let l = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, l)
                    }(e, t)
                }, [e]);
                return t
            }

            function f(e, t) {
                let {
                    location: l,
                    targetUserId: n,
                    targets: a
                } = t, i = s.useCallback(t => {
                    let i = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: l,
                        target_user_id: null != n ? n : void 0,
                        targets: null != a ? a : void 0
                    };
                    _(E.AnalyticEvents.MODERATION_ACTION, i)
                }, [e, l, n, a]);
                return i
            }

            function v(e, t) {
                _(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(a = u || (u = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        }
    }
]);