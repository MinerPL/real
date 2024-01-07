            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var a = n("862337"),
                s = n("913144"),
                i = n("316272"),
                l = n("462274"),
                r = n("697218"),
                o = n("760679"),
                u = n("827520");
            class d extends i.default {
                _initialize() {
                    !__OVERLAY__ && (s.default.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived))
                }
                _terminate() {
                    !__OVERLAY__ && (s.default.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop())
                }
                _handleVoiceChannelEffectReceived(e) {
                    var t;
                    let {
                        lineId: n,
                        points: a,
                        userId: s,
                        streamerId: i,
                        emojiHose: d
                    } = e;
                    if (null != i && s !== (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
                        if (null != a && null != n) {
                            let e = r.default.getUser(s);
                            null != e && (0, l.maybeFetchColors)(e.getAvatarURL(null, u.AVATAR_COLOR_AVATAR_SIZE)), (0, o.updateLinePoints)(n, s, i, a)
                        } else null != d && (d.lastUpdatedAt = Date.now(), (0, o.updateEmojiHose)(d, s, i))
                    }
                }
                constructor(...e) {
                    super(...e), this.linesToUpdate = {}, this.lineBatchTimer = new a.Interval, this._handleDrawLinePoint = e => {
                        let {
                            channelId: t,
                            lineId: n,
                            streamerId: a,
                            point: s
                        } = e;
                        null == this.linesToUpdate[n] ? this.linesToUpdate[n] = {
                            channelId: t,
                            streamerId: a,
                            points: [s]
                        } : this.linesToUpdate[n].points.push(s), null == this.lineBatchTimer._ref && this.lineBatchTimer.start(u.EVENT_TICK_RATE, this.sendLineBatch)
                    }, this.sendLineBatch = () => {
                        for (let e in this.linesToUpdate) {
                            let {
                                channelId: t,
                                points: n,
                                streamerId: a
                            } = this.linesToUpdate[e];
                            (0, o.addLinePoints)(t, e, a, n)
                        }
                        this.linesToUpdate = {}, this.lineBatchTimer.stop()
                    }
                }
            }
            var c = new d