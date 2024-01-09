            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("281071"),
                u = t("65597"),
                o = t("77078"),
                a = t("867965"),
                c = t("42203"),
                s = t("404008"),
                r = t("49111"),
                d = t("782340");

            function f(e, n, t) {
                let f = (0, u.default)([c.default], () => c.default.getChannel(e.parent_id));
                return (0, l.jsx)(o.MenuItem, {
                    id: "channel-copy-link",
                    label: d.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, a.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, i.copy)((0, s.getChannelLinkToCopy)(e, f, n, t))
                    }
                })
            }