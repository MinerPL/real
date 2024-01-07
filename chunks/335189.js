            "use strict";
            n.r(t), n.d(t, {
                saveClydeProfile: function() {
                    return s
                },
                addClydeGuildMember: function() {
                    return c
                },
                generatePersonality: function() {
                    return d
                },
                setPendingPersonality: function() {
                    return _
                },
                setPendingNick: function() {
                    return p
                },
                setPendingAvatar: function() {
                    return T
                },
                setPendingBanner: function() {
                    return y
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingChanges: function() {
                    return I
                },
                fetchClydeSettings: function() {
                    return C
                },
                fetchClydeProfile: function() {
                    return A
                },
                createClydeProfile: function() {
                    return m
                },
                startEditingClydeProfile: function() {
                    return L
                },
                doneEditingClydeProfile: function() {
                    return g
                }
            });
            var r = n("872717"),
                i = n("913144"),
                u = n("327037"),
                l = n("599110"),
                o = n("473591"),
                a = n("680894"),
                f = n("49111");
            async function s(e, t) {
                let n = await E(e, t);
                return n
            }
            async function c(e) {
                return await r.default.put({
                    url: f.Endpoints.GUILD_CLYDE_ADD_MEMBER(e),
                    oldFormErrors: !0
                })
            }
            async function d(e) {
                try {
                    let t = await r.default.post({
                        url: f.Endpoints.CLYDE_PROFILES_GENERATE_PERSONALITY,
                        oldFormErrors: !0,
                        body: {
                            personality: e
                        }
                    });
                    if (t.ok) return t.body.personality;
                    return null
                } catch (e) {
                    return null
                }
            }
            async function E(e, t) {
                i.default.dispatch({
                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                });
                let n = null != t.personality && o.default.getGeneratedPersonality() === o.default.getPendingPersonality();
                try {
                    var u, s;
                    let o = await r.default.patch({
                        url: f.Endpoints.GUILD_CLYDE_SETTINGS(e),
                        oldFormErrors: !0,
                        body: {
                            ...t,
                            personality_preset: n ? "generated" : "custom"
                        }
                    });
                    if (o.ok) return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                        settings: o.body.settings
                    }), null != o.body.guild_member_profile && i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_SUCCESS",
                        userId: a.CLYDE_AI_USER_ID,
                        profileEffectId: void 0,
                        ...o.body.guild_member_profile
                    }), null != o.body.guild_member && i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: o.body.guild_member,
                        guildId: e
                    }), o.body.settings;
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: null !== (s = null === (u = o.body) || void 0 === u ? void 0 : u.errors) && void 0 !== s ? s : {}
                    }), l.default.track(f.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                } catch (n) {
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: n.body
                    }), l.default.track(f.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                }
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e,
                    isGenerated: t
                })
            }

            function p(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function y(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function I() {
                i.default.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }
            async function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t || o.default.shouldFetchSettings(e)) {
                    (0, u.fetchProfile)(a.CLYDE_AI_USER_ID, {
                        guildId: e
                    }), i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: f.Endpoints.GUILD_CLYDE_SETTINGS(e),
                                oldFormErrors: !0
                            }),
                            n = t.body;
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                            guildId: n.guild_id,
                            settings: n
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }
            async function A(e) {
                if (null == o.default.getProfile(e)) {
                    i.default.dispatch({
                        type: "CLYDE_PROFILE_FETCH_START",
                        clydeProfileId: e
                    });
                    try {
                        let t = await r.default.get({
                                url: f.Endpoints.CLYDE_PROFILES(e),
                                oldFormErrors: !0
                            }),
                            n = t.body;
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_SUCCESS",
                            profile: n
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_FAIL",
                            clydeProfileId: e
                        })
                    }
                }
            }
            async function m(e) {
                try {
                    let t = await r.default.post({
                        url: f.Endpoints.CLYDE_PROFILES_CREATE(e),
                        oldFormErrors: !0
                    });
                    return t.ok && i.default.dispatch({
                        type: "CLYDE_PROFILE_CREATE_SUCCESS",
                        profile: t.body
                    }), t.body
                } catch (e) {
                    return null
                }
            }

            function L() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function g() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }