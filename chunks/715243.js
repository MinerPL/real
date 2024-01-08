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
                let r = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !r ? null : (0, a.jsx)(i.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }