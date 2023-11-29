(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10697"], {
        856670: function(t, e, n) {
            "use strict";
            t.exports = n.p + "018197f71e03e53562e7.svg"
        },
        693029: function(t, e, n) {
            "use strict";
            t.exports = n.p + "7e5dd7f59f96cc264184.svg"
        },
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            }), n("424973");
            var r = n("913144"),
                i = n("696605");

            function l(t, e) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function u(t, e) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function o(t, e, n) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function a(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: r,
                    height: l,
                    rowHeight: u
                } = t;

                function a(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / u)) + e)
                }
                let s = [];

                function c(t) {
                    let e = t + (i.MINIMUM_RANGE - 1);
                    return s.push([t, e]), e + 1
                }
                let d = a(.5 * l),
                    f = a(r, -d),
                    E = a(r + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; f <= E;) f = c(f);
                o(e, n, s)
            }
        },
        112679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateStripePaymentRequest: function() {
                    return i
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var r = n("913144");

            function i(t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: t
                })
            }

            function l(t, e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function u() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(t, e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function a() {
                r.default.wait(() => r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearPurchaseTokenAuthState: function() {
                    return i
                }
            });
            var r = n("913144");

            function i() {
                r.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return h
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return v
                },
                setPendingGlobalNameName: function() {
                    return A
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectID: function() {
                    return P
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return g
                },
                clearErrors: function() {
                    return L
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return O
                },
                resetAndCloseUserProfileForm: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var r = n("872717"),
                i = n("95410"),
                l = n("819855"),
                u = n("913144"),
                o = n("393414"),
                a = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function I() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(t, e) {
                let n = e ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    i = e ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(e => r.default.post({
                    url: i,
                    body: {
                        password: t,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    d.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(t) {
                let e = await r.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function N(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: r,
                    emailToken: l,
                    password: o,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: T,
                    globalName: p
                } = t;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(t => {
                    let u = {
                        username: e,
                        email: r,
                        email_token: l,
                        password: o,
                        avatar: d,
                        discriminator: n,
                        global_name: p,
                        new_password: T,
                        ...t
                    };
                    null === I && (u.avatar_decoration_id = null), null != I && (u.avatar_decoration_id = I.id, u.avatar_decoration_sku_id = I.skuId);
                    let a = i.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != a && (u.push_provider = s, u.push_token = a);
                    let c = i.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), S(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(e.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function h() {
                return r.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return r.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function v(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function A(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function R(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function P(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function g(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: t
                })
            }

            function L() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function O() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(t) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        133403: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                u = n("77078"),
                o = n("782340"),
                a = n("239636");
            let s = Object.freeze({
                DEFAULT: a.default,
                FILLED: a.filled
            });

            function c(t) {
                let {
                    className: e,
                    onClick: n,
                    "aria-label": i,
                    look: c = s.DEFAULT
                } = t;
                return (0, r.jsx)(u.Clickable, {
                    "aria-label": null != i ? i : o.default.Messages.REMOVE,
                    className: l(a.button, c, e),
                    onClick: n
                })
            }
            c.Looks = s
        },
        733154: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ChatIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: o
                    })
                })
            }
        },
        31745: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CirclePlusIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        505088: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CircleXIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    secondaryColor: u = "transparent",
                    secondaryColorClass: o = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof u ? u : u.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        666031: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GifIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        504318: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PencilIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        className: o
                    })
                })
            }
        },
        125094: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ScreenArrowIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.293-.707l-3-3a1 1 0 1 0-1.414 1.414L14.586 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13 19.5a.5.5 0 0 0 .5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2Z",
                        className: o
                    })]
                })
            }
        },
        197801: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SettingsIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        287083: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                StageIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: o
                    })]
                })
            }
        },
        390300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                VoiceNormalIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = t;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: o
                    })]
                })
            }
        },
        206625: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(t, e) {
                let n = r.useRef(t);
                return r.useEffect(() => {
                    function t(t) {
                        null != n.current && !n.current.contains(t.target) && e()
                    }
                    return document.addEventListener("mousedown", t), () => {
                        document.removeEventListener("mousedown", t)
                    }
                }, [n, e]), n
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                l = n.n(i);
            n("233736");
            var u = n("666020");

            function o(t) {
                r.useEffect(() => (l.forEach(t, (t, e) => (0, u.subscribeMembers)(e, t)), () => {
                    l.forEach(t, (t, e) => (0, u.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        651057: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("872717"),
                i = n("913144"),
                l = n("568734"),
                u = n("299285"),
                o = n("49111"),
                a = {
                    async createApplication(t) {
                        let {
                            name: e,
                            guildId: n,
                            type: l,
                            teamId: u
                        } = t, a = await r.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: e,
                                type: l,
                                guild_id: n,
                                team_id: u
                            }
                        }), s = a.body;
                        return null != n && null != l && i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async getApplicationsForGuild(t) {
                        let {
                            includeTeam: e,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await r.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(t),
                            query: {
                                ...n,
                                include_team: e
                            }
                        }), u = l.body;
                        return i.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: u
                        }), u
                    },
                    async transferApplication(t) {
                        let {
                            applicationId: e,
                            teamId: n
                        } = t, l = await r.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(e),
                            body: {
                                team_id: n
                            }
                        }), u = l.body;
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async fetchApplications(t) {
                        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = t;
                        if (!e && (n = t.filter(t => {
                                var e, n;
                                let r = u.default.getApplication(t),
                                    i = (0, l.hasFlag)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    a = i && (null == r ? void 0 : null === (e = r.embeddedActivityConfig) || void 0 === e ? void 0 : e.supported_platforms) == null;
                                return !(null != r && !a) && !u.default.isFetchingApplication(t) && !u.default.didFetchingApplicationFail(t) && t.length > 0
                            })), n.length > 0) {
                            let t;
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                t = await r.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(t => ["application_ids", t])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (t) {
                                throw i.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), t
                            }
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: t.body
                            })
                        }
                    },
                    fetchApplication(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: t
                        }), r.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(t),
                            query: {
                                with_guild: e
                            },
                            oldFormErrors: !0
                        }).then(t => (i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: t.body
                        }), t.body)).catch(e => (i.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: t
                        }), Promise.reject(e)))
                    }
                }
        },
        526887: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("516555"),
                u = n("65597"),
                o = n("206230"),
                a = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                c = i.createContext(s);

            function d(t) {
                let {
                    children: e,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: E
                } = t, _ = (0, l.useConfettiCannon)(n, a), I = (0, u.default)([o.default], () => o.default.useReducedMotion), T = i.useMemo(() => I ? s : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (t, e) => _.createConfetti({
                        ...d,
                        ...t
                    }, e),
                    createConfettiAt: (t, e, n, r) => _.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: t,
                                y: e
                            }
                        },
                        ...n
                    }, r),
                    createMultipleConfetti: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            ...t
                        }, e, n)
                    },
                    createMultipleConfettiAt: function(t, e, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: t,
                                    y: e
                                }
                            },
                            ...n
                        }, r, i)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, d, _, n, I, E]);
                return (0, r.jsx)(c.Provider, {
                    value: T,
                    children: e
                })
            }
        },
        384830: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                u = n("385976"),
                o = n("867805");

            function a(t) {
                let {
                    emojiId: e,
                    emojiName: n
                } = t, r = (0, l.useStateFromStores)([u.default], () => null != e ? u.default.getCustomEmojiById(e) : null);
                if (null != r || null != n) {
                    if (null == e) return i(null != n, "emojiName must be defined if emojiId is not defined"), o.default.convertSurrogateToName(n, !1);
                    else return null == r ? void 0 : r.name
                }
            }
        },
        208548: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("446674"),
                a = n("77078"),
                s = n("430568"),
                c = n("133403"),
                d = n("252744"),
                f = n("86678"),
                E = n("923959"),
                _ = n("882641"),
                I = n("384830"),
                T = n("958706"),
                p = n("782340"),
                S = n("545456");

            function N(t) {
                let {
                    className: e,
                    guildId: n,
                    error: l,
                    emojiId: N,
                    emojiName: h,
                    isRequiredField: C = !0,
                    shouldUpdateBothEmojiFields: v = !1,
                    setEmojiId: A,
                    setEmojiName: R
                } = t, P = (0, I.default)({
                    emojiId: N,
                    emojiName: h
                }), g = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), L = i.createRef(), U = (0, d.default)(L), O = () => {
                    R(void 0), A(void 0)
                }, m = t => (e, n) => {
                    let r = (null == e ? void 0 : e.id) == null;
                    O(), r ? R(null == e ? void 0 : e.optionallyDiverseSequence) : (v && R(null == e ? void 0 : e.name), A(null == e ? void 0 : e.id)), n && t()
                }, D = t => {
                    t.stopPropagation(), O()
                };
                return (0, r.jsx)(a.FormItem, {
                    required: C,
                    title: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: u(e, S.section),
                    error: l,
                    children: (0, r.jsx)(a.Popout, {
                        animation: a.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: t => {
                            let {
                                closePopout: e
                            } = t;
                            return (0, r.jsx)(f.default, {
                                closePopout: e,
                                pickerIntention: T.EmojiIntention.SOUNDBOARD,
                                onNavigateAway: e,
                                onSelectEmoji: m(e),
                                guildId: n,
                                channel: g
                            })
                        },
                        children: (t, e) => {
                            let {
                                isShown: n
                            } = e;
                            return (0, r.jsxs)("div", {
                                ...t,
                                className: S.emojiInput,
                                ref: L,
                                children: [(0, r.jsx)(_.default, {
                                    className: S.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != N || null != h ? () => (0, r.jsx)(s.default, {
                                        emojiName: h,
                                        emojiId: N
                                    }) : null
                                }), (0, r.jsx)(a.TextInput, {
                                    inputClassName: S.emojiText,
                                    placeholder: p.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != P ? ":".concat(P, ":") : "",
                                    readOnly: !0
                                }), U && null != P && (0, r.jsx)(c.default, {
                                    ...t,
                                    onClick: D,
                                    className: S.removeButton
                                })]
                            })
                        }
                    })
                })
            }
        },
        104945: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                a = n("371642"),
                s = n("775980");

            function c(t) {
                let {
                    filename: e,
                    className: n,
                    filters: l,
                    buttonText: c,
                    placeholder: d,
                    onFileSelect: f
                } = t, E = i.useRef(null);
                return (0, r.jsxs)("div", {
                    className: u(n, s.fileUpload),
                    children: [(0, r.jsx)("input", {
                        className: s.fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: d,
                        type: "text",
                        value: e
                    }), (0, r.jsxs)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: s.fileUploadButton,
                        children: [c, (0, r.jsx)(a.default, {
                            ref: E,
                            tabIndex: -1,
                            onChange: t => {
                                var e;
                                let n = null === (e = t.currentTarget.files) || void 0 === e ? void 0 : e[0];
                                f(n)
                            },
                            multiple: !1,
                            filters: l
                        })]
                    })]
                })
            }
        },
        390236: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var l = i
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                l = n("315102"),
                u = n("773336"),
                o = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
                E = (t, e) => {
                    let {
                        id: n,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let u = l.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(r, ".").concat(u, "?").concat(d).concat(f) : "".concat(s).concat(o.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                _ = t => t.startsWith(a) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                I = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return h
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return v
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                l = n("54239"),
                u = n("49111");
            async function o(t, e) {
                let {
                    nick: n,
                    avatar: l
                } = e;
                if (null == t) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await r.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function a(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function s(t, e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function E(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function _(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function I(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function T(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function p(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function S() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let r, i, l, u, o, a, s, c, d;
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var f = n("446674"),
                E = n("913144"),
                _ = n("49111");
            let I = _.FormStates.CLOSED,
                T = {},
                p = !1;

            function S() {
                I = _.FormStates.CLOSED, T = {}, s = null, c = void 0, d = []
            }

            function N() {
                h(), C(), T = {}, I = _.FormStates.OPEN
            }

            function h() {
                r = void 0, o = void 0
            }

            function C() {
                i = void 0, l = void 0, u = void 0, a = void 0
            }
            class v extends f.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== r || void 0 !== i || void 0 !== l || void 0 !== u || void 0 !== o || void 0 !== a
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return i
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: i,
                        pendingBio: l,
                        pendingPronouns: u,
                        pendingNickname: o,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return p
                }
            }
            v.displayName = "GuildIdentitySettingsStore";
            var A = new v(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    s = t.guild, I = _.FormStates.OPEN, T = {}, c = t.source, d = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    s = t.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = _.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (I !== _.FormStates.SUBMITTING) return !1;
                    I = _.FormStates.OPEN, T = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    I = _.FormStates.OPEN, T = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    p = e
                }
            })
        },
        597517: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var r = n("913144"),
                i = n("599110"),
                l = n("49111");

            function u(t) {
                i.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: t
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: t
                    })
                })
            }

            function o(t, e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: t,
                    enabled: e
                })
            }

            function a(t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: t
                })
            }
        },
        269596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                l = n("197881"),
                u = n("492397");
            let o = new Set,
                a = {};
            class s extends r.default.PersistedStore {
                initialize(t) {
                    null != t && (Array.isArray(t.hiddenHotspots) && (o = new Set(t.hiddenHotspots)), null != t.hotspotOverrides && (a = t.hotspotOverrides))
                }
                hasHotspot(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && a[t];
                    return !(u.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !o.has(t))
                }
                hasHiddenHotspot(t) {
                    return o.has(t)
                }
                getHotspotOverride(t) {
                    return a[t]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: a
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [t => ({
                hiddenHotspots: null != t ? t : [],
                hotspotOverrides: {}
            })];
            var c = new s(i.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        hiddenHotspots: e
                    } = t;
                    o = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    let {
                        location: e
                    } = t;
                    if (o.has(e)) return !1;
                    o.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    let {
                        location: e,
                        enabled: n
                    } = t;
                    a[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    let {
                        location: e
                    } = t;
                    if (null == a[e]) return !1;
                    delete a[e]
                }
            })
        },
        139321: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var r = n("533613");
            n.es(r, e);
            var i = n("597517");
            n.es(i, e);
            var l = n("269596")
        },
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("748820"),
                l = n("77078"),
                u = n("112679"),
                o = n("55689"),
                a = n("855133"),
                s = n("599110"),
                c = n("659500"),
                d = n("49111"),
                f = n("646718");

            function E(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: I,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: p,
                    analyticsObject: S,
                    analyticsLocation: N,
                    analyticsSourceLocation: h,
                    isGift: C = !1,
                    giftMessage: v,
                    subscriptionTier: A,
                    trialId: R,
                    postSuccessGuild: P,
                    openInvoiceId: g,
                    applicationId: L,
                    referralTrialOfferId: U,
                    giftRecipient: O,
                    returnRef: m
                } = null != t ? t : {}, D = !1, y = (0, i.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: i,
                            ...l
                        } = n;
                        return (0, r.jsx)(t, {
                            ...l,
                            loadId: y,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: C,
                            giftMessage: v,
                            giftRecipient: O,
                            initialPlanId: e,
                            followupSKUInfo: E,
                            onClose: t => {
                                i(), null == _ || _(t), t && (null == T || T())
                            },
                            onComplete: () => {
                                D = !0, null == I || I(), !C && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: p,
                            analyticsObject: S,
                            analyticsLocation: N,
                            analyticsSourceLocation: h,
                            trialId: R,
                            postSuccessGuild: P,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: g,
                            applicationId: L,
                            referralTrialOfferId: U,
                            returnRef: m
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && s.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : S,
                            source: h,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != R,
                            application_id: L,
                            location_stack: p
                        }), (0, u.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == _ || _(D), D && (!C && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                togglePersistentHelper: function() {
                    return i
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return u
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var r = n("913144");
            let i = () => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    r.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                u = () => {
                    r.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = t => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: t
                    })
                },
                a = t => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: t
                    })
                },
                s = t => {
                    r.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: t
                    })
                }
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
                },
                setNewPendingProfileEffectID: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return I
                }
            }), n("424973");
            var r = n("884691"),
                i = n("152584"),
                l = n("234251"),
                u = n("783142"),
                o = n("26989");

            function a(t) {
                return r.useMemo(() => {
                    let e = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in e) {
                        var r;
                        let l = e[i],
                            u = null === (r = l[t]) || void 0 === r ? void 0 : r.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(i))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function s(t, e) {
                (0, u.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, i.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, l.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(t)
            }

            function f(t, e) {
                if (t === e) {
                    (0, i.setPendingProfileEffectID)(void 0);
                    return
                }(0, i.setPendingProfileEffectID)(t)
            }

            function E(t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: r ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: r
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function _(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function I(t, e) {
                return void 0 === t ? null != e : null != t
            }
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function s(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = t, {
                    analyticsLocations: f
                } = (0, l.default)(), E = (0, r.useCallback)(() => {
                    null != e && (0, u.initGuildIdentitySettings)(e, null != c ? c : f), i.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [e, n, s, c, d, f]);
                return E
            }
        },
        783142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return N
                },
                setPendingThemeColors: function() {
                    return h
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return v
                },
                setTryItOutProfileEffect: function() {
                    return A
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return P
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("448993"),
                u = n("884351"),
                o = n("845579"),
                a = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function f(t) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(t, e) {
                var n, s;
                let d = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != t.bio && f && (t.bio = u.default.parse(void 0, t.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await r.default.patch({
                        url: null != e ? c.Endpoints.GUILD_PROFILE(e, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: t,
                            ...n.body
                        })
                    } else {
                        let t = new l.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new l.APIError(e);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function _() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function p(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function S(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function N(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function h(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function C(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function v(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function A(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID",
                    profileEffectID: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT)
            }

            function R(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function P(t) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        882641: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("301165"),
                a = n("77078"),
                s = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                E = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var I = function(t) {
                let {
                    tabIndex: e,
                    className: n,
                    renderButtonContents: l,
                    active: I,
                    onClick: T,
                    "aria-controls": p,
                    focusProps: S
                } = t, [N, h] = i.useState(!1), [C, v] = i.useState(0), A = N || I, R = (0, c.getClass)(E, "emojiButton", A ? "Hovered" : "Normal"), P = function(t) {
                    let e = -t % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(t / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(e, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(C), g = i.useCallback(() => {
                    if (A) return;
                    let t = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    h(!0), v(t), s.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [A, h, v]), L = i.useCallback(() => {
                    h(!1)
                }, [h]), U = i.useCallback(() => {
                    s.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: e,
                    className: u(R, n),
                    onMouseEnter: g,
                    onMouseOver: g,
                    onMouseLeave: L,
                    onFocus: U,
                    onClick: T,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": p,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != l ? l() : (0, r.jsx)(o.Spring, {
                        config: _,
                        to: {
                            value: A ? 1 : 0
                        },
                        children: t => {
                            let {
                                value: e
                            } = t;
                            return (0, r.jsx)(o.animated.div, {
                                className: E.sprite,
                                style: {
                                    ...P,
                                    transform: e.to([0, 1], [1, 1.14]).to(t => "scale(".concat(t, ")")),
                                    filter: e.to(t => "grayscale(".concat(100 - 100 * t, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        931138: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("77078"),
                a = n("760607"),
                s = n("89976");

            function c(t) {
                let {
                    children: e,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = t, f = i.Children.only(e), E = (0, o.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: u(s.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(a.default, {
                        ...d,
                        className: u(c, s.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: u(s.childContainer, {
                            [s.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("77078"),
                u = n("393414"),
                o = n("49111"),
                a = i.forwardRef(function(t, e) {
                    let {
                        href: n,
                        children: a,
                        onClick: s,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = t, E = i.useCallback(t => {
                        !t.repeat && ((t.charCode === o.KeyboardKeys.SPACE || t.charCode === o.KeyboardKeys.ENTER) && (t.preventDefault(), null != n && (0, u.transitionTo)(n), null == s || s()), null == c || c(t))
                    }, [n, c, s]), _ = i.useCallback(t => {
                        !t.metaKey && !t.shiftKey && 0 === t.button && (t.preventDefault(), t.stopPropagation(), null != n && (0, u.transitionTo)(n), null == s || s())
                    }, [n, s]), I = (0, r.jsx)("a", {
                        ref: e,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: a
                    });
                    return (0, r.jsx)(l.FocusRing, {
                        ...d,
                        children: I
                    })
                })
        },
        191814: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");

            function i(t) {
                let {
                    size: e,
                    horizontal: n = !1
                } = t, i = n ? e : 1, l = n ? 1 : e;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: i,
                        minWidth: i,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        109264: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("733154"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("505088"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...a
                    } = t;
                    return (0, r.jsxs)("svg", {
                        ...(0, u.default)(a),
                        width: e,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, r.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: u,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: u,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("197801"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return 16 === e || 16 === n ? (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        987772: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("504318"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: i
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
                })
        },
        351825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("31745"),
                u = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: l,
                        foreground: u
                    } = t;
                    return (0, r.jsx)("svg", {
                        className: l,
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        368121: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("390300"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("287083"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        811305: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("627445"),
                a = n.n(o),
                s = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                E = n("697218"),
                _ = n("368121"),
                I = n("523096"),
                T = n("587974"),
                p = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function N(t, e) {
                let n = t instanceof f.default ? t : null != t ? t.user : null;
                return null != n ? n.id : "user-".concat(e)
            }
            class h extends i.PureComponent {
                renderUsers() {
                    let {
                        users: t,
                        max: e,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: l
                    } = this.props, u = [], o = t.length === e ? t.length : e - 1, a = this.renderMoreUsers(o), s = 0;
                    for (; s < o && s < t.length;) {
                        var c;
                        let e = null == a && null == l && s === t.length - 1,
                            o = n(t[s], e, s);
                        u.push(e ? (0, r.jsx)("div", {
                            className: p.avatarContainer,
                            children: o
                        }, N(null !== (c = t[s]) && void 0 !== c ? c : null, s)) : (0, r.jsx)(T.default, {
                            className: p.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: T.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: o
                        }, N(t[s], s))), s++
                    }
                    return null != l ? u.push(l) : null != a && u.push(a), u
                }
                renderMoreUsers(t) {
                    let {
                        max: e,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: u,
                        users: o
                    } = this.props, a = Math.min(t, o.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= e) return (0, r.jsx)(i.Fragment, {
                                children: u("".concat(e, "+"), e)
                            }, "more-users");
                            if (n > o.length) {
                                let t = n - o.length;
                                return (0, r.jsx)(i.Fragment, {
                                    children: u("+".concat(t), t)
                                }, "more-users")
                            }
                        } else if (a < o.length) {
                            let t = Math.min(o.length - a, 99);
                            return (0, r.jsx)(i.Fragment, {
                                children: u("+".concat(t), t)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(_.default, {
                        foreground: p.foreground,
                        className: p.icon
                    }) : null
                }
                render() {
                    let {
                        className: t,
                        size: e,
                        users: n,
                        guildId: i,
                        showUserPopout: l,
                        useFallbackUserForPopout: o
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(t => null != t && t.id === f), I = o && null == E.default.getUser(f);
                    return (0, r.jsx)(s.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: t => (a(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: I && null != _ ? _ : void 0,
                            ...t,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: u(t, p.container, function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (t) {
                                    case S.SIZE_16:
                                        return p.size16;
                                    case S.SIZE_24:
                                        return p.size24;
                                    case S.SIZE_32:
                                        return p.size32;
                                    case S.SIZE_56:
                                        return p.size56;
                                    default:
                                        return p.size24
                                }
                            }(e)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        popoutUserId: null
                    }, this._ref = i.createRef(), this.defaultRenderUser = (t, e, n) => {
                        let {
                            showUserPopout: i,
                            guildId: l,
                            size: u
                        } = this.props;
                        if (null == t) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: p.emptyUser
                            });
                            {
                                let t = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
                                    e = I.default.DEFAULT_AVATARS[t];
                                return (0, r.jsx)("img", {
                                    src: e,
                                    alt: "",
                                    className: p.avatar
                                })
                            }
                        }
                        let o = (0, r.jsx)("img", {
                            src: t.getAvatarURL(l, u),
                            alt: t.username,
                            className: p.avatar
                        }, t.id);
                        return i ? (0, r.jsx)(s.Clickable, {
                            className: p.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != t && this.setState({
                                    popoutUserId: t.id
                                })
                            },
                            tabIndex: -1,
                            children: o
                        }, t.id) : o
                    }
                }
            }
            h.defaultProps = {
                max: 10,
                renderMoreUsers: function(t) {
                    return (0, r.jsx)("div", {
                        className: p.moreUsers,
                        children: t
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var C = h
        }
    }
]);