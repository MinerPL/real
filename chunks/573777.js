            "use strict";
            u.r(e), u.d(e, {
                openGuildProductLink: function() {
                    return o
                }
            });
            var l = u("37983");
            u("884691");
            var n = u("77078"),
                d = u("537325"),
                i = u("305961"),
                r = u("565559"),
                a = u("49111");

            function o(t, e) {
                var o;
                let c = i.default.getGuild(t);
                r.default.getGuildProductFetchState(e) === r.FetchState.FETCHED && (null === (o = r.default.getGuildProduct(e)) || void 0 === o ? void 0 : o.published) !== !0 && null != c ? (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await u.el("651662").then(u.bind(u, "651662"));
                    return e => (0, l.jsx)(t, {
                        ...e
                    })
                }) : (null == c ? void 0 : c.hasFeature(a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? (0, d.default)(a.Routes.GUILD_PRODUCT(t, e)) : (0, d.default)(a.Routes.CHANNEL(t))
            }