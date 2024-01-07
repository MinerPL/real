            "use strict";
            n.r(t), n.d(t, {
                getStoreListingLocation: function() {
                    return A
                },
                getApplicationStoreListingLocation: function() {
                    return N
                },
                getAssetURL: function() {
                    return O
                },
                httpGetWithCountryCodeQuery: function() {
                    return R
                },
                nativePlatformTypeToSKUOperatingSystem: function() {
                    return y
                },
                skuOperatingSystemToText: function() {
                    return v
                },
                getPrimarySKUForApplication: function() {
                    return M
                },
                getSocialRecommendationReasons: function() {
                    return D
                },
                getNonSocialRecommendationReasons: function() {
                    return P
                }
            }), n("424973"), n("462568"), n("222007"), n("70102"), n("702976");
            var i = n("917351"),
                a = n.n(i),
                l = n("866227"),
                s = n.n(l),
                r = n("642852"),
                u = n.n(r),
                o = n("394846"),
                d = n("872717"),
                c = n("850068"),
                _ = n("407063"),
                E = n("160299"),
                f = n("357957"),
                h = n("521012"),
                p = n("560528"),
                T = n("568734"),
                C = n("449008"),
                m = n("773336"),
                S = n("49111"),
                I = n("782340");
            u.shim();
            let g = !o.isMobile && !o.isTablet && -1 !== (0, p.getChromeVersion)();

            function A(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: i,
                    storeListingId: a,
                    slug: l,
                    channelId: s,
                    guildId: r
                } = t;
                return {
                    pathname: null != s && null != r ? S.Routes.CHANNEL(r, s, e) : S.Routes.APPLICATION_STORE_LISTING_SKU(e, l),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: i
                    },
                    search: null != a ? "?store_listing_id=".concat(a) : ""
                }
            }

            function N(e, t) {
                let {
                    analyticsSource: n,
                    analyticsProperties: i,
                    slug: a
                } = t;
                return {
                    pathname: S.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, a),
                    state: {
                        analyticsSource: n,
                        analyticsProperties: i
                    }
                }
            }

            function O(e, t, n, i) {
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
                "webp" === i && !g && (i = "png");
                let r = (a = "https:", "https:");
                return l = null != s ? "".concat(r, "//").concat(s, "/app-assets/").concat(e, "/store/").concat(t.id, ".").concat(i) : "".concat(r).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(S.Endpoints.STORE_ASSET(e, t.id, i)), null != n && (l += "?size=".concat((0, _.getBestMediaProxySize)(n * (0, _.getDevicePixelRatio)()))), l
            }
            async function R(e) {
                var t, n, i, a;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (l) {
                    let e = [];
                    !f.default.hasFetchedPaymentSources && e.push(null !== (n = E.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, c.fetchPaymentSources)()), !E.default.ipCountryCodeLoaded && e.push((0, c.fetchIpCountryCode)()), e.push(new Promise(async e => {
                        if (h.default.hasFetchedSubscriptions()) e();
                        else if (E.default.isSubscriptionFetching) {
                            let t = () => {
                                E.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                            };
                            t()
                        } else await (0, c.fetchSubscriptions)(), e()
                    })), await Promise.allSettled(e)
                }
                let s = f.default.getDefaultBillingCountryCode(),
                    r = null !== (i = null === (t = f.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
                    u = h.default.getPremiumTypeSubscription();
                null != u && null != u.paymentSourceId && (r = u.paymentSourceId), null === s && (s = null !== (a = E.default.ipCountryCode) && void 0 !== a ? a : null);
                let o = {};
                if (null != s && (o.country_code = s), null != r && (o.payment_source_id = r), null != s || null != r) {
                    if ("string" == typeof e) {
                        let t = {
                            url: e,
                            oldFormErrors: !0
                        };
                        e = t
                    }
                    if ("string" == typeof e.query) throw Error("string query not supported");
                    e.query = {
                        ...o,
                        ...e.query
                    }
                }
                return d.default.get(e)
            }

            function y(e) {
                switch (e) {
                    case m.PlatformTypes.WINDOWS:
                        return S.OperatingSystems.WINDOWS;
                    case m.PlatformTypes.OSX:
                        return S.OperatingSystems.MACOS;
                    case m.PlatformTypes.LINUX:
                        return S.OperatingSystems.LINUX;
                    default:
                        return null
                }
            }

            function v(e) {
                switch (e) {
                    case S.OperatingSystems.WINDOWS:
                        return I.default.Messages.WINDOWS;
                    case S.OperatingSystems.MACOS:
                        return I.default.Messages.MACOS;
                    case S.OperatingSystems.LINUX:
                        return I.default.Messages.LINUX
                }
                throw Error("Unknown operating system value: ".concat(e))
            }

            function M(e, t, n) {
                let i = t.getApplication(e);
                return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
            }
            let L = [];

            function D(e, t, n, i, l) {
                let s = t.get(e);
                if (null == s) return L;
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
                            }).filter(C.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                        return 0 === s.length ? null : {
                            type: S.StoreRecommendationTypes.NOW_PLAYING,
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
                            }).filter(C.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                            return 0 === a.length ? null : {
                                type: S.StoreRecommendationTypes.EVER_PLAYED,
                                userInfo: a
                            }
                        }(r, n, l);
                        null != e && u.push(e)
                    }
                }
                return u
            }
            let U = [];

            function P(e, t, n) {
                let i = t.get(e),
                    a = n.getForSKU(e);
                if (null == i || null == a) return U;
                let l = [];
                (0, T.hasFlag)(i.flags, S.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && l.push({
                    type: S.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
                });
                let r = i.releaseDate;
                return null != r && 3 > s().diff(r, "months") && (i.accessType === S.SKUAccessTypes.EARLY_ACCESS ? l.push({
                    type: S.StoreRecommendationTypes.EARLY_ACCESS,
                    releaseDate: r
                }) : l.push({
                    type: S.StoreRecommendationTypes.RECENT_RELEASE_DATE,
                    releaseDate: r
                })), null != a.flavorText && l.push({
                    type: S.StoreRecommendationTypes.FLAVOR_TEXT,
                    flavorText: a.flavorText
                }), l
            }