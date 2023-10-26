(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70764"], {
        668542: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), a.test(e)) ? "rtl" : s.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                a = RegExp("^[^" + i + "]*[" + r + "]"),
                s = RegExp("^[^" + r + "]*[" + i + "]")
        },
        212653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                l = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && l(e, n, t[n]);
                    if (i)
                        for (var n of i(t)) s.call(t, n) && l(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, r, i) => {
                    let a, s, l = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (l.blacklist || l.whitelist) && console.warn("The ".concat(l.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        a = l.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(l.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, i);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(l.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let p = u(l.serialize),
                        m = () => {
                            let e;
                            let t = l.partialize(o({}, r()));
                            l.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = l.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), l.blacklist && l.blacklist.forEach(e => delete t[e]);
                            let n = p({
                                state: t,
                                version: l.version
                            }).then(e => a.setItem(l.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        S = i.setState;
                    i.setState = (e, t) => {
                        S(e, t), m()
                    };
                    let E = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), m()
                        }, r, i),
                        h = () => {
                            var e;
                            if (!a) return;
                            d = !1, c.forEach(e => e(r()));
                            let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, r())) || void 0;
                            return u(a.getItem.bind(a))(l.name).then(e => {
                                if (e) return l.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === l.version) return e.state;
                                    if (l.migrate) return l.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(s = l.merge(e, null != (t = r()) ? t : E), !0), m()
                            }).then(() => {
                                null == t || t(s, void 0), d = !0, f.forEach(e => e(s))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            l = o(o({}, l), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, l.name)
                        },
                        rehydrate: () => h(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, h(), s || E
                }
        },
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
        880865: function(e, t, n) {
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
            var r = n("990746"),
                i = n("913144"),
                a = n("843823"),
                s = n("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), r.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
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
            var r = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
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
            var r = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
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
            var r = n("920040");
            n("773670");
            var i = n("77078"),
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
                    analyticsLocations: m
                } = e;
                d && (0, a.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let S = d ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return (0, i.openModalLazy)(async () => {
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
                        analyticsLocations: m
                    })
                }, {
                    modalKey: s.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: S
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

            function i(e) {
                return {
                    textValue: e,
                    richValue: s(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return i
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
            var r = n("990746"),
                i = n("913144"),
                a = n("49111");

            function s(e, t, n, r) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: a,
                    onSuccess: s,
                    onFailure: l
                } = t;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: a,
                    onSuccess: s,
                    onFailure: l
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function u(e, t) {
                let n = await r.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: r
                    })
                }
            }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return h
                },
                executeMessageComponentInteraction: function() {
                    return I
                },
                handleInteractionResponse: function() {
                    return T
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return _
                },
                canRetryInteractionData: function() {
                    return g
                }
            });
            var r, i, a = n("500947"),
                s = n("990746"),
                l = n("913144"),
                o = n("819689"),
                u = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                p = n("809810"),
                m = n("3765"),
                S = n("606981"),
                E = n("49111");

            function h(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
            }
            let I = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: r,
                    customId: i,
                    indices: l,
                    applicationId: o,
                    channelId: m,
                    guildId: S,
                    localState: h
                } = e, I = a.default.fromTimestamp(Date.now());
                if (!p.default.canQueueInteraction(n, I)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(I, {
                    messageId: n,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: l
                    },
                    onFailure: (e, t) => C(m, e, t)
                }), null != h && (0, f.queueInteractionComponentState)(n, I, h, l);
                let _ = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: I,
                    guild_id: S,
                    channel_id: m,
                    message_flags: r,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: i,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === u.ComponentType.STRING_SELECT || e.type === u.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(h)
                    }
                };
                await s.default.post({
                    url: E.Endpoints.INTERACTIONS,
                    body: _,
                    timeout: 3e3
                }, e => {
                    T(I, m, S, e)
                })
            }, C = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, T = (e, t, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === E.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, S.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, f.setFailed)(e, void 0, r.body.message);
                            return
                        }(0, f.setFailed)(e, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let _ = (e, t) => {
                var n;
                let r = null == t ? void 0 : t.state,
                    s = e.state === E.MessageStates.SENT && h(e.id) < Date.now();
                let l = e.state === E.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (o && r === m.InteractionState.QUEUED || d && e.state === E.MessageStates.SENDING && null != t) return i.SENDING;
                if (o && r === m.InteractionState.CREATED || e.hasFlag(E.MessageFlags.LOADING) && !s) return i.CREATED;
                if (null != e.interaction && e.hasFlag(E.MessageFlags.LOADING) && s) return i.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(E.MessageFlags.LOADING) && l) return i.TIMED_OUT;
                else if (d && e.state === E.MessageStates.SEND_FAILED) return i.FAILED
            };

            function g(e) {
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
                    return i
                }
            });
            let r = "_errors";

            function i(e) {
                return function e(t, n) {
                    let i = t[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, a] of Object.entries(t))
                        if (i !== r && null != a && "object" == typeof a) return e(a, null != n ? n : i);
                    return null
                }(e, void 0)
            }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("920040"),
                i = n("773670"),
                a = n("462567"),
                s = n("990746"),
                l = n("850068"),
                o = n("253981"),
                u = n("642906"),
                d = n("85336"),
                c = n("149833"),
                f = n("523591"),
                p = n("153727"),
                m = n("650484"),
                S = n("49111"),
                E = n("646718");

            function h(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    isGift: h,
                    browserCheckoutState: I,
                    browserCheckoutStateLoadId: C,
                    contextMetadata: T
                } = (0, u.usePaymentContext)(), [_, g] = i.useState(!1);
                return i.useEffect(() => {
                    var e;
                    !_ && (g(!0), (0, l.startBrowserCheckout)(T.loadId), ! function(e, t, n, r) {
                        let i = S.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            l = new URL(o.default.makeUrl(S.Routes.BILLING_LOGIN_HANDOFF)),
                            u = (0, a.v4)();
                        l.searchParams.append("handoff_key", u), l.searchParams.append("redirect_to", i), s.default.post({
                            url: S.Endpoints.HANDOFF,
                            body: {
                                key: u
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            l.searchParams.append("handoff_token", e.body.handoff_token), window.open(l.href)
                        }, () => {
                            r()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : E.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h, T.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
                }, [n, h, _, g, T, t]), i.useEffect(() => {
                    C === T.loadId && I === f.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
                }, [I, C, T, t]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.default, {}), (0, r.jsx)(m.PaymentPortalBody, {
                        children: (0, r.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, r.jsx)(m.PaymentPortalFooter, {
                        children: (0, r.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
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
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var a = i
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
            var r = n("920040");
            n("773670");
            var i = n("77078"),
                a = n("177998"),
                s = n("145131"),
                l = n("85336"),
                o = n("782340");
            let u = () => (0, r.jsx)("div", {
                    children: (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/bold",
                        children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, r.jsx)("div", {
                        children: (0, r.jsxs)(i.ModalFooter, {
                            justify: s.default.Justify.BETWEEN,
                            align: s.default.Align.CENTER,
                            children: [(0, r.jsx)(i.Button, {
                                color: i.Button.Colors.BRAND,
                                onClick: () => {
                                    t(l.Step.ADD_PAYMENT_STEPS)
                                },
                                children: o.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, r.jsx)(a.default, {
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
                    return S
                }
            });
            var r = n("920040"),
                i = n("773670"),
                a = n("161179"),
                s = n.n(a),
                l = n("210721"),
                o = n("491523"),
                u = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("642906"),
                p = n("650484"),
                m = n("367767");

            function S(e) {
                var t, n;
                let a, {
                        handleClose: S,
                        planGroup: E,
                        onSubscriptionConfirmation: h,
                        renderPurchaseConfirmation: I,
                        postSuccessGuild: C,
                        followupSKUInfo: T
                    } = e,
                    {
                        activeSubscription: _,
                        isGift: g,
                        paymentSources: y,
                        paymentSourceId: A,
                        selectedPlan: P,
                        selectedSkuId: v,
                        step: N,
                        updatedSubscription: x,
                        selectedGiftStyle: M,
                        startingPremiumSubscriptionPlanIdRef: O
                    } = (0, f.usePaymentContext)();
                s(null != P, "Expected plan to selected"), s(null != v, "Expected selectedSkuId"), s(null != N, "Step should be set");
                let b = i.useCallback(() => {
                        S(), null == h || h()
                    }, [S, h]),
                    {
                        giftRecipient: R
                    } = (0, f.usePaymentContext)(),
                    L = (0, d.useGetGiftCode)(v, g),
                    [D, j] = i.useState(!1),
                    [k, w] = i.useState(!1),
                    [U, F] = i.useState();
                return i.useEffect(() => {
                    if (!g || null == R || null == L || D || k || (0, d.isCustomGiftEnabled)(R)) return;
                    let e = o.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && (w(!0), (0, l.sendGiftMessage)(R, L).then(() => {
                        w(!1), null == h || h(), j(!0)
                    }).catch(e => {
                        w(!1), F(e), j(!0)
                    }))
                }, [g, R, L, D, j, w, k, F, h]), a = null != I ? I(P, b, x) : g ? (0, r.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: P.id,
                    selectedGiftStyle: M,
                    onClose: b,
                    hasSentMessage: D,
                    giftMessageError: U,
                    isSendingMessage: k
                }) : O.current === P.id ? (0, r.jsx)(u.default, {
                    planId: P.id,
                    postSuccessGuild: C,
                    onClose: b,
                    paymentSourceType: null === (t = y[null != A ? A : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, r.jsx)(u.default, {
                    followupSKUInfo: T,
                    startingPremiumSubscriptionPlanId: O.current,
                    planId: P.id,
                    onClose: b,
                    isDowngrade: null != _ && (0, c.subscriptionCanDowngrade)(_, P.id, E),
                    paymentSourceType: null === (n = y[null != A ? A : ""]) || void 0 === n ? void 0 : n.type
                }), (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(p.PaymentPortalBody, {
                        children: [(0, r.jsx)(m.default, {}), a]
                    })
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return L
                },
                STEPS: function() {
                    return k
                },
                default: function() {
                    return w
                }
            });
            var r = n("920040"),
                i = n("773670"),
                a = n("498225"),
                s = n("913144"),
                l = n("775433"),
                o = n("812204"),
                u = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                p = n("659632"),
                m = n("642906"),
                S = n("85336"),
                E = n("385179"),
                h = n("262683"),
                I = n("946359"),
                C = n("307367"),
                T = n("724269"),
                _ = n("99836"),
                g = n("263820"),
                y = n("992049"),
                A = n("176108"),
                P = n("97461"),
                v = n("403365"),
                N = n("498475"),
                x = n("254350"),
                M = n("49111"),
                O = n("646718"),
                b = n("782340");
            let R = [S.Step.PLAN_SELECT, S.Step.ADD_PAYMENT_STEPS, S.Step.REVIEW, S.Step.CONFIRM];

            function L(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: h,
                    giftMessage: I,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: _,
                    isGift: y = !1,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: P,
                    openInvoiceId: v,
                    onSubscriptionConfirmation: N,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: b,
                    followupSKUInfo: R,
                    renderHeader: L,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: k,
                    skuId: w,
                    returnRef: U
                } = e, {
                    analyticsLocations: F
                } = (0, u.default)();
                i.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && s.default.wait(() => (0, l.fetchPremiumSubscriptionPlans)())
                }, []), g.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    giftRecipient: B,
                    step: G
                } = (0, m.usePaymentContext)(), H = (0, p.isCustomGiftEnabled)(B) && G === S.Step.PLAN_SELECT;
                return null != B && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, r.jsx)(E.PaymentModal, {
                    analyticsLocations: F,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: a,
                    analyticsSubscriptionType: M.SubscriptionTypes.PREMIUM,
                    onComplete: o,
                    transitionState: f,
                    initialPlanId: h,
                    giftMessage: I,
                    subscriptionTier: C,
                    onClose: T,
                    trialId: _,
                    isGift: y,
                    trialFooterMessageOverride: A,
                    reviewWarningMessage: P,
                    planGroup: O.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: v,
                    onSubscriptionConfirmation: N,
                    renderPurchaseConfirmation: x,
                    postSuccessGuild: b,
                    followupSKUInfo: R,
                    renderHeader: L,
                    applicationId: D,
                    guildId: j,
                    referralTrialOfferId: k,
                    skuId: w,
                    shakeWhilePurchasing: !0,
                    isLargeModal: H,
                    returnRef: U
                })
            }

            function D(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    isGift: n,
                    selectedSkuId: r
                } = (0, m.usePaymentContext)();
                return (0, A.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function j(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: i
                } = e, {
                    paymentSources: a,
                    selectedSkuId: s,
                    isGift: l
                } = (0, m.usePaymentContext)(), o = (0, x.default)({
                    isGift: l,
                    skuId: s,
                    referralTrialOfferId: i
                }), u = D(o);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(h.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: R,
                        onReturn: () => {
                            let e = Object.values(a).length < 1 && null == t ? S.Step.PLAN_SELECT : S.Step.REVIEW;
                            u && (e = S.Step.REVIEW), n(e, {
                                trackedFromStep: S.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let k = [{
                key: null,
                renderStep: e => (0, r.jsx)(E.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: S.Step.SKU_SELECT,
                renderStep: e => (0, r.jsx)(v.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: S.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, r.jsx)(N.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: S.Step.PLAN_SELECT,
                renderStep: e => (0, r.jsx)(P.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : b.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: S.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(j, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? null : b.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: S.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, r.jsx)(C.default, {
                    ...e
                })
            }, {
                key: S.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, r.jsx)(T.default, {})
            }, {
                key: S.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, r.jsx)(I.default, {})
            }, {
                key: S.Step.REVIEW,
                renderStep: e => (0, r.jsx)(_.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = D(e);
                        return t ? b.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : b.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: S.Step.CONFIRM,
                renderStep: e => (0, r.jsx)(y.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function w(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: i,
                        isGift: s,
                        giftRecipient: l,
                        loadId: d,
                        defaultPlanId: c,
                        referralCode: p
                    } = e;
                if (null != i && !Object.values(O.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
                return (0, r.jsx)(n, {
                    children: (0, r.jsx)(m.PaymentContextProvider, {
                        loadId: d,
                        activeSubscription: t,
                        stepConfigs: k,
                        skuIDs: [...O.ACTIVE_PREMIUM_SKUS],
                        isGift: s,
                        defaultPlanId: c,
                        referralCode: p,
                        giftRecipient: null == l ? void 0 : l,
                        children: (0, r.jsx)(L, {
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
            var r = n("920040"),
                i = n("773670"),
                a = n("161179"),
                s = n.n(a),
                l = n("744196"),
                o = n("77078"),
                u = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("53253"),
                p = n("669073"),
                m = n("154889"),
                S = n("917247"),
                E = n("358821"),
                h = n("570727"),
                I = n("697218"),
                C = n("10514"),
                T = n("145131"),
                _ = n("659632"),
                g = n("701909"),
                y = n("719923"),
                A = n("642906"),
                P = n("85336"),
                v = n("153727"),
                N = n("628738"),
                x = n("650484"),
                M = n("310093"),
                O = n("367767"),
                b = n("49111"),
                R = n("646718"),
                L = n("782340"),
                D = n("283655");

            function j(e) {
                var t, n, a;
                let {
                    giftMessage: j,
                    handleStepChange: k,
                    initialPlanId: w,
                    subscriptionTier: U,
                    trialId: F,
                    referralTrialOfferId: B,
                    customGiftMessage: G,
                    setCustomGiftMessage: H
                } = e, {
                    activeSubscription: W,
                    hasFetchedSubscriptions: V,
                    isGift: Y,
                    paymentSourceId: K,
                    paymentSources: z,
                    selectedSkuId: Z,
                    selectedPlan: X,
                    step: Q,
                    defaultPlanId: q,
                    priceOptions: J,
                    isPremium: $,
                    selectedGiftStyle: ee,
                    setSelectedGiftStyle: et,
                    giftRecipient: en
                } = (0, A.usePaymentContext)(), {
                    enabled: er
                } = f.default.useExperiment({
                    location: "d17fd6_1"
                }, {
                    autoTrackExposure: !1
                }), ei = (0, f.useIsSeasonalGiftingActive)();
                i.useEffect(() => {
                    ei && Y && f.default.trackExposure({
                        location: "d17fd6_2"
                    })
                }, [ei, Y]);
                let ea = er && ei && Y && Z === R.PremiumSubscriptionSKUs.TIER_2,
                    es = null != K ? z[K] : null,
                    {
                        newPlans: el
                    } = d.default.useExperiment({
                        location: "d17fd6_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eo = (0, l.default)([I.default], () => I.default.getCurrentUser()),
                    eu = !Y && null != Z && Z === R.PremiumSubscriptionSKUs.TIER_2 && null != eo && eo.hasHadPremium() && V && null == W && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(es),
                    ed = (0, S.usePremiumTrialOffer)(B),
                    ec = !Y && null != ed && null != Z && (0, R.SubscriptionTrials)[ed.trial_id].skus.includes(Z),
                    ef = (0, m.usePremiumDiscountOffer)(),
                    ep = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === Z),
                    em = !Y && null != ef && null != Z && ep,
                    eS = null !== (n = ec || em) && void 0 !== n && n,
                    {
                        defaultToMonthlyPlan: eE
                    } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
                        location: "d17fd6_4"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eh = i.useMemo(() => (0, y.getPremiumPlanOptions)({
                        skuId: Z,
                        isPremium: $,
                        multiMonthPlans: eu ? el : [],
                        currentSubscription: W,
                        isGift: Y,
                        isEligibleForTrial: ec,
                        defaultPlanId: q,
                        defaultToMonthlyPlan: eE
                    }), [Z, $, el, W, eu, Y, ec, q, eE]),
                    eI = em && eh.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eh[0],
                    eC = (0, l.default)([C.default], () => C.default.get(eI)),
                    eT = [{
                        planId: null == eC ? void 0 : eC.id,
                        quantity: 1
                    }],
                    [e_, eg] = i.useState(eS),
                    [ey, eA] = (0, c.useSubscriptionInvoicePreview)({
                        items: eT,
                        renewal: !1,
                        preventFetch: !eS,
                        applyEntitlements: !0,
                        trialId: F,
                        paymentSourceId: J.paymentSourceId,
                        currency: J.currency
                    });
                i.useEffect(() => {
                    if (eS) eg((null == ey ? void 0 : ey.subscriptionPeriodEnd) == null)
                }, [ey, eS]), (0, u.default)("Payment Modal Plan Select Step", e_, 5, {
                    proratedInvoicePreview: ey,
                    proratedInvoiceError: eA,
                    isEligibleForOffer: eS
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eP = null !== (a = null == eA ? void 0 : eA.message) && void 0 !== a ? a : L.default.Messages.ERROR_GENERIC_TITLE,
                    ev = eS && null == eA,
                    eN = eS && null != eA;
                return ev && (null == ey ? void 0 : ey.subscriptionPeriodEnd) == null ? (0, r.jsx)(N.default, {}) : (s(null != Q, "Step should be set"), s(eh.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(M.GiftNote, {
                        giftMessage: j
                    }), !(0, _.isCustomGiftEnabled)(en) && (0, r.jsx)(v.default, {
                        isEligibleForTrial: ec
                    }), (0, r.jsxs)(x.PaymentPortalBody, {
                        children: [ev && (0, r.jsx)("hr", {
                            className: D.planSelectSeparatorUpper
                        }), (0, r.jsx)(E.default, {
                            isGift: Y,
                            plan: X
                        }), (0, r.jsx)(O.default, {}), eN ? (0, r.jsx)(o.FormErrorBlock, {
                            children: eP
                        }) : (0, r.jsx)(h.PremiumSwitchPlanSelectBody, {
                            isGift: Y,
                            selectedGiftStyle: ee,
                            setSelectedGiftStyle: et,
                            planOptions: eh,
                            eligibleForMultiMonthPlans: eu,
                            isSeasonalGift: ea,
                            referralTrialOfferId: B,
                            selectedPlanId: null == X ? void 0 : X.id,
                            subscriptionPeriodEnd: null == ey ? void 0 : ey.subscriptionPeriodEnd,
                            customGiftMessage: G,
                            setCustomGiftMessage: H,
                            discountInvoiceItems: em ? null == ey ? void 0 : ey.invoiceItems : void 0
                        }), ev && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("hr", {
                                className: D.planSelectSeparatorLower
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: L.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: g.default.getArticleURL(b.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, r.jsx)(x.PaymentPortalFooter, {
                        children: (0, r.jsx)(o.ModalFooter, {
                            justify: T.default.Justify.BETWEEN,
                            align: T.default.Align.CENTER,
                            children: (0, r.jsx)(h.PremiumSwitchPlanSelectFooter, {
                                onStepChange: k,
                                isGift: Y,
                                onBackClick: () => k(P.Step.SKU_SELECT),
                                showBackButton: null == w && null == U,
                                planOptions: eh,
                                shouldRenderUpdatedPaymentModal: ev,
                                isTrial: ec
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
                    return E
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("77078"),
                a = n("917247"),
                s = n("279171"),
                l = n("49735"),
                o = n("719923"),
                u = n("642906"),
                d = n("85336"),
                c = n("176108"),
                f = n("254350"),
                p = n("646718"),
                m = n("782340"),
                S = n("448551");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: i
                } = e, {
                    setSelectedSkuId: s,
                    activeSubscription: l,
                    isGift: m,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, u.usePaymentContext)(), I = (0, a.usePremiumTrialOffer)(i);
                return (0, r.jsx)(h, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: r,
                            handleStepChange: i,
                            isGift: a,
                            userTrialOffer: s,
                            setSelectedPlanId: l,
                            startedPaymentFlowWithPaymentSources: u
                        } = e;
                        r(n);
                        let m = d.Step.PLAN_SELECT,
                            S = (0, o.getPremiumSkuIdForSubscription)(t);
                        (S === p.PremiumSubscriptionSKUs.TIER_1 || S === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !a && (m = d.Step.WHAT_YOU_LOSE);
                        let E = (0, f.isInTrialRedemption)({
                                userTrialOffer: s,
                                isGift: a,
                                skuId: n
                            }),
                            h = (0, c.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: a,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: u
                            });
                        if (m !== d.Step.WHAT_YOU_LOSE && h) {
                            m = d.Step.REVIEW;
                            let e = (0, c.getDefaultPlanOneStepCheckout)(n, t);
                            l(e)
                        }
                        i(m, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: l,
                        newSkuId: e,
                        setSelectedSkuId: s,
                        handleStepChange: t,
                        isGift: m,
                        userTrialOffer: I,
                        startedPaymentFlowWithPaymentSources: S.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: m
                })
            }

            function h(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: a
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        className: S.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: m.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: S.skuSelectModalContent,
                        children: [(0, r.jsx)(s.default, {
                            fromBoostCancelModal: !1,
                            className: S.legacyPricingNotice
                        }), (0, r.jsx)(l.default, {
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
                    return E
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("161179"),
                a = n.n(i),
                s = n("819855"),
                l = n("77078"),
                o = n("841098"),
                u = n("360262"),
                d = n("719923"),
                c = n("642906"),
                f = n("85336"),
                p = n("176108"),
                m = n("782340"),
                S = n("953310");

            function E(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, i = (0, o.default)(), {
                    activeSubscription: E,
                    selectedSkuId: h,
                    setSelectedPlanId: I,
                    isGift: C,
                    startedPaymentFlowWithPaymentSourcesRef: T
                } = (0, c.usePaymentContext)(), _ = null != E ? (0, d.getPremiumPlanItem)(E) : null, g = null != _ ? (0, d.getDisplayPremiumType)(_.planId) : null, y = null != _ ? (0, d.getPremiumType)(_.planId) : null, A = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: C,
                    selectedSkuId: h,
                    startedPaymentFlowWithPaymentSources: T.current
                });
                return a(null != y, "Expected premium type"), (0, r.jsx)(u.default, {
                    premiumType: y,
                    titleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: m.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: g
                    }),
                    footer: (0, r.jsxs)("div", {
                        className: S.whatYouLoseButtonContainer,
                        children: [(0, r.jsx)(l.Button, {
                            onClick: () => {
                                if (A) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(h, E);
                                    I(e), t(f.Step.REVIEW)
                                } else t(f.Step.PLAN_SELECT)
                            },
                            children: m.default.Messages.CONTINUE
                        }), (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, s.isThemeDark)(i) ? l.Button.Colors.WHITE : l.Button.Colors.PRIMARY,
                            onClick: n,
                            children: m.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
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
            var r = n("773670"),
                i = n("377849"),
                a = n.n(i),
                s = n("638800"),
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
                let [e, t] = r.useState(() => u.isAfter(Date.now()));
                return r.useEffect(() => {
                    let n = new s.Timeout,
                        r = () => {
                            let e = u.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : r()
                            })
                        };
                    return e && r(), () => n.stop()
                }), e
            }
            var f = d
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var a = i
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var a = i
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("641078"),
                a = n("132554"),
                s = n("646718"),
                l = n("782340"),
                o = n("880865"),
                u = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, u = (0, i.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== s.PremiumSubscriptionSKUs.TIER_2 || !u ? null : (0, r.jsx)(a.default, {
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
            var r = n("920040");
            n("773670");
            var i = n("77078"),
                a = n("400307"),
                s = n("646718"),
                l = n("303617");

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, r.jsx)(i.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, r.jsx)(a.Tier2Card, {
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
                return (0, r.jsx)(i.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, r.jsx)(a.Tier0Card, {
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
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o, {
                        onClick: () => t(s.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, r.jsx)(u, {
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
            var r = n("920040");
            n("773670");
            var i = n("575482"),
                a = n.n(i),
                s = n("77078"),
                l = n("978679"),
                o = n("101619");

            function u(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: i,
                    textColor: u = "always-white"
                } = e;
                return (0, r.jsxs)("div", {
                    className: a(o.bannerContainer, t),
                    children: [null == i ? null : (0, r.jsx)("img", {
                        alt: "",
                        className: o.banner,
                        src: i
                    }), (0, r.jsxs)("div", {
                        className: o.textContainer,
                        children: [(0, r.jsx)(l.default, {
                            className: o.giftIcon
                        }), (0, r.jsx)(s.Heading, {
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
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return y
                },
                closeThreadSidebar: function() {
                    return A
                },
                closeAndClearThreadSidebar: function() {
                    return P
                }
            });
            var r = n("161179"),
                i = n.n(r),
                a = n("427964"),
                s = n.n(a),
                l = n("913144"),
                o = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                m = n("845579"),
                S = n("474643"),
                E = n("18494"),
                h = n("800762"),
                I = n("659500"),
                C = n("648564"),
                T = n("49111"),
                _ = n("724210");

            function g(e, t, n) {
                u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let r = !s.isEmpty(h.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                i(null != e.parent_id, "all threads must have parents");
                let a = E.default.getChannelId();
                e.parent_id !== a && !(0, _.isGuildHomeChannel)(a) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, _.isGuildHomeChannel)(a) ? _.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? C.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    I.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function y(e, t, n) {
                i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let r = S.default.getDraft(e.id, S.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = S.default.getDraft(e.id, S.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", S.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, S.DraftType.FirstThreadMessage)
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

            function A(e, t) {
                (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, _.isGuildHomeChannel)(t) ? _.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
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
                    draftType: S.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: S.DraftType.ThreadSettings
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
            var r = n("498225"),
                i = n("913144"),
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
            class d extends r.default.PersistedStore {
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
            var c = new d(i.default, {
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
        188525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return m
                }
            });
            var r = n("920040"),
                i = n("773670"),
                a = n("575482"),
                s = n.n(a),
                l = n("77078"),
                o = n("474293"),
                u = n("145131"),
                d = n("782340"),
                c = n("8463");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends i.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: n,
                        mode: i
                    } = this.props, a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, r.jsx)("input", {
                        className: s((0, o.getClass)(c, "input", i), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: n,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": a
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: n,
                        hideMessage: i,
                        className: a,
                        buttonLook: p
                    } = this.props, m = null != i;
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
                            className: s((0, o.getClass)(c, "copyInput", n), a),
                            ref: this.containerRef,
                            children: (0, r.jsxs)(u.default, {
                                className: c.layout,
                                children: [(0, r.jsxs)(u.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(m), m ? (0, r.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: i
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
                    super(...e), this.inputRef = i.createRef(), this.containerRef = i.createRef(), this.handleButtonClick = () => {
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
            var m = p
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("926001"),
                s = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
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
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("509317"),
                s = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
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
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("578478"),
                s = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
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
            var r = n("228256");
            let {
                Layer: i,
                LayerContainer: a,
                LayerProvider: s
            } = (0, r.createLayer)("Chat"), l = a, o = s;
            var u = i
        }
    }
]);