            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976");
            var s, i = n("201876"),
                r = n("56947"),
                a = n("386045"),
                o = n("584687"),
                d = n("103979"),
                u = n("845579"),
                l = n("373469"),
                f = n("42203"),
                _ = n("42887"),
                c = n("590401"),
                g = n("568307"),
                m = n("568734"),
                h = n("49111");
            s = class extends i.default {
                get guildId() {
                    return this.getState().guildId
                }
                get channelId() {
                    return this.getState().channelId
                }
                computeVoiceFlags() {
                    var e, t, n;
                    let s = 0,
                        i = u.ClipsAllowVoiceRecording.getSetting();
                    s = (0, m.setFlag)(s, h.VoiceFlags.ALLOW_VOICE_RECORDING, i);
                    let f = a.default.getSettings().clipsEnabled && (0, r.areClipsEnabled)() && ((null === (e = l.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === h.ApplicationStreamStates.ACTIVE || (null === (t = l.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === h.ApplicationStreamStates.PAUSED),
                        {
                            enableDecoupledGameClipping: _
                        } = o.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }),
                        {
                            enableViewerClipping: c
                        } = d.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }, {
                            autoTrackExposure: !1
                        });
                    c && (s = (0, m.setFlag)(s, h.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, a.default.getSettings().viewerClipsEnabled));
                    let v = a.default.getSettings().decoupledClipsEnabled && (null === (n = g.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && _;
                    return s = (0, m.setFlag)(s, h.VoiceFlags.CLIPS_ENABLED, f || v)
                }
                getInitialState() {
                    return {
                        guildId: null,
                        channelId: null,
                        selfMute: _.default.isSelfMute(),
                        selfDeaf: _.default.isSelfDeaf(),
                        selfVideo: _.default.isVideoEnabled(),
                        preferredRegion: null,
                        videoStreamParameters: null,
                        flags: 0
                    }
                }
                getNextState(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return {
                        guildId: t,
                        channelId: n,
                        selfMute: _.default.isSelfMute(),
                        selfDeaf: _.default.isSelfDeaf(),
                        selfVideo: _.default.isVideoEnabled(),
                        preferredRegion: c.default.getPreferredRegion(),
                        videoStreamParameters: _.default.getVideoStreamParameters(),
                        flags: this.computeVoiceFlags()
                    }
                }
                shouldCommit() {
                    return this.socket.isSessionEstablished()
                }
                didCommit(e) {
                    var t;
                    let {
                        guildId: n,
                        channelId: s,
                        selfMute: i,
                        selfDeaf: r,
                        selfVideo: a,
                        preferredRegion: o,
                        videoStreamParameters: d,
                        flags: u = 0
                    } = e;
                    a && (null === (t = f.default.getChannel(s)) || void 0 === t ? void 0 : t.type) === h.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: s,
                        selfMute: i,
                        selfDeaf: r,
                        selfVideo: a,
                        preferredRegion: o,
                        videoStreamParameters: d,
                        flags: u
                    }) : this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: s,
                        selfMute: i,
                        selfDeaf: r,
                        selfVideo: a,
                        preferredRegion: o,
                        flags: u
                    })
                }
                constructor(e) {
                    super(), this.socket = e
                }
            }