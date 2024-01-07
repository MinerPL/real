            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("424973");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("299285"),
                o = n("375202"),
                r = n("49040"),
                d = n("373469"),
                u = n("86878"),
                c = n("546463"),
                f = n("260320"),
                h = n("169602"),
                p = n("568307"),
                g = n("697218"),
                m = n("703370"),
                E = n("901165"),
                S = n("158998"),
                v = n("522019"),
                y = l.default.connectStores([p.default, m.default, d.default, g.default, E.default, f.default, u.default, h.default, c.default, s.default], () => {
                    var e, t;
                    let n;
                    let i = f.default.getLobbiesWithVoice().find(e => null != u.default.getApplication(e.application_id)),
                        l = [],
                        v = "";
                    if (null != i) {
                        let e = u.default.getApplication(i.application_id);
                        (null == e ? void 0 : e.name) != null && (v = e.name), n = i.application_id, a.each(h.default.getVoiceStates(i.id), e => {
                            let t = g.default.getUser(e.userId);
                            null != t && l.push({
                                voiceState: e,
                                user: t,
                                nick: t.username,
                                comparator: S.default.getName(t)
                            })
                        })
                    }
                    let y = (0, o.default)(p.default, m.default),
                        C = d.default.getCurrentUserActiveStream(),
                        N = d.default.getStreamerActiveStreamMetadata();
                    return {
                        title: v,
                        context: n,
                        sortedVoiceStates: a.sortBy(l, e => {
                            let {
                                comparator: t
                            } = e;
                            return t
                        }),
                        lobbyId: null != i ? i.id : void 0,
                        displayUserMode: E.default.getDisplayUserMode(),
                        displayNameMode: E.default.getDisplayNameMode(),
                        avatarSizeMode: E.default.getAvatarSizeMode(),
                        application: null != y ? s.default.getApplication(null !== (t = null === (e = c.default.getGameByGameData(y)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "") : null,
                        streamApplication: (0, r.default)(y),
                        stream: C,
                        streamMetadata: N,
                        hasStream: !1
                    }
                })(v.VoiceWidget)