(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32079"], {
        254936: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return V
                }
            });
            var n, u = l("920040");
            l("773670");
            var a = l("287377"),
                i = l("716984"),
                r = l("498225"),
                d = l("987317"),
                o = l("393414"),
                s = l("42203"),
                f = l("476108"),
                c = l("50885"),
                h = l("49111");
            r.default.initialize();
            var V = e => {
                let {
                    location: t
                } = e;
                return (0, u.jsx)(i.Redirect, {
                    to: null !== (n = function e(t) {
                        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = s.default.getChannel(t);
                        if (null != n) {
                            c.default.focus();
                            let e = n.guild_id,
                                t = n.id;
                            if (n.type === h.ChannelTypes.GUILD_VOICE) {
                                let l = n.getGuildId();
                                null != l && d.default.selectVoiceChannel(n.id), t = e
                            }
                            return null != t && null != e ? h.Routes.CHANNEL(e, t) : null
                        }
                        if (l) {
                            let l = () => {
                                s.default.removeChangeListener(l);
                                let n = e(t, !1);
                                null != n && (0, o.transitionTo)(n)
                            };
                            s.default.addChangeListener(l)
                        }
                        return null
                    }((0, a.parse)(t.search).channelId)) && void 0 !== n ? n : f.default.fallbackRoute
                })
            }
        },
        476108: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("498225"),
                u = l("173333"),
                a = l("913144"),
                i = l("49111");
            let r = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                d = r,
                o = "LAST_VIEWED_PATH";
            class s extends n.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    d = null != e ? e : r
                }
                get defaultRoute() {
                    return i.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : i.Routes.ME
                }
                get fallbackRoute() {
                    return i.Routes.ME
                }
                getState() {
                    return d
                }
            }
            s.displayName = "DefaultRouteStore", s.persistKey = "DefaultRouteStore", s.migrations = [() => {
                let e = u.default.get(o, null);
                return u.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var f = new s(a.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return d.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return d.lastViewedNonVoicePath = t, !0
                }
            })
        }
    }
]);