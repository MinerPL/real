            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentUser: function() {
                    return g
                },
                acceptAgreements: function() {
                    return m
                },
                setFlag: function() {
                    return h
                },
                getUser: function() {
                    return v
                },
                fetchProfile: function() {
                    return E
                },
                fetchMutualFriends: function() {
                    return p
                }
            }), n("702976");
            var s = n("627445"),
                i = n.n(s),
                r = n("33112"),
                a = n("811022"),
                o = n("872717"),
                d = n("913144"),
                u = n("766274"),
                l = n("697218"),
                f = n("840707"),
                _ = n("49111");
            let c = new a.default("UserProfileModalActionCreators");

            function g() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return o.default.get({
                    url: _.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (d.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new u.default(e.body)))
            }

            function m() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return f.default.patch({
                    url: _.Endpoints.USER_AGREEMENTS,
                    trackedActionData: {
                        event: r.NetworkActionNames.USER_ACCEPT_AGREEMENTS
                    },
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function h(e, t) {
                let n = l.default.getCurrentUser();
                i(null != n, "setFlag: user cannot be undefined");
                let s = t ? n.flags | e : n.flags & ~e;
                return o.default.patch({
                    url: _.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: s
                    }
                })
            }

            function v(e) {
                let t = l.default.getUser(e);
                return null != t ? Promise.resolve(t) : o.default.get({
                    url: _.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (d.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), l.default.getUser(e)))
            }
            async function E(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: n,
                    withMutualFriendsCount: s,
                    guildId: i,
                    connectionsRoleId: r
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
                d.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let u = await o.default.get({
                        url: _.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: n,
                            with_mutual_friends_count: s,
                            guild_id: i,
                            connections_role_id: r
                        },
                        oldFormErrors: !0
                    });
                    return null == a || a(u.body, i), d.default.dispatch({
                        type: "USER_UPDATE",
                        user: u.body.user
                    }), d.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...u.body
                    }), null != i && null != u.body.guild_member && d.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: i,
                        guildMember: u.body.guild_member
                    }), u.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && c.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), d.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function p(e) {
                d.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await o.default.get({
                        url: _.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    d.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && c.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), d.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }