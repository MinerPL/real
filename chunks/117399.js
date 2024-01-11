            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("477566"),
                r = n("680986"),
                o = n("263024"),
                u = n("300322"),
                d = n("42203"),
                c = n("724210"),
                f = n("782340");

            function h(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(e.parent_id)),
                    n = (0, u.useIsThreadModerator)(e),
                    h = (0, r.useExistingPin)(e);
                return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(c.ChannelFlags.PINNED) ? (0, a.jsx)(s.MenuItem, {
                    id: "unpin-thread",
                    label: f.default.Messages.UNPIN_POST,
                    action: () => o.default.unpin(e)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "pin-thread",
                    label: f.default.Messages.PIN_POST,
                    action: function() {
                        null != h ? i.default.show({
                            title: f.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: f.default.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: async () => {
                                await o.default.unpin(h), o.default.pin(e)
                            }
                        }) : o.default.pin(e)
                    }
                }) : null
            }