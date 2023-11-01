(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83812"], {
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        393828: function(e, t, n) {
            "use strict";
            e.exports = n.p + "714405524ef39906bd06.png"
        },
        431036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d8d77824c450981d7ec3.svg"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return o
                },
                fetchUserEntitlements: function() {
                    return s
                },
                fetchGiftableEntitlements: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("271560"),
                u = n("49111");

            function o(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.wait(() => {
                    l.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: u.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
            async function s(e) {
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
                        url: u.Endpoints.ENTITLEMENTS_FOR_USER,
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
            async function a() {
                l.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, r.httpGetWithCountryCodeQuery)({
                        url: u.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return u
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

            function u() {
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
                    return u
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
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

            function u() {
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

            function s() {
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
                u = n("211895"),
                o = n("26092"),
                s = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                E = n("191349"),
                f = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, u.default)(e, t, n)
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
                        let e = o.default.onClose;
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
                            email: u,
                            emailToken: o,
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
                                    email: u,
                                    email_token: o,
                                    password: _,
                                    avatar: S,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                r = l.default.get(c.DEVICE_TOKEN),
                                s = (0, E.getDevicePushProvider)();
                            null != s && null != r && (t.push_provider = s, t.push_token = r);
                            let a = l.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != a && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = a), i.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return s.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(t.avatar)
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
                u = n.n(r),
                o = n("77078"),
                s = n("782340"),
                a = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: c,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: S,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: I,
                        retrySuccess: m
                    } = this.state, h = l.Children.count(r) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: a.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, g = null != S ? (0, i.jsxs)(o.Text, {
                        className: u(a.submitText, a.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: u(a.spacing, a.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, C = m ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: a.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: f,
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
                                    className: a.spacing,
                                    children: _
                                }) : null, h, C, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: a.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: a.error,
                                        children: null != d ? d : I
                                    }) : null, g]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === T.length,
                                    children: null != n ? n : s.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: s.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? s.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
                    return u
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return o
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return s
                },
                insertAccessibilityLabelElements: function() {
                    return a
                }
            });
            var i = n("476765"),
                l = n("782340");
            let r = (0, i.uid)(),
                u = (0, i.uid)(),
                o = (0, i.uid)(),
                s = (0, i.uid)();

            function a() {
                [{
                    id: r,
                    text: ","
                }, {
                    id: u,
                    text: ","
                }, {
                    id: o,
                    text: l.default.Messages.REACTIONS
                }, {
                    id: s,
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
                    return u
                }
            });
            var i = n("605250"),
                l = n("802493");
            let r = new i.default("GuildStickers");
            var u = new class e {
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
            var i, l, r, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = l || (l = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return o
                },
                default: function() {
                    return s
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
                u = (0, i.createExperiment)({
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
                } = r.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = u.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, l.default)();
                return e || t && "RU" === n
            }
            var s = r
        },
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, u, o, s, a, d, c, E, f;
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
                    return o
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
                    return m
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                REACTION_PICKER_TAB_ID: function() {
                    return g
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return s
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
            }), (a = i || (i = {})).GUILD = "GUILD", a.PACK = "PACK", a.UNICODE = "UNICODE", a.RECENT = "RECENT", a.CUSTOM = "CUSTOM", a.SEARCH_RESULTS = "SEARCH_RESULTS", a.FAVORITES = "FAVORITES", a.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", a.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let _ = "emoji-picker-grid";
            (d = l || (l = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = r || (r = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (E = u || (u = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let S = -1;
            (f = o || (o = {}))[f.MEDIUM = 40] = "MEDIUM", f[f.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                I = "soundboard-picker-tab-panel",
                m = "soundboard-picker-tab",
                h = "reaction-picker-tab-panel",
                g = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (s || (s = {})).TOOLTIP = "tooltip";
            let N = "gif-picker-tab-panel",
                A = "gif-picker-tab",
                O = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                v = 9
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return a
                }
            });
            var i = n("522632"),
                l = n("833858");
            let r = "event";

            function u(e, t) {
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
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = i.parse(n),
                    o = (0, l.getFirstQueryStringValue)(u[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function a(e) {
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
                    return f
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                u = n("719923"),
                o = n("782340");
            let s = (0, l.createExperiment)({
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
                a = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r
                    } = n, o = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: o ? i : r
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
                    } : a({
                        user: t,
                        config: s.getCurrentConfig({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), u = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = a({
                        user: l,
                        config: u
                    }), E = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, l.createExperiment)({
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
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
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
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                u = n("112679"),
                o = n("55689"),
                s = n("855133"),
                a = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: _,
                    onComplete: S,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: T,
                    analyticsObject: I,
                    analyticsLocation: m,
                    analyticsSourceLocation: h,
                    isGift: g = !1,
                    giftMessage: C,
                    subscriptionTier: N,
                    trialId: A,
                    postSuccessGuild: O,
                    openInvoiceId: v,
                    applicationId: U,
                    referralTrialOfferId: R,
                    giftRecipient: P,
                    returnRef: L
                } = null != e ? e : {}, D = !1, y = (0, l.v4)();
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
                            isGift: g,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                l(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                D = !0, null == S || S(), !g && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: T,
                            analyticsObject: I,
                            analyticsLocation: m,
                            analyticsSourceLocation: h,
                            trialId: A,
                            postSuccessGuild: O,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: v,
                            applicationId: U,
                            referralTrialOfferId: R,
                            returnRef: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && a.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != m ? m : I,
                            source: h,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != A,
                            application_id: U,
                            location_stack: T
                        }), (0, u.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == _ || _(D), D && (!g && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
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
                    return u
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return a
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
                u = () => {
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
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, l, r, u;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return l
                },
                PromotionFlags: function() {
                    return o
                }
            }), (r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.WINTER = 1] = "WINTER", (u = l || (l = {}))[u.SNOWGLOBE = 1] = "SNOWGLOBE", u[u.BOX = 2] = "BOX", u[u.CUP = 3] = "CUP", u[u.STANDARD_BOX = 4] = "STANDARD_BOX", u[u.CAKE = 5] = "CAKE", u[u.CHEST = 6] = "CHEST", u[u.COFFEE = 7] = "COFFEE";
            let o = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return r
                },
                getHighestLikelihood: function() {
                    return u
                }
            });
            var i = n("716849"),
                l = n("646718");

            function r(e, t, n) {
                return null == e ? l.PremiumTypes.TIER_2 : e[l.PremiumSubscriptionSKUs.TIER_0] * t > e[l.PremiumSubscriptionSKUs.TIER_2] * n ? l.PremiumTypes.TIER_0 : l.PremiumTypes.TIER_2
            }

            function u(e) {
                if (null == e) return l.PremiumTypes.TIER_0;
                let t = e[i.NON_SUBSCRIBER_SENTINEL],
                    n = e[l.PremiumSubscriptionSKUs.TIER_0],
                    r = e[l.PremiumSubscriptionSKUs.TIER_2];
                return r > n && r > t ? l.PremiumTypes.TIER_2 : l.PremiumTypes.TIER_0
            }
        },
        843647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                l = n("697218"),
                r = n("10514"),
                u = n("719923"),
                o = n("716849"),
                s = n("676572"),
                a = n("942377"),
                d = n("917247"),
                c = n("646718");

            function E(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: E
                } = e, f = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()), _ = (0, d.usePremiumTrialOffer)(), S = null != _, p = null != f && (0, u.isPremium)(f);
                (0, o.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: T,
                    useExpectedValue: I,
                    useLikelihood: m
                } = n.useExperiment({
                    location: null != E ? E : "1"
                }, {
                    autoTrackExposure: !p && !S && t
                }), {
                    premiumLikelihood: h,
                    fetched: g
                } = (0, i.useStateFromStoresObject)([s.default], () => {
                    let e = s.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), C = (0, i.useStateFromStores)([r.default], () => r.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), N = !p && T && !S && (I ? !g || !C : !g), A = c.PremiumTypes.TIER_2;
                if (S) {
                    let e = _.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? A = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (A = c.PremiumTypes.TIER_2)
                } else if (!p && !N && T) {
                    if (I) {
                        let {
                            amount: e
                        } = (0, u.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, u.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        A = (0, a.getHigherExpectedValue)(h, e, t)
                    } else m && (A = (0, a.getHighestLikelihood)(h))
                }
                return {
                    isLoading: N,
                    suggestedPremiumType: A
                }
            }
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
                u = n("850068"),
                o = n("271938"),
                s = n("160299"),
                a = n("357957");

            function d() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getDefaultBillingCountryCode()),
                    t = (0, l.useStateFromStores)([s.default], () => s.default.ipCountryCode),
                    n = (0, l.useStateFromStores)([o.default], () => o.default.isAuthenticated());
                return i.useEffect(() => {
                    r.default.wait(() => {
                        n && !s.default.isPaymentSourceFetching && !a.default.hasFetchedPaymentSources && u.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !s.default.ipCountryCodeLoaded && u.fetchIpCountryCode()
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
                    return E
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("862337"),
                u = n("697218"),
                o = n("340412"),
                s = n("719923"),
                a = n("646718");

            function d(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function c(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => a.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function E() {
                let e = (0, l.useStateFromStores)([o.default], () => o.default.getUserDiscount(a.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(d(e)),
                    c = (0, l.useStateFromStores)([u.default], () => (0, s.isPremium)(u.default.getCurrentUser()));
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
                u = n("446674"),
                o = n("77078"),
                s = n("79112"),
                a = n("685665"),
                d = n("788506"),
                c = n("649844"),
                E = n("393414"),
                f = n("797647"),
                _ = n("697218"),
                S = n("521012"),
                p = n("471671"),
                T = n("181114"),
                I = n("978679"),
                m = n("216422"),
                h = n("719923"),
                g = n("646718"),
                C = n("49111"),
                N = n("782340"),
                A = n("683437"),
                O = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: O,
                        size: v,
                        className: U,
                        trialId: R,
                        isTrialCTA: P,
                        buttonText: L,
                        buttonTextClassName: D,
                        postSuccessGuild: y,
                        onSubscribeModalClose: M,
                        premiumModalAnalyticsLocation: b,
                        showIcon: w = !0,
                        disableShine: k,
                        applicationId: G,
                        giftMessage: F,
                        overrideDisabledButtonText: x,
                        shinyButtonClassName: B,
                        ...H
                    } = e, V = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), j = (0, u.useStateFromStores)([p.default], () => p.default.isFocused()), K = (0, u.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, a.default)(), Y = e => {
                        if (e.preventDefault(), null == V) {
                            (0, E.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == O || O(e), (null == K ? void 0 : K.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), s.default.open(C.UserSettingsSections.PREMIUM), null == M || M(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: u,
                                trialId: s,
                                postSuccessGuild: a,
                                onSubscribeModalClose: d,
                                analyticsLocations: E,
                                premiumModalAnalyticsLocation: f,
                                applicationId: _,
                                giftMessage: S
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
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
                                (0, o.openModalLazy)(async () => {
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
                            let p = C.AnalyticsObjectTypes.BUY;
                            null != s ? p = C.AnalyticsObjectTypes.TRIAL : r && (p = C.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: u,
                                analyticsLocations: E,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: p,
                                    ...f
                                },
                                trialId: s,
                                postSuccessGuild: a,
                                onClose: d,
                                applicationId: _,
                                giftMessage: S
                            })
                        }({
                            isClaimed: V.isClaimed(),
                            isVerified: V.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: R,
                            postSuccessGuild: y,
                            onSubscribeModalClose: M,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: b,
                            applicationId: G,
                            giftMessage: F
                        })
                    };
                    if (P) return (0, i.jsxs)(o.Button, {
                        size: v,
                        className: U,
                        innerClassName: A.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: Y,
                        ...H,
                        children: [w && (0, i.jsx)(m.default, {
                            className: A.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(A.buttonText, D),
                            children: null != L ? L : N.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(o.Button, {
                        size: v,
                        className: U,
                        innerClassName: A.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: Y,
                        ...H,
                        children: [(0, i.jsx)(I.default, {
                            className: A.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(A.buttonText, D),
                            children: null != L ? L : N.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = N.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        J = null != K ? (0, h.getPremiumPlanItem)(K) : null,
                        X = null != J ? h.default.getPremiumType(J.planId) : null == V ? void 0 : V.premiumType,
                        q = l === g.PremiumSubscriptionSKUs.TIER_2 && null != X && [g.PremiumTypes.TIER_0, g.PremiumTypes.TIER_1].includes(X);
                    q && (z = N.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != K && K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, f.isNoneSubscription)(K.planId) && !q,
                        Z = Q ? null != x ? x : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== g.PremiumSubscriptionSKUs.LEGACY && t !== g.PremiumSubscriptionSKUs.TIER_0 && t !== g.PremiumSubscriptionSKUs.TIER_1 && t !== g.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? g.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != r ? g.PremiumTypeOrder[r] : null,
                                o = null != n ? g.PremiumTypeOrder[n] : null;
                            return null != o && null != u && u < o ? (i = N.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === g.PremiumTypes.TIER_2 && (l = N.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
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
                            color: l === g.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: v,
                            className: B,
                            wrapperClassName: U,
                            pauseAnimation: !j || k,
                            ...H,
                            ...e,
                            children: [w && (0, i.jsx)(m.default, {
                                className: A.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(A.buttonText, D),
                                children: null !== (n = null !== (t = null == Z ? void 0 : Z.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Z ? void 0 : Z.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
                        text: Z.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        789946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("77078"),
                s = n("812204"),
                a = n("685665"),
                d = n("617917"),
                c = n("599110"),
                E = n("719923"),
                f = n("154889"),
                _ = n("917247"),
                S = n("956597"),
                p = n("635956"),
                T = n("646718"),
                I = n("49111"),
                m = n("782340"),
                h = n("857513"),
                g = n("393828");

            function C(e) {
                var t, n, r;
                let {
                    title: C,
                    type: N,
                    guildBoostProps: A,
                    analyticsSource: O,
                    analyticsLocation: v,
                    body: U,
                    context: R,
                    glowUp: P,
                    modalClassName: L,
                    artContainerClassName: D,
                    bodyClassName: y,
                    transitionState: M,
                    onClose: b,
                    onSubscribeClick: w,
                    onSecondaryClick: k,
                    secondaryCTA: G,
                    subscribeButtonText: F,
                    showNewBadge: x = !1,
                    enableArtBoxShadow: B = !0,
                    subscriptionTier: H = T.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: V = !1,
                    hideBackButton: j,
                    backButtonText: K,
                    ...W
                } = e, Y = null != A, z = (0, _.usePremiumTrialOffer)(), J = (0, f.usePremiumDiscountOffer)(), X = ((null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, f.discountOfferHasTier)(J, H)) && !Y, {
                    analyticsLocations: q
                } = (0, a.default)(s.default.PREMIUM_UPSELL_MODAL);
                l.useEffect(() => {
                    !V && (Y ? c.default.track(I.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(N, " - Tier ").concat(A.boostedGuildTier),
                        guild_id: A.guild.id,
                        channel_id: A.channelId,
                        location: v,
                        location_stack: q
                    }) : c.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: N,
                        source: O,
                        location_stack: q,
                        sku_id: H
                    }))
                }, [Y, H, V]);
                let Q = B ? u(h.artContainer, h.artContainerBoxShadow, D) : u(h.artContainer, D),
                    Z = null;
                return Z = "artURL" in W ? (0, i.jsx)("img", {
                    className: h.art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement, (0, i.jsxs)(o.ModalRoot, {
                    className: u(h.root, L),
                    "aria-label": C,
                    transitionState: M,
                    children: [(0, i.jsxs)("div", {
                        className: Q,
                        children: [Z, x ? (0, i.jsx)("img", {
                            className: h.sparkleBadge,
                            alt: "",
                            src: g
                        }) : null]
                    }), (0, i.jsx)(o.ModalContent, {
                        className: h.content,
                        children: V ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                            children: X ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(S.default, {
                                    onClose: b,
                                    type: N,
                                    subscriptionTier: null !== (r = null == z ? void 0 : null === (n = z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : T.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: C,
                                    context: R,
                                    analyticsLocationObject: v,
                                    discountOffer: J,
                                    trialOffer: z,
                                    children: P
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.Heading, {
                                    className: h.header,
                                    variant: "heading-xl/semibold",
                                    children: C
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    className: u(y),
                                    children: U
                                })]
                            })
                        })
                    }), (0, i.jsxs)(o.ModalFooter, {
                        className: h.footer,
                        children: [(0, i.jsxs)("div", {
                            className: h.primaryActions,
                            children: [null != G ? (0, i.jsx)(o.Button, {
                                className: h.secondaryAction,
                                onClick: k,
                                size: o.Button.Sizes.SMALL,
                                color: o.Button.Colors.PRIMARY,
                                look: o.Button.Looks.LINK,
                                children: G
                            }) : null, (() => {
                                let e, t;
                                if (Y) return (0, i.jsx)(d.default, {
                                    analyticsLocation: v,
                                    guild: A.guild,
                                    onClose: b
                                });
                                if (X) {
                                    if (null != z) {
                                        var n, l;
                                        e = (0, E.formatTrialCtaIntervalDuration)({
                                            intervalType: null == z ? void 0 : null === (n = z.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == z ? void 0 : null === (l = z.subscription_trial) || void 0 === l ? void 0 : l.interval_count
                                        }), t = null == z ? void 0 : z.trial_id
                                    } else null != J && (e = m.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: J.discount.amount
                                    }))
                                }
                                return (0, i.jsx)(p.default, {
                                    premiumModalAnalyticsLocation: v,
                                    subscriptionTier: H,
                                    trialId: t,
                                    size: o.Button.Sizes.SMALL,
                                    color: o.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == w || w(), b()
                                    },
                                    buttonText: null != F ? F : e
                                })
                            })()]
                        }), !j && (0, i.jsx)(o.Button, {
                            onClick: b,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: null != K ? K : m.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        497296: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("626301"),
                r = n("552917"),
                u = n("843647"),
                o = n("789946"),
                s = n("646718"),
                a = n("49111"),
                d = n("782340"),
                c = n("718116"),
                E = n("431036");

            function f(e) {
                let {
                    onClose: t,
                    analyticsSource: n,
                    onLearnMore: f,
                    ..._
                } = e;

                function S() {
                    null == f || f(), t(), (0, l.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: p,
                    suggestedPremiumType: T
                } = (0, u.default)({
                    autoTrackExposure: !0,
                    experiment: r.default,
                    location: "video_backgrounds_upsell"
                }), I = T === s.PremiumTypes.TIER_0 ? s.PremiumSubscriptionSKUs.TIER_0 : s.PremiumSubscriptionSKUs.TIER_2, m = I === s.PremiumSubscriptionSKUs.TIER_0 ? d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: S
                }) : d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: S
                });
                return (0, i.jsx)(o.default, {
                    artURL: E,
                    artContainerClassName: c.videoBackgroundArt,
                    type: s.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: d.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: m,
                    glowUp: m,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: a.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: a.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: t,
                    subscriptionTier: I,
                    isLoading: p,
                    ..._
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return u
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var i, l, r = n("773336");
            let u = null;

            function o() {
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
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return s
                },
                DEFAULT_KEYBIND: function() {
                    return a
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let r = 32,
                u = 5,
                o = "DEFAULT";
            (l = i || (i = {}))[l.SUCCESS = 0] = "SUCCESS", l[l.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let s = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                a = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i, l, r = n("917351"),
                u = n.n(r),
                o = n("446674"),
                s = n("913144"),
                a = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                f = n("829536"),
                _ = n("846325"),
                S = n("49111"),
                p = n("397336");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let T = new Map,
                I = new Map,
                m = new Set,
                h = l.NOT_FETCHED,
                g = l.NOT_FETCHED,
                C = new Set,
                N = new Map,
                A = !1;

            function O(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let v = u.debounce(e => {
                E.default.track(S.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, f.amplitudeToPerceptual)(e))
                }), a.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function U(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? m.add(e) : m.delete(e);
                for (let e of m.keys()) null == i[e] && m.delete(e)
            }
            class R extends o.default.Store {
                initialize() {
                    this.waitFor(d.default), U(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(m)
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
                    return g === l.FETCHING
                }
                isFetchingDefaultSounds() {
                    return h === l.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return h === l.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return h === l.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = N.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != I.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return m.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return A
                }
                hasFetchedAllSounds() {
                    return g === l.FETCHED && h === l.FETCHED
                }
            }
            R.displayName = "SoundboardStore";
            var P = new R(s.default, {
                LOGOUT: function() {
                    T.clear(), I.clear(), N.clear(), A = !1, g = l.NOT_FETCHED, h = l.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    g = l.FETCHING
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
                    } = e, u = (null !== (n = I.get(l)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = N.get(r)) && void 0 !== i ? i : 0) + 1;
                    I.set(l, u), N.set(r, o), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: l
                    } = e, r = (null !== (t = I.get(i)) && void 0 !== t ? t : 0) - 1, u = (null !== (n = N.get(l)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? I.delete(i) : I.set(i, r), u <= 0 ? N.delete(l) : N.set(l, u)
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
                        C = new Set(null !== (r = null == i ? void 0 : null === (l = i.favoriteSoundboardSounds) || void 0 === l ? void 0 : l.soundIds) && void 0 !== r ? r : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && U(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    h = l.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(_.DEFAULT_SOUND_GUILD_ID, t), h = l.FETCHED
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
                    }), g = l.FETCHED
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
                    m.has(t) ? m.delete(t) : m.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), m = new Set(t.localSoundboardMutes)
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
                    return k
                }
            });
            var i, l, r = n("102053"),
                u = n("446674"),
                o = n("913144"),
                s = n("802493"),
                a = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                S = n("305961"),
                p = n("161585"),
                T = n("24373"),
                I = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let m = 2,
                h = new Map,
                g = new Map,
                C = null,
                N = [],
                A = null,
                O = !1,
                v = new Map,
                U = (e, t) => {
                    v = new Map(v.set(e, t))
                },
                R = 1e3 * I.Durations.HOUR,
                P = () => {
                    if (0 !== m) return;
                    let e = s.default.database();
                    if (null == e) return;
                    m = 2;
                    let t = (0, a.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !v.has(e)) {
                                for (let t of n) L(t, !0, S.default.getGuild(e));
                                U(e, n)
                            }
                    }
                },
                L = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    g.set(e.id, e), t && D(e, n)
                },
                D = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == C) return;
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
                        }), C.set(e.id, l)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let l = c.default.getByName(n),
                            r = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            C.set(e.id, u);
                            return
                        }
                        u.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => u.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, u)
                    }
                },
                y = (e, t, n) => {
                    h.set(e.id, e);
                    let i = [...N];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), N = i
                    }(t || n) && e.stickers.forEach(e => L(e))
                },
                M = () => {
                    v.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => D(e, n))
                    }), N.forEach(e => {
                        e.stickers.forEach(e => D(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => L(t, !0, e)), U(e.id, e.stickers))
            }
            class w extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, _.default, S.default)
                }
                get isLoaded() {
                    return 0 !== m
                }
                get stickerMetadata() {
                    return P(), null == C && (C = new Map, M()), C
                }
                get hasLoadedStickerPacks() {
                    return null != A && A + R > Date.now()
                }
                get isFetchingStickerPacks() {
                    return O
                }
                getStickerById(e) {
                    return !g.has(e) && P(), g.get(e)
                }
                getStickerPack(e) {
                    return h.get(e)
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
                    return P(), g.values()
                }
                getAllGuildStickers() {
                    return P(), v
                }
                getStickersByGuildId(e) {
                    return P(), v.get(e)
                }
            }
            w.displayName = "StickersStore";
            var k = new w(o.default, {
                BACKGROUND_SYNC: () => {
                    C = null, g = new Map, v = new Map, m = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, g = new Map, v = new Map, t.forEach(b), m = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === m && null == t.stickers && null != t.stickerUpdates && (m = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = v.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != C && C.delete(e.id), g.delete(e.id)
                    }), v.delete(n.id), v = new Map(v)
                },
                LOGOUT: () => {
                    m = 0, N = [], g.clear(), h.clear(), C = null, v.clear(), v = new Map(v), O = !1, A = null
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
                    n.forEach(e => L(e)), U(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = v.get(i)) && void 0 !== t ? t : [];
                    U(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), L(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    L(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = g.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = v.get(n)) && void 0 !== t ? t : [], u = r.filter(e => null == i.find(t => t.id === e.id));
                    u.forEach(e => {
                        g.delete(e.id), null != C && C.delete(e.id)
                    });
                    let o = i.map(e => l(e));
                    o.forEach(e => L(e)), U(n, o)
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
                    return u
                },
                default: function() {
                    return o
                }
            });
            var i = n("729912");
            let l = "@silent",
                r = new RegExp("^".concat(l, "(\\s|$)"));

            function u() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function o(e) {
                return u() && null != e.match(r) ? [!0, e.substring(l.length).trim()] : [!1, e]
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
                    max: u,
                    cos: o,
                    round: s
                } = Math, a = e[0] | e[1] << 8 | e[2] << 16, d = e[3] | e[4] << 8, c = (63 & a) / 63, E = (a >> 6 & 63) / 31.5 - 1, f = (a >> 12 & 63) / 31.5 - 1, _ = a >> 23, S = (d >> 3 & 63) / 63, p = (d >> 9 & 63) / 63, T = d >> 15, I = u(3, T ? _ ? 5 : 7 : 7 & d), m = u(3, T ? 7 & d : _ ? 5 : 7), h = _ ? (15 & e[5]) / 15 : 1, g = (e[5] >> 4) / 15, C = _ ? 6 : 5, N = 0, A = (t, n, i) => {
                    let l = [];
                    for (let r = 0; r < n; r++)
                        for (let u = r ? 0 : 1; u * n < t * (n - r); u++) l.push(((e[C + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * i);
                    return l
                }, O = A(I, m, (a >> 18 & 31) / 31 / 2), v = A(3, 3, S * n), U = A(3, 3, p * n), R = _ ? A(5, 5, g) : [], P = (0, i.thumbHashToApproximateAspectRatio)(e), L = s(P > 1 ? 32 : 32 * P), D = s(P > 1 ? 32 / P : 32), y = new Uint8Array(L * D * 4), M = [], b = [];
                for (let e = 0, n = 0; e < D; e++)
                    for (let i = 0; i < L; i++, n += 4) {
                        let s = c,
                            a = E,
                            d = f,
                            S = h;
                        for (let e = 0, t = u(I, _ ? 5 : 3); e < t; e++) M[e] = o(l / L * (i + .5) * e);
                        for (let t = 0, n = u(m, _ ? 5 : 3); t < n; t++) b[t] = o(l / D * (e + .5) * t);
                        for (let e = 0, n = 0; e < m; e++)
                            for (let i = e ? 0 : 1, l = 2 * b[e]; i * m < I * (m - e); i++, n++) !(i > t) && !(e > t) && (s += O[n] * M[i] * l);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * b[e]; n < 3 - e; n++, t++) {
                                let e = M[n] * i;
                                a += v[t] * e, d += U[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * b[e]; n < 5 - e; n++, t++) S += R[t] * M[n] * i;
                        let p = s - 2 / 3 * a,
                            T = (3 * s - p + d) / 2,
                            g = T - d;
                        y[n] = u(0, 255 * r(1, T)), y[n + 1] = u(0, 255 * r(1, g)), y[n + 2] = u(0, 255 * r(1, p)), y[n + 3] = u(0, 255 * r(1, S))
                    }
                return {
                    w: L,
                    h: D,
                    rgba: y
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function u() {
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
                u = n("376556"),
                o = n("450205"),
                s = n("813006"),
                a = n("49111");
            let d = new Set([a.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                f = [],
                _ = {},
                S = {},
                p = e => {
                    E = e.filter(e => !d.has(e.type) && u.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
                };
            class T extends i.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return f
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return f.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return S[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var I = new T(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
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
                    } = e, r = E.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != i && (r.revoked = i), null != l && (r.accessToken = l)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("446674"),
                l = n("913144"),
                r = n("9294"),
                u = n("49111");
            let o = {},
                s = {},
                a = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, r.parseExtraDataFromInviteKey)(e),
                    l = o[e],
                    s = null != l ? {
                        state: u.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(s), o = {
                    ...o,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (a = {
                    ...a,
                    [s.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return a[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, d(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = [];

            function u() {
                r = []
            }
            class o extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            o.displayName = "LayerStore";
            var s = new o(l.default, {
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
                LAYER_POP_ALL: u,
                LOGOUT: u,
                NOTIFICATION_CLICK: u
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                u = n("913144"),
                o = n("697218"),
                s = n("49111");
            let a = s.FormStates.CLOSED,
                d = null,
                c = null,
                E = {},
                f = {},
                _ = {},
                S = null,
                p = null,
                T = !1,
                I = !1,
                m = null,
                h = null,
                g = null,
                C = [],
                N = null,
                A = null;

            function O(e) {
                var t, n, i, l, r, u;
                let d = o.default.getCurrentUser();
                if (null == d) return v();
                c = null !== (t = e.section) && void 0 !== t ? t : c, N = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (E[c] = e.subsection), null != e.scrollPosition && null != c && (f[c] = e.scrollPosition), I = !!e.openWithoutBackstack, a = s.FormStates.OPEN, _ = {}, p = {
                    ...S = {
                        [s.UserSettingsSections.ACCOUNT]: {
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
                }, h = null !== (i = e.onClose) && void 0 !== i ? i : null, g = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, C = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], A = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function v() {
                a = s.FormStates.CLOSED, T = !1, S = null, N = null, p = null, d = null, c = null, E = {}, f = {}, h = null, g = null, C = [], A = null
            }

            function U() {
                a = s.FormStates.OPEN, _ = {}
            }
            class R extends r.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != p && null != S && (!!this.isOpen() || m === s.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(p, S)
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
                    return null != c ? E[c] : null
                }
                getScrollPosition() {
                    return null != c ? f[c] : null
                }
                shouldOpenWithoutBackstack() {
                    return I
                }
                getProps() {
                    return {
                        submitting: a === s.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? E[c] : null,
                        scrollPosition: null != c ? f[c] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: I,
                        analyticsLocation: g,
                        analyticsLocations: C,
                        initialSection: N,
                        impressionSource: A
                    }
                }
                get onClose() {
                    return h
                }
            }
            R.displayName = "UserSettingsModalStore";
            var P = new R(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, O(e)
                },
                USER_SETTINGS_MODAL_INIT: O,
                USER_SETTINGS_MODAL_CLOSE: v,
                LOGOUT: v,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    a = s.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (a !== s.FormStates.SUBMITTING) return !1;
                    a = s.FormStates.OPEN, c = s.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = c, c = e.section, g = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[c] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != c && delete E[c]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != c && delete f[c]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[s.UserSettingsSections.ACCOUNT];
                    p[s.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    U(), null != e && (p = {
                        ...S = {
                            [s.UserSettingsSections.ACCOUNT]: {
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
                    return m = e.tab, null == c && m === s.DrawerTabTypes.USER_SETTINGS && O({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                u = n("913144"),
                o = n("816454");
            let s = new Map;

            function a(e) {
                let t = s.get(e);
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
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return a(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return s.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return a(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return a(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(u.default, {
                WINDOW_INIT: function(e) {
                    l(!s.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return s.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = a(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (s.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = a(e.windowId);
                    return t.focused !== e.focused && (s.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = a(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (s.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return s.delete(e.windowId), !0
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
            var E = c
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return a
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return f
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
                    return m
                },
                dataUrlToFile: function() {
                    return h
                },
                isPNGAnimated: function() {
                    return g
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                u = n.n(r),
                o = n("48648"),
                s = n.n(o);

            function a(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: u = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), u);
                    let o = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * o), r), n = Math.max(Math.round(n * o), u)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return a({
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
                let u = 1;
                return (n = Math.round(n * r)) > l && (u = l / n), Math.min(r * u, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function f(e) {
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
                    u = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, u);
                let o = l.getImageData(0, 0, r, u).data,
                    a = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, u, o, s, a; l < t; l += n) u = e[(r = 4 * l) + 0], o = e[r + 1], s = e[r + 2], (void 0 === (a = e[r + 3]) || a >= 125) && !(u > 250 && o > 250 && s > 250) && i.push([u, o, s]);
                        return i
                    }(o, r * u, n),
                    d = s(a, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let p = e => T(e),
                T = u.memoize(e => new Promise((t, n) => {
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

            function m(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function h(e, t, n) {
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
            async function g(e) {
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
                u = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: s
                    } = {}
                } = e;
                if (null == i) {
                    null == s || s();
                    return
                }
                let d = i(_, c, u);

                function c() {
                    null == s || s()
                }

                function E(e) {
                    l(d), n(e)
                }

                function f(e) {
                    l(d), r(e)
                }

                function _(e) {
                    return o(d, _, c, {
                        ...u,
                        isLoading: !0
                    }), a({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    o(d, _, c, {
                        ...u,
                        error: t.body.message
                    })
                }
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = s,
                    isModalOpen: u = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, s;
                    if (l = e, s = u, l.body && 60008 === l.body.code || s && 429 === l.status) return r({
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
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, u.resolveThunk)(l) ? s : a)({
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
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("872717"),
                l = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: i,
                    ...r
                } = t, u = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let o = i.properties;
                        "function" == typeof i.properties && (o = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...u,
                            ...o
                        }), n(e)
                    })
                })
            }
            var u = {
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
                    return o
                },
                updateModalProps: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let u = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, i) {
                return (0, l.updateModal)(e, u(t, n, i))
            }
        }
    }
]);