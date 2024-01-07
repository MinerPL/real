            "use strict";
            t.r(u), t.d(u, {
                default: function() {
                    return c
                }
            });
            var n = t("37983");
            t("884691");
            var a = t("446674"),
                l = t("77078"),
                s = t("592407"),
                r = t("817963"),
                o = t("305961"),
                d = t("49111"),
                i = t("782340");

            function c(e, u) {
                let t = (0, a.useStateFromStores)([o.default], () => null != e ? o.default.getGuild(e) : null),
                    {
                        canCreateExpressions: c,
                        canManageAllExpressions: S
                    } = (0, r.useManageResourcePermissions)(t);
                return null != e && c && S ? (0, n.jsx)(l.MenuItem, {
                    id: i.default.Messages.SERVER_SETTINGS,
                    label: i.default.Messages.SERVER_SETTINGS,
                    action: () => {
                        s.default.open(e, d.GuildSettingsSections.SOUNDBOARD), null == u || u()
                    }
                }) : null
            }