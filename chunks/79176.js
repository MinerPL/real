            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("963662"),
                l = n("49111"),
                r = n("994428"),
                o = n("782340"),
                u = n("843528");

            function d(e) {
                let {
                    guild: t,
                    markAsDismissed: d
                } = e;
                return (0, a.jsx)(i.default, {
                    guild: t,
                    onDismissed: () => d(r.ContentDismissActionType.UNKNOWN),
                    onClick: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("927475").then(n.bind(n, "927475"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    message: o.default.Messages.HUB_LINK_CHANNEL_NOTICE_BODY,
                    cta: o.default.Messages.LEARN_MORE,
                    trackingSource: l.ChannelNoticeCtaSources.HUB_LINK_NOTICE,
                    type: l.ChannelNoticeTypes.HUB_LINK,
                    image: u
                })
            }