            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return r
                },
                default: function() {
                    return g
                }
            }), n("424973"), n("222007");
            var r, i, u = n("249654"),
                l = n("446674"),
                o = n("407846"),
                s = n("913144");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let a = {},
                d = {},
                c = {};

            function f(e) {
                return "guild:".concat(e)
            }

            function h(e) {
                return "guild:".concat(e, ":published")
            }
            let _ = new o.default(e => {
                    let t = [f(e.guild_id)];
                    return e.published && t.push(h(e.guild_id)), t
                }, e => (function(e) {
                    let t = u.default.extractTimestamp(e.id);
                    return e.published ? -t : -t + 1e12
                })(e)),
                C = [];
            class p extends l.default.Store {
                getGuildProductsForGuildFetchState(e) {
                    var t;
                    return null !== (t = a[e]) && void 0 !== t ? t : 0
                }
                getGuildProduct(e) {
                    return _.get(e)
                }
                getGuildProductsForGuild(e, t) {
                    let {
                        publishedOnly: n
                    } = t;
                    return null == e ? C : _.values(n ? h(e) : f(e))
                }
                getGuildProductFetchState(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : 0
                }
                isGuildProductsCacheExpired(e) {
                    var t;
                    return Date.now() - (null !== (t = c[e]) && void 0 !== t ? t : 0) > 6e5
                }
            }
            p.displayName = "GuildProductsStore";
            var g = new p(s.default, {
                CONNECTION_OPEN: function() {
                    _.clear(), a = {}, d = {}, c = {}
                },
                GUILD_PRODUCTS_FETCH: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a[t] = 1;
                    let n = [..._.values(f(t))];
                    n.forEach(e => {
                        _.delete(e.id)
                    })
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        products: n
                    } = e;
                    a[t] = 2, c[t] = Date.now(), n.forEach(e => {
                        _.set(e.id, e), d[e.id] = 2
                    })
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a[t] = 2
                },
                GUILD_PRODUCT_CREATE: function(e) {
                    let {
                        product: t
                    } = e;
                    _.set(t.id, t)
                },
                GUILD_PRODUCT_UPDATE: function(e) {
                    let {
                        product: t
                    } = e;
                    _.set(t.id, t)
                },
                GUILD_PRODUCT_DELETE: function(e) {
                    let {
                        productId: t
                    } = e;
                    _.delete(t)
                },
                GUILD_PRODUCT_FETCH: function(e) {
                    let {
                        productId: t
                    } = e;
                    d[t] = 1
                },
                GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
                    let {
                        product: t
                    } = e;
                    d[t.id] = 2, _.set(t.id, t)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(e) {
                    let {
                        productId: t,
                        error: n
                    } = e;
                    d[t] = 2, 404 === n.status && _.delete(t)
                }
            })