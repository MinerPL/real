            "use strict";
            n.r(t), n.d(t, {
                isCustomGiftEnabled: function() {
                    return w
                },
                GiftExperience: function() {
                    return s
                },
                GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING: function() {
                    return L
                },
                GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD: function() {
                    return U
                },
                getGiftExperience: function() {
                    return G
                },
                shouldShowCustomGiftExperience: function() {
                    return F
                },
                makeComboId: function() {
                    return x
                },
                parseComboId: function() {
                    return B
                },
                isGiftCodeEmbed: function() {
                    return Y
                },
                findGiftCodes: function() {
                    return j
                },
                getGiftCodeURL: function() {
                    return K
                },
                resolveGiftCode: function() {
                    return W
                },
                trackGiftCodeCopy: function() {
                    return z
                },
                getStep: function() {
                    return q
                },
                getHeaderText: function() {
                    return X
                },
                getButtonText: function() {
                    return Q
                },
                getBodyText: function() {
                    return Z
                },
                getErrorMessage: function() {
                    return J
                },
                firstLibraryApplicationForGiftCode: function() {
                    return $
                },
                processGiftCodeInput: function() {
                    return ee
                },
                useGetGiftCode: function() {
                    return et
                }
            }), n("222007"), n("781738"), n("794252");
            var s, i, r = n("506838"),
                a = n("446674"),
                o = n("333805"),
                d = n("791160"),
                u = n("78710"),
                l = n("977591"),
                f = n("353365"),
                _ = n("697218"),
                c = n("599110"),
                g = n("449008"),
                m = n("773336"),
                h = n("719923"),
                v = n("655518"),
                E = n("271560"),
                p = n("49111"),
                y = n("646718"),
                T = n("782340");
            let C = v.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
                S = ["discordapp.com/gifts", "discord.com/gifts"].map(e => v.default.escape(e)),
                I = [C, ...S].join("|"),
                A = RegExp("(?: |^|https?://)(?:".concat(I, ")/([a-z0-9-]+)"), "gi"),
                D = ["discord.com/billing/promotions", "promos.discord.gg"].map(e => v.default.escape(e)),
                N = [...D].join("|"),
                O = RegExp("(?: |^|https?://)(?:".concat(N, ")/([a-z0-9-]+)"), "gi"),
                b = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
                P = b(4, 4),
                V = b(4, 6),
                R = b(5, 3),
                k = [P, V, R, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
                M = new RegExp("^(".concat("WUMP-?", ")?(").concat(k, ")$")),
                w = e => null != e && !0;
            (i = s || (s = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", i[i.CUSTOM_MESSAGE = 2] = "CUSTOM_MESSAGE", i[i.EMOJI_SOUNDBOARD = 3] = "EMOJI_SOUNDBOARD";
            let L = new Set([2, 3]),
                U = new Set([3]),
                G = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "getGiftExperience";
                    return null != e ? u.CustomGiftSoundboardEmojiExperiment.getCurrentConfig({
                        location: n
                    }, {
                        autoTrackExposure: t
                    }).enabled ? 3 : 2 : l.ExpandedGiftingRevampExperiment.getCurrentConfig({
                        location: n
                    }, {
                        autoTrackExposure: t
                    }).enabled ? 1 : 0
                },
                F = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "shouldShowCustomGiftExperience";
                    return 0 !== G(e, t, n)
                };

            function x(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
            }

            function B(e) {
                let [t, n, s] = e.split(":");
                return {
                    skuId: t,
                    subscriptionPlanId: "" === n ? null : n,
                    giftStyle: "" !== s && null != s ? Number.parseInt(s) : void 0
                }
            }

            function H(e) {
                return e.replace(/[^A-Za-z0-9]/g, "")
            }
            let Y = e => (null == e ? void 0 : e.type) === p.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === p.MessageEmbedTypes.GIFT,
                j = e => {
                    let t;
                    if (null == e) return [];
                    let n = new Set;
                    for (; null != (t = A.exec(e)) && n.size < 3;) n.add(H(t[1]));
                    for (; null != (t = O.exec(e)) && n.size < 3;) n.add(H(t[1]));
                    return Array.from(n)
                };

            function K() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
                return null == n || (0, m.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
            }
            async function W(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let s = await (0, E.httpGetWithCountryCodeQuery)({
                            url: p.Endpoints.GIFT_CODE_RESOLVE(e),
                            query: {
                                with_application: t,
                                with_subscription_plan: n
                            },
                            oldFormErrors: !0
                        }),
                        i = s.body;
                    return c.default.track(p.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !0,
                        gift_code: i.code,
                        gift_code_max_uses: i.max_uses,
                        sku_id: i.store_listing.sku.id,
                        sku_type: i.store_listing.sku.type,
                        application_id: i.store_listing.sku.application_id,
                        store_title: i.store_listing.sku.name
                    }, {
                        flush: !0
                    }), i
                } catch (t) {
                    throw c.default.track(p.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !1,
                        gift_code: e
                    }), new o.default(t)
                }
            }

            function z(e, t) {
                c.default.track(p.AnalyticEvents.GIFT_CODE_COPIED, {
                    ...(0, d.default)(t, !1, !1),
                    ...e.analyticsData
                })
            }

            function q(e, t, n, s, i, r, a) {
                return null == n && (s || i || null == e) ? !a || r || s || i ? s && (t.isSubscription || null != e) ? p.GiftCodeModalStates.SUCCESS : p.GiftCodeModalStates.CONFIRM : p.GiftCodeModalStates.OPEN : p.GiftCodeModalStates.ERROR
            }

            function X(e, t, n) {
                switch (e) {
                    case p.GiftCodeModalStates.ERROR:
                        return T.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    case p.GiftCodeModalStates.SUCCESS:
                        return t.isSubscription ? T.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                            skuName: n.name
                        }) : T.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
                    case p.GiftCodeModalStates.CONFIRM:
                    default:
                        return t.isSubscription ? T.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                            skuName: n.name
                        }) : T.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
                }
            }

            function Q(e, t, n) {
                switch (e) {
                    case p.GiftCodeModalStates.ERROR:
                        return T.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
                    case p.GiftCodeModalStates.SUCCESS:
                        if (__OVERLAY__) return T.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                        if (t.isSubscription) return T.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                        return T.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
                    case p.GiftCodeModalStates.OPEN:
                        return T.default.Messages.GIFT_OPEN_PROMPT;
                    case p.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != n && n) return T.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                        if (null != t.giftStyle) return t.isClaimed ? T.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : T.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                        return t.isSubscription ? T.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : T.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
                }
            }

            function Z(e) {
                let {
                    step: t,
                    sku: n,
                    libraryApplication: s,
                    error: i,
                    accepted: a,
                    accepting: o,
                    onGoToLibrary: d,
                    subscriptionPlan: u = null
                } = e;
                switch (t) {
                    case p.GiftCodeModalStates.ERROR:
                        return J(s, i, a, o, d);
                    case p.GiftCodeModalStates.SUCCESS:
                        if (null != u) {
                            var l;
                            return l = u, (0, r.match)(l).with({
                                interval: y.SubscriptionIntervalTypes.MONTH,
                                premiumSubscriptionType: y.PremiumTypes.TIER_2
                            }, () => T.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                                timeInterval: T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                            })).with({
                                interval: y.SubscriptionIntervalTypes.YEAR,
                                premiumSubscriptionType: y.PremiumTypes.TIER_2
                            }, () => T.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                                timeInterval: T.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                            })).with({
                                interval: y.SubscriptionIntervalTypes.MONTH,
                                premiumSubscriptionType: y.PremiumTypes.TIER_1
                            }, () => T.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
                                intervalCount: l.intervalCount
                            })).with({
                                interval: y.SubscriptionIntervalTypes.YEAR,
                                premiumSubscriptionType: y.PremiumTypes.TIER_1
                            }, () => T.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
                                intervalCount: l.intervalCount
                            })).otherwise(() => T.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                        }
                        return T.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                            skuName: n.name
                        });
                    case p.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != u) {
                            let e = u.interval === y.SubscriptionIntervalTypes.MONTH ? T.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : T.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM;
                            return e.format({
                                skuName: n.name,
                                intervalCount: u.intervalCount
                            })
                        }
                        return T.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                            skuName: n.name
                        })
                }
            }

            function J(e, t, n, s, i) {
                let r = T.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
                    onGoToLibrary: i
                });
                if (null != (n || s ? void 0 : e)) return r;
                if (null == t) return null;
                let a = _.default.getCurrentUser();
                return function(e, t) {
                    switch (e.code) {
                        case p.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                            return T.default.Messages.GIFT_ERROR_OWNED;
                        case p.AbortCodes.UNKNOWN_GIFT_CODE:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                            return T.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                                planName: (0, h.isPremiumExactly)(t, y.PremiumTypes.TIER_2) ? T.default.Messages.PREMIUM_TIER_2 : T.default.Messages.PREMIUM_TIER_1
                            });
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                        case p.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                            return T.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                        case p.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                            return T.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                        default:
                            return T.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
                    }
                }(t, a)
            }

            function $(e, t, n) {
                let s = t.applicationId,
                    i = e.length > 0 ? e : [s],
                    r = i.map(e => n.getLibraryApplication(s, e, !0)).filter(g.isNotNullish);
                return r.length === i.length ? r[0] : null
            }

            function ee(e) {
                let t = e.trim().split("/").pop(),
                    n = t.match(M);
                if (null == n) return null;
                let [s, i, r] = n;
                return null == r ? null : r.replace(/-/g, "")
            }
            let et = (e, t) => (0, a.useStateFromStores)([f.default], () => {
                if (null == e || !t) return null;
                let n = f.default.getGiftCode(e);
                return null == n || "" === n ? null : n
            })