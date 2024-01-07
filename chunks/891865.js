            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            }), s("222007");
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                i = s("917351"),
                o = s.n(i),
                u = s("446674"),
                d = s("77078"),
                c = s("54239"),
                p = s("736964"),
                S = s("777273"),
                h = s("87657"),
                f = s("210721"),
                E = s("671484"),
                _ = s("27618"),
                A = s("102985"),
                I = s("843823"),
                P = s("697218"),
                C = s("920700"),
                T = s("953109"),
                m = s("306160"),
                R = s("659632"),
                N = s("719923"),
                g = s("158998"),
                y = s("642906"),
                O = s("49111"),
                L = s("646718"),
                M = s("782340"),
                D = s("885515");

            function B(e) {
                let {
                    giftCode: t,
                    application: s,
                    sku: a,
                    subscriptionPlan: i,
                    selectedGiftStyle: o,
                    onClose: c,
                    hasSentMessage: p,
                    giftRecipient: S,
                    giftMessageError: f,
                    isSendingMessage: _
                } = e, {
                    productLine: I
                } = (0, y.usePaymentContext)(), [P, B] = r.useState(C.default.Modes.DEFAULT), U = (0, u.useStateFromStores)([A.default], () => A.default.enabled), F = () => null != i ? i.skuId : null != a ? a.id : null, b = () => {
                    let e;
                    let t = null != o && L.SeasonalGiftStyles2023.includes(o);
                    if (null != f) return M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == i) return null;
                    let s = p || null != S;
                    return (e = i.interval === L.SubscriptionIntervalTypes.MONTH ? s ? t ? M.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : s ? t ? M.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, N.getTierDisplayName)(i.id),
                        intervalCount: i.intervalCount
                    })
                }, v = (e, t) => {
                    null != a && (0, R.trackGiftCodeCopy)(new E.default({
                        code: t,
                        maxUses: 1
                    }), a);
                    try {
                        (0, m.copy)(e), B(C.default.Modes.SUCCESS)
                    } catch (e) {
                        B(C.default.Modes.ERROR)
                    }
                    setTimeout(() => {
                        B(C.default.Modes.DEFAULT)
                    }, 1500)
                }, G = () => {
                    let e;
                    if (null == t) return null;
                    switch (P) {
                        case C.default.Modes.SUCCESS:
                            e = M.default.Messages.BILLING_GIFT_COPIED;
                            break;
                        case C.default.Modes.ERROR:
                            e = M.default.Messages.FAILED;
                            break;
                        default:
                            e = M.default.Messages.COPY
                    }
                    return (0, n.jsxs)("div", {
                        className: D.giftCodeSection,
                        children: [(0, n.jsx)(d.FormTitle, {
                            children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                        }), null != t && (0, n.jsx)(C.default, {
                            hideMessage: U ? M.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, R.getGiftCodeURL)(t),
                            mode: P,
                            text: e,
                            onCopy: e => v(e, t),
                            supportsCopy: m.SUPPORTS_COPY,
                            className: D.copyInput,
                            buttonColor: C.default.ButtonColors.LINK,
                            buttonLook: C.default.ButtonLooks.LINK
                        }), (0, n.jsx)("div", {
                            className: D.subtext,
                            children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                        })]
                    })
                };
                if (_) return (0, n.jsxs)("div", {
                    className: D.confirmation,
                    children: [null != s ? (0, n.jsx)(T.default, {
                        game: s,
                        className: D.icon,
                        size: T.default.Sizes.LARGE,
                        skuId: F()
                    }) : null, (0, n.jsx)(d.Spinner, {
                        type: d.SpinnerTypes.PULSING_ELLIPSIS
                    })]
                });
                let Y = (0, R.isCustomGiftEnabled)(S),
                    k = I === O.SKUProductLines.COLLECTIBLES;
                return (0, n.jsxs)("div", {
                    className: D.confirmation,
                    children: [null != s ? (0, n.jsx)(T.default, {
                        game: s,
                        className: D.icon,
                        size: T.default.Sizes.LARGE,
                        skuId: F()
                    }) : null, (0, n.jsx)(d.Heading, {
                        variant: "heading-lg/semibold",
                        className: l({
                            [D.header]: null == o && !k,
                            [D.headerCustomGifting]: null != o && !k
                        }),
                        children: Y || p && null == f ? M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != f ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                    }), p && null != S && null == f || (0, R.isCustomGiftEnabled)(S) ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.default, {
                            user: S,
                            className: D.giftRecipient,
                            size: d.AvatarSizes.SIZE_80
                        }), (0, n.jsx)(d.Heading, {
                            className: D.giftRecipientName,
                            variant: "heading-md/semibold",
                            children: g.default.getName(S)
                        }), (0, n.jsxs)("div", {
                            className: D.giftRecipientTag,
                            children: [" ", g.default.getUserTag(S)]
                        }), (0, n.jsx)("div", {
                            className: D.giftSentMessage,
                            children: b()
                        })]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: D.blurb,
                            children: b()
                        }), null == f && (0, n.jsx)(x, {
                            giftCode: t,
                            onClose: c
                        }), (0, n.jsx)("div", {
                            className: D.divider
                        }), G()]
                    })]
                })
            }
            let x = e => {
                let {
                    giftCode: t,
                    onClose: s
                } = e;
                r.useEffect(() => {
                    p.default.fetchRelationships(), (0, S.fetchUserAffinities)()
                }, []);
                let [a, l] = r.useState(), [i, E] = r.useState(!1), [A, C] = r.useState(!1), {
                    userAffinities: T,
                    isLoading: m
                } = (0, u.useStateFromStoresObject)([I.default], () => ({
                    userAffinities: I.default.getUserAffinitiesUserIds(),
                    isLoading: I.default.getFetching()
                })), R = Array.from(T.values()), N = (0, u.useStateFromStores)([_.default], () => _.default.getFriendIDs()), y = o.difference(N, R), O = [...R, ...y], L = (0, u.useStateFromStores)([P.default], () => P.default.filter(e => O.includes(e.id) && !e.bot), [O]), B = null == L || 0 === L.length;
                if (B) return null;
                let x = o.sortBy(L, e => O.indexOf(e.id));
                return (0, n.jsxs)("div", {
                    className: D.giftRecipientSection,
                    children: [(0, n.jsx)(d.FormTitle, {
                        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, n.jsxs)("div", {
                        className: D.giftRecipient,
                        children: [(0, n.jsx)(d.SearchableSelect, {
                            placeholder: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: D.giftRecipientInputWrapper,
                            className: i ? D.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(h.default, {
                                user: e.value,
                                size: d.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => m ? (0, n.jsx)(d.Spinner, {
                                type: d.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: a,
                            onChange: e => {
                                l(e), E(!1)
                            },
                            options: x.map(e => ({
                                value: e,
                                label: "".concat(g.default.getUserTag(e))
                            }))
                        }), (0, n.jsx)(d.Button, {
                            disabled: null == a,
                            submitting: A,
                            className: D.sendToRecipientButton,
                            onClick: () => {
                                C(!0), (0, f.sendGiftMessage)(a, t).then(() => {
                                    s(), (0, c.popAllLayers)()
                                }).catch(() => {
                                    E(!0), C(!1)
                                })
                            },
                            children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, n.jsx)("div", {
                        className: i ? D.subtextError : D.subtext,
                        children: i ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            }