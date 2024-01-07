            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var o = n("917351"),
                l = n.n(o),
                a = n("77078"),
                u = n("6587"),
                d = n("393027"),
                s = n("923959"),
                E = n("162771"),
                r = n("677099"),
                _ = n("287850"),
                A = n("659500"),
                c = n("722525"),
                C = n("49111"),
                T = n("133335");

            function S(e, t) {
                var n, i;
                return [{
                    resourceId: e,
                    type: T.ReadStateTypes.GUILD_EVENT
                }, ...(n = e, i = t, n === C.ME ? _.default.getPrivateChannelIds() : (0, u.default)(n, i).map(e => e.id))]
            }
            var I = l.throttle(function(e, t) {
                var o, l;
                let u, {
                        channelPredicate: _ = (e, t) => !0,
                        guildPredicate: T = e => !0,
                        guildFeaturePredicate: I = (e, t) => !1,
                        withVoiceChannels: f = !1
                    } = t,
                    O = null !== (o = d.default.getState().guildId) && void 0 !== o ? o : C.ME,
                    N = d.default.getState().channelId,
                    L = function(e, t) {
                        let n = [C.ME, ...r.default.getFlattenedGuildIds()],
                            i = n.indexOf(e);
                        return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)))
                    }(O, e),
                    D = e > 0 ? 0 : L.length - 1,
                    R = S(O, f),
                    p = R.indexOf(N) + e;
                for (; null != O && "" !== O;) {
                    if (u = R[p], T(O))
                        for (; null != u && "" !== u;) {
                            if ("string" == typeof u) {
                                if (_(O, u)) return (0, c.transitionToChannel)(O, u, !1, f)
                            } else if ("object" == typeof u && I(u.resourceId, u.type)) return O !== E.default.getGuildId() && (0, c.transitionToChannel)(O, null === (l = s.default.getDefaultChannel(O)) || void 0 === l ? void 0 : l.id), (0, a.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("659707").then(n.bind(n, "659707"));
                                return t => (0, i.jsx)(e, {
                                    ...t,
                                    guildId: O
                                })
                            });
                            p += e, u = R[p]
                        }
                    if (D += e, null == (O = L[D]) || "" === O) break;
                    R = S(O, f), p = e < 0 ? R.length - 1 : 0
                }
                A.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
            }, C.NAVIGATION_THROTTLE)