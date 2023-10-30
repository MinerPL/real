(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58186"], {
        573777: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                openGuildProductLink: function() {
                    return E
                }
            });
            var l = u("37983");
            u("884691");
            var n = u("77078"),
                d = u("537325"),
                i = u("305961"),
                r = u("565559"),
                a = u("49111");

            function E(t, e) {
                var E;
                let o = i.default.getGuild(t);
                r.default.getGuildProductFetchState(e) === r.FetchState.FETCHED && (null === (E = r.default.getGuildProduct(e)) || void 0 === E ? void 0 : E.published) !== !0 && null != o ? (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await u.el("651662").then(u.bind(u, "651662"));
                    return e => (0, l.jsx)(t, {
                        ...e
                    })
                }) : (null == o ? void 0 : o.hasFeature(a.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? (0, d.default)(a.Routes.GUILD_PRODUCT(t, e)) : (0, d.default)(a.Routes.CHANNEL(t))
            }
        },
        565559: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                FetchState: function() {
                    return n
                },
                default: function() {
                    return F
                }
            });
            var l, n, d = u("249654"),
                i = u("446674"),
                r = u("407846"),
                a = u("913144");
            (l = n || (n = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED";
            let E = {},
                o = {},
                c = {};

            function C(t) {
                return "guild:".concat(t)
            }

            function T(t) {
                return "guild:".concat(t, ":published")
            }
            let s = new r.default(t => {
                    let e = [C(t.guild_id)];
                    return t.published && e.push(T(t.guild_id)), e
                }, t => (function(t) {
                    let e = d.default.extractTimestamp(t.id);
                    return t.published ? -e : -e + 1e12
                })(t)),
                D = [];
            class _ extends i.default.Store {
                getGuildProductsForGuildFetchState(t) {
                    var e;
                    return null !== (e = E[t]) && void 0 !== e ? e : n.NOT_FETCHED
                }
                getGuildProduct(t) {
                    return s.get(t)
                }
                getGuildProductsForGuild(t, e) {
                    let {
                        publishedOnly: u
                    } = e;
                    return null == t ? D : s.values(u ? T(t) : C(t))
                }
                getGuildProductFetchState(t) {
                    var e;
                    return null !== (e = o[t]) && void 0 !== e ? e : n.NOT_FETCHED
                }
                isGuildProductsCacheExpired(t) {
                    var e;
                    return Date.now() - (null !== (e = c[t]) && void 0 !== e ? e : 0) > 6e5
                }
            }
            _.displayName = "GuildProductsStore";
            var F = new _(a.default, {
                CONNECTION_OPEN: function() {
                    s.clear(), E = {}, o = {}, c = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    let {
                        guildId: e
                    } = t;
                    E[e] = n.FETCHING;
                    let u = [...s.values(C(e))];
                    u.forEach(t => {
                        s.delete(t.id)
                    })
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    let {
                        guildId: e,
                        products: u
                    } = t;
                    E[e] = n.FETCHED, c[e] = Date.now(), u.forEach(t => {
                        s.set(t.id, t), o[t.id] = n.FETCHED
                    })
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
                    let {
                        guildId: e
                    } = t;
                    E[e] = n.FETCHED
                },
                GUILD_PRODUCT_CREATE: function(t) {
                    let {
                        product: e
                    } = t;
                    s.set(e.id, e)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    let {
                        product: e
                    } = t;
                    s.set(e.id, e)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    let {
                        productId: e
                    } = t;
                    s.delete(e)
                },
                GUILD_PRODUCT_FETCH: function(t) {
                    let {
                        productId: e
                    } = t;
                    o[e] = n.FETCHING
                },
                GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
                    let {
                        product: e
                    } = t;
                    o[e.id] = n.FETCHED, s.set(e.id, e)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    let {
                        productId: e,
                        error: u
                    } = t;
                    o[e] = n.FETCHED, 404 === u.status && s.delete(e)
                }
            })
        }
    }
]);