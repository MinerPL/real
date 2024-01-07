            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("281071"),
                a = n("65597"),
                i = n("77078"),
                d = n("867965"),
                r = n("42203"),
                s = n("404008"),
                o = n("49111"),
                c = n("782340");

            function f(e, t, n) {
                let f = (0, a.default)([r.default], () => r.default.getChannel(e.parent_id));
                return (0, l.jsx)(i.MenuItem, {
                    id: "channel-copy-link",
                    label: c.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, d.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, u.copy)((0, s.getChannelLinkToCopy)(e, f, t, n))
                    }
                })
            }