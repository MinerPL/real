            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getIsSpeaking: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("235004"),
                l = n("18494"),
                s = n("280168"),
                r = n("800762");

            function u(e, t, n) {
                return e || t || n
            }

            function o(e) {
                var t, n, u;
                let {
                    userId: o,
                    checkSoundSharing: d = !1,
                    checkSoundboardSounds: c = !0,
                    checkIsMuted: _ = !1,
                    context: E
                } = e, f = (0, i.useStateFromStores)([r.default, l.default], () => {
                    let e = l.default.getVoiceChannelId();
                    return null != e ? r.default.getVoiceStateForChannel(e, o) : null
                }), h = _ && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)), p = (0, i.useStateFromStores)([s.default], () => s.default.isSpeaking(o, E) && !h), T = (0, i.useStateFromStores)([s.default], () => s.default.isSoundSharing(o) && d), C = (0, i.useStateFromStores)([a.default], () => a.default.isUserPlayingSounds(o) && c);
                return t = p, n = C, u = T, t || n || u
            }

            function d(e) {
                var t, n, i;
                let {
                    userId: u,
                    checkSoundSharing: o = !1,
                    checkSoundboardSounds: d = !0,
                    checkIsMuted: c = !1,
                    context: _
                } = e, E = l.default.getVoiceChannelId(), f = null != E ? r.default.getVoiceStateForChannel(E, u) : null, h = c && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)), p = s.default.isSpeaking(u, _) && !h, T = s.default.isSoundSharing(u) && o, C = a.default.isUserPlayingSounds(u) && d;
                return t = p, n = C, i = T, t || n || i
            }