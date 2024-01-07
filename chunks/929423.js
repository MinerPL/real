            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return v
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await r.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function p(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }