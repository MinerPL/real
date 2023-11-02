(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60044"], {
        310013: function(e, t, n) {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                l = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var r = Object.getOwnPropertyNames(t);
                    i && (r = r.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < r.length; ++s)
                        if (!a[r[s]] && !l[r[s]] && (!n || !n[r[s]])) try {
                            e[r[s]] = t[r[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("310013"),
                r = n.n(i),
                s = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: a
                        } = this.state, {
                            style: l
                        } = this.props, i = null != l ? u(l.backgroundImage) : null;
                        null == i && i !== n ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : null != i && i !== n && !0 === a && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(i))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, s.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...l
                        } = this.props, {
                            loaded: i,
                            cached: r
                        } = this.state;
                        if (!i && null != t) {
                            var s;
                            t = {
                                ...t,
                                backgroundImage: null == (s = r) || "" === s || "none" === s ? "none" : "url(".concat(s, ")")
                            }
                        }
                        return (0, a.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), (a = l || (l = {})).POPOUT_WINDOW = "popout window", a.OVERLAY = "overlay", a.NOTICE = "notice", a.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", a.BADGE = "badge", a.USER_SETTINGS = "user settings", a.USER_SETTINGS_MENU = "user settings menu", a.ACCOUNT = "account", a.TEXT_AND_IMAGES = "text and images", a.GUILD_SETTINGS = "guild settings", a.OVERVIEW = "overview", a.STICKERS = "stickers", a.VANITY_URL = "vanity url", a.PREMIUM_MARKETING = "premium marketing", a.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", a.PREMIUM_PAYMENT_MODAL = "premium payment modal", a.PREMIUM_UPSELL_ALERT = "premium upsell alert", a.PREMIUM_UPSELL_MODAL = "premium upsell modal", a.PREMIUM_SETTINGS = "premium settings", a.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", a.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", a.CHANNEL_CALL = "channel call", a.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", a.RTC_PANEL = "rtc panel", a.SOUNDBOARD_BUTTON = "soundboard button", a.SOUNDBOARD_POPOUT = "soundboard popout", a.SOUNDBOARD_WHEEL = "soundboard wheel", a.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", a.GIFT_BUTTON = "gift button", a.EXPRESSION_SUGGESTIONS = "expression suggestions", a.EMOJI_PICKER = "emoji picker", a.STICKER_PICKER = "sticker picker", a.STICKER_POPOUT = "sticker popout", a.PREMIUM_UPSELL = "premium upsell", a.EMPTY_STATE = "empty state", a.SUBSCRIPTION_DETAILS = "subscription details", a.SUBSCRIPTION_HEADER = "subscription header", a.ACCOUNT_CREDIT_BANNER = "account credit banner", a.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", a.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", a.STREAM_QUALITY_INDICATOR = "stream quality indicator", a.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", a.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", a.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", a.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", a.RPC = "rpc", a.BILLING_STANDALONE = "billing standalone", a.GUILD_CHANNEL_LIST = "guild channel list", a.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", a.STICKER_MESSAGE = "sticker message", a.CHANNEL_TEXT_AREA = "channel text area", a.HEADER_BAR = "header bar", a.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", a.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", a.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", a.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", a.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", a.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", a.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", a.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", a.GUILD_HEADER = "guild header", a.GUILD_BANNER = "guild banner", a.GUILD_BANNER_NOTICE = "guild banner notice", a.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", a.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", a.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", a.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", a.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", a.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", a.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", a.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", a.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", a.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", a.GUILDS_LIST = "guilds list", a.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", a.ACTIVITY_DIRECTORY = "activity directory", a.ACTIVITY_TILE = "activity tile", a.ACTIVITY_UPSELL = "activity upsell", a.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", a.INSTANT_INVITE_MODAL = "instant invite modal", a.IMAGE_CROPPING_MODAL = "image cropping modal", a.GIF_PICKER = "gif picker", a.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", a.INVITE_MODAL = "invite modal", a.INVITE_EMBED = "invite embed", a.NEW_GUILD_BUTTON = "new guild button", a.CHARACTER_COUNT = "character count", a.DM_CHANNEL = "dm channel", a.GUILD_CHANNEL = "guild channel", a.FORUM_CHANNEL = "forum channel", a.FILE_UPLOAD_POPOUT = "file upload popout", a.EMOJI = "emoji", a.PROFILE = "profile", a.PROFILE_MODAL = "profile modal", a.PROFILE_POPOUT = "profile popout", a.GUILD_PROFILE = "guild profile", a.EDIT_AVATAR = "edit avatar", a.EDIT_BANNER = "edit banner", a.CHAT_INPUT = "chat input", a.CREATE_THREAD = "create thread", a.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", a.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", a.SELECT_IMAGE_MODAL = "select image modal", a.VIDEO_BACKGROUND_OPTIONS = "video background options", a.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", a.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", a.CAMERA_PREVIEW = "camera preview", a.HOME_PAGE_PREMIUM_TAB = "home page premium tab", a.HOME_PAGE_SHOP_TAB = "home page shop tab", a.PREMIUM_MARKETING_SURFACE = "premium marketing surface", a.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", a.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", a.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", a.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", a.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", a.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", a.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", a.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", a.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", a.PREMIUM_MARKETING_FEATURE = "premium marketing feature", a.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", a.PREMIUM_MARKETING_FOOTER = "premium marketing footer", a.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", a.CHANNEL_CALL_ACTION_BAR = "channel call action bar", a.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", a.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", a.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", a.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", a.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", a.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", a.VOICE_CONTROL_TRAY = "voice control tray", a.ACTIVE_NOW_COLUMN = "active now column", a.CONTEXT_MENU = "context menu", a.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", a.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", a.CHANNEL_CATEGORY_MENU = "channel category menu", a.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", a.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", a.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", a.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", a.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", a.CHANNEL_TITLE_MENU = "channel title menu", a.GROUP_DM_MENU = "group dm menu", a.AUDIT_LOG_USER_MENU = "audit log user menu", a.BANNED_USER_MENU = "banned user menu", a.DM_USER_MENU = "dm user menu", a.GROUP_DM_USER_MENU = "group dm user menu", a.GUILD_CHANNEL_USER_MENU = "guild channel user menu", a.GUILD_MODERATION_USER_MENU = "guild moderation user menu", a.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", a.GUILD_SETTINGS_USER_MENU = "guild settings user menu", a.GUILD_USER_MENU = "guild user menu", a.THREAD_USER_MENU = "thread user menu", a.USER_GENERIC_MENU = "user generic menu", a.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", a.VOICE_ACTION_SHEET = "voice action sheet", a.FOCUSED_VOICE_CONTROLS = "focused voice controls", a.MASKED_LINK = "masked link", a.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", a.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", a.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", a.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", a.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", a.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", a.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", a.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", a.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", a.ACCOUNT_PROFILE_POPOUT = "account profile popout", a.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", a.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", a.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", a.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", a.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", a.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", a.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", a.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", a.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", a.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", a.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", a.STAGE_VIDEO_LIMIT = "stage video limit", a.ACTIVITIES_MINI_SHELF = "activities mini shelf", a.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", a.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", a.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", a.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", a.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", a.APP_ICON_EDITOR = "app icon editor", a.CLIENT_THEMES_EDITOR = "client themes editor", a.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", a.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", a.SHARE_NITRO_EMBED = "share nitro embed", a.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", a.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", a.REFERRAL_TRIALS_POPOUT = "referral trials popout", a.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", a.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", a.ACTIVITY_BOOKMARK = "activity bookmark", a.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", a.ACTIVITY_DETAIL_PAGE = "activity detail page", a.ACTIVITIES_PAGE = "activities page", a.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", a.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", a.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", a.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", a.ACTIVITIES_HAPPENING_NOW = "activities happening now", a.MEDIA_VIEWER = "media viewer", a.MESSAGE_LONG_PRESS_MENU = "message long press menu", a.COLLECTIBLES_SHOP = "collectibles shop", a.COLLECTIBLES_SHOP_CARD = "collectibles shop card", a.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", a.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", a.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", a.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", a.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", a.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", a.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", a.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", a.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", a.PREMIUM_BILLING_INFO = "premium billing info", a.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", a.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", a.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", a.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", a.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", a.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", a.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", a.PREMIUM_PLAN_SELECT = "premium_plan_select", a.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", a.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", a.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", a.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", a.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", a.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", a.MEMBER_SAFETY_PAGE = "member safety page", a.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", a.GUILD_MEMBER_MOD_VIEW = "guild member mod view", a.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", a.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", a.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", a.GUILD_SHOP_PAGE = "guild shop page", a.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", a.MESSAGE_REMIX_TAG = "message remix tag", a.MESSAGE_REMIX_BUTTON = "message remix button", a.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", a.CLIPS_SETTINGS = "clips settings", a.CLIPS_GALLERY = "clips gallery", a.CLIPS_GALLERY_ITEM = "clips gallery item", a.CLIPS_EDITOR = "clips editor", a.CLIPS_SHARE_MODAL = "clips share modal", a.CHANNEL_ATTACH_BUTTON = "channel attach button", a.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", a.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", a.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", a.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", a.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", a.GUILD_EVENT_CARD = "guild event card", a.EVENT_SETTINGS = "event settings";
            var a, l, i = l
        },
        757767: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.NONE = 0] = "NONE", l[l.WEEKLY = 1] = "WEEKLY", l[l.MONTHLY = 2] = "MONTHLY", l[l.YEARLY = 3] = "YEARLY", l[l.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = l
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("923510"),
                i = n("923959"),
                r = n("957255");

            function s(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, a.useStateFromStoresArray)([i.default, r.default], () => {
                    let e = i.default.getChannels(n)[i.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return o
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return u
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return c
                },
                getInitialEventStartDate: function() {
                    return I
                },
                getEventTimeData: function() {
                    return A
                },
                getScheduleFromEventData: function() {
                    return R
                },
                getScheduleFromEvent: function() {
                    return m
                },
                getRRule: function() {
                    return L
                },
                generateNextRecurrences: function() {
                    return C
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return f
                },
                recurrenceRuleToOption: function() {
                    return g
                }
            });
            var a = n("917351"),
                l = n("866227"),
                i = n.n(l),
                r = n("614137"),
                s = n("757767");
            n("745049");
            let o = 365,
                u = o + 1,
                c = 4,
                E = [r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday],
                d = [r.RRule.SU.weekday, r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday],
                _ = [r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday, r.RRule.SA.weekday],
                I = () => {
                    let e = i().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                T = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                N = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? T(e, t) : e.calendar(t)
                };

            function A(e, t, n) {
                null == n && (n = i());
                let a = i(e),
                    l = null != t && "" !== t ? i(t) : void 0,
                    r = null != t && a.isSame(l, "day");
                return {
                    startDateTimeString: N(a, n),
                    endDateTimeString: null != l ? r ? l.format("LT") : T(l, n) : void 0,
                    currentOrPastEvent: a <= n,
                    upcomingEvent: a <= i().add(1, "hour"),
                    withinStartWindow: a <= i().add(15, "minute"),
                    diffMinutes: a.diff(n, "minutes")
                }
            }

            function S(e, t) {
                let n;
                return null != e && (n = {
                    startDate: i(e),
                    endDate: void 0
                }, null != t && (n.endDate = i(t))), n
            }

            function R(e) {
                return S(e.scheduledStartTime, e.scheduledEndTime)
            }

            function m(e) {
                return S(e.scheduled_start_time, e.scheduled_end_time)
            }

            function L(e) {
                return new r.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function C(e, t, n) {
                let a = [],
                    l = null == n,
                    i = null != n ? n : new Date,
                    r = new Date;
                r.setFullYear(r.getFullYear() + c);
                let s = l ? e + 1 : e;
                for (let e = 0; e < s && i < r; e++) {
                    let n = t.after(i);
                    if (null == n) break;
                    i = new Date(n), n.setMilliseconds(0), (!l || e > 0) && a.push(n)
                }
                return a
            }

            function O(e) {
                let t = new r.Weekday(e.toDate().getDay()),
                    n = new r.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? _ : n.weekday - t.weekday < 0 ? d : E
            }

            function f(e, t) {
                let n = function(e, t) {
                    let n = O(t),
                        a = t.toDate();
                    switch (a.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new r.RRule({
                                dtstart: a,
                                freq: r.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new r.RRule({
                                dtstart: a,
                                freq: r.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new r.RRule({
                                dtstart: a,
                                freq: r.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: a,
                    until: l,
                    freq: i,
                    interval: o,
                    byweekday: u,
                    bymonth: c,
                    bymonthday: E,
                    byyearday: d,
                    count: _
                } = n.options;
                return {
                    start: a.toISOString(),
                    end: null == l ? void 0 : l.toISOString(),
                    frequency: i,
                    interval: o,
                    byWeekday: null != u ? new Set(u) : null,
                    byMonth: null != c ? new Set(c) : null,
                    byMonthDay: null != E ? new Set(E) : null,
                    byYearDay: null != d ? new Set(d) : null,
                    count: _
                }
            }

            function g(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = L(t);
                switch (n.options.freq) {
                    case r.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case r.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case r.RRule.DAILY:
                        if (!(0, a.isEqual)(n.options.byweekday, O(e))) return s.RecurrenceOptions.NONE;
                        return s.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return s.RecurrenceOptions.NONE
                }
            }
        },
        124163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("782340"),
                r = n("93086");

            function s(e) {
                let {
                    sendStartNotification: t,
                    setSendStartNotification: n
                } = e, s = t ? i.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : i.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, a.jsx)("div", {
                    className: r.notificationToggle,
                    children: (0, a.jsx)(l.Checkbox, {
                        type: l.Checkbox.Types.INVERTED,
                        size: 14,
                        className: r.checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, a.jsx)(l.Tooltip, {
                                position: "bottom",
                                tooltipClassName: r.tooltip,
                                text: i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: e => (0, a.jsx)("span", {
                                    ...e,
                                    children: s
                                })
                            })
                        })
                    })
                })
            }
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                r = n("822516"),
                s = n("757767"),
                o = n("782340");

            function u(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: u
                } = e, c = l.useMemo(() => (0, r.recurrenceRuleToOption)(t, n), [n, t]), E = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: s.RecurrenceOptions.NONE,
                        label: o.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: s.RecurrenceOptions.WEEKLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: n
                        })
                    }, {
                        value: s.RecurrenceOptions.YEARLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(o.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: s.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), d = e => e.toString();
                return (0, a.jsx)(i.FormItem, {
                    title: o.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, a.jsx)(i.Select, {
                        placeholder: "gaming",
                        options: E,
                        select: u,
                        serialize: d,
                        isSelected: e => null != c && d(e) === d(c)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                i = n.n(l),
                r = n("77078"),
                s = n("812204"),
                o = n("685665"),
                u = n("381546"),
                c = n("351825"),
                E = n("651072"),
                d = n("822516"),
                _ = n("844808"),
                I = n("782340"),
                T = n("234865");

            function N(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: l,
                    onRecurrenceChange: N,
                    onTimeChange: A,
                    timeSelected: S = !0,
                    schedule: R,
                    recurrenceRule: m,
                    showEndDate: L = !1,
                    requireEndDate: C = !1,
                    disableStartDateTime: O = !1
                } = e, {
                    analyticsLocations: f
                } = (0, o.default)(s.default.EVENT_SETTINGS), {
                    enabled: g
                } = E.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: f[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == R) return null;
                let p = null,
                    h = R.startDate,
                    M = i(),
                    D = i().add(d.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    U = i().add(d.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    v = e => {
                        l({
                            ...R,
                            endDate: e
                        })
                    };
                return null != h && E.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: f[0]
                }), L && (p = null != R.endDate || C ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: T.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: I.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: C,
                            children: (0, a.jsx)(r.DateInput, {
                                value: R.endDate,
                                onSelect: v,
                                minDate: R.startDate,
                                maxDate: U
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: I.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: C,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: R.endDate,
                                onChange: v
                            })
                        })]
                    }), C ? null : (0, a.jsx)(r.Button, {
                        onClick: () => {
                            v(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: T.link,
                            children: [(0, a.jsx)(u.default, {
                                width: 17,
                                height: 17,
                                className: T.removeIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: I.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        v(i(R.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: T.link,
                        children: [(0, a.jsx)(c.default, {
                            width: 20,
                            height: 20,
                            className: T.addIcon
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: I.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: T.doubleInput,
                        children: [(0, a.jsx)(r.FormItem, {
                            title: I.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.DateInput, {
                                value: R.startDate,
                                onSelect: e => {
                                    l({
                                        ...R,
                                        startDate: e
                                    })
                                },
                                minDate: M,
                                maxDate: D,
                                disabled: O
                            })
                        }), (0, a.jsx)(r.FormItem, {
                            title: I.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(r.TimeInput, {
                                value: R.startDate,
                                onChange: e => {
                                    e.isValid() && (null == A || A(!0), l({
                                        ...R,
                                        startDate: e
                                    }))
                                },
                                hideValue: !S,
                                disabled: O
                            })
                        })]
                    }), p, g && null != h && null != N && (0, a.jsx)(_.default, {
                        onRecurrenceChange: N,
                        startDate: h,
                        recurrenceRule: m
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                s = n("849467"),
                o = n("782340"),
                u = n("130221");

            function c(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: l,
                    className: c
                } = e, E = n.slice(0, 5), d = E.map(e => {
                    var n, l;
                    return (0, a.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, a.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: u.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, a.jsx)("div", {
                            className: u.textInGridContainer,
                            children: (0, a.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: u.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.id)
                }), _ = l - E.length;
                return (0, a.jsxs)("div", {
                    className: i(u.grid, c),
                    children: [d, _ > 0 && (0, a.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, a.jsx)("div", {
                            className: u.iconMicrophone,
                            children: (0, a.jsx)(s.default, {
                                height: 12
                            })
                        }), (0, a.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u.textInGrid,
                            children: o.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: _
                            })
                        })]
                    })]
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return s
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var a = n("913144"),
                l = n("599110"),
                i = n("49111");

            function r(e) {
                l.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), a.default.wait(() => {
                    a.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                l = n("913144"),
                i = n("197881"),
                r = n("492397");
            let s = new Set,
                o = {};
            class u extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && o[e];
                    return !(r.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: o
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new u(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    o[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        887143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return s
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("525065"),
                i = n("957255"),
                r = n("843455");

            function s(e) {
                let t = (0, a.useStateFromStores)([i.default], () => null != e && i.default.can(r.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function o(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return o
                },
                useSortedRequestToSpeakParticipants: function() {
                    return u
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            });
            var a = n("446674"),
                l = n("334572"),
                i = n("488464"),
                r = n("998716");

            function s(e, t) {
                let [n] = (0, a.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], l.isVersionEqual);
                return n
            }

            function o(e, t) {
                return (0, a.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function u(e) {
                let [t] = (0, a.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableRequestToSpeakParticipants(e);
                    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], l.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, a.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === r.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        193038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                s = n("272339"),
                o = n("333352"),
                u = function(e) {
                    let {
                        count: t,
                        className: n
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: i(o.container, n),
                        children: [(0, a.jsx)(s.default, {
                            width: 12,
                            height: 12,
                            className: o.icon
                        }), (0, a.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: null != t ? t : 0
                        })]
                    })
                }
        },
        29846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedUsersNotice: function() {
                    return A
                },
                BlockedUser: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("669491"),
                r = n("77078"),
                s = n("272030"),
                o = n("328275"),
                u = n("849467"),
                c = n("258078"),
                E = n("823050"),
                d = n("158998"),
                _ = n("325861"),
                I = n("151642"),
                T = n("782340"),
                N = n("960236");
            let A = e => {
                    let {
                        channelId: t
                    } = e, n = (0, I.useStageBlockedUsersCount)(t);
                    return 0 === n ? null : (0, a.jsxs)("div", {
                        className: N.blockedNotice,
                        children: [(0, a.jsx)(o.default, {
                            className: N.blockedIcon,
                            color: i.default.unsafe_rawColors.RED_400.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: T.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: n
                            })
                        }), (0, a.jsx)(r.Clickable, {
                            className: N.blockedButton,
                            onClick: e => {
                                (0, s.openContextMenu)(e, e => (0, a.jsx)(R, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: T.default.Messages.VIEW_ALL
                        })]
                    })
                },
                S = e => {
                    let {
                        user: t,
                        showStatus: n,
                        speaker: i,
                        channelId: s
                    } = e, o = (0, l.useStateFromStores)([_.default], () => _.default.isModerator(t.id, s)), I = null;
                    return n && (I = i ? T.default.Messages.STAGE_SPEAKER : o ? T.default.Messages.STAGE_MODERATOR_TOOLTIP : T.default.Messages.STAGE_AUDIENCE), (0, a.jsxs)("div", {
                        className: N.user,
                        children: [(0, a.jsx)(E.default, {
                            src: t.getAvatarURL(null, 32),
                            size: r.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: i ? () => (0, a.jsx)(u.default, {
                                className: N.icon
                            }) : null
                        }, t.id), (0, a.jsxs)("div", {
                            className: N.userInfo,
                            children: [(0, a.jsxs)("div", {
                                className: N.username,
                                children: [(0, a.jsx)(c.default, {
                                    size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
                                    children: d.default.getName(t)
                                }), (0, a.jsx)(c.default, {
                                    size: n ? c.default.Sizes.SIZE_16 : c.default.Sizes.SIZE_14,
                                    color: c.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, a.jsxs)("div", {
                                className: N.username,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: T.default.Messages.BLOCKED
                                }), (0, a.jsxs)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", I]
                                })]
                            })]
                        })]
                    })
                },
                R = e => {
                    let {
                        channelId: t
                    } = e, n = (0, I.useStageBlockedUsers)(t);
                    return (0, a.jsx)(r.Scroller, {
                        className: N.container,
                        children: n.map(e => {
                            let {
                                user: n
                            } = e;
                            return (0, a.jsx)(S, {
                                user: n,
                                channelId: t
                            }, n.id)
                        })
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                r = n("782340"),
                s = n("53061"),
                o = n("284434"),
                u = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(s.container, t),
                    children: [(0, a.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: i(s.sparkleIcon, s.sparkleBottom)
                    }), n, (0, a.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: i(s.sparkleIcon, s.sparkleTop)
                    })]
                })
            }
        },
        911457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return l
                },
                default: function() {
                    return N
                }
            });
            var a, l, i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                o = n("77078"),
                u = n("687521"),
                c = n("29913"),
                E = n("580357"),
                d = n("109024"),
                _ = n("228427"),
                I = n("193038"),
                T = n("366091");

            function N(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: a,
                    setShowGuildPopout: r,
                    handleGuildNameClick: N,
                    source: A,
                    speakers: S,
                    speakerCount: R,
                    audienceCount: m,
                    channelName: L
                } = e, C = t.id;
                return (0, i.jsx)("div", {
                    className: T.contentContainer,
                    children: (0, i.jsxs)("div", {
                        className: T.headerContainer,
                        children: [(0, i.jsxs)("div", {
                            className: T.guildInfoContainer,
                            children: [(0, i.jsx)(u.default, {
                                guildId: C,
                                shouldShow: a,
                                onRequestClose: () => r(!1),
                                children: () => (0, i.jsxs)(o.Clickable, {
                                    className: T.flexContainerRow,
                                    onClick: N,
                                    children: [(0, i.jsx)(d.default, {
                                        guild: t,
                                        size: d.default.Sizes.MINI,
                                        className: T.guildIcon
                                    }), (0, i.jsxs)("div", {
                                        className: T.flexContainerRow,
                                        children: [(0, i.jsx)(o.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: s(T.guildName, {
                                                [T.disabled]: null == N
                                            }),
                                            children: t.name
                                        }), (0, i.jsx)(E.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: T.rightJustifiedContent,
                                children: [A === l.FEATURED && (0, i.jsx)("div", {
                                    className: T.featuredTag,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: T.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, i.jsx)(I.default, {
                                    count: m,
                                    className: T.audienceCount
                                })]
                            })]
                        }), (0, i.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: T.topicText,
                            children: n.topic
                        }), (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            className: T.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, i.jsx)(c.default, {
                            guild: t,
                            speakers: S,
                            speakerCount: R,
                            className: T.speakers
                        }), null != L && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: T.divider
                            }), (0, i.jsxs)("div", {
                                className: T.footer,
                                children: [(0, i.jsx)(_.default, {
                                    width: 20,
                                    height: 20,
                                    className: T.icon
                                }), (0, i.jsx)(o.Text, {
                                    color: "header-secondary",
                                    className: T.label,
                                    variant: "text-sm/normal",
                                    children: L
                                })]
                            })]
                        })]
                    })
                })
            }(a = l || (l = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.TRENDING = 1] = "TRENDING", a[a.PERSONALIZED = 2] = "PERSONALIZED", a[a.USER_GUILDS = 3] = "USER_GUILDS", a[a.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", a[a.INTRO_CARD = 5] = "INTRO_CARD", a[a.FEATURED = 6] = "FEATURED"
        },
        444594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                r = n("697218"),
                s = n("627490"),
                o = n("987772"),
                u = n("564875"),
                c = n("625687"),
                E = n("701909"),
                d = n("387111"),
                _ = n("567469"),
                I = n("998716"),
                T = n("911457"),
                N = n("49111"),
                A = n("745049"),
                S = n("782340"),
                R = n("600329");

            function m(e) {
                let {
                    icon: t
                } = e;
                return (0, a.jsx)("div", {
                    className: R.iconContainer,
                    children: (0, a.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function L(e) {
                let {
                    icon: t,
                    text: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: R.listItemContainer,
                    children: [(0, a.jsx)("div", {
                        className: R.listItemIconContainer,
                        children: t
                    }), (0, a.jsx)(i.Text, {
                        className: R.listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function C(e) {
                var t;
                let {
                    guild: n,
                    channel: i,
                    stageData: s
                } = e, o = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []), u = {
                    id: "1337",
                    guild_id: n.id,
                    channel_id: i.id,
                    topic: s.topic,
                    description: s.description,
                    privacy_level: null !== (t = s.privacyLevel) && void 0 !== t ? t : A.GuildScheduledEventPrivacyLevel.PUBLIC
                }, c = (0, _.useStageParticipants)(i.id, I.StageChannelParticipantNamedIndex.SPEAKER), E = (0, _.useStageParticipantsCount)(i.id, I.StageChannelParticipantNamedIndex.AUDIENCE), N = c.slice(0, 5);
                return null == N.find(e => {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == o ? void 0 : o.id)
                }) && N.push({
                    user: o,
                    userNick: d.default.getName(n.id, i.id, o)
                }), (0, a.jsx)("div", {
                    className: R.previewCardContainer,
                    children: (0, a.jsx)("div", {
                        className: R.previewCard,
                        children: (0, a.jsx)(T.default, {
                            guild: n,
                            stageInstance: u,
                            showGuildPopout: !1,
                            setShowGuildPopout: () => {},
                            source: T.StageDiscoveryRecommendationSource.UNSPECIFIED,
                            speakers: N,
                            speakerCount: c.length,
                            audienceCount: Math.max(1337, E),
                            channelName: i.name
                        })
                    })
                })
            }

            function O(e) {
                let {
                    guild: t,
                    channel: n,
                    stageData: l,
                    headerId: r,
                    loading: d,
                    onNext: _,
                    onCancel: I,
                    onBack: T
                } = e;
                return null == t || null == n || null == l ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(C, {
                        guild: t,
                        channel: n,
                        stageData: l
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: R.container,
                        children: [(0, a.jsxs)("div", {
                            className: R.header,
                            children: [(0, a.jsx)(i.Heading, {
                                id: r,
                                className: R.title,
                                variant: "heading-xl/semibold",
                                children: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, a.jsx)(i.Text, {
                                className: R.subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, a.jsxs)("div", {
                            className: R.list,
                            children: [(0, a.jsx)(L, {
                                icon: (0, a.jsx)(m, {
                                    icon: s.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, a.jsx)(L, {
                                icon: (0, a.jsx)(m, {
                                    icon: u.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, a.jsx)(L, {
                                icon: (0, a.jsx)(m, {
                                    icon: o.default
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, a.jsx)(L, {
                                icon: (0, a.jsx)(c.default, {
                                    className: R.badgeIconBackground,
                                    foreground: R.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: S.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: E.default.getArticleURL(N.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        children: [(0, a.jsx)(i.Button, {
                            color: i.Button.Colors.GREEN,
                            onClick: _,
                            submitting: d,
                            children: S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: R.cancelButton,
                            onClick: I,
                            children: S.default.Messages.CANCEL
                        }), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.LINK,
                            className: R.backButton,
                            onClick: T,
                            size: i.Button.Sizes.MIN,
                            children: S.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        813934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("866227"),
                r = n.n(i),
                s = n("446674"),
                o = n("77078"),
                u = n("679653"),
                c = n("776863"),
                E = n("822516"),
                d = n("124163"),
                _ = n("953143"),
                I = n("269596"),
                T = n("27618"),
                N = n("697218"),
                A = n("228427"),
                S = n("599110"),
                R = n("887143"),
                m = n("834052"),
                L = n("151642"),
                C = n("29846"),
                O = n("837979"),
                f = n("49111"),
                g = n("745049"),
                p = n("533613"),
                h = n("782340"),
                M = n("529555");

            function D(e) {
                let {
                    stageChannelsInGuild: t,
                    channel: n,
                    onSelectChannel: l
                } = e;
                return null == l ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.FormItem, {
                        title: h.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: M.channelSelectionFormItem,
                        required: !0,
                        children: (0, a.jsx)(o.SearchableSelect, {
                            value: n.id,
                            options: t.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, N.default, T.default, !0)
                            })),
                            onChange: e => {
                                let n = t.find(t => t.id === e);
                                null != n && l(n)
                            },
                            renderOptionPrefix: () => (0, a.jsx)(A.default, {
                                height: 24
                            })
                        })
                    })
                })
            }

            function U(e) {
                var t, n, i, T, N, A;
                let {
                    channel: U,
                    guild: v,
                    header: P,
                    error: G,
                    loading: x,
                    onSave: y,
                    onEventSave: b,
                    onClose: B,
                    onSelectChannel: k,
                    isEvent: H = !1,
                    defaultOptions: j,
                    isSlideReady: V = !0
                } = e, Y = l.useMemo(() => m.default.getStageInstanceByChannel(U.id), [U.id]), [w, F] = l.useState(null !== (n = null !== (t = null == j ? void 0 : j.topic) && void 0 !== t ? t : null == Y ? void 0 : Y.topic) && void 0 !== n ? n : ""), [K, W] = l.useState(null !== (i = null == j ? void 0 : j.description) && void 0 !== i ? i : ""), [z] = l.useState(H), [q, X] = l.useState(null !== (T = null == j ? void 0 : j.schedule) && void 0 !== T ? T : {
                    startDate: (0, E.getInitialEventStartDate)()
                }), [Z, J] = l.useState(z && (null == j ? void 0 : j.schedule) != null), Q = (0, R.useCanSendStageStartNotification)(U), $ = (0, R.useDefaultSendStartStageNotificationToggle)(U), ee = null == Y && Q && !z, [et, en] = l.useState(ee && $), ea = (0, s.useStateFromStores)([I.default], () => I.default.hasHotspot(p.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), el = g.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = l.useState(null !== (A = null !== (N = null == j ? void 0 : j.privacyLevel) && void 0 !== N ? N : null == Y ? void 0 : Y.privacy_level) && void 0 !== A ? A : el), [er, es] = l.useState(null == j ? void 0 : j.recurrenceRule), eo = (0, L.useStageBlockedUsersCount)(U.id), [eu, ec] = l.useState(!1), eE = (0, u.default)(U), ed = (0, c.useChannelsUserCanStartStageIn)(v), e_ = null != k, eI = ed.length > 1;
                l.useEffect(() => {
                    S.default.track(f.AnalyticEvents.START_STAGE_OPENED, {
                        stage_instance_id: null == Y ? void 0 : Y.id,
                        can_start_public_stage: !1,
                        guild_id: U.guild_id
                    })
                }, []);
                let eT = e => {
                        if (e.preventDefault(), ei === g.GuildScheduledEventPrivacyLevel.PUBLIC && w.length < 20 && !eu) {
                            ec(!0);
                            return
                        }
                        let t = {
                            topic: w,
                            privacyLevel: ei,
                            sendStartNotification: et
                        };
                        if (z) {
                            if (!Z) return;
                            null == b || b({
                                ...t,
                                schedule: q,
                                description: K,
                                entityType: g.GuildScheduledEventEntityTypes.STAGE_INSTANCE
                            });
                            return
                        }
                        null == y || y(t)
                    },
                    {
                        color: eN,
                        text: eA
                    } = function(e, t, n) {
                        if (n) return {
                            color: o.Button.Colors.BRAND,
                            text: h.default.Messages.SCHEDULE_EVENT
                        };
                        if (t === g.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == e ? void 0 : e.privacy_level) !== g.GuildScheduledEventPrivacyLevel.PUBLIC) return {
                                color: o.Button.Colors.BRAND,
                                text: h.default.Messages.CONTINUE
                            }
                        }
                        return null == e ? {
                            color: o.Button.Colors.GREEN,
                            text: h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        } : {
                            color: o.Button.Colors.BRAND,
                            text: h.default.Messages.SAVE_CHANGES
                        }
                    }(Y, ei, z),
                    eS = l.useRef(null);
                l.useEffect(() => {
                    var e;
                    V && (null === (e = eS.current) || void 0 === e || e.focus())
                }, [V]);
                let eR = Z && null != q.startDate && q.startDate >= r();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(o.ModalContent, {
                        className: M.modalContent,
                        children: [P, (0, a.jsx)("div", {
                            className: M.blockedUsersContainer,
                            children: null == Y && eo > 0 && (0, a.jsx)(C.BlockedUsersNotice, {
                                channelId: U.id
                            })
                        }), (0, a.jsxs)("form", {
                            onSubmit: eT,
                            className: M.form,
                            children: [(0, a.jsxs)(o.FormItem, {
                                title: H ? h.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: M.topicFormItem,
                                required: !0,
                                children: [(0, a.jsx)(o.TextInput, {
                                    className: M.textInput,
                                    onChange: e => F(e),
                                    placeholder: h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: O.MAX_STAGE_TOPIC_LENGTH,
                                    value: w,
                                    autoComplete: "off",
                                    inputRef: eS
                                }), eu && (0, a.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: M.warning,
                                    children: h.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != G ? (0, a.jsx)(o.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: M.warning,
                                    children: G.getAnyErrorMessage()
                                }) : null]
                            }), e_ && eI ? (0, a.jsx)(D, {
                                stageChannelsInGuild: ed,
                                channel: U,
                                onSelectChannel: k
                            }) : null, z && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(_.default, {
                                    className: M.formItem,
                                    onScheduleChange: X,
                                    onRecurrenceChange: e => {
                                        let t = q.startDate;
                                        if (null == t) return;
                                        let n = (0, E.recurrenceOptionToRecurrenceRule)(e, t);
                                        es(n)
                                    },
                                    schedule: q,
                                    recurrenceRule: er,
                                    timeSelected: Z,
                                    onTimeChange: J
                                }), null != q.startDate && q.startDate < r() ? (0, a.jsx)(o.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: M.warning,
                                    children: h.default.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), H && (0, a.jsx)(o.FormItem, {
                                title: h.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: M.formItem,
                                children: (0, a.jsx)(o.TextArea, {
                                    placeholder: h.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: K,
                                    onChange: e => W(e),
                                    maxLength: g.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
                                })
                            }), ee ? (0, a.jsx)(d.default, {
                                sendStartNotification: et,
                                setSendStartNotification: en,
                                showNotificationNewBadge: ea
                            }) : null, e_ && !eI ? (0, a.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: M.channelSelection,
                                children: h.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: eE,
                                    stageHook: (e, t) => (0, a.jsx)("span", {
                                        className: M.channelName,
                                        children: U.name
                                    }, t)
                                })
                            }) : null]
                        })]
                    }), (0, a.jsxs)(o.ModalFooter, {
                        children: [(0, a.jsx)(o.Button, {
                            color: eN,
                            onClick: eT,
                            disabled: "" === w || null == ei || H && !eR,
                            submitting: x,
                            children: eA
                        }), (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            className: M.cancelButton,
                            onClick: B,
                            children: h.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        435768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("446674"),
                r = n("77078"),
                s = n("305961"),
                o = n("476765"),
                u = n("228427"),
                c = n("834052"),
                E = n("119184"),
                d = n("444594"),
                _ = n("813934"),
                I = n("767680"),
                T = n("249873"),
                N = n("837979"),
                A = n("782340"),
                S = n("636843");

            function R(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: l,
                    headerId: i,
                    onClose: s,
                    loading: o,
                    error: c,
                    onSave: d,
                    defaultOptions: I,
                    isSlideReady: T
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: S.content,
                        children: [(0, a.jsx)(E.default, {
                            children: (0, a.jsx)("div", {
                                className: S.stageIconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 32,
                                    height: 32,
                                    className: S.stageIcon
                                })
                            })
                        }), (0, a.jsx)(r.Heading, {
                            id: i,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: S.headerTitle,
                            children: null == l ? A.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : A.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: S.headerSubtitle,
                            children: null == l ? A.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : A.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, a.jsx)(_.default, {
                        guild: t,
                        channel: n,
                        onSave: d,
                        error: c,
                        loading: o,
                        onClose: s,
                        defaultOptions: I,
                        isSlideReady: T
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: u,
                    ...E
                } = e, _ = (0, o.useUID)(), A = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id)), m = l.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: L,
                    error: C,
                    onSave: O
                } = (0, I.default)(t, n), {
                    modalStep: f,
                    setModalStep: g,
                    readySlide: p,
                    handleSlideReady: h,
                    savedOptions: M,
                    handleSettingsSave: D,
                    handleDelayedSave: U
                } = (0, T.default)({
                    stageInstance: m,
                    defaultStep: N.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: C,
                    onSave: O
                });
                return (l.useEffect(() => {
                    null == A && n()
                }, [A, n]), null == A) ? null : (0, a.jsx)(r.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": _,
                    ...E,
                    size: r.ModalSize.SMALL,
                    children: (0, a.jsxs)(r.Slides, {
                        activeSlide: f,
                        width: 440,
                        onSlideReady: h,
                        children: [(0, a.jsx)(r.Slide, {
                            id: N.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, a.jsx)("div", {
                                className: S.slideContainer,
                                children: (0, a.jsx)(R, {
                                    guild: A,
                                    channel: t,
                                    stageInstance: m,
                                    headerId: _,
                                    onClose: n,
                                    loading: L,
                                    error: C,
                                    onSave: D,
                                    defaultOptions: M,
                                    isSlideReady: p === N.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, a.jsx)(r.Slide, {
                            id: N.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, a.jsx)("div", {
                                className: S.slideContainer,
                                children: (0, a.jsx)(d.default, {
                                    headerId: _,
                                    guild: A,
                                    channel: t,
                                    stageData: M,
                                    loading: L,
                                    onNext: U,
                                    onCancel: n,
                                    onBack: () => g(N.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }
        },
        767680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                l = n("851387"),
                i = n("987317"),
                r = n("448993"),
                s = n("597517"),
                o = n("887143"),
                u = n("244480"),
                c = n("834052"),
                E = n("533613");

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [d, _] = a.useState(!1),
                    [I, T] = a.useState(null),
                    N = a.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    A = (0, o.useCanSendStageStartNotification)(e),
                    S = async a => {
                        let {
                            topic: o,
                            privacyLevel: c,
                            sendStartNotification: d
                        } = a;
                        if (null != e && "" !== o && null != c) {
                            _(!0), T(null), null != n && (l.default.selectGuild(n), i.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != N ? n = await u.editStage(e, o, c) : (n = await u.startStage(e, o, c, null != d && d), A && s.hideHotspot(E.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new r.APIError(t);
                                T(e), _(!1)
                            }
                        }
                    };
                return {
                    loading: d,
                    error: I,
                    onSave: S
                }
            }
        },
        249873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("884691"),
                l = n("627445"),
                i = n.n(l),
                r = n("837979"),
                s = n("745049");

            function o(e) {
                let {
                    stageInstance: t,
                    defaultStep: n,
                    error: l,
                    onSave: o
                } = e, [u, c] = a.useState(n), [E, d] = a.useState(), [_, I] = a.useState(null);
                return a.useEffect(() => {
                    null != l && c(r.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                }, [l]), {
                    modalStep: u,
                    setModalStep: c,
                    readySlide: _,
                    handleSlideReady: function(e) {
                        return I(e)
                    },
                    savedOptions: E,
                    handleSettingsSave: function(e) {
                        if (d(e), e.privacyLevel === s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == t ? void 0 : t.privacy_level) !== s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                                c(r.StartStageSteps.PUBLIC_STAGE_PREVIEW);
                                return
                            }
                        }
                        o(e)
                    },
                    handleDelayedSave: function() {
                        i(null != E, "Must have some saved options."), o(E)
                    }
                }
            }
        },
        794818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return l
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return T
                },
                startLurking: function() {
                    return N
                },
                viewGuild: function() {
                    return A
                },
                makeDiscoverableGuild: function() {
                    return S
                },
                trackDiscoveryViewed: function() {
                    return R
                },
                trackDiscoveryExited: function() {
                    return m
                },
                trackSearchClosed: function() {
                    return L
                },
                trackSearchStarted: function() {
                    return C
                },
                trackTagSearchStarted: function() {
                    return O
                },
                trackSearchResultsViewed: function() {
                    return f
                },
                trackGuildJoinClicked: function() {
                    return g
                },
                getDiscoverableGuild: function() {
                    return p
                }
            });
            var a, l, i = n("522632"),
                r = n("872717"),
                s = n("851387"),
                o = n("267567"),
                u = n("393414"),
                c = n("239380"),
                E = n("525065"),
                d = n("305961"),
                _ = n("599110"),
                I = n("49111");
            (a = l || (l = {})).SEARCH = "Search", a.RECOMMENDED = "Recommended", a.POPULAR = "Popular", a.RECOMMENDED_E3 = "Recommended - E3", a.HEADER = "Header";
            let T = ">200";
            async function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: a,
                        onSuccess: l,
                        joinSource: i,
                        loadId: r,
                        setsHistorySnapshot: E = !0
                    } = n,
                    _ = (0, u.getHistory)();
                E && o.default.setHistorySnapshot({
                    ..._
                });
                let I = d.default.getGuild(e),
                    T = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != I && null != I.joinedAt ? (0, c.transitionToGuild)(e, T) : (await s.default.joinGuild(e, {
                    lurker: !0,
                    source: i,
                    loadId: r,
                    lurkLocation: null == t ? void 0 : t.page
                }), await s.default.transitionToGuildSync(e, {
                    ...T,
                    welcomeModalChannelId: a,
                    search: _.location.search
                }, a)), null == l || l()
            }
            async function A(e) {
                let t, {
                    loadId: n,
                    guildId: a,
                    index: i,
                    analyticsContext: r,
                    categoryId: s
                } = e;
                "string" == typeof r && r in l && (t = r);
                let o = {
                    page: I.AnalyticsPages.GUILD_DISCOVERY,
                    object: I.AnalyticsObjects.CARD,
                    section: t
                };
                await N(a, o, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: a,
                            analyticsContext: l,
                            categoryId: i
                        } = e, r = {
                            page: I.AnalyticsPages.GUILD_DISCOVERY,
                            section: l
                        };
                        "string" != typeof l && null != l.location && (r = l.location), _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: r,
                            guild_id: n,
                            load_id: t,
                            card_index: a,
                            location_object: I.AnalyticsObjects.CARD,
                            category_id: i
                        })
                    }({
                        loadId: n,
                        guildId: a,
                        index: i,
                        analyticsContext: r,
                        categoryId: s
                    })
            }

            function S(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function R(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: a,
                    categoryId: l,
                    recommendationsSource: i = null
                } = e, r = n.length, s = a.length;
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: r + s,
                    num_guilds_recommended: r,
                    num_guilds_popular: s,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: l,
                    recommendations_source: i
                })
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function L(e) {
                _.default.track(I.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                _.default.track(I.AnalyticEvents.SEARCH_STARTED, {
                    search_type: I.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function O(e, t, n, a) {
                _.default.track(I.AnalyticEvents.SEARCH_STARTED, {
                    search_type: I.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: I.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: a
                })
            }

            function f(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: a,
                    guildResults: l,
                    analyticsContext: i,
                    categoryId: r,
                    isTagSearch: s
                } = e;
                _.default.track(I.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: s ? I.SearchTypes.GUILD_DISCOVERY_TAG : I.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== l ? l.length : null,
                    guild_ids: void 0 !== l ? l.map(e => e.id) : null,
                    query: a,
                    location: i.location,
                    category_id: r
                })
            }

            function g(e) {
                let t = o.default.getLoadId(e);
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: E.default.getMemberCount(e)
                })
            }
            async function p(e) {
                try {
                    var t, n;
                    let a = await r.default.get({
                            url: I.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        l = null === (n = a.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == l) return l;
                    return S(l)
                } catch (e) {
                    return null
                }
            }
        },
        334572: function(e, t, n) {
            "use strict";

            function a(e, t) {
                let [, n] = e, [, a] = t;
                return n === a
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return a
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return l
                }
            });
            var a = n("159885");

            function l(e, t) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) l[i - 2] = arguments[i];
                let r = l.reduce((e, t) => e + (0, a.upperCaseFirstChar)(t), ""),
                    s = "".concat(t).concat(r),
                    o = e[s];
                if (null != o) return o
            }
        }
    }
]);