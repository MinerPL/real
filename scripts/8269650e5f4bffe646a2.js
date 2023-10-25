(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77502"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return r
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return E
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return _
                },
                fetchPremiumSubscriptionPlans: function() {
                    return c
                },
                resetSubscriptionPlanData: function() {
                    return T
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("333805"),
                r = n("160299"),
                u = n("745279"),
                o = n("850068"),
                s = n("49111"),
                d = n("646718");
            async function E(e, t, n, d, E) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        u = {};
                    null != t && (u.country_code = t), null != n && (u.payment_source_id = n), null != d && (u.include_unpublished = d), null != E && (u.revenue_surface = E), a.query = u, !r.default.ipCountryCodeLoaded && await (0, o.fetchIpCountryCode)();
                    let _ = await i.default.get(a);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: _.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, u.captureBillingException)(t), new a.default(t)
                }
            }

            function _(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => E(e, t)))
            }

            function c(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => E(i, e, t, void 0, n)))
            }

            function T() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return S
                },
                accountDetailsClose: function() {
                    return I
                },
                disableAccount: function() {
                    return f
                },
                saveAccountRequest: function() {
                    return A
                },
                saveAccountChanges: function() {
                    return O
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectID: function() {
                    return g
                },
                clearErrors: function() {
                    return U
                },
                resetPendingAccountChanges: function() {
                    return L
                },
                resetAllPending: function() {
                    return M
                },
                resetAndCloseUserProfileForm: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var i = n("990746"),
                l = n("173333"),
                a = n("819855"),
                r = n("913144"),
                u = n("393414"),
                o = n("599110"),
                s = n("315102"),
                d = n("730622"),
                E = n("437822"),
                _ = n("49111"),
                c = n("191349"),
                T = n("782340");

            function S() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    l = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: l,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    E.default.logoutInternal(), (0, u.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function A(e) {
                let t = await i.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, r.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && r.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return r.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function O(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: a,
                    password: u,
                    avatar: E,
                    avatarDecoration: S,
                    newPassword: I,
                    globalName: f
                } = e;
                return r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let r = {
                        username: t,
                        email: i,
                        email_token: a,
                        password: u,
                        avatar: E,
                        discriminator: n,
                        global_name: f,
                        new_password: I,
                        ...e
                    };
                    null === S && (r.avatar_decoration_id = null), null != S && (r.avatar_decoration_id = S.id, r.avatar_decoration_sku_id = S.skuId);
                    let o = l.default.get(_.DEVICE_TOKEN),
                        s = (0, c.getDevicePushProvider)();
                    null != s && null != o && (r.push_provider = s, r.push_token = o);
                    let d = l.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != d && (r.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, r.push_voip_token = d), A(r)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => r.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), r.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return i.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function g(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function U() {
                r.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("990746"),
                l = n("173333"),
                a = n("913144"),
                r = n("211895"),
                u = n("26092"),
                o = n("599110"),
                s = n("315102"),
                d = n("730622"),
                E = n("49111"),
                _ = n("191349"),
                c = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, r.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = u.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: r,
                            emailToken: u,
                            password: T,
                            avatar: S,
                            newPassword: I,
                            discriminator: f
                        } = e, {
                            close: A
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: r,
                                    email_token: u,
                                    password: T,
                                    avatar: S,
                                    new_password: I,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                a = l.default.get(E.DEVICE_TOKEN),
                                o = (0, _.getDevicePushProvider)();
                            null != o && null != a && (t.push_provider = o, t.push_token = a);
                            let s = l.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != I && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: I
                            }), null != T && null != I && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), A ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
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
                    return E
                }
            });
            var i = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("77078"),
                o = n("782340"),
                s = n("430230");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: E,
                        maxLength: _,
                        transitionState: c,
                        helpMessage: T,
                        retryPrompt: S,
                        retrySuccessMessage: I
                    } = this.props, {
                        code: f,
                        errorMessage: A,
                        retrySuccess: O
                    } = this.state, p = l.Children.count(a) > 0 ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, N = null != S ? (0, i.jsxs)(u.Text, {
                        className: r(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(u.Clickable, {
                            className: r(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(u.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, R = O ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: I
                        })
                    }) : null;
                    return (0, i.jsx)(u.ModalRoot, {
                        transitionState: c,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(u.ModalContent, {
                                children: [null != T ? (0, i.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: T
                                }) : null, p, R, (0, i.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: f,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != d ? d : A
                                    }) : null, N]
                                })]
                            }), (0, i.jsxs)(u.ModalFooter, {
                                children: [(0, i.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: E || 0 === f.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            var E = d
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
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
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var i = n("773670"),
                l = n("599110");
            let a = () => i.useContext(l.AnalyticsContext)
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, a = l
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("605250"),
                l = n("802493");
            let a = new i.default("GuildStickers");
            var r = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return a.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    let a = l.default.stickersTransaction(i);
                    for (let i of (a.putAll(e, t), n)) a.delete(e, i)
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
        219352: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.STREAM = 0] = "STREAM", l[l.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("498225"),
                l = n("629109"),
                a = n("271938"),
                r = n("42887"),
                u = n("49111"),
                o = n("860604");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([a.default], () => a.default.getId()),
                    s = (0, i.useStateFromStores)([r.default], () => r.default.supports(o.Features.DISABLE_VIDEO) && r.default.isVideoEnabled()),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.isLocalVideoDisabled(n, t), [n, t]),
                    E = null == e || e === n;
                return [E && (s || d), d, e => {
                    let i = e ? u.VideoToggleState.DISABLED : u.VideoToggleState.MANUAL_ENABLED;
                    l.default.setDisableLocalVideo(n, i, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("452804"),
                a = n("135230"),
                r = n("219352"),
                u = n("782340");

            function o(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...o
                } = e, s = t === r.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === r.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(a.default, {
                    confirmText: u.default.Messages.CONFIRM,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: s,
                    cancelText: u.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        l.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...o
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("255397"),
                u = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => r.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("168973"),
                u = n("301603"),
                o = n("632616"),
                s = n("219352"),
                d = n("860604"),
                E = n("782340");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, _, c] = (0, u.default)(e, t),
                    T = (0, l.useStateFromStores)([r.default], () => r.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: E.default.Messages.SHOW_SELF_VIDEO,
                    checked: !_,
                    action: () => {
                        if (T || _) return c(!_);
                        (0, a.openModal)(e => (0, i.jsx)(o.default, {
                            ...e,
                            type: s.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => c(!_)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("648911"),
                u = n("271938"),
                o = n("42887"),
                s = n("782340"),
                d = n("526319");

            function E(e) {
                let t = (0, a.useModalContext)(),
                    E = (0, l.useStateFromStores)([o.default], () => o.default.isVideoEnabled()),
                    _ = (0, l.useStateFromStores)([u.default], () => u.default.getId() === e),
                    c = (0, r.default)();
                return (!E || c) && _ ? (0, i.jsx)(a.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: d.item,
                        children: E ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                videoEnabled: E
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("845579"),
                r = n("662255"),
                u = n("306160");

            function o(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: o,
                    shiftId: s,
                    showIconFirst: d
                } = e, E = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !E || !u.SUPPORTS_COPY) return null;
                let _ = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: _,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, u.copy)(n), null == o || o()
                    },
                    icon: r.default,
                    showIconFirst: d
                }, _)
            }
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return r
                },
                getApplicationResolution: function() {
                    return _
                },
                ApplicationStreamFPS: function() {
                    return u
                },
                ApplicationStreamPresets: function() {
                    return o
                },
                getApplicationFramerate: function() {
                    return c
                },
                ApplicationStreamPresetValues: function() {
                    return T
                },
                ApplicationStreamSettingRequirements: function() {
                    return S
                },
                ApplicationStreamResolutionButtons: function() {
                    return f
                },
                GoLiveDeviceResolutionButtons: function() {
                    return A
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return p
                },
                ApplicationStreamFPSButtons: function() {
                    return N
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return R
                }
            });
            var i, l, a, r, u, o, s = n("49111"),
                d = n("646718"),
                E = n("782340");

            function _(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function c(e) {
                switch (e) {
                    case u.FPS_5:
                        return u.FPS_5;
                    case u.FPS_15:
                        return u.FPS_15;
                    case u.FPS_30:
                        return u.FPS_30;
                    case u.FPS_60:
                        return u.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = r || (r = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (l = u || (u = {}))[l.FPS_5 = 5] = "FPS_5", l[l.FPS_15 = 15] = "FPS_15", l[l.FPS_30 = 30] = "FPS_30", l[l.FPS_60 = 60] = "FPS_60", (a = o || (o = {}))[a.PRESET_VIDEO = 1] = "PRESET_VIDEO", a[a.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", a[a.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let T = {
                    [o.PRESET_DOCUMENTS]: [{
                        resolution: r.RESOLUTION_SOURCE,
                        fps: u.FPS_15
                    }, {
                        resolution: r.RESOLUTION_SOURCE,
                        fps: u.FPS_5
                    }],
                    [o.PRESET_VIDEO]: [{
                        resolution: r.RESOLUTION_1440,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_1080,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_720,
                        fps: u.FPS_60
                    }, {
                        resolution: r.RESOLUTION_720,
                        fps: u.FPS_30
                    }],
                    [o.PRESET_CUSTOM]: []
                },
                S = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: u.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_60,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_30,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: u.FPS_15,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_60,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_30,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: u.FPS_15,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_60,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: u.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_60,
                    guildPremiumTier: s.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: u.FPS_5
                }];

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let f = [I(r.RESOLUTION_720), I(r.RESOLUTION_1080), I(r.RESOLUTION_1440), I(r.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                A = [I(r.RESOLUTION_720), I(r.RESOLUTION_1080), I(r.RESOLUTION_1440)],
                O = e => "".concat(e, "p"),
                p = [I(r.RESOLUTION_480, () => O(r.RESOLUTION_480)), I(r.RESOLUTION_720, () => O(r.RESOLUTION_720)), I(r.RESOLUTION_1080, () => O(r.RESOLUTION_1080)), I(r.RESOLUTION_1440, () => O(r.RESOLUTION_1440)), I(r.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                N = [I(u.FPS_15), I(u.FPS_30), I(u.FPS_60)],
                R = [I(u.FPS_15, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_15
                })), I(u.FPS_30, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_30
                })), I(u.FPS_60, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_60
                }))]
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return E
                },
                canSeeGuildHome: function() {
                    return _
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return c
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return T
                },
                GuildHomeBadgeExperiment: function() {
                    return S
                },
                GuildHomeFeedbackExperiment: function() {
                    return I
                },
                GuildHomeDeprecationExperiment: function() {
                    return f
                }
            });
            var i = n("498225"),
                l = n("203288"),
                a = n("862205"),
                r = n("21121"),
                u = n("923959"),
                o = n("305961"),
                s = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[u.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function E(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([u.default, l.default], () => null != e && d(e.id, u.default, l.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function _(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, r.isInMainTabsExperiment)()) return !1;
                let t = o.default.getGuild(e);
                return !!(null != t && d(e, u.default, l.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let c = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                T = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                S = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let I = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                f = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("479756"),
                r = n("38654"),
                u = n("9294"),
                o = n("26989"),
                s = n("337543"),
                d = n("697218"),
                E = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    a = d.default.getCurrentUser(),
                    r = !o.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await i.default.get({
                        url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: r,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, c = async (e, t) => {
                let n = await i.default.patch({
                        url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                l.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, T = async (e, t) => {
                let n = await i.default.patch({
                        url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                l.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, S = async (e, t) => {
                await i.default.patch({
                    url: E.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, I = async (e, t) => {
                if (r.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: E.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return l.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var f = {
                fetchVerificationForm: _,
                updateVerificationForm: c,
                updateVerificationFormDescription: T,
                enableVerificationForm: S,
                submitVerificationForm: I
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return r
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return E
                },
                MAX_CHOICE_LENGTH: function() {
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return c
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return T
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return S
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return f
                }
            });
            var i, l = n("567054");
            l.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([l.VerificationFormFieldTypes.TERMS]),
                r = new Set([l.VerificationFormFieldTypes.MULTIPLE_CHOICE, l.VerificationFormFieldTypes.TEXT_INPUT, l.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                o = 16,
                s = 300,
                d = 300,
                E = 8,
                _ = 150,
                c = 150,
                T = 1e3,
                S = 300,
                I = "Membership Gating",
                f = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return l
                }
            }), i = n("453265").default;
            let l = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("710835"),
                l = n("659500"),
                a = n("49111");
            let r = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, i.default)(e => r),
                o = e => {
                    u.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    u.setState({
                        shouldShowWarning: e
                    }), e && l.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("551042"),
                a = n("599110"),
                r = n("50926"),
                u = n("347977"),
                o = n("394294"),
                s = n("49111");
            let d = () => {
                    a.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                E = e => {
                    a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    E(e);
                    let a = async t => {
                        await r.default.submitVerificationForm(e, t)
                    };
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, u.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, l.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, l.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return A
                },
                updateImpersonating: function() {
                    return O
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return R
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return m
                }
            });
            var i = n("913144"),
                l = n("716241"),
                a = n("393414"),
                r = n("42203"),
                u = n("923959"),
                o = n("26989"),
                s = n("305961"),
                d = n("957255"),
                E = n("18494"),
                _ = n("282109"),
                c = n("599110"),
                T = n("38654"),
                S = n("507950"),
                I = n("49111"),
                f = n("724210");

            function A(e, t) {
                c.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), N(e)
            }

            function O(e, t) {
                let n = T.default.getData(e);
                null != n && n.type === t.type && (c.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === S.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), N(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function N(e) {
                let t = E.default.getChannelId(e),
                    n = r.default.getChannel(t),
                    i = null != t && (0, f.isStaticChannelRoute)(t);
                if (!i && !d.default.can(I.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(I.Routes.CHANNEL(e, t.id))
                }
            }

            function R(e, t, n) {
                let i = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), O(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function C(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let l = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            a = l.filter(e => !n.includes(e));
                        return a.length > 0 && R(e, a, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), O(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function m(e, t) {
                O(e, {
                    type: S.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return l
                }
            });
            var i = n("49111");

            function l(e, t, n, l) {
                let a = null != n ? n : t,
                    r = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return r || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return E
                },
                useInventoryGuildSettingsExperiment: function() {
                    return c
                }
            });
            var i = n("744196"),
                l = n("862205"),
                a = n("697218"),
                r = n("719923"),
                u = n("782340");
            let o = (0, l.createExperiment)({
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
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: a
                    } = n, u = r.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: u ? i : a
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
                    } : s({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                E = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([a.default], () => a.default.getCurrentUser()), r = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: u,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: E
                    } = s({
                        user: l,
                        config: r
                    }), _ = u && E && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: u,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                _ = (0, l.createExperiment)({
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
                c = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
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
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return d
                },
                setNewPendingAvatarDecoration: function() {
                    return E
                },
                setNewPendingProfileEffectID: function() {
                    return _
                },
                getProfilePreviewField: function() {
                    return c
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return S
                }
            });
            var i = n("773670"),
                l = n("152584"),
                a = n("234251"),
                r = n("783142"),
                u = n("26989");

            function o(e) {
                return i.useMemo(() => {
                    let t = u.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let a = t[l],
                            r = null === (i = a[e]) || void 0 === i ? void 0 : i.avatar;
                        null != r && (null == n[r] && (n[r] = []), n[r].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, r.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function E(e, t) {
                if ((0, a.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectID)(void 0);
                    return
                }(0, l.setPendingProfileEffectID)(e)
            }

            function c(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function S(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return r
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var i, l, a = n("773336");
            let r = null;

            function u() {
                return (0, a.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return A
                },
                inviteUserToStage: function() {
                    return O
                },
                audienceAckRequestToSpeak: function() {
                    return p
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return R
                },
                moveUserToAudience: function() {
                    return C
                },
                setEveryoneRolePermissionAllowed: function() {
                    return m
                },
                startStage: function() {
                    return g
                },
                editStage: function() {
                    return U
                },
                endStage: function() {
                    return L
                }
            });
            var i = n("161179"),
                l = n.n(i),
                a = n("754013"),
                r = n("990746"),
                u = n("450911");
            n("851387");
            var o = n("798609"),
                s = n("716241"),
                d = n("18494"),
                E = n("800762"),
                _ = n("991170"),
                c = n("716214"),
                T = n("230324"),
                S = n("738983"),
                I = n("808422"),
                f = n("49111");

            function A(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, s.trackWithMetadata)(f.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                l(null != i, "This channel cannot be guildless.");
                let a = E.default.getVoiceStateForChannel(e.id),
                    u = (0, I.getAudienceRequestToSpeakState)(a);
                return u === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, s.trackWithMetadata)(f.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(i),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function R(e, t, n) {
                let i = e.getGuildId();
                return l(null != i, "This channel cannot be guildless."), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function C(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), R(t, e.id, !0), r.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let i = e.getGuildId();
                l(null != i, "Channel cannot be guildless");
                let r = e.permissionOverwrites[i],
                    s = {
                        id: i,
                        type: o.PermissionOverwriteType.ROLE,
                        allow: _.default.NONE,
                        deny: _.default.NONE,
                        ...r
                    };
                n ? (s.allow = a.default.add(s.allow, t), s.deny = a.default.remove(s.deny, t)) : (s.allow = a.default.remove(s.allow, t), s.deny = a.default.add(s.deny, t)), u.default.updatePermissionOverwrite(e.id, s)
            }
            async function g(e, t, n, i) {
                if ("" === t) return;
                let l = d.default.getVoiceChannelId() === e.id;
                !l && (0, c.connectToStage)(e);
                let a = await (0, S.startStageInstance)(e.id, t, n, i);
                return p(e, !1, !0), a
            }
            async function U(e, t, n) {
                if ("" === t) return;
                let i = await (0, S.updateStageInstance)(e.id, t, n);
                return i
            }
            async function L(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return E
                },
                getRemoveModeratorTooltipHint: function() {
                    return _
                },
                getStageChannelMetadata: function() {
                    return c
                }
            }), n("427964");
            var i = n("945956"),
                l = n("387111"),
                a = n("991170"),
                r = n("834052"),
                u = n("837979"),
                o = n("49111"),
                s = n("606762"),
                d = n("782340");

            function E(e, t, n, i) {
                let a = t[0],
                    r = l.default.getName(e, n, a),
                    u = null != i ? i : t.length;
                return 1 === u && null != a ? r : null == a ? d.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: r,
                    count: u - 1
                })
            }

            function _(e, t) {
                switch (e) {
                    case s.RowType.OWNER:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case s.RowType.ADMINISTRATOR:
                        return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case s.RowType.MEMBER:
                    case s.RowType.ROLE:
                        return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case s.RowType.EMPTY_STATE:
                }
                return null
            }

            function c(e) {
                let t = r.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return r
                },
                endStageInstance: function() {
                    return u
                }
            });
            var i = n("990746"),
                l = n("49111");
            async function a(e, t, n, a, r) {
                let u = await i.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: r,
                        send_start_notification: a
                    }
                });
                return u.body
            }
            async function r(e, t, n) {
                let a = await i.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function u(e) {
                return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("498225"),
                l = n("271938"),
                a = n("18494"),
                r = n("808422");

            function u() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    n = (0, r.default)(t, e);
                return n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("498225"),
                l = n("42203"),
                a = n("18494");

            function r() {
                return (0, i.useStateFromStores)([a.default, l.default], () => {
                    let e = a.default.getVoiceChannelId();
                    if (null != e) {
                        let t = l.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("305961"),
                u = n("697218"),
                o = n("800762"),
                s = n("244480"),
                d = n("619395"),
                E = n("325861"),
                _ = n("77445"),
                c = n("130563"),
                T = n("782340");

            function S(e) {
                var t;
                let n = (0, c.default)(),
                    S = null == n ? void 0 : n.id,
                    I = null == n ? void 0 : n.guild_id,
                    f = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(I), [I]),
                    A = (0, l.useStateFromStores)([o.default], () => null != S ? o.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
                    O = (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    p = (0, _.default)(),
                    N = (0, l.useStateFromStores)([E.default], () => E.default.getPermissionsForUser(e.id, S), [S, e.id]),
                    R = (0, d.useCanModerateRequestToSpeak)(S);
                if (null == n || null == f || null == A || N.speaker) return null;
                let C = () => {
                    O ? (0, s.audienceAckRequestToSpeak)(n, !1) : (0, s.inviteUserToStage)(n, e.id)
                };
                return R ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: O ? T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : T.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: C
                }) : p && O ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: C
                }) : null
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var a = l
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return E
                }
            });
            var i, l, a = n("991170"),
                r = n("719923"),
                u = n("4233"),
                o = n("24373"),
                s = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = r.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = u.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || a.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                E = (e, t, n) => d(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("427964"),
                l = n.n(i),
                a = n("498225"),
                r = n("913144"),
                u = n("80507"),
                o = n("374363"),
                s = n("364685"),
                d = n("49111"),
                E = n("397336");
            let _ = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let c = new u.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                T = () => {
                    s.default.isLoaded && c.compute()
                },
                S = () => {
                    T()
                };

            function I() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class f extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (_ = e), this.syncWith([s.default], S), this.syncWith([o.default], I)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return c
                }
            }
            f.displayName = "StickersPersistedStore", f.persistKey = "StickersPersistedStoreV2";
            var A = new f(r.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        c.track(e), _.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), T()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== E.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var i, l, a = n("379279"),
                r = n("498225"),
                u = n("913144"),
                o = n("802493"),
                s = n("595525"),
                d = n("212084"),
                E = n("867805"),
                _ = n("267567"),
                c = n("813006"),
                T = n("778689"),
                S = n("305961"),
                I = n("161585"),
                f = n("24373"),
                A = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let O = 2,
                p = new Map,
                N = new Map,
                R = null,
                C = [],
                m = null,
                g = !1,
                U = new Map,
                L = (e, t) => {
                    U = new Map(U.set(e, t))
                },
                M = 1e3 * A.Durations.HOUR,
                h = () => {
                    if (0 !== O) return;
                    let e = o.default.database();
                    if (null == e) return;
                    O = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => a.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (T.default.isMember(e) && !U.has(e)) {
                                for (let t of n) P(t, !0, S.default.getGuild(e));
                                L(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    N.set(e.id, e), t && D(e, n)
                },
                D = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == R) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: I.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, f.isStandardSticker)(e)) {
                        let t = C.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: I.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: I.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), R.set(e.id, l)
                    } else if ((0, f.isGuildSticker)(e) && null != n) {
                        let l = E.default.getByName(n),
                            a = {
                                type: I.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            r = [i, a];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && r.push({
                                type: I.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            R.set(e.id, r);
                            return
                        }
                        r.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => r.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), R.set(e.id, r)
                    }
                },
                v = (e, t, n) => {
                    p.set(e.id, e);
                    let i = [...C];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), C = i
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                y = () => {
                    U.forEach((e, t) => {
                        let n = S.default.getGuild(t);
                        null != n && e.forEach(e => D(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => D(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), L(e.id, e.stickers))
            }
            class b extends r.default.Store {
                initialize() {
                    this.waitFor(o.default, T.default, S.default)
                }
                get isLoaded() {
                    return 0 !== O
                }
                get stickerMetadata() {
                    return h(), null == R && (R = new Map, y()), R
                }
                get hasLoadedStickerPacks() {
                    return null != m && m + M > Date.now()
                }
                get isFetchingStickerPacks() {
                    return g
                }
                getStickerById(e) {
                    return !N.has(e) && h(), N.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return C
                }
                isPremiumPack(e) {
                    return C.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return U
                }
                getAllStickersIterator() {
                    return h(), N.values()
                }
                getAllGuildStickers() {
                    return h(), U
                }
                getStickersByGuildId(e) {
                    return h(), U.get(e)
                }
            }
            b.displayName = "StickersStore";
            var F = new b(u.default, {
                BACKGROUND_SYNC: () => {
                    R = null, N = new Map, U = new Map, O = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    R = null, N = new Map, U = new Map, t.forEach(G), O = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (G(t), 1 === O && null == t.stickers && null != t.stickerUpdates && (O = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = U.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != R && R.delete(e.id), N.delete(e.id)
                    }), U.delete(n.id), U = new Map(U)
                },
                LOGOUT: () => {
                    O = 0, C = [], N.clear(), p.clear(), R = null, U.clear(), U = new Map(U), g = !1, m = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    g = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => v(e, !0)), m = Date.now(), g = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    v(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), L(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, a = null !== (t = U.get(i)) && void 0 !== t ? t : [];
                    L(i, [...null !== (n = a.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), P(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = N.get(e.id);
                        return null != n && (0, f.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, a = null !== (t = U.get(n)) && void 0 !== t ? t : [], r = a.filter(e => null == i.find(t => t.id === e.id));
                    r.forEach(e => {
                        N.delete(e.id), null != R && R.delete(e.id)
                    });
                    let u = i.map(e => l(e));
                    u.forEach(e => P(e)), L(n, u)
                }
            })
        },
        502533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("255397"),
                u = n("191145"),
                o = n("800762"),
                s = n("49111"),
                d = n("782340");

            function E(e, t) {
                let n = (0, l.useStateFromStores)([u.default], () => e === u.default.getSelectedParticipantId(t), [t, e]),
                    E = (0, l.useStateFromStores)([u.default, o.default], () => {
                        let n = o.default.isInChannel(t, e) && o.default.hasVideo(t),
                            i = u.default.getLayout(t),
                            l = i === s.ChannelLayouts.MINIMUM || i === s.ChannelLayouts.NORMAL;
                        return !n || l
                    }, [t, e]);
                return E ? null : (0, i.jsx)(a.MenuItem, {
                    id: "focus-video",
                    label: n ? d.default.Messages.UNFOCUS_PARTICIPANT : d.default.Messages.FOCUS_PARTICIPANT,
                    action: () => r.default.selectParticipant(t, n ? null : e)
                })
            }
        },
        692986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("404118"),
                u = n("629109"),
                o = n("235004"),
                s = n("42887"),
                d = n("945956"),
                E = n("162771"),
                _ = n("697218"),
                c = n("423487"),
                T = n("599110"),
                S = n("49111"),
                I = n("860604"),
                f = n("782340"),
                A = n("838442");

            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.MediaEngineContextTypes.DEFAULT,
                    n = (0, l.useStateFromStores)([_.default], () => {
                        var t;
                        return (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    O = (0, l.useStateFromStores)([o.default], () => o.default.isLocalSoundboardMuted(e)),
                    {
                        muted: p,
                        deafened: N = !1,
                        localVideoDisabled: R = !1,
                        localVideoAutoDisabled: C = !1
                    } = (0, l.useStateFromStoresObject)([s.default], () => n ? {
                        muted: s.default.isSelfMute(t),
                        deafened: s.default.isSelfDeaf(t)
                    } : {
                        muted: s.default.isLocalMute(e, t),
                        localVideoDisabled: s.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: s.default.isLocalVideoAutoDisabled(e, t)
                    }, [n, t, e]),
                    m = s.default.supports(I.Features.DISABLE_VIDEO) && !n ? (0, i.jsx)(a.MenuCheckboxItem, {
                        id: "disable-video",
                        label: f.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (C) {
                                r.default.show({
                                    title: f.default.Messages.UNSTABLE_CONNECTION,
                                    body: f.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: f.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: f.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => u.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let n = R ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
                            u.default.setDisableLocalVideo(e, n, t)
                        },
                        checked: R,
                        subtext: C ? (0, i.jsxs)("div", {
                            className: A.videoPaused,
                            children: [(0, i.jsx)(c.default, {
                                width: 12,
                                className: A.warningCircle
                            }), f.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    g = n ? null : (0, i.jsx)(a.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: f.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let n = d.default.getRTCConnection();
                            T.default.track(S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: E.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !O
                            }), u.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: O
                    }, "soundboard-sound-mute");
                return n ? [(0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: f.default.Messages.SOUND_MUTE,
                    action: () => u.default.toggleSelfMute({
                        context: t
                    }),
                    checked: p
                }, "self-mute"), (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "deafen",
                    label: f.default.Messages.DEAFEN,
                    action: () => u.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: N
                }, "self-deafen"), m] : [(0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: f.default.Messages.SOUND_MUTE,
                    action: () => u.default.toggleLocalMute(e, t),
                    checked: p
                }, "self-mute"), g, m]
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("629109"),
                u = n("42887"),
                o = n("697218"),
                s = n("829536"),
                d = n("773336"),
                E = n("860604"),
                _ = n("782340");

            function c(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT,
                    c = (0, l.useStateFromStores)([u.default], () => u.default.getLocalVolume(e, n), [e, n]),
                    T = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    S = n === E.MediaEngineContextTypes.STREAM;
                return T ? null : (0, i.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: S ? _.default.Messages.STREAM_VOLUME : _.default.Messages.USER_VOLUME,
                    control: (t, l) => (0, i.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: l,
                        value: (0, s.amplitudeToPerceptual)(c),
                        maxValue: d.isPlatformEmbedded ? 200 : 100,
                        onChange: t => r.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
                        "aria-label": S ? _.default.Messages.STREAM_VOLUME : _.default.Messages.USER_VOLUME
                    })
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return c
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return O
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return C
                },
                setTryItOutThemeColors: function() {
                    return m
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("448993"),
                r = n("884351"),
                u = n("845579"),
                o = n("697218"),
                s = n("599110"),
                d = n("49111"),
                E = n("646718");

            function _(e) {
                s.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, s;
                let E = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == E) return;
                let _ = u.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = r.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: E
                    });
                    let n = await i.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: E,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new a.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new a.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(E.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(E.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(E.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                l = n("54239"),
                a = n("49111");

            function r() {
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
                }), (0, l.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("498225"),
                l = n("42887"),
                a = n("512244");

            function r() {
                return (0, i.useStateFromStores)([l.default], () => (0, a.default)(l.default))
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
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
            var a = l
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("377849"),
                l = n.n(i),
                a = n("666038");
            class r extends a.default {
                static createFromServer(e) {
                    var t;
                    return new r({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: l(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
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
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("498225"),
                l = n("913144");
            let a = [];

            function r() {
                a = []
            }
            class u extends i.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            u.displayName = "LayerStore";
            var o = new u(l.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: r,
                LOGOUT: r,
                NOTIFICATION_CLICK: r
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("427964"),
                l = n.n(i),
                a = n("498225"),
                r = n("913144"),
                u = n("697218"),
                o = n("49111");
            let s = o.FormStates.CLOSED,
                d = null,
                E = null,
                _ = {},
                c = {},
                T = {},
                S = null,
                I = null,
                f = !1,
                A = !1,
                O = null,
                p = null,
                N = null,
                R = [],
                C = null,
                m = null;

            function g(e) {
                var t, n, i, l, a, r;
                let d = u.default.getCurrentUser();
                if (null == d) return U();
                E = null !== (t = e.section) && void 0 !== t ? t : E, C = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (_[E] = e.subsection), null != e.scrollPosition && null != E && (c[E] = e.scrollPosition), A = !!e.openWithoutBackstack, s = o.FormStates.OPEN, T = {}, I = {
                    ...S = {
                        [o.UserSettingsSections.ACCOUNT]: {
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
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, N = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, R = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], m = null !== (r = e.impressionSource) && void 0 !== r ? r : null
            }

            function U() {
                s = o.FormStates.CLOSED, f = !1, S = null, C = null, I = null, d = null, E = null, _ = {}, c = {}, p = null, N = null, R = [], m = null
            }

            function L() {
                s = o.FormStates.OPEN, T = {}
            }
            class M extends a.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                hasChanges() {
                    return null != I && null != S && (!!this.isOpen() || O === o.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(I, S)
                }
                isOpen() {
                    return f
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? _[E] : null
                }
                getScrollPosition() {
                    return null != E ? c[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return A
                }
                getProps() {
                    return {
                        submitting: s === o.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? _[E] : null,
                        scrollPosition: null != E ? c[E] : null,
                        settings: I,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: N,
                        analyticsLocations: R,
                        initialSection: C,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return p
                }
            }
            M.displayName = "UserSettingsModalStore";
            var h = new M(r.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, g(e)
                },
                USER_SETTINGS_MODAL_INIT: g,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== o.FormStates.SUBMITTING) return !1;
                    s = o.FormStates.OPEN, E = o.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = E, E = e.section, N = null, R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != E && delete _[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == I && (I = {});
                    let n = I[o.UserSettingsSections.ACCOUNT];
                    I[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = u.default.getCurrentUser();
                    L(), null != e && (I = {
                        ...S = {
                            [o.UserSettingsSections.ACCOUNT]: {
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
                    return O = e.tab, null == E && O === o.DrawerTabTypes.USER_SETTINGS && g({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("35647"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return u
                }
            });
            var i = n("895393"),
                l = n("773336"),
                a = n("50885");
            let r = (() => {
                if (l.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!r && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var i = n("427964"),
                l = n.n(i);
            let a = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("697218"),
                r = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, u = e.updateModalProps, l = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let d = i(T, E, r);

                function E() {
                    null == o || o()
                }

                function _(e) {
                    l(d), n(e)
                }

                function c(e) {
                    l(d), a(e)
                }

                function T(e) {
                    return u(d, T, E, {
                        ...r,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: _,
                        reject: c,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    u(d, T, E, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: a = o,
                    isModalOpen: r = !1,
                    ...u
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, o;
                    if (l = e, o = r, l.body && 60008 === l.body.code || o && 429 === l.status) return a({
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
                    checkEnabled: l = null !== (i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(l) ? o : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("551042"),
                a = n("920636");
            let r = (e, t, n) => function(l) {
                return (0, i.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function u(e, t, n) {
                return (0, l.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, l.updateModal)(e, r(t, n, i))
            }
        }
    }
]);