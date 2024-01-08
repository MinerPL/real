            "use strict";
            n.r(t), n.d(t, {
                isCustomGiftEnabled: function() {
                    return G
                },
                GiftExperience: function() {
                    return i
                },
                GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING: function() {
                    return k
                },
                GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD: function() {
                    return F
                },
                getGiftExperience: function() {
                    return w
                },
                shouldShowCustomGiftExperience: function() {
                    return V
                },
                makeComboId: function() {
                    return H
                },
                parseComboId: function() {
                    return x
                },
                isGiftCodeEmbed: function() {
                    return Y
                },
                findGiftCodes: function() {
                    return K
                },
                getGiftCodeURL: function() {
                    return j
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
                    return Q
                },
                getButtonText: function() {
                    return X
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
            var i, a, l = n("506838"),
                s = n("446674"),
                r = n("333805"),
                u = n("791160"),
                o = n("78710"),
                d = n("977591"),
                c = n("353365"),
                _ = n("697218"),
                E = n("599110"),
                f = n("449008"),
                h = n("773336"),
                p = n("719923"),
                T = n("655518"),
                C = n("271560"),
                m = n("49111"),
                S = n("646718"),
                I = n("782340");
            let g = T.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
                A = ["discordapp.com/gifts", "discord.com/gifts"].map(e => T.default.escape(e)),
                N = [g, ...A].join("|"),
                O = RegExp("(?: |^|https?://)(?:".concat(N, ")/([a-z0-9-]+)"), "gi"),
                R = ["discord.com/billing/promotions", "promos.discord.gg"].map(e => T.default.escape(e)),
                y = [...R].join("|"),
                v = RegExp("(?: |^|https?://)(?:".concat(y, ")/([a-z0-9-]+)"), "gi"),
                M = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
                D = M(4, 4),
                L = M(4, 6),
                U = M(5, 3),
                P = [D, L, U, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
                b = new RegExp("^(".concat("WUMP-?", ")?(").concat(P, ")$")),
                G = e => null != e && !0;
            (a = i || (i = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", a[a.CUSTOM_MESSAGE = 2] = "CUSTOM_MESSAGE", a[a.EMOJI_SOUNDBOARD = 3] = "EMOJI_SOUNDBOARD";
            let k = new Set([2, 3]),
                F = new Set([3]),
                w = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "getGiftExperience";
                    return null != e ? o.CustomGiftSoundboardEmojiExperiment.getCurrentConfig({
                        location: n
                    }, {
                        autoTrackExposure: t
                    }).enabled ? 3 : 2 : d.ExpandedGiftingRevampExperiment.getCurrentConfig({
                        location: n
                    }, {
                        autoTrackExposure: t
                    }).enabled ? 1 : 0
                },
                V = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "shouldShowCustomGiftExperience";
                    return 0 !== w(e, t, n)
                };

            function H(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
            }

            function x(e) {
                let [t, n, i] = e.split(":");
                return {
                    skuId: t,
                    subscriptionPlanId: "" === n ? null : n,
                    giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0
                }
            }

            function B(e) {
                return e.replace(/[^A-Za-z0-9]/g, "")
            }
            let Y = e => (null == e ? void 0 : e.type) === m.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === m.MessageEmbedTypes.GIFT,
                K = e => {
                    let t;
                    if (null == e) return [];
                    let n = new Set;
                    for (; null != (t = O.exec(e)) && n.size < 3;) n.add(B(t[1]));
                    for (; null != (t = v.exec(e)) && n.size < 3;) n.add(B(t[1]));
                    return Array.from(n)
                };

            function j() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
                return null == n || (0, h.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
            }
            async function W(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let i = await (0, C.httpGetWithCountryCodeQuery)({
                            url: m.Endpoints.GIFT_CODE_RESOLVE(e),
                            query: {
                                with_application: t,
                                with_subscription_plan: n
                            },
                            oldFormErrors: !0
                        }),
                        a = i.body;
                    return E.default.track(m.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !0,
                        gift_code: a.code,
                        gift_code_max_uses: a.max_uses,
                        sku_id: a.store_listing.sku.id,
                        sku_type: a.store_listing.sku.type,
                        application_id: a.store_listing.sku.application_id,
                        store_title: a.store_listing.sku.name
                    }, {
                        flush: !0
                    }), a
                } catch (t) {
                    throw E.default.track(m.AnalyticEvents.GIFT_CODE_RESOLVED, {
                        resolved: !1,
                        gift_code: e
                    }), new r.default(t)
                }
            }

            function z(e, t) {
                E.default.track(m.AnalyticEvents.GIFT_CODE_COPIED, {
                    ...(0, u.default)(t, !1, !1),
                    ...e.analyticsData
                })
            }

            function q(e, t, n, i, a, l, s) {
                return null == n && (i || a || null == e) ? !s || l || i || a ? i && (t.isSubscription || null != e) ? m.GiftCodeModalStates.SUCCESS : m.GiftCodeModalStates.CONFIRM : m.GiftCodeModalStates.OPEN : m.GiftCodeModalStates.ERROR
            }

            function Q(e, t, n) {
                switch (e) {
                    case m.GiftCodeModalStates.ERROR:
                        return I.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    case m.GiftCodeModalStates.SUCCESS:
                        return t.isSubscription ? I.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                            skuName: n.name
                        }) : I.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
                    case m.GiftCodeModalStates.CONFIRM:
                    default:
                        return t.isSubscription ? I.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                            skuName: n.name
                        }) : I.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
                }
            }

            function X(e, t, n) {
                switch (e) {
                    case m.GiftCodeModalStates.ERROR:
                        return I.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
                    case m.GiftCodeModalStates.SUCCESS:
                        if (__OVERLAY__) return I.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                        if (t.isSubscription) return I.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                        return I.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
                    case m.GiftCodeModalStates.OPEN:
                        return I.default.Messages.GIFT_OPEN_PROMPT;
                    case m.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != n && n) return I.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                        if (null != t.giftStyle) return t.isClaimed ? I.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : I.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                        return t.isSubscription ? I.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : I.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
                }
            }

            function Z(e) {
                let {
                    step: t,
                    sku: n,
                    libraryApplication: i,
                    error: a,
                    accepted: s,
                    accepting: r,
                    onGoToLibrary: u,
                    subscriptionPlan: o = null
                } = e;
                switch (t) {
                    case m.GiftCodeModalStates.ERROR:
                        return J(i, a, s, r, u);
                    case m.GiftCodeModalStates.SUCCESS:
                        if (null != o) {
                            var d;
                            return d = o, (0, l.match)(d).with({
                                interval: S.SubscriptionIntervalTypes.MONTH,
                                premiumSubscriptionType: S.PremiumTypes.TIER_2
                            }, () => I.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                                timeInterval: I.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                            })).with({
                                interval: S.SubscriptionIntervalTypes.YEAR,
                                premiumSubscriptionType: S.PremiumTypes.TIER_2
                            }, () => I.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                                timeInterval: I.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                            })).with({
                                interval: S.SubscriptionIntervalTypes.MONTH,
                                premiumSubscriptionType: S.PremiumTypes.TIER_1
                            }, () => I.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
                                intervalCount: d.intervalCount
                            })).with({
                                interval: S.SubscriptionIntervalTypes.YEAR,
                                premiumSubscriptionType: S.PremiumTypes.TIER_1
                            }, () => I.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
                                intervalCount: d.intervalCount
                            })).otherwise(() => I.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                        }
                        return I.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                            skuName: n.name
                        });
                    case m.GiftCodeModalStates.CONFIRM:
                    default:
                        if (null != o) {
                            let e = o.interval === S.SubscriptionIntervalTypes.MONTH ? I.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : I.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM;
                            return e.format({
                                skuName: n.name,
                                intervalCount: o.intervalCount
                            })
                        }
                        return I.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                            skuName: n.name
                        })
                }
            }

            function J(e, t, n, i, a) {
                let l = I.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
                    onGoToLibrary: a
                });
                if (null != (n || i ? void 0 : e)) return l;
                if (null == t) return null;
                let s = _.default.getCurrentUser();
                return function(e, t) {
                    switch (e.code) {
                        case m.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                            return I.default.Messages.GIFT_ERROR_OWNED;
                        case m.AbortCodes.UNKNOWN_GIFT_CODE:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                            return I.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                                planName: (0, p.isPremiumExactly)(t, S.PremiumTypes.TIER_2) ? I.default.Messages.PREMIUM_TIER_2 : I.default.Messages.PREMIUM_TIER_1
                            });
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                        case m.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                            return I.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                        case m.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                            return I.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                        default:
                            return I.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
                    }
                }(t, s)
            }

            function $(e, t, n) {
                let i = t.applicationId,
                    a = e.length > 0 ? e : [i],
                    l = a.map(e => n.getLibraryApplication(i, e, !0)).filter(f.isNotNullish);
                return l.length === a.length ? l[0] : null
            }

            function ee(e) {
                let t = e.trim().split("/").pop(),
                    n = t.match(b);
                if (null == n) return null;
                let [i, a, l] = n;
                return null == l ? null : l.replace(/-/g, "")
            }
            let et = (e, t) => (0, s.useStateFromStores)([c.default], () => {
                if (null == e || !t) return null;
                let n = c.default.getGiftCode(e);
                return null == n || "" === n ? null : n
            })