            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return D
                }
            }), l("222007"), l("702976");
            var t = l("917351"),
                n = l.n(t),
                r = l("376556"),
                u = l("915639"),
                o = l("766274"),
                d = l("271938"),
                s = l("305961"),
                a = l("824563"),
                c = l("455079"),
                f = l("677099");
            let m = new Set,
                p = new Set,
                _ = {},
                g = {},
                h = {},
                v = {},
                b = {},
                P = !1;

            function S() {
                m.clear(), p.clear(), _ = {}, g = {}, h = {}, v = {}, b = {}
            }

            function E(e) {
                let {
                    userId: i
                } = e;
                p.add(i)
            }

            function C(e) {
                let {
                    userId: i
                } = e;
                p.delete(i)
            }

            function I(e) {
                p.delete(e.userId), h[e.userId] = n(e.mutualFriends).map(e => ({
                    key: e.id,
                    user: new o.default(e),
                    status: a.default.getStatus(e.id)
                })).sortBy(e => {
                    let {
                        user: i
                    } = e;
                    return i.username.toLowerCase()
                }).value(), v[e.userId] = e.mutualFriends.length
            }

            function U() {
                if (0 === Object.keys(b).length) return !1;
                b = {}
            }

            function T(e) {
                if (null == b[e.user.id]) return !1;
                delete b[e.user.id]
            }

            function F(e) {
                var i, l, t, n, u, o, d, a, c, p, h, P, S, E, C, I, U;
                if (m.delete(e.user.id), null != e.mutual_guilds) {
                    let i = {};
                    e.mutual_guilds.forEach(e => {
                        let {
                            id: l,
                            nick: t
                        } = e, n = s.default.getGuild(l);
                        null != n && (i[l] = {
                            guild: n,
                            nick: t
                        })
                    }), b[e.user.id] = f.default.getFlattenedGuildIds().filter(e => null != i[e]).map(e => ({
                        guild: i[e].guild,
                        nick: i[e].nick
                    }))
                }
                if (null != e.mutual_friends_count) {
                    let i = e.mutual_friends_count;
                    v[e.user.id] = i
                }
                let T = null !== (c = e.premium_since) && void 0 !== c ? c : null,
                    F = e.application;
                if (_[e.user.id] = {
                        userId: e.user.id,
                        banner: null === (i = e.user_profile) || void 0 === i ? void 0 : i.banner,
                        accentColor: null === (l = e.user_profile) || void 0 === l ? void 0 : l.accent_color,
                        themeColors: null === (t = e.user_profile) || void 0 === t ? void 0 : t.theme_colors,
                        popoutAnimationParticleType: null === (n = e.user_profile) || void 0 === n ? void 0 : n.popout_animation_particle_type,
                        bio: null !== (p = null === (u = e.user_profile) || void 0 === u ? void 0 : u.bio) && void 0 !== p ? p : "",
                        profileEffectId: null === (d = e.user_profile) || void 0 === d ? void 0 : null === (o = d.profile_effect) || void 0 === o ? void 0 : o.id,
                        pronouns: null !== (h = null === (a = e.user_profile) || void 0 === a ? void 0 : a.pronouns) && void 0 !== h ? h : "",
                        connectedAccounts: null !== (P = e.connected_accounts.filter(e => r.default.isSupported(e.type))) && void 0 !== P ? P : [],
                        applicationRoleConnections: null !== (S = e.application_role_connections) && void 0 !== S ? S : [],
                        premiumSince: null != T ? new Date(T) : null,
                        premiumType: e.premium_type,
                        premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                        lastFetched: Date.now(),
                        legacyUsername: e.legacy_username,
                        profileFetchFailed: !1,
                        application: null != F ? {
                            id: F.id,
                            primarySkuId: F.primary_sku_id,
                            customInstallUrl: F.custom_install_url,
                            installParams: F.install_params,
                            flags: F.flags,
                            popularApplicationCommandIds: F.popular_application_command_ids
                        } : null,
                        badges: e.badges
                    }, null != e.guild_member_profile) {
                    let i = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (E = e.guild_member_profile) || void 0 === E ? void 0 : E.theme_colors,
                        popoutAnimationParticleType: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : C.popout_animation_particle_type,
                        profileEffectId: null === (U = e.guild_member_profile) || void 0 === U ? void 0 : null === (I = U.profile_effect) || void 0 === I ? void 0 : I.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != g[e.user.id] ? g[e.user.id][e.guild_member_profile.guild_id] = i : g[e.user.id] = {
                        [e.guild_member_profile.guild_id]: i
                    }
                }
            }

            function y(e) {
                let {
                    userId: i
                } = e;
                m.add(i)
            }

            function A(e) {
                var i;
                let {
                    userId: l
                } = e;
                _[l] = null !== (i = _[l]) && void 0 !== i ? i : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: l,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                }, m.delete(l)
            }

            function M(e) {
                return null != e.guild_id ? function(e) {
                    let {
                        userId: i,
                        guild_id: l,
                        accent_color: t,
                        banner: n,
                        bio: r,
                        pronouns: u,
                        popout_animation_particle_type: o,
                        theme_colors: d,
                        profileEffectId: s
                    } = e;
                    if (null == l || null == g[i]) return !1;
                    let a = g[i][l];
                    if (null == a) return !1;
                    g[i][l] = {
                        ...a,
                        accentColor: t,
                        banner: n,
                        bio: r,
                        pronouns: u,
                        popoutAnimationParticleType: o,
                        themeColors: d,
                        profileEffectId: s
                    }
                }(e) : function(e) {
                    let {
                        userId: i,
                        accent_color: l,
                        banner: t,
                        bio: n,
                        pronouns: r,
                        popout_animation_particle_type: u,
                        theme_colors: o,
                        profileEffectId: d
                    } = e, s = _[i];
                    if (null == s) return !1;
                    _[i] = {
                        ...s,
                        accentColor: l,
                        banner: t,
                        bio: n,
                        pronouns: r,
                        popoutAnimationParticleType: u,
                        themeColors: o,
                        profileEffectId: d
                    }
                }(e)
            }

            function R(e) {
                P = !0
            }

            function L(e) {
                let {
                    user: i
                } = e;
                if (m.has(i.id) || null == _[i.id]) return !1;
                _[i.id].lastFetched = 0
            }

            function G() {
                m.clear(), _ = {}, g = {}
            }
            class w extends c.default {
                isFetchingProfile(e) {
                    return m.has(e)
                }
                isFetchingFriends(e) {
                    return p.has(e)
                }
                getUserProfile(e) {
                    return _[e]
                }
                getGuildMemberProfile(e, i) {
                    var l;
                    return null == i ? null : null === (l = g[e]) || void 0 === l ? void 0 : l[i]
                }
                getMutualFriends(e) {
                    return h[e]
                }
                getMutualFriendsCount(e) {
                    return v[e]
                }
                getMutualGuilds(e) {
                    return b[e]
                }
                getIsAccessibilityTooltipViewed() {
                    return P
                }
                takeSnapshot() {
                    let e = d.default.getId();
                    return {
                        version: w.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: _[e]
                        }]
                    }
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(w.LATEST_SNAPSHOT_VERSION);
                        null != e && e.forEach(e => {
                            let {
                                userId: i,
                                profile: l
                            } = e;
                            _[i] = l
                        })
                    }, this.registerActionHandlers({
                        CACHE_LOADED_LAZY: this.loadCache,
                        USER_PROFILE_FETCH_START: y,
                        USER_PROFILE_FETCH_FAILURE: A,
                        USER_PROFILE_FETCH_SUCCESS: F,
                        USER_PROFILE_UPDATE_SUCCESS: M,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: R,
                        MUTUAL_FRIENDS_FETCH_START: E,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: I,
                        MUTUAL_FRIENDS_FETCH_FAILURE: C,
                        GUILD_JOIN: U,
                        GUILD_DELETE: U,
                        GUILD_MEMBER_ADD: T,
                        GUILD_MEMBER_REMOVE: T,
                        GUILD_MEMBER_UPDATE: L,
                        USER_UPDATE: L,
                        LOGOUT: S
                    }), this.waitFor(f.default), this.syncWith([u.default], G)
                }
            }
            w.displayName = "UserProfileStore", w.LATEST_SNAPSHOT_VERSION = 1;
            var D = new w