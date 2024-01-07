            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("917351"),
                o = n.n(l),
                r = n("446674"),
                s = n("913144"),
                d = n("191145"),
                u = n("374014"),
                c = n("373469"),
                p = n("271938"),
                f = n("42887"),
                m = n("280168"),
                h = n("99795");

            function v() {
                let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (null == i) e = null;
                else {
                    var n, l, r, s, v;
                    e = d.default.getSelectedParticipantId(i);
                    let t = c.default.getLastActiveStream(),
                        P = null != e ? d.default.getParticipant(i, e) : null;
                    if (((null == P ? void 0 : P.type) === h.ParticipantTypes.ACTIVITY || (null == P ? void 0 : P.type) === h.ParticipantTypes.USER && !(null === (n = P.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (l = d.default.getParticipant(i, (0, u.encodeStreamKey)(t))) || void 0 === l ? void 0 : l.id), null == e) {
                        let t = p.default.getId(),
                            n = o(d.default.getVideoParticipants(i)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                            l = Date.now();
                        null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, l)]).filter(e => {
                            let [t, n] = e;
                            return 0 !== n
                        }).maxBy(e => {
                            let [t, n] = e;
                            return -n
                        })) || void 0 === r ? void 0 : r[0]) && (e = null != a ? a : null === (v = n.first()) || void 0 === v ? void 0 : null === (s = v.user) || void 0 === s ? void 0 : s.id)
                    }
                }
                a !== e && (a = e, t && C.emitChange())
            }
            let P = o.debounce(v, 300);

            function I() {
                return P(), !1
            }
            class S extends r.default.Store {
                initialize() {
                    this.waitFor(d.default, p.default, m.default, c.default, f.default), this.syncWith([d.default, c.default], I)
                }
                getSpeaker(e) {
                    return i !== e && (i = e, v(!1)), null != a ? a : p.default.getId()
                }
            }
            S.displayName = "VideoSpeakerStore";
            let C = new S(s.default, {
                AUDIO_SET_LOCAL_VIDEO_DISABLED: I
            });
            var g = C