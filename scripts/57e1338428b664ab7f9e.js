(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34911"], {
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
                    return u
                },
                fetchUserEntitlements: function() {
                    return a
                },
                fetchGiftableEntitlements: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("271560"),
                s = n("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.wait(() => {
                    l.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (l.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    l.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function a(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: r
                } = e;
                l.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: r
                        }
                    });
                    l.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function o() {
                l.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    l.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return s
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
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
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
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

            function u(e, t) {
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
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("913144"),
                s = n("211895"),
                u = n("26092"),
                a = n("599110"),
                o = n("315102"),
                d = n("730622"),
                c = n("49111"),
                f = n("191349"),
                E = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, s.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = u.default.onClose;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: s,
                            emailToken: u,
                            password: _,
                            avatar: S,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: I
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: s,
                                    email_token: u,
                                    password: _,
                                    avatar: S,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                r = l.default.get(c.DEVICE_TOKEN),
                                a = (0, f.getDevicePushProvider)();
                            null != a && null != r && (t.push_provider = a, t.push_token = r);
                            let o = l.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), i.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => r.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return a.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), I ? this.close() : this.submitComplete(), e
                        }, e => (r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
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
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                u = n("77078"),
                a = n("782340"),
                o = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: S,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: I,
                        retrySuccess: h
                    } = this.state, g = l.Children.count(r) > 0 ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: o.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, C = null != S ? (0, i.jsxs)(u.Text, {
                        className: s(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(u.Clickable, {
                            className: s(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(u.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, m = h ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, i.jsx)(u.ModalRoot, {
                        transitionState: E,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(u.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: _
                                }) : null, g, m, (0, i.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, i.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : I
                                    }) : null, C]
                                })]
                            }), (0, i.jsxs)(u.ModalFooter, {
                                children: [(0, i.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === T.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
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
                    return l
                }
            });
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("704744");
            var i = n("913144");
            class l {
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
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), r = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
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
                    return r
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return s
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return u
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return a
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var i = n("476765"),
                l = n("782340");
            let r = (0, i.uid)(),
                s = (0, i.uid)(),
                u = (0, i.uid)(),
                a = (0, i.uid)();

            function o() {
                [{
                    id: r,
                    text: ","
                }, {
                    id: s,
                    text: ","
                }, {
                    id: u,
                    text: l.default.Messages.REACTIONS
                }, {
                    id: a,
                    text: l.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, i = document.getElementById(t);
                    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
                })
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("605250"),
                l = n("802493");
            let r = new i.default("GuildStickers");
            var s = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return r.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (r.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (r.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    l.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let r = l.default.stickersTransaction(i);
                    for (let i of (r.putAll(e, t), n)) r.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, l, r, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = l || (l = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return u
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205"),
                l = n("15733");
            let r = (0, i.createExperiment)({
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

            function u() {
                let {
                    paymentsBlocked: e
                } = r.useExperiment({
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
                } = (0, l.default)();
                return e || t && "RU" === n
            }
            var a = r
        },
        473591: function(e, t, n) {
            "use strict";
            let i, l, r, s, u, a;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var o = n("446674"),
                d = n("913144");
            let c = !1,
                f = !1,
                E = null,
                _ = {},
                S = {},
                p = {},
                T = {};

            function I() {
                i = void 0, l = void 0, r = void 0, s = void 0, u = void 0, E = null
            }
            class h extends o.default.Store {
                getSettings(e) {
                    if (null != e) return p[e]
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
                    return l
                }
                getErrors() {
                    return E
                }
                hasPendingChanges() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== s || void 0 !== u
                }
                getPendingUpdates() {
                    return {
                        pendingAvatar: r,
                        pendingNick: l,
                        pendingPersonality: i,
                        pendingBanner: s,
                        pendingThemeColors: u
                    }
                }
                isSavingSettings() {
                    return c
                }
                isFetchingSettings(e) {
                    var t;
                    return null === (t = T[e]) || void 0 === t ? void 0 : t.isFetching
                }
                shouldFetchSettings(e) {
                    var t, n;
                    let i = null !== (t = T[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        l = Date.now(),
                        r = l - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == i ? void 0 : i.isFetching) && r
                }
                isFetchingProfile(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                }
                isEditingClydeProfile() {
                    return f
                }
            }
            h.displayName = "ClydeStore";
            var g = new h(d.default, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e, n = T[t];
                    T[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        settings: n
                    } = e;
                    T[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, p[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e, n = T[t];
                    T[t] = {
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
                    l = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t
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
                    u = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    E = null, c = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    let {
                        settings: t
                    } = e;
                    c = !1, p[t.guild_id] = t, I()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    c = !1, E = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: I,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    let {
                        profile: t
                    } = e;
                    S[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    }, _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    let {
                        clydeProfileId: t
                    } = e, n = S[t];
                    S[t] = {
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
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, s, u, a, o, d, c, f, E;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return _
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return r
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return S
                },
                EmojiSize: function() {
                    return u
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return I
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return h
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return g
                },
                REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return m
                },
                SuperReactionBalanceLocations: function() {
                    return a
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                GIF_PICKER_TAB_ID: function() {
                    return A
                },
                EMOJI_SIZE_MAP: function() {
                    return O
                },
                EMOJI_ROW_SIZE: function() {
                    return v
                }
            }), (o = i || (i = {})).GUILD = "GUILD", o.PACK = "PACK", o.UNICODE = "UNICODE", o.RECENT = "RECENT", o.CUSTOM = "CUSTOM", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.FAVORITES = "FAVORITES", o.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", o.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let _ = "emoji-picker-grid";
            (d = l || (l = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = r || (r = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (f = s || (s = {}))[f.EMOJI = 0] = "EMOJI", f[f.NSFW = 1] = "NSFW";
            let S = -1;
            (E = u || (u = {}))[E.MEDIUM = 40] = "MEDIUM", E[E.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                I = "soundboard-picker-tab-panel",
                h = "soundboard-picker-tab",
                g = "reaction-picker-tab-panel",
                C = "reaction-picker-tab",
                m = "super-reaction-picker-tab";
            (a || (a = {})).TOOLTIP = "tooltip";
            let N = "gif-picker-tab-panel",
                A = "gif-picker-tab",
                O = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                v = 9
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
            var l = n("414456"),
                r = n.n(l),
                s = n("77078"),
                u = n("118503"),
                a = n("427459"),
                o = n("782340"),
                d = n("884737"),
                c = e => {
                    let t, n, l, {
                            guildFeature: c,
                            guild: f,
                            className: E,
                            hideTooltip: _ = !1,
                            tooltipPosition: S = "left",
                            onClick: p
                        } = e,
                        T = f.hasFeature(c),
                        I = (0, a.minimumRequiredTierForGuildFeature)(c);
                    return (T ? (null != I && (l = o.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(u.default, {
                            className: d.unlockedIcon
                        }), (0, i.jsx)(s.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: o.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != I && (l = o.default.Messages.CLICK_TO_LEARN_MORE), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(u.default, {
                            className: d.icon
                        }), (0, i.jsx)(s.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: null != I && (0, a.getShortenedTierName)(I)
                        })]
                    })), n = _ || null == l ? (0, i.jsx)("div", {
                        className: r(d.availabilityIndicator, E),
                        children: t
                    }) : (0, i.jsx)(s.Tooltip, {
                        position: S,
                        text: l,
                        children: e => (0, i.jsx)("div", {
                            ...e,
                            className: r(d.availabilityIndicator, E),
                            children: t
                        })
                    }), null == p || T) ? n : (0, i.jsx)(s.Clickable, {
                        onClick: p,
                        className: d.clickable,
                        children: n
                    })
                }
        },
        354460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getGuildFeatureFromUploadType: function() {
                    return r
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return s
                }
            });
            var i = n("49111"),
                l = n("75015");

            function r(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === l.UploadTypes.GUILD_BANNER) return n ? i.GuildFeatures.ANIMATED_BANNER : i.GuildFeatures.BANNER
            }

            function s(e) {
                return e === l.UploadTypes.AVATAR || e === l.UploadTypes.BANNER
            }
        },
        420333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                s = n("77078"),
                u = n("812204"),
                a = n("685665"),
                o = n("473591"),
                d = n("634544"),
                c = n("694187"),
                f = n("305961"),
                E = n("162771"),
                _ = n("697218"),
                S = n("471671"),
                p = n("887718"),
                T = n("818643"),
                I = n("216422"),
                h = n("599110"),
                g = n("719923"),
                C = n("354460"),
                m = n("424960"),
                N = n("49111"),
                A = n("75015"),
                O = n("991207"),
                v = n("782340"),
                U = n("461300");
            let L = [{
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

            function D(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, r] = l.useState(!1);
                return (0, i.jsx)("div", {
                    className: U.gifGrid,
                    onMouseMove: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: L.map(e => (0, i.jsx)("div", {
                        className: U.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function R(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, i.jsx)("div", {
                    className: U.pillWrapper,
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
                    showNitroWheel: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: U.optionBoxText,
                    children: [(0, i.jsx)(R, {
                        guild: n,
                        guildFeature: (0, C.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, i.jsxs)("div", {
                        className: U.optionBoxDescription,
                        children: [(0, C.shouldShowPremiumIconForGIFPickerOption)(t) && (0, i.jsx)(s.TooltipContainer, {
                            className: U.nitroWheelFlairContainer,
                            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: l && (0, i.jsx)(I.default, {
                                className: U.nitroWheelFlair
                            })
                        }), v.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function y(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: U.optionBoxText,
                    children: [(0, i.jsx)(R, {
                        guildFeature: (0, C.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: l
                    }), (0, i.jsx)("div", {
                        className: U.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function M(e) {
                let {
                    transitionState: t,
                    onClose: d,
                    onComplete: I,
                    uploadType: C,
                    maxFileSizeBytes: L,
                    showUpsellHeader: R,
                    filters: M,
                    analyticsLocation: b,
                    analyticsLocations: F = [],
                    modalSubTitle: w,
                    imageSpecifications: G,
                    modalTitle: x = v.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: k = v.default.Messages.UPLOAD_IMAGE
                } = e, B = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), j = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), H = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId()), V = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(H)), W = (0, r.useStateFromStores)([o.default], () => o.default.isEditingClydeProfile()), {
                    reducedMotion: K
                } = l.useContext(s.AccessibilityPreferencesContext), Y = (0, s.useModalContext)(), z = !g.default.canUseAnimatedAvatar(j) && C === A.UploadTypes.AVATAR && !W, {
                    analyticsLocations: J
                } = (0, a.default)(F, u.default.SELECT_IMAGE_MODAL);

                function X(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    d(), I(e, t, n)
                }
                return l.useEffect(() => {
                    z && h.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: J
                    }), h.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: b
                    })
                }, [z, b, J]), (0, i.jsxs)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.SMALL,
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        className: U.modalHeader,
                        separator: !1,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(s.FormTitle, {
                                tag: s.FormTitleTags.H1,
                                className: U.modalTitle,
                                children: x
                            }), null != w ? (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: w
                            }) : null]
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            onClick: d,
                            className: U.modalCloseButton
                        })]
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: U.modalContent,
                        children: [(0, i.jsxs)("div", {
                            className: U.imagePickerContainer,
                            children: [(0, i.jsxs)(s.Clickable, {
                                className: U.optionBox,
                                children: [(0, i.jsx)("div", {
                                    className: U.contentCircle,
                                    children: (0, i.jsx)(T.default, {
                                        className: U.uploadIcon
                                    })
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(y, {
                                        title: k,
                                        uploadType: C,
                                        guild: V
                                    })
                                }), (0, i.jsx)(c.default, {
                                    onChange: function(e, t) {
                                        if (t.type === O.FileTypes.MP4) return X(e, t);
                                        (0, s.openModalLazy)(async () => {
                                            let {
                                                default: l
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, i.jsx)(l, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: X,
                                                uploadType: C,
                                                showUpsellHeader: R,
                                                allowSkip: !0,
                                                analyticsPage: null == b ? void 0 : b.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: Y
                                        })
                                    },
                                    maxFileSizeBytes: L,
                                    onFileSizeError: function() {
                                        d(), (0, m.default)(L)
                                    },
                                    filters: M
                                })]
                            }), (0, i.jsxs)(s.Clickable, {
                                className: U.optionBox,
                                onClick: function() {
                                    (0, s.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, i.jsx)(e, {
                                            uploadType: C,
                                            onComplete: (e, t) => X(e, t, !0),
                                            showUpsellHeader: R,
                                            analyticsPage: null == b ? void 0 : b.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: Y
                                    })
                                },
                                children: [(0, i.jsxs)("div", {
                                    className: U.contentCircle,
                                    children: [(0, i.jsx)(D, {
                                        shouldAnimate: B && !K.enabled
                                    }), (0, i.jsx)("div", {
                                        className: U.gifIconContainer,
                                        children: (0, i.jsx)(p.default, {
                                            className: U.gifIcon
                                        })
                                    })]
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(P, {
                                        uploadType: C,
                                        guild: V,
                                        showNitroWheel: !W
                                    })
                                })]
                            })]
                        }), null != G ? (0, i.jsx)(s.Text, {
                            className: U.imageSpecifications,
                            variant: "text-sm/normal",
                            children: G
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
                l = n("254490"),
                r = n("782340");

            function s(e) {
                (0, i.openUploadError)({
                    title: r.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, l.sizeString)(e)
                    })
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
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var i = n("522632"),
                l = n("833858");
            let r = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, l.getFirstQueryStringValue)(e[r])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = i.parse(n),
                    u = (0, l.getFirstQueryStringValue)(s[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function o(e) {
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
                l = n("862205"),
                r = n("697218"),
                s = n("719923"),
                u = n("782340");
            let a = (0, l.createExperiment)({
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
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: u ? i : r
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
                    } : o({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), s = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = o({
                        user: l,
                        config: s
                    }), f = u && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: f,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                f = (0, l.createExperiment)({
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
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => u.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
            var l = n("748820"),
                r = n("77078"),
                s = n("112679"),
                u = n("55689"),
                a = n("855133"),
                o = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: S,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: T,
                    analyticsObject: I,
                    analyticsLocation: h,
                    analyticsSourceLocation: g,
                    isGift: C = !1,
                    giftMessage: m,
                    subscriptionTier: N,
                    trialId: A,
                    postSuccessGuild: O,
                    openInvoiceId: v,
                    applicationId: U,
                    referralTrialOfferId: L,
                    giftRecipient: D,
                    returnRef: R
                } = null != e ? e : {}, P = !1, y = (0, l.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: y,
                            subscriptionTier: N,
                            skuId: N,
                            isGift: C,
                            giftMessage: m,
                            giftRecipient: D,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                l(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                P = !0, null == S || S(), !C && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: T,
                            analyticsObject: I,
                            analyticsLocation: h,
                            analyticsSourceLocation: g,
                            trialId: A,
                            postSuccessGuild: O,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: v,
                            applicationId: U,
                            referralTrialOfferId: L,
                            returnRef: R
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !P && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : I,
                            source: g,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: C,
                            eligible_for_trial: null != A,
                            application_id: U,
                            location_stack: T
                        }), (0, s.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == _ || _(P), P && (!C && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return r
                }
            });
            var i = n("79112"),
                l = n("49111");
            let r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.open(l.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return r
                },
                resetPremiumTutorialStore: function() {
                    return s
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
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
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, l, r, s;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return l
                },
                PromotionFlags: function() {
                    return u
                }
            }), (r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER = 1] = "WINTER", (s = l || (l = {}))[s.SNOWGLOBE = 1] = "SNOWGLOBE", s[s.BOX = 2] = "BOX", s[s.CUP = 3] = "CUP", s[s.STANDARD_BOX = 4] = "STANDARD_BOX", s[s.CAKE = 5] = "CAKE", s[s.CHEST = 6] = "CHEST", s[s.COFFEE = 7] = "COFFEE";
            let u = Object.freeze({
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
                l = n("446674"),
                r = n("913144"),
                s = n("850068"),
                u = n("271938"),
                a = n("160299"),
                o = n("357957");

            function d() {
                let e = (0, l.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, l.useStateFromStores)([a.default], () => a.default.ipCountryCode),
                    n = (0, l.useStateFromStores)([u.default], () => u.default.isAuthenticated());
                return i.useEffect(() => {
                    r.default.wait(() => {
                        n && !a.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && s.fetchPaymentSources()
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
                l = n("446674"),
                r = n("862337"),
                s = n("697218"),
                u = n("340412"),
                a = n("719923"),
                o = n("646718");

            function d(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => o.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function f() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(d(e)),
                    c = (0, l.useStateFromStores)([s.default], () => (0, a.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new r.Timeout,
                        l = () => {
                            let r = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(r, () => {
                                !t && d(e) ? n(!0) : l()
                            })
                        };
                    return l(), () => i.stop()
                }, [t, e]), t || c ? null : e
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("446674"),
                u = n("77078"),
                a = n("79112"),
                o = n("685665"),
                d = n("788506"),
                c = n("649844"),
                f = n("393414"),
                E = n("797647"),
                _ = n("697218"),
                S = n("521012"),
                p = n("471671"),
                T = n("181114"),
                I = n("978679"),
                h = n("216422"),
                g = n("719923"),
                C = n("646718"),
                m = n("49111"),
                N = n("782340"),
                A = n("683437"),
                O = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: O,
                        size: v,
                        className: U,
                        trialId: L,
                        isTrialCTA: D,
                        buttonText: R,
                        buttonTextClassName: P,
                        postSuccessGuild: y,
                        onSubscribeModalClose: M,
                        premiumModalAnalyticsLocation: b,
                        showIcon: F = !0,
                        disableShine: w,
                        applicationId: G,
                        giftMessage: x,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: B,
                        ...j
                    } = e, H = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, s.useStateFromStores)([p.default], () => p.default.isFocused()), W = (0, s.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), {
                        analyticsLocations: K
                    } = (0, o.default)(), Y = e => {
                        if (e.preventDefault(), null == H) {
                            (0, f.transitionTo)(m.Routes.LOGIN);
                            return
                        }
                        if (null == O || O(e), (null == W ? void 0 : W.status) === m.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), a.default.open(m.UserSettingsSections.PREMIUM), null == M || M(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: s,
                                trialId: a,
                                postSuccessGuild: o,
                                onSubscribeModalClose: d,
                                analyticsLocations: f,
                                premiumModalAnalyticsLocation: E,
                                applicationId: _,
                                giftMessage: S
                            } = e;
                            if (!t) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!l) {
                                (0, u.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...l
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...l,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let p = m.AnalyticsObjectTypes.BUY;
                            null != a ? p = m.AnalyticsObjectTypes.TRIAL : r && (p = m.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: s,
                                analyticsLocations: f,
                                analyticsObject: {
                                    object: m.AnalyticsObjects.BUTTON_CTA,
                                    objectType: p,
                                    ...E
                                },
                                trialId: a,
                                postSuccessGuild: o,
                                onClose: d,
                                applicationId: _,
                                giftMessage: S
                            })
                        }({
                            isClaimed: H.isClaimed(),
                            isVerified: H.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: L,
                            postSuccessGuild: y,
                            onSubscribeModalClose: M,
                            analyticsLocations: K,
                            premiumModalAnalyticsLocation: b,
                            applicationId: G,
                            giftMessage: x
                        })
                    };
                    if (D) return (0, i.jsxs)(u.Button, {
                        size: v,
                        className: U,
                        innerClassName: A.premiumSubscribeButton,
                        look: u.Button.Looks.INVERTED,
                        onClick: Y,
                        ...j,
                        children: [F && (0, i.jsx)(h.default, {
                            className: A.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(A.buttonText, P),
                            children: null != R ? R : N.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(u.Button, {
                        size: v,
                        className: U,
                        innerClassName: A.giftButton,
                        color: u.Button.Colors.PRIMARY,
                        onClick: Y,
                        ...j,
                        children: [(0, i.jsx)(I.default, {
                            className: A.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(A.buttonText, P),
                            children: null != R ? R : N.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = N.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        J = null != W ? (0, g.getPremiumPlanItem)(W) : null,
                        X = null != J ? g.default.getPremiumType(J.planId) : null == H ? void 0 : H.premiumType,
                        q = l === C.PremiumSubscriptionSKUs.TIER_2 && null != X && [C.PremiumTypes.TIER_0, C.PremiumTypes.TIER_1].includes(X);
                    q && (z = N.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != W && W.status !== m.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(W.planId) && !q,
                        Z = Q ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== C.PremiumSubscriptionSKUs.LEGACY && t !== C.PremiumSubscriptionSKUs.TIER_0 && t !== C.PremiumSubscriptionSKUs.TIER_1 && t !== C.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? C.PremiumSubscriptionSKUToPremiumType[t] : null,
                                s = null != r ? C.PremiumTypeOrder[r] : null,
                                u = null != n ? C.PremiumTypeOrder[n] : null;
                            return null != u && null != s && s < u ? (i = N.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === C.PremiumTypes.TIER_2 && (l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: X
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(T.default, {
                            disabled: Q,
                            onClick: Y,
                            innerClassName: A.premiumSubscribeButton,
                            color: l === C.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
                            size: v,
                            className: B,
                            wrapperClassName: U,
                            pauseAnimation: !V || w,
                            ...j,
                            ...e,
                            children: [F && (0, i.jsx)(h.default, {
                                className: A.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(A.buttonText, P),
                                children: null !== (n = null !== (t = null == Z ? void 0 : Z.disabledButtonText) && void 0 !== t ? t : R) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Z ? void 0 : Z.disabledButtonTooltipText) != null ? (0, i.jsx)(u.Tooltip, {
                        text: Z.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return s
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var i, l, r = n("773336");
            let s = null;

            function u() {
                return (0, r.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return s
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return u
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let r = 32,
                s = 5,
                u = "DEFAULT";
            (l = i || (i = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i, l, r = n("917351"),
                s = n.n(r),
                u = n("446674"),
                a = n("913144"),
                o = n("845579"),
                d = n("374363"),
                c = n("697218"),
                f = n("599110"),
                E = n("829536"),
                _ = n("846325"),
                S = n("49111"),
                p = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let T = new Map,
                I = new Map,
                h = new Set,
                g = l.NOT_FETCHED,
                C = l.NOT_FETCHED,
                m = new Set,
                N = new Map,
                A = !1;

            function O(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let v = s.debounce(e => {
                f.default.track(S.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function U(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? h.add(e) : h.delete(e);
                for (let e of h.keys()) null == i[e] && h.delete(e)
            }
            class L extends u.default.Store {
                initialize() {
                    this.waitFor(d.default), U(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(m),
                        localSoundboardMutes: Array.from(h)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return C === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return g === l.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return g === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return g === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = N.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != I.get(e)
                }
                isFavoriteSound(e) {
                    return m.has(e)
                }
                getFavorites() {
                    return m
                }
                isLocalSoundboardMuted(e) {
                    return h.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return A
                }
                hasFetchedAllSounds() {
                    return C === l.FETCHED && g === l.FETCHED
                }
            }
            L.displayName = "SoundboardStore";
            var D = new L(a.default, {
                LOGOUT: function() {
                    T.clear(), I.clear(), N.clear(), A = !1, C = l.NOT_FETCHED, g = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    C = l.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: O,
                GUILD_SOUNDBOARD_SOUND_UPDATE: O,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let i = T.get(n),
                        l = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != l && !(l < 0) && (i.splice(l, 1), T.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: l,
                        userId: r
                    } = e, s = (null !== (n = I.get(l)) && void 0 !== n ? n : 0) + 1, u = (null !== (i = N.get(r)) && void 0 !== i ? i : 0) + 1;
                    I.set(l, s), N.set(r, u), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, r = (null !== (t = I.get(i)) && void 0 !== t ? t : 0) - 1, s = (null !== (n = N.get(l)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? I.delete(i) : I.set(i, r), s <= 0 ? N.delete(l) : N.set(l, s)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    v(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    I.clear(), N.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var l, r;
                        m = new Set(null !== (r = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== r ? r : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && U(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    g = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(_.DEFAULT_SOUND_GUILD_ID, t), g = l.FETCHED
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
                        T.set(t, n)
                    }), C = l.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    h.has(t) ? h.delete(t) : h.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), m = new Set(t.favoritedSoundIds), h = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i, l, r = n("102053"),
                s = n("446674"),
                u = n("913144"),
                a = n("802493"),
                o = n("595525"),
                d = n("212084"),
                c = n("867805"),
                f = n("267567"),
                E = n("813006"),
                _ = n("778689"),
                S = n("305961"),
                p = n("161585"),
                T = n("24373"),
                I = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let h = 2,
                g = new Map,
                C = new Map,
                m = null,
                N = [],
                A = null,
                O = !1,
                v = new Map,
                U = (e, t) => {
                    v = new Map(v.set(e, t))
                },
                L = 1e3 * I.Durations.HOUR,
                D = () => {
                    if (0 !== h) return;
                    let e = a.default.database();
                    if (null == e) return;
                    h = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !v.has(e)) {
                                for (let t of n) R(t, !0, S.default.getGuild(e));
                                U(e, n)
                            }
                    }
                },
                R = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    C.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == m) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = N.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), m.set(e.id, l)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let l = c.default.getByName(n),
                            r = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            s = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, E.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && s.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            m.set(e.id, s);
                            return
                        }
                        s.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => s.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), m.set(e.id, s)
                    }
                },
                y = (e, t, n) => {
                    g.set(e.id, e);
                    let i = [...N];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), N = i
                    }(t || n) && e.stickers.forEach(e => R(e))
                },
                M = () => {
                    v.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), N.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => R(t, !0, e)), U(e.id, e.stickers))
            }
            class F extends s.default.Store {
                initialize() {
                    this.waitFor(a.default, _.default, S.default)
                }
                get isLoaded() {
                    return 0 !== h
                }
                get stickerMetadata() {
                    return D(), null == m && (m = new Map, M()), m
                }
                get hasLoadedStickerPacks() {
                    return null != A && A + L > Date.now()
                }
                get isFetchingStickerPacks() {
                    return O
                }
                getStickerById(e) {
                    return !C.has(e) && D(), C.get(e)
                }
                getStickerPack(e) {
                    return g.get(e)
                }
                getPremiumPacks() {
                    return N
                }
                isPremiumPack(e) {
                    return N.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return v
                }
                getAllStickersIterator() {
                    return D(), C.values()
                }
                getAllGuildStickers() {
                    return D(), v
                }
                getStickersByGuildId(e) {
                    return D(), v.get(e)
                }
            }
            F.displayName = "StickersStore";
            var w = new F(u.default, {
                BACKGROUND_SYNC: () => {
                    m = null, C = new Map, v = new Map, h = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    m = null, C = new Map, v = new Map, t.forEach(b), h = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !f.default.isLurking(t.id) && (b(t), 1 === h && null == t.stickers && null != t.stickerUpdates && (h = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = v.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != m && m.delete(e.id), C.delete(e.id)
                    }), v.delete(n.id), v = new Map(v)
                },
                LOGOUT: () => {
                    h = 0, N = [], C.clear(), g.clear(), m = null, v.clear(), v = new Map(v), O = !1, A = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    O = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => y(e, !0)), A = Date.now(), O = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    y(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => R(e)), U(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = v.get(i)) && void 0 !== t ? t : [];
                    U(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), R(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    R(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = C.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = v.get(n)) && void 0 !== t ? t : [], s = r.filter(e => null == i.find(t => t.id === e.id));
                    s.forEach(e => {
                        C.delete(e.id), null != m && m.delete(e.id)
                    });
                    let u = i.map(e => l(e));
                    u.forEach(e => R(e)), U(n, u)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
                    return r
                },
                canSuppressNotifications: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var i = n("729912");
            let l = "@silent",
                r = new RegExp("^".concat(l, "(\\s|$)"));

            function s() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function u(e) {
                return s() && null != e.match(r) ? [!0, e.substring(l.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return l
                }
            });
            var i = n("723251");

            function l(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: l,
                    min: r,
                    max: s,
                    cos: u,
                    round: a
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, d = e[3] | e[4] << 8, c = (63 & o) / 63, f = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, _ = o >> 23, S = (d >> 3 & 63) / 63, p = (d >> 9 & 63) / 63, T = d >> 15, I = s(3, T ? _ ? 5 : 7 : 7 & d), h = s(3, T ? 7 & d : _ ? 5 : 7), g = _ ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, m = _ ? 6 : 5, N = 0, A = (t, n, i) => {
                    let l = [];
                    for (let r = 0; r < n; r++)
                        for (let s = r ? 0 : 1; s * n < t * (n - r); s++) l.push(((e[m + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * i);
                    return l
                }, O = A(I, h, (o >> 18 & 31) / 31 / 2), v = A(3, 3, S * n), U = A(3, 3, p * n), L = _ ? A(5, 5, C) : [], D = (0, i.thumbHashToApproximateAspectRatio)(e), R = a(D > 1 ? 32 : 32 * D), P = a(D > 1 ? 32 / D : 32), y = new Uint8Array(R * P * 4), M = [], b = [];
                for (let e = 0, n = 0; e < P; e++)
                    for (let i = 0; i < R; i++, n += 4) {
                        let a = c,
                            o = f,
                            d = E,
                            S = g;
                        for (let e = 0, t = s(I, _ ? 5 : 3); e < t; e++) M[e] = u(l / R * (i + .5) * e);
                        for (let t = 0, n = s(h, _ ? 5 : 3); t < n; t++) b[t] = u(l / P * (e + .5) * t);
                        for (let e = 0, n = 0; e < h; e++)
                            for (let i = e ? 0 : 1, l = 2 * b[e]; i * h < I * (h - e); i++, n++) !(i > t) && !(e > t) && (a += O[n] * M[i] * l);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * b[e]; n < 3 - e; n++, t++) {
                                let e = M[n] * i;
                                o += v[t] * e, d += U[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * b[e]; n < 5 - e; n++, t++) S += L[t] * M[n] * i;
                        let p = a - 2 / 3 * o,
                            T = (3 * a - p + d) / 2,
                            C = T - d;
                        y[n] = s(0, 255 * r(1, T)), y[n + 1] = s(0, 255 * r(1, C)), y[n + 2] = s(0, 255 * r(1, p)), y[n + 3] = s(0, 255 * r(1, S))
                    }
                return {
                    w: R,
                    h: P,
                    rgba: y
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, l.pushLayer)(r.Layers.USER_SETTINGS)
            }
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class l extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class l extends i.default {
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
            var r = l
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("619340"),
                s = n("376556"),
                u = n("450205"),
                a = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                f = [],
                E = [],
                _ = {},
                S = {},
                p = e => {
                    f = e.filter(e => !d.has(e.type) && s.default.isSupported(e.type)), E = e.filter(e => d.has(e.type)), c = !1
                };
            class T extends i.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return f
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return f.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var I = new T(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new u.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new u.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else r.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: l
                    } = e, r = f.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != i && (r.revoked = i), null != l && (r.accessToken = l)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("9294"),
                s = n("49111");
            let u = {},
                a = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, r.parseExtraDataFromInviteKey)(e),
                    l = u[e],
                    a = null != l ? {
                        state: s.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), u = {
                    ...u,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
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
                    return u[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
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
                l = n("913144");
            let r = [];

            function s() {
                r = []
            }
            class u extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            u.displayName = "LayerStore";
            var a = new u(l.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (r.indexOf(t) >= 0) return !1;
                    r = [...r, t]
                },
                LAYER_POP: function() {
                    if (0 === r.length) return !1;
                    r = r.slice(0, -1)
                },
                LAYER_POP_ALL: s,
                LOGOUT: s,
                NOTIFICATION_CLICK: s
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                s = n("913144"),
                u = n("697218"),
                a = n("49111");
            let o = a.FormStates.CLOSED,
                d = null,
                c = null,
                f = {},
                E = {},
                _ = {},
                S = null,
                p = null,
                T = !1,
                I = !1,
                h = null,
                g = null,
                C = null,
                m = [],
                N = null,
                A = null;

            function O(e) {
                var t, n, i, l, r, s;
                let d = u.default.getCurrentUser();
                if (null == d) return v();
                c = null !== (t = e.section) && void 0 !== t ? t : c, N = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (f[c] = e.subsection), null != e.scrollPosition && null != c && (E[c] = e.scrollPosition), I = !!e.openWithoutBackstack, o = a.FormStates.OPEN, _ = {}, p = {
                    ...S = {
                        [a.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, g = null !== (i = e.onClose) && void 0 !== i ? i : null, C = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, m = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], A = null !== (s = e.impressionSource) && void 0 !== s ? s : null
            }

            function v() {
                o = a.FormStates.CLOSED, T = !1, S = null, N = null, p = null, d = null, c = null, f = {}, E = {}, g = null, C = null, m = [], A = null
            }

            function U() {
                o = a.FormStates.OPEN, _ = {}
            }
            class L extends r.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                hasChanges() {
                    return null != p && null != S && (!!this.isOpen() || h === a.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(p, S)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return c
                }
                getSubsection() {
                    return null != c ? f[c] : null
                }
                getScrollPosition() {
                    return null != c ? E[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return I
                }
                getProps() {
                    return {
                        submitting: o === a.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? f[c] : null,
                        scrollPosition: null != c ? E[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: I,
                        analyticsLocation: C,
                        analyticsLocations: m,
                        initialSection: N,
                        impressionSource: A
                    }
                }
                get onClose() {
                    return g
                }
            }
            L.displayName = "UserSettingsModalStore";
            var D = new L(s.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, O(e)
                },
                USER_SETTINGS_MODAL_INIT: O,
                USER_SETTINGS_MODAL_CLOSE: v,
                LOGOUT: v,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    o = a.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (o !== a.FormStates.SUBMITTING) return !1;
                    o = a.FormStates.OPEN, c = a.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, C = null, m = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (f[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[a.UserSettingsSections.ACCOUNT];
                    p[a.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = u.default.getCurrentUser();
                    U(), null != e && (p = {
                        ...S = {
                            [a.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return h = e.tab, null == c && h === a.DrawerTabTypes.USER_SETTINGS && O({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("697218"),
                s = n("719923"),
                u = n("521012");
            let a = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                o = a;

            function d() {
                o.userTrialOffers = {}, o.userDiscounts = {}, o.userOffersLastFetchedAtDate = void 0
            }
            let c = () => !0;

            function f() {
                let e = u.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscounts = {}, !0)
            }
            class E extends i.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : a, this.waitFor(r.default), this.syncWith([r.default], c), this.syncWith([u.default], f)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return o.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return o.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != o.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != o.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = o.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = r.default.getCurrentUser();
                    return (0, s.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = r.default.getCurrentUser();
                    return (0, s.isPremium)(e) ? [] : Object.values(o.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = r.default.getCurrentUser();
                    return (0, s.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return o
                }
                forceReset() {
                    d()
                }
            }
            E.displayName = "UserOfferStore", E.persistKey = "UserOfferStore";
            var _ = new E(l.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : d(), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    o.userTrialOffers[t.trial_id] = t, o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && d(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscounts = {}) : null != n && (o.userDiscounts[n.discount_id] = n, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (o.userTrialOffers[t.trial_id] = t), null != n && (o.userDiscounts[n.discount_id] = n), o.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: d
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
                l = n.n(i),
                r = n("446674"),
                s = n("913144"),
                u = n("816454");
            let a = new Map;

            function o(e) {
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
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(s.default, {
                WINDOW_INIT: function(e) {
                    l(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = o(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = o(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = o(e.windowId);
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
                    return o
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
                    return S
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return I
                },
                dataUriFileSize: function() {
                    return h
                },
                dataUrlToFile: function() {
                    return g
                },
                isPNGAnimated: function() {
                    return C
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                s = n.n(r),
                u = n("48648"),
                a = n.n(u);

            function o(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: s = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), s);
                    let u = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * u), r), n = Math.max(Math.round(n * u), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return o({
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
                    maxHeight: l
                } = e, r = 1;
                t > i && (r = i / t), t = Math.round(t * r);
                let s = 1;
                return (n = Math.round(n * r)) > l && (s = l / n), Math.min(r * s, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function S(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return _;
                let r = i.width = 0 === e.width ? 128 : e.width,
                    s = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, s);
                let u = l.getImageData(0, 0, r, s).data,
                    o = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, s, u, a, o; l < t; l += n) s = e[(r = 4 * l) + 0], u = e[r + 1], a = e[r + 2], (void 0 === (o = e[r + 3]) || o >= 125) && !(s > 250 && u > 250 && a > 250) && i.push([s, u, a]);
                        return i
                    }(u, r * s, n),
                    d = a(o, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = e => T(e),
                T = s.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(S(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function I(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function h(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function g(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var l = 0; l < t.length; l++) i[l] = t.charCodeAt(l);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    l = await i.arrayBuffer();
                return new File([l], t, {
                    type: n
                })
            }
            async function C(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    l = i.indexOf("IDAT");
                return !!(l > 0) && -1 !== i.substring(0, l).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var i = n("917351"),
                l = n.n(i);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("697218"),
                s = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, u = e.updateModalProps, l = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
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
                    l(d), n(e)
                }

                function E(e) {
                    l(d), r(e)
                }

                function _(e) {
                    return u(d, _, c, {
                        ...s,
                        isLoading: !0
                    }), o({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    u(d, _, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = a,
                    isModalOpen: s = !1,
                    ...u
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, a;
                    if (l = e, a = s, l.body && 60008 === l.body.code || a && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...u
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(l) ? a : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
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
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                l = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: i,
                    ...r
                } = t, s = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let u = i.properties;
                        "function" == typeof i.properties && (u = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...s,
                            ...u
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return r(i.default.get, e, "get")
                },
                post: function(e) {
                    return r(i.default.post, e, "post")
                },
                put: function(e) {
                    return r(i.default.put, e, "put")
                },
                patch: function(e) {
                    return r(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let s = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function u(e, t, n) {
                return (0, l.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, l.updateModal)(e, s(t, n, i))
            }
        }
    }
]);