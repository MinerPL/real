            "use strict";
            let i, l, r, o, s, u, a, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var f = n("446674"),
                E = n("913144"),
                _ = n("49111");
            let p = _.FormStates.CLOSED,
                I = {},
                S = !1;

            function h() {
                p = _.FormStates.CLOSED, I = {}, a = null, c = void 0, d = []
            }

            function T() {
                N(), C(), I = {}, p = _.FormStates.OPEN
            }

            function N() {
                i = void 0, s = void 0
            }

            function C() {
                l = void 0, r = void 0, o = void 0, u = void 0
            }
            class v extends f.default.Store {
                getFormState() {
                    return p
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== o || void 0 !== s || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return s
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: r,
                        pendingPronouns: o,
                        pendingNickname: s,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return a
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            v.displayName = "GuildIdentitySettingsStore";
            var g = new v(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    a = e.guild, p = _.FormStates.OPEN, I = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: h,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    T(), h()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    a = e.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    p = _.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (p !== _.FormStates.SUBMITTING) return !1;
                    p = _.FormStates.OPEN, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    p = _.FormStates.OPEN, I = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: T,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: T,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })