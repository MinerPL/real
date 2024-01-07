            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("65597"),
                l = s("77078"),
                i = s("228100"),
                r = s("900938"),
                o = s("287883"),
                d = s("310266"),
                u = s("49111"),
                c = s("988268");

            function E() {
                let e = (0, n.default)([r.default], () => r.default.getGuild()),
                    t = (0, o.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "guild_product_settings"),
                    {
                        application: s,
                        loading: E
                    } = (0, i.default)(null == e ? void 0 : e.id, c.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS),
                    _ = null != s && (null == e ? void 0 : e.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
                return (0, a.jsx)("main", {
                    children: null == e || !t || E ? (0, a.jsx)(l.Spinner, {}) : (0, a.jsx)(d.GuildProductsSettingsOverview, {
                        guildId: e.id,
                        hasValidApplication: _
                    })
                })
            }