(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85878"], {
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        6916: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a13348dd889e2a36b788.gif"
        },
        12412: function(e, t, n) {
            "use strict";
            e.exports = n.p + "91d3c1acae2f11c57634.png"
        },
        54400: function(e, t, n) {
            "use strict";
            e.exports = n.p + "04c2807fcf052140a12f.gif"
        },
        122574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7548ee8ba4e2f2600b69.png"
        },
        463095: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f597cc1d129f34c8f135.gif"
        },
        733105: function(e, t, n) {
            "use strict";
            e.exports = n.p + "35d07cb23db04126d51b.png"
        },
        749003: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dbfa9f354f49f4a6a61e.gif"
        },
        918927: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9b5c79ffc65b32de7d01.png"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return o
                },
                fetchUserEntitlements: function() {
                    return a
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("271560"),
                s = n("49111");

            function o(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function a(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: l
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: l
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                a = n("782340"),
                u = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: p,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: I,
                        errorMessage: S,
                        retrySuccess: m
                    } = this.state, g = r.Children.count(l) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, h = null != p ? (0, i.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: p
                            })
                        })]
                    }) : null, A = m ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: E,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, g, A, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: I,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : S
                                    }) : null, h]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === I.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return o
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return a
                },
                insertAccessibilityLabelElements: function() {
                    return u
                }
            });
            var i = n("476765"),
                r = n("782340");
            let l = (0, i.uid)(),
                s = (0, i.uid)(),
                o = (0, i.uid)(),
                a = (0, i.uid)();

            function u() {
                [{
                    id: l,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: o,
                    text: r.default.Messages.REACTIONS
                }, {
                    id: a,
                    text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, i = document.getElementById(t);
                    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
                })
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = r || (r = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return o
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205"),
                r = n("15733");
            let l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function o() {
                let {
                    paymentsBlocked: e
                } = l.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = s.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var a = l
        },
        473591: function(e, t, n) {
            "use strict";
            let i, r, l, s, o, a;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var u = n("446674"),
                d = n("913144");
            let c = !1,
                f = !1,
                E = null,
                _ = {},
                p = {},
                T = {},
                I = {};

            function S() {
                i = void 0, r = void 0, l = void 0, s = void 0, o = void 0, E = null
            }
            class m extends u.default.Store {
                getSettings(e) {
                    if (null != e) return T[e]
                }
                getProfile(e) {
                    return null == e ? null : _[e]
                }
                getGeneratedPersonality() {
                    return a
                }
                getPendingPersonality() {
                    return i
                }
                getPendingNick() {
                    return r
                }
                getErrors() {
                    return E
                }
                hasPendingChanges() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== s || void 0 !== o
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: l,
                        pendingNick: r,
                        pendingPersonality: i,
                        pendingBanner: s,
                        pendingThemeColors: o
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = I[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let i = null !== (t = I[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        r = Date.now(),
                        l = r - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == i ? void 0 : i.isFetching) && l
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = p[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            m.displayName = "ClydeStore";
            var g = new m(d.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, T[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = I[t];
                    I[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    let {
                        personality: t,
                        isGenerated: n
                    } = e;
                    i = t, n && (a = t)
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    let {
                        nick: t
                    } = e;
                    r = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    l = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    s = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    E = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, T[t.guild_id] = t, S()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, E = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: S,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = p[t];
                    p[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    p[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = p[t];
                    p[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    f = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    f = !1
                }
            })
        },
        634544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                o = n("118503"),
                a = n("427459"),
                u = n("782340"),
                d = n("884737"),
                c = e => {
                    let t, n, r, {
                            guildFeature: c,
                            guild: f,
                            className: E,
                            hideTooltip: _ = !1,
                            tooltipPosition: p = "left",
                            onClick: T
                        } = e,
                        I = f.hasFeature(c),
                        S = (0, a.minimumRequiredTierForGuildFeature)(c);
                    return (I ? (null != S && (r = u.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.default, {
                            className: d.unlockedIcon
                        }), (0, i.jsx)(s.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: u.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != S && (r = u.default.Messages.CLICK_TO_LEARN_MORE), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.default, {
                            className: d.icon
                        }), (0, i.jsx)(s.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: null != S && (0, a.getShortenedTierName)(S)
                        })]
                    })), n = _ || null == r ? (0, i.jsx)("div", {
                        className: l(d.availabilityIndicator, E),
                        children: t
                    }) : (0, i.jsx)(s.Tooltip, {
                        position: p,
                        text: r,
                        children: e => (0, i.jsx)("div", {
                            ...e,
                            className: l(d.availabilityIndicator, E),
                            children: t
                        })
                    }), null == T || I) ? n : (0, i.jsx)(s.Clickable, {
                        onClick: T,
                        className: d.clickable,
                        children: n
                    })
                }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                s = n("38654"),
                o = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    s = !a.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, p = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, T = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: p,
                submitVerificationForm: T
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return o
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return p
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return T
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                _ = 1e3,
                p = 300,
                T = "Membership Gating",
                I = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, i.default)(e => s),
                a = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                s = n("50926"),
                o = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, o.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        354460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGuildFeatureFromUploadType: function() {
                    return l
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return s
                }
            });
            var i = n("49111"),
                r = n("75015");

            function l(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === r.UploadTypes.GUILD_BANNER) return n ? i.GuildFeatures.ANIMATED_BANNER : i.GuildFeatures.BANNER
            }

            function s(e) {
                return e === r.UploadTypes.AVATAR || e === r.UploadTypes.BANNER
            }
        },
        420333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                s = n("77078"),
                o = n("812204"),
                a = n("685665"),
                u = n("473591"),
                d = n("634544"),
                c = n("694187"),
                f = n("305961"),
                E = n("162771"),
                _ = n("697218"),
                p = n("471671"),
                T = n("887718"),
                I = n("818643"),
                S = n("216422"),
                m = n("599110"),
                g = n("719923"),
                h = n("354460"),
                A = n("424960"),
                N = n("49111"),
                C = n("75015"),
                v = n("991207"),
                O = n("782340"),
                M = n("461300");
            let R = [{
                gif: n("6916"),
                png: n("12412")
            }, {
                gif: n("463095"),
                png: n("733105")
            }, {
                gif: n("749003"),
                png: n("918927")
            }, {
                gif: n("54400"),
                png: n("122574")
            }];

            function y(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, l] = r.useState(!1);
                return (0, i.jsx)("div", {
                    className: M.gifGrid,
                    onMouseMove: () => l(!0),
                    onMouseLeave: () => l(!1),
                    children: R.map(e => (0, i.jsx)("div", {
                        className: M.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function L(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, i.jsx)("div", {
                    className: M.pillWrapper,
                    children: (0, i.jsx)(d.default, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function P(e) {
                let {
                    uploadType: t,
                    guild: n,
                    showNitroWheel: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: M.optionBoxText,
                    children: [(0, i.jsx)(L, {
                        guild: n,
                        guildFeature: (0, h.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, i.jsxs)("div", {
                        className: M.optionBoxDescription,
                        children: [(0, h.shouldShowPremiumIconForGIFPickerOption)(t) && (0, i.jsx)(s.TooltipContainer, {
                            className: M.nitroWheelFlairContainer,
                            text: O.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: r && (0, i.jsx)(S.default, {
                                className: M.nitroWheelFlair
                            })
                        }), O.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function D(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: M.optionBoxText,
                    children: [(0, i.jsx)(L, {
                        guildFeature: (0, h.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: r
                    }), (0, i.jsx)("div", {
                        className: M.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function F(e) {
                let {
                    transitionState: t,
                    onClose: d,
                    onComplete: S,
                    uploadType: h,
                    maxFileSizeBytes: R,
                    showUpsellHeader: L,
                    filters: F,
                    analyticsLocation: b,
                    analyticsLocations: U = [],
                    modalSubTitle: x,
                    imageSpecifications: w,
                    modalTitle: G = O.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: B = O.default.Messages.UPLOAD_IMAGE
                } = e, k = (0, l.useStateFromStores)([p.default], () => p.default.isFocused()), H = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, l.useStateFromStores)([E.default], () => E.default.getGuildId()), j = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(V)), W = (0, l.useStateFromStores)([u.default], () => u.default.isEditingClydeProfile()), {
                    reducedMotion: Y
                } = r.useContext(s.AccessibilityPreferencesContext), K = (0, s.useModalContext)(), z = !g.default.canUseAnimatedAvatar(H) && h === C.UploadTypes.AVATAR && !W, {
                    analyticsLocations: X
                } = (0, a.default)(U, o.default.SELECT_IMAGE_MODAL);

                function q(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    d(), S(e, t, n)
                }
                return r.useEffect(() => {
                    z && m.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: X
                    }), m.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: b
                    })
                }, [z, b, X]), (0, i.jsxs)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.SMALL,
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        className: M.modalHeader,
                        separator: !1,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(s.FormTitle, {
                                tag: s.FormTitleTags.H1,
                                className: M.modalTitle,
                                children: G
                            }), null != x ? (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: x
                            }) : null]
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            onClick: d,
                            className: M.modalCloseButton
                        })]
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: M.modalContent,
                        children: [(0, i.jsxs)("div", {
                            className: M.imagePickerContainer,
                            children: [(0, i.jsxs)(s.Clickable, {
                                className: M.optionBox,
                                children: [(0, i.jsx)("div", {
                                    className: M.contentCircle,
                                    children: (0, i.jsx)(I.default, {
                                        className: M.uploadIcon
                                    })
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(D, {
                                        title: B,
                                        uploadType: h,
                                        guild: j
                                    })
                                }), (0, i.jsx)(c.default, {
                                    onChange: function(e, t) {
                                        if (t.type === v.FileTypes.MP4) return q(e, t);
                                        (0, s.openModalLazy)(async () => {
                                            let {
                                                default: r
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, i.jsx)(r, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: q,
                                                uploadType: h,
                                                showUpsellHeader: L,
                                                allowSkip: !0,
                                                analyticsPage: null == b ? void 0 : b.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: K
                                        })
                                    },
                                    maxFileSizeBytes: R,
                                    onFileSizeError: function() {
                                        d(), (0, A.default)(R)
                                    },
                                    filters: F
                                })]
                            }), (0, i.jsxs)(s.Clickable, {
                                className: M.optionBox,
                                onClick: function() {
                                    (0, s.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, i.jsx)(e, {
                                            uploadType: h,
                                            onComplete: (e, t) => q(e, t, !0),
                                            showUpsellHeader: L,
                                            analyticsPage: null == b ? void 0 : b.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: K
                                    })
                                },
                                children: [(0, i.jsxs)("div", {
                                    className: M.contentCircle,
                                    children: [(0, i.jsx)(y, {
                                        shouldAnimate: k && !Y.enabled
                                    }), (0, i.jsx)("div", {
                                        className: M.gifIconContainer,
                                        children: (0, i.jsx)(T.default, {
                                            className: M.gifIcon
                                        })
                                    })]
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(P, {
                                        uploadType: h,
                                        guild: j,
                                        showNitroWheel: !W
                                    })
                                })]
                            })]
                        }), null != w ? (0, i.jsx)(s.Text, {
                            className: M.imageSpecifications,
                            variant: "text-sm/normal",
                            children: w
                        }) : null]
                    })]
                })
            }
        },
        424960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("336522"),
                r = n("254490"),
                l = n("782340");

            function s(e) {
                (0, i.openUploadError)({
                    title: l.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: l.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, r.sizeString)(e)
                    })
                })
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return N
                },
                updateImpersonatedData: function() {
                    return C
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                s = n("42203"),
                o = n("923959"),
                a = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                p = n("507950"),
                T = n("49111"),
                I = n("724210");

            function S(e, t) {
                E.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), h(e)
            }

            function m(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(T.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), h(e))
            }

            function g(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function h(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    i = null != t && (0, I.isStaticChannelRoute)(t);
                if (!i && !d.default.can(T.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(T.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function N(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = a.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && A(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(e, t) {
                m(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = i.parse(n),
                    o = (0, r.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                s = n("719923"),
                o = n("782340");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, o = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: o ? i : l
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), s = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = u({
                        user: r,
                        config: s
                    }), f = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: f,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                s = n("112679"),
                o = n("55689"),
                a = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: p,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: m,
                    analyticsSourceLocation: g,
                    isGift: h = !1,
                    giftMessage: A,
                    subscriptionTier: N,
                    trialId: C,
                    postSuccessGuild: v,
                    openInvoiceId: O,
                    applicationId: M,
                    referralTrialOfferId: R,
                    giftRecipient: y,
                    returnRef: L
                } = null != e ? e : {}, P = !1, D = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: D,
                            subscriptionTier: N,
                            skuId: N,
                            isGift: h,
                            giftMessage: A,
                            giftRecipient: y,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                P = !0, null == p || p(), !h && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: I,
                            analyticsObject: S,
                            analyticsLocation: m,
                            analyticsSourceLocation: g,
                            trialId: C,
                            postSuccessGuild: v,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: O,
                            applicationId: M,
                            referralTrialOfferId: R,
                            returnRef: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !P && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : S,
                            source: g,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: h,
                            eligible_for_trial: null != C,
                            application_id: M,
                            location_stack: I
                        }), (0, s.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == _ || _(P), P && (!h && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return l
                }
            });
            var i = n("79112"),
                r = n("49111");
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.open(r.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return o
                }
            }), (l = i || (i = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.WINTER = 1] = "WINTER", (s = r || (r = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
            let o = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("913144"),
                s = n("850068"),
                o = n("271938"),
                a = n("160299"),
                u = n("357957");

            function d() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([a.default], () => a.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
                return i.useEffect(() => {
                    l.default.wait(() => {
                        n && !a.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && s.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !a.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return c
                },
                usePremiumDiscountOffer: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("862337"),
                s = n("697218"),
                o = n("340412"),
                a = n("719923"),
                u = n("646718");

            function d(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function f() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(d(e)),
                    c = (0, r.useStateFromStores)([s.default], () => (0, a.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new l.Timeout,
                        r = () => {
                            let l = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(l, () => {
                                !t && d(e) ? n(!0) : r()
                            })
                        };
                    return r(), () => i.stop()
                }, [t, e]), t || c ? null : e
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("446674"),
                o = n("77078"),
                a = n("79112"),
                u = n("685665"),
                d = n("788506"),
                c = n("649844"),
                f = n("393414"),
                E = n("797647"),
                _ = n("697218"),
                p = n("521012"),
                T = n("471671"),
                I = n("181114"),
                S = n("978679"),
                m = n("216422"),
                g = n("719923"),
                h = n("646718"),
                A = n("49111"),
                N = n("782340"),
                C = n("683437"),
                v = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: r,
                        onClick: v,
                        size: O,
                        className: M,
                        trialId: R,
                        isTrialCTA: y,
                        buttonText: L,
                        buttonTextClassName: P,
                        postSuccessGuild: D,
                        onSubscribeModalClose: F,
                        premiumModalAnalyticsLocation: b,
                        showIcon: U = !0,
                        disableShine: x,
                        applicationId: w,
                        giftMessage: G,
                        overrideDisabledButtonText: B,
                        shinyButtonClassName: k,
                        ...H
                    } = e, V = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), j = (0, s.useStateFromStores)([T.default], () => T.default.isFocused()), W = (0, s.useStateFromStores)([p.default], () => p.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Y
                    } = (0, u.default)(), K = e => {
                        if (e.preventDefault(), null == V) {
                            (0, f.transitionTo)(A.Routes.LOGIN);
                            return
                        }
                        if (null == v || v(e), (null == W ? void 0 : W.status) === A.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), a.default.open(A.UserSettingsSections.PREMIUM), null == F || F(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: r,
                                isGift: l,
                                subscriptionTier: s,
                                trialId: a,
                                postSuccessGuild: u,
                                onSubscribeModalClose: d,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: E,
                                applicationId: _,
                                giftMessage: p
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!r) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let T = A.AnalyticsObjectTypes.BUY;
                            null != a ? T = A.AnalyticsObjectTypes.TRIAL : l && (T = A.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: l,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: A.AnalyticsObjects.BUTTON_CTA,
                                    objectType: T,
                                    ...E
                                },
                                trialId: a,
                                postSuccessGuild: u,
                                onClose: d,
                                applicationId: _,
                                giftMessage: p
                            })
                        }({
                            isClaimed: V.isClaimed(),
                            isVerified: V.verified,
                            isGift: t,
                            subscriptionTier: r,
                            trialId: R,
                            postSuccessGuild: D,
                            onSubscribeModalClose: F,
                            analyticsLocations: Y,
                            premiumModalAnalyticsLocation: b,
                            applicationId: w,
                            giftMessage: G
                        })
                    };
                    if (y) return (0, i.jsxs)(o.Button, {
                        size: O,
                        className: M,
                        innerClassName: C.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: K,
                        ...H,
                        children: [U && (0, i.jsx)(m.default, {
                            className: C.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: l(C.buttonText, P),
                            children: null != L ? L : N.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(o.Button, {
                        size: O,
                        className: M,
                        innerClassName: C.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: K,
                        ...H,
                        children: [(0, i.jsx)(S.default, {
                            className: C.giftIcon
                        }), (0, i.jsx)("span", {
                            className: l(C.buttonText, P),
                            children: null != L ? L : N.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = N.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != W ? (0, g.getPremiumPlanItem)(W) : null,
                        q = null != X ? g.default.getPremiumType(X.planId) : null == V ? void 0 : V.premiumType,
                        Q = r === h.PremiumSubscriptionSKUs.TIER_2 && null != q && [h.PremiumTypes.TIER_0, h.PremiumTypes.TIER_1].includes(q);
                    Q && (z = N.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Z = null != W && W.status !== A.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(W.planId) && !Q,
                        $ = Z ? null != B ? B : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, r = null;
                            if (null != t && t !== h.PremiumSubscriptionSKUs.LEGACY && t !== h.PremiumSubscriptionSKUs.TIER_0 && t !== h.PremiumSubscriptionSKUs.TIER_1 && t !== h.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            };
                            let l = null != t ? h.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != l ? h.PremiumTypeOrder[l] : null,
                                o = null != n ? h.PremiumTypeOrder[n] : null;
                            return null != o && null != s && s < o ? (i = N.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (i = N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === h.PremiumTypes.TIER_2 && (r = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: r,
                            currentPremiumType: q
                        }) : null;

                    function J(e) {
                        var t, n;
                        return (0, i.jsxs)(I.default, {
                            disabled: Z,
                            onClick: K,
                            innerClassName: C.premiumSubscribeButton,
                            color: r === h.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: O,
                            className: k,
                            wrapperClassName: M,
                            pauseAnimation: !j || x,
                            ...H,
                            ...e,
                            children: [U && (0, i.jsx)(m.default, {
                                className: C.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: l(C.buttonText, P),
                                children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
                        text: $.disabledButtonTooltipText,
                        children: J
                    }) : J()
                }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return s
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let l = 32,
                s = 5,
                o = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i, r, l = n("917351"),
                s = n.n(l),
                o = n("446674"),
                a = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                f = n("599110"),
                E = n("829536"),
                _ = n("846325"),
                p = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let I = new Map,
                S = new Map,
                m = new Set,
                g = r.NOT_FETCHED,
                h = r.NOT_FETCHED,
                A = new Set,
                N = new Map,
                C = !1;

            function v(e) {
                let {
                    sound: t
                } = e, n = I.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, I.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), I.set(t.guildId, [...n]))
            }
            let O = s.debounce(e => {
                f.default.track(p.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function M(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? m.add(e) : m.delete(e);
                for (let e of m.keys()) null == i[e] && m.delete(e)
            }
            class R extends o.default.Store {
                initialize() {
                    this.waitFor(d.default), M(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(I),
                        favoritedSoundIds: Array.from(A),
                        localSoundboardMutes: Array.from(m)
                    }
                }
                getSounds() {
                    return I
                }
                getSoundsForGuild(e) {
                    return I.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = I.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(I.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return h === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return g === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return g === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return g === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = N.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != S.get(e)
                }
                isFavoriteSound(e) {
                    return A.has(e)
                }
                getFavorites() {
                    return A
                }
                isLocalSoundboardMuted(e) {
                    return m.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return C
                }
                hasFetchedAllSounds() {
                    return h === r.FETCHED && g === r.FETCHED
                }
            }
            R.displayName = "SoundboardStore";
            var y = new R(a.default, {
                LOGOUT: function() {
                    I.clear(), S.clear(), N.clear(), C = !1, h = r.NOT_FETCHED, g = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    h = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: v,
                GUILD_SOUNDBOARD_SOUND_UPDATE: v,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    I.delete(t);
                    let i = I.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), I.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, s = (null !== (n = S.get(r)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = N.get(l)) && void 0 !== i ? i : 0) + 1;
                    S.set(r, s), N.set(l, o), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (C = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = S.get(i)) && void 0 !== t ? t : 0) - 1, s = (null !== (n = N.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? S.delete(i) : S.set(i, l), s <= 0 ? N.delete(r) : N.set(r, s)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    O(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    S.clear(), N.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        A = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && M(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    g = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    I.set(_.DEFAULT_SOUND_GUILD_ID, t), g = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        I.set(t, n)
                    }), h = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    I.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    m.has(t) ? m.delete(t) : m.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    I = new Map(Object.entries(t.soundboardSounds)), A = new Set(t.favoritedSoundIds), m = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    I.set(t, n)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return l
                },
                canSuppressNotifications: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var i = n("729912");
            let r = "@silent",
                l = new RegExp("^".concat(r, "(\\s|$)"));

            function s() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function o(e) {
                return s() && null != e.match(l) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return r
                }
            });
            var i = n("723251");

            function r(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: r,
                    min: l,
                    max: s,
                    cos: o,
                    round: a
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, d = e[3] | e[4] << 8, c = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, E = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, p = (d >> 3 & 63) / 63, T = (d >> 9 & 63) / 63, I = d >> 15, S = s(3, I ? _ ? 5 : 7 : 7 & d), m = s(3, I ? 7 & d : _ ? 5 : 7), g = _ ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, A = _ ? 6 : 5, N = 0, C = (t, n, i) => {
                    let r = [];
                    for (let l = 0; l < n; l++)
                        for (let s = l ? 0 : 1; s * n < t * (n - l); s++) r.push(((e[A + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * i);
                    return r
                }, v = C(S, m, (u >> 18 & 31) / 31 / 2), O = C(3, 3, p * n), M = C(3, 3, T * n), R = _ ? C(5, 5, h) : [], y = (0, i.thumbHashToApproximateAspectRatio)(e), L = a(y > 1 ? 32 : 32 * y), P = a(y > 1 ? 32 / y : 32), D = new Uint8Array(L * P * 4), F = [], b = [];
                for (let e = 0, n = 0; e < P; e++)
                    for (let i = 0; i < L; i++, n += 4) {
                        let a = c,
                            u = f,
                            d = E,
                            p = g;
                        for (let e = 0, t = s(S, _ ? 5 : 3); e < t; e++) F[e] = o(r / L * (i + .5) * e);
                        for (let t = 0, n = s(m, _ ? 5 : 3); t < n; t++) b[t] = o(r / P * (e + .5) * t);
                        for (let e = 0, n = 0; e < m; e++)
                            for (let i = e ? 0 : 1, r = 2 * b[e]; i * m < S * (m - e); i++, n++) !(i > t) && !(e > t) && (a += v[n] * F[i] * r);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * b[e]; n < 3 - e; n++, t++) {
                                let e = F[n] * i;
                                u += O[t] * e, d += M[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * b[e]; n < 5 - e; n++, t++) p += R[t] * F[n] * i;
                        let T = a - 2 / 3 * u,
                            I = (3 * a - T + d) / 2,
                            h = I - d;
                        D[n] = s(0, 255 * l(1, I)), D[n + 1] = s(0, 255 * l(1, h)), D[n + 2] = s(0, 255 * l(1, T)), D[n + 3] = s(0, 255 * l(1, p))
                    }
                return {
                    w: L,
                    h: P,
                    rgba: D
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
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
            var l = r
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class s extends l.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                s = n("49111");
            let o = {},
                a = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = o[e],
                    a = null != r ? {
                        state: s.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), o = {
                    ...o,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class f extends i.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function s() {
                l = []
            }
            class o extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            o.displayName = "LayerStore";
            var a = new o(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: s,
                LOGOUT: s,
                NOTIFICATION_CLICK: s
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                o = n("816454");
            let a = new Map;

            function u(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = c
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return p
                },
                getPaletteForAvatar: function() {
                    return T
                },
                readFileAsBase64: function() {
                    return S
                },
                dataUriFileSize: function() {
                    return m
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return h
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                s = n.n(l),
                o = n("48648"),
                a = n.n(o);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: s = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), s);
                    let o = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * o), l), n = Math.max(Math.round(n * o), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let s = 1;
                return (n = Math.round(n * l)) > r && (s = r / n), Math.min(l * s, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function p(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return _;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    s = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, s);
                let o = r.getImageData(0, 0, l, s).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, s, o, a, u; r < t; r += n) s = e[(l = 4 * r) + 0], o = e[l + 1], a = e[l + 2], (void 0 === (u = e[l + 3]) || u >= 125) && !(s > 250 && o > 250 && a > 250) && i.push([s, o, a]);
                        return i
                    }(o, l * s, n),
                    d = a(u, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let T = e => I(e),
                I = s.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(p(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function S(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function m(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function g(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function h(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("697218"),
                s = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, r = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == i) {
                    null == a || a();
                    return
                }
                let d = i(_, c, s);

                function c() {
                    null == a || a()
                }

                function f(e) {
                    r(d), n(e)
                }

                function E(e) {
                    r(d), l(e)
                }

                function _(e) {
                    return o(d, _, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: p,
                        isModalOpen: !0
                    })
                }

                function p(e) {
                    let {
                        res: t
                    } = e;
                    o(d, _, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = a,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, a;
                    if (r = e, a = s, r.body && 60008 === r.body.code || a && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(r) ? a : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function o(e, t, n) {
                return (0, r.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, r.updateModal)(e, s(t, n, i))
            }
        }
    }
]);