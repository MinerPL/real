            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-text-channel",
                            label: s.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-voice-channel",
                            label: s.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }