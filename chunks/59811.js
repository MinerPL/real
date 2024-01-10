            "use strict";
            n.r(t), n.d(t, {
                NO_WELCOME_SCREEN: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var l = n("446674"),
                i = n("913144");
            let r = {},
                s = {},
                a = {},
                o = !1,
                u = !1,
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
            class E extends l.default.Store {
                get(e) {
                    if (null != e) return s[e]
                }
                isFetching() {
                    return u
                }
                hasError() {
                    return d
                }
                hasSeen(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null != e && (t ? o : a[e] || !1)
                }
                isEmpty(e) {
                    if (null == e) return !0;
                    let t = s[e];
                    return null == t || 0 === t.welcome_channels.length
                }
            }
            E.displayName = "WelcomeScreenStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE_SUCCESS: c,
                INVITE_ACCEPT_SUCCESS: c,
                WELCOME_SCREEN_SUBMIT_SUCCESS: f,
                WELCOME_SCREEN_UPDATE: f,
                WELCOME_SCREEN_VIEW: function(e) {
                    let {
                        guildId: t,
                        isLurking: n
                    } = e;
                    a[t] = !0, n && (o = !0)
                },
                GUILD_STOP_LURKING: function() {
                    o = !1
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
                    u = !0, d = !1
                },
                WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
                    u = !1, d = !1;
                    let {
                        welcomeScreen: t,
                        guildId: n
                    } = e;
                    s[n] = null != t ? t : r
                },
                WELCOME_SCREEN_FETCH_FAIL: function() {
                    u = !1, d = !0
                }
            })