(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29062"], {
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
                    return u
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("696605");

            function u(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function o(t, e) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function a(t, e, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function l(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: i,
                    height: u,
                    rowHeight: o
                } = t;

                function l(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / o)) + e)
                }
                let s = [];

                function c(t) {
                    let e = t + (r.MINIMUM_RANGE - 1);
                    return s.push([t, e]), e + 1
                }
                let d = l(.5 * u),
                    E = l(i, -d),
                    _ = l(i + u, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = c(E);
                a(e, n, s)
            }
        },
        112679: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return u
                },
                clearCardInfo: function() {
                    return o
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: t
                })
            }

            function u(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function o() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(t, e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: t,
                    isValid: e
                })
            }

            function l() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return I
                },
                disableAccount: function() {
                    return S
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return P
                },
                requestHarvest: function() {
                    return m
                },
                setPendingAvatar: function() {
                    return A
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectID: function() {
                    return U
                },
                clearErrors: function() {
                    return D
                },
                resetPendingAccountChanges: function() {
                    return O
                },
                resetAllPending: function() {
                    return v
                },
                resetAndCloseUserProfileForm: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return M
                }
            });
            var i = n("872717"),
                r = n("95410"),
                u = n("819855"),
                o = n("913144"),
                a = n("393414"),
                l = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function T() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function S(t, e) {
                let n = e ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = e ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(e => i.default.post({
                    url: r,
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
                    d.default.logoutInternal(), (0, a.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(t) {
                let e = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: t
                    }),
                    n = e.body;
                if (n.token) {
                    let e = n.token;
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: e,
                        userId: n.id
                    }), (null == t ? void 0 : t.password) != null && (null == t ? void 0 : t.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), e
            }

            function N(t) {
                let {
                    username: e,
                    discriminator: n,
                    email: i,
                    emailToken: u,
                    password: a,
                    avatar: d,
                    avatarDecoration: T,
                    newPassword: I,
                    globalName: S
                } = t;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(t => {
                    let o = {
                        username: e,
                        email: i,
                        email_token: u,
                        password: a,
                        avatar: d,
                        discriminator: n,
                        global_name: S,
                        new_password: I,
                        ...t
                    };
                    null === T && (o.avatar_decoration_id = null), null != T && (o.avatar_decoration_id = T.id, o.avatar_decoration_sku_id = T.skuId);
                    let l = r.default.get(E.DEVICE_TOKEN),
                        s = (0, _.getDevicePushProvider)();
                    null != s && null != l && (o.push_provider = s, o.push_token = l);
                    let c = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != c && (o.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = c), p(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(t => {
                    let e = t.body;
                    return l.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(e.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), t
                }, t => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: t.body
                }), t))
            }

            function P() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function m() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A(t) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: t
                }), null == t ? u.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(t) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: t
                })
            }

            function R(t) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: t
                })
            }

            function U(t) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: t
                })
            }

            function D() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function v() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function M(t) {
                o.default.dispatch({
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
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                u = n.n(r),
                o = n("77078"),
                a = n("782340"),
                l = n("239636");
            let s = Object.freeze({
                DEFAULT: l.default,
                FILLED: l.filled
            });

            function c(t) {
                let {
                    className: e,
                    onClick: n,
                    "aria-label": r,
                    look: c = s.DEFAULT
                } = t;
                return (0, i.jsx)(o.Clickable, {
                    "aria-label": null != r ? r : a.default.Messages.REMOVE,
                    className: u(l.button, c, e),
                    onClick: n
                })
            }
            c.Looks = s
        },
        206625: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(t, e) {
                let n = i.useRef(t);
                return i.useEffect(() => {
                    function t(t) {
                        null != n.current && !n.current.contains(t.target) && e()
                    }
                    return document.addEventListener("mousedown", t), () => {
                        document.removeEventListener("mousedown", t)
                    }
                }, [n, e]), n
            }
        },
        689988: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.subscribe(e, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((t, e) => {
                        e.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                u = n.n(r);
            n("233736");
            var o = n("666020");

            function a(t) {
                i.useEffect(() => (u.forEach(t, (t, e) => (0, o.subscribeMembers)(e, t)), () => {
                    u.forEach(t, (t, e) => (0, o.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        20606: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
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
            var i = n("37983"),
                r = n("884691"),
                u = n("516555"),
                o = n("65597"),
                a = n("206230"),
                l = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => l.NOOP,
                    removeClickListener: l.NOOP
                },
                c = r.createContext(s);

            function d(t) {
                let {
                    children: e,
                    confettiCanvas: n,
                    spriteCanvas: l,
                    baseConfig: d,
                    addClickListener: E,
                    removeClickListener: _
                } = t, f = (0, u.useConfettiCannon)(n, l), T = (0, o.default)([a.default], () => a.default.useReducedMotion), I = r.useMemo(() => T ? s : {
                    confettiCanvas: n,
                    cannon: f,
                    createConfetti: (t, e) => f.createConfetti({
                        ...d,
                        ...t
                    }, e),
                    createConfettiAt: (t, e, n, i) => f.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: t,
                                y: e
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            ...t
                        }, e, n)
                    },
                    createMultipleConfettiAt: function(t, e, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return f.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: t,
                                    y: e
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, d, f, n, T, _]);
                return (0, i.jsx)(c.Provider, {
                    value: I,
                    children: e
                })
            }
        },
        384830: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("627445"),
                r = n.n(i),
                u = n("446674"),
                o = n("385976"),
                a = n("867805");

            function l(t) {
                let {
                    emojiId: e,
                    emojiName: n
                } = t, i = (0, u.useStateFromStores)([o.default], () => null != e ? o.default.getCustomEmojiById(e) : null);
                if (null != i || null != n) {
                    if (null == e) return r(null != n, "emojiName must be defined if emojiId is not defined"), a.default.convertSurrogateToName(n, !1);
                    else return null == i ? void 0 : i.name
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
            var i = n("37983"),
                r = n("884691"),
                u = n("414456"),
                o = n.n(u),
                a = n("446674"),
                l = n("77078"),
                s = n("430568"),
                c = n("133403"),
                d = n("252744"),
                E = n("86678"),
                _ = n("923959"),
                f = n("882641"),
                T = n("384830"),
                I = n("958706"),
                S = n("782340"),
                p = n("545456");

            function N(t) {
                let {
                    className: e,
                    guildId: n,
                    error: u,
                    emojiId: N,
                    emojiName: P,
                    isRequiredField: m = !0,
                    shouldUpdateBothEmojiFields: A = !1,
                    setEmojiId: C,
                    setEmojiName: R
                } = t, U = (0, T.default)({
                    emojiId: N,
                    emojiName: P
                }), D = (0, a.useStateFromStores)([_.default], () => null != n ? _.default.getDefaultChannel(n) : null), O = r.createRef(), v = (0, d.default)(O), h = t => (e, n) => {
                    let i = (null == e ? void 0 : e.id) == null;
                    i ? R(null == e ? void 0 : e.optionallyDiverseSequence) : (A && R(null == e ? void 0 : e.name), C(null == e ? void 0 : e.id)), n && t()
                }, M = t => {
                    t.stopPropagation(), R(void 0), C(void 0)
                };
                return (0, i.jsx)(l.FormItem, {
                    required: m,
                    title: S.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
                    className: o(e, p.section),
                    error: u,
                    children: (0, i.jsx)(l.Popout, {
                        animation: l.Popout.Animation.NONE,
                        position: "top",
                        renderPopout: t => {
                            let {
                                closePopout: e
                            } = t;
                            return (0, i.jsx)(E.default, {
                                closePopout: e,
                                pickerIntention: I.EmojiIntention.SOUNDBOARD,
                                onNavigateAway: e,
                                onSelectEmoji: h(e),
                                guildId: n,
                                channel: D
                            })
                        },
                        children: (t, e) => {
                            let {
                                isShown: n
                            } = e;
                            return (0, i.jsxs)("div", {
                                ...t,
                                className: p.emojiInput,
                                ref: O,
                                children: [(0, i.jsx)(f.default, {
                                    className: p.emojiButton,
                                    active: n,
                                    tabIndex: 0,
                                    renderButtonContents: null != N || null != P ? () => (0, i.jsx)(s.default, {
                                        emojiName: P,
                                        emojiId: N
                                    }) : null
                                }), (0, i.jsx)(l.TextInput, {
                                    inputClassName: p.emojiText,
                                    placeholder: S.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                                    value: null != U ? ":".concat(U, ":") : "",
                                    readOnly: !0
                                }), v && null != U && (0, i.jsx)(c.default, {
                                    ...t,
                                    onClick: M,
                                    className: p.removeButton
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
            var i = n("37983"),
                r = n("884691"),
                u = n("414456"),
                o = n.n(u),
                a = n("77078"),
                l = n("371642"),
                s = n("775980");

            function c(t) {
                let {
                    filename: e,
                    className: n,
                    filters: u,
                    buttonText: c,
                    placeholder: d,
                    onFileSelect: E
                } = t, _ = r.useRef(null);
                return (0, i.jsxs)("div", {
                    className: o(n, s.fileUpload),
                    children: [(0, i.jsx)("input", {
                        className: s.fileUploadInput,
                        tabIndex: -1,
                        readOnly: !0,
                        placeholder: d,
                        type: "text",
                        value: e
                    }), (0, i.jsxs)(a.Button, {
                        size: a.Button.Sizes.MIN,
                        className: s.fileUploadButton,
                        children: [c, (0, i.jsx)(l.default, {
                            ref: _,
                            tabIndex: -1,
                            onChange: t => {
                                var e;
                                let n = null === (e = t.currentTarget.files) || void 0 === e ? void 0 : e[0];
                                E(n)
                            },
                            multiple: !1,
                            filters: u
                        })]
                    })]
                })
            }
        },
        390236: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var u = r
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return T
                }
            });
            var i = n("867805"),
                r = n("407063"),
                u = n("315102"),
                o = n("773336"),
                a = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, o.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()))),
                _ = (t, e) => {
                    let {
                        id: n,
                        icon: i
                    } = t;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let o = u.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != e && (d = "size=" + (0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(d).concat(E) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                f = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                T = (t, e) => {
                    var n;
                    let i = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || t.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return l
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
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return p
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return P
                },
                clearErrors: function() {
                    return m
                },
                setDisableSubmit: function() {
                    return A
                }
            });
            var i = n("872717"),
                r = n("913144"),
                u = n("54239"),
                o = n("49111");
            async function a(t, e) {
                let {
                    nick: n,
                    avatar: u
                } = e;
                if (null == t) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function l(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function s(t, e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function _(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function f(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function T(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function P() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function m() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let i, r, u, o, a, l, s, c, d;
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                f = n("49111");
            let T = f.FormStates.CLOSED,
                I = {},
                S = !1;

            function p() {
                T = f.FormStates.CLOSED, I = {}, s = null, c = void 0, d = []
            }

            function N() {
                P(), m(), I = {}, T = f.FormStates.OPEN
            }

            function P() {
                i = void 0, a = void 0
            }

            function m() {
                r = void 0, u = void 0, o = void 0, l = void 0
            }
            class A extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== o || void 0 !== a || void 0 !== l
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return l
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: u,
                        pendingPronouns: o,
                        pendingNickname: a,
                        pendingThemeColors: l
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
                    return S
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var C = new A(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    s = t.guild, T = f.FormStates.OPEN, I = {}, c = t.source, d = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: p,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), p()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    s = t.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = f.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (T !== f.FormStates.SUBMITTING) return !1;
                    T = f.FormStates.OPEN, I = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    T = f.FormStates.OPEN, I = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: P,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: m,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    S = e
                }
            })
        },
        597517: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("599110"),
                u = n("49111");

            function o(t) {
                r.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: t
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: t
                    })
                })
            }

            function a(t, e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: t,
                    enabled: e
                })
            }

            function l(t) {
                i.default.dispatch({
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
            });
            var i = n("446674"),
                r = n("913144"),
                u = n("197881"),
                o = n("492397");
            let a = new Set,
                l = {};
            class s extends i.default.PersistedStore {
                initialize(t) {
                    null != t && (Array.isArray(t.hiddenHotspots) && (a = new Set(t.hiddenHotspots)), null != t.hotspotOverrides && (l = t.hotspotOverrides))
                }
                hasHotspot(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && l[t];
                    return !(o.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(t))
                }
                hasHiddenHotspot(t) {
                    return a.has(t)
                }
                getHotspotOverride(t) {
                    return l[t]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: l
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [t => ({
                hiddenHotspots: null != t ? t : [],
                hotspotOverrides: {}
            })];
            var c = new s(r.default, {
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        hiddenHotspots: e
                    } = t;
                    a = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    let {
                        location: e
                    } = t;
                    if (a.has(e)) return !1;
                    a.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    let {
                        location: e,
                        enabled: n
                    } = t;
                    l[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    let {
                        location: e
                    } = t;
                    if (null == l[e]) return !1;
                    delete l[e]
                }
            })
        },
        139321: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HotspotStore: function() {
                    return u.default
                }
            });
            var i = n("533613");
            n.es(i, e);
            var r = n("597517");
            n.es(r, e);
            var u = n("269596")
        },
        649844: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                u = n("77078"),
                o = n("112679"),
                a = n("55689"),
                l = n("855133"),
                s = n("599110"),
                c = n("659500"),
                d = n("49111"),
                E = n("646718");

            function _(t) {
                let {
                    initialPlanId: e,
                    followupSKUInfo: _,
                    onClose: f,
                    onComplete: T,
                    onSubscriptionConfirmation: I,
                    analyticsLocations: S,
                    analyticsObject: p,
                    analyticsLocation: N,
                    analyticsSourceLocation: P,
                    isGift: m = !1,
                    giftMessage: A,
                    subscriptionTier: C,
                    trialId: R,
                    postSuccessGuild: U,
                    openInvoiceId: D,
                    applicationId: O,
                    referralTrialOfferId: v,
                    giftRecipient: h,
                    returnRef: M
                } = null != t ? t : {}, g = !1, G = (0, r.v4)();
                (0, u.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...u
                        } = n;
                        return (0, i.jsx)(t, {
                            ...u,
                            loadId: G,
                            subscriptionTier: C,
                            skuId: C,
                            isGift: m,
                            giftMessage: A,
                            giftRecipient: h,
                            initialPlanId: e,
                            followupSKUInfo: _,
                            onClose: t => {
                                r(), null == f || f(t), t && (null == I || I())
                            },
                            onComplete: () => {
                                g = !0, null == T || T(), !m && ((0, l.setIsPersistentHelperHidden)(!0), (0, l.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: I,
                            analyticsLocations: S,
                            analyticsObject: p,
                            analyticsLocation: N,
                            analyticsSourceLocation: P,
                            trialId: R,
                            postSuccessGuild: U,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: D,
                            applicationId: O,
                            referralTrialOfferId: v,
                            returnRef: M
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !g && s.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : p,
                            source: P,
                            subscription_type: d.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != R,
                            application_id: O,
                            location_stack: S
                        }), (0, o.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == f || f(g), g && (!m && c.ComponentDispatch.dispatch(d.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == I || I())
                    },
                    onCloseRequest: d.NOOP
                })
            }
        },
        855133: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return u
                },
                resetPremiumTutorialStore: function() {
                    return o
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return l
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                u = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: t
                    })
                },
                l = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: t
                    })
                },
                s = t => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: t
                    })
                }
        },
        824986: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                PremiumTutorialTooltips: function() {
                    return u
                },
                default: function() {
                    return T
                }
            });
            var i, r, u, o = n("446674"),
                a = n("913144"),
                l = n("521012"),
                s = n("565785"),
                c = n("646718");
            (i = u || (u = {})).FILE_UPLOAD = "file_upload", i.STICKER_PICKER = "sticker_picker", i.EMOJI_PICKER = "emoji_picker", i.BOOSTING_FLOW = "boosting_flow";
            let d = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function E() {
                d = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function _() {
                let t = new Date;
                t.setDate(t.getDate() + 14), d.tutorialExpirationTime = t.getTime()
            }
            class f extends o.default.PersistedStore {
                initialize(t) {
                    null != t && (d = t), d.isPersistentHelperHidden = !1, d.canPlayWowMoment = !1, d.isFetchingWowMomentMedia = !1, d.wowMomentWumpusMediaUrl = null, d.wowMomentHelperMediaUrl = null
                }
                getState() {
                    return d
                }
                get isPersistentCoachmarkCollapsed() {
                    return d.isPersistentCoachmarkCollapsed
                }
                hasFlowStartEventBeenEmitted(t) {
                    return null == d.hasFlowStartEventBeenEmitted[t] && (d.hasFlowStartEventBeenEmitted[t] = !1), d.hasFlowStartEventBeenEmitted[t]
                }
                get canPlayWowMoment() {
                    return d.canPlayWowMoment
                }
                get isPersistentHelperHidden() {
                    return d.isPersistentHelperHidden
                }
                get isFetchingWowMomentMedia() {
                    return d.isFetchingWowMomentMedia
                }
                get wowMomentWumpusMedia() {
                    return d.wowMomentWumpusMediaUrl
                }
                get wowMomentHelperMedia() {
                    return d.wowMomentHelperMediaUrl
                }
                get navigatedFromHelper() {
                    return d.navigatedFromHelper
                }
                get tutorialExpirationTime() {
                    return d.tutorialExpirationTime
                }
            }
            f.displayName = "PremiumTutorialStore", f.persistKey = "PremiumTutorialStore", f.migrations = [t => ({
                ...t,
                hasFlowStartEventBeenEmitted: null !== (r = t.hasFlowStartEventBeenEmitted) && void 0 !== r ? r : {}
            })];
            var T = new f(a.default, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    d.isPersistentCoachmarkCollapsed = !d.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(t) {
                    let {
                        event: e,
                        value: n
                    } = t;
                    d.hasFlowStartEventBeenEmitted[e] = n
                },
                LOGOUT: function() {
                    E()
                },
                RESET_PREMIUM_TUTORIAL_STORE: E,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(t) {
                    let {
                        value: e
                    } = t;
                    d.canPlayWowMoment = e
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(t) {
                    let {
                        value: e
                    } = t;
                    d.isPersistentHelperHidden = e
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(t) {
                    let {
                        value: e
                    } = t;
                    d.isFetchingWowMomentMedia = e
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(t) {
                    let {
                        wumpusMedia: e,
                        helperMedia: n
                    } = t;
                    d.wowMomentWumpusMediaUrl = e, d.wowMomentHelperMediaUrl = n, d.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(t) {
                    let {
                        value: e
                    } = t;
                    d.navigatedFromHelper = e
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(t) {
                    let {
                        subscription: e
                    } = t, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && null != e.items.find(t => c.PREMIUM_TIER_2_PLANS.has(t.plan_id)) && _()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(t) {
                    let {
                        entitlement: e
                    } = t, {
                        enabled: n
                    } = s.default.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    });
                    n && (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && null == l.default.getPremiumSubscription(!1) && null == d.tutorialExpirationTime && _()
                }
            })
        },
        694768: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var u = r
        },
        565785: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var u = r
        },
        921228: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsPremiumTutorialEnabled: function() {
                    return N
                },
                isPremiumTutorialEnabled: function() {
                    return A
                },
                useAllDismissedPremiumTutorialSteps: function() {
                    return U
                }
            });
            var i = n("884691"),
                r = n("446674"),
                u = n("151426"),
                o = n("850068"),
                a = n("10641"),
                l = n("374363"),
                s = n("697218"),
                c = n("521012"),
                d = n("719923"),
                E = n("324878"),
                _ = n("824986"),
                f = n("694768"),
                T = n("565785"),
                I = n("646718");
            let S = () => {
                    let t = (0, r.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
                        e = (0, a.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(t) && !e
                },
                p = () => {
                    let t = (0, E.useHasActiveTrial)(),
                        e = (0, a.useIsDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                        l = (0, d.isPremiumExactly)(n, I.PremiumTypes.TIER_2),
                        _ = (0, r.useStateFromStores)([c.default], () => c.default.hasFetchedPreviousPremiumTypeSubscription()),
                        f = (0, r.useStateFromStores)([c.default], () => c.default.getPreviousPremiumTypeSubscription()),
                        T = !t && l;
                    i.useEffect(() => {
                        T && !_ && !e && (0, o.fetchMostRecentSubscription)()
                    }, [T, _, e]);
                    let S = T && _ && null == f;
                    return S && !e
                };

            function N(t) {
                var e;
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = S() && n,
                    {
                        enabled: u
                    } = f.default.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: i,
                        disable: !i
                    }),
                    o = (0, r.useStateFromStores)([_.default], () => _.default.tutorialExpirationTime),
                    a = new Date().getTime(),
                    l = (0, r.useStateFromStores)([c.default], () => {
                        var t, n;
                        return null !== (e = null === (n = c.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (t = n.createdAt) || void 0 === t ? void 0 : t.getTime()) && void 0 !== e ? e : 0
                    }),
                    s = p() && n,
                    d = T.default.useExperiment({
                        location: t
                    }, {
                        autoTrackExposure: s && a - l < 18e5,
                        disable: !s
                    }).enabled && null != o && o > a;
                return u || d
            }
            let P = () => {
                    let t = c.default.getPremiumTypeSubscription(),
                        e = (0, a.isDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, E.isEligibleTrialSub)(t) && !e
                },
                m = () => {
                    let t = (0, E.hasActiveTrial)(),
                        e = (0, a.isDismissibleContentDismissed)(u.DismissibleContent.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = s.default.getCurrentUser(),
                        i = (0, d.isPremiumExactly)(n, I.PremiumTypes.TIER_2),
                        r = c.default.hasFetchedPreviousPremiumTypeSubscription(),
                        l = c.default.getPreviousPremiumTypeSubscription();
                    return !r && i && !e && (0, o.fetchMostRecentSubscription)(), !e && !t && i && r && null == l
                },
                A = function(t) {
                    var e, n, i;
                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        u = P() && r,
                        {
                            enabled: o
                        } = f.default.getCurrentConfig({
                            location: t
                        }, {
                            disable: !u,
                            autoTrackExposure: u
                        }),
                        a = new Date().getTime(),
                        l = _.default.tutorialExpirationTime,
                        s = null !== (i = null === (n = c.default.getPremiumSubscription()) || void 0 === n ? void 0 : null === (e = n.createdAt) || void 0 === e ? void 0 : e.getTime()) && void 0 !== i ? i : 0,
                        d = m() && r,
                        E = T.default.getCurrentConfig({
                            location: t
                        }, {
                            disable: !d,
                            autoTrackExposure: d && a - s < 18e5
                        }).enabled && null != l && l > a;
                    return o || E
                },
                C = [];

            function R() {
                return I.PremiumTutorialStepOrder.filter(t => (0, a.isDismissibleContentDismissed)(t))
            }

            function U() {
                return function(t, e) {
                    let n = N("useMemoizedValueSyncedWithDismissibleContents"),
                        u = (0, r.useStateFromStores)([l.default], () => {
                            var t;
                            return null === (t = l.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents
                        });
                    return i.useMemo(() => n ? t() : e, [n, e, t, u])
                }(R, C)
            }
        },
        906932: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useAvatarsWithGuilds: function() {
                    return l
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
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return T
                }
            });
            var i = n("884691"),
                r = n("152584"),
                u = n("234251"),
                o = n("783142"),
                a = n("26989");

            function l(t) {
                return i.useMemo(() => {
                    let e = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in e) {
                        var i;
                        let u = e[r],
                            o = null === (i = u[t]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(r))
                    }
                    return null != n ? Object.entries(n).map(t => t[1][0]) : []
                }, [t])
            }

            function s(t, e) {
                (0, o.setPendingBio)(t === e ? void 0 : t)
            }

            function c(t, e) {
                (0, r.setPendingAvatar)(t === e ? void 0 : t)
            }

            function d(t, e) {
                if ((0, u.isEqualAvatarDecoration)(t, null != e ? e : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(t)
            }

            function E(t, e) {
                if (t === e) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(t)
            }

            function _(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != t) return "" === t ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: t,
                    isUsingGuildValue: i
                };
                return null != e && "" !== e ? {
                    value: e,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function f(t, e) {
                return void 0 === t ? null != e : null != t
            }

            function T(t, e) {
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
            var i = n("884691"),
                r = n("79112"),
                u = n("685665"),
                o = n("929423");
            n("424562");
            var a = n("49111"),
                l = n("397336");

            function s(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = t, {
                    analyticsLocations: E
                } = (0, u.default)(), _ = (0, i.useCallback)(() => {
                    null != e && (0, o.initGuildIdentitySettings)(e, null != c ? c : E), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [e, n, s, c, d, E]);
                return _
            }
        },
        783142: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return N
                },
                setPendingThemeColors: function() {
                    return P
                },
                setTryItOutAvatar: function() {
                    return m
                },
                setTryItOutAvatarDecoration: function() {
                    return A
                },
                setTryItOutBanner: function() {
                    return C
                },
                setTryItOutThemeColors: function() {
                    return R
                }
            });
            var i = n("872717"),
                r = n("913144"),
                u = n("448993"),
                o = n("884351"),
                a = n("845579"),
                l = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function E(t) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: t,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(t, e) {
                var n, s;
                let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let E = a.UseLegacyChatInput.getSetting();
                null != t.bio && E && (t.bio = o.default.parse(void 0, t.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await i.default.patch({
                        url: null != e ? c.Endpoints.GUILD_PROFILE(e, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: t
                    });
                    if (n.ok) {
                        let t = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectID: t,
                            ...n.body
                        })
                    } else {
                        let t = new u.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: t
                        })
                    }
                    return n
                } catch (e) {
                    let t = new u.APIError(e);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: t
                    })
                }
            }

            function f() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function I(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function S(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: t
                })
            }

            function p(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function N(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: t
                })
            }

            function P(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function m(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: t
                }), E(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function A(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: t
                }), E(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: t
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function R(t) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: t
                }), E(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        }
    }
]);