            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                getIsSpeaking: function() {
                    return l
                }
            });
            var s = n("446674"),
                i = n("235004"),
                r = n("18494"),
                a = n("280168"),
                o = n("800762");

            function d(e, t, n) {
                return e || t || n
            }

            function u(e) {
                var t, n, d;
                let {
                    userId: u,
                    checkSoundSharing: l = !1,
                    checkSoundboardSounds: f = !0,
                    checkIsMuted: _ = !1,
                    context: c
                } = e, g = (0, s.useStateFromStores)([o.default, r.default], () => {
                    let e = r.default.getVoiceChannelId();
                    return null != e ? o.default.getVoiceStateForChannel(e, u) : null
                }), m = _ && ((null == g ? void 0 : g.mute) || (null == g ? void 0 : g.selfMute)), h = (0, s.useStateFromStores)([a.default], () => a.default.isSpeaking(u, c) && !m), v = (0, s.useStateFromStores)([a.default], () => a.default.isSoundSharing(u) && l), E = (0, s.useStateFromStores)([i.default], () => i.default.isUserPlayingSounds(u) && f);
                return t = h, n = E, d = v, t || n || d
            }

            function l(e) {
                var t, n, s;
                let {
                    userId: d,
                    checkSoundSharing: u = !1,
                    checkSoundboardSounds: l = !0,
                    checkIsMuted: f = !1,
                    context: _
                } = e, c = r.default.getVoiceChannelId(), g = null != c ? o.default.getVoiceStateForChannel(c, d) : null, m = f && ((null == g ? void 0 : g.mute) || (null == g ? void 0 : g.selfMute)), h = a.default.isSpeaking(d, _) && !m, v = a.default.isSoundSharing(d) && u, E = i.default.isUserPlayingSounds(d) && l;
                return t = h, n = E, s = v, t || n || s
            }