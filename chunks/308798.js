            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("18054"),
                d = n("819689"),
                r = n("430475"),
                s = n("610730"),
                o = n("271938"),
                c = n("957255"),
                f = n("49111"),
                E = n("782340");

            function C(e) {
                let t = e.isForumPost(),
                    C = (0, u.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: h
                    } = (0, u.useStateFromStoresObject)([c.default], () => ({
                        canAccessChannel: c.default.can(e.accessPermissions, e),
                        canManageChannel: c.default.can(e.isThread() ? f.Permissions.MANAGE_THREADS : f.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    _ = (0, u.useStateFromStores)([s.default], () => {
                        var t;
                        return null !== (t = s.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: N
                    } = (0, u.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    T = t && (S || C && _ < 1),
                    v = t && C && !S && _ > 0 && null != N;
                return h && (S || T || v) ? (0, l.jsx)(a.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === f.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return T ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), v ? d.default.deleteMessage(e.id, e.id) : i.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }