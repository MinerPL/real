            "use strict";
            n.r(t), n.d(t, {
                getStoreListingLocation: function() {
                    return I
                },
                getApplicationStoreListingLocation: function() {
                    return g
                },
                getAssetURL: function() {
                    return A
                },
                httpGetWithCountryCodeQuery: function() {
                    return N
                },
                nativePlatformTypeToSKUOperatingSystem: function() {
                    return O
                },
                skuOperatingSystemToText: function() {
                    return R
                },
                getPrimarySKUForApplication: function() {
                    return y
                },
                getSocialRecommendationReasons: function() {
                    return M
                },
                getNonSocialRecommendationReasons: function() {
                    return L
                }
            }), n("424973"), n("462568"), n("222007"), n("70102"), n("702976");
            var i = n("917351"),
                a = n.n(i),
                l = n("866227"),
                s = n.n(l),
                r = n("394846"),
                u = n("872717"),
                o = n("850068"),
                d = n("407063"),
                c = n("160299"),
                _ = n("357957"),
                E = n("521012"),
                f = n("560528"),
                h = n("568734"),
                p = n("449008"),
                T = n("773336"),
                C = n("49111"),
                m = n("782340");
            let S = !r.isMobile && !r.isTablet && -1 !== (0, f.getChromeVersion)();

            function I(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: i,
                    storeListingId: a,
                    slug: l,
                    channelId: s,
                    guildId: r
                } = t;
                return {
                    pathname: null != s && null != r ? C.Routes.CHANNEL(r, s, e) : C.Routes.APPLICATION_STORE_LISTING_SKU(e, l),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: i
                    },
                    search: null != a ? "?store_listing_id=".concat(a) : ""
                }
            }

            function g(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: i,
                    slug: a
                } = t;
                return {
                    pathname: C.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, a),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: i
                    }
                }
            }

            function A(e, t, n, i) {
                var a;
                let l;
                let s = window.GLOBAL_ENV.CDN_HOST;
                if (null == i) switch (t.mimeType || t.mime_type) {
                    case "video/quicktime":
                    case "video/mp4":
                        i = "mp4";
                        break;
                    case "image/gif":
                        i = "gif";
                        break;
                    default:
                        i = "webp"
                }
                "webp" === i && !S && (i = "png");
                let r = (a = "https:", "https:");
                return l = null != s ? "".concat(r, "//").concat(s, "/app-assets/").concat(e, "/store/").concat(t.id, ".").concat(i) : "".concat(r).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(C.Endpoints.STORE_ASSET(e, t.id, i)), null != n && (l += "?size=".concat((0, d.getBestMediaProxySize)(n * (0, d.getDevicePixelRatio)()))), l
            }
            async function N(e) {
                var t, n, i, a;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (l) {
                    let e = [];
                    !_.default.hasFetchedPaymentSources && e.push(null !== (n = c.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, o.fetchPaymentSources)()), !c.default.ipCountryCodeLoaded && e.push((0, o.fetchIpCountryCode)()), e.push(new Promise(async e => {
                        if (E.default.hasFetchedSubscriptions()) e();
                        else if (c.default.isSubscriptionFetching) {
                            let t = () => {
                                c.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                            };
                            t()
                        } else await (0, o.fetchSubscriptions)(), e()
                    })), await Promise.allSettled(e)
                }
                let s = _.default.getDefaultBillingCountryCode(),
                    r = null !== (i = null === (t = _.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
                    d = E.default.getPremiumTypeSubscription();
                null != d && null != d.paymentSourceId && (r = d.paymentSourceId), null === s && (s = null !== (a = c.default.ipCountryCode) && void 0 !== a ? a : null);
                let f = {};
                if (null != s && (f.country_code = s), null != r && (f.payment_source_id = r), null != s || null != r) {
                    if ("string" == typeof e) {
                        let t = {
                            url: e,
                            oldFormErrors: !0
                        };
                        e = t
                    }
                    if ("string" == typeof e.query) throw Error("string query not supported");
                    e.query = {
                        ...f,
                        ...e.query
                    }
                }
                return u.default.get(e)
            }

            function O(e) {
                switch (e) {
                    case T.PlatformTypes.WINDOWS:
                        return C.OperatingSystems.WINDOWS;
                    case T.PlatformTypes.OSX:
                        return C.OperatingSystems.MACOS;
                    case T.PlatformTypes.LINUX:
                        return C.OperatingSystems.LINUX;
                    default:
                        return null
                }
            }

            function R(e) {
                switch (e) {
                    case C.OperatingSystems.WINDOWS:
                        return m.default.Messages.WINDOWS;
                    case C.OperatingSystems.MACOS:
                        return m.default.Messages.MACOS;
                    case C.OperatingSystems.LINUX:
                        return m.default.Messages.LINUX
                }
                throw Error("Unknown operating system value: ".concat(e))
            }

            function y(e, t, n) {
                let i = t.getApplication(e);
                return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
            }
            let v = [];

            function M(e, t, n, i, l) {
                let s = t.get(e);
                if (null == s) return v;
                let r = s.applicationId,
                    u = [],
                    o = [],
                    d = function(e, t, n) {
                        var i;
                        let a = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
                            l = Object.keys(a),
                            s = l.map(e => {
                                let n = t.getUser(e);
                                return null == n ? null : {
                                    user: n,
                                    startTime: a[n.id].startedPlaying
                                }
                            }).filter(p.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                        return 0 === s.length ? null : {
                            type: C.StoreRecommendationTypes.NOW_PLAYING,
                            userInfo: s
                        }
                    }(r, n, i);
                null != d && (u.push(d), o = d.userInfo.map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                }));
                let c = l.getStatisticsForApplication(r);
                if (null != c) {
                    let e = c.map(e => e.user_id);
                    if (a.difference(e, o).length > 0) {
                        let e = function(e, t, n) {
                            let i = n.getStatisticsForApplication(e);
                            if (null == i) return null;
                            let a = i.map(e => {
                                let n = t.getUser(e.user_id);
                                return null == n ? null : {
                                    user: n,
                                    endTime: Date.parse(e.last_played_at)
                                }
                            }).filter(p.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                            return 0 === a.length ? null : {
                                type: C.StoreRecommendationTypes.EVER_PLAYED,
                                userInfo: a
                            }
                        }(r, n, l);
                        null != e && u.push(e)
                    }
                }
                return u
            }
            let D = [];

            function L(e, t, n) {
                let i = t.get(e),
                    a = n.getForSKU(e);
                if (null == i || null == a) return D;
                let l = [];
                (0, h.hasFlag)(i.flags, C.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && l.push({
                    type: C.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
                });
                let r = i.releaseDate;
                return null != r && 3 > s().diff(r, "months") && (i.accessType === C.SKUAccessTypes.EARLY_ACCESS ? l.push({
                    type: C.StoreRecommendationTypes.EARLY_ACCESS,
                    releaseDate: r
                }) : l.push({
                    type: C.StoreRecommendationTypes.RECENT_RELEASE_DATE,
                    releaseDate: r
                })), null != a.flavorText && l.push({
                    type: C.StoreRecommendationTypes.FLAVOR_TEXT,
                    flavorText: a.flavorText
                }), l
            }