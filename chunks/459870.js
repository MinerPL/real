            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                u = l("77078"),
                i = l("851387"),
                s = l("987317"),
                d = l("679653"),
                r = l("271938"),
                o = l("42203"),
                c = l("923959"),
                f = l("26989"),
                m = l("305961"),
                M = l("957255"),
                E = l("27618"),
                S = l("697218"),
                g = l("800762"),
                I = l("404008"),
                C = l("991170"),
                _ = l("49111"),
                v = l("782340");

            function N(e, t) {
                let l = (0, n.useStateFromStores)([c.default], () => c.default.getChannels(t)[c.GUILD_VOCAL_CHANNELS_KEY], [t]),
                    N = (0, n.useStateFromStores)([g.default, o.default], () => {
                        let l = g.default.getUserVoiceChannelId(t, e.id);
                        return o.default.getChannel(l)
                    }, [t, e.id]),
                    A = (0, n.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, e.id), [t, e.id]);
                if (A || null == N) return null;
                let O = e.id === r.default.getId();
                if (!O && !M.default.can(_.Permissions.MOVE_MEMBERS, N)) return null;
                let R = l.filter(t => {
                    let {
                        channel: l
                    } = t;
                    return l.id !== N.id && (O ? M.default.can(_.Permissions.CONNECT, l) && !(0, I.isChannelFull)(l, g.default, m.default) : M.default.can(_.Permissions.MOVE_MEMBERS, l) && (M.default.can(_.Permissions.CONNECT, l) || C.default.can({
                        permission: _.Permissions.CONNECT,
                        user: e,
                        context: l
                    })) && !(0, I.isChannelFull)(l, g.default, m.default))
                });
                return 0 === R.length ? null : (0, a.jsx)(u.MenuItem, {
                    id: "voice-move",
                    label: v.default.Messages.MOVE_TO,
                    children: R.map(l => {
                        let {
                            channel: n
                        } = l;
                        return (0, a.jsx)(u.MenuItem, {
                            id: n.id,
                            action: () => {
                                var l;
                                return l = n, void(e.id === r.default.getId() ? s.default.selectVoiceChannel(l.id) : i.default.setChannel(t, e.id, l.id))
                            },
                            label: (0, d.computeChannelName)(n, S.default, E.default)
                        }, n.id)
                    })
                })
            }