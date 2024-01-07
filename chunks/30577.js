            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("913144"),
                a = n("316272"),
                l = n("248967"),
                s = n("42203"),
                r = n("162771"),
                u = n("449008");
            class o extends a.default {
                _initialize() {
                    i.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.subscribe("LOGOUT", this.handleLogout)
                }
                _terminate() {
                    i.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), i.default.unsubscribe("LOGOUT", this.handleLogout)
                }
                constructor(...e) {
                    super(...e), this.handleVoiceChannelSelect = e => {
                        let {
                            channelId: t,
                            guildId: n
                        } = e;
                        if (null != t) {
                            let e = s.default.getChannel(t),
                                n = null == e || e.isGuildStageVoice();
                            if (n) return
                        }
                        this.terminate();
                        this.handleDisconnectFromStageChannel(null == t ? null : null != n ? n : null)
                    }, this.handleDisconnectFromStageChannel = e => {
                        let t = r.default.getGuildId();
                        (0, l.stopLurkingAll)([t, e].filter(u.isNotNullish))
                    }, this.handleLogout = () => {
                        this.terminate(), this.handleDisconnectFromStageChannel(null)
                    }
                }
            }
            var d = new o