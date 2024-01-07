            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("477566"),
                r = n("680986"),
                s = n("263024"),
                d = n("300322"),
                o = n("42203"),
                f = n("724210"),
                c = n("782340");

            function _(e) {
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(e.parent_id)),
                    n = (0, d.useIsThreadModerator)(e),
                    _ = (0, r.useExistingPin)(e);
                return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(f.ChannelFlags.PINNED) ? (0, a.jsx)(i.MenuItem, {
                    id: "unpin-thread",
                    label: c.default.Messages.UNPIN_POST,
                    action: () => s.default.unpin(e)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "pin-thread",
                    label: c.default.Messages.PIN_POST,
                    action: function() {
                        null != _ ? u.default.show({
                            title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: async () => {
                                await s.default.unpin(_), s.default.pin(e)
                            }
                        }) : s.default.pin(e)
                    }
                }) : null
            }