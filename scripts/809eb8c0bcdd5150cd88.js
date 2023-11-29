(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58186"], {
        573777: function(t, e, u) {
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
        },
        565559: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return D
                }
            }), u("424973"), u("222007");
            var l, n, d = u("249654"),
                i = u("446674"),
                r = u("407846"),
                a = u("913144");
            (n = l || (l = {}))[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED";
            let o = {},
                c = {},
                s = {};

            function C(t) {
                return "guild:".concat(t)
            }

            function E(t) {
                return "guild:".concat(t, ":published")
            }
            let _ = new r.default(t => {
                    let e = [C(t.guild_id)];
                    return t.published && e.push(E(t.guild_id)), e
                }, t => (function(t) {
                    let e = d.default.extractTimestamp(t.id);
                    return t.published ? -e : -e + 1e12
                })(t)),
                f = [];
            class T extends i.default.Store {
                getGuildProductsForGuildFetchState(t) {
                    var e;
                    return null !== (e = o[t]) && void 0 !== e ? e : 0
                }
                getGuildProduct(t) {
                    return _.get(t)
                }
                getGuildProductsForGuild(t, e) {
                    let {
                        publishedOnly: u
                    } = e;
                    return null == t ? f : _.values(u ? E(t) : C(t))
                }
                getGuildProductFetchState(t) {
                    var e;
                    return null !== (e = c[t]) && void 0 !== e ? e : 0
                }
                isGuildProductsCacheExpired(t) {
                    var e;
                    return Date.now() - (null !== (e = s[t]) && void 0 !== e ? e : 0) > 6e5
                }
            }
            T.displayName = "GuildProductsStore";
            var D = new T(a.default, {
                CONNECTION_OPEN: function() {
                    _.clear(), o = {}, c = {}, s = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    let {
                        guildId: e
                    } = t;
                    o[e] = 1;
                    let u = [..._.values(C(e))];
                    u.forEach(t => {
                        _.delete(t.id)
                    })
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    let {
                        guildId: e,
                        products: u
                    } = t;
                    o[e] = 2, s[e] = Date.now(), u.forEach(t => {
                        _.set(t.id, t), c[t.id] = 2
                    })
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
                    let {
                        guildId: e
                    } = t;
                    o[e] = 2
                },
                GUILD_PRODUCT_CREATE: function(t) {
                    let {
                        product: e
                    } = t;
                    _.set(e.id, e)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    let {
                        product: e
                    } = t;
                    _.set(e.id, e)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    let {
                        productId: e
                    } = t;
                    _.delete(e)
                },
                GUILD_PRODUCT_FETCH: function(t) {
                    let {
                        productId: e
                    } = t;
                    c[e] = 1
                },
                GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
                    let {
                        product: e
                    } = t;
                    c[e.id] = 2, _.set(e.id, e)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    let {
                        productId: e,
                        error: u
                    } = t;
                    c[e] = 2, 404 === u.status && _.delete(e)
                }
            })
        }
    }
]);