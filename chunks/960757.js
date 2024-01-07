            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("152475"),
                i = n("42203"),
                r = n("501030"),
                u = n("730647"),
                o = n("49111");
            let d = {
                can_broadcast: !1
            };

            function c(e, t, n) {
                let [c, E] = l.useState(d), [f, _] = l.useState(!1), I = l.useRef(!1), h = null == e ? void 0 : e.id, T = null == e ? void 0 : e.hasFeature(o.GuildFeatures.HAS_DIRECTORY_ENTRY);
                l.useEffect(() => {
                    if (!T) {
                        E(d);
                        return
                    }
                    if (I.current || null == h) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, r.getDirectoryEntryBroadcastInfo)(h, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(d)
                        }
                        I.current = !1
                    };
                    e()
                }, [h, T, t]), l.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        _(!1);
                        return
                    }
                    _(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let N = (0, a.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(n, [i.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: N && f,
                    setBroadcastToDirectoryChannels: _,
                    canEveryoneRoleViewEvent: N
                }
            }