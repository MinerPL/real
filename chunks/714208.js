            "use strict";
            n.r(t), n.d(t, {
                RETURN_TO_AUDIO_CHANNEL: function() {
                    return d
                }
            });
            var i = n("406189"),
                o = n("722525"),
                l = n("945956"),
                a = n("18494"),
                u = n("49111");
            let d = {
                binds: ["mod+alt+left"],
                comboKeysBindGlobal: !0,
                action() {
                    var e;
                    if (!l.default.isConnected()) return !1;
                    let t = null !== (e = l.default.getGuildId()) && void 0 !== e ? e : u.ME,
                        n = a.default.getChannelId(t);
                    return (0, o.transitionToChannel)(t, n), i.default.channelListScrollTo(t, l.default.getChannelId()), !1
                }
            }