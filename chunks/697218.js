            "use strict";
            n.r(t), n.d(t, {
                users: function() {
                    return _
                },
                ASSISTANT_WUMPUS_VOICE_USER: function() {
                    return m
                },
                transformUser: function() {
                    return g
                },
                mergeUser: function() {
                    return C
                },
                default: function() {
                    return x
                }
            }), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
            var i = n("917351"),
                r = n("446674"),
                s = n("913144"),
                a = n("234251"),
                o = n("560208"),
                l = n("400205"),
                u = n("946028"),
                c = n("517001"),
                d = n("766274"),
                f = n("568734"),
                E = n("271938"),
                h = n("49111"),
                p = n("646718");
            let _ = {},
                S = 0,
                m = "47835198259242069";

            function T(e, t, n) {
                let i = e;
                i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), _[e.id] = i;
                let r = e !== i;
                return r && S++, r
            }

            function g(e) {
                let t = e.mfa_enabled;
                null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
                let n = (0, c.getPremiumTypeFromRawValue)(e.premium_type);
                void 0 !== n && (e.premiumType = n, delete e.premium_type);
                let i = e.nsfw_allowed;
                null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
                let r = e.public_flags;
                null != r && (e.publicFlags = r, delete e.public_flags);
                let s = e.purchased_flags;
                void 0 !== s && (e.purchasedFlags = s, delete e.purchased_flags);
                let o = e.premium_usage_flags;
                void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
                let l = e.avatar_decoration_data;
                void 0 !== l && (e.avatarDecorationData = (0, a.parseAvatarDecorationData)(l), delete e.avatar_decoration_data);
                let u = e.global_name;
                return void 0 !== u && (e.globalName = u, delete e.global_name), e
            }

            function I(e) {
                return e.id !== E.default.getId()
            }

            function C(e) {
                let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = _[e.id],
                    r = void 0 !== e.id && e.id === E.default.getId();
                if (null == i) void 0 !== (t = (i = new d.default(e)).premiumType) && r && (i.premiumType = v((0, c.isStaffEnv)(i), i.premiumType));
                else if (n) {
                    var s;
                    let n = g(e);
                    void 0 !== (t = null !== (s = n.premium_type) && void 0 !== s ? s : n.premiumType) && r && (0, c.isStaffEnvRawData)(n) && (n = function(e) {
                        var t;
                        let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                            i = v((0, c.isStaffEnvRawData)(e), n);
                        return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
                    }(n)), i = i.merge(n)
                }(0, c.validatePremiumType)((0, c.isStaffEnv)(i), t, i.premiumType);
                let a = _[e.id] !== i;
                return _[e.id] = i, a && S++, a
            }

            function v(e, t) {
                if (!e) return t;
                let n = l.default.getPremiumTypeOverride(),
                    i = l.default.getPremiumTypeActual();
                return n === p.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
            }

            function A(e, t) {
                var n, i, r, s, a;
                if (null != e.author && "SENDING" !== e.state && I(e.author) && C(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                        I(e) && C(e, t)
                    }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && I(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && C(e.interaction.user, t), null === (s = e.attachments) || void 0 === s || s.forEach(e => {
                        var n;
                        null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                            I(e) && C(e, t)
                        })
                    }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
                    for (let n in e.resolved.users) {
                        let i = e.resolved.users[n];
                        I(i) && C(i, t)
                    }
            }

            function R(e) {
                null != e.application.bot && C(e.application.bot)
            }

            function N(e) {
                if (null != e.users) {
                    for (let t of e.users)
                        if (!(t.id in _ && !("incomplete" in t))) _[t.id] = new d.default(t)
                }
            }

            function O(e) {
                let {
                    messages: t
                } = e;
                return t.forEach(e => A(e, !0)), !1
            }

            function D(e) {
                let {
                    firstMessages: t,
                    owners: n
                } = e;
                null != t && t.forEach(e => A(e, !0)), null != n && n.forEach(e => C(e.user, !0))
            }

            function y(e) {
                let {
                    message: t
                } = e;
                if (A(t, !0), null != t.flags && f.hasFlag(t.flags, h.MessageFlags.URGENT)) {
                    let e = _[E.default.getId()];
                    return null != e && (_[E.default.getId()] = e.set("flags", f.setFlag(e.flags, h.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
                }
                return !1
            }
            let P = ["username", "avatar", "global_name", "discriminator", "bot"];

            function L(e) {
                return C(e.user)
            }

            function b(e) {
                return !!e.isMember && C(e.user)
            }

            function M(e) {
                let t = C(e.user),
                    n = _[e.user.id];
                if (null == n) return t;
                let {
                    avatar: i,
                    guildId: r
                } = e;
                return T(n, r, i) || t
            }

            function U(e) {
                let {
                    users: t
                } = e;
                t.forEach(e => {
                    null == _[e.id] && (_[e.id] = new d.default(e))
                })
            }

            function G(e) {
                return C(e.member.user)
            }

            function w(e) {
                let {
                    request: t
                } = e, {
                    user: n,
                    actioned_by_user: i
                } = t, r = !1;
                return null != n && (r = r || C(n)), null != i && (r = r || C(i)), r
            }
            class k extends r.default.Store {
                initialize() {
                    this.waitFor(E.default)
                }
                getUserStoreVersion() {
                    return S
                }
                getUser(e) {
                    if (null != e) return _[e]
                }
                getUsers() {
                    return _
                }
                forEach(e) {
                    for (let t in _)
                        if (!1 === e(_[t])) break
                }
                findByTag(e, t) {
                    for (let n in _) {
                        let i = _[n];
                        if (null != t && i.username === e && i.discriminator === t) return i;
                        if (null == t && i.username === e && i.isPomelo()) return i
                    }
                }
                filter(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = [];
                    for (let t in _) {
                        let i = _[t];
                        e(i) && n.push(i)
                    }
                    return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
                }
                getCurrentUser() {
                    return _[E.default.getId()]
                }
            }
            k.displayName = "UserStore";
            var x = new k(s.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        users: n,
                        guilds: i
                    } = e;
                    delete t.premium, delete t.banner_color, C(t), n.forEach(e => {
                        C(e)
                    }), i.forEach(e => {
                        e.members.forEach(t => {
                            let n = _[t.user.id];
                            null != n && T(n, e.id, t.avatar)
                        })
                    });
                    let r = _[E.default.getId()];
                    null != r && (_[m] = new d.default({
                        id: m,
                        username: "Wumpus",
                        discriminator: "0",
                        globalName: "Wumpus",
                        avatar: "c1f86b313385cb97985f1b118851c28c"
                    }))
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        guilds: t,
                        lazyPrivateChannels: n
                    } = e;
                    t.forEach(e => {
                        e.members.forEach(t => {
                            let n = _[t.user.id];
                            null != n && T(n, e.id, t.avatar)
                        })
                    }), null == n || n.forEach(e => {
                        var t;
                        null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                            C(e)
                        })
                    })
                },
                UPDATE_CLIENT_PREMIUM_TYPE: function(e) {
                    let {
                        user: t
                    } = e;
                    C(t)
                },
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: N,
                CACHE_LOADED_LAZY: N,
                USER_UPDATE: function(e) {
                    let {
                        user: t
                    } = e;
                    t.id !== E.default.getId() && C(t)
                },
                CURRENT_USER_UPDATE: function(e) {
                    let {
                        user: t
                    } = e;
                    C(t)
                },
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.map(e => {
                        let t = _[e.user.id];
                        if (null == t) return !1;
                        let n = P.reduce((n, r) => {
                            if (e.user.hasOwnProperty(r)) {
                                let s = t.set((0, i.camelCase)(r), e.user[r]);
                                n = n || s !== t, t = s
                            }
                            return n
                        }, !1);
                        return !!n && (_[t.id] = t, n)
                    }).some(e => e)
                },
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t
                    } = e;
                    return t.forEach(e => O({
                        messages: e
                    })), !1
                },
                LOAD_MESSAGES_SUCCESS: O,
                LOAD_MESSAGES_AROUND_SUCCESS: O,
                LOAD_PINNED_MESSAGES_SUCCESS: O,
                LOAD_RECENT_MENTIONS_SUCCESS: O,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        mostRecentMessages: t
                    } = e;
                    return null == t || t.forEach(e => A(e, !1)), !1
                },
                MESSAGE_CREATE: y,
                MESSAGE_UPDATE: y,
                GUILD_SETTINGS_LOADED_BANS: function(e) {
                    let {
                        bans: t
                    } = e;
                    t.forEach(e => C(e.user))
                },
                GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
                    let {
                        bans: t
                    } = e;
                    t.forEach(e => C(e.user))
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.members.forEach(e => {
                        let {
                            user: {
                                id: n,
                                username: i,
                                avatar: r,
                                discriminator: s,
                                bot: a
                            },
                            avatar: o
                        } = e;
                        n !== E.default.getId() && C({
                            id: n,
                            username: i,
                            avatar: r,
                            discriminator: s,
                            bot: a
                        });
                        let l = _[n];
                        null != l && T(l, t.id, o)
                    })
                },
                GUILD_BAN_ADD: L,
                GUILD_BAN_REMOVE: L,
                CHANNEL_RECIPIENT_ADD: b,
                CHANNEL_RECIPIENT_REMOVE: b,
                GUILD_JOIN_REQUEST_CREATE: w,
                GUILD_JOIN_REQUEST_UPDATE: w,
                GUILD_MEMBER_ADD: M,
                GUILD_MEMBER_UPDATE: M,
                GUILD_MEMBERS_CHUNK: function(e) {
                    let {
                        members: t,
                        guildId: n
                    } = e;
                    return t.reduce((e, t) => {
                        let i = C(t.user),
                            r = _[t.user.id];
                        if (null == r) return i || e;
                        let {
                            avatar: s
                        } = t;
                        return T(r, n, s) || i || e
                    }, !1)
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    let {
                        members: t
                    } = e, n = !1;
                    return t.forEach(e => {
                        null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0)
                    }), n
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let {
                        addedMembers: t
                    } = e, n = !1;
                    return null == t || t.forEach(e => {
                        null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0)
                    }), n
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: {
                            rawRecipients: t
                        }
                    } = e;
                    return null != t && t.forEach(e => C(e)), !1
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    for (let {
                            rawRecipients: e
                        }
                        of t) null != e && e.forEach(e => C(e));
                    return !1
                },
                RELATIONSHIP_ADD: function(e) {
                    return C(e.relationship.user)
                },
                LOAD_RELATIONSHIPS_SUCCESS: function(e) {
                    let {
                        relationships: t
                    } = e;
                    return t.reduce((e, t) => C(t.user) || e, !1)
                },
                FRIEND_SUGGESTION_CREATE: function(e) {
                    return C(e.suggestion.suggested_user)
                },
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        suggestions: t
                    } = e;
                    return t.reduce((e, t) => C(t.suggested_user) || e, !1)
                },
                AUDIT_LOG_FETCH_SUCCESS: U,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: U,
                LOBBY_CREATE: function(e) {
                    let {
                        lobby: t
                    } = e;
                    return t.members.reduce((e, t) => C(t.user) || e, !1)
                },
                LOBBY_MEMBER_CONNECT: G,
                LOBBY_MEMBER_UPDATE: G,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return null != t.user && C(t.user)
                },
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedBoosts: t
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t
                        } = e;
                        null != t && C(t)
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    (0, o.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e, !0))
                },
                LOAD_THREADS_SUCCESS: D,
                LOAD_ARCHIVED_THREADS_SUCCESS: D,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    Object.values(t).forEach(e => {
                        let {
                            first_message: t,
                            most_recent_message: n,
                            owner: i
                        } = e;
                        null != t && A(t, !0), null != n && A(n, !0), null != i && null != i.user && C(i.user, !0)
                    })
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t,
                        guildId: n
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            member: i
                        } = e;
                        if (null == t) return;
                        C(t);
                        let r = _[t.id],
                            s = null == i ? void 0 : i.avatar;
                        null != r && null != s && T(r, n, s)
                    })
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    t.forEach(e => {
                        null != e.other_user && C(e.other_user)
                    })
                },
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    let {
                        item: t
                    } = e;
                    null != t.other_user && C(t.other_user)
                },
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
                    let {
                        supplementalData: t
                    } = e;
                    Object.values(t).forEach(e => {
                        let {
                            message_preview: t
                        } = e;
                        null != t && A(t, !0)
                    })
                },
                STORE_APPLICATION_INTERACTION_FAKE_USER: function(e) {
                    let {
                        user: t
                    } = e;
                    C(t)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t;
                    let n = !1;
                    for (let i of null !== (t = e.members) && void 0 !== t ? t : []) C(i.user) && (n = !0), null != _[i.user.id] && T(_[i.user.id], e.guildId, i.avatar) && (n = !0);
                    return n
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    var t;
                    let n = !1;
                    for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(_, i.id) && (n = C(i) || n);
                    return n
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
                    let {
                        integrations: t
                    } = e;
                    t.forEach(e => R((0, u.createPrivateChannelIntegration)(e)))
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
                    let {
                        integration: t
                    } = e;
                    R((0, u.createPrivateChannelIntegration)(t))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
                    let {
                        integration: t
                    } = e;
                    R((0, u.createPrivateChannelIntegration)(t))
                },
                FAMILY_CENTER_INITIAL_LOAD: function(e) {
                    let {
                        users: t,
                        familyCenterTeenActivity: n
                    } = e, {
                        users: i
                    } = n, r = [...t, ...i];
                    return r.reduce((e, t) => C(t) || e, !1)
                },
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => C(t) || e, !1)
                },
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: function(e) {
                    let {
                        familyCenterTeenActivity: t
                    } = e;
                    if (void 0 === t) return;
                    let {
                        users: n
                    } = t;
                    return n.reduce((e, t) => C(t) || e, !1)
                },
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: function(e) {
                    let {
                        familyCenterTeenActivity: t
                    } = e, {
                        users: n
                    } = t;
                    return n.reduce((e, t) => C(t) || e, !1)
                },
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => C(t) || e, !1)
                },
                FRIEND_FINDER_PYMK_LOADED: function(e) {
                    let {
                        users: t
                    } = e;
                    return t.reduce((e, t) => C(t) || e, !1)
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
                    let {
                        members: t
                    } = e, n = E.default.getId();
                    return t.reduce((e, t) => {
                        if (t.member.user.id === n) return e;
                        let i = C(t.member.user);
                        return i || e
                    }, !1)
                }
            })