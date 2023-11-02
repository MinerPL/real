(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49650"], {
        901582: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return I
                }
            });
            var i = _("37983"),
                E = _("884691"),
                n = _("748820"),
                l = _("599110"),
                a = _("117362"),
                o = _("49111");
            class I extends E.Component {
                renderProvider(e) {
                    var t, _;
                    let {
                        section: E,
                        page: n,
                        object: a,
                        objectType: o,
                        children: I
                    } = this.props, r = this.mergeLocation(e.location, this.getLocation(n, E, a, o)), T = this.getContext(r, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (_ = this._loadId) && void 0 !== _ ? _ : e.loadId);
                    return (0, i.jsx)(l.AnalyticsContext.Provider, {
                        value: T,
                        children: I
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(l.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, a.cachedFunction)((e, t, _, i) => {
                        let E = {};
                        return null != e && (E.page = e), null != t && (E.section = t), null != _ && (E.object = _), null != i && (E.objectType = i), E
                    }), this.mergeLocation = (0, a.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, a.cachedFunction)((e, t, _) => ({
                        location: e,
                        loadDate: t,
                        loadId: _
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, n.v4)())
                }
            }
            I.Pages = o.AnalyticsPages, I.Sections = o.AnalyticsSections, I.Objects = o.AnalyticsObjects, I.ObjectTypes = o.AnalyticsObjectTypes, I.defaultProps = {
                root: !1
            }
        },
        838446: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            });
            var i = _("37983");
            _("884691");
            var E = _("901582");

            function n(e, t) {
                return function(_) {
                    return (0, i.jsx)(E.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ..._
                        })
                    })
                }
            }
        },
        158534: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            });
            var i = _("37983");
            _("884691");
            var E = _("685665");

            function n(e, t) {
                return function(_) {
                    let {
                        AnalyticsLocationProvider: n
                    } = (0, E.default)(t);
                    return (0, i.jsx)(n, {
                        children: (0, i.jsx)(e, {
                            ..._
                        })
                    })
                }
            }
        },
        812204: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            }), (i = E || (E = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, E, n = E
        },
        130037: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                useTrackMemberSearchUsed: function() {
                    return u
                },
                useTrackMemberFilterRolesUsed: function() {
                    return s
                },
                MemberSafetyFlagType: function() {
                    return n
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return O
                },
                ModerationActionType: function() {
                    return l
                },
                useTrackModerationAction: function() {
                    return L
                }
            });
            var i, E, n, l, a = _("884691"),
                o = _("812204"),
                I = _("716241"),
                r = _("271938"),
                T = _("599110"),
                c = _("49111");

            function A(e, t, _) {
                var i;
                let E = {
                    ...t,
                    ...(0, I.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : _)
                };
                T.default.track(e, E)
            }

            function u(e) {
                let t = a.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        A(c.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function s(e) {
                let t = a.useCallback(t => {
                    ! function(e, t) {
                        let _ = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        A(c.AnalyticEvents.MOD_DASH_FILTER_ROLES, _)
                    }(e, t)
                }, [e]);
                return t
            }(i = n || (n = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function O(e) {
                let t = a.useCallback(t => {
                    ! function(e, t) {
                        let _ = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        A(c.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, _)
                    }(e, t)
                }, [e]);
                return t
            }

            function L(e, t) {
                let {
                    location: _,
                    targetUserId: i,
                    targets: E
                } = t, n = a.useCallback(t => {
                    let n = {
                        action_type: t,
                        mod_user_id: r.default.getId(),
                        guild_id: e,
                        location: _,
                        target_user_id: null != i ? i : void 0,
                        targets: null != E ? E : void 0
                    };
                    A(c.AnalyticEvents.MODERATION_ACTION, n)
                }, [e, _, i, E]);
                return n
            }(E = l || (l = {})).BAN = "ban", E.KICK = "kick", E.MUTE = "mute", E.TIMEOUT = "timeout", E.ADD_ROLE = "add_role", E.REMOVE_ROLE = "remove_role", E.COPY_ID = "copy_id", E.CHANGE_NICKNAME = "change_nickname"
        },
        522651: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return A
                }
            });
            var i = _("37983");
            _("884691");
            var E = _("77078"),
                n = _("272030"),
                l = _("838446"),
                a = _("158534"),
                o = _("812204"),
                I = _("685665"),
                r = _("97508"),
                T = _("49111"),
                c = _("782340"),
                A = (0, a.default)((0, l.default)(function(e) {
                    var t;
                    let {
                        user: _,
                        guildId: l,
                        onSelect: a,
                        analyticsLocations: T,
                        onCloseContextMenu: A
                    } = e, {
                        analyticsLocations: u
                    } = (0, I.default)(o.default.CONTEXT_MENU), s = null !== (t = null == T ? void 0 : T[0]) && void 0 !== t ? t : u[0], O = (0, r.default)(_.id, l, !0, s);
                    return (0, i.jsx)(E.Menu, {
                        navId: "guild-moderation-roles",
                        onClose: () => {
                            (0, n.closeContextMenu)(), null == A || A()
                        },
                        "aria-label": c.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: (0, i.jsx)(E.MenuGroup, {
                            children: O
                        })
                    })
                }, {
                    object: T.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.GUILD_MODERATION_USER_MENU])
        },
        97508: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return N
                }
            });
            var i = _("37983");
            _("884691");
            var E = _("509043"),
                n = _("446674"),
                l = _("77078"),
                a = _("206230"),
                o = _("130037"),
                I = _("592407"),
                r = _("26989"),
                T = _("305961"),
                c = _("957255"),
                A = _("449008"),
                u = _("49111"),
                s = _("782340"),
                O = _("640659");

            function L(e, t) {
                var _, n;
                return (0, i.jsxs)("div", {
                    className: O.roleRow,
                    children: ["dot" === t ? (0, i.jsx)(l.RoleDot, {
                        className: O.roleDot,
                        color: null !== (_ = e.colorString) && void 0 !== _ ? _ : (0, E.int2hex)(u.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, i.jsx)(l.RoleCircle, {
                        className: O.roleDot,
                        color: null !== (n = e.colorString) && void 0 !== n ? n : (0, E.int2hex)(u.DEFAULT_ROLE_COLOR)
                    }), (0, i.jsx)("div", {
                        children: e.name
                    })]
                })
            }

            function N(e, t) {
                let _ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    O = (0, n.useStateFromStores)([T.default], () => T.default.getGuild(t), [t]),
                    N = (0, n.useStateFromStores)([a.default], () => a.default.roleStyle),
                    R = (0, o.useTrackModerationAction)(t, {
                        location: E,
                        targetUserId: e
                    }),
                    {
                        userRoles: d,
                        isGuildMember: C,
                        canManageRoles: M
                    } = (0, n.useStateFromStoresObject)([r.default, c.default], () => {
                        let _ = r.default.getMember(t, e);
                        return {
                            userRoles: null != _ ? _.roles : [],
                            isGuildMember: null != _,
                            canManageRoles: null != O && c.default.can(u.Permissions.MANAGE_ROLES, O)
                        }
                    }, [e, t, O]);
                if (__OVERLAY__ || null == d || null == O || !C) return null;
                let m = c.default.getHighestRole(O),
                    S = Object.values(O.roles).filter(e => e.id !== O.id),
                    U = M ? S.map(_ => {
                        let E = _.managed || !c.default.isRoleHigher(O, m, _),
                            n = -1 !== d.indexOf(_.id);
                        return E && !n ? null : (0, i.jsx)(l.MenuCheckboxItem, {
                            id: _.id,
                            label: () => L(_, N),
                            disabled: E,
                            action: () => {
                                var i;
                                return i = _, void(d.includes(i.id) ? (I.default.updateMemberRoles(t, e, d.filter(e => e !== i.id), [], [i.id]), R(o.ModerationActionType.REMOVE_ROLE)) : (I.default.updateMemberRoles(t, e, d.concat([i.id]), [i.id], []), R(o.ModerationActionType.ADD_ROLE)))
                            },
                            checked: n
                        }, _.id)
                    }) : S.filter(e => -1 !== d.indexOf(e.id)).map(e => e.id === O.id ? null : (0, i.jsx)(l.MenuItem, {
                        id: e.id,
                        label: () => L(e, N)
                    }, e.id));
                return 0 === U.filter(A.isNotNullish).length ? null : _ ? U : (0, i.jsx)(l.MenuItem, {
                    id: "roles",
                    label: s.default.Messages.ROLES_LIST.format({
                        numRoles: U.length
                    }),
                    children: U
                })
            }
        }
    }
]);