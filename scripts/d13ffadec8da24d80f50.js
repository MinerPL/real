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
                    return s
                },
                fetchUserEntitlements: function() {
                    return a
                },
                fetchGiftableEntitlements: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("271560"),
                u = n("49111");

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: u.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                        url: u.Endpoints.ENTITLEMENTS_FOR_USER,
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
            async function o() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: u.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return u
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
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return u
                },
                updateAddressInfo: function() {
                    return s
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

            function u() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
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
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("913144"),
                u = n("211895"),
                s = n("26092"),
                a = n("599110"),
                o = n("315102"),
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
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: u,
                            emailToken: s,
                            password: _,
                            avatar: S,
                            newPassword: T,
                            discriminator: p
                        } = e, {
                            close: I
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: s,
                                    password: _,
                                    avatar: S,
                                    new_password: T,
                                    ...e,
                                    discriminator: null != p && "" !== p ? p : void 0
                                },
                                l = r.default.get(c.DEVICE_TOKEN),
                                a = (0, E.getDevicePushProvider)();
                            null != a && null != l && (t.push_provider = a, t.push_token = l);
                            let o = r.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != o && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = o), i.default.patch({
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
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return a.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, o.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != T && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: T
                            }), null != _ && null != T && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), I ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
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
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                s = n("77078"),
                a = n("782340"),
                o = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: S,
                        retrySuccessMessage: T
                    } = this.props, {
                        code: p,
                        errorMessage: I,
                        retrySuccess: h
                    } = this.state, m = r.Children.count(l) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: o.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, g = null != S ? (0, i.jsxs)(s.Text, {
                        className: u(o.submitText, o.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: u(o.spacing, o.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, C = h ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: o.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: T
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: f,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: o.spacing,
                                    children: _
                                }) : null, m, C, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: o.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: o.error,
                                        children: null != d ? d : I
                                    }) : null, g]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
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
                    return u
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return s
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return a
                },
                insertAccessibilityLabelElements: function() {
                    return o
                }
            });
            var i = n("476765"),
                r = n("782340");
            let l = (0, i.uid)(),
                u = (0, i.uid)(),
                s = (0, i.uid)(),
                a = (0, i.uid)();

            function o() {
                [{
                    id: l,
                    text: ","
                }, {
                    id: u,
                    text: ","
                }, {
                    id: s,
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
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var u = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
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
            var i, r, l, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = r || (r = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return s
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

            function s() {
                let {
                    paymentsBlocked: e
                } = l.useExperiment({
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
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var a = l
        },
        115279: function(e, t, n) {
            "use strict";
            var i, r, l, u, s, a, o, d, c, E, f;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return _
                },
                EmojiCategories: function() {
                    return r
                },
                EmojiSubCategory: function() {
                    return l
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return S
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return T
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return I
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return h
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return m
                },
                REACTION_PICKER_TAB_ID: function() {
                    return g
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return a
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                GIF_PICKER_TAB_ID: function() {
                    return A
                },
                EMOJI_SIZE_MAP: function() {
                    return N
                },
                EMOJI_ROW_SIZE: function() {
                    return U
                }
            }), (o = i || (i = {})).GUILD = "GUILD", o.PACK = "PACK", o.UNICODE = "UNICODE", o.RECENT = "RECENT", o.CUSTOM = "CUSTOM", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.FAVORITES = "FAVORITES", o.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", o.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let _ = "emoji-picker-grid";
            (d = r || (r = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = l || (l = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (E = u || (u = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let S = -1;
            (f = s || (s = {}))[f.MEDIUM = 40] = "MEDIUM", f[f.LARGE = 48] = "LARGE";
            let T = "emoji-picker-tab-panel",
                p = "emoji-picker-tab",
                I = "soundboard-picker-tab-panel",
                h = "soundboard-picker-tab",
                m = "reaction-picker-tab-panel",
                g = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (a || (a = {})).TOOLTIP = "tooltip";
            let O = "gif-picker-tab-panel",
                A = "gif-picker-tab",
                N = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                U = 9
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function u(e, t) {
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
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
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
                let u = i.parse(n),
                    s = (0, r.getFirstQueryStringValue)(u[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
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
                    return f
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                u = n("719923"),
                s = n("782340");
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
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l
                    } = n, s = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: s ? i : l
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
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), u = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = o({
                        user: r,
                        config: u
                    }), E = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, r.createExperiment)({
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
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => s.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
            var r = n("748820"),
                l = n("77078"),
                u = n("112679"),
                s = n("55689"),
                a = n("855133"),
                o = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: _,
                    onComplete: S,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: p,
                    analyticsObject: I,
                    analyticsLocation: h,
                    analyticsSourceLocation: m,
                    isGift: g = !1,
                    giftMessage: C,
                    subscriptionTier: O,
                    trialId: A,
                    postSuccessGuild: N,
                    openInvoiceId: U,
                    applicationId: v,
                    referralTrialOfferId: R,
                    giftRecipient: P,
                    returnRef: L
                } = null != e ? e : {}, D = !1, y = (0, r.v4)();
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
                            loadId: y,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: g,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                D = !0, null == S || S(), !g && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: p,
                            analyticsObject: I,
                            analyticsLocation: h,
                            analyticsSourceLocation: m,
                            trialId: A,
                            postSuccessGuild: N,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: U,
                            applicationId: v,
                            referralTrialOfferId: R,
                            returnRef: L
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: y,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != h ? h : I,
                            source: m,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != A,
                            application_id: v,
                            location_stack: p
                        }), (0, u.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == _ || _(D), D && (!g && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
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
                    return u
                },
                setCanPlayWowMoment: function() {
                    return s
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return o
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
                u = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                s = e => {
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
            var i, r, l, u;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return s
                }
            }), (l = i || (i = {}))[l.DEFAULT = 0] = "DEFAULT", l[l.WINTER = 1] = "WINTER", (u = r || (r = {}))[u.SNOWGLOBE = 1] = "SNOWGLOBE", u[u.BOX = 2] = "BOX", u[u.CUP = 3] = "CUP", u[u.STANDARD_BOX = 4] = "STANDARD_BOX", u[u.CAKE = 5] = "CAKE", u[u.CHEST = 6] = "CHEST", u[u.COFFEE = 7] = "COFFEE";
            let s = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        942377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHigherExpectedValue: function() {
                    return l
                },
                getHighestLikelihood: function() {
                    return u
                }
            });
            var i = n("716849"),
                r = n("646718");

            function l(e, t, n) {
                return null == e ? r.PremiumTypes.TIER_2 : e[r.PremiumSubscriptionSKUs.TIER_0] * t > e[r.PremiumSubscriptionSKUs.TIER_2] * n ? r.PremiumTypes.TIER_0 : r.PremiumTypes.TIER_2
            }

            function u(e) {
                if (null == e) return r.PremiumTypes.TIER_0;
                let t = e[i.NON_SUBSCRIBER_SENTINEL],
                    n = e[r.PremiumSubscriptionSKUs.TIER_0],
                    l = e[r.PremiumSubscriptionSKUs.TIER_2];
                return l > n && l > t ? r.PremiumTypes.TIER_2 : r.PremiumTypes.TIER_0
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
                r = n("697218"),
                l = n("10514"),
                u = n("719923"),
                s = n("716849"),
                a = n("676572"),
                o = n("942377"),
                d = n("917247"),
                c = n("646718");

            function E(e) {
                let {
                    autoTrackExposure: t,
                    experiment: n,
                    location: E
                } = e, f = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), _ = (0, d.usePremiumTrialOffer)(), S = null != _, T = null != f && (0, u.isPremium)(f);
                (0, s.useMaybeFetchPremiumLikelihood)(n);
                let {
                    enabled: p,
                    useExpectedValue: I,
                    useLikelihood: h
                } = n.useExperiment({
                    location: null != E ? E : "1"
                }, {
                    autoTrackExposure: !T && !S && t
                }), {
                    premiumLikelihood: m,
                    fetched: g
                } = (0, i.useStateFromStoresObject)([a.default], () => {
                    let e = a.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), C = (0, i.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), O = !T && p && !S && (I ? !g || !C : !g), A = c.PremiumTypes.TIER_2;
                if (S) {
                    let e = _.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? A = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (A = c.PremiumTypes.TIER_2)
                } else if (!T && !O && p) {
                    if (I) {
                        let {
                            amount: e
                        } = (0, u.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, u.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        A = (0, o.getHigherExpectedValue)(m, e, t)
                    } else h && (A = (0, o.getHighestLikelihood)(m))
                }
                return {
                    isLoading: O,
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
                r = n("446674"),
                l = n("913144"),
                u = n("850068"),
                s = n("271938"),
                a = n("160299"),
                o = n("357957");

            function d() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([a.default], () => a.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([s.default], () => s.default.isAuthenticated());
                return i.useEffect(() => {
                    l.default.wait(() => {
                        n && !a.default.isPaymentSourceFetching && !o.default.hasFetchedPaymentSources && u.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !a.default.ipCountryCodeLoaded && u.fetchIpCountryCode()
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
                r = n("446674"),
                l = n("862337"),
                u = n("697218"),
                s = n("340412"),
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

            function E() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getUserDiscount(o.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(d(e)),
                    c = (0, r.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
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
                    return N
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("446674"),
                s = n("77078"),
                a = n("79112"),
                o = n("685665"),
                d = n("788506"),
                c = n("649844"),
                E = n("393414"),
                f = n("797647"),
                _ = n("697218"),
                S = n("521012"),
                T = n("471671"),
                p = n("181114"),
                I = n("978679"),
                h = n("216422"),
                m = n("719923"),
                g = n("646718"),
                C = n("49111"),
                O = n("782340"),
                A = n("683437"),
                N = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: r,
                        onClick: N,
                        size: U,
                        className: v,
                        trialId: R,
                        isTrialCTA: P,
                        buttonText: L,
                        buttonTextClassName: D,
                        postSuccessGuild: y,
                        onSubscribeModalClose: M,
                        premiumModalAnalyticsLocation: b,
                        showIcon: w = !0,
                        disableShine: k,
                        applicationId: F,
                        giftMessage: G,
                        overrideDisabledButtonText: x,
                        shinyButtonClassName: B,
                        ...H
                    } = e, j = (0, u.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, u.useStateFromStores)([T.default], () => T.default.isFocused()), K = (0, u.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), {
                        analyticsLocations: W
                    } = (0, o.default)(), Y = e => {
                        if (e.preventDefault(), null == j) {
                            (0, E.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == N || N(e), (null == K ? void 0 : K.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, d.trackPremiumSettingsPaneOpened)(), a.default.open(C.UserSettingsSections.PREMIUM), null == M || M(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: r,
                                isGift: l,
                                subscriptionTier: u,
                                trialId: a,
                                postSuccessGuild: o,
                                onSubscribeModalClose: d,
                                analyticsLocations: E,
                                premiumModalAnalyticsLocation: f,
                                applicationId: _,
                                giftMessage: S
                            } = e;
                            if (!t) {
                                (0, s.openModalLazy)(async () => {
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
                                (0, s.openModalLazy)(async () => {
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
                            let T = C.AnalyticsObjectTypes.BUY;
                            null != a ? T = C.AnalyticsObjectTypes.TRIAL : l && (T = C.AnalyticsObjectTypes.GIFT), (0, c.default)({
                                isGift: l,
                                initialPlanId: null,
                                subscriptionTier: u,
                                analyticsLocations: E,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: T,
                                    ...f
                                },
                                trialId: a,
                                postSuccessGuild: o,
                                onClose: d,
                                applicationId: _,
                                giftMessage: S
                            })
                        }({
                            isClaimed: j.isClaimed(),
                            isVerified: j.verified,
                            isGift: t,
                            subscriptionTier: r,
                            trialId: R,
                            postSuccessGuild: y,
                            onSubscribeModalClose: M,
                            analyticsLocations: W,
                            premiumModalAnalyticsLocation: b,
                            applicationId: F,
                            giftMessage: G
                        })
                    };
                    if (P) return (0, i.jsxs)(s.Button, {
                        size: U,
                        className: v,
                        innerClassName: A.premiumSubscribeButton,
                        look: s.Button.Looks.INVERTED,
                        onClick: Y,
                        ...H,
                        children: [w && (0, i.jsx)(h.default, {
                            className: A.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: l(A.buttonText, D),
                            children: null != L ? L : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(s.Button, {
                        size: U,
                        className: v,
                        innerClassName: A.giftButton,
                        color: s.Button.Colors.PRIMARY,
                        onClick: Y,
                        ...H,
                        children: [(0, i.jsx)(I.default, {
                            className: A.giftIcon
                        }), (0, i.jsx)("span", {
                            className: l(A.buttonText, D),
                            children: null != L ? L : O.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        J = null != K ? (0, m.getPremiumPlanItem)(K) : null,
                        X = null != J ? m.default.getPremiumType(J.planId) : null == j ? void 0 : j.premiumType,
                        q = r === g.PremiumSubscriptionSKUs.TIER_2 && null != X && [g.PremiumTypes.TIER_0, g.PremiumTypes.TIER_1].includes(X);
                    q && (z = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != K && K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, f.isNoneSubscription)(K.planId) && !q,
                        Z = Q ? null != x ? x : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, r = null;
                            if (null != t && t !== g.PremiumSubscriptionSKUs.LEGACY && t !== g.PremiumSubscriptionSKUs.TIER_0 && t !== g.PremiumSubscriptionSKUs.TIER_1 && t !== g.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            };
                            let l = null != t ? g.PremiumSubscriptionSKUToPremiumType[t] : null,
                                u = null != l ? g.PremiumTypeOrder[l] : null,
                                s = null != n ? g.PremiumTypeOrder[n] : null;
                            return null != s && null != u && u < s ? (i = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (i = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === g.PremiumTypes.TIER_2 && (r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: r,
                            currentPremiumType: X
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(p.default, {
                            disabled: Q,
                            onClick: Y,
                            innerClassName: A.premiumSubscribeButton,
                            color: r === g.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            size: U,
                            className: B,
                            wrapperClassName: v,
                            pauseAnimation: !V || k,
                            ...H,
                            ...e,
                            children: [w && (0, i.jsx)(h.default, {
                                className: A.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: l(A.buttonText, D),
                                children: null !== (n = null !== (t = null == Z ? void 0 : Z.disabledButtonText) && void 0 !== t ? t : L) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Z ? void 0 : Z.disabledButtonTooltipText) != null ? (0, i.jsx)(s.Tooltip, {
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
                r = n("884691"),
                l = n("414456"),
                u = n.n(l),
                s = n("77078"),
                a = n("812204"),
                o = n("685665"),
                d = n("617917"),
                c = n("599110"),
                E = n("719923"),
                f = n("154889"),
                _ = n("917247"),
                S = n("956597"),
                T = n("635956"),
                p = n("646718"),
                I = n("49111"),
                h = n("782340"),
                m = n("857513"),
                g = n("393828");

            function C(e) {
                var t, n, l;
                let {
                    title: C,
                    type: O,
                    guildBoostProps: A,
                    analyticsSource: N,
                    analyticsLocation: U,
                    body: v,
                    context: R,
                    glowUp: P,
                    modalClassName: L,
                    artContainerClassName: D,
                    bodyClassName: y,
                    transitionState: M,
                    onClose: b,
                    onSubscribeClick: w,
                    onSecondaryClick: k,
                    secondaryCTA: F,
                    subscribeButtonText: G,
                    showNewBadge: x = !1,
                    enableArtBoxShadow: B = !0,
                    subscriptionTier: H = p.PremiumSubscriptionSKUs.TIER_2,
                    isLoading: j = !1,
                    hideBackButton: V,
                    backButtonText: K,
                    ...W
                } = e, Y = null != A, z = (0, _.usePremiumTrialOffer)(), J = (0, f.usePremiumDiscountOffer)(), X = ((null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, f.discountOfferHasTier)(J, H)) && !Y, {
                    analyticsLocations: q
                } = (0, o.default)(a.default.PREMIUM_UPSELL_MODAL);
                r.useEffect(() => {
                    !j && (Y ? c.default.track(I.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(O, " - Tier ").concat(A.boostedGuildTier),
                        guild_id: A.guild.id,
                        channel_id: A.channelId,
                        location: U,
                        location_stack: q
                    }) : c.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: O,
                        source: N,
                        location_stack: q,
                        sku_id: H
                    }))
                }, [Y, H, j]);
                let Q = B ? u(m.artContainer, m.artContainerBoxShadow, D) : u(m.artContainer, D),
                    Z = null;
                return Z = "artURL" in W ? (0, i.jsx)("img", {
                    className: m.art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement, (0, i.jsxs)(s.ModalRoot, {
                    className: u(m.root, L),
                    "aria-label": C,
                    transitionState: M,
                    children: [(0, i.jsxs)("div", {
                        className: Q,
                        children: [Z, x ? (0, i.jsx)("img", {
                            className: m.sparkleBadge,
                            alt: "",
                            src: g
                        }) : null]
                    }), (0, i.jsx)(s.ModalContent, {
                        className: m.content,
                        children: j ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(i.Fragment, {
                            children: X ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(S.default, {
                                    onClose: b,
                                    type: O,
                                    subscriptionTier: null !== (l = null == z ? void 0 : null === (n = z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : p.PremiumSubscriptionSKUs.TIER_2,
                                    headingText: C,
                                    context: R,
                                    analyticsLocationObject: U,
                                    discountOffer: J,
                                    trialOffer: z,
                                    children: P
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(s.Heading, {
                                    className: m.header,
                                    variant: "heading-xl/semibold",
                                    children: C
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: u(y),
                                    children: v
                                })]
                            })
                        })
                    }), (0, i.jsxs)(s.ModalFooter, {
                        className: m.footer,
                        children: [(0, i.jsxs)("div", {
                            className: m.primaryActions,
                            children: [null != F ? (0, i.jsx)(s.Button, {
                                className: m.secondaryAction,
                                onClick: k,
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: F
                            }) : null, (() => {
                                let e, t;
                                if (Y) return (0, i.jsx)(d.default, {
                                    analyticsLocation: U,
                                    guild: A.guild,
                                    onClose: b
                                });
                                if (X) {
                                    if (null != z) {
                                        var n, r;
                                        e = (0, E.formatTrialCtaIntervalDuration)({
                                            intervalType: null == z ? void 0 : null === (n = z.subscription_trial) || void 0 === n ? void 0 : n.interval,
                                            intervalCount: null == z ? void 0 : null === (r = z.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                                        }), t = null == z ? void 0 : z.trial_id
                                    } else null != J && (e = h.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                                        percent: J.discount.amount
                                    }))
                                }
                                return (0, i.jsx)(T.default, {
                                    premiumModalAnalyticsLocation: U,
                                    subscriptionTier: H,
                                    trialId: t,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.GREEN,
                                    onClick: () => {
                                        null == w || w(), b()
                                    },
                                    buttonText: null != G ? G : e
                                })
                            })()]
                        }), !V && (0, i.jsx)(s.Button, {
                            onClick: b,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != K ? K : h.default.Messages.BACK
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
            var r = n("626301"),
                l = n("552917"),
                u = n("843647"),
                s = n("789946"),
                a = n("646718"),
                o = n("49111"),
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
                    null == f || f(), t(), (0, r.navigateToPremiumMarketingPage)()
                }
                let {
                    isLoading: T,
                    suggestedPremiumType: p
                } = (0, u.default)({
                    autoTrackExposure: !0,
                    experiment: l.default,
                    location: "video_backgrounds_upsell"
                }), I = p === a.PremiumTypes.TIER_0 ? a.PremiumSubscriptionSKUs.TIER_0 : a.PremiumSubscriptionSKUs.TIER_2, h = I === a.PremiumSubscriptionSKUs.TIER_0 ? d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                    onLearnMore: S
                }) : d.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                    onLearnMore: S
                });
                return (0, i.jsx)(s.default, {
                    artURL: E,
                    artContainerClassName: c.videoBackgroundArt,
                    type: a.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
                    title: d.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: h,
                    glowUp: h,
                    analyticsSource: n,
                    analyticsLocation: {
                        page: o.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: o.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: t,
                    subscriptionTier: I,
                    isLoading: T,
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
                    return s
                }
            });
            var i, r, l = n("773336");
            let u = null;

            function s() {
                return (0, l.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
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
            let l = 32,
                u = 5,
                s = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
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
                    return P
                }
            });
            var i, r, l = n("917351"),
                u = n.n(l),
                s = n("446674"),
                a = n("913144"),
                o = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                f = n("829536"),
                _ = n("846325"),
                S = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let p = new Map,
                I = new Map,
                h = new Set,
                m = r.NOT_FETCHED,
                g = r.NOT_FETCHED,
                C = new Set,
                O = new Map,
                A = !1;

            function N(e) {
                let {
                    sound: t
                } = e, n = p.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, p.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), p.set(t.guildId, [...n]))
            }
            let U = u.debounce(e => {
                E.default.track(S.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, f.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function v(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? h.add(e) : h.delete(e);
                for (let e of h.keys()) null == i[e] && h.delete(e)
            }
            class R extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), v(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(p),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(h)
                    }
                }
                getSounds() {
                    return p
                }
                getSoundsForGuild(e) {
                    return p.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(_.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = p.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(p.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return g === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return m === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return m === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return m === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = O.get(e);
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
                    return h.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return A
                }
                hasFetchedAllSounds() {
                    return g === r.FETCHED && m === r.FETCHED
                }
            }
            R.displayName = "SoundboardStore";
            var P = new R(a.default, {
                LOGOUT: function() {
                    p.clear(), I.clear(), O.clear(), A = !1, g = r.NOT_FETCHED, m = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    g = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: N,
                GUILD_SOUNDBOARD_SOUND_UPDATE: N,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    p.delete(t);
                    let i = p.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), p.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, u = (null !== (n = I.get(r)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = O.get(l)) && void 0 !== i ? i : 0) + 1;
                    I.set(r, u), O.set(l, s), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = I.get(i)) && void 0 !== t ? t : 0) - 1, u = (null !== (n = O.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? I.delete(i) : I.set(i, l), u <= 0 ? O.delete(r) : O.set(r, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    U(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    I.clear(), O.clear()
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
                        C = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && v(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    m = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    p.set(_.DEFAULT_SOUND_GUILD_ID, t), m = r.FETCHED
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
                        p.set(t, n)
                    }), g = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    p.delete(t.id)
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
                    p = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), h = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    p.set(t, n)
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
            var i, r, l = n("102053"),
                u = n("446674"),
                s = n("913144"),
                a = n("802493"),
                o = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                S = n("305961"),
                T = n("161585"),
                p = n("24373"),
                I = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let h = 2,
                m = new Map,
                g = new Map,
                C = null,
                O = [],
                A = null,
                N = !1,
                U = new Map,
                v = (e, t) => {
                    U = new Map(U.set(e, t))
                },
                R = 1e3 * I.Durations.HOUR,
                P = () => {
                    if (0 !== h) return;
                    let e = a.default.database();
                    if (null == e) return;
                    h = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !U.has(e)) {
                                for (let t of n) L(t, !0, S.default.getGuild(e));
                                v(e, n)
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
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, p.isStandardSticker)(e)) {
                        let t = O.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), C.set(e.id, r)
                    } else if ((0, p.isGuildSticker)(e) && null != n) {
                        let r = c.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            C.set(e.id, u);
                            return
                        }
                        u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => u.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, u)
                    }
                },
                y = (e, t, n) => {
                    m.set(e.id, e);
                    let i = [...O];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), O = i
                    }(t || n) && e.stickers.forEach(e => L(e))
                },
                M = () => {
                    U.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => D(e, n))
                    }), O.forEach(e => {
                        e.stickers.forEach(e => D(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => L(t, !0, e)), v(e.id, e.stickers))
            }
            class w extends u.default.Store {
                initialize() {
                    this.waitFor(a.default, _.default, S.default)
                }
                get isLoaded() {
                    return 0 !== h
                }
                get stickerMetadata() {
                    return P(), null == C && (C = new Map, M()), C
                }
                get hasLoadedStickerPacks() {
                    return null != A && A + R > Date.now()
                }
                get isFetchingStickerPacks() {
                    return N
                }
                getStickerById(e) {
                    return !g.has(e) && P(), g.get(e)
                }
                getStickerPack(e) {
                    return m.get(e)
                }
                getPremiumPacks() {
                    return O
                }
                isPremiumPack(e) {
                    return O.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return U
                }
                getAllStickersIterator() {
                    return P(), g.values()
                }
                getAllGuildStickers() {
                    return P(), U
                }
                getStickersByGuildId(e) {
                    return P(), U.get(e)
                }
            }
            w.displayName = "StickersStore";
            var k = new w(s.default, {
                BACKGROUND_SYNC: () => {
                    C = null, g = new Map, U = new Map, h = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, g = new Map, U = new Map, t.forEach(b), h = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === h && null == t.stickers && null != t.stickerUpdates && (h = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = U.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != C && C.delete(e.id), g.delete(e.id)
                    }), U.delete(n.id), U = new Map(U)
                },
                LOGOUT: () => {
                    h = 0, O = [], g.clear(), m.clear(), C = null, U.clear(), U = new Map(U), N = !1, A = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    N = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => y(e, !0)), A = Date.now(), N = !1
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
                    n.forEach(e => L(e)), v(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = U.get(i)) && void 0 !== t ? t : [];
                    v(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), L(r)
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
                    } = e, r = e => {
                        let t;
                        let n = g.get(e.id);
                        return null != n && (0, p.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = U.get(n)) && void 0 !== t ? t : [], u = l.filter(e => null == i.find(t => t.id === e.id));
                    u.forEach(e => {
                        g.delete(e.id), null != C && C.delete(e.id)
                    });
                    let s = i.map(e => r(e));
                    s.forEach(e => L(e)), v(n, s)
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
                    return u
                },
                default: function() {
                    return s
                }
            });
            var i = n("729912");
            let r = "@silent",
                l = new RegExp("^".concat(r, "(\\s|$)"));

            function u() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return u() && null != e.match(l) ? [!0, e.substring(r.length).trim()] : [!1, e]
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
                    max: u,
                    cos: s,
                    round: a
                } = Math, o = e[0] | e[1] << 8 | e[2] << 16, d = e[3] | e[4] << 8, c = (63 & o) / 63, E = (o >> 6 & 63) / 31.5 - 1, f = (o >> 12 & 63) / 31.5 - 1, _ = o >> 23, S = (d >> 3 & 63) / 63, T = (d >> 9 & 63) / 63, p = d >> 15, I = u(3, p ? _ ? 5 : 7 : 7 & d), h = u(3, p ? 7 & d : _ ? 5 : 7), m = _ ? (15 & e[5]) / 15 : 1, g = (e[5] >> 4) / 15, C = _ ? 6 : 5, O = 0, A = (t, n, i) => {
                    let r = [];
                    for (let l = 0; l < n; l++)
                        for (let u = l ? 0 : 1; u * n < t * (n - l); u++) r.push(((e[C + (O >> 1)] >> ((1 & O++) << 2) & 15) / 7.5 - 1) * i);
                    return r
                }, N = A(I, h, (o >> 18 & 31) / 31 / 2), U = A(3, 3, S * n), v = A(3, 3, T * n), R = _ ? A(5, 5, g) : [], P = (0, i.thumbHashToApproximateAspectRatio)(e), L = a(P > 1 ? 32 : 32 * P), D = a(P > 1 ? 32 / P : 32), y = new Uint8Array(L * D * 4), M = [], b = [];
                for (let e = 0, n = 0; e < D; e++)
                    for (let i = 0; i < L; i++, n += 4) {
                        let a = c,
                            o = E,
                            d = f,
                            S = m;
                        for (let e = 0, t = u(I, _ ? 5 : 3); e < t; e++) M[e] = s(r / L * (i + .5) * e);
                        for (let t = 0, n = u(h, _ ? 5 : 3); t < n; t++) b[t] = s(r / D * (e + .5) * t);
                        for (let e = 0, n = 0; e < h; e++)
                            for (let i = e ? 0 : 1, r = 2 * b[e]; i * h < I * (h - e); i++, n++) !(i > t) && !(e > t) && (a += N[n] * M[i] * r);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * b[e]; n < 3 - e; n++, t++) {
                                let e = M[n] * i;
                                o += U[t] * e, d += v[t] * e
                            }
                        if (_)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * b[e]; n < 5 - e; n++, t++) S += R[t] * M[n] * i;
                        let T = a - 2 / 3 * o,
                            p = (3 * a - T + d) / 2,
                            g = p - d;
                        y[n] = u(0, 255 * l(1, p)), y[n + 1] = u(0, 255 * l(1, g)), y[n + 2] = u(0, 255 * l(1, T)), y[n + 3] = u(0, 255 * l(1, S))
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
                r = n("54239"),
                l = n("49111");

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
                }), (0, r.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
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
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                u = n("376556"),
                s = n("450205"),
                a = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                f = [],
                _ = {},
                S = {},
                T = e => {
                    E = e.filter(e => !d.has(e.type) && u.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
                };
            class p extends i.default.Store {
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
            p.displayName = "ConnectedAccountsStore";
            var I = new p(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = E.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
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
                r = n("913144"),
                l = n("9294"),
                u = n("49111");
            let s = {},
                a = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = s[e],
                    a = null != r ? {
                        state: u.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), s = {
                    ...s,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
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
                    return a[e.code] = e.error, d(e.code, e => {
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
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = [];

            function u() {
                l = []
            }
            class s extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            s.displayName = "LayerStore";
            var a = new s(r.default, {
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
                r = n.n(i),
                l = n("446674"),
                u = n("913144"),
                s = n("697218"),
                a = n("49111");
            let o = a.FormStates.CLOSED,
                d = null,
                c = null,
                E = {},
                f = {},
                _ = {},
                S = null,
                T = null,
                p = !1,
                I = !1,
                h = null,
                m = null,
                g = null,
                C = [],
                O = null,
                A = null;

            function N(e) {
                var t, n, i, r, l, u;
                let d = s.default.getCurrentUser();
                if (null == d) return U();
                c = null !== (t = e.section) && void 0 !== t ? t : c, O = null !== (n = e.section) && void 0 !== n ? n : c, null != e.subsection && null != c && (E[c] = e.subsection), null != e.scrollPosition && null != c && (f[c] = e.scrollPosition), I = !!e.openWithoutBackstack, o = a.FormStates.OPEN, _ = {}, T = {
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
                }, m = null !== (i = e.onClose) && void 0 !== i ? i : null, g = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, C = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], A = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function U() {
                o = a.FormStates.CLOSED, p = !1, S = null, O = null, T = null, d = null, c = null, E = {}, f = {}, m = null, g = null, C = [], A = null
            }

            function v() {
                o = a.FormStates.OPEN, _ = {}
            }
            class R extends l.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != T && null != S && (!!this.isOpen() || h === a.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(T, S)
                }
                isOpen() {
                    return p
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
                        submitting: o === a.FormStates.SUBMITTING,
                        section: c,
                        subsection: null != c ? E[c] : null,
                        scrollPosition: null != c ? f[c] : null,
                        settings: T,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: I,
                        analyticsLocation: g,
                        analyticsLocations: C,
                        initialSection: O,
                        impressionSource: A
                    }
                }
                get onClose() {
                    return m
                }
            }
            R.displayName = "UserSettingsModalStore";
            var P = new R(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    p = !0, N(e)
                },
                USER_SETTINGS_MODAL_INIT: N,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
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
                    null == T && (T = {});
                    let n = T[a.UserSettingsSections.ACCOUNT];
                    T[a.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: v,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    v(), null != e && (T = {
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
                    return h = e.tab, null == c && h === a.DrawerTabTypes.USER_SETTINGS && N({
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
                r = n("913144"),
                l = n("697218"),
                u = n("719923"),
                s = n("521012");
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

            function E() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscounts = {}, !0)
            }
            class f extends i.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : a, this.waitFor(l.default), this.syncWith([l.default], c), this.syncWith([s.default], E)
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
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = l.default.getCurrentUser();
                    return (0, u.isPremium)(e) ? [] : Object.values(o.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = l.default.getCurrentUser();
                    return (0, u.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
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
            f.displayName = "UserOfferStore", f.persistKey = "UserOfferStore";
            var _ = new f(r.default, {
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
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                u = n("913144"),
                s = n("816454");
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
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(u.default, {
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
            var E = c
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
                    return E
                },
                makeCssUrlString: function() {
                    return f
                },
                getPalette: function() {
                    return S
                },
                getPaletteForAvatar: function() {
                    return T
                },
                readFileAsBase64: function() {
                    return I
                },
                dataUriFileSize: function() {
                    return h
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return g
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                u = n.n(l),
                s = n("48648"),
                a = n.n(s);

            function o(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: u = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), u);
                    let s = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * s), l), n = Math.max(Math.round(n * s), u)
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
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let u = 1;
                return (n = Math.round(n * l)) > r && (u = r / n), Math.min(l * u, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function f(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function S(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return _;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    u = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, u);
                let s = r.getImageData(0, 0, l, u).data,
                    o = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, u, s, a, o; r < t; r += n) u = e[(l = 4 * r) + 0], s = e[l + 1], a = e[l + 2], (void 0 === (o = e[l + 3]) || o >= 125) && !(u > 250 && s > 250 && a > 250) && i.push([u, s, a]);
                        return i
                    }(s, l * u, n),
                    d = a(o, t);
                return "boolean" == typeof d ? _ : d.palette()
            }
            let T = e => p(e),
                p = u.memoize(e => new Promise((t, n) => {
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
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function h(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function m(e, t, n) {
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
            async function g(e) {
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
                u = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, s = e.updateModalProps, r = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == i) {
                    null == a || a();
                    return
                }
                let d = i(_, c, u);

                function c() {
                    null == a || a()
                }

                function E(e) {
                    r(d), n(e)
                }

                function f(e) {
                    r(d), l(e)
                }

                function _(e) {
                    return s(d, _, c, {
                        ...u,
                        isLoading: !0
                    }), o({
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
                    s(d, _, c, {
                        ...u,
                        error: t.body.message
                    })
                }
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = a,
                    isModalOpen: u = !1,
                    ...s
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, a;
                    if (r = e, a = u, r.body && 60008 === r.body.code || a && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...s
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, u.resolveThunk)(r) ? a : o)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
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
                r = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: i,
                    ...l
                } = t, u = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let s = i.properties;
                        "function" == typeof i.properties && (s = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...u,
                            ...s
                        }), n(e)
                    })
                })
            }
            var u = {
                get: function(e) {
                    return l(i.default.get, e, "get")
                },
                post: function(e) {
                    return l(i.default.post, e, "post")
                },
                put: function(e) {
                    return l(i.default.put, e, "put")
                },
                patch: function(e) {
                    return l(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let u = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function s(e, t, n) {
                return (0, r.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, r.updateModal)(e, u(t, n, i))
            }
        }
    }
]);