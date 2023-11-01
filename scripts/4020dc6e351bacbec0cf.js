(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57641"], {
        817295: function(e, t, n) {
            "use strict";

            function i() {
                return n.el("225629").then(n.bind(n, "225629"))
            }
            async function l(e, t, n, l, r) {
                let o = await i();
                return o.crop_gif(e, t, n, l, r)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                wasmCropGIF: function() {
                    return l
                }
            })
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
                    return o
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

            function o() {
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
                    return o
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return u
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

            function o() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function u() {
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
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return E
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return c
                },
                fetchPremiumSubscriptionPlans: function() {
                    return d
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("333805"),
                o = n("160299"),
                a = n("745279"),
                u = n("850068"),
                s = n("49111"),
                _ = n("646718");
            async function E(e, t, n, _, E) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let r = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != _ && (a.include_unpublished = _), null != E && (a.revenue_surface = E), r.query = a, !o.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let c = await i.default.get(r);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: c.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new r.default(t)
                }
            }

            function c(e, t) {
                return Promise.all(e.filter(e => e !== _.PremiumSubscriptionSKUs.NONE).map(e => E(e, t)))
            }

            function d(e, t, n) {
                return Promise.all(_.ACTIVE_PREMIUM_SKUS.filter(e => e !== _.PremiumSubscriptionSKUs.NONE).map(i => E(i, e, t, void 0, n)))
            }

            function I() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("913144"),
                o = n("211895"),
                a = n("26092"),
                u = n("599110"),
                s = n("315102"),
                _ = n("730622"),
                E = n("49111"),
                c = n("191349"),
                d = n("782340"),
                I = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(e, t, n)
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
                        let e = a.default.onClose;
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
                            email: o,
                            emailToken: a,
                            password: I,
                            avatar: T,
                            newPassword: A,
                            discriminator: O
                        } = e, {
                            close: N
                        } = t;
                        return (0, _.default)(e => {
                            let t = {
                                    username: n,
                                    email: o,
                                    email_token: a,
                                    password: I,
                                    avatar: T,
                                    new_password: A,
                                    ...e,
                                    discriminator: null != O && "" !== O ? O : void 0
                                },
                                r = l.default.get(E.DEVICE_TOKEN),
                                u = (0, c.getDevicePushProvider)();
                            null != u && null != r && (t.push_provider = u, t.push_token = r);
                            let s = l.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: d.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                            return u.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != A && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: A
                            }), null != I && null != A && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), N ? this.close() : this.submitComplete(), e
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
                    return E
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                a = n("77078"),
                u = n("782340"),
                s = n("347129");
            class _ extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: _,
                        isLoading: E,
                        maxLength: c,
                        transitionState: d,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: O,
                        errorMessage: N,
                        retrySuccess: R
                    } = this.state, S = l.Children.count(r) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, p = null != T ? (0, i.jsxs)(a.Text, {
                        className: o(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: o(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, C = R ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: d,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != I ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: I
                                }) : null, S, C, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != c ? c : 10,
                                        value: O,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != _ ? _ : N
                                    }) : null, p]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: E || 0 === O.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            _.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var E = _
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class o extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                l = n("49111"),
                r = n("782340");
            class o extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
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
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        115279: function(e, t, n) {
            "use strict";
            var i, l, r, o, a, u, s, _, E, c, d;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return I
                },
                EmojiCategories: function() {
                    return l
                },
                EmojiSubCategory: function() {
                    return r
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return T
                },
                EmojiSize: function() {
                    return a
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return O
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return N
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return R
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                REACTION_PICKER_TAB_ID: function() {
                    return p
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return m
                },
                GIF_PICKER_TAB_ID: function() {
                    return L
                },
                EMOJI_SIZE_MAP: function() {
                    return M
                },
                EMOJI_ROW_SIZE: function() {
                    return f
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let I = "emoji-picker-grid";
            (_ = l || (l = {})).RECENT = "recent", _.FAVORITES = "favorites", _.TOP_GUILD_EMOJI = "top guild emoji", _.CUSTOM = "custom", _.PEOPLE = "people", _.NATURE = "nature", _.FOOD = "food", _.ACTIVITY = "activity", _.TRAVEL = "travel", _.OBJECTS = "objects", _.SYMBOLS = "symbols", _.FLAGS = "flags", _.PREMIUM_UPSELL = "premium emoji", (E = r || (r = {})).NONE = "", E.TOP_GUILD_EMOJI = "top_server", E.NEWLY_ADDED_EMOJI = "newly_added", (c = o || (o = {}))[c.EMOJI = 0] = "EMOJI", c[c.NSFW = 1] = "NSFW";
            let T = -1;
            (d = a || (a = {}))[d.MEDIUM = 40] = "MEDIUM", d[d.LARGE = 48] = "LARGE";
            let A = "emoji-picker-tab-panel",
                O = "emoji-picker-tab",
                N = "soundboard-picker-tab-panel",
                R = "soundboard-picker-tab",
                S = "reaction-picker-tab-panel",
                p = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let m = "gif-picker-tab-panel",
                L = "gif-picker-tab",
                M = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                f = 9
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return r
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return u
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return E
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return d
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return I
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return A
                },
                BANNER_ASPECT_RATIO: function() {
                    return O
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return N
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return R
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return S
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return L
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return M
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return f
                },
                MessageTypes: function() {
                    return o
                }
            });
            var i, l, r, o, a = n("917219");
            (i = r || (r = {}))[i.AVATAR = 0] = "AVATAR", i[i.BANNER = 1] = "BANNER", i[i.GUILD_BANNER = 2] = "GUILD_BANNER", i[i.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", i[i.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", i[i.HOME_HEADER = 5] = "HOME_HEADER", i[i.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let u = 568,
                s = 2400,
                _ = 848,
                E = 2400,
                c = 1350,
                d = 2400,
                I = 960,
                T = 2400,
                A = 600,
                O = 17 / 6,
                N = 16 / 9,
                R = 2.5,
                S = 4,
                p = u / O,
                C = u / N,
                m = u / R,
                L = u / S,
                M = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                f = u / M;
            (l = o || (o = {}))[l.CROP_GIF_START = 0] = "CROP_GIF_START", l[l.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", l[l.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        57015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("917351"),
                o = n("77078"),
                a = n("812204"),
                u = n("685665"),
                s = n("652914"),
                _ = n("95689"),
                E = n("599110"),
                c = n("8731"),
                d = n("817295"),
                I = n("75015"),
                T = n("49111"),
                A = n("917219"),
                O = n("782340"),
                N = n("879777"),
                R = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: R,
                        allowSkip: S = !1,
                        onCrop: p,
                        onClose: C,
                        uploadType: m = I.UploadTypes.AVATAR,
                        showUpsellHeader: L = !1,
                        analyticsPage: M
                    } = e, [f, U] = l.useState({
                        width: 0,
                        height: 0
                    }), [h, P] = l.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [g, D] = l.useState(!1), [G, b] = l.useState(1), [v, y] = l.useState({
                        x: 0,
                        y: 0
                    }), [w, B] = l.useState(null), [H, V] = l.useState(!1), {
                        AnalyticsLocationProvider: F
                    } = (0, u.default)(a.default.IMAGE_CROPPING_MODAL), k = l.useRef({
                        x: 0,
                        y: 0
                    }), x = l.useRef(null), W = l.useRef(null), K = "image/gif" === t.type;
                    l.useEffect(() => {
                        (0, d.default)()
                    }, []), l.useEffect(() => {
                        K && L && E.default.track(T.AnalyticEvents.OPEN_MODAL, {
                            type: T.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: M
                            }
                        })
                    }, [L, M, K]);
                    let Y = () => {
                            switch (m) {
                                case I.UploadTypes.BANNER:
                                    return {
                                        height: I.USER_BANNER_MAX_HEIGHT, width: I.USER_BANNER_MAX_WIDTH
                                    };
                                case I.UploadTypes.VIDEO_BACKGROUND:
                                    return A.BACKGROUND_REPLACEMENT_SIZE;
                                case I.UploadTypes.AVATAR:
                                case I.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: T.AVATAR_MAX_SIZE, width: T.AVATAR_MAX_SIZE
                                    };
                                case I.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: I.GUILD_BANNER_MAX_HEIGHT, width: I.GUILD_BANNER_MAX_WIDTH
                                    };
                                case I.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: I.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: I.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case I.UploadTypes.HOME_HEADER:
                                    return {
                                        height: I.HOME_HEADER_MAX_HEIGHT, width: I.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        j = l.useCallback((e, t, n) => {
                            k.current = (0, c.getBoundedCoordinates)(e, t, n), null != x.current && (x.current.style.transform = "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0)"))
                        }, [x]),
                        X = l.useCallback(() => {
                            if (null == x.current || G > 1) return;
                            let {
                                width: e,
                                height: t
                            } = x.current.getBoundingClientRect(), {
                                width: n,
                                height: i
                            } = (0, c.adjustImageDimensionsForAspectRatio)(m, e, t), l = (0, c.calculateOverlaySize)(m, n, i, t);
                            B({
                                width: n,
                                height: i
                            }), U(l), P((0, c.calculateDragBoundaries)(n, i, l))
                        }, [m, G]),
                        z = l.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = k.current;
                            if (!g || e.clientX === t && e.clientY === n) return;
                            let i = e.clientX - v.x,
                                l = e.clientY - v.y;
                            j(i, l, h)
                        }, [h, g, v, j]),
                        J = () => {
                            D(!1)
                        },
                        Z = () => {
                            let e = Y();
                            return e.width !== e.height
                        },
                        q = async () => {
                            let e;
                            if (null == x.current) return;
                            V(!0);
                            let n = x.current,
                                i = Y();
                            if (K) try {
                                let {
                                    result: l,
                                    cancelFn: r
                                } = await (0, c.cropGIF)(t, n, f, k.current, i);
                                W.current = r, e = await l, W.current = null
                            } catch (e) {
                                var l;
                                throw null === (l = W.current) || void 0 === l || l.call(W), W.current = null, Error("Error cropping GIF")
                            } else e = (0, c.cropStaticImage)(n, f, k.current, i);
                            await p(e, t), V(!1), C()
                        };
                    return l.useEffect(() => (window.addEventListener("mouseup", J), window.addEventListener("resize", X), () => {
                        window.removeEventListener("mouseup", J), window.removeEventListener("resize", X)
                    }), [X]), l.useEffect(() => () => {
                        null != W.current && W.current()
                    }, []), l.useEffect(() => {
                        if (g) return window.addEventListener("mousemove", z), () => window.removeEventListener("mousemove", z)
                    }, [z, g]), (0, i.jsx)(F, {
                        children: (0, i.jsxs)(o.ModalRoot, {
                            onAnimationEnd: X,
                            transitionState: R,
                            size: o.ModalSize.MEDIUM,
                            children: [L && (0, i.jsx)(s.default, {
                                type: m,
                                analyticsPage: M,
                                analyticsSection: T.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: K,
                                banner: n
                            }), (0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.FormTitle, {
                                    className: N.titleCase,
                                    tag: o.FormTitleTags.H1,
                                    children: O.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                className: N.modalContent,
                                children: [(0, i.jsxs)("div", {
                                    className: N.editingContainer,
                                    children: [(0, i.jsx)("img", {
                                        style: {
                                            opacity: null == w ? 0 : 1,
                                            transform: "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == w) return {};
                                                let e = w.width / w.height,
                                                    t = Z() && e > I.BANNER_ASPECT_RATIO ? f.height / w.height : 1;
                                                return {
                                                    width: w.width * G * t,
                                                    minWidth: w.width * G * t,
                                                    height: w.height * G * t
                                                }
                                            })()
                                        },
                                        className: H ? N.imageDisabled : N.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: x,
                                        onMouseDown: e => {
                                            let t = e.clientX - k.current.x,
                                                n = e.clientY - k.current.y;
                                            y({
                                                x: t,
                                                y: n
                                            }), D(!0)
                                        },
                                        draggable: !1
                                    }), (0, i.jsx)("div", {
                                        className: m === I.UploadTypes.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                        style: {
                                            opacity: null == w ? 0 : 1,
                                            width: f.width,
                                            height: f.height
                                        }
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: N.sliderContainer,
                                    children: [(0, i.jsx)(_.default, {
                                        className: N.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, i.jsx)(o.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == w) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = w, i = (0, c.calculateDragBoundaries)(t * e, n * e, f), {
                                                x: l,
                                                y: o
                                            } = k.current;
                                            (!(0, r.inRange)(l, i.right, i.left) || !(0, r.inRange)(o, i.top, i.bottom)) && j(l, o, i), b(e), P(i)
                                        },
                                        disabled: H,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": O.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, i.jsx)(_.default, {
                                        className: N.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                className: N.modalFooter,
                                children: [S ? (0, i.jsx)(o.Button, {
                                    className: N.cancelButton,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.ButtonSizes.SMALL,
                                    onClick: () => {
                                        S && (p(n, t), C())
                                    },
                                    children: O.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, i.jsxs)("div", {
                                    className: N.buttonsRight,
                                    children: [(0, i.jsx)(o.Button, {
                                        className: N.cancelButton,
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != W.current) {
                                                W.current(), W.current = null, V(!1);
                                                return
                                            }
                                            C()
                                        },
                                        children: O.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, i.jsx)(o.Button, {
                                        submitting: H,
                                        size: o.ButtonSizes.SMALL,
                                        onClick: q,
                                        children: O.default.Messages.AVATAR_UPLOAD_APPLY
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        8731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                cropGIF: function() {
                    return o
                },
                cropStaticImage: function() {
                    return a
                },
                getBoundedCoordinates: function() {
                    return u
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return _
                },
                calculateDragBoundaries: function() {
                    return E
                },
                calculateOverlaySize: function() {
                    return c
                },
                downsizeImage: function() {
                    return d
                }
            });
            var i = n("917351"),
                l = n("75015");

            function r(e, t, n, i) {
                let l = e.naturalWidth / e.width,
                    r = t.width / 2,
                    o = t.height / 2,
                    a = (e.width / 2 - r - n.x) * l,
                    u = (e.height / 2 - o - n.y) * l,
                    s = t.width * l,
                    _ = t.height * l,
                    E = Math.min(s, i.width),
                    c = Math.min(_, i.height);
                return {
                    x: a,
                    y: u,
                    scaledCropWidth: s,
                    scaledCropHeight: _,
                    canvasWidth: E,
                    canvasHeight: c
                }
            }
            async function o(e, t, i, o, a) {
                let {
                    x: u,
                    y: s,
                    scaledCropWidth: _,
                    scaledCropHeight: E
                } = r(t, i, o, a), c = await e.arrayBuffer(), d = new Worker(new URL(n.p + n.u("84300"), n.b)), I = new Promise((e, t) => {
                    d.onmessage = n => {
                        let {
                            data: i
                        } = n;
                        if (i.type === l.MessageTypes.CROP_GIF_COMPLETE) {
                            var r;
                            e((r = new Blob([i.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var n;
                                    let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                    "string" == typeof i ? e(i) : e("")
                                }, t.readAsDataURL(r)
                            }))), d.terminate()
                        } else i.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), d.terminate())
                    }
                });
                return d.postMessage({
                    type: l.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(c),
                    x: 0 | u,
                    y: 0 | s,
                    width: 0 | _,
                    height: 0 | E
                }), {
                    result: I,
                    cancelFn: () => d.terminate()
                }
            }

            function a(e, t, n, i) {
                let {
                    x: l,
                    y: o,
                    scaledCropWidth: a,
                    scaledCropHeight: u,
                    canvasWidth: s,
                    canvasHeight: _
                } = r(e, t, n, i), E = document.createElement("canvas");
                E.width = s, E.height = _;
                let c = E.getContext("2d");
                return null != c && c.drawImage(e, l, o, a, u, 0, 0, E.width, E.height), E.toDataURL("image/png")
            }

            function u(e, t, n) {
                return {
                    x: (0, i.clamp)(e, n.left, n.right),
                    y: (0, i.clamp)(t, n.bottom, n.top)
                }
            }

            function s(e, t, n, i) {
                let r = n,
                    o = i;
                n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, o = i * (l.EDITING_CONTAINER_WIDTH / n));
                if (n / i < e) return {
                    width: r,
                    height: o
                };
                let a = t / o,
                    u = r * a;
                return {
                    width: u,
                    height: t
                }
            }

            function _(e, t, n) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case l.UploadTypes.BANNER:
                        return s(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.GUILD_BANNER:
                        return s(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        return s(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return s(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
                    case l.UploadTypes.HOME_HEADER:
                        return s(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
                }
            }

            function E(e, t, n) {
                let i = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    l = e - n.width,
                    r = t - n.height;
                return 0 !== l && (i.left = -Math.abs(l / 2), i.right = l / 2), 0 !== r && (i.bottom = -Math.abs(r / 2), i.top = r / 2), i
            }

            function c(e, t, n, i) {
                switch (e) {
                    case l.UploadTypes.AVATAR:
                    case l.UploadTypes.AVATAR_DECORATION:
                        let r = Math.min(t, n);
                        return {
                            width: r, height: r
                        };
                    case l.UploadTypes.BANNER:
                        let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (1 / l.BANNER_ASPECT_RATIO)
                        };
                    case l.UploadTypes.GUILD_BANNER:
                        let a = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: a, height: Math.min(a * (9 / 16), i)
                        };
                    case l.UploadTypes.VIDEO_BACKGROUND:
                        let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: u * (9 / 16)
                        };
                    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: .4 * s
                        };
                    case l.UploadTypes.HOME_HEADER:
                        let _ = Math.min(t, l.EDITING_CONTAINER_WIDTH);
                        return {
                            width: _, height: _ * (1 / l.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function d(e, t, n) {
                let i = e.naturalWidth / e.naturalHeight,
                    l = t,
                    r = n;
                e.naturalWidth > e.naturalHeight ? l /= i : r *= i;
                let o = {
                    height: l,
                    width: r
                };
                return a(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, o)
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return _
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return E
                },
                useInventoryGuildSettingsExperiment: function() {
                    return d
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                o = n("719923"),
                a = n("782340");
            let u = (0, l.createExperiment)({
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
                        mobileAndFreemiumCollectEnabled: r
                    } = n, a = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: a ? i : r
                    }
                },
                _ = e => {
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
                        config: u.getCurrentConfig({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), o = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: _,
                        collectEnabled: E
                    } = s({
                        user: l,
                        config: o
                    }), c = a && E && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: c,
                        showTryPacksModalAndV2Copy: _
                    }
                },
                c = (0, l.createExperiment)({
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
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                d = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = c.useExperiment({
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
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                o = n("112679"),
                a = n("55689"),
                u = n("855133"),
                s = n("599110"),
                _ = n("659500"),
                E = n("49111"),
                c = n("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: A,
                    analyticsLocations: O,
                    analyticsObject: N,
                    analyticsLocation: R,
                    analyticsSourceLocation: S,
                    isGift: p = !1,
                    giftMessage: C,
                    subscriptionTier: m,
                    trialId: L,
                    postSuccessGuild: M,
                    openInvoiceId: f,
                    applicationId: U,
                    referralTrialOfferId: h,
                    giftRecipient: P,
                    returnRef: g
                } = null != e ? e : {}, D = !1, G = (0, l.v4)();
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
                            loadId: G,
                            subscriptionTier: m,
                            skuId: m,
                            isGift: p,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == A || A())
                            },
                            onComplete: () => {
                                D = !0, null == T || T(), !p && ((0, u.setIsPersistentHelperHidden)(!0), (0, u.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: A,
                            analyticsLocations: O,
                            analyticsObject: N,
                            analyticsLocation: R,
                            analyticsSourceLocation: S,
                            trialId: L,
                            postSuccessGuild: M,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: f,
                            applicationId: U,
                            referralTrialOfferId: h,
                            returnRef: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && s.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != R ? R : N,
                            source: S,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: p,
                            eligible_for_trial: null != L,
                            application_id: U,
                            location_stack: O
                        }), (0, o.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == I || I(D), D && (!p && _.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == A || A())
                    },
                    onCloseRequest: E.NOOP
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
                    return o
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return u
                },
                setNavigatedFromHelper: function() {
                    return s
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
                o = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                o = n("446674"),
                a = n("77078"),
                u = n("79112"),
                s = n("685665"),
                _ = n("788506"),
                E = n("649844"),
                c = n("393414"),
                d = n("797647"),
                I = n("697218"),
                T = n("521012"),
                A = n("471671"),
                O = n("181114"),
                N = n("978679"),
                R = n("216422"),
                S = n("719923"),
                p = n("646718"),
                C = n("49111"),
                m = n("782340"),
                L = n("683437"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: l,
                        onClick: M,
                        size: f,
                        className: U,
                        trialId: h,
                        isTrialCTA: P,
                        buttonText: g,
                        buttonTextClassName: D,
                        postSuccessGuild: G,
                        onSubscribeModalClose: b,
                        premiumModalAnalyticsLocation: v,
                        showIcon: y = !0,
                        disableShine: w,
                        applicationId: B,
                        giftMessage: H,
                        overrideDisabledButtonText: V,
                        shinyButtonClassName: F,
                        ...k
                    } = e, x = (0, o.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, o.useStateFromStores)([A.default], () => A.default.isFocused()), K = (0, o.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
                        analyticsLocations: Y
                    } = (0, s.default)(), j = e => {
                        if (e.preventDefault(), null == x) {
                            (0, c.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == K ? void 0 : K.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, _.trackPremiumSettingsPaneOpened)(), u.default.open(C.UserSettingsSections.PREMIUM), null == b || b(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: l,
                                isGift: r,
                                subscriptionTier: o,
                                trialId: u,
                                postSuccessGuild: s,
                                onSubscribeModalClose: _,
                                analyticsLocations: c,
                                premiumModalAnalyticsLocation: d,
                                applicationId: I,
                                giftMessage: T
                            } = e;
                            if (!t) {
                                (0, a.openModalLazy)(async () => {
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
                                (0, a.openModalLazy)(async () => {
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
                            let A = C.AnalyticsObjectTypes.BUY;
                            null != u ? A = C.AnalyticsObjectTypes.TRIAL : r && (A = C.AnalyticsObjectTypes.GIFT), (0, E.default)({
                                isGift: r,
                                initialPlanId: null,
                                subscriptionTier: o,
                                analyticsLocations: c,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: A,
                                    ...d
                                },
                                trialId: u,
                                postSuccessGuild: s,
                                onClose: _,
                                applicationId: I,
                                giftMessage: T
                            })
                        }({
                            isClaimed: x.isClaimed(),
                            isVerified: x.verified,
                            isGift: t,
                            subscriptionTier: l,
                            trialId: h,
                            postSuccessGuild: G,
                            onSubscribeModalClose: b,
                            analyticsLocations: Y,
                            premiumModalAnalyticsLocation: v,
                            applicationId: B,
                            giftMessage: H
                        })
                    };
                    if (P) return (0, i.jsxs)(a.Button, {
                        size: f,
                        className: U,
                        innerClassName: L.premiumSubscribeButton,
                        look: a.Button.Looks.INVERTED,
                        onClick: j,
                        ...k,
                        children: [y && (0, i.jsx)(R.default, {
                            className: L.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : m.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(a.Button, {
                        size: f,
                        className: U,
                        innerClassName: L.giftButton,
                        color: a.Button.Colors.PRIMARY,
                        onClick: j,
                        ...k,
                        children: [(0, i.jsx)(N.default, {
                            className: L.giftIcon
                        }), (0, i.jsx)("span", {
                            className: r(L.buttonText, D),
                            children: null != g ? g : m.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let X = m.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        z = null != K ? (0, S.getPremiumPlanItem)(K) : null,
                        J = null != z ? S.default.getPremiumType(z.planId) : null == x ? void 0 : x.premiumType,
                        Z = l === p.PremiumSubscriptionSKUs.TIER_2 && null != J && [p.PremiumTypes.TIER_0, p.PremiumTypes.TIER_1].includes(J);
                    Z && (X = m.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let q = null != K && K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, d.isNoneSubscription)(K.planId) && !Z,
                        Q = q ? null != V ? V : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, l = null;
                            if (null != t && t !== p.PremiumSubscriptionSKUs.LEGACY && t !== p.PremiumSubscriptionSKUs.TIER_0 && t !== p.PremiumSubscriptionSKUs.TIER_1 && t !== p.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            };
                            let r = null != t ? p.PremiumSubscriptionSKUToPremiumType[t] : null,
                                o = null != r ? p.PremiumTypeOrder[r] : null,
                                a = null != n ? p.PremiumTypeOrder[n] : null;
                            return null != a && null != o && o < a ? (i = m.default.Messages.APPLICATION_STORE_GET_PREMIUM, l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != r && null != n && r === n ? (i = m.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == r && null != n && n === p.PremiumTypes.TIER_2 && (l = m.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: l
                            }
                        }({
                            ctaSubscriptionSkuId: l,
                            currentPremiumType: J
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(O.default, {
                            disabled: q,
                            onClick: j,
                            innerClassName: L.premiumSubscribeButton,
                            color: l === p.PremiumSubscriptionSKUs.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
                            size: f,
                            className: F,
                            wrapperClassName: U,
                            pauseAnimation: !W || w,
                            ...k,
                            ...e,
                            children: [y && (0, i.jsx)(R.default, {
                                className: L.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: r(L.buttonText, D),
                                children: null !== (n = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : g) && void 0 !== n ? n : X
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, i.jsx)(a.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var i, l, r = n("773336");
            let o = null;

            function a() {
                return (0, r.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function o() {
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
        917219: function(e, t, n) {
            "use strict";
            var i, l, r, o;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return l
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return a
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return _
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return E
                }
            }), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (o = l || (l = {}))[o.OPTION_1 = 0] = "OPTION_1", o[o.OPTION_2 = 1] = "OPTION_2", o[o.OPTION_3 = 2] = "OPTION_3", o[o.OPTION_4 = 3] = "OPTION_4", o[o.OPTION_7 = 7] = "OPTION_7", o[o.OPTION_8 = 8] = "OPTION_8", o[o.OPTION_9 = 9] = "OPTION_9", o[o.OPTION_10 = 10] = "OPTION_10";
            let a = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                u = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                _ = {
                    width: 1280,
                    height: 720
                },
                E = 10485760
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
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = [];

            function o() {
                r = []
            }
            class a extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            a.displayName = "LayerStore";
            var u = new a(l.default, {
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
                LAYER_POP_ALL: o,
                LOGOUT: o,
                NOTIFICATION_CLICK: o
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
                o = n("913144"),
                a = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                _ = null,
                E = null,
                c = {},
                d = {},
                I = {},
                T = null,
                A = null,
                O = !1,
                N = !1,
                R = null,
                S = null,
                p = null,
                C = [],
                m = null,
                L = null;

            function M(e) {
                var t, n, i, l, r, o;
                let _ = a.default.getCurrentUser();
                if (null == _) return f();
                E = null !== (t = e.section) && void 0 !== t ? t : E, m = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (c[E] = e.subsection), null != e.scrollPosition && null != E && (d[E] = e.scrollPosition), N = !!e.openWithoutBackstack, s = u.FormStates.OPEN, I = {}, A = {
                    ...T = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: _.id,
                            username: _.username,
                            discriminator: _.discriminator,
                            email: _.email,
                            avatar: _.avatar,
                            password: "",
                            newPassword: null,
                            claimed: _.isClaimed()
                        }
                    }
                }, S = null !== (i = e.onClose) && void 0 !== i ? i : null, p = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, C = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], L = null !== (o = e.impressionSource) && void 0 !== o ? o : null
            }

            function f() {
                s = u.FormStates.CLOSED, O = !1, T = null, m = null, A = null, _ = null, E = null, c = {}, d = {}, S = null, p = null, C = [], L = null
            }

            function U() {
                s = u.FormStates.OPEN, I = {}
            }
            class h extends r.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != A && null != T && (!!this.isOpen() || R === u.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(A, T)
                }
                isOpen() {
                    return O
                }
                getPreviousSection() {
                    return _
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? c[E] : null
                }
                getScrollPosition() {
                    return null != E ? d[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return N
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? c[E] : null,
                        scrollPosition: null != E ? d[E] : null,
                        settings: A,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: N,
                        analyticsLocation: p,
                        analyticsLocations: C,
                        initialSection: m,
                        impressionSource: L
                    }
                }
                get onClose() {
                    return S
                }
            }
            h.displayName = "UserSettingsModalStore";
            var P = new h(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    O = !0, M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: f,
                LOGOUT: f,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, E = u.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    _ = E, E = e.section, p = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (c[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete d[t] : null != E && delete d[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == A && (A = {});
                    let n = A[u.UserSettingsSections.ACCOUNT];
                    A[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    U(), null != e && (A = {
                        ...T = {
                            [u.UserSettingsSections.ACCOUNT]: {
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
                    return R = e.tab, null == E && R === u.DrawerTabTypes.USER_SETTINGS && M({
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
                    return c
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                o = n("913144"),
                a = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class _ extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            _.displayName = "WindowStore";
            let E = new _(o.default, {
                WINDOW_INIT: function(e) {
                    l(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = E.isFocused() ? "focused" : "unfocused"
                })
            });
            var c = E
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return _
                },
                getRatio: function() {
                    return E
                },
                getCoverRatio: function() {
                    return c
                },
                makeCssUrlString: function() {
                    return d
                },
                getPalette: function() {
                    return T
                },
                getPaletteForAvatar: function() {
                    return A
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return R
                },
                dataUrlToFile: function() {
                    return S
                },
                isPNGAnimated: function() {
                    return p
                }
            });
            var i = n("627445"),
                l = n.n(i),
                r = n("917351"),
                o = n.n(r),
                a = n("48648"),
                u = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l,
                    minWidth: r = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== l) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), o);
                    let a = n > l ? l / n : 1;
                    t = Math.max(Math.round(t * a), r), n = Math.max(Math.round(n * a), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function _(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e, r = 1;
                t > i && (r = i / t), t = Math.round(t * r);
                let o = 1;
                return (n = Math.round(n * r)) > l && (o = l / n), Math.min(r * o, 1)
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: l
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, l / n), 1)
            }

            function d(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function T(e, t, n) {
                let i = document.createElement("canvas"),
                    l = i.getContext("2d");
                if (null == l) return I;
                let r = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                l.drawImage(e, 0, 0, r, o);
                let a = l.getImageData(0, 0, r, o).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let l = 0, r, o, a, u, s; l < t; l += n) o = e[(r = 4 * l) + 0], a = e[r + 1], u = e[r + 2], (void 0 === (s = e[r + 3]) || s >= 125) && !(o > 250 && a > 250 && u > 250) && i.push([o, a, u]);
                        return i
                    }(a, r * o, n),
                    _ = u(s, t);
                return "boolean" == typeof _ ? I : _.palette()
            }
            let A = e => O(e),
                O = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        l("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function R(e) {
                let t = e.split(";base64,");
                return l(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function S(e, t, n) {
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
            async function p(e) {
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
                    return _
                }
            });
            var r = n("697218"),
                o = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, l = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let _ = i(I, E, o);

                function E() {
                    null == u || u()
                }

                function c(e) {
                    l(_), n(e)
                }

                function d(e) {
                    l(_), r(e)
                }

                function I(e) {
                    return a(_, I, E, {
                        ...o,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: c,
                        reject: d,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    a(_, I, E, {
                        ...o,
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
                    mfaCodeHandler: r = u,
                    isModalOpen: o = !1,
                    ...a
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, u;
                    if (l = e, u = o, l.body && 60008 === l.body.code || u && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function _(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(l) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
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
                    return a
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("551042"),
                r = n("920636");
            let o = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function a(e, t, n) {
                return (0, l.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, l.updateModal)(e, o(t, n, i))
            }
        }
    }
]);