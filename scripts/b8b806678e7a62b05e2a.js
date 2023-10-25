(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76292"], {
        31745: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                CirclePlusIcon: function() {
                    return l
                }
            });
            var r = u("920040");
            u("773670");
            var n = u("912557"),
                i = u("75196");
            let l = t => {
                let {
                    width: e = 24,
                    height: u = 24,
                    color: l = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        162426: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                default: function() {
                    return l
                }
            });
            var r = u("773670"),
                n = u("599417"),
                i = u("782340");

            function l(t) {
                let [e, u] = r.useState(!1), [l, d] = r.useState(null), a = r.useCallback(async function() {
                    for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
                    try {
                        return d(null), u(!0), await t(...r)
                    } catch (t) {
                        t.message !== i.default.Messages.MFA_V2_CANCELED && d(new n.default(t))
                    } finally {
                        u(!1)
                    }
                }, [t]);
                return [a, {
                    loading: e,
                    error: l
                }]
            }
        },
        843962: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                getChannelIconURL: function() {
                    return d
                }
            });
            var r = u("697218"),
                n = u("315102"),
                i = u("449008"),
                l = u("49111");

            function d(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    u = arguments.length > 2 ? arguments[2] : void 0;
                switch (t.type) {
                    case l.ChannelTypes.DM:
                        let [d] = t.recipients.map(r.default.getUser).filter(i.isNotNullish);
                        if (null == d) return null;
                        return d.getAvatarURL(void 0, e, u);
                    case l.ChannelTypes.GROUP_DM:
                        return n.default.getChannelIconURL({
                            id: t.id,
                            icon: t.icon,
                            applicationId: t.getApplicationId(),
                            size: e
                        })
                }
            }
        },
        359366: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                fetchGuildProductsForGuild: function() {
                    return l
                },
                fetchGuildProduct: function() {
                    return d
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
            let l = async t => {
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
            }, d = async (t, e) => {
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
                    return C
                },
                useGuildProductListingById: function() {
                    return E
                },
                useCanManageGuildProduct: function() {
                    return _
                }
            });
            var r = u("773670"),
                n = u("498225");
            u("162426");
            var i = u("619443"),
                l = u("957255"),
                d = u("162771"),
                a = u("359366"),
                c = u("565559"),
                o = u("49111");
            let s = t => {
                    let e = (0, n.useStateFromStores)([c.default], () => null != t ? c.default.getGuildProductsForGuildFetchState(t) : c.FetchState.FETCHED, [t]),
                        u = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
                        [l, d] = r.useState(!0);
                    return r.useEffect(() => {
                        l && (e === c.FetchState.NOT_FETCHED || e === c.FetchState.FETCHED && c.default.isGuildProductsCacheExpired(t)) && u && a.fetchGuildProductsForGuild(t), d(!u)
                    }, [t, u, e, l]), {
                        listingsLoaded: e === c.FetchState.FETCHED && !l
                    }
                },
                f = function(t, e) {
                    let {
                        requireCurrentGuild: u
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        requireCurrentGuild: !0
                    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, n.useStateFromStores)([d.default], () => d.default.getGuildId());
                    return r.useEffect(() => {
                        let r = c.default.getGuildProductFetchState(e);
                        if ((!u || o === t) && l && r === c.FetchState.NOT_FETCHED) try {
                            a.fetchGuildProduct(t, e)
                        } catch (t) {}
                    }, [t, e, l, o, u]), (0, n.useStateFromStores)([c.default], () => c.default.getGuildProduct(e))
                },
                C = (t, e) => {
                    let {
                        publishedOnly: u
                    } = e;
                    return (0, n.useStateFromStores)([c.default], () => c.default.getGuildProductsForGuild(t, {
                        publishedOnly: u
                    }))
                },
                E = t => (0, n.useStateFromStores)([c.default], () => null == t ? void 0 : c.default.getGuildProduct(t)),
                _ = t => (0, n.useStateFromStores)([l.default], () => null != t && l.default.can(o.Permissions.ADMINISTRATOR, t))
        },
        242278: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                updateGuildProductListing: function() {
                    return d
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
            var r = u("990746"),
                n = u("448993"),
                i = u("271560"),
                l = u("49111");
            let d = async (t, e, u) => {
                let {
                    priceTier: i,
                    imageName: d,
                    createNewRole: a,
                    unlinkRole: c,
                    ...o
                } = u;
                try {
                    let u = await r.default.patch({
                        url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
                        body: {
                            ...o,
                            image_name: d,
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
                        url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
                    })
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, c = async t => {
                try {
                    let e = await (0, i.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
                    });
                    return e.body.listings
                } catch (t) {
                    throw new n.APIError(t)
                }
            }, o = async (t, e) => {
                try {
                    let u = await (0, i.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
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
                        url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, u, i)
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
            var r, n, i = u("500947"),
                l = u("498225"),
                d = u("810479"),
                a = u("913144");
            (r = n || (n = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let c = {},
                o = {},
                s = {};

            function f(t) {
                return "guild:".concat(t)
            }

            function C(t) {
                return "guild:".concat(t, ":published")
            }
            let E = new d.default(t => {
                    let e = [f(t.guild_id)];
                    return t.published && e.push(C(t.guild_id)), e
                }, t => (function(t) {
                    let e = i.default.extractTimestamp(t.id);
                    return t.published ? -e : -e + 1e12
                })(t)),
                _ = [];
            class D extends l.default.Store {
                getGuildProductsForGuildFetchState(t) {
                    var e;
                    return null !== (e = c[t]) && void 0 !== e ? e : n.NOT_FETCHED
                }
                getGuildProduct(t) {
                    return E.get(t)
                }
                getGuildProductsForGuild(t, e) {
                    let {
                        publishedOnly: u
                    } = e;
                    return null == t ? _ : E.values(u ? C(t) : f(t))
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
                    E.clear(), c = {}, o = {}, s = {}
                },
                GUILD_PRODUCTS_FETCH: function(t) {
                    let {
                        guildId: e
                    } = t;
                    c[e] = n.FETCHING;
                    let u = [...E.values(f(e))];
                    u.forEach(t => {
                        E.delete(t.id)
                    })
                },
                GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
                    let {
                        guildId: e,
                        products: u
                    } = t;
                    c[e] = n.FETCHED, s[e] = Date.now(), u.forEach(t => {
                        E.set(t.id, t), o[t.id] = n.FETCHED
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
                    E.set(e.id, e)
                },
                GUILD_PRODUCT_UPDATE: function(t) {
                    let {
                        product: e
                    } = t;
                    E.set(e.id, e)
                },
                GUILD_PRODUCT_DELETE: function(t) {
                    let {
                        productId: e
                    } = t;
                    E.delete(e)
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
                    o[e.id] = n.FETCHED, E.set(e.id, e)
                },
                GUILD_PRODUCT_FETCH_FAILURE: function(t) {
                    let {
                        productId: e,
                        error: u
                    } = t;
                    o[e] = n.FETCHED, 404 === u.status && E.delete(e)
                }
            })
        },
        928576: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                useProductType: function() {
                    return l
                },
                usePrice: function() {
                    return d
                }
            });
            var r = u("773670"),
                n = u("153160"),
                i = u("782340");

            function l(t) {
                return r.useMemo(() => {
                    if (null == t) return;
                    let e = null != t.role_id,
                        u = t.attachments_count > 0;
                    if (e && u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
                    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
                    if (u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
                }, [t])
            }

            function d(t) {
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
            var r = u("920040");
            u("773670");
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
        },
        351825: function(t, e, u) {
            "use strict";
            u.r(e), u.d(e, {
                default: function() {
                    return l
                }
            });
            var r = u("920040");
            u("773670");
            var n = u("469563"),
                i = u("31745"),
                l = (0, n.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: u = 16,
                        color: n = "currentColor",
                        className: i,
                        foreground: l
                    } = t;
                    return (0, r.jsx)("svg", {
                        className: i,
                        width: e,
                        height: u,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, i.CirclePlusIcon)
        }
    }
]);