            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("18054"),
                r = n("819689"),
                s = n("430475"),
                d = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                _ = n("782340");

            function E(e) {
                let t = e.isForumPost(),
                    E = (0, l.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: T,
                        canAccessChannel: S
                    } = (0, l.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    h = (0, l.useStateFromStores)([d.default], () => {
                        var t;
                        return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: C
                    } = (0, l.useStateFromStores)([s.default], () => s.default.getMessage(e.id), [e.id]),
                    g = t && (T || E && h < 1),
                    N = t && E && !T && h > 0 && null != C;
                return S && (T || g || N) ? (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return g ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return _.default.Messages.DELETE_THREAD;
                        return _.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), N ? r.default.deleteMessage(e.id, e.id) : u.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }