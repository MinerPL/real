            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                u = n("18054"),
                l = n("843624"),
                d = n("259141"),
                o = n("957255"),
                r = n("207273"),
                c = n("49111"),
                f = n("782340");

            function _(e, t) {
                let _ = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.MANAGE_CHANNELS, t)),
                    p = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)),
                    E = (0, d.useIsConnectedToVoiceChannel)(e),
                    S = (0, i.useStateFromStores)([r.default], () => r.default.getChannelStatus(e)),
                    m = null != S && S.length > 0;
                return e.isGuildVoice() && (_ || p) ? !E && _ && m ? (0, a.jsx)(s.MenuItem, {
                    id: "clear-status",
                    label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                    action: () => {
                        u.default.updateVoiceChannelStatus(e.id, "")
                    }
                }) : E && p ? (0, a.jsx)(s.MenuItem, {
                    id: "set-status",
                    label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
                    action: () => {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("843624").then(n.bind(n, "843624"));
                            return n => (0, a.jsx)(t, {
                                channel: e,
                                ...n
                            })
                        }, {
                            modalKey: l.VOICE_CHANNEL_STATUS_MODAL_KEY
                        })
                    }
                }) : null : null
            }