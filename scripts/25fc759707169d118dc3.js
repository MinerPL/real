(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11219"], {
        682777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ALL_CATEGORY_ID: function() {
                    return S
                },
                isAllCategory: function() {
                    return C
                },
                getAllCategory: function() {
                    return h
                },
                getCategoryIcon: function() {
                    return m
                },
                getCollectionItemAssetUrl: function() {
                    return R
                },
                redirectToLogin: function() {
                    return O
                }
            });
            var r = n("447669"),
                i = n("769846"),
                o = n("407063"),
                u = n("393414"),
                s = n("316887"),
                l = n("675918"),
                a = n("564875"),
                d = n("863022"),
                c = n("794352"),
                f = n("855670"),
                _ = n("356884"),
                p = n("315102"),
                g = n("49111"),
                E = n("782340");
            let S = 0,
                {
                    API_ENDPOINT: T,
                    CDN_HOST: I
                } = window.GLOBAL_ENV;

            function C(e) {
                return e.id === S
            }

            function h() {
                return {
                    id: S,
                    name: E.default.Messages.APP_DIRECTORY_ALL_CATEGORY
                }
            }

            function m(e) {
                switch (e.id) {
                    case 0:
                        return c.default;
                    case 4:
                        return f.default;
                    case 5:
                        return d.default;
                    case 6:
                        return s.default;
                    case 8:
                        break;
                    case 9:
                        return a.default;
                    case 10:
                        return _.default
                }
                return l.default
            }

            function R(e) {
                let {
                    itemId: t,
                    hash: n
                } = e, r = (0, o.getBestMediaProxySize)(parseFloat(i.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, o.getDevicePixelRatio)()).toString(), u = new URLSearchParams({
                    size: r
                }).toString(), s = p.SUPPORTS_WEBP ? "webp" : "png";
                return null != I ? "".concat(location.protocol, "//").concat(I, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(s, "?").concat(u) : "".concat(location.protocol).concat(T).concat(g.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s), "?").concat(u)
            }

            function O() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = new URL(location.href);
                for (let n in e) {
                    let r = e[n];
                    t.searchParams.set(n, r)
                }
                let n = t.pathname + t.search,
                    i = (0, r.getLoginPath)(n, !1);
                (0, u.transitionTo)(i)
            }
        },
        838093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                goToAppDirectory: function() {
                    return l
                },
                goHome: function() {
                    return a
                },
                goToApplication: function() {
                    return d
                },
                goSearch: function() {
                    return c
                },
                goToCategory: function() {
                    return f
                },
                replaceAppDirectoryURLWith: function() {
                    return _
                }
            });
            var r = n("393414"),
                i = n("599110"),
                o = n("682777"),
                u = n("412707"),
                s = n("49111");
            let l = e => {
                    let {
                        view: t = u.ApplicationDirectoryViews.HOME,
                        guildId: n,
                        applicationId: r,
                        applicationSection: o,
                        entrypoint: l
                    } = e, f = {
                        ...l,
                        pathname: window.location.pathname
                    };
                    switch (i.default.track(s.AnalyticEvents.APP_DIRECTORY_OPENED, {
                            source: null == f ? void 0 : f.name
                        }), (0, u.resetApplicationDirectoryHistory)(), (0, u.setEntrypoint)(f), null != n && (0, u.setGuildId)(n), t === u.ApplicationDirectoryViews.APPLICATION && null == r && (t = u.ApplicationDirectoryViews.HOME), t) {
                        case u.ApplicationDirectoryViews.HOME:
                            a();
                            break;
                        case u.ApplicationDirectoryViews.SEARCH:
                            c();
                            break;
                        case u.ApplicationDirectoryViews.APPLICATION:
                            null != r && d({
                                applicationId: r,
                                section: o
                            })
                    }
                },
                a = () => {
                    let e = {
                        previousView: (0, u.getCurrentView)()
                    };
                    (0, r.transitionTo)(s.Routes.APPLICATION_DIRECTORY, {
                        state: e
                    })
                },
                d = e => {
                    let {
                        applicationId: t,
                        section: n
                    } = e, i = {
                        previousView: (0, u.getCurrentView)()
                    };
                    (0, r.transitionTo)(s.Routes.APPLICATION_DIRECTORY_PROFILE(t, null == n ? void 0 : n.toLowerCase()), {
                        state: i
                    })
                },
                c = function() {
                    let {
                        query: e,
                        categoryId: t,
                        page: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = new URLSearchParams, o = {
                        previousView: (0, u.getCurrentView)()
                    };
                    null != e && i.set("q", e), null != t && i.set("category_id", t.toString()), null != n && i.set("page", n.toString()), (0, r.transitionTo)(s.Routes.APPLICATION_DIRECTORY_SEARCH, {
                        search: i.toString(),
                        state: o
                    })
                },
                f = e => {
                    let {
                        categoryId: t
                    } = e;
                    c({
                        categoryId: null != t ? t : o.ALL_CATEGORY_ID
                    })
                },
                _ = e => {
                    let {
                        location: {
                            state: t
                        }
                    } = (0, r.getHistory)();
                    (0, r.replaceWith)(e, t)
                }
        },
        488197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImprovedMarkdownUserExperiment: function() {
                    return i
                },
                ImprovedMarkdownGuildExperiment: function() {
                    return o
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-03_improved_message_markdown",
                    label: "Improved Message Markdown ",
                    defaultConfig: {
                        showListsAndHeaders: !1,
                        showMaskedLinks: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show improved message markdown",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !0
                        }
                    }, {
                        id: 2,
                        label: "Show improved message markdown WITHOUT masked links",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !1
                        }
                    }]
                }),
                o = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-03_improved_message_markdown_guild",
                    label: "Improved Message Markdown Guild Experiment",
                    defaultConfig: {
                        showListsAndHeaders: !1,
                        showMaskedLinks: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show improved message markdown",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !0
                        }
                    }, {
                        id: 2,
                        label: "Show improved message markdown WITHOUT masked links",
                        config: {
                            showListsAndHeaders: !0,
                            showMaskedLinks: !1
                        }
                    }]
                })
        },
        193865: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowImprovedMarkdownUserExperimentConfig: function() {
                    return o
                },
                useShowImprovedMarkdownGuildExperimentConfig: function() {
                    return u
                }
            });
            var r = n("299039"),
                i = n("488197");

            function o(e) {
                return s(e, i.ImprovedMarkdownUserExperiment.useExperiment({
                    location: "590063_2"
                }))
            }

            function u(e, t) {
                return s(t, i.ImprovedMarkdownGuildExperiment.useExperiment({
                    guildId: e,
                    location: "590063_4"
                }))
            }

            function s(e, t) {
                return e < r.default.extractTimestamp("1088216706570268682") ? i.ImprovedMarkdownUserExperiment.definition.defaultConfig : t
            }
        },
        183137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAssetCDNUrl: function() {
                    return r
                }
            });

            function r(e) {
                return "".concat("https://cdn.discordapp.com/assets", "/").concat(e)
            }
        },
        763913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchPriceTiers: function() {
                    return o
                }
            });
            var r = n("913144"),
                i = n("56949");
            async function o(e, t) {
                r.default.dispatch({
                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
                    guildId: e,
                    priceTierType: t
                });
                try {
                    let n = await i.getPriceTiers(e, t);
                    r.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
                        guildId: e,
                        priceTierType: t,
                        priceTiers: n
                    })
                } catch (n) {
                    r.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
                        guildId: e,
                        priceTierType: t
                    })
                }
            }
        },
        874146: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildProductSortOptions: function() {
                    return o
                },
                ServerShopTabOrder: function() {
                    return u
                },
                getGuildProductSortOptionLabel: function() {
                    return l
                },
                DISPLAYED_SORT_OPTIONS: function() {
                    return a
                }
            });
            var r, i, o, u, s = n("782340");

            function l(e) {
                return ({
                    [o.NEWEST_ARRIVALS]: s.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
                    [o.PRICE_ASC]: s.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
                    [o.PRICE_DESC]: s.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
                    [o.NAME]: s.default.Messages.GUILD_STORE_SORT_OPTION_NAME
                })[e]
            }(r = o || (o = {}))[r.NAME = 1] = "NAME", r[r.PRICE_ASC = 2] = "PRICE_ASC", r[r.PRICE_DESC = 3] = "PRICE_DESC", r[r.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (i = u || (u = {}))[i.SUBS_FIRST = 1] = "SUBS_FIRST", i[i.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
            let a = [o.NEWEST_ARRIVALS, o.PRICE_ASC, o.PRICE_DESC, o.NAME]
        },
        741515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePriceTiers: function() {
                    return l
                },
                useMonetizationSettings: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("446674"),
                o = n("837008"),
                u = n("763913"),
                s = n("670535");

            function l(e, t) {
                let n = (0, i.useStateFromStores)([s.default], () => s.default.getPriceTiersForGuildAndType(e, t)),
                    o = (0, i.useStateFromStores)([s.default], () => s.default.getPriceTiersFetchStateForGuildAndType(e, t));
                return r.useEffect(() => {
                    o === s.FetchState.NOT_FETCHED && (0, u.fetchPriceTiers)(e, t)
                }, [e, o, t]), {
                    loading: o === s.FetchState.FETCHING,
                    priceTiers: n
                }
            }

            function a(e) {
                let {
                    fetchSubscriptionsSettings: t,
                    loading: n,
                    error: i
                } = (0, o.useFetchSubscriptionsSettings)();
                r.useEffect(() => {
                    t(e)
                }, [t, e]);
                let u = (0, o.useSubscriptionsSettings)(e);
                return {
                    loaded: null != u && !n,
                    subscriptionsSettings: u,
                    loading: n,
                    error: i
                }
            }
        },
        56949: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPriceTiers: function() {
                    return u
                }
            });
            var r = n("872717"),
                i = n("448993"),
                o = n("49111");
            let u = async (e, t) => {
                try {
                    let n = await r.default.get({
                        url: o.Endpoints.PRICE_TIERS,
                        query: {
                            price_tier_type: t,
                            guild_id: e
                        }
                    });
                    return n.body
                } catch (e) {
                    throw new i.APIError(e)
                }
            }
        },
        670535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return d
                }
            });
            var r, i, o = n("446674"),
                u = n("913144");
            let s = new Map,
                l = new Map;
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            class a extends o.default.Store {
                getPriceTiersFetchStateForGuildAndType(e, t) {
                    var n, r;
                    return null !== (r = null === (n = l.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : i.NOT_FETCHED
                }
                getPriceTiersForGuildAndType(e, t) {
                    var n;
                    return null === (n = s.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
            }
            a.displayName = "CreatorMonetizationStore";
            var d = new a(u.default, {
                CONNECTION_OPEN: function() {
                    s.clear(), l.clear()
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n
                    } = e;
                    !l.has(t) && l.set(t, new Map), l.get(t).set(n, i.FETCHING)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n,
                        priceTiers: r
                    } = e;
                    !l.has(t) && l.set(t, new Map), l.get(t).set(n, i.FETCHED), !s.has(t) && s.set(t, new Map), s.get(t).set(n, r)
                },
                CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t,
                        priceTierType: n
                    } = e;
                    !l.has(t) && l.set(t, new Map), l.get(t).set(n, i.FETCHED)
                }
            })
        },
        624180: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return i
                }
            });
            var r = n("866190");

            function i() {
                return (0, r.useIsWindowFocused)()
            }
        },
        801765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useListingThumbnailUrl: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("845579"),
                o = n("271560"),
                u = n("624180");

            function s(e, t) {
                let {
                    shouldAnimate: n = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = i.GifAutoPlay.useSetting(), l = (0, u.useIsWindowFocused)(), a = n && l && s;
                return r.useMemo(() => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, o.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
                }, [t, e, a])
            }
        },
        500307: function(e, t, n) {
            "use strict";
            var r, i, o, u;
            n.r(t), n.d(t, {
                GuildShopPreviewClickActions: function() {
                    return r
                },
                GuildShopCopyLinkLocations: function() {
                    return i
                },
                GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK: function() {
                    return s
                },
                GUILD_SHOP_CHANNEL_ROW_CLICK: function() {
                    return l
                },
                SERVER_SHOP_URL: function() {
                    return a
                },
                GUILD_PRODUCT_MAX_TOTAL_ATTACHMENT_SIZE: function() {
                    return d
                }
            }), (o = r || (r = {})).GET_STARTED_CLICK = "get_started_click", o.DISMISS_FULL_PREVIEW = "dismiss_full_preview", o.DISMISS_TAB_PREVIEW = "dismiss_tab_preview", o.DISMISS_CHANNEL_ROW = "dismiss_channel_row", (u = i || (i = {})).CHANNEL_ROW_CONTEXT_MENU = "channel_row_context_menu", u.SHOP_HEADER_BUTTON = "shop_header_button";
            let s = "hasClickedGuildShopProductPreviewTab",
                l = "hasClickedGuildShopChannelRow",
                a = "https://discord.com/servershop",
                d = "1 GB"
        },
        955735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("414456"),
                u = n.n(o),
                s = n("77078"),
                l = n("511606");

            function a(e) {
                let {
                    alt: t,
                    ...n
                } = e, [o, u] = i.useState(!0);
                return (0, r.jsxs)(r.Fragment, {
                    children: [o && (0, r.jsx)(s.Spinner, {
                        type: s.Spinner.Type.LOW_MOTION,
                        className: l.loader
                    }), (0, r.jsx)("img", {
                        ...n,
                        alt: t,
                        onLoad: () => u(!1)
                    })]
                })
            }

            function d(e) {
                let {
                    src: t,
                    backgroundSrc: n,
                    alt: i,
                    aspectRatio: o,
                    className: s,
                    imageChildClassName: d,
                    ...c
                } = e;
                return (0, r.jsxs)("div", {
                    className: u(l.container, s),
                    children: [(0, r.jsx)("img", {
                        src: n,
                        alt: i,
                        className: l.backgroundImage
                    }), (0, r.jsx)("div", {
                        className: l.backgroundImageFilter
                    }), (0, r.jsx)("div", {
                        style: {
                            aspectRatio: o
                        },
                        className: l.imageContainer,
                        children: (0, r.jsx)(a, {
                            src: t,
                            alt: i,
                            className: u(l.image, d),
                            ...c
                        })
                    })]
                })
            }
        },
        398654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstGuildIncidentId: function() {
                    return g
                },
                useGuildIncidentsState: function() {
                    return E
                },
                shouldShowRaidNotificationNagbar: function() {
                    return S
                }
            });
            var r = n("316693"),
                i = n("65597"),
                o = n("374363"),
                u = n("305961"),
                s = n("957255"),
                l = n("162771"),
                a = n("697218"),
                d = n("991170"),
                c = n("610174"),
                f = n("311161"),
                _ = n("54346"),
                p = n("421127");

            function g() {
                let e = (0, i.default)([a.default], () => a.default.getCurrentUser()),
                    t = (0, i.default)([_.default], () => _.default.getIncidentsByGuild()),
                    n = (0, i.useStateFromStoresArray)([u.default], () => Object.keys(t).map(e => u.default.getGuild(e)));
                for (let i of n) {
                    if (null == i) continue;
                    let n = t[i.id];
                    if (null == n || !(0, f.hasDetectedActivity)(n) && !(0, f.isUnderLockdown)(n)) continue;
                    let o = r.default.hasAny(d.default.computePermissions({
                        user: e,
                        context: i,
                        checkElevated: !1
                    }), p.IncidentAlertModeratorPermissions);
                    if (o) return i.id
                }
                return null
            }
            n("49111");

            function E(e) {
                let {
                    showAlertMode: t
                } = (0, c.useGuildAlertModeEnabled)(null != e ? e : "0"), n = (0, i.default)([u.default, s.default], () => {
                    let t = u.default.getGuild(e);
                    if (null == t) return !1;
                    let n = s.default.getGuildPermissions(t);
                    return null != n && r.default.hasAny(n, p.IncidentAlertModeratorPermissions)
                }), o = (0, i.default)([_.default], () => null != e ? _.default.getGuildIncident(e) : null), l = null != o && (0, f.isUnderLockdown)(o);
                return {
                    shouldShowIncidentActions: n && t,
                    incidentData: o,
                    isUnderLockdown: l
                }
            }

            function S() {
                var e;
                let t = l.default.getGuildId(),
                    n = function(e) {
                        let t = a.default.getCurrentUser(),
                            n = _.default.getIncidentsByGuild(),
                            i = Object.keys(n).map(e => u.default.getGuild(e));
                        for (let o of i) {
                            if (null == o) continue;
                            let i = n[o.id];
                            if (null == i || !(0, f.hasDetectedActivity)(i) && !(0, f.isUnderLockdown)(i) || (0, f.isUnderLockdown)(i) && o.id !== e) continue;
                            let u = r.default.hasAny(d.default.computePermissions({
                                user: t,
                                context: o,
                                checkElevated: !1
                            }), p.IncidentAlertModeratorPermissions);
                            if (u) return o.id
                        }
                        return null
                    }(t),
                    {
                        showAlertMode: i
                    } = (0, c.getGuildAlertModeEnabled)(null != n ? n : "0"),
                    s = null !== (e = o.default.getGuildsProto()) && void 0 !== e ? e : {},
                    g = null != n ? s[n] : null,
                    E = null != g && g.disableRaidAlertNag;
                return {
                    show: null != n && i && !E,
                    guildId: n
                }
            }
        },
        863921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                o = n.n(i),
                u = n("931138"),
                s = n("206453"),
                l = n("49111"),
                a = n("323755");
            let d = {
                    [l.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
                    [l.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
                    [l.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
                    [l.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
                },
                c = {
                    [l.BoostedGuildTiers.NONE]: a.iconTierNone,
                    [l.BoostedGuildTiers.TIER_1]: a.iconTierOne,
                    [l.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
                    [l.BoostedGuildTiers.TIER_3]: a.iconTierThree
                };

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: n,
                    iconClassName: i,
                    size: l
                } = e;
                return (0, r.jsx)(u.default, {
                    className: o(n, d[t]),
                    size: l,
                    children: (0, r.jsx)(s.default, {
                        tier: t,
                        className: o(i, a.boostedGuildIconGem, c[t])
                    })
                })
            }
        },
        757515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ROLE_FIELD_NAME: function() {
                    return u
                },
                describeUploadProgressError: function() {
                    return s
                },
                describeProductChangeValidation: function() {
                    return l
                },
                computeProductChanges: function() {
                    return a
                },
                getGuildProductListingUrl: function() {
                    return d
                }
            });
            var r = n("448993");
            n("957255");
            var i = n("49111"),
                o = n("782340");
            let u = "_role";

            function s(e) {
                if (!(e >= 0)) switch (-e) {
                    case i.AbortCodes.ENTITY_TOO_LARGE:
                        return o.default.Messages.UPLOAD_ERROR_TOO_LARGE;
                    case i.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
                        return o.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
                    case 1:
                        return o.default.Messages.ERROR_GENERIC_TITLE;
                    default:
                        return o.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
                            code: -e
                        })
                }
            }

            function l(e) {
                let {
                    newRoleParams: t
                } = e;
                if (null != t && "" === t.name.trim()) {
                    var n, i;
                    return n = u, i = o.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new r.APIError({
                        status: 400,
                        body: {
                            message: "Invalid form body",
                            errors: {
                                [n]: {
                                    _errors: [{
                                        code: "",
                                        message: i
                                    }]
                                }
                            }
                        }
                    })
                }
            }

            function a(e) {
                var t;
                let {
                    guildProductListing: n,
                    name: r,
                    priceTier: i,
                    description: o,
                    image: u,
                    imageName: s,
                    isImageChanged: l,
                    newRoleParams: a,
                    hasUnsavedAttachmentChanges: d
                } = e, c = {};
                (null == n ? void 0 : n.name) !== r && "" !== r.trim() && (c.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== o && (c.description = o), (null == n ? void 0 : n.price_tier) !== i && null != i && (c.priceTier = i), null != a && "" !== a.name.trim() ? c.createNewRole = !0 : null === a && (c.unlinkRole = !0), u.startsWith("data:") && (l || null == n && (Object.keys(c).length > 0 || d)) && (c.image = u, c.imageName = s);
                let f = Object.keys(c).length > 0 || d;
                return {
                    changes: c,
                    hasUnsavedChanges: f,
                    canSaveForDraft: f,
                    canSaveForPublished: f,
                    canPublishOrUnpublish: !(null == n || f)
                }
            }

            function d(e, t) {
                return "".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_PRODUCT(e, t))
            }
        },
        727411: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openModal: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("307785");

            function u(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("48175").then(n.bind(n, "48175"));
                    return n => (0, r.jsx)(i, {
                        guildId: e,
                        productId: t,
                        ...n
                    })
                }, {
                    modalKey: o.GUILD_PRODUCT_EDIT_MODAL_KEY
                })
            }
        },
        739726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildProductListingPopout: function() {
                    return C
                },
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                o = n.n(i),
                u = n("77078"),
                s = n("272030"),
                l = n("801765"),
                a = n("191814"),
                d = n("195812"),
                c = n("83900"),
                f = n("663745"),
                _ = n("153160"),
                p = n("928576"),
                g = n("516770"),
                E = n("843455"),
                S = n("782340"),
                T = n("49738");

            function I(e) {
                let {
                    showEditProduct: t,
                    showUnpublishProduct: n,
                    showCopyLink: i,
                    showTestDownload: o,
                    showDeleteProduct: s,
                    showReportProduct: l,
                    onEditProduct: a,
                    onUnpublishProduct: f,
                    onDeleteProduct: _,
                    onCopyLink: p,
                    onTestDownload: g,
                    onReportProduct: E,
                    closePopout: I,
                    onSelect: C
                } = e;
                return (0, r.jsx)("div", {
                    className: T.menuContainer,
                    children: (0, r.jsxs)(u.Menu, {
                        navId: "guild-product-context",
                        onClose: I,
                        "aria-label": S.default.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
                        onSelect: C,
                        children: [(0, r.jsxs)(u.MenuGroup, {
                            children: [t && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-edit",
                                label: S.default.Messages.GUILD_PRODUCT_EDIT,
                                action: a
                            }), i && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-copy-link",
                                label: S.default.Messages.GUILD_PRODUCT_COPY_LINK,
                                icon: c.default,
                                action: p
                            }), o && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-test-download",
                                label: S.default.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                                icon: d.default,
                                action: g
                            })]
                        }), (0, r.jsxs)(u.MenuGroup, {
                            children: [n && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-unpublish",
                                label: S.default.Messages.GUILD_PRODUCT_UNPUBLISH,
                                action: f
                            }), s && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-delete",
                                label: S.default.Messages.GUILD_PRODUCT_DELETE,
                                color: "danger",
                                action: _
                            })]
                        }), (0, r.jsx)(u.MenuGroup, {
                            children: l && (0, r.jsx)(u.MenuItem, {
                                id: "guild-product-report",
                                label: S.default.Messages.GUILD_PRODUCT_REPORT,
                                color: "danger",
                                action: E
                            })
                        })]
                    })
                })
            }

            function C(e) {
                let {
                    product: t,
                    guildId: n,
                    showEditProduct: i,
                    showUnpublishProduct: o,
                    showTestDownload: s,
                    showCopyLink: l,
                    showDeleteProduct: a,
                    showReportProduct: d,
                    onEditProduct: c,
                    onUnpublishProduct: _,
                    onDeleteProduct: p,
                    onCopyProductLink: g,
                    onTestDownload: E,
                    onReportProduct: C
                } = e;
                return (0, r.jsx)("div", {
                    onClick: e => {
                        e.stopPropagation()
                    },
                    children: (0, r.jsx)(u.Popout, {
                        position: "right",
                        align: "top",
                        spacing: -8,
                        animation: u.Popout.Animation.FADE,
                        renderPopout: e => (0, r.jsx)(I, {
                            ...e,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: i,
                            showUnpublishProduct: o,
                            showCopyLink: l,
                            showTestDownload: s,
                            showReportProduct: d,
                            showDeleteProduct: a,
                            onEditProduct: c,
                            onUnpublishProduct: _,
                            onDeleteProduct: p,
                            onCopyLink: g,
                            onTestDownload: E,
                            onReportProduct: C
                        }),
                        children: (e, n) => {
                            let {
                                isShown: i
                            } = n;
                            return (0, r.jsx)(u.Clickable, {
                                ...e,
                                "aria-label": S.default.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format({
                                    productName: t.name
                                }),
                                "aria-haspopup": "listbox",
                                "aria-expanded": i,
                                className: T.productActionMenuButton,
                                children: (0, r.jsx)(f.default, {
                                    className: T.productActionMenuIcon,
                                    "aria-hidden": !0
                                })
                            })
                        }
                    })
                })
            }

            function h(e) {
                let {
                    product: t,
                    guildId: n,
                    onEditProduct: i,
                    onUnpublishProduct: d,
                    onDeleteProduct: c,
                    onCopyProductLink: f,
                    onTestDownload: h,
                    disabled: m = !1
                } = e, R = (0, l.useListingThumbnailUrl)(t, 600), O = null !== t.price_tier ? (0, _.formatPrice)(t.price_tier, E.CurrencyCodes.USD) : void 0, P = (0, p.useProductType)(t);
                return (0, r.jsxs)(u.ClickableContainer, {
                    tag: "article",
                    className: o(T.productCardClickable, T.productCard, {
                        [T.disabled]: m
                    }),
                    onClick: m ? void 0 : i,
                    onContextMenu: function(e) {
                        (0, s.openContextMenuLazy)(e, () => Promise.resolve(e => (0, r.jsx)(I, {
                            ...e,
                            closePopout: s.closeContextMenu,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyLink: f,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })))
                    },
                    "aria-label": S.default.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
                        productName: t.name
                    }),
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        src: R,
                        className: T.productThumbnail
                    }), (0, r.jsxs)("div", {
                        className: T.productInfo,
                        children: [(0, r.jsxs)("div", {
                            className: T.productInfoContent,
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: T.productName,
                                children: t.name
                            }), (0, r.jsx)(a.default, {
                                size: 8
                            }), (0, r.jsxs)("div", {
                                className: T.productDetails,
                                children: [(0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    children: O
                                }), null != P ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: T.dotSeparator
                                    }), (0, r.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: P
                                    })]
                                }) : null]
                            }), (0, r.jsx)(a.default, {
                                size: 16
                            }), t.published ? (0, r.jsx)(g.PublishedBadge, {}) : (0, r.jsx)(g.DraftBadge, {})]
                        }), !m && (0, r.jsx)(C, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: d,
                            onDeleteProduct: c,
                            onCopyProductLink: f,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })]
                    })]
                })
            }
        },
        516770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PublishedBadge: function() {
                    return _
                },
                DraftBadge: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("449918"),
                u = n("20606"),
                s = n("832132"),
                l = n("952479"),
                a = n("49111"),
                d = n("782340"),
                c = n("495323");

            function f(e) {
                let {
                    label: t,
                    backgroundColor: n = u.default.BUTTON_SECONDARY_BACKGROUND,
                    icon: o,
                    iconColor: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: c.badge,
                    style: {
                        backgroundColor: n
                    },
                    children: [(0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: c.badgeText,
                        children: t
                    }), (0, r.jsx)(o, {
                        className: c.badgeIcon,
                        color: null != s ? s : "currentColor",
                        "aria-hidden": !0
                    })]
                })
            }

            function _() {
                return (0, r.jsx)(f, {
                    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
                    backgroundColor: "#207B8D",
                    icon: l.default
                })
            }

            function p() {
                return (0, r.jsx)(f, {
                    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
                    icon: s.default,
                    iconColor: (0, o.getColor)(a.Color.PRIMARY_330)
                })
            }
        },
        257869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGroupListingsFetchContext: function() {
                    return d
                },
                GroupListingsFetchContextProvider: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("65597"),
                u = n("619443"),
                s = n("371358"),
                l = n("648825");
            let a = i.createContext(void 0);

            function d(e) {
                let t = i.useContext(a);
                if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
                let {
                    listingsLoaded: n,
                    fetchGroupListingsForGuild: r
                } = t;
                return r(), n
            }

            function c(e) {
                let {
                    guildId: t,
                    children: n,
                    refetchOnMount: d,
                    includeSoftDeleted: c,
                    countryCode: f,
                    dontFetchWhileTrue: _
                } = e, p = (0, o.default)([u.default], () => u.default.isConnected()), g = (0, o.default)([l.default], () => null != t ? l.default.getSubscriptionGroupListingsForGuildFetchState(t) : l.FetchState.FETCHED), E = i.useRef(d), S = i.useCallback(() => {
                    if (null == t || !p || !0 === _) return;
                    let e = l.default.getSubscriptionGroupListingsForGuildFetchState(t);
                    (E.current || e === l.FetchState.NOT_FETCHED) && (E.current = !1, s.fetchAllSubscriptionListingsDataForGuild(t, {
                        includeSoftDeleted: c,
                        countryCode: f
                    }))
                }, [p, t, c, f, _]), T = i.useMemo(() => g === l.FetchState.FETCHED && !0 !== E.current, [g, E]);
                return (0, r.jsx)(a.Provider, {
                    value: {
                        listingsLoaded: T,
                        fetchGroupListingsForGuild: S
                    },
                    children: n
                })
            }
        },
        531034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getJoinButtonLabels: function() {
                    return o
                },
                getRenewButtonLabels: function() {
                    return u
                },
                STICKERS: function() {
                    return s
                }
            });
            var r = n("161585"),
                i = n("782340");
            let o = () => [i.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1, i.default.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2],
                u = () => [i.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1, i.default.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2],
                s = [{
                    id: "781323471249604648",
                    format_type: r.StickerFormat.APNG,
                    description: "Cheerful Choco jumps out of gift box",
                    name: "Surprise"
                }, {
                    id: "781324642736144424",
                    format_type: r.StickerFormat.APNG,
                    description: "Cheerful Choco preens against window",
                    name: "Affection"
                }, {
                    id: "781323769960202280",
                    format_type: r.StickerFormat.APNG,
                    description: "Cheerful Choco sparkles",
                    name: "OMG"
                }, {
                    id: "781324722394103808",
                    format_type: r.StickerFormat.APNG,
                    description: "Cheerful Choco cheers",
                    name: "Cheer"
                }, {
                    id: "813951723822645278",
                    format_type: r.StickerFormat.APNG,
                    description: "Cheerful Choco gives thumbs up",
                    name: "Nice"
                }]
        },
        843257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
                    return a
                },
                getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
                    return d
                },
                getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
                    return _
                },
                isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
                    return p
                },
                trackRoleSubscriptionPurchaseMessageTierClick: function() {
                    return g
                },
                getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
                    return E
                }
            }), n("249654");
            var r = n("716241"),
                i = n("250666"),
                o = n("305961"),
                u = n("697218");
            n("531034");
            var s = n("49111"),
                l = n("782340");

            function a(e) {
                let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: r,
                    guildId: i,
                    roleSubscriptionData: o
                } = e, {
                    content: u,
                    formatParams: s
                } = f({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: r,
                    guildId: i,
                    roleSubscriptionData: o
                });
                return u.format(s)
            }

            function d(e) {
                let {
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: r,
                    guildId: i,
                    roleSubscriptionData: o
                } = e, {
                    content: u,
                    formatParams: s
                } = f({
                    username: t,
                    usernameOnClickHandler: n,
                    roleSubscriptionOnClickHandler: r,
                    guildId: i,
                    roleSubscriptionData: o
                });
                return u.astFormat(s)
            }

            function c(e, t) {
                var n, r;
                let i = o.default.getGuild(e),
                    u = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0,
                    s = null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r;
                return {
                    guild: i,
                    totalMonthsSubscribed: u,
                    showWithDuration: u > 0,
                    isRenewal: s
                }
            }

            function f(e) {
                let t, {
                        username: n,
                        usernameOnClickHandler: r,
                        roleSubscriptionOnClickHandler: i,
                        guildId: o,
                        roleSubscriptionData: u
                    } = e,
                    {
                        guild: s,
                        totalMonthsSubscribed: a,
                        showWithDuration: d,
                        isRenewal: f
                    } = c(o, u);
                t = d ? f ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN;
                let _ = {
                    username: n,
                    usernameHook: r,
                    guildName: null == s ? void 0 : s.name,
                    handleGuildNameClick: i,
                    tierName: null == u ? void 0 : u.tier_name,
                    months: a
                };
                return {
                    content: t,
                    formatParams: _
                }
            }

            function _(e) {
                let t, {
                        username: n,
                        usernameOnClickHandler: r = s.NOOP,
                        roleSubscriptionOnClickHandler: i = s.NOOP,
                        guildId: o,
                        roleSubscriptionData: u
                    } = e,
                    {
                        guild: a,
                        totalMonthsSubscribed: d,
                        showWithDuration: f,
                        isRenewal: _
                    } = c(o, u),
                    p = {
                        guildName: null == a ? void 0 : a.name,
                        tierName: null == u ? void 0 : u.tier_name,
                        username: n,
                        usernameOnClick: r,
                        roleSubscriptionOnClick: i
                    };
                return t = f ? _ ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
                    ...p,
                    months: d
                }) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
                    ...p,
                    months: d
                }) : _ ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(p) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(p)
            }

            function p(e) {
                return (0, i.isCreatorMonetizationEnabledGuild)(e)
            }

            function g(e, t, n, i) {
                var o;
                r.default.trackWithMetadata(s.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
                    guild_id: e,
                    user_id: null === (o = u.default.getCurrentUser()) || void 0 === o ? void 0 : o.id,
                    channel_id: t,
                    message_id: n,
                    role_subscription_listing_id: i
                })
            }

            function E(e, t) {
                var n;
                return {
                    guild_id: e.guild_id,
                    sender: null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
                    target_user: t.author.id,
                    channel_id: e.id,
                    message_id: t.id
                }
            }
        },
        837008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscriptionListingsForGroup: function() {
                    return _
                },
                useSubscriptionListing: function() {
                    return p
                },
                useGroupListingsForGuild: function() {
                    return g
                },
                useSubscriptionListingsForGuild: function() {
                    return E
                },
                useFetchListingsForSubscriptions: function() {
                    return S
                },
                useDeleteSubscriptionListing: function() {
                    return T
                },
                useArchiveSubscriptionListing: function() {
                    return I
                },
                usePublishSubscriptionListing: function() {
                    return C
                },
                useSubscriptionsSettings: function() {
                    return h
                },
                useUpdateSubscriptionsSettings: function() {
                    return m
                },
                useFetchSubscriptionsSettings: function() {
                    return R
                },
                useSubscriptionTrial: function() {
                    return O
                }
            });
            var r = n("884691"),
                i = n("446674"),
                o = n("162426"),
                u = n("619443");
            n("449008");
            var s = n("257869"),
                l = n("371358"),
                a = n("648825"),
                d = n("136185");
            let c = [],
                f = function(e) {
                    let {
                        refetchOnMount: t = !1,
                        includeSoftDeleted: n = !0,
                        countryCode: o,
                        dontFetchWhileTrue: s
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.useStateFromStores)([u.default], () => u.default.isConnected()), c = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = r.useRef(t);
                    return r.useEffect(() => {
                        if (null == e || !d || !0 === s) return;
                        let r = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
                        (t || r === a.FetchState.NOT_FETCHED) && (f.current = !1, l.fetchAllSubscriptionListingsDataForGuild(e, {
                            includeSoftDeleted: n,
                            countryCode: o
                        }))
                    }, [d, e, n, t, o, s]), {
                        listingsLoaded: c === a.FetchState.FETCHED && !0 !== f.current
                    }
                },
                _ = function(e) {
                    let {
                        includeSoftDeleted: t = !1,
                        includeUnpublished: n = !0
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.useStateFromStoresArray)([a.default], () => {
                        if (null == e) return [];
                        let r = a.default.getSubscriptionGroupListing(e);
                        if (null == r) return [];
                        let i = [];
                        for (let e of r.subscription_listings_ids) {
                            let r = a.default.getSubscriptionListing(e);
                            if (null != r && (!r.soft_deleted || !!t))(r.published || n) && i.push(r)
                        }
                        return i
                    }, [e, t, n])
                },
                p = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
                g = e => {
                    let t = (0, s.useGroupListingsFetchContext)("useGroupListingsForGuild");
                    return (0, i.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : c)
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1,
                        sortDeletedListingsLast: !1
                    };
                    return f(e), (0, i.useStateFromStoresArray)([a.default], () => {
                        let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : c,
                            r = [];
                        for (let e of n)
                            for (let n of e.subscription_listings_ids) {
                                let e = a.default.getSubscriptionListing(n);
                                null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
                            }
                        return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
                    })
                },
                S = e => {
                    let [t, n] = r.useState(!1), o = r.useMemo(() => e.map(d.getRoleSubscriptionPlanId), [e]), u = (0, i.useStateFromStoresArray)([a.default], () => o.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [o]);
                    return r.useEffect(() => {
                        !t && u.length > 0 && (n(!0), Promise.all(u.map(e => l.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
                            n(!1)
                        }))
                    }, [t, u]), {
                        loading: t
                    }
                },
                T = () => {
                    let [e, t] = r.useState(!1), [n, i] = r.useState(null), o = async (e, n, r) => {
                        try {
                            return t(!0), i(null), await l.deleteSubscriptionListing(e, n, r), !0
                        } catch (e) {
                            i(e)
                        } finally {
                            t(!1)
                        }
                    };
                    return {
                        error: n,
                        submitting: e,
                        deleteSubscriptionListing: o
                    }
                },
                I = () => {
                    let [e, t] = (0, o.default)(l.archiveSubscriptionListing), {
                        loading: n,
                        error: r
                    } = t;
                    return {
                        error: r,
                        submitting: n,
                        archiveSubscriptionListing: e
                    }
                },
                C = () => {
                    let [e, t] = r.useState(!1), [n, i] = r.useState(null), o = async e => {
                        let {
                            guildId: n,
                            groupListingId: r,
                            listingId: o
                        } = e;
                        try {
                            return t(!0), i(null), await l.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: r,
                                listingId: o,
                                data: {
                                    published: !0
                                }
                            }), !0
                        } catch (e) {
                            i(e)
                        } finally {
                            t(!1)
                        }
                    };
                    return {
                        error: n,
                        submitting: e,
                        publishSubscriptionListing: o,
                        clearError: () => i(null)
                    }
                },
                h = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
                m = () => {
                    let [e, t] = r.useState(!1), [n, i] = r.useState(null), o = r.useCallback(async (e, n) => {
                        t(!0), i(null);
                        try {
                            await l.updateSubscriptionsSettings(e, n)
                        } catch (e) {
                            i(e)
                        } finally {
                            t(!1)
                        }
                    }, []);
                    return {
                        loading: e,
                        updateSubscriptionsSettings: o,
                        error: n
                    }
                },
                R = () => {
                    let [e, t] = r.useState(!1), [n, i] = r.useState(null), o = r.useCallback(async e => {
                        t(!0), i(null);
                        try {
                            await l.fetchSubscriptionsSettings(e)
                        } catch (e) {
                            i(e)
                        } finally {
                            t(!1)
                        }
                    }, []);
                    return {
                        loading: e,
                        fetchSubscriptionsSettings: o,
                        error: n
                    }
                },
                O = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)
        },
        136185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleSubscriptionPlanId: function() {
                    return o
                },
                getRoleSubscriptionMutationPlanId: function() {
                    return u
                }
            });
            var r = n("627445"),
                i = n.n(r);

            function o(e) {
                let t = e.items;
                return i(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
            }

            function u(e) {
                var t;
                let n = null == e ? void 0 : null === (t = e.renewalMutations) || void 0 === t ? void 0 : t.items;
                if (null != n) return i(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? void 0 : n[0].planId
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("446674"),
                o = n("895026"),
                u = n("36402");
            let s = {};

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, i.useStateFromStores)([u.default], () => u.default.getRoleMemberCount(e));
                return r.useEffect(() => {
                    if (null == e) return;
                    let n = s[e],
                        r = null != n && t > 0 && Date.now() - n < t;
                    !r && (s[e] = Date.now(), o.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        974755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                o = n.n(i),
                u = n("446674"),
                s = n("77078"),
                l = n("51565"),
                a = n("95039"),
                d = n("863921"),
                c = n("26989"),
                f = n("697218"),
                _ = n("580357"),
                p = n("40469"),
                g = n("427459"),
                E = n("49111"),
                S = n("782340"),
                T = n("129818");

            function I(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, o = (0, u.useStateFromStores)([f.default, c.default], () => {
                    let e = f.default.getCurrentUser();
                    return c.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: l,
                    premiumSubscriberCount: _
                } = t;
                if (0 === _ && l === E.BoostedGuildTiers.NONE) return null;
                let p = e => {
                        e.stopPropagation(), e.preventDefault(), o && !i && (0, a.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: E.AnalyticsSections.GUILD_HEADER,
                                object: E.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    I = l === E.BoostedGuildTiers.NONE ? S.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : g.getTierName(l),
                    C = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: T.tierTooltipTitle,
                            children: I
                        }), (0, r.jsx)("div", {
                            children: S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: _
                            })
                        })]
                    });
                return (0, r.jsx)("div", {
                    className: T.guildIconContainer,
                    children: (0, r.jsx)(s.Tooltip, {
                        text: C,
                        position: "bottom",
                        "aria-label": null != I ? I : "",
                        children: e => (0, r.jsx)(s.Clickable, {
                            ...e,
                            className: T.premiumGuildIcon,
                            onClick: p,
                            children: (0, r.jsx)(d.default, {
                                premiumTier: l,
                                iconBackgroundClassName: n ? T.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && l !== E.BoostedGuildTiers.TIER_3 ? T.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function C(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: i
                } = e, u = (0, l.default)(t);
                return u ? (0, r.jsx)("div", {
                    className: T.guildIconV2Container,
                    children: (0, r.jsx)(p.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: o(T.guildBadge, {
                            [T.disableColor]: n
                        }),
                        disableBoostClick: i
                    })
                }) : (0, r.jsx)("div", {
                    className: T.guildIconContainer,
                    children: (0, r.jsx)(_.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: o(T.guildBadge, {
                            [T.disableColor]: n
                        })
                    })
                })
            }

            function h(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, o = (0, l.default)(t);
                if (o) return (0, r.jsx)(C, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: i
                });
                let u = t.hasFeature(E.GuildFeatures.VERIFIED) || t.hasFeature(E.GuildFeatures.PARTNERED);
                return u ? (0, r.jsx)(C, {
                    guild: t,
                    disableColor: !n
                }) : (0, r.jsx)(I, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                })
            }
        },
        596368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("497880");

            function o(e, t) {
                let {
                    message: n
                } = e;
                return (0, r.jsx)(i.default, {
                    message: n,
                    content: t
                })
            }
        },
        227439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("93332"),
                u = n("913491");
            let s = i.memo(o.default);

            function l(e) {
                let {
                    message: t,
                    channel: n,
                    author: i,
                    compact: o,
                    animateAvatar: l,
                    guildId: a,
                    isGroupStart: d = !0,
                    roleIcon: c,
                    hideTimestamp: f
                } = e;
                return !(0, u.default)(t) && (d || o) ? (0, r.jsx)(s, {
                    message: t,
                    channel: n,
                    author: i,
                    guildId: a,
                    compact: o,
                    animate: l,
                    roleIcon: c,
                    hideTimestamp: f
                }) : void 0
            }
        },
        441823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return o
                },
                openModerateUserContextMenu: function() {
                    return u
                },
                openModerateRoleContextMenu: function() {
                    return s
                },
                openModerationRaidContextMenu: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("272030");

            function o(e, t, o) {
                o.isGroupDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: o
                    })
                }) : o.isDM() ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: o,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != o.guild_id ? (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: o,
                        guildId: o.guild_id
                    })
                }) : (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function u(e, t) {
                let {
                    user: o,
                    channel: u,
                    moderationAlertId: s,
                    guildId: l,
                    analyticsLocations: a,
                    onCloseContextMenu: d
                } = t;
                if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != l ? l : null == u ? void 0 : u.getGuildId();
                null != c && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        user: o,
                        channelId: null == u ? void 0 : u.id,
                        guildId: c,
                        moderationAlertId: s,
                        analyticsLocations: a,
                        onCloseContextMenu: d
                    })
                })
            }

            function s(e, t) {
                let {
                    user: o,
                    guildId: u,
                    analyticsLocations: s,
                    onCloseContextMenu: l
                } = t;
                (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        user: o,
                        guildId: u,
                        analyticsLocations: s,
                        onCloseContextMenu: l
                    })
                })
            }

            function l(e, t, o) {
                null != o && (0, i.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, r.jsx)(e, {
                        ...t,
                        guildId: o
                    })
                })
            }
        }
    }
]);