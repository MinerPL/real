            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentUser: function() {
                    return f
                },
                acceptAgreements: function() {
                    return h
                },
                setFlag: function() {
                    return p
                },
                getUser: function() {
                    return T
                },
                fetchProfile: function() {
                    return C
                },
                fetchMutualFriends: function() {
                    return m
                }
            }), n("702976");
            var i = n("627445"),
                a = n.n(i),
                l = n("33112"),
                s = n("811022"),
                r = n("872717"),
                u = n("913144"),
                o = n("766274"),
                d = n("697218"),
                c = n("840707"),
                _ = n("49111");
            let E = new s.default("UserProfileModalActionCreators");

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return r.default.get({
                    url: _.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new o.default(e.body)))
            }

            function h() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return c.default.patch({
                    url: _.Endpoints.USER_AGREEMENTS,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_ACCEPT_AGREEMENTS
                    },
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function p(e, t) {
                let n = d.default.getCurrentUser();
                a(null != n, "setFlag: user cannot be undefined");
                let i = t ? n.flags | e : n.flags & ~e;
                return r.default.patch({
                    url: _.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: i
                    }
                })
            }

            function T(e) {
                let t = d.default.getUser(e);
                return null != t ? Promise.resolve(t) : r.default.get({
                    url: _.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (u.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), d.default.getUser(e)))
            }
            async function C(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: n,
                    withMutualFriendsCount: i,
                    guildId: a,
                    connectionsRoleId: l
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0;
                u.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let o = await r.default.get({
                        url: _.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: n,
                            with_mutual_friends_count: i,
                            guild_id: a,
                            connections_role_id: l
                        },
                        oldFormErrors: !0
                    });
                    return null == s || s(o.body, a), u.default.dispatch({
                        type: "USER_UPDATE",
                        user: o.body.user
                    }), u.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...o.body
                    }), null != a && null != o.body.guild_member && u.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: a,
                        guildMember: o.body.guild_member
                    }), o.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && E.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), u.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function m(e) {
                u.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await r.default.get({
                        url: _.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    u.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && E.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), u.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }