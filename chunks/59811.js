            "use strict";
            n.r(t), n.d(t, {
                NO_WELCOME_SCREEN: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = {},
                s = {},
                a = {},
                u = !1,
                o = !1,
                d = !1;

            function c(e) {
                let {
                    guild: t
                } = e.invite;
                return (null == t ? void 0 : t.welcome_screen) != null && (s[t.id] = t.welcome_screen, !0)
            }

            function f(e) {
                let {
                    welcomeScreen: t,
                    guildId: n
                } = e;
                s[n] = null != t ? t : r
            }
            class E extends i.default.Store {
                get(e) {
                    if (null != e) return s[e]
                }
                isFetching() {
                    return o
                }
                hasError() {
                    return d
                }
                hasSeen(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null != e && (t ? u : a[e] || !1)
                }
                isEmpty(e) {
                    if (null == e) return !0;
                    let t = s[e];
                    return null == t || 0 === t.welcome_channels.length
                }
            }
            E.displayName = "WelcomeScreenStore";
            var _ = new E(l.default, {
                INVITE_RESOLVE_SUCCESS: c,
                INVITE_ACCEPT_SUCCESS: c,
                WELCOME_SCREEN_SUBMIT_SUCCESS: f,
                WELCOME_SCREEN_UPDATE: f,
                WELCOME_SCREEN_VIEW: function(e) {
                    let {
                        guildId: t,
                        isLurking: n
                    } = e;
                    a[t] = !0, n && (u = !0)
                },
                GUILD_STOP_LURKING: function() {
                    u = !1
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    a[t] = !1
                },
                WELCOME_SCREEN_FETCH_START: function() {
                    o = !0, d = !1
                },
                WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
                    o = !1, d = !1;
                    let {
                        welcomeScreen: t,
                        guildId: n
                    } = e;
                    s[n] = null != t ? t : r
                },
                WELCOME_SCREEN_FETCH_FAIL: function() {
                    o = !1, d = !0
                }
            })