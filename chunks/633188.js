            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var u = t("37983");
            t("884691");
            var i = t("281071"),
                s = t("77078"),
                r = t("404008"),
                a = t("724210"),
                l = t("782340");

            function o(e) {
                return (0, u.jsx)(s.MenuItem, {
                    id: "role-subscription-copy-link",
                    label: l.default.Messages.COPY_LINK,
                    action: () => {
                        (0, i.copy)((0, r.getChannelPermalink)(e, a.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                    }
                })
            }