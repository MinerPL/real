(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97584"], {
        489847: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ab3468632852f3725893.png"
        },
        165057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, n) {
            "use strict";
            e.exports = n.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac20c9a7b69e25e9d680.png"
        },
        770704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1616ba0a324e68a4fff7.png"
        },
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        513002: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f328a6f8209d4f1f5022.png"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var r = n("872717"),
                s = n("913144"),
                i = n("843823"),
                a = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return i.default.needsRefresh() ? (s.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), r.default.get({
                    url: a.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    s.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    s.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        749432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                o = n("862337"),
                u = n("77078"),
                d = n("54239"),
                c = n("736964"),
                f = n("777273"),
                p = n("79112"),
                E = n("87657"),
                C = n("210721"),
                I = n("671484"),
                S = n("27618"),
                _ = n("102985"),
                h = n("843823"),
                T = n("697218"),
                m = n("188525"),
                g = n("145131"),
                A = n("953109"),
                O = n("306160"),
                N = n("659632"),
                v = n("719923"),
                x = n("158998"),
                R = n("49111"),
                L = n("646718"),
                F = n("782340"),
                P = n("146948");
            class M extends s.Component {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get iconSKUId() {
                    let {
                        subscriptionPlan: e,
                        sku: t
                    } = this.props;
                    return null != e ? e.skuId : null != t ? t.id : null
                }
                get headerBlurb() {
                    let e;
                    let {
                        subscriptionPlan: t,
                        hasSentMessage: n,
                        giftMessageError: r,
                        giftRecipient: s,
                        selectedGiftStyle: i
                    } = this.props, a = null != i && L.SeasonalGiftStyles2023.includes(i);
                    if (null != r) return F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == t) return F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let l = n || null != s;
                    return (e = t.interval === L.SubscriptionIntervalTypes.MONTH ? l ? a ? F.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : l ? a ? F.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, v.getTierDisplayName)(t.id),
                        intervalCount: t.intervalCount
                    })
                }
                render() {
                    let e, t;
                    let {
                        application: n,
                        selectedGiftStyle: s,
                        hasSentMessage: i,
                        giftRecipient: a,
                        giftMessageError: l,
                        isSendingMessage: o
                    } = this.props, d = (0, N.isCustomGiftEnabled)(a);
                    return e = d || i && null == l ? F.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != l ? F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : F.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, t = o ? (0, r.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != s ? P.headerCustomGifting : P.header,
                            children: e
                        }), i && null != a && null == l || (0, N.isCustomGiftEnabled)(a) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, r.jsxs)(g.default, {
                        direction: g.default.Direction.VERTICAL,
                        align: g.default.Align.CENTER,
                        children: [null != n ? (0, r.jsx)(A.default, {
                            game: n,
                            className: P.icon,
                            size: A.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, t]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: m.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new o.Timeout, this.handleGiftCodeCopy = (e, t) => {
                        let {
                            sku: n
                        } = this.props;
                        null != n && (0, N.trackGiftCodeCopy)(new I.default({
                            code: t,
                            maxUses: 1
                        }), n);
                        try {
                            (0, O.copy)(e), this.setState({
                                copyMode: m.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: m.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: m.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        p.default.open(R.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: t,
                            giftCode: n
                        } = this.props;
                        if (null == n) return null;
                        let {
                            copyMode: s
                        } = this.state;
                        switch (s) {
                            case m.default.Modes.SUCCESS:
                                e = F.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case m.default.Modes.ERROR:
                                e = F.default.Messages.FAILED;
                                break;
                            default:
                                e = F.default.Messages.COPY
                        }
                        return (0, r.jsx)(g.default, {
                            direction: g.default.Direction.VERTICAL,
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.FormTitle, {
                                    children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != n && (0, r.jsx)(m.default, {
                                    hideMessage: t ? F.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, N.getGiftCodeURL)(n),
                                    mode: s,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, n),
                                    supportsCopy: O.SUPPORTS_COPY,
                                    className: P.copyInput,
                                    buttonColor: m.default.ButtonColors.LINK,
                                    buttonLook: m.default.ButtonLooks.LINK
                                }), (0, r.jsx)("div", {
                                    className: P.subtext,
                                    children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                })]
                            })
                        })
                    }, this.renderRequestSendGift = () => {
                        let {
                            giftCode: e,
                            onClose: t,
                            giftMessageError: n
                        } = this.props;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: P.blurb,
                                children: this.headerBlurb
                            }), null == n && (0, r.jsx)(y, {
                                giftCode: e,
                                onClose: t
                            }), (0, r.jsx)("div", {
                                className: P.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(E.default, {
                                user: e,
                                className: P.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, r.jsx)(u.Heading, {
                                className: P.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: x.default.getName(e)
                            }), (0, r.jsxs)("div", {
                                className: P.giftRecipientTag,
                                children: [" ", x.default.getUserTag(e)]
                            }), (0, r.jsx)("div", {
                                className: P.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let y = e => {
                let {
                    giftCode: t,
                    onClose: n
                } = e;
                s.useEffect(() => {
                    c.default.fetchRelationships(), (0, f.fetchUserAffinities)()
                }, []);
                let [i, o] = s.useState(), [p, I] = s.useState(!1), [_, m] = s.useState(!1), {
                    userAffinities: g,
                    isLoading: A
                } = (0, l.useStateFromStoresObject)([h.default], () => ({
                    userAffinities: h.default.getUserAffinitiesUserIds(),
                    isLoading: h.default.getFetching()
                })), O = Array.from(g.values()), N = (0, l.useStateFromStores)([S.default], () => S.default.getFriendIDs()), v = a.difference(N, O), R = [...O, ...v], L = (0, l.useStateFromStores)([T.default], () => T.default.filter(e => R.includes(e.id) && !e.bot), [R]), M = null == L || 0 === L.length;
                if (M) return null;
                let y = a.sortBy(L, e => R.indexOf(e.id));
                return (0, r.jsxs)("div", {
                    className: P.giftRecipientSection,
                    children: [(0, r.jsx)(u.FormTitle, {
                        children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, r.jsxs)("div", {
                        className: P.giftRecipient,
                        children: [(0, r.jsx)(u.SearchableSelect, {
                            placeholder: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: P.giftRecipientInputWrapper,
                            className: p ? P.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, r.jsx)(E.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => A ? (0, r.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: i,
                            onChange: e => {
                                o(e), I(!1)
                            },
                            options: y.map(e => ({
                                value: e,
                                label: "".concat(x.default.getUserTag(e))
                            }))
                        }), (0, r.jsx)(u.Button, {
                            disabled: null == i,
                            submitting: _,
                            className: P.sendToRecipientButton,
                            onClick: () => {
                                m(!0), (0, C.sendGiftMessage)(i, t).then(() => {
                                    n(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    I(!0), m(!1)
                                })
                            },
                            children: F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, r.jsx)("div", {
                        className: p ? P.subtextError : P.subtext,
                        children: p ? F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : F.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var b = l.default.connectStores([_.default], () => ({
                obscureGiftCode: _.default.enabled
            }))(M)
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691");

            function s(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("974889"),
                a = n("954016"),
                l = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = a.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: E
                } = e;
                d && (0, i.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let C = d ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
                return (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: u,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: E
                    })
                }, {
                    modalKey: a.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: C
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function s(e) {
                return {
                    textValue: e,
                    richValue: a(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return s
                },
                toRichValue: function() {
                    return a
                },
                voidToOptionValue: function() {
                    return l
                }
            }), n("70102");
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function a(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("516555"),
                a = n("172858"),
                l = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: l,
                        colors: o
                    } = e, [u, d] = s.useState(null), c = (0, i.useConfettiCannon)(n, u), [f, p] = s.useState(!1);
                    return s.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && p(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...a.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n.x,
                                        y: n.y
                                    },
                                    maxValue: {
                                        x: n.x + n.width,
                                        y: n.y + n.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * r))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [c, t, f]), (0, r.jsx)(i.SpriteCanvas, {
                        ref: d,
                        sprites: null != l ? l : a.COMMON_CONFETTI_SPRITES,
                        colors: null != o ? o : a.COMMON_CONFETTI_COLORS,
                        spriteWidth: a.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: a.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                a = n("65597"),
                l = n("854588"),
                o = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("268779"),
                p = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: s,
                        style: p,
                        children: E
                    } = e, C = (0, a.default)([o.default], () => o.default.saturation);
                    return (0, r.jsx)("div", {
                        className: i(f.banner, s),
                        style: (() => {
                            if (null == t) return p;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === C) return {
                                ...p,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(l.default.unsafe_rawColors.BLACK_500, 1 - C);
                            return {
                                ...p,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return P
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("516555"),
                o = n("627445"),
                u = n.n(o),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                p = n("206230"),
                E = n("812204"),
                C = n("685665"),
                I = n("606292"),
                S = n("688318"),
                _ = n("38766"),
                h = n("601095"),
                T = n("493390"),
                m = n("697218"),
                g = n("730297"),
                A = n("806410"),
                O = n("923702"),
                N = n("716120"),
                v = n("408381"),
                x = n("57940"),
                R = n("782340"),
                L = n("99242"),
                F = n("53708");
            let P = e => {
                var t, n;
                let {
                    product: i,
                    onClose: a,
                    confettiTarget: l,
                    confettiCanvas: o,
                    category: P,
                    analyticsLocations: M
                } = e, {
                    confettiColors: y,
                    confettiSprites: b,
                    backgroundColors: j,
                    buttonColors: D
                } = (0, x.default)(P), U = (0, d.default)([m.default], () => {
                    let e = m.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), B = (0, d.default)([p.default], () => p.default.useReducedMotion), k = null !== (t = i.items.find(g.isAvatarDecorationRecord)) && void 0 !== t ? t : null, G = null !== (n = i.items.find(A.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: H
                } = (0, S.default)({
                    user: U,
                    avatarDecorationOverride: k,
                    size: (0, I.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), w = s.useRef(null), {
                    analyticsLocations: V,
                    AnalyticsLocationProvider: z
                } = (0, C.default)([...M, E.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, _.default)({
                    analyticsLocations: V
                });
                return null == k && null == G ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: L.modalInner,
                        ref: w,
                        style: null != j ? {
                            background: (0, v.getBackgroundGradient)(j)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: L.bannerContainer,
                            children: [(0, r.jsx)(N.default, {
                                asset: P.banner,
                                size: 440,
                                className: L.decorationBanner
                            }), null != k && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: F,
                                avatarDecoration: H,
                                className: L.avatarDecoration,
                                "aria-label": i.name
                            }), null != G && (0, r.jsx)("div", {
                                className: L.profileEffectShopPreview,
                                children: (0, r.jsx)(h.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == G ? void 0 : G.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: L.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: L.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: R.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: i.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != G ? R.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : R.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    a(), (0, f.popLayer)(), Y(), null != k ? (0, I.openAvatarDecorationModal)({
                                        initialSelectedDecoration: i.items.find(g.isAvatarDecorationRecord),
                                        analyticsLocations: V
                                    }) : null != G && (0, T.openProfileEffectModal)({
                                        analyticsLocations: V,
                                        initialSelectedEffectID: null == G ? void 0 : G.id
                                    })
                                },
                                style: null != D ? {
                                    background: (0, v.getBackgroundGradient)(D, 90)
                                } : void 0,
                                children: R.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: a,
                            className: L.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !B && (0, r.jsx)(O.default, {
                        confettiTarget: null != l ? l : w.current,
                        confettiCanvas: o,
                        sprites: b,
                        colors: y
                    })]
                })
            };
            var M = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: i,
                    onClose: o,
                    analyticsLocations: u
                } = e, d = s.useRef(new l.Environment), [f, p] = s.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.ConfettiCanvas, {
                        ref: p,
                        className: L.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: a(L.modalInner, L.modalContentOverrides),
                            children: (0, r.jsx)(P, {
                                product: n,
                                category: i,
                                onClose: o,
                                confettiCanvas: f,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        162848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("446674"),
                a = n("265586"),
                l = n("606292"),
                o = n("688318"),
                u = n("635357"),
                d = n("184900"),
                c = n("845962"),
                f = n("506885"),
                p = n("697218"),
                E = n("153160"),
                C = n("426188"),
                I = n("49111"),
                S = n("782340"),
                _ = n("416465"),
                h = n("513002");
            let T = e => {
                    let {
                        avatarDecoration: t
                    } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
                        avatarDecorationSrc: a
                    } = (0, o.default)({
                        user: n,
                        avatarDecorationOverride: t,
                        size: (0, l.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_40)
                    });
                    return (0, r.jsx)("img", {
                        src: a,
                        alt: t.label,
                        className: _.avatarDecoration
                    })
                },
                m = e => {
                    var t;
                    let {
                        profileEffect: n
                    } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getProfileEffectById(n.id)), {
                        accessibilityLabel: a,
                        thumbnailPreviewSrc: l,
                        title: o
                    } = null !== (t = null == s ? void 0 : s.config) && void 0 !== t ? t : {};
                    return (0, r.jsxs)("div", {
                        className: _.profileEffectContainer,
                        children: [(0, r.jsx)("img", {
                            src: h,
                            alt: a,
                            className: _.profileEffectBackground
                        }), (0, r.jsx)("img", {
                            className: _.profileEffect,
                            src: l,
                            alt: o
                        })]
                    })
                };
            var g = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: n
                } = e, {
                    product: l
                } = (0, C.useFetchCollectiblesProduct)(t), {
                    giftRecipient: o
                } = (0, u.useGiftContext)(), c = (0, i.useStateFromStores)([p.default], () => p.default.getCurrentUser());
                if (null == l || null == n) return null;
                let [h] = l.items, g = null != o && o.id !== (null == c ? void 0 : c.id);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: _.previewTitleContainer,
                        children: [(0, r.jsx)(s.FormTitle, {
                            className: _.previewTitle,
                            children: S.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), g && (0, r.jsx)(s.Popout, {
                            preload: () => (0, f.default)(o.id, o.getAvatarURL(null, 80)),
                            renderPopout: e => (0, r.jsx)(d.default, {
                                ...e,
                                user: o,
                                pendingAvatar: o.avatar,
                                pendingAvatarDecoration: h.type === a.CollectiblesItemType.AVATAR_DECORATION ? h : null,
                                pendingProfileEffectID: h.type === a.CollectiblesItemType.PROFILE_EFFECT ? h.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: I.NOOP,
                                onBannerChange: I.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, r.jsx)(s.Button, {
                                ...e,
                                look: s.ButtonLooks.LINK,
                                children: S.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                            })
                        }, o.id)]
                    }), (0, r.jsxs)("div", {
                        className: _.previewContainer,
                        children: [h.type === a.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(T, {
                            avatarDecoration: h
                        }), h.type === a.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)(m, {
                            profileEffect: h
                        }), (0, r.jsxs)("div", {
                            className: _.previewTextContainer,
                            children: [(0, r.jsx)(s.Text, {
                                variant: "text-md/semibold",
                                children: l.name
                            }), (0, r.jsx)(s.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: h.type === a.CollectiblesItemType.AVATAR_DECORATION ? S.default.Messages.USER_SETTINGS_AVATAR_DECORATION : h.type === a.CollectiblesItemType.PROFILE_EFFECT ? S.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: (0, E.formatPrice)(n.amount, n.currency)
                        })]
                    })]
                })
            }
        },
        349133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("446674"),
                a = n("87657"),
                l = n("635357"),
                o = n("27618"),
                u = n("697218"),
                d = n("158998"),
                c = n("782340"),
                f = () => {
                    let e = (0, i.useStateFromStores)([o.default], () => o.default.getFriendIDs()),
                        t = (0, i.useStateFromStores)([u.default], () => u.default.filter(t => e.includes(t.id) && !t.bot), [e]),
                        {
                            giftRecipient: n,
                            setGiftRecipient: f
                        } = (0, l.useGiftContext)();
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(s.FormTitle, {
                            children: c.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, r.jsx)(s.SearchableSelect, {
                            placeholder: c.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, r.jsx)(a.default, {
                                user: e.value,
                                size: s.AvatarSizes.SIZE_20
                            }),
                            value: n,
                            onChange: e => {
                                f(e)
                            },
                            options: t.map(e => ({
                                value: e,
                                label: "".concat(d.default.getUserTag(e))
                            }))
                        })]
                    })
                }
        },
        408381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return r
                },
                getLogoSize: function() {
                    return s
                },
                getBackgroundGradient: function() {
                    return i
                }
            });
            let r = 1060,
                s = e => 3.8 * e,
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: n,
                            secondary: r
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(r.toHslString(), ")")
                }
        },
        57940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("656280"),
                s = n.n(r),
                i = n("635058"),
                a = n("65597"),
                l = n("669491"),
                o = n("206230"),
                u = n("388491"),
                d = n("172858");
            let c = s(l.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = s(l.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [i, a, l] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return s({
                        r: i,
                        g: a,
                        b: l
                    })
                },
                E = (e, t) => {
                    let n = s(e),
                        r = s(t),
                        i = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: i.setAlpha(.4)
                    }
                },
                C = (e, t) => {
                    let n = s(e),
                        r = s(t),
                        i = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: s(i.isLight() ? f : c)
                    }
                },
                I = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l: i
                    } = e.toHsl();
                    return s({
                        h: n,
                        s: r * t,
                        l: i
                    })
                },
                S = {
                    [i.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: C("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [i.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: C("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [i.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: C("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [i.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: C(l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [i.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: C("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [i.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: C("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [i.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: E("#467FFF", "#154ECF"),
                        buttonColors: C("#44C7FF", "#009DFF"),
                        confettiSprites: [n("770704"), n("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    }
                };
            var _ = e => {
                let t = (0, a.default)([o.default], () => o.default.saturation);
                if (null == e) return {};
                let n = S[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: I(n.backgroundColors.primary, t),
                        secondary: I(n.backgroundColors.secondary, t),
                        border: I(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: I(n.buttonColors.primary, t),
                        secondary: I(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => I(s(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return a
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var r = n("913144"),
                s = n("599110"),
                i = n("49111");

            function a(e) {
                s.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("446674"),
                s = n("913144"),
                i = n("197881"),
                a = n("492397");
            let l = new Set,
                o = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(a.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
                        hotspotOverrides: o
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(s.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    l = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (l.has(t)) return !1;
                    l.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return i.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var s = n("597517");
            n.es(s, t);
            var i = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("516555"),
                a = n("65597"),
                l = n("812204"),
                o = n("685665"),
                u = n("697218"),
                d = n("635357"),
                c = n("642906"),
                f = n("85336"),
                p = n("385179"),
                E = n("292215"),
                C = n("158184"),
                I = n("385890"),
                S = n("337978"),
                _ = n("49111"),
                h = n("843455"),
                T = n("322859");
            let m = (e, t, n) => (0, r.jsx)(S.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function g(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: S,
                    loadId: g,
                    skuId: A,
                    isGift: O = !1,
                    giftRecipient: N,
                    giftMessage: v,
                    analyticsLocations: x,
                    returnRef: R
                } = e, {
                    analyticsLocations: L,
                    AnalyticsLocationProvider: F
                } = (0, o.default)([...x, l.default.COLLECTIBLES_PAYMENT_MODAL]), P = s.useRef(new i.Environment), [M, y] = s.useState(null), b = (0, a.default)([u.default], () => u.default.getCurrentUser()), j = [E.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, I.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...E.SHARED_STEP_CONFIGS, E.REVIEW_STEP_CONFIG, {
                    key: f.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(C.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: M,
                        analyticsLocations: L
                    }),
                    options: {
                        bodyClassName: T.modalOverrideBody,
                        sliderBodyClassName: T.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(F, {
                    children: [(0, r.jsx)(i.ConfettiCanvas, {
                        ref: y,
                        className: T.confettiCanvas,
                        environment: P.current
                    }), (0, r.jsx)(c.PaymentContextProvider, {
                        stepConfigs: j,
                        applicationId: _.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [A],
                        isGift: O,
                        activeSubscription: null,
                        purchaseType: h.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.GiftContextProvider, {
                            isGift: O,
                            giftRecipient: null != N ? N : b,
                            giftMessage: v,
                            children: (0, r.jsx)(p.PaymentModal, {
                                onClose: t,
                                onComplete: n,
                                loadId: g,
                                applicationId: _.COLLECTIBLES_APPLICATION_ID,
                                skuId: A,
                                initialPlanId: null,
                                analyticsLocations: L,
                                transitionState: S,
                                renderHeader: m,
                                returnRef: R,
                                hideShadow: !0
                            })
                        })
                    })]
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("627445"),
                i = n.n(s),
                a = n("65597"),
                l = n("749432"),
                o = n("853987"),
                u = n("658756"),
                d = n("635357"),
                c = n("642906"),
                f = n("650484"),
                p = n("367767");

            function E(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: s
                } = e, {
                    skusById: l,
                    selectedSkuId: d,
                    application: E
                } = (0, c.usePaymentContext)(), {
                    product: C,
                    category: I
                } = (0, a.useStateFromStoresObject)([o.default], () => ({
                    product: o.default.getProduct(d),
                    category: o.default.getCategoryForProduct(d)
                }));
                i(null != d, "Expected selectedSkuId"), i(null != E, "Expected application");
                let S = l[d];
                return (i(null != S, "Expected sku"), null == I || null == C) ? null : (0, r.jsxs)(f.PaymentPortalBody, {
                    children: [(0, r.jsx)(p.default, {}), (0, r.jsx)(u.CollectiblesCollectedModalInner, {
                        product: C,
                        category: I,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: s
                    })]
                })
            }

            function C(e) {
                let {
                    isGift: t,
                    giftCode: n,
                    selectedGiftStyle: s,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: o,
                    isSendingMessage: u
                } = (0, d.useGiftContext)();
                return t ? (0, r.jsx)(l.default, {
                    giftCode: n,
                    onClose: e.handleClose,
                    selectedGiftStyle: s,
                    hasSentMessage: i,
                    giftRecipient: a,
                    giftMessageError: o,
                    isSendingMessage: u
                }) : (0, r.jsx)(E, {
                    ...e
                })
            }
        },
        385890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("162848"),
                a = n("349133"),
                l = n("705820"),
                o = n("208559"),
                u = n("177998"),
                d = n("145131"),
                c = n("635357"),
                f = n("642906"),
                p = n("85336"),
                E = n("650484"),
                C = n("782340"),
                I = n("578956");
            let S = {
                key: p.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, r.jsx)(h, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function _(e) {
                let {
                    onStepChange: t,
                    onBackClick: n,
                    showBackButton: i
                } = e, {
                    hasPaymentSources: a
                } = (0, f.usePaymentContext)(), l = a ? p.Step.REVIEW : p.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.Button, {
                        onClick: () => t(l),
                        children: C.default.Messages.PAGINATION_NEXT
                    }), i ? (0, r.jsx)(u.default, {
                        onClick: n
                    }) : null]
                })
            }

            function h(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    customGiftMessage: u = "",
                    setCustomGiftMessage: p
                } = (0, c.useGiftContext)(), {
                    selectedSkuId: S,
                    selectedSkuPricePreview: h
                } = (0, f.usePaymentContext)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.PaymentPortalBody, {
                        children: (0, r.jsxs)("div", {
                            className: I.stepBody,
                            children: [(0, r.jsx)("div", {
                                className: I.bodyColumnMiddle,
                                children: (0, r.jsx)(o.GiftAnimationOptions, {})
                            }), (0, r.jsxs)("div", {
                                className: I.bodyColumnRight,
                                children: [(0, r.jsx)(a.default, {}), (0, r.jsx)(l.default, {
                                    sectionTitle: C.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == p ? void 0 : p(e),
                                    pendingText: u,
                                    currentText: u
                                }), (0, r.jsx)(i.default, {
                                    selectedSkuId: S,
                                    selectedSkuPricePreview: h
                                })]
                            })]
                        })
                    }), (0, r.jsx)(E.PaymentPortalFooter, {
                        children: (0, r.jsx)(s.ModalFooter, {
                            justify: d.default.Justify.BETWEEN,
                            align: d.default.Align.CENTER,
                            children: (0, r.jsx)(_, {
                                onStepChange: t,
                                showBackButton: !0,
                                onBackClick: n
                            })
                        })
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalHeader: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("834897"),
                a = n("635357"),
                l = n("85336"),
                o = n("425480"),
                u = n("782340"),
                d = n("504898"),
                c = n("551290");
            let f = e => {
                let {
                    step: t,
                    onClose: n
                } = e, {
                    isGift: f
                } = (0, a.useGiftContext)(), p = (0, i.default)(o.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                if (t === l.Step.CONFIRM || t === l.Step.BENEFITS) return (0, r.jsx)("div", {});
                if (f && (t === l.Step.GIFT_CUSTOMIZATION || t === l.Step.REVIEW)) {
                    let e = t === l.Step.REVIEW ? u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER : u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER;
                    return (0, r.jsxs)(s.ModalHeader, {
                        className: d.headerContainerGift,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: d.headerGift,
                            children: (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: e
                            })
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: n,
                            className: d.closeButtonGift
                        })]
                    })
                }
                return (0, r.jsxs)("div", {
                    className: d.headerContainer,
                    children: [!p && (0, r.jsx)("div", {
                        className: d.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, r.jsx)("img", {
                            src: c,
                            alt: "",
                            className: d.headerImage
                        })
                    }), (0, r.jsx)(s.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: d.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("627445"),
                i = n.n(s),
                a = n("77078"),
                l = n("642906"),
                o = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: s,
                    application: f
                } = (0, l.usePaymentContext)();
                i(null != s, "Expected selectedSkuId"), i(null != f, "Expected application");
                let p = n[s];
                i(null != p, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(u.PaymentPortalBody, {
                    children: [(0, r.jsx)(o.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(a.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return I
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return S
                },
                SHARED_STEP_CONFIGS: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("357957"),
                i = n("85336"),
                a = n("262683"),
                l = n("946359"),
                o = n("724269"),
                u = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(a.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                            onReturn: () => {
                                let t = s.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(i.Step.REVIEW, {
                                    trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(o.default, {})
                },
                C = {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(l.default, {})
                },
                I = {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                S = {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                _ = [E, C]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("627445"),
                a = n.n(i),
                l = n("245187"),
                o = n("635357"),
                u = n("642906"),
                d = n("85336"),
                c = n("628738"),
                f = n("49111");

            function p(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: i,
                    hasFetchedSkus: p,
                    paymentSources: E,
                    hasFetchedPaymentSources: C,
                    application: I,
                    skusById: S,
                    selectedSkuId: _
                } = (0, u.usePaymentContext)(), {
                    isGift: h
                } = (0, o.useGiftContext)(), [T, m] = s.useState(!0);
                return (s.useEffect(() => {
                    let e = null != I;
                    p && C && e && m(!1)
                }, [p, C, I]), s.useEffect(() => {
                    if (T || i) return;
                    a(null != _, "Expected selectedSkuId");
                    let e = S[_];
                    if (h && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [T, i, t, E, h, S, _]), T) ? (0, r.jsx)(c.default, {}) : i ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = s
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let s = (0, r.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = s
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                s = n("884691"),
                i = n("446674"),
                a = n("206230"),
                l = n("491605"),
                o = n("210721"),
                u = n("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, p = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion), [E, C] = s.useState(c), I = s.useRef((0, o.getGiftAnimationData)(t, E)), [S, _] = s.useState(null == f), [h, T] = s.useState(!1), [m, g] = s.useState(-1), A = () => {
                    I.current = (0, o.getGiftAnimationData)(t, E), g(e => e + 1)
                }, O = () => {
                    _(!1), T(!0), g(-1), C(c)
                };
                s.useEffect(() => {
                    null == f && C(c)
                }, [f, c]), s.useEffect(() => {
                    if (null != f && m >= 0) {
                        O();
                        return
                    }
                    A()
                }, [t, f]), s.useEffect(() => {
                    (!h || null == f) && A()
                }, [E]), s.useEffect(() => {
                    h && (_(null == f), T(!1), A())
                }, [h]);
                if (!u.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(l.default, {
                    importData: I.current,
                    shouldAnimate: !p && d,
                    className: n,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (C(f), _(!0))
                    } : void 0,
                    loop: S
                })
            }
        },
        601095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("859498"),
                o = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: i = !1,
                        isPurchased: c
                    } = e, f = i ? 250 : .1, [p, E] = s.useState(!0);
                    return (s.useEffect(() => {
                        if (!0 !== i) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, i]), null != t) ? (0, r.jsxs)("div", {
                        className: a(u.previewContainer, {
                            [u.previewContainerAnimation]: i
                        }),
                        children: [(0, r.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: i ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !p && (0, r.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(o.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: i,
                                restartMethod: l.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return A
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return N
                }
            });
            var r = n("627445"),
                s = n.n(r),
                i = n("917351"),
                a = n.n(i),
                l = n("913144"),
                o = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                E = n("845579"),
                C = n("474643"),
                I = n("18494"),
                S = n("800762"),
                _ = n("659500"),
                h = n("648564"),
                T = n("49111"),
                m = n("724210");

            function g(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let r = !a.isEmpty(S.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                s(null != e.parent_id, "all threads must have parents");
                let i = I.default.getChannelId();
                e.parent_id !== i && !(0, m.isGuildHomeChannel)(i) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(i) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? h.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    _.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function A(e, t, n) {
                s(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), s(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), I.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let r = C.default.getDraft(e.id, C.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = C.default.getDraft(e.id, C.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", C.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, C.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function O(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.ThreadSettings
                })
            }
        },
        671484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, s = n("866227"),
                i = n.n(s),
                a = n("666038"),
                l = n("568734"),
                o = n("797647"),
                u = n("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            r = class e extends a.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? i(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? o.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && i().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && u.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, l.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, l.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                s = n("913144"),
                i = n("27618");
            let a = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...l
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !i.default.isBlocked(e)))
            }
            class d extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([i.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return a
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(s.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), a = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    a = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    a = !1
                },
                LOGOUT: function() {
                    o = {
                        ...l
                    }
                }
            })
        },
        188525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("77078"),
                o = n("474293"),
                u = n("145131"),
                d = n("782340"),
                c = n("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends s.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: n,
                        mode: s
                    } = this.props, i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, r.jsx)("input", {
                        className: a((0, o.getClass)(c, "input", s), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: n,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": i
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: n,
                        hideMessage: s,
                        className: i,
                        buttonLook: p
                    } = this.props, E = null != s;
                    switch (n) {
                        case f.SUCCESS:
                            e = l.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = l.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, r.jsx)(l.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, r.jsx)("div", {
                            className: a((0, o.getClass)(c, "copyInput", n), i),
                            ref: this.containerRef,
                            children: (0, r.jsxs)(u.default, {
                                className: c.layout,
                                children: [(0, r.jsxs)(u.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, r.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: s
                                    }) : null]
                                }), (0, r.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, r.jsx)(l.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: l.ButtonSizes.MIN,
                                        color: e,
                                        look: p,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = s.createRef(), this.containerRef = s.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            p.contextType = l.FormContext, p.defaultProps = {
                supportsCopy: !0,
                buttonColor: l.ButtonColors.PRIMARY,
                buttonLook: l.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, p.Modes = f, p.ButtonColors = l.ButtonColors, p.ButtonLooks = l.ButtonLooks;
            var E = p
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("926001"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("509317"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: s,
                            className: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, i.FolderIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("578478"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: s
                        })
                    })
                }, i.ImageIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return l
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return u
                }
            });
            var r = n("228256");
            let {
                Layer: s,
                LayerContainer: i,
                LayerProvider: a
            } = (0, r.createLayer)("Chat"), l = i, o = a;
            var u = s
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return _
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("627445"),
                o = n.n(l),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                E = n("368121"),
                C = n("523096"),
                I = n("587974"),
                S = n("494101");
            let _ = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function h(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class T extends s.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: s,
                        extraDetail: i
                    } = this.props, a = [], l = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(l), u = 0;
                    for (; u < l && u < e.length;) {
                        var d;
                        let t = null == o && null == i && u === e.length - 1,
                            l = n(e[u], t, u);
                        a.push(t ? (0, r.jsx)("div", {
                            className: S.avatarContainer,
                            children: l
                        }, h(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, r.jsx)(I.default, {
                            className: S.avatarContainerMasked,
                            height: s,
                            width: s,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, h(e[u], u))), u++
                    }
                    return null != i ? a.push(i) : null != o && a.push(o), a
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: a,
                        users: l
                    } = this.props, o = Math.min(e, l.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(s.Fragment, {
                                children: a("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > l.length) {
                                let e = n - l.length;
                                return (0, r.jsx)(s.Fragment, {
                                    children: a("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < l.length) {
                            let e = Math.min(l.length - o, 99);
                            return (0, r.jsx)(s.Fragment, {
                                children: a("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(E.default, {
                        foreground: S.foreground,
                        className: S.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: s,
                        showUserPopout: i,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), C = l && null == p.default.getUser(f);
                    return (0, r.jsx)(u.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(s, 80), {
                            guildId: s
                        }),
                        shouldShow: !0 === i && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: C && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: a(e, S.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.SIZE_24;
                                switch (e) {
                                    case _.SIZE_16:
                                        return S.size16;
                                    case _.SIZE_24:
                                        return S.size24;
                                    case _.SIZE_32:
                                        return S.size32;
                                    case _.SIZE_56:
                                        return S.size56;
                                    default:
                                        return S.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = s.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: s,
                            guildId: i,
                            size: a
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: S.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % C.default.DEFAULT_AVATARS.length,
                                    t = C.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: S.avatar
                                })
                            }
                        }
                        let l = (0, r.jsx)("img", {
                            src: e.getAvatarURL(i, a),
                            alt: e.username,
                            className: S.avatar
                        }, e.id);
                        return s ? (0, r.jsx)(u.Clickable, {
                            className: S.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: l
                        }, e.id) : l
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: S.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: _.SIZE_24
            };
            var m = T
        }
    }
]);