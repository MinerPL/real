            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("714617"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("42203"),
                u = n("305961"),
                o = n("945956"),
                d = n("18494"),
                c = n("991170"),
                _ = n("488464"),
                E = n("998716"),
                f = n("118033"),
                h = n("834052"),
                p = n("819450"),
                T = n("837979"),
                C = n("49111");
            let m = null;

            function S() {
                let e = function() {
                    var e, t, n, i, a, l, s;
                    let o = d.default.getVoiceChannelId();
                    if (null == o) return null;
                    let S = h.default.getStageInstanceByChannel(o);
                    if (null == S) return null;
                    let I = r.default.getChannel(o);
                    if (null == I || !c.default.canEveryone(C.Permissions.VIEW_CHANNEL, I)) return null;
                    let g = u.default.getGuild(I.getGuildId());
                    if (null == g || !g.hasFeature(C.GuildFeatures.DISCOVERABLE)) return null;
                    let A = (0, f.packStageChannelPartyId)(I, S),
                        N = (null == m ? void 0 : null === (e = m.party) || void 0 === e ? void 0 : e.id) === A ? m : null,
                        O = _.default.getMutableParticipants(I.id, E.StageChannelParticipantNamedIndex.SPEAKER),
                        R = O.filter(e => e.type === E.StageChannelParticipantTypes.STREAM).length,
                        y = O.length - R,
                        v = _.default.getParticipantCount(o) - R,
                        M = (null == N ? void 0 : null === (t = N.party) || void 0 === t ? void 0 : t.size) != null ? N.party.size[1] : 0;
                    return {
                        application_id: T.STAGE_APPLICATION_ID,
                        name: null !== (a = null !== (i = S.topic) && void 0 !== i ? i : I.topic) && void 0 !== a ? a : I.name,
                        type: (0, p.getStageHasMedia)(I.id) ? C.ActivityTypes.WATCHING : C.ActivityTypes.LISTENING,
                        timestamps: {
                            start: null !== (l = null == N ? void 0 : null === (n = N.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== l ? l : new Date().getTime()
                        },
                        assets: {
                            small_image: null !== (s = g.icon) && void 0 !== s ? s : void 0,
                            small_text: g.name
                        },
                        party: {
                            id: A,
                            size: [y, Math.max(v, M)]
                        }
                    }
                }();
                return !a(e, m) && (m = e, !0)
            }
            class I extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, d.default, h.default, o.default)
                }
                getActivity() {
                    return m
                }
            }
            I.displayName = "StageChannelSelfRichPresenceStore";
            var g = new I(s.default, {
                CONNECTION_OPEN: S,
                STAGE_INSTANCE_CREATE: S,
                STAGE_INSTANCE_UPDATE: S,
                STAGE_INSTANCE_DELETE: S,
                VOICE_CHANNEL_SELECT: S,
                RTC_CONNECTION_STATE: function(e) {
                    var t, n, i;
                    let {
                        state: a
                    } = e, l = null !== (i = null == m ? void 0 : null === (n = m.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
                    return a === C.RTCConnectionStates.RTC_CONNECTED && !(l > 0) && S()
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    if (null == m) return;
                    let n = (0, f.unpackStageChannelParty)(m);
                    null != n && null != t.find(e => e.channelId === n.channelId) && S()
                }
            })