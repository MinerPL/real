            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("155823"),
                u = n("987317"),
                l = n("305122"),
                o = n("675961"),
                d = n("957255"),
                r = n("18494"),
                c = n("49111"),
                f = n("782340");

            function p(e, t) {
                let n = (0, i.useStateFromStores)([d.default], () => d.default.can(c.Permissions.CONNECT, e), [e]),
                    p = (0, i.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    _ = (0, o.useCustomJoinSound)(t),
                    E = p === e.id;
                return e.isGuildVocal() && n && null != _ && !E ? (0, a.jsx)(s.MenuItem, {
                    id: "join-muted-custom-join-sound",
                    label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
                    action: () => {
                        (0, l.muteCustomJoinSound)(e.id), u.default.selectVoiceChannel(e.id)
                    }
                }) : null
            }