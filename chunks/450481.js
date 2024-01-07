            "use strict";
            n.r(t), n.d(t, {
                selectVoiceChannelAdditional: function() {
                    return p
                }
            });
            var i = n("551042"),
                a = n("913144"),
                l = n("157186"),
                s = n("619395"),
                r = n("819450"),
                u = n("439141"),
                o = n("172538"),
                d = n("42203"),
                c = n("305961"),
                _ = n("88093"),
                E = n("18494"),
                f = n("800762"),
                h = n("404008");
            let p = function(e, t) {
                let p = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    T = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    C = d.default.getChannel(e),
                    m = f.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
                    S = null != C ? _.default.getCheck(C.guild_id) : null,
                    I = null != t && (0, l.shouldShowMembershipVerificationGate)(t);
                if (!I) {
                    if (null == S || S.canChat || (0, s.canLurkerListen)(C)) {
                        if (null != C && !m) {
                            let e = (0, h.isChannelFull)(C, f.default, c.default);
                            if (e && C.isGuildStageVoice() && (0, r.getStageHasMedia)(C.id)) {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("374278").then(n.bind(n, "374278"));
                                    return t => e({
                                        channel: C,
                                        ...t
                                    })
                                });
                                return
                            }
                            if (e) {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("440224").then(n.bind(n, "440224"));
                                    return t => e(t)
                                });
                                return
                            }
                        }
                        p && (0, u.applyInitialVideoBackgroundOption)(), (0, o.default)(function() {
                            a.default.dispatch({
                                type: "VOICE_CHANNEL_SELECT",
                                guildId: t,
                                channelId: e,
                                currentVoiceChannelId: E.default.getVoiceChannelId(),
                                video: p,
                                stream: T
                            })
                        }, e, T, p)
                    }
                }
            }