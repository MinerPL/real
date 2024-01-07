            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return u
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return o
                },
                useTrackModerationAction: function() {
                    return I
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, l, u, o, r = n("884691"),
                a = n("812204"),
                s = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function f(e, t, n) {
                var i;
                let l = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, l)
            }

            function _(e) {
                let t = r.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

            function S(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function I(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: l
                } = t, u = r.useCallback(t => {
                    let u = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != l ? l : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, u)
                }, [e, n, i, l]);
                return u
            }

            function N(e, t) {
                f(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(l = o || (o = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"