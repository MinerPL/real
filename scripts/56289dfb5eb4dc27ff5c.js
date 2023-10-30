(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75102"], {
        162426: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                default: function() {
                    return d
                }
            });
            var r = u("884691"),
                n = u("599417"),
                i = u("782340");

            function d(t) {
                let [e, u] = r.useState(!1), [d, l] = r.useState(null), a = r.useCallback(async function() {
                    for (var e = arguments.length, r = Array(e), d = 0; d < e; d++) r[d] = arguments[d];
                    try {
                        return l(null), u(!0), await t(...r)
                    } catch (t) {
                        t.message !== i.default.Messages.MFA_V2_CANCELED && l(new n.default(t))
                    } finally {
                        u(!1)
                    }
                }, [t]);
                return [a, {
                    loading: e,
                    error: d
                }]
            }
        },
        843962: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                getChannelIconURL: function() {
                    return l
                }
            });
            var r = u("697218"),
                n = u("315102"),
                i = u("449008"),
                d = u("49111");

            function l(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    u = arguments.length > 2 ? arguments[2] : void 0;
                switch (t.type) {
                    case d.ChannelTypes.DM:
                        let [l] = t.recipients.map(r.default.getUser).filter(i.isNotNullish);
                        if (null == l) return null;
                        return l.getAvatarURL(void 0, e, u);
                    case d.ChannelTypes.GROUP_DM:
                        return n.default.getChannelIconURL({
                            id: t.id,
                            icon: t.icon,
                            applicationId: t.getApplicationId(),
                            size: e
                        })
                }
            }
        },
        911530: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                fetchGuildProductsForGuild: function() {
                    return d
                },
                fetchGuildProduct: function() {
                    return l
                },
                updateGuildProductListing: function() {
                    return a
                },
                deleteGuildProductListing: function() {
                    return c
                }
            });
            var r = u("913144"),
                n = u("448993"),
                i = u("242278");
            let d = async t => {
                r.default.dispatch({
                    type: "GUILD_PRODUCTS_FETCH",
                    guildId: t
                });
                try {
                    let e = await i.getGuildProductListingsForGuild(t);
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_SUCCESS",
                        guildId: t,
                        products: e
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_FAILURE",
                        guildId: t
                    })
                }
            }, l = async (t, e) => {
                r.default.dispatch({
                    type: "GUILD_PRODUCT_FETCH",
                    productId: e
                });
                try {
                    let u = await i.getGuildProductListing(t, e);
                    return r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_SUCCESS",
                        product: u
                    }), u
                } catch (t) {
                    throw r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_FAILURE",
                        productId: e,
                        error: new n.APIError(t)
                    }), t
                }
            };
            async function a(t, e, u) {
                let n = await i.updateGuildProductListing(t, e, u);
                return r.default.dispatch({
                    type: "GUILD_PRODUCT_UPDATE",
                    product: n
                }), n
            }
            async function c(t, e) {
                return await i.deleteGuildProductListing(t, e), r.default.dispatch({
                    type: "GUILD_PRODUCT_DELETE",
                    productId: e
                }), !0
            }
        },
        442379: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                useFetchGuildProductListingsForGuild: function() {
                    return s
                },
                useFetchGuildProductListing: function() {
                    return f
                },
                useGuildProductsForGuild: function() {
                    return E
                },
                useGuildProductListingById: function() {
                    return C
                },
                useCanManageGuildProduct: function() {
                    return _
                }
            });
            var r = u("884691"),
                n = u("446674");
            u("162426");
            var i = u("619443"),
                d = u("957255"),
                l = u("162771"),
                a = u("911530"),
                c = u("565559"),
                o = u("49111");
            let s = t => {
                    let e = (0, n.useStateFromStores)([c.default], () => null != t ? c.default.getGuildProductsForGuildFetchState(t) : c.FetchState.FETCHED, [t]),
                        u = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
                        [d, l] = r.useState(!0);
                    return r.useEffect(() => {
                        d && (e === c.FetchState.NOT_FETCHED || e === c.FetchState.FETCHED && c.default.isGuildProductsCacheExpired(t)) && u && a.fetchGuildProductsForGuild(t), l(!u)
                    }, [t, u, e, d]), {
                        listingsLoaded: e === c.FetchState.FETCHED && !d
                    }
                },
                f = function(t, e) {
                    let {
                        requireCurrentGuild: u
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        requireCurrentGuild: !0
                    }, d = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, n.useStateFromStores)([l.default], () => l.default.getGuildId());
                    return r.useEffect(() => {
                        let r = c.default.getGuildProductFetchState(e);
                        if ((!u || o === t) && d && r === c.FetchState.NOT_FETCHED) try {
                            a.fetchGuildProduct(t, e)
                        } catch (t) {}
                    }, [t, e, d, o, u]), (0, n.useStateFromStores)([c.default], () => c.default.getGuildProduct(e))
                },
                E = (t, e) => {
                    let {
                        publishedOnly: u
                    } = e;
                    return (0, n.useStateFromStores)([c.default], () => c.default.getGuildProductsForGuild(t, {
                        publishedOnly: u
                    }))
                },
                C = t => (0, n.useStateFromStores)([c.default], () => null == t ? void 0 : c.default.getGuildProduct(t)),
                _ = t => (0, n.useStateFromStores)([d.default], () => null != t && d.default.can(o.Permissions.ADMINISTRATOR, t))
        },
        242278: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                updateGuildProductListing: function() {
                    return l
                },
                deleteGuildProductListing: function() {
                    return a
                },
                getGuildProductListingsForGuild: function() {
                    return c
                },
                getGuildProductListing: function() {
                    return o
                },
                requestDownloadUrl: function() {
                    return s
                }
            });
            var r = u("872717"),
                n = u("448993"),
                i = u("271560"),
                d = u("49111");
            let l = async (t, e, u) => {
                let {
                    priceTier: i,
                    imageName: l,
                    createNewRole: a,
                    unlinkRole: c,
                    ...o
                } = u;
                try {
                    let u = await r.default.patch({
                        url: d.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
                        body: {
                            ...o,
                            image_name: l,
                            price_tier: i,
                            create_new_role: a,
                            unlink_role: c
                        }
                    });
                    return u.body
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, a = async (t, e) => {
                try {
                    await r.default.delete({
                        url: d.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    })
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, c = async t => {
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: d.Endpoints.GUILD_PRODUCT_LISTINGS(t)
                    });
                    return e.body.listings
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, o = async (t, e) => {
                try {
                    let u = await (0, i.httpGetWithCountryCodeQuery)({
                        url: d.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    });
                    return u.body
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, s = async t => {
                let {
                    guildId: e,
                    productId: u,
                    attachmentId: i
                } = t;
                try {
                    let t = await r.default.post({
                        url: d.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, u, i)
                    });
                    return t.body
                } catch (t) {
                    throw new n.APIError(t)
                }
            }
        },
        565559: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                FetchState: function() {
                    return n
                },
                default: function() {
                    return T
                }
            });
            var r, n, i = u("249654"),
                d = u("446674"),
                l = u("407846"),
                a = u("913144");
            (r = n || (n = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let c = {},
                o = {},
                s = {};

            function f(t) {
                return "guild:".concat(t)
            }

            function E(t) {
                return "guild:".concat(t, ":published")
            }
            let C = new l.default(t => {
                    let e = [f(t.guild_id)];
                    return t.published && e.push(E(t.guild_id)), e
                }, t => (function(t) {
                    let e = i.default.extractTimestamp(t.id);
                    return t.published ? -e : -e + 1e12
                })(t)),
                _ = [];
            class D extends d.default.Store {
                getGuildProductsForGuildFetchState(t) {
                    var e;
                    return null !== (e = c[t]) && void 0 !== e ? e : n.NOT_FETCHED
                }
                getGuildProduct(t) {
                    return C.get(t)
                }
                getGuildProductsForGuild(t, e) {
                    let {
                        publishedOnly: u
                    } = e;
                    return null == t ? _ : C.values(u ? E(t) : f(t))
                }
                getGuildProductFetchState(t) {
                    var e;
                    return null !== (e = o[t]) && void 0 !== e ? e : n.NOT_FETCHED
                }
                isGuildProductsCacheExpired(t) {
                    var e;
                    return Date.now() - (null !== (e = s[t]) && void 0 !== e ? e : 0) > 6e5
                }
            }
            D.displayName = "GuildProductsStore";
            var T = new D(a.default, {
                CONNECTION_OPEN: function() {
                    C.clear(), c = {}, o = {}, s = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    let {
                        guildId: e
                    } = t;
                    c[e] = n.FETCHING;
                    let u = [...C.values(f(e))];
                    u.forEach(t => {
                        C.delete(t.id)
                    })
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    let {
                        guildId: e,
                        products: u
                    } = t;
                    c[e] = n.FETCHED, s[e] = Date.now(), u.forEach(t => {
                        C.set(t.id, t), o[t.id] = n.FETCHED
                    })
                },
                GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
                    let {
                        guildId: e
                    } = t;
                    c[e] = n.FETCHED
                },
                GUILD_PRODUCT_CREATE: function(t) {
                    let {
                        product: e
                    } = t;
                    C.set(e.id, e)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    let {
                        product: e
                    } = t;
                    C.set(e.id, e)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    let {
                        productId: e
                    } = t;
                    C.delete(e)
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
                    o[e.id] = n.FETCHED, C.set(e.id, e)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    let {
                        productId: e,
                        error: u
                    } = t;
                    o[e] = n.FETCHED, 404 === u.status && C.delete(e)
                }
            })
        },
        928576: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                useProductType: function() {
                    return d
                },
                usePrice: function() {
                    return l
                }
            });
            var r = u("884691"),
                n = u("153160"),
                i = u("782340");

            function d(t) {
                return r.useMemo(() => {
                    if (null == t) return;
                    let e = null != t.role_id,
                        u = t.attachments_count > 0;
                    if (e && u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
                    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
                    if (u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
                }, [t])
            }

            function l(t) {
                return r.useMemo(() => {
                    if ((null == t ? void 0 : t.price) == null) return;
                    let {
                        amount: e,
                        currency: u
                    } = t.price;
                    return (0, n.formatPrice)(e, u)
                }, [t])
            }
        },
        35018: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                default: function() {
                    return i
                }
            });
            var r = u("37983");
            u("884691");
            var n = u("77078"),
                i = {
                    open: function(t) {
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await u.el("560057").then(u.bind(u, "560057"));
                            return u => (0, r.jsx)(e, {
                                ...t,
                                ...u
                            })
                        })
                    }
                }
        }
    }
]);