(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21469"], {
        619025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aa2afb65f20b2a22447c.svg"
        },
        258925: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c1957de296fc76c595c7.svg"
        },
        40755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea00a9ee82d2b42562bd.svg"
        },
        311050: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3389d3a16ceea3ef63a.svg"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("843823"),
                s = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("974889"),
                s = n("954016"),
                l = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = s.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: E
                } = e;
                d && (0, a.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let m = d ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, i.jsx)(e, {
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
                    modalKey: s.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: m
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
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

            function r(e) {
                return {
                    textValue: e,
                    richValue: s(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return s
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let a = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function s(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : a
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
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return s
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("49111");

            function s(e, t, n, i) {
                r.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: a,
                    onSuccess: s,
                    onFailure: l
                } = t;
                r.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: a,
                    onSuccess: s,
                    onFailure: l
                })
            }

            function o(e, t, n) {
                r.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function u(e, t) {
                let n = await i.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    r.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return I
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                handleInteractionResponse: function() {
                    return h
                },
                InteractionStatusViewState: function() {
                    return r
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return A
                }
            });
            var i, r, a = n("249654"),
                s = n("872717"),
                l = n("913144"),
                o = n("819689"),
                u = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                E = n("3765"),
                m = n("606981"),
                S = n("49111");

            function I(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
            }
            let T = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: r,
                    indices: l,
                    applicationId: o,
                    channelId: E,
                    guildId: m,
                    localState: I
                } = e, T = a.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, T)) return;
                await d.default.unarchiveThreadIfNecessary(E), (0, f.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: r,
                        indices: l
                    },
                    onFailure: (e, t) => _(E, e, t)
                }), null != I && (0, f.queueInteractionComponentState)(n, T, I, l);
                let C = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: m,
                    channel_id: E,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: r,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === u.ComponentType.STRING_SELECT || e.type === u.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(I)
                    }
                };
                await s.default.post({
                    url: S.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, e => {
                    h(T, E, m, e)
                })
            }, _ = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, h = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var r;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === S.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let r = (0, m.getFirstSkemaError)(i.body.errors);
                                null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == r ? void 0 : r.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = r || (r = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    s = e.state === S.MessageStates.SENT && I(e.id) < Date.now();
                let l = e.state === S.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (o && i === E.InteractionState.QUEUED || d && e.state === S.MessageStates.SENDING && null != t) return r.SENDING;
                if (o && i === E.InteractionState.CREATED || e.hasFlag(S.MessageFlags.LOADING) && !s) return r.CREATED;
                if (null != e.interaction && e.hasFlag(S.MessageFlags.LOADING) && s) return r.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(S.MessageFlags.LOADING) && l) return r.TIMED_OUT;
                else if (d && e.state === S.MessageStates.SEND_FAILED) return r.FAILED
            };

            function A(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === u.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return r
                }
            });
            let i = "_errors";

            function r(e) {
                return function e(t, n) {
                    let r = t[i];
                    if (null != r && Array.isArray(r)) return r[0];
                    for (let [r, a] of Object.entries(t))
                        if (r !== i && null != a && "object" == typeof a) return e(a, null != n ? n : r);
                    return null
                }(e, void 0)
            }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("748820"),
                s = n("872717"),
                l = n("850068"),
                o = n("253981"),
                u = n("642906"),
                d = n("85336"),
                c = n("149833"),
                f = n("523591"),
                p = n("153727"),
                E = n("650484"),
                m = n("49111"),
                S = n("646718");

            function I(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    isGift: I,
                    browserCheckoutState: T,
                    browserCheckoutStateLoadId: _,
                    contextMetadata: h
                } = (0, u.usePaymentContext)(), [C, A] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !C && (A(!0), (0, l.startBrowserCheckout)(h.loadId), ! function(e, t, n, i) {
                        let r = m.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            l = new URL(o.default.makeUrl(m.Routes.BILLING_LOGIN_HANDOFF)),
                            u = (0, a.v4)();
                        l.searchParams.append("handoff_key", u), l.searchParams.append("redirect_to", r), s.default.post({
                            url: m.Endpoints.HANDOFF,
                            body: {
                                key: u
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : S.SubscriptionPlans.PREMIUM_MONTH_TIER_2, I, h.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
                }, [n, I, C, A, h, t]), r.useEffect(() => {
                    _ === h.loadId && T === f.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
                }, [T, _, h, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(p.default, {}), (0, i.jsx)(E.PaymentPortalBody, {
                        children: (0, i.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(E.PaymentPortalFooter, {
                        children: (0, i.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(d.Step.PLAN_SELECT)
                        })
                    })]
                })
            }
        },
        263820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var a = r
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return u
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("177998"),
                s = n("145131"),
                l = n("85336"),
                o = n("782340");
            let u = () => (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(r.ModalFooter, {
                            justify: s.default.Justify.BETWEEN,
                            align: s.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(a.default, {
                                onClick: n
                            })]
                        })
                    })
                }
        },
        992049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentConfirmStep: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                s = n.n(a),
                l = n("210721"),
                o = n("491523"),
                u = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("642906"),
                p = n("650484"),
                E = n("367767");

            function m(e) {
                var t, n;
                let a, {
                        handleClose: m,
                        planGroup: S,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: T,
                        postSuccessGuild: _,
                        followupSKUInfo: h
                    } = e,
                    {
                        activeSubscription: C,
                        isGift: A,
                        paymentSources: y,
                        paymentSourceId: g,
                        selectedPlan: P,
                        selectedSkuId: N,
                        step: M,
                        updatedSubscription: v,
                        selectedGiftStyle: O,
                        startingPremiumSubscriptionPlanIdRef: x
                    } = (0, f.usePaymentContext)();
                s(null != P, "Expected plan to selected"), s(null != N, "Expected selectedSkuId"), s(null != M, "Step should be set");
                let L = r.useCallback(() => {
                        m(), null == I || I()
                    }, [m, I]),
                    {
                        giftRecipient: R
                    } = (0, f.usePaymentContext)(),
                    b = (0, d.useGetGiftCode)(N, A),
                    [D, j] = r.useState(!1),
                    [U, F] = r.useState(!1),
                    [k, w] = r.useState();
                return r.useEffect(() => {
                    if (!A || null == R || null == b || D || U || (0, d.isCustomGiftEnabled)(R)) return;
                    let e = o.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && (F(!0), (0, l.sendGiftMessage)(R, b).then(() => {
                        F(!1), null == I || I(), j(!0)
                    }).catch(e => {
                        F(!1), w(e), j(!0)
                    }))
                }, [A, R, b, D, j, F, U, w, I]), a = null != T ? T(P, L, v) : A ? (0, i.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: P.id,
                    selectedGiftStyle: O,
                    onClose: L,
                    hasSentMessage: D,
                    giftMessageError: k,
                    isSendingMessage: U
                }) : x.current === P.id ? (0, i.jsx)(u.default, {
                    planId: P.id,
                    postSuccessGuild: _,
                    onClose: L,
                    paymentSourceType: null === (t = y[null != g ? g : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(u.default, {
                    followupSKUInfo: h,
                    startingPremiumSubscriptionPlanId: x.current,
                    planId: P.id,
                    onClose: L,
                    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, P.id, S),
                    paymentSourceType: null === (n = y[null != g ? g : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(p.PaymentPortalBody, {
                        children: [(0, i.jsx)(E.default, {}), a]
                    })
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return b
                },
                STEPS: function() {
                    return U
                },
                default: function() {
                    return F
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("446674"),
                s = n("913144"),
                l = n("775433"),
                o = n("812204"),
                u = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                E = n("642906"),
                m = n("85336"),
                S = n("385179"),
                I = n("262683"),
                T = n("946359"),
                _ = n("307367"),
                h = n("724269"),
                C = n("99836"),
                A = n("263820"),
                y = n("992049"),
                g = n("176108"),
                P = n("97461"),
                N = n("403365"),
                M = n("498475"),
                v = n("254350"),
                O = n("49111"),
                x = n("646718"),
                L = n("782340");
            let R = [m.Step.PLAN_SELECT, m.Step.ADD_PAYMENT_STEPS, m.Step.REVIEW, m.Step.CONFIRM];

            function b(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: T,
                    subscriptionTier: _,
                    onClose: h,
                    trialId: C,
                    isGift: y = !1,
                    trialFooterMessageOverride: g,
                    reviewWarningMessage: P,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: M,
                    renderPurchaseConfirmation: v,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: F,
                    returnRef: k
                } = e, {
                    analyticsLocations: w
                } = (0, u.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && s.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), A.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    giftRecipient: G,
                    step: B
                } = (0, E.usePaymentContext)(), H = (0, p.isCustomGiftEnabled)(G) && B === m.Step.PLAN_SELECT;
                return null != G && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(S.PaymentModal, {
                    analyticsLocations: w,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    analyticsSubscriptionType: O.SubscriptionTypes.PREMIUM,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: I,
                    giftMessage: T,
                    subscriptionTier: _,
                    onClose: h,
                    trialId: C,
                    isGift: y,
                    trialFooterMessageOverride: g,
                    reviewWarningMessage: P,
                    planGroup: x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: N,
                    onSubscriptionConfirmation: M,
                    renderPurchaseConfirmation: v,
                    postSuccessGuild: L,
                    followupSKUInfo: R,
                    renderHeader: b,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: U,
                    skuId: F,
                    shakeWhilePurchasing: !0,
                    isLargeModal: H,
                    returnRef: k
                })
            }

            function D(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    isGift: n,
                    selectedSkuId: i
                } = (0, E.usePaymentContext)();
                return (0, g.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: i,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function j(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: a,
                    selectedSkuId: s,
                    isGift: l
                } = (0, E.usePaymentContext)(), o = (0, v.default)({
                    isGift: l,
                    skuId: s,
                    referralTrialOfferId: r
                }), u = D(o);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(I.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(a).length < 1 && null == t ? m.Step.PLAN_SELECT : m.Step.REVIEW;
                            u && (e = m.Step.REVIEW), n(e, {
                                trackedFromStep: m.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let U = [{
                key: null,
                renderStep: e => (0, i.jsx)(S.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: m.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(M.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: m.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(P.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : L.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: m.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(j, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : L.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: m.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(_.default, {
                    ...e
                })
            }, {
                key: m.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(h.default, {})
            }, {
                key: m.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(T.default, {})
            }, {
                key: m.Step.REVIEW,
                renderStep: e => (0, i.jsx)(C.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? L.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : L.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: m.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(y.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function F(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: s,
                        giftRecipient: l,
                        loadId: d,
                        defaultPlanId: c,
                        referralCode: p
                    } = e;
                if (null != r && !Object.values(x.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(E.PaymentContextProvider, {
                        loadId: d,
                        activeSubscription: t,
                        stepConfigs: U,
                        skuIDs: [...x.ACTIVE_PREMIUM_SKUS],
                        isGift: s,
                        defaultPlanId: c,
                        referralCode: p,
                        giftRecipient: null == l ? void 0 : l,
                        children: (0, i.jsx)(b, {
                            ...e
                        })
                    })
                })
            }
        },
        97461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentPlanSelectStep: function() {
                    return j
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("627445"),
                s = n.n(a),
                l = n("65597"),
                o = n("77078"),
                u = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("53253"),
                p = n("669073"),
                E = n("154889"),
                m = n("917247"),
                S = n("358821"),
                I = n("570727"),
                T = n("697218"),
                _ = n("10514"),
                h = n("145131"),
                C = n("659632"),
                A = n("701909"),
                y = n("719923"),
                g = n("642906"),
                P = n("85336"),
                N = n("153727"),
                M = n("628738"),
                v = n("650484"),
                O = n("310093"),
                x = n("367767"),
                L = n("49111"),
                R = n("646718"),
                b = n("782340"),
                D = n("424650");

            function j(e) {
                var t, n, a;
                let {
                    giftMessage: j,
                    handleStepChange: U,
                    initialPlanId: F,
                    subscriptionTier: k,
                    trialId: w,
                    referralTrialOfferId: G,
                    customGiftMessage: B,
                    emojiConfetti: H,
                    soundEffect: W,
                    setCustomGiftMessage: V,
                    setEmojiConfetti: Y,
                    setSoundEffect: K
                } = e, {
                    activeSubscription: Z,
                    hasFetchedSubscriptions: z,
                    isGift: X,
                    paymentSourceId: Q,
                    paymentSources: q,
                    selectedSkuId: J,
                    selectedPlan: $,
                    step: ee,
                    defaultPlanId: et,
                    priceOptions: en,
                    isPremium: ei,
                    selectedGiftStyle: er,
                    setSelectedGiftStyle: ea,
                    giftRecipient: es
                } = (0, g.usePaymentContext)(), {
                    enabled: el
                } = f.default.useExperiment({
                    location: "d17fd6_1"
                }, {
                    autoTrackExposure: !1
                }), eo = (0, f.useIsSeasonalGiftingActive)();
                r.useEffect(() => {
                    eo && X && f.default.trackExposure({
                        location: "d17fd6_2"
                    })
                }, [eo, X]);
                let eu = el && eo && X && J === R.PremiumSubscriptionSKUs.TIER_2,
                    ed = null != Q ? q[Q] : null,
                    {
                        newPlans: ec
                    } = d.default.useExperiment({
                        location: "d17fd6_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    ef = (0, l.default)([T.default], () => T.default.getCurrentUser()),
                    ep = !X && null != J && J === R.PremiumSubscriptionSKUs.TIER_2 && null != ef && ef.hasHadPremium() && z && null == Z && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ed),
                    eE = (0, m.usePremiumTrialOffer)(G),
                    em = !X && null != eE && null != J && (0, R.SubscriptionTrials)[eE.trial_id].skus.includes(J),
                    eS = (0, E.usePremiumDiscountOffer)(),
                    eI = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === J),
                    eT = !X && null != eS && null != J && eI,
                    e_ = null !== (n = em || eT) && void 0 !== n && n,
                    {
                        defaultToMonthlyPlan: eh
                    } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
                        location: "d17fd6_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eC = r.useMemo(() => (0, y.getPremiumPlanOptions)({
                        skuId: J,
                        isPremium: ei,
                        multiMonthPlans: ep ? ec : [],
                        currentSubscription: Z,
                        isGift: X,
                        isEligibleForTrial: em,
                        defaultPlanId: et,
                        defaultToMonthlyPlan: eh
                    }), [J, ei, ec, Z, ep, X, em, et, eh]),
                    eA = eT && eC.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eC[0],
                    ey = (0, l.default)([_.default], () => _.default.get(eA)),
                    eg = [{
                        planId: null == ey ? void 0 : ey.id,
                        quantity: 1
                    }],
                    [eP, eN] = r.useState(e_),
                    [eM, ev] = (0, c.useSubscriptionInvoicePreview)({
                        items: eg,
                        renewal: !1,
                        preventFetch: !e_,
                        applyEntitlements: !0,
                        trialId: w,
                        paymentSourceId: en.paymentSourceId,
                        currency: en.currency
                    });
                r.useEffect(() => {
                    if (e_) eN((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null)
                }, [eM, e_]), (0, u.default)("Payment Modal Plan Select Step", eP, 5, {
                    proratedInvoicePreview: eM,
                    proratedInvoiceError: ev,
                    isEligibleForOffer: e_
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eO = null !== (a = null == ev ? void 0 : ev.message) && void 0 !== a ? a : b.default.Messages.ERROR_GENERIC_TITLE,
                    ex = e_ && null == ev,
                    eL = e_ && null != ev;
                return ex && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null ? (0, i.jsx)(M.default, {}) : (s(null != ee, "Step should be set"), s(eC.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(O.GiftNote, {
                        giftMessage: j
                    }), !(0, C.isCustomGiftEnabled)(es) && (0, i.jsx)(N.default, {
                        isEligibleForTrial: em
                    }), (0, i.jsxs)(v.PaymentPortalBody, {
                        children: [ex && (0, i.jsx)("hr", {
                            className: D.planSelectSeparatorUpper
                        }), (0, i.jsx)(S.default, {
                            isGift: X,
                            plan: $
                        }), (0, i.jsx)(x.default, {}), eL ? (0, i.jsx)(o.FormErrorBlock, {
                            children: eO
                        }) : (0, i.jsx)(I.PremiumSwitchPlanSelectBody, {
                            isGift: X,
                            selectedGiftStyle: er,
                            setSelectedGiftStyle: ea,
                            planOptions: eC,
                            eligibleForMultiMonthPlans: ep,
                            isSeasonalGift: eu,
                            referralTrialOfferId: G,
                            selectedPlanId: null == $ ? void 0 : $.id,
                            subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                            customGiftMessage: B,
                            emojiConfetti: H,
                            soundEffect: W,
                            setCustomGiftMessage: V,
                            setEmojiConfetti: Y,
                            setSoundEffect: K,
                            discountInvoiceItems: eT ? null == eM ? void 0 : eM.invoiceItems : void 0
                        }), ex && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: D.planSelectSeparatorLower
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: b.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: A.default.getArticleURL(L.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(v.PaymentPortalFooter, {
                        children: (0, i.jsx)(o.ModalFooter, {
                            justify: h.default.Justify.BETWEEN,
                            align: h.default.Align.CENTER,
                            children: (0, i.jsx)(I.PremiumSwitchPlanSelectFooter, {
                                onStepChange: U,
                                isGift: X,
                                onBackClick: () => U(P.Step.SKU_SELECT),
                                showBackButton: null == F && null == k,
                                planOptions: eC,
                                shouldRenderUpdatedPaymentModal: ex,
                                isTrial: em
                            })
                        })
                    })]
                }))
            }
        },
        403365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentSKUSelectStep: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("917247"),
                s = n("279171"),
                l = n("49735"),
                o = n("719923"),
                u = n("642906"),
                d = n("85336"),
                c = n("176108"),
                f = n("254350"),
                p = n("646718"),
                E = n("782340"),
                m = n("600465");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: s,
                    activeSubscription: l,
                    isGift: E,
                    startedPaymentFlowWithPaymentSourcesRef: m,
                    setSelectedPlanId: S
                } = (0, u.usePaymentContext)(), T = (0, a.usePremiumTrialOffer)(r);
                return (0, i.jsx)(I, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: a,
                            userTrialOffer: s,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: u
                        } = e;
                        i(n);
                        let E = d.Step.PLAN_SELECT,
                            m = (0, o.getPremiumSkuIdForSubscription)(t);
                        (m === p.PremiumSubscriptionSKUs.TIER_1 || m === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !a && (E = d.Step.WHAT_YOU_LOSE);
                        let S = (0, f.isInTrialRedemption)({
                                userTrialOffer: s,
                                isGift: a,
                                skuId: n
                            }),
                            I = (0, c.inOneStepSubscriptionCheckout)({
                                isTrial: S,
                                isGift: a,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: u
                            });
                        if (E !== d.Step.WHAT_YOU_LOSE && I) {
                            E = d.Step.REVIEW;
                            let e = (0, c.getDefaultPlanOneStepCheckout)(n, t);
                            l(e)
                        }
                        r(E, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: l,
                        newSkuId: e,
                        setSelectedSkuId: s,
                        handleStepChange: t,
                        isGift: E,
                        userTrialOffer: T,
                        startedPaymentFlowWithPaymentSources: m.current,
                        setSelectedPlanId: S
                    }),
                    onClose: n,
                    isGift: E
                })
            }

            function I(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: a
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: m.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, i.jsx)(r.FormTitle, {
                            tag: r.FormTitleTags.H4,
                            children: E.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: m.skuSelectModalContent,
                        children: [(0, i.jsx)(s.default, {
                            fromBoostCancelModal: !1,
                            className: m.legacyPricingNotice
                        }), (0, i.jsx)(l.default, {
                            onSelectSku: t,
                            isGift: a
                        })]
                    })]
                })
            }
        },
        498475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                a = n.n(r),
                s = n("819855"),
                l = n("77078"),
                o = n("841098"),
                u = n("360262"),
                d = n("719923"),
                c = n("642906"),
                f = n("85336"),
                p = n("176108"),
                E = n("782340"),
                m = n("943490");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, o.default)(), {
                    activeSubscription: S,
                    selectedSkuId: I,
                    setSelectedPlanId: T,
                    isGift: _,
                    startedPaymentFlowWithPaymentSourcesRef: h
                } = (0, c.usePaymentContext)(), C = null != S ? (0, d.getPremiumPlanItem)(S) : null, A = null != C ? (0, d.getDisplayPremiumType)(C.planId) : null, y = null != C ? (0, d.getPremiumType)(C.planId) : null, g = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: _,
                    selectedSkuId: I,
                    startedPaymentFlowWithPaymentSources: h.current
                });
                return a(null != y, "Expected premium type"), (0, i.jsx)(u.default, {
                    premiumType: y,
                    titleText: E.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: E.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: A
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: m.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(l.Button, {
                            onClick: () => {
                                if (g) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(I, S);
                                    T(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
                            },
                            children: E.default.Messages.CONTINUE
                        }), (0, i.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, s.isThemeDark)(r) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: E.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("866227"),
                a = n.n(r),
                s = n("862337"),
                l = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                u = a(o),
                d = (0, l.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function c() {
                let [e, t] = i.useState(() => u.isAfter(Date.now()));
                return i.useEffect(() => {
                    let n = new s.Timeout,
                        i = () => {
                            let e = u.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : i()
                            })
                        };
                    return e && i(), () => n.stop()
                }), e
            }
            var f = d
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_automated_gift_code_message",
                label: "Automatically send gift code message in direct message to gift recipient",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show the automated gift code message",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
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
            var a = r
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("641078"),
                a = n("132554"),
                s = n("646718"),
                l = n("782340"),
                o = n("311050"),
                u = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, u = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== s.PremiumSubscriptionSKUs.TIER_2 || !u ? null : (0, i.jsx)(a.default, {
                        copy: l.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: o
                    })
                }
        },
        49735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("400307"),
                s = n("646718"),
                l = n("414539");

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(a.Tier2Card, {
                        className: l.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(a.Tier0Card, {
                        className: l.tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }
            var d = function(e) {
                let {
                    onSelectSku: t,
                    isGift: n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o, {
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(u, {
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_0),
                        isGift: n
                    })]
                })
            }
        },
        132554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                l = n("978679"),
                o = n("265469");

            function u(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: r,
                    textColor: u = "always-white"
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(o.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: o.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: o.textContainer,
                        children: [(0, i.jsx)(l.default, {
                            className: o.giftIcon
                        }), (0, i.jsx)(s.Heading, {
                            className: o.textHeader,
                            color: u,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return y
                },
                closeThreadSidebar: function() {
                    return g
                },
                closeAndClearThreadSidebar: function() {
                    return P
                }
            });
            var i = n("627445"),
                r = n.n(i),
                a = n("917351"),
                s = n.n(a),
                l = n("913144"),
                o = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                E = n("845579"),
                m = n("474643"),
                S = n("18494"),
                I = n("800762"),
                T = n("659500"),
                _ = n("648564"),
                h = n("49111"),
                C = n("724210");

            function A(e, t, n) {
                u.MainWindowDispatch.dispatch(h.ComponentActions.POPOUT_CLOSE);
                let i = !s.isEmpty(I.default.getVoiceStatesForChannel(e.id));
                if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let a = S.default.getChannelId();
                e.parent_id !== a && !(0, C.isGuildHomeChannel)(a) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(h.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, C.isGuildHomeChannel)(a) ? C.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? _.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    T.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function y(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(h.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(h.ComponentActions.POPOUT_CLOSE), S.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let i = m.default.getDraft(e.id, m.DraftType.FirstThreadMessage);
                if ("" === i) {
                    let t = m.default.getDraft(e.id, m.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", m.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, m.DraftType.FirstThreadMessage)
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

            function g(e, t) {
                (0, f.transitionTo)(h.Routes.CHANNEL(e, (0, C.isGuildHomeChannel)(t) ? C.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function P(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.ThreadSettings
                })
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("913144"),
                a = n("27618");
            let s = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...l
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([a.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return s
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
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), s = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    s = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    s = !1
                },
                LOGOUT: function() {
                    o = {
                        ...l
                    }
                }
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("926001"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon)
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("509317"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: a,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, a.FolderIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("578478"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: r
                        })
                    })
                }, a.ImageIcon)
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
            var i = n("228256");
            let {
                Layer: r,
                LayerContainer: a,
                LayerProvider: s
            } = (0, i.createLayer)("Chat"), l = a, o = s;
            var u = r
        }
    }
]);