            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("266926"),
                i = n("782340"),
                r = n("616915");

            function o(e) {
                let {
                    message: t
                } = e;
                return (0, a.jsxs)(s.Clickable, {
                    onClick: () => {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("335678").then(n.bind(n, "335678"));
                            return n => (0, a.jsx)(e, {
                                channelId: t.channel_id,
                                messageId: t.id,
                                ...n
                            })
                        })
                    },
                    className: r.accessory,
                    children: [(0, a.jsx)(l.default, {
                        width: 16,
                        height: 16
                    }), (0, a.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        className: r.accessoryText,
                        children: i.default.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
                    })]
                })
            }