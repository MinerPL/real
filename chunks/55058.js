            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("963662"),
                i = n("701909"),
                l = n("49111"),
                r = n("994428"),
                o = n("782340"),
                u = n("476742");

            function d(e) {
                let {
                    guild: t,
                    markAsDismissed: n
                } = e;
                return (0, a.jsx)(s.default, {
                    image: u,
                    guild: t,
                    onDismissed: () => n(r.ContentDismissActionType.UNKNOWN),
                    onClick: () => {
                        open(i.default.getArticleURL(l.HelpdeskArticles.CONNECTION_DETAILS)), n(r.ContentDismissActionType.UNKNOWN)
                    },
                    title: o.default.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
                    message: o.default.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
                    cta: o.default.Messages.LEARN_MORE,
                    trackingSource: l.ChannelNoticeCtaSources.LINKED_ROLES_ADMIN_NUX,
                    type: l.ChannelNoticeTypes.LINKED_ROLES_ADMIN
                })
            }