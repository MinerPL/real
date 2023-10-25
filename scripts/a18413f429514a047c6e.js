(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29414"], {
        185782: function(e, t, i) {
            "use strict";
            e.exports = i.p + "140ec8f5d02da1e5195c.svg"
        },
        54239: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return r
                }
            });
            var n = i("913144");

            function l(e) {
                n.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                n.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                n.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
                }
            });
            var n = i("913144");

            function l(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var n = i("913144");

            function l() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return d
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var n = i("990746"),
                l = i("913144"),
                a = i("333805"),
                r = i("160299"),
                o = i("745279"),
                s = i("850068"),
                _ = i("49111"),
                u = i("646718");
            async function c(e, t, i, u, c) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: _.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != i && (o.payment_source_id = i), null != u && (o.include_unpublished = u), null != c && (o.revenue_surface = c), a.query = o, !r.default.ipCountryCodeLoaded && await (0, s.fetchIpCountryCode)();
                    let E = await n.default.get(a);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new a.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== u.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function d(e, t, i) {
                return Promise.all(u.ACTIVE_PREMIUM_SKUS.filter(e => e !== u.PremiumSubscriptionSKUs.NONE).map(n => c(n, e, t, void 0, i)))
            }

            function I() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        304580: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return T
                }
            });
            var n, l, a = i("920040");
            i("773670");
            var r = i("575482"),
                o = i.n(r),
                s = i("807403"),
                _ = i("77078"),
                u = i("945330"),
                c = i("381546"),
                E = i("782340"),
                d = i("830888");
            (n = l || (l = {})).DEFAULT = "", n.BOLD = "Bold", n.SOLID = "Solid";
            let I = e => {
                let {
                    closeAction: t,
                    variant: i,
                    keybind: n,
                    className: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: o(d.container, r),
                    children: [(0, a.jsx)(_.Clickable, {
                        className: o(d.closeButton, {
                            [d.closeButtonBold]: i === l.BOLD,
                            [d.closeButtonSolid]: i === l.SOLID
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: i === l.SOLID ? (0, a.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, a.jsx)(u.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), s.isMobile ? null : (0, a.jsx)("div", {
                        className: o(d.keybind),
                        "aria-hidden": !0,
                        children: n
                    })]
                })
            };
            I.defaultProps = {
                variant: l.DEFAULT
            }, I.Variants = l;
            var T = I
        },
        427027: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        276825: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                CheckmarkSmallIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        505088: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        666031: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GifIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        998460: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        753809: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LinkIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        287083: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("912557"),
                a = i("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        252744: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("773670");

            function l(e) {
                let [t, i] = (0, n.useState)(!1), l = (0, n.useRef)(e.current);
                return (0, n.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, n.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => i(!0),
                        n = () => i(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }, [l]), t
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), (n = l || (l = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, l, a = l
        },
        20606: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("710984").default
        },
        526887: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ConfettiCannonContext: function() {
                    return u
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var n = i("920040"),
                l = i("773670"),
                a = i("641900"),
                r = i("744196"),
                o = i("206230"),
                s = i("49111");
            let _ = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                u = l.createContext(_);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: i,
                    spriteCanvas: s,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: d
                } = e, I = (0, a.useConfettiCannon)(i, s), T = (0, r.default)([o.default], () => o.default.useReducedMotion), A = l.useMemo(() => T ? _ : {
                    confettiCanvas: i,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, i, n) => I.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...i
                    }, n),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, i)
                    },
                    createMultipleConfettiAt: function(e, t, i) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...i
                        }, n, l)
                    },
                    addClickListener: E,
                    removeClickListener: d
                }, [E, c, I, i, T, d]);
                return (0, n.jsx)(u.Provider, {
                    value: A,
                    children: t
                })
            }
        },
        649844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return d
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("462567"),
                a = i("77078"),
                r = i("112679"),
                o = i("55689"),
                s = i("855133"),
                _ = i("599110"),
                u = i("659500"),
                c = i("49111"),
                E = i("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: C,
                    analyticsObject: L,
                    analyticsLocation: N,
                    analyticsSourceLocation: R,
                    isGift: O = !1,
                    giftMessage: p,
                    subscriptionTier: S,
                    trialId: m,
                    postSuccessGuild: f,
                    openInvoiceId: M,
                    applicationId: h,
                    referralTrialOfferId: U,
                    giftRecipient: P,
                    returnRef: g
                } = null != e ? e : {}, v = !1, D = (0, l.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("646139").then(i.bind(i, "646139"));
                    return i => {
                        let {
                            onClose: l,
                            ...a
                        } = i;
                        return (0, n.jsx)(e, {
                            ...a,
                            loadId: D,
                            subscriptionTier: S,
                            skuId: S,
                            isGift: O,
                            giftMessage: p,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == A || A())
                            },
                            onComplete: () => {
                                v = !0, null == T || T(), !O && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: C,
                            analyticsObject: L,
                            analyticsLocation: N,
                            analyticsSourceLocation: R,
                            trialId: m,
                            postSuccessGuild: f,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: M,
                            applicationId: h,
                            referralTrialOfferId: U,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !v && _.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : L,
                            source: R,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: O,
                            eligible_for_trial: null != m,
                            application_id: h,
                            location_stack: C
                        }), (0, r.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == I || I(v), v && (!O && u.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == A || A())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        855133: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return r
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return _
                }
            });
            var n = i("913144");
            let l = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                _ = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        374278: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("77078"),
                a = i("95039"),
                r = i("305961"),
                o = i("957255"),
                s = i("145131"),
                _ = i("181114"),
                u = i("599110"),
                c = i("488464"),
                E = i("998716"),
                d = i("923510"),
                I = i("49111"),
                T = i("646718"),
                A = i("782340"),
                C = i("382791");

            function L(e) {
                var t;
                let i, {
                        channel: L,
                        transitionState: N,
                        onClose: R
                    } = e,
                    O = r.default.getGuild(L.guild_id),
                    p = null !== (t = null == O ? void 0 : O.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    S = !!(null == O ? void 0 : O.isCommunity()),
                    m = A.default.Messages.STAGE_FULL_TITLE,
                    f = S ? p < I.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == O ? void 0 : O.premiumTier) !== I.BoostedGuildTiers.TIER_3 && p <= I.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    M = o.default.can(d.MODERATE_STAGE_CHANNEL_PERMISSIONS, L);
                i = S && (null == O ? void 0 : O.premiumTier) === I.BoostedGuildTiers.TIER_3 ? p <= I.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? A.default.Messages.STAGE_FULL_BOOST_MORE_BODY : A.default.Messages.STAGE_FULL_MAX_BODY : f ? A.default.Messages.STAGE_FULL_BODY : A.default.Messages.STAGE_FULL_MAX_BODY;
                let h = () => {
                        R(), u.default.track(I.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: L.guild_id,
                            type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: M,
                            action: T.BoostingUpsellAction.DISMISS
                        })
                    },
                    U = c.default.getMutableParticipants(L.id, E.StageChannelParticipantNamedIndex.SPEAKER),
                    P = U.filter(e => e.type === E.StageChannelParticipantTypes.VOICE),
                    g = P.length,
                    v = c.default.getParticipantCount(L.id, E.StageChannelParticipantNamedIndex.AUDIENCE);
                return u.default.track(I.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: L.guild_id,
                    type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: M,
                    listener_count: g + v
                }), (0, n.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.SMALL,
                    transitionState: N,
                    "aria-label": m,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        justify: s.default.Justify.END,
                        separator: !1,
                        className: C.header,
                        children: [(0, n.jsx)("div", {
                            className: C.fullArt
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            onClick: R
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: C.content,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            children: m
                        }), (0, n.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: i
                        })]
                    }), (0, n.jsx)(l.ModalFooter, {
                        className: C.footer,
                        children: f ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.Button, {
                                look: l.ButtonLooks.LINK,
                                className: C.noThanksButton,
                                color: l.ButtonColors.CUSTOM,
                                size: l.ButtonSizes.SMALL,
                                onClick: h,
                                children: A.default.Messages.NO_THANKS
                            }), (0, n.jsx)(_.default, {
                                onClick: () => {
                                    R(), (0, a.openGuildBoostingMarketingModal)({
                                        guildId: L.guild_id,
                                        location: {
                                            section: I.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), u.default.track(I.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: L.guild_id,
                                        type: T.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: M,
                                        action: T.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: l.ButtonSizes.SMALL,
                                className: C.boostButton,
                                children: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, n.jsx)(l.Button, {
                            onClick: h,
                            size: l.ButtonSizes.SMALL,
                            color: l.ButtonColors.CUSTOM,
                            className: C.boostButton,
                            children: A.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        522308: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("666038");
            class l extends n.default {
                static createFromServer(e, t) {
                    return new l({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var a = l
        },
        778588: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("498225"),
                l = i("913144");
            let a = [];

            function r() {
                a = []
            }
            class o extends n.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            o.displayName = "LayerStore";
            var s = new o(l.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: r,
                LOGOUT: r,
                NOTIFICATION_CLICK: r
            })
        },
        931138: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("920040"),
                l = i("773670"),
                a = i("575482"),
                r = i.n(a),
                o = i("77078"),
                s = i("760607"),
                _ = i("13681");

            function u(e) {
                let {
                    children: t,
                    size: i = 16,
                    className: a,
                    flowerStarClassName: u,
                    ...c
                } = e, E = l.Children.only(t), d = (0, o.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: r(_.flowerStarContainer, a),
                    style: {
                        width: i,
                        height: i
                    },
                    children: [(0, n.jsx)(s.default, {
                        ...c,
                        className: r(u, _.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: r(_.childContainer, {
                            [_.redesignIconChildContainer]: d
                        }),
                        children: E
                    })]
                })
            }
        },
        181114: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Shine: function() {
                    return A
                },
                default: function() {
                    return L
                }
            });
            var n, l, a = i("920040"),
                r = i("773670"),
                o = i("575482"),
                s = i.n(o),
                _ = i("28926"),
                u = i("77078"),
                c = i("252744"),
                E = i("145131"),
                d = i("212407");
            (n = l || (l = {})).DEFAULT = "default", n.SMALL = "small";
            let I = {
                    [l.DEFAULT]: d.shineDefault,
                    [l.SMALL]: d.shineSmall
                },
                T = {
                    [l.DEFAULT]: d.shineInnerDefault,
                    [l.SMALL]: d.shineInnerSmall
                };
            class A extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: i,
                        ...n
                    } = this.props;
                    return (0, a.jsx)(_.default.div, {
                        ...n,
                        className: s(d.shineContainer, e, {
                            [d.shinePaused]: i
                        }),
                        children: (0, a.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: I[t],
                            children: (0, a.jsx)("div", {
                                className: T[t]
                            })
                        })
                    })
                }
            }
            A.defaultProps = {
                shineSize: l.DEFAULT
            };
            let C = e => {
                let {
                    children: t,
                    className: i,
                    disabled: n,
                    submitting: o,
                    pauseAnimation: _,
                    shineSize: E = l.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: T,
                    onlyShineOnHover: C,
                    ...L
                } = e, N = r.createRef(), R = (0, c.default)(N), O = !n && !o && !0 !== _ && (!C || R);
                return (0, a.jsxs)(u.Button, {
                    buttonRef: N,
                    ...L,
                    className: s(d.shinyButton, i),
                    disabled: n,
                    submitting: o,
                    children: [t, O ? (0, a.jsx)(A, {
                        shinePaused: I,
                        className: s(d.buttonShine, C ? d.onlyShineOnHover : void 0, T),
                        shineSize: E
                    }) : null]
                })
            };
            C.ShineSizes = l;
            var L = C
        },
        381546: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("505088"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: l = "currentColor",
                        foreground: a,
                        backgroundColor: o,
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: i,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, n.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, a.CircleXIcon)
        },
        760607: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("75196"),
                a = function(e) {
                    let {
                        width: t = 16,
                        height: i = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: i,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("998460"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: i,
                        ...(0, r.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon)
        },
        83900: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("753809"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("path", {
                                className: a,
                                fill: l,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, n.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, a.LinkIcon)
        },
        151185: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("424823"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon)
        },
        368121: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("427027"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("287083"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: i = 32,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, a.StageIcon)
        },
        486952: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("469563"),
                a = i("276825"),
                r = i("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: i = 16,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: i,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: l
                        })
                    })
                }, a.CheckmarkSmallIcon)
        },
        956089: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                BadgeShapes: function() {
                    return s
                },
                getBadgeWidthForValue: function() {
                    return _
                },
                getBadgeCountString: function() {
                    return u
                },
                NumberBadge: function() {
                    return c
                },
                TextBadge: function() {
                    return E
                },
                PremiumBadge: function() {
                    return d
                },
                IconBadge: function() {
                    return I
                },
                CircleBadge: function() {
                    return T
                }
            });
            var n = i("920040");
            i("773670");
            var l = i("575482"),
                a = i.n(l);
            i("77078");
            var r = i("20606");
            i("782340");
            var o = i("460671");
            let s = {
                ROUND: o.baseShapeRound,
                ROUND_LEFT: o.baseShapeRoundLeft,
                ROUND_RIGHT: o.baseShapeRoundRight,
                SQUARE: ""
            };

            function _(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function u(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let c = e => {
                    let {
                        count: t,
                        color: i = r.default.STATUS_DANGER,
                        disableColor: l = !1,
                        shape: c = s.ROUND,
                        className: E,
                        style: d,
                        ...I
                    } = e;
                    return (0, n.jsx)("div", {
                        className: a(E, o.numberBadge, c),
                        style: {
                            backgroundColor: l ? void 0 : i,
                            width: _(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ...d
                        },
                        ...I,
                        children: u(t)
                    })
                },
                E = e => {
                    let {
                        text: t,
                        className: i,
                        color: l = r.default.STATUS_DANGER,
                        shape: _ = s.ROUND,
                        disableColor: u = !1,
                        style: c,
                        ...E
                    } = e;
                    return (0, n.jsx)("div", {
                        className: a(i, o.textBadge, _),
                        style: {
                            backgroundColor: u ? void 0 : l,
                            ...c
                        },
                        ...E,
                        children: t
                    })
                },
                d = e => {
                    let {
                        text: t,
                        className: i,
                        ...l
                    } = e;
                    return (0, n.jsx)(E, {
                        className: a(o.premiumBadge, i),
                        text: t,
                        ...l
                    })
                },
                I = e => {
                    let {
                        icon: t,
                        className: i,
                        color: l = r.default.STATUS_DANGER,
                        shape: _ = s.ROUND,
                        disableColor: u = !1,
                        style: c
                    } = e;
                    return (0, n.jsx)("div", {
                        className: a(i, o.iconBadge, _),
                        style: {
                            backgroundColor: u ? void 0 : l,
                            ...c
                        },
                        children: (0, n.jsx)(t, {
                            className: o.icon
                        })
                    })
                },
                T = e => {
                    let {
                        className: t,
                        color: i = r.default.INTERACTIVE_ACTIVE,
                        shape: l = s.ROUND,
                        disableColor: _ = !1,
                        style: u,
                        ...c
                    } = e;
                    return (0, n.jsx)("div", {
                        className: a(t, o.circleBadge, l),
                        style: {
                            backgroundColor: _ ? void 0 : i,
                            ...u
                        },
                        ...c
                    })
                }
        }
    }
]);