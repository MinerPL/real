            "use strict";
            r.r(t), r.d(t, {
                saveClydeProfile: function() {
                    return d
                },
                addClydeGuildMember: function() {
                    return c
                },
                generatePersonality: function() {
                    return f
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
                    return A
                },
                fetchClydeProfile: function() {
                    return C
                },
                createClydeProfile: function() {
                    return m
                },
                startEditingClydeProfile: function() {
                    return L
                },
                doneEditingClydeProfile: function() {
                    return D
                }
            });
            var n = r("872717"),
                i = r("913144"),
                u = r("327037"),
                l = r("599110"),
                o = r("473591"),
                a = r("680894"),
                s = r("49111");
            async function d(e, t) {
                let r = await E(e, t);
                return r
            }
            async function c(e) {
                return await n.default.put({
                    url: s.Endpoints.GUILD_CLYDE_ADD_MEMBER(e),
                    oldFormErrors: !0
                })
            }
            async function f(e) {
                try {
                    let t = await n.default.post({
                        url: s.Endpoints.CLYDE_PROFILES_GENERATE_PERSONALITY,
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
                let r = null != t.personality && o.default.getGeneratedPersonality() === o.default.getPendingPersonality();
                try {
                    var u, d;
                    let o = await n.default.patch({
                        url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
                        oldFormErrors: !0,
                        body: {
                            ...t,
                            personality_preset: r ? "generated" : "custom"
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
                        errors: null !== (d = null === (u = o.body) || void 0 === u ? void 0 : u.errors) && void 0 !== d ? d : {}
                    }), l.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                        guild_id: e,
                        clyde_profile_id: t.clyde_profile_id
                    }), null
                } catch (r) {
                    return i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                        errors: r.body
                    }), l.default.track(s.AnalyticEvents.CLYDE_AI_PROFILE_UPDATE_FAILED, {
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
            async function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t || o.default.shouldFetchSettings(e)) {
                    (0, u.fetchProfile)(a.CLYDE_AI_USER_ID, {
                        guildId: e
                    }), i.default.dispatch({
                        type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await n.default.get({
                                url: s.Endpoints.GUILD_CLYDE_SETTINGS(e),
                                oldFormErrors: !0
                            }),
                            r = t.body;
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                            guildId: r.guild_id,
                            settings: r
                        })
                    } catch (t) {
                        i.default.dispatch({
                            type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }
            async function C(e) {
                if (null == o.default.getProfile(e)) {
                    i.default.dispatch({
                        type: "CLYDE_PROFILE_FETCH_START",
                        clydeProfileId: e
                    });
                    try {
                        let t = await n.default.get({
                                url: s.Endpoints.CLYDE_PROFILES(e),
                                oldFormErrors: !0
                            }),
                            r = t.body;
                        i.default.dispatch({
                            type: "CLYDE_PROFILE_FETCH_SUCCESS",
                            profile: r
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
                    let t = await n.default.post({
                        url: s.Endpoints.CLYDE_PROFILES_CREATE(e),
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

            function D() {
                i.default.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }