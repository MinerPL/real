            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var i, a = n("201876"),
                l = n("56947"),
                s = n("386045"),
                r = n("584687"),
                u = n("103979"),
                o = n("845579"),
                d = n("373469"),
                c = n("42203"),
                _ = n("42887"),
                E = n("590401"),
                f = n("568307"),
                h = n("568734"),
                p = n("49111");
            i = class extends a.default {
                get guildId() {
                    return this.getState().guildId
                }
                get channelId() {
                    return this.getState().channelId
                }
                computeVoiceFlags() {
                    var e, t, n;
                    let i = 0,
                        a = o.ClipsAllowVoiceRecording.getSetting();
                    i = (0, h.setFlag)(i, p.VoiceFlags.ALLOW_VOICE_RECORDING, a);
                    let c = s.default.getSettings().clipsEnabled && (0, l.areClipsEnabled)() && ((null === (e = d.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === p.ApplicationStreamStates.ACTIVE || (null === (t = d.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === p.ApplicationStreamStates.PAUSED),
                        {
                            enableDecoupledGameClipping: _
                        } = r.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }),
                        {
                            enableViewerClipping: E
                        } = u.default.getCurrentConfig({
                            location: "computeVoiceFlags"
                        }, {
                            autoTrackExposure: !1
                        });
                    E && (i = (0, h.setFlag)(i, p.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, s.default.getSettings().viewerClipsEnabled));
                    let T = s.default.getSettings().decoupledClipsEnabled && (null === (n = f.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && _;
                    return i = (0, h.setFlag)(i, p.VoiceFlags.CLIPS_ENABLED, c || T)
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
                        preferredRegion: E.default.getPreferredRegion(),
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
                        channelId: i,
                        selfMute: a,
                        selfDeaf: l,
                        selfVideo: s,
                        preferredRegion: r,
                        videoStreamParameters: u,
                        flags: o = 0
                    } = e;
                    s && (null === (t = c.default.getChannel(i)) || void 0 === t ? void 0 : t.type) === p.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: i,
                        selfMute: a,
                        selfDeaf: l,
                        selfVideo: s,
                        preferredRegion: r,
                        videoStreamParameters: u,
                        flags: o
                    }) : this.socket.voiceStateUpdate({
                        guildId: n,
                        channelId: i,
                        selfMute: a,
                        selfDeaf: l,
                        selfVideo: s,
                        preferredRegion: r,
                        flags: o
                    })
                }
                constructor(e) {
                    super(), this.socket = e
                }
            }