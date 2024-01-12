            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("152475"),
                r = l("42203"),
                i = l("501030"),
                u = l("730647"),
                d = l("49111");
            let o = {
                can_broadcast: !1
            };

            function c(e, t, l) {
                let [c, E] = n.useState(o), [f, _] = n.useState(!1), I = n.useRef(!1), T = null == e ? void 0 : e.id, N = null == e ? void 0 : e.hasFeature(d.GuildFeatures.HAS_DIRECTORY_ENTRY);
                n.useEffect(() => {
                    if (!N) {
                        E(o);
                        return
                    }
                    if (I.current || null == T) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, i.getDirectoryEntryBroadcastInfo)(T, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(o)
                        }
                        I.current = !1
                    };
                    e()
                }, [T, N, t]), n.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        _(!1);
                        return
                    }
                    _(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let h = (0, a.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(l, [r.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: h && f,
                    setBroadcastToDirectoryChannels: _,
                    canEveryoneRoleViewEvent: h
                }
            }