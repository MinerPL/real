            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var u = l("730290"),
                a = l("90915"),
                i = l("446674"),
                r = l("987317"),
                d = l("393414"),
                o = l("42203"),
                s = l("476108"),
                f = l("50885"),
                c = l("49111");
            i.default.initialize();
            var h = e => {
                var t;
                let {
                    location: l
                } = e;
                return (0, n.jsx)(a.Redirect, {
                    to: null !== (t = function e(t) {
                        let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = o.default.getChannel(t);
                        if (null != n) {
                            f.default.focus();
                            let e = n.guild_id,
                                t = n.id;
                            if (n.type === c.ChannelTypes.GUILD_VOICE) {
                                let l = n.getGuildId();
                                null != l && r.default.selectVoiceChannel(n.id), t = e
                            }
                            return null != t && null != e ? c.Routes.CHANNEL(e, t) : null
                        }
                        if (l) {
                            let l = () => {
                                o.default.removeChangeListener(l);
                                let n = e(t, !1);
                                null != n && (0, d.transitionTo)(n)
                            };
                            o.default.addChangeListener(l)
                        }
                        return null
                    }((0, u.parse)(l.search).channelId)) && void 0 !== t ? t : s.default.fallbackRoute
                })
            }