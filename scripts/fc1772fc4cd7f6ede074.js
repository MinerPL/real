(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81356"], {
        437083: function(e, t, i) {
            var n = i("561449"),
                r = i("877297");
            e.exports = function(e) {
                return r(n(e))
            }
        },
        329252: function(e, t, i) {
            var n = i("877297"),
                r = i("164099");
            e.exports = function(e) {
                return n(r(e))
            }
        },
        957478: function(e, t, i) {
            var n = i("626785");
            e.exports = function(e, t) {
                return n(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, i) {
            e.exports = function(e, t) {
                var i = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++i < n;) t[i] = e[i];
                return t
            }
        },
        877297: function(e, t, i) {
            var n = i("68421");
            e.exports = function(e, t) {
                var i = -1,
                    r = e.length,
                    l = r - 1;
                for (t = void 0 === t ? r : t; ++i < t;) {
                    var a = n(i, l),
                        o = e[a];
                    e[a] = e[i], e[i] = o
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, i) {
            var n = i("437083"),
                r = i("329252"),
                l = i("725502");
            e.exports = function(e) {
                return (l(e) ? n : r)(e)
            }
        },
        164099: function(e, t, i) {
            var n = i("957478"),
                r = i("466731");
            e.exports = function(e) {
                return null == e ? [] : n(e, r(e))
            }
        },
        653240: function(e, t, i) {
            "use strict";
            e.exports = i.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, i) {
            "use strict";
            e.exports = i.p + "abb37025036befe38e64.svg"
        },
        190389: function(e, t, i) {
            "use strict";
            e.exports = i.p + "10edc9054f6bb1a7de74.svg"
        },
        723251: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return n
                },
                rgbaToDataURL: function() {
                    return r
                },
                thumbHashToDataURL: function() {
                    return l
                }
            });

            function n(e) {
                let t = e[3],
                    i = 128 & e[2],
                    n = 128 & e[4];
                return (n ? i ? 5 : 7 : 7 & t) / (n ? 7 & t : i ? 5 : 7)
            }

            function r(e, t, i) {
                let n = 4 * e + 1,
                    r = 6 + t * (5 + n),
                    l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 73, 68, 65, 84, 120, 1],
                    a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    o = 1,
                    s = 0;
                for (let e = 0, r = 0, a = n - 1; e < t; e++, a += n - 1)
                    for (l.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), s = (s + o) % 65521; r < a; r++) {
                        let e = 255 & i[r];
                        l.push(e), s = (s + (o = (o + e) % 65521)) % 65521
                    }
                for (let [e, t] of(l.push(s >> 8, 255 & s, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + r]
                    ])) {
                    let i = -1;
                    for (let n = e; n < t; n++) i ^= l[n], i = (i = i >>> 4 ^ a[15 & i]) >>> 4 ^ a[15 & i];
                    i = ~i, l[t++] = i >>> 24, l[t++] = i >> 16 & 255, l[t++] = i >> 8 & 255, l[t++] = 255 & i
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...l))
            }

            function l(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: i,
                        max: r,
                        cos: l,
                        round: a
                    } = Math, o = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, u = (63 & o) / 63, _ = (o >> 6 & 63) / 31.5 - 1, E = (o >> 12 & 63) / 31.5 - 1, c = o >> 23, I = (s >> 3 & 63) / 63, T = (s >> 9 & 63) / 63, d = s >> 15, R = r(3, d ? c ? 5 : 7 : 7 & s), A = r(3, d ? 7 & s : c ? 5 : 7), m = c ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, N = c ? 6 : 5, p = 0, L = (t, i, n) => {
                        let r = [];
                        for (let l = 0; l < i; l++)
                            for (let a = l ? 0 : 1; a * i < t * (i - l); a++) r.push(((e[N + (p >> 1)] >> ((1 & p++) << 2) & 15) / 7.5 - 1) * n);
                        return r
                    }, O = L(R, A, (o >> 18 & 31) / 31), C = L(3, 3, 1.25 * I), M = L(3, 3, 1.25 * T), P = c && L(5, 5, S), f = n(e), U = a(f > 1 ? 32 : 32 * f), g = a(f > 1 ? 32 / f : 32), D = new Uint8Array(U * g * 4), h = [], G = [];
                    for (let e = 0, n = 0; e < g; e++)
                        for (let a = 0; a < U; a++, n += 4) {
                            let o = u,
                                s = _,
                                I = E,
                                T = m;
                            for (let e = 0, i = r(R, c ? 5 : 3); e < i; e++) h[e] = l(t / U * (a + .5) * e);
                            for (let i = 0, n = r(A, c ? 5 : 3); i < n; i++) G[i] = l(t / g * (e + .5) * i);
                            for (let e = 0, t = 0; e < A; e++)
                                for (let i = e ? 0 : 1, n = 2 * G[e]; i * A < R * (A - e); i++, t++) o += O[t] * h[i] * n;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let i = e ? 0 : 1, n = 2 * G[e]; i < 3 - e; i++, t++) {
                                    let e = h[i] * n;
                                    s += C[t] * e, I += M[t] * e
                                }
                            if (c)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let i = e ? 0 : 1, n = 2 * G[e]; i < 5 - e; i++, t++) T += P[t] * h[i] * n;
                            let d = o - 2 / 3 * s,
                                S = (3 * o - d + I) / 2,
                                N = S - I;
                            D[n] = r(0, 255 * i(1, S)), D[n + 1] = r(0, 255 * i(1, N)), D[n + 2] = r(0, 255 * i(1, d)), D[n + 3] = r(0, 255 * i(1, T))
                        }
                    return {
                        w: U,
                        h: g,
                        rgba: D
                    }
                }(e);
                return r(t.w, t.h, t.rgba)
            }
        },
        112679: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return a
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return s
                }
            });
            var n = i("913144");

            function r(e) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                n.default.wait(() => n.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var n = i("913144");

            function r() {
                n.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        812952: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return R
                }
            });
            var n, r, l, a, o = i("37983"),
                s = i("884691"),
                u = i("414456"),
                _ = i.n(u),
                E = i("145131"),
                c = i("298754");
            (n = l || (l = {})).PRIMARY = "primary", n.SECONDARY = "secondary", n.WARNING = "warning", n.ERROR = "error", (r = a || (a = {})).SMALL = "small", r.LARGE = "large", r.NONE = "none";
            let I = {
                    [l.PRIMARY]: c.colorPrimary,
                    [l.SECONDARY]: c.colorSecondary,
                    [l.WARNING]: c.colorWarning,
                    [l.ERROR]: c.colorError
                },
                T = {
                    [a.SMALL]: c.small,
                    [a.LARGE]: c.large,
                    [a.NONE]: null
                };
            class d extends s.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: i,
                        iconSize: n,
                        className: r,
                        iconClassName: l
                    } = this.props;
                    return (0, o.jsxs)(E.default, {
                        className: _(c.note, I[t], r),
                        align: E.default.Align.CENTER,
                        children: [(0, o.jsx)(e, {
                            className: _(c.icon, T[n], l)
                        }), (0, o.jsx)("div", {
                            children: i
                        })]
                    })
                }
            }
            d.Colors = l, d.Sizes = a;
            var R = d
        },
        689988: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            }), i("704744");
            var n = i("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, i] = e;
                        n.default.subscribe(t, "function" == typeof i ? i : i.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, i] = e;
                        n.default.unsubscribe(t, "function" == typeof i ? i : i.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        862013: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return a
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return o
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return s
                },
                insertAccessibilityLabelElements: function() {
                    return u
                }
            });
            var n = i("476765"),
                r = i("782340");
            let l = (0, n.uid)(),
                a = (0, n.uid)(),
                o = (0, n.uid)(),
                s = (0, n.uid)();

            function u() {
                [{
                    id: l,
                    text: ","
                }, {
                    id: a,
                    text: ","
                }, {
                    id: o,
                    text: r.default.Messages.REACTIONS
                }, {
                    id: s,
                    text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: i
                    } = e, n = document.getElementById(t);
                    null == n && ((n = document.createElement("div")).setAttribute("id", t), n.innerText = i, n.style.display = "none", document.body.appendChild(n))
                })
            }
        },
        812204: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            }), (n = r || (r = {})).POPOUT_WINDOW = "popout window", n.OVERLAY = "overlay", n.NOTICE = "notice", n.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", n.BADGE = "badge", n.USER_SETTINGS = "user settings", n.USER_SETTINGS_MENU = "user settings menu", n.ACCOUNT = "account", n.TEXT_AND_IMAGES = "text and images", n.GUILD_SETTINGS = "guild settings", n.OVERVIEW = "overview", n.STICKERS = "stickers", n.VANITY_URL = "vanity url", n.PREMIUM_MARKETING = "premium marketing", n.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", n.PREMIUM_PAYMENT_MODAL = "premium payment modal", n.PREMIUM_UPSELL_ALERT = "premium upsell alert", n.PREMIUM_UPSELL_MODAL = "premium upsell modal", n.PREMIUM_SETTINGS = "premium settings", n.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", n.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", n.CHANNEL_CALL = "channel call", n.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", n.RTC_PANEL = "rtc panel", n.SOUNDBOARD_BUTTON = "soundboard button", n.SOUNDBOARD_POPOUT = "soundboard popout", n.SOUNDBOARD_WHEEL = "soundboard wheel", n.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", n.GIFT_BUTTON = "gift button", n.EXPRESSION_SUGGESTIONS = "expression suggestions", n.EMOJI_PICKER = "emoji picker", n.STICKER_PICKER = "sticker picker", n.STICKER_POPOUT = "sticker popout", n.PREMIUM_UPSELL = "premium upsell", n.EMPTY_STATE = "empty state", n.SUBSCRIPTION_DETAILS = "subscription details", n.SUBSCRIPTION_HEADER = "subscription header", n.ACCOUNT_CREDIT_BANNER = "account credit banner", n.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", n.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", n.STREAM_QUALITY_INDICATOR = "stream quality indicator", n.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", n.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", n.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", n.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", n.RPC = "rpc", n.BILLING_STANDALONE = "billing standalone", n.GUILD_CHANNEL_LIST = "guild channel list", n.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", n.STICKER_MESSAGE = "sticker message", n.CHANNEL_TEXT_AREA = "channel text area", n.HEADER_BAR = "header bar", n.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", n.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", n.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", n.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", n.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", n.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", n.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", n.GUILD_HEADER = "guild header", n.GUILD_BANNER = "guild banner", n.GUILD_BANNER_NOTICE = "guild banner notice", n.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", n.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", n.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", n.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", n.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", n.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", n.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", n.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", n.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", n.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", n.GUILDS_LIST = "guilds list", n.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", n.ACTIVITY_DIRECTORY = "activity directory", n.ACTIVITY_TILE = "activity tile", n.ACTIVITY_UPSELL = "activity upsell", n.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", n.INSTANT_INVITE_MODAL = "instant invite modal", n.IMAGE_CROPPING_MODAL = "image cropping modal", n.GIF_PICKER = "gif picker", n.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", n.INVITE_MODAL = "invite modal", n.INVITE_EMBED = "invite embed", n.NEW_GUILD_BUTTON = "new guild button", n.CHARACTER_COUNT = "character count", n.DM_CHANNEL = "dm channel", n.GUILD_CHANNEL = "guild channel", n.FORUM_CHANNEL = "forum channel", n.FILE_UPLOAD_POPOUT = "file upload popout", n.EMOJI = "emoji", n.PROFILE = "profile", n.PROFILE_MODAL = "profile modal", n.PROFILE_POPOUT = "profile popout", n.GUILD_PROFILE = "guild profile", n.EDIT_AVATAR = "edit avatar", n.EDIT_BANNER = "edit banner", n.CHAT_INPUT = "chat input", n.CREATE_THREAD = "create thread", n.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", n.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", n.SELECT_IMAGE_MODAL = "select image modal", n.VIDEO_BACKGROUND_OPTIONS = "video background options", n.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", n.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", n.CAMERA_PREVIEW = "camera preview", n.HOME_PAGE_PREMIUM_TAB = "home page premium tab", n.HOME_PAGE_SHOP_TAB = "home page shop tab", n.PREMIUM_MARKETING_SURFACE = "premium marketing surface", n.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", n.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", n.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", n.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", n.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", n.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", n.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", n.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", n.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", n.PREMIUM_MARKETING_FEATURE = "premium marketing feature", n.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", n.PREMIUM_MARKETING_FOOTER = "premium marketing footer", n.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", n.CHANNEL_CALL_ACTION_BAR = "channel call action bar", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", n.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", n.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", n.VOICE_CONTROL_TRAY = "voice control tray", n.ACTIVE_NOW_COLUMN = "active now column", n.CONTEXT_MENU = "context menu", n.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", n.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", n.CHANNEL_CATEGORY_MENU = "channel category menu", n.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", n.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", n.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", n.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", n.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", n.CHANNEL_TITLE_MENU = "channel title menu", n.GROUP_DM_MENU = "group dm menu", n.AUDIT_LOG_USER_MENU = "audit log user menu", n.BANNED_USER_MENU = "banned user menu", n.DM_USER_MENU = "dm user menu", n.GROUP_DM_USER_MENU = "group dm user menu", n.GUILD_CHANNEL_USER_MENU = "guild channel user menu", n.GUILD_MODERATION_USER_MENU = "guild moderation user menu", n.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", n.GUILD_SETTINGS_USER_MENU = "guild settings user menu", n.GUILD_USER_MENU = "guild user menu", n.THREAD_USER_MENU = "thread user menu", n.USER_GENERIC_MENU = "user generic menu", n.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", n.VOICE_ACTION_SHEET = "voice action sheet", n.FOCUSED_VOICE_CONTROLS = "focused voice controls", n.MASKED_LINK = "masked link", n.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", n.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", n.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", n.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", n.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", n.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", n.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", n.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", n.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", n.ACCOUNT_PROFILE_POPOUT = "account profile popout", n.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", n.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", n.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", n.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", n.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", n.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", n.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", n.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", n.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", n.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", n.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", n.STAGE_VIDEO_LIMIT = "stage video limit", n.ACTIVITIES_MINI_SHELF = "activities mini shelf", n.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", n.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", n.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", n.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", n.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", n.APP_ICON_EDITOR = "app icon editor", n.CLIENT_THEMES_EDITOR = "client themes editor", n.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", n.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", n.SHARE_NITRO_EMBED = "share nitro embed", n.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", n.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", n.REFERRAL_TRIALS_POPOUT = "referral trials popout", n.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", n.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", n.ACTIVITY_BOOKMARK = "activity bookmark", n.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", n.ACTIVITY_DETAIL_PAGE = "activity detail page", n.ACTIVITIES_PAGE = "activities page", n.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", n.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", n.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", n.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", n.ACTIVITIES_HAPPENING_NOW = "activities happening now", n.MEDIA_VIEWER = "media viewer", n.MESSAGE_LONG_PRESS_MENU = "message long press menu", n.COLLECTIBLES_SHOP = "collectibles shop", n.COLLECTIBLES_SHOP_CARD = "collectibles shop card", n.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", n.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", n.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", n.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", n.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", n.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", n.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", n.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", n.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", n.PREMIUM_BILLING_INFO = "premium billing info", n.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", n.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", n.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", n.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", n.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", n.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", n.PREMIUM_PLAN_SELECT = "premium_plan_select", n.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", n.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", n.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", n.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", n.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", n.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", n.MEMBER_SAFETY_PAGE = "member safety page", n.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", n.GUILD_MEMBER_MOD_VIEW = "guild member mod view", n.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", n.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", n.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", n.GUILD_SHOP_PAGE = "guild shop page", n.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", n.MESSAGE_REMIX_TAG = "message remix tag", n.MESSAGE_REMIX_BUTTON = "message remix button", n.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", n.CLIPS_SETTINGS = "clips settings", n.CLIPS_GALLERY = "clips gallery", n.CLIPS_GALLERY_ITEM = "clips gallery item", n.CLIPS_EDITOR = "clips editor", n.CLIPS_SHARE_MODAL = "clips share modal", n.CHANNEL_ATTACH_BUTTON = "channel attach button", n.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", n.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", n.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", n.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", n.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", n.GUILD_EVENT_CARD = "guild event card", n.EVENT_SETTINGS = "event settings";
            var n, r, l = r
        },
        20606: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("171210").default
        },
        441413: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                StretchedSparkleStar: function() {
                    return E
                },
                default: function() {
                    return c
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                l = i.n(r),
                a = i("75196"),
                o = i("956089"),
                s = i("125835"),
                u = i("782340"),
                _ = i("159163");

            function E(e) {
                return (0, n.jsx)("svg", {
                    ...(0, a.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function c(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: i = !1,
                    shouldInheritTextColor: r = !1,
                    shouldInheritBackgroundColor: a = !1
                } = e;
                return (0, n.jsx)(s.default, {
                    className: t,
                    forceUseColor: i,
                    children: (0, n.jsx)(o.TextBadge, {
                        disableColor: !0,
                        className: l(_.tag, {
                            [_.inheritTextColor]: r,
                            [_.inheritBackgroundColor]: a
                        }),
                        text: u.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                l = i.n(r),
                a = i("642032"),
                o = i("767964");

            function s(e) {
                let {
                    className: t,
                    children: i,
                    forceUseColor: r = !1,
                    hideStars: s
                } = e;
                return (0, n.jsxs)("span", {
                    className: l(o.container, t, {
                        [o.containerColored]: r
                    }),
                    children: [i, s ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(a.default, {
                            foreground: o.sparkleStarTopRight
                        }), (0, n.jsx)(a.default, {
                            foreground: o.sparkleStarRight
                        }), (0, n.jsx)(a.default, {
                            foreground: o.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        649844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("748820"),
                l = i("77078"),
                a = i("112679"),
                o = i("55689"),
                s = i("855133"),
                u = i("599110"),
                _ = i("659500"),
                E = i("49111"),
                c = i("646718");

            function I(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: I,
                    onClose: T,
                    onComplete: d,
                    onSubscriptionConfirmation: R,
                    analyticsLocations: A,
                    analyticsObject: m,
                    analyticsLocation: S,
                    analyticsSourceLocation: N,
                    isGift: p = !1,
                    giftMessage: L,
                    subscriptionTier: O,
                    trialId: C,
                    postSuccessGuild: M,
                    openInvoiceId: P,
                    applicationId: f,
                    referralTrialOfferId: U,
                    giftRecipient: g,
                    returnRef: D
                } = null != e ? e : {}, h = !1, G = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("646139").then(i.bind(i, "646139"));
                    return i => {
                        let {
                            onClose: r,
                            ...l
                        } = i;
                        return (0, n.jsx)(e, {
                            ...l,
                            loadId: G,
                            subscriptionTier: O,
                            skuId: O,
                            isGift: p,
                            giftMessage: L,
                            giftRecipient: g,
                            initialPlanId: t,
                            followupSKUInfo: I,
                            onClose: e => {
                                r(), null == T || T(e), e && (null == R || R())
                            },
                            onComplete: () => {
                                h = !0, null == d || d(), !p && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: R,
                            analyticsLocations: A,
                            analyticsObject: m,
                            analyticsLocation: S,
                            analyticsSourceLocation: N,
                            trialId: C,
                            postSuccessGuild: M,
                            planGroup: c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: P,
                            applicationId: f,
                            referralTrialOfferId: U,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !h && u.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: G,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : m,
                            source: N,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: p,
                            eligible_for_trial: null != C,
                            application_id: f,
                            location_stack: A
                        }), (0, a.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == T || T(h), h && (!p && _.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == R || R())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        626301: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return l
                }
            });
            var n = i("79112"),
                r = i("49111");
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n.default.open(r.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        324878: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useHasActiveTrial: function() {
                    return o
                },
                hasActiveTrial: function() {
                    return s
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return _
                }
            });
            var n = i("446674"),
                r = i("697218"),
                l = i("521012"),
                a = i("646718");
            let o = () => {
                    let e = (0, n.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                s = () => {
                    var e;
                    return (null === (e = l.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === a.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function _() {
                let e = (0, n.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                    t = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        855133: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return a
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var n = i("913144");
            let r = () => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                l = () => {
                    n.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                a = () => {
                    n.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    n.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        942377: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getHigherExpectedValue: function() {
                    return l
                },
                getHighestLikelihood: function() {
                    return a
                }
            });
            var n = i("716849"),
                r = i("646718");

            function l(e, t, i) {
                return null == e ? r.PremiumTypes.TIER_2 : e[r.PremiumSubscriptionSKUs.TIER_0] * t > e[r.PremiumSubscriptionSKUs.TIER_2] * i ? r.PremiumTypes.TIER_0 : r.PremiumTypes.TIER_2
            }

            function a(e) {
                if (null == e) return r.PremiumTypes.TIER_0;
                let t = e[n.NON_SUBSCRIBER_SENTINEL],
                    i = e[r.PremiumSubscriptionSKUs.TIER_0],
                    l = e[r.PremiumSubscriptionSKUs.TIER_2];
                return l > i && l > t ? r.PremiumTypes.TIER_2 : r.PremiumTypes.TIER_0
            }
        },
        843647: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("446674"),
                r = i("697218"),
                l = i("10514"),
                a = i("719923"),
                o = i("716849"),
                s = i("676572"),
                u = i("942377"),
                _ = i("917247"),
                E = i("646718");

            function c(e) {
                let {
                    autoTrackExposure: t,
                    experiment: i,
                    location: c
                } = e, I = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()), T = (0, _.usePremiumTrialOffer)(), d = null != T, R = null != I && (0, a.isPremium)(I);
                (0, o.useMaybeFetchPremiumLikelihood)(i);
                let {
                    enabled: A,
                    useExpectedValue: m,
                    useLikelihood: S
                } = i.useExperiment({
                    location: null != c ? c : "1"
                }, {
                    autoTrackExposure: !R && !d && t
                }), {
                    premiumLikelihood: N,
                    fetched: p
                } = (0, n.useStateFromStoresObject)([s.default], () => {
                    let e = s.default.getState();
                    return {
                        fetched: e.fetched,
                        premiumLikelihood: e.premiumLikelihood
                    }
                }), L = (0, n.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([E.PremiumSubscriptionSKUs.TIER_0, E.PremiumSubscriptionSKUs.TIER_2])), O = !R && A && !d && (m ? !p || !L : !p), C = E.PremiumTypes.TIER_2;
                if (d) {
                    let e = T.subscription_trial;
                    (null == e ? void 0 : e.sku_id) === E.PremiumSubscriptionSKUs.TIER_0 ? C = E.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === E.PremiumSubscriptionSKUs.TIER_2 && (C = E.PremiumTypes.TIER_2)
                } else if (!R && !O && A) {
                    if (m) {
                        let {
                            amount: e
                        } = (0, a.getPrice)(E.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                            amount: t
                        } = (0, a.getPrice)(E.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                        C = (0, u.getHigherExpectedValue)(N, e, t)
                    } else S && (C = (0, u.getHighestLikelihood)(N))
                }
                return {
                    isLoading: O,
                    suggestedPremiumType: C
                }
            }
        },
        154889: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                discountOfferHasTier: function() {
                    return E
                },
                usePremiumDiscountOffer: function() {
                    return c
                }
            });
            var n = i("884691"),
                r = i("446674"),
                l = i("862337"),
                a = i("697218"),
                o = i("340412"),
                s = i("719923"),
                u = i("646718");

            function _(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function E(e, t) {
                var i;
                if (null == e) return !1;
                let n = new Set(null === (i = e.discount) || void 0 === i ? void 0 : i.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
                return n.has(t)
            }

            function c() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscount(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, i] = n.useState(_(e)),
                    E = (0, r.useStateFromStores)([a.default], () => (0, s.isPremium)(a.default.getCurrentUser()));
                return n.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let n = new l.Timeout,
                        r = () => {
                            let l = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == n || n.start(l, () => {
                                !t && _(e) ? i(!0) : r()
                            })
                        };
                    return r(), () => n.stop()
                }, [t, e]), t || E ? null : e
            }
        },
        635956: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                l = i.n(r),
                a = i("446674"),
                o = i("77078"),
                s = i("79112"),
                u = i("685665"),
                _ = i("788506"),
                E = i("649844"),
                c = i("393414"),
                I = i("797647"),
                T = i("697218"),
                d = i("521012"),
                R = i("471671"),
                A = i("181114"),
                m = i("978679"),
                S = i("216422"),
                N = i("719923"),
                p = i("646718"),
                L = i("49111"),
                O = i("782340"),
                C = i("683437"),
                M = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: r,
                        onClick: M,
                        size: P,
                        className: f,
                        trialId: U,
                        isTrialCTA: g,
                        buttonText: D,
                        buttonTextClassName: h,
                        postSuccessGuild: G,
                        onSubscribeModalClose: b,
                        premiumModalAnalyticsLocation: v,
                        showIcon: B = !0,
                        disableShine: y,
                        applicationId: H,
                        giftMessage: x,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: F,
                        ...V
                    } = e, K = (0, a.useStateFromStores)([T.default], () => T.default.getCurrentUser()), j = (0, a.useStateFromStores)([R.default], () => R.default.isFocused()), Y = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), {
                        analyticsLocations: w
                    } = (0, u.default)(), W = e => {
                        if (e.preventDefault(), null == K) {
                            (0, c.transitionTo)(L.Routes.LOGIN);
                            return
                        }
                        if (null == M || M(e), (null == Y ? void 0 : Y.status) === L.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, _.trackPremiumSettingsPaneOpened)(), s.default.open(L.UserSettingsSections.PREMIUM), null == b || b(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: r,
                                isGift: l,
                                subscriptionTier: a,
                                trialId: s,
                                postSuccessGuild: u,
                                onSubscribeModalClose: _,
                                analyticsLocations: c,
                                premiumModalAnalyticsLocation: I,
                                applicationId: T,
                                giftMessage: d
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await i.el("984599").then(i.bind(i, "984599"));
                                    return t => {
                                        let {
                                            onClose: i,
                                            ...r
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...r,
                                            onClose: i
                                        })
                                    }
                                });
                                return
                            }
                            if (!r) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await i.el("899917").then(i.bind(i, "899917"));
                                    return t => {
                                        let {
                                            onClose: i,
                                            ...r
                                        } = t;
                                        return (0, n.jsx)(e, {
                                            ...r,
                                            onClose: i
                                        })
                                    }
                                });
                                return
                            }
                            let R = L.AnalyticsObjectTypes.BUY;
                            null != s ? R = L.AnalyticsObjectTypes.TRIAL : l && (R = L.AnalyticsObjectTypes.GIFT), (0, E.default)({
                                isGift: l,
                                initialPlanId: null,
                                subscriptionTier: a,
                                analyticsLocations: c,
                                analyticsObject: {
                                    object: L.AnalyticsObjects.BUTTON_CTA,
                                    objectType: R,
                                    ...I
                                },
                                trialId: s,
                                postSuccessGuild: u,
                                onClose: _,
                                applicationId: T,
                                giftMessage: d
                            })
                        }({
                            isClaimed: K.isClaimed(),
                            isVerified: K.verified,
                            isGift: t,
                            subscriptionTier: r,
                            trialId: U,
                            postSuccessGuild: G,
                            onSubscribeModalClose: b,
                            analyticsLocations: w,
                            premiumModalAnalyticsLocation: v,
                            applicationId: H,
                            giftMessage: x
                        })
                    };
                    if (g) return (0, n.jsxs)(o.Button, {
                        size: P,
                        className: f,
                        innerClassName: C.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: W,
                        ...V,
                        children: [B && (0, n.jsx)(S.default, {
                            className: C.premiumIcon
                        }), (0, n.jsx)("span", {
                            className: l(C.buttonText, h),
                            children: null != D ? D : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, n.jsxs)(o.Button, {
                        size: P,
                        className: f,
                        innerClassName: C.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: W,
                        ...V,
                        children: [(0, n.jsx)(m.default, {
                            className: C.giftIcon
                        }), (0, n.jsx)("span", {
                            className: l(C.buttonText, h),
                            children: null != D ? D : O.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        X = null != Y ? (0, N.getPremiumPlanItem)(Y) : null,
                        q = null != X ? N.default.getPremiumType(X.planId) : null == K ? void 0 : K.premiumType,
                        J = r === p.PremiumSubscriptionSKUs.TIER_2 && null != q && [p.PremiumTypes.TIER_0, p.PremiumTypes.TIER_1].includes(q);
                    J && (z = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Q = null != Y && Y.status !== L.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, I.isNoneSubscription)(Y.planId) && !J,
                        Z = Q ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: i
                            } = e, n = null, r = null;
                            if (null != t && t !== p.PremiumSubscriptionSKUs.LEGACY && t !== p.PremiumSubscriptionSKUs.TIER_0 && t !== p.PremiumSubscriptionSKUs.TIER_1 && t !== p.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: n,
                                disabledButtonTooltipText: r
                            };
                            let l = null != t ? p.PremiumSubscriptionSKUToPremiumType[t] : null,
                                a = null != l ? p.PremiumTypeOrder[l] : null,
                                o = null != i ? p.PremiumTypeOrder[i] : null;
                            return null != o && null != a && a < o ? (n = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != i && l === i ? (n = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != i && i === p.PremiumTypes.TIER_2 && (r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: n,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: r,
                            currentPremiumType: q
                        }) : null;

                    function $(e) {
                        var t, i;
                        return (0, n.jsxs)(A.default, {
                            disabled: Q,
                            onClick: W,
                            innerClassName: C.premiumSubscribeButton,
                            color: r === p.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: P,
                            className: F,
                            wrapperClassName: f,
                            pauseAnimation: !j || y,
                            ...V,
                            ...e,
                            children: [B && (0, n.jsx)(S.default, {
                                className: C.premiumIcon
                            }), (0, n.jsx)("span", {
                                className: l(C.buttonText, h),
                                children: null !== (i = null !== (t = null == Z ? void 0 : Z.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== i ? i : z
                            })]
                        })
                    }
                    return (null == Z ? void 0 : Z.disabledButtonTooltipText) != null ? (0, n.jsx)(o.Tooltip, {
                        text: Z.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        273619: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            });
            var n = i("37983"),
                r = i("884691"),
                l = i("41092"),
                a = i("414456"),
                o = i.n(a),
                s = i("862337"),
                u = i("77078"),
                _ = i("812952"),
                E = i("448993"),
                c = i("736978"),
                I = i("642906"),
                T = i("85336");
            i("153727"), i("650484");
            var d = i("454589"),
                R = i("978679"),
                A = i("745279"),
                m = i("49111"),
                S = i("782340"),
                N = i("129429");
            let p = new Set([T.Step.SKU_SELECT, T.Step.AWAITING_AUTHENTICATION, T.Step.AWAITING_PURCHASE_TOKEN_AUTH, T.Step.CONFIRM]);

            function L(e) {
                let {
                    steps: t,
                    currentStep: i,
                    body: a,
                    paymentError: L,
                    header: O,
                    footer: C,
                    isGift: M = !1,
                    giftMessage: P = S.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: f = !1,
                    hideBreadcrumbs: U = !1,
                    isLoading: g = !1,
                    purchaseError: D,
                    purchaseErrorBlockRef: h,
                    planError: G,
                    onScroll: b,
                    scrollerClassName: v,
                    hasCurrencies: B = !1
                } = e, y = null;
                null != L && null == (0, T.errorToStep)(L) ? y = L : null != D ? y = D : null != G && (y = G);
                let H = null != y ? y.message : "";
                null != y && y instanceof E.BillingError && (y.code === c.ErrorCodes.CARD_DECLINED && B && (H += " ".concat(S.default.Messages.BILLING_ERROR_TRY_ANOTHER)), y.code === c.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (H = S.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), y.code === m.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (H = S.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: x
                } = (0, I.usePaymentContext)();
                g = g || null == x;
                let k = r.useRef(new s.Timeout);
                r.useEffect(() => {
                    let e = k.current;
                    return null != x || e.isStarted() ? null != x && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, A.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [x]);
                let F = t.includes(T.Step.PAYMENT_TYPE) ? T.Step.PAYMENT_TYPE : T.Step.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(l.Elements, {
                    options: m.StripeElementsOptions,
                    stripe: x,
                    children: [O, (0, n.jsxs)("div", {
                        className: o("paymentModalContent", N.content),
                        children: [M && !f && i !== T.Step.CONFIRM ? (0, n.jsx)(_.default, {
                            className: N.paymentNote,
                            iconSize: _.default.Sizes.SMALL,
                            icon: R.default,
                            color: null == P ? _.default.Colors.PRIMARY : _.default.Colors.SECONDARY,
                            children: P
                        }) : null, U ? null : (0, n.jsx)("div", {
                            className: N.breadcrumbsWrapper,
                            children: (0, n.jsx)(d.default, {
                                activeId: T.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(i) ? F : i,
                                breadcrumbs: t.filter(e => !T.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !p.has(e)).map(e => ({
                                    id: e,
                                    label: (0, T.getLabelForStep)(e)
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: N.bodyWrapper,
                            children: [null == y ? null : (0, n.jsx)("div", {
                                className: N.errorBlockWrapper,
                                children: (0, n.jsx)(u.FormErrorBlock, {
                                    ref: h,
                                    children: H
                                })
                            }), g ? (0, n.jsx)(u.Spinner, {
                                className: N.loadingBlock
                            }) : (0, n.jsx)(u.Sequencer, {
                                className: N.sequencer,
                                staticClassName: N.sequencerStatic,
                                animatedNodeClassName: N.sequencerAnimatedNode,
                                fillParent: !0,
                                step: i,
                                steps: t,
                                sideMargin: 20,
                                children: (0, n.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: b,
                                    className: o(N.scroller, v),
                                    children: a
                                })
                            })]
                        })]
                    }), C]
                })
            }
        },
        674158: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var r = i("414456"),
                l = i.n(r),
                a = i("288264");

            function o(e) {
                let {
                    icon: t,
                    iconClassName: i,
                    description: r,
                    color: o
                } = e;
                return (0, n.jsxs)("div", {
                    className: a.perkRow,
                    children: [(0, n.jsx)("div", {
                        className: a.perkIconContainer,
                        children: (0, n.jsx)(t, {
                            color: o,
                            className: l(a.perkIcon, i)
                        })
                    }), (0, n.jsx)("div", {
                        className: a.perkDescription,
                        children: r
                    })]
                })
            }
        },
        122846: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return x
                }
            });
            var n = i("37983"),
                r = i("884691"),
                l = i("414456"),
                a = i.n(l),
                o = i("446674"),
                s = i("77078"),
                u = i("913144"),
                _ = i("850068"),
                E = i("775433"),
                c = i("308592"),
                I = i("642906"),
                T = i("85336"),
                d = i("552917"),
                R = i("843647"),
                A = i("154889"),
                m = i("917247"),
                S = i("956597"),
                N = i("635956"),
                p = i("273619"),
                L = i("674158"),
                O = i("915639"),
                C = i("357957"),
                M = i("326880"),
                P = i("46829"),
                f = i("595086"),
                U = i("719923"),
                g = i("153160"),
                D = i("49111"),
                h = i("646718"),
                G = i("782340"),
                b = i("643076");
            let v = e => {
                let {
                    locale: t
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(L.default, {
                        icon: f.default,
                        iconClassName: b.iconColorPurple,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, n.jsx)(L.default, {
                        icon: M.default,
                        iconClassName: b.iconColorPink,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: h.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            discountPercent: (0, g.formatPercent)(t, h.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, n.jsx)(L.default, {
                        icon: P.default,
                        iconClassName: b.iconColorYellow,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function B() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(L.default, {
                        icon: f.default,
                        iconClassName: b.iconColorPurple,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, n.jsx)(L.default, {
                        icon: P.default,
                        iconClassName: b.iconColorYellow,
                        description: G.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            let y = e => {
                    let {
                        trialOffer: t,
                        discountOffer: r,
                        isTier0Upsell: l,
                        isLoading: u,
                        price: _,
                        onClose: E
                    } = e, c = (0, o.useStateFromStores)([O.default], () => O.default.locale), I = null != t || null != r;
                    return (0, n.jsxs)("div", {
                        className: b.wrapper,
                        children: [(0, n.jsx)(s.ModalCloseButton, {
                            onClick: E,
                            className: b.closeButton
                        }), I && (0, n.jsx)(S.PremiumTrialGradientBadge, {
                            className: b.premiumTrialBadge
                        }), (0, n.jsx)("img", {
                            className: a(b.heroImage, {
                                [b.heroImageWithTrialOffer]: I
                            }),
                            src: i("190389"),
                            alt: ""
                        }), u ? (0, n.jsx)(s.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: b.heading,
                                children: null == _ ? (0, n.jsx)(s.Spinner, {
                                    type: s.Spinner.Type.PULSING_ELLIPSIS
                                }) : l ? G.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, U.getTierDisplayName)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, g.formatPrice)(_.amount, _.currency)
                                }) : G.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, g.formatPrice)(_.amount, _.currency)
                                })
                            }), (0, n.jsx)("div", {
                                className: b.perks,
                                children: l ? (0, n.jsx)(B, {}) : (0, n.jsx)(v, {
                                    locale: c
                                })
                            })]
                        })]
                    })
                },
                H = e => {
                    let {
                        trialOffer: t,
                        discountOffer: i,
                        isTier0Upsell: r,
                        onClose: l
                    } = e, a = {
                        section: D.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                    };
                    return (0, n.jsxs)(s.ModalFooter, {
                        className: b.footer,
                        children: [(0, n.jsx)(s.Button, {
                            onClick: l,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: G.default.Messages.CLOSE
                        }), (0, n.jsx)(N.default, {
                            buttonText: null != t || null != i ? r ? G.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : G.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: a,
                            subscriptionTier: r ? h.PremiumSubscriptionSKUs.TIER_0 : h.PremiumSubscriptionSKUs.TIER_2,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.GREEN,
                            onClick: () => {
                                l()
                            }
                        })]
                    })
                };

            function x(e) {
                let {
                    onClose: t,
                    ...i
                } = e, l = (0, c.useSubscriptionPlansLoaded)(), a = (0, o.useStateFromStores)([C.default], () => C.default.hasFetchedPaymentSources), S = l && a, N = (0, m.usePremiumTrialOffer)(), L = (0, A.usePremiumDiscountOffer)(), {
                    isLoading: O,
                    suggestedPremiumType: M
                } = (0, R.default)({
                    autoTrackExposure: S,
                    experiment: d.default,
                    location: "stickers_upsell"
                });
                r.useEffect(() => {
                    u.default.wait(() => {
                        (0, _.fetchPaymentSources)(), (0, E.fetchPremiumSubscriptionPlans)(null, null, D.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let P = M === h.PremiumTypes.TIER_0 && null == L,
                    f = S ? U.default.getDefaultPrice(P ? h.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : h.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
                return (0, n.jsx)(I.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, n.jsx)(s.ModalRoot, {
                        ...i,
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, n.jsx)(p.default, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)(y, {
                                trialOffer: N,
                                discountOffer: L,
                                isTier0Upsell: P,
                                isLoading: !S || O,
                                price: f,
                                onClose: t
                            }),
                            footer: (0, n.jsx)(H, {
                                trialOffer: N,
                                discountOffer: L,
                                isTier0Upsell: P,
                                onClose: t
                            }),
                            steps: [T.Step.PREMIUM_UPSELL],
                            currentStep: T.Step.PREMIUM_UPSELL
                        })
                    })
                })
            }
        },
        729912: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SilentMessagesExperiment: function() {
                    return r
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
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
        804888: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SILENT_RE: function() {
                    return l
                },
                canSuppressNotifications: function() {
                    return a
                },
                default: function() {
                    return o
                }
            });
            var n = i("729912");
            let r = "@silent",
                l = new RegExp("^".concat(r, "(\\s|$)"));

            function a() {
                let e = n.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function o(e) {
                return a() && null != e.match(l) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                thumbHashToRGBA: function() {
                    return r
                }
            });
            var n = i("723251");

            function r(e) {
                let {
                    detail: t = 1,
                    pop: i = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: r,
                    min: l,
                    max: a,
                    cos: o,
                    round: s
                } = Math, u = e[0] | e[1] << 8 | e[2] << 16, _ = e[3] | e[4] << 8, E = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, I = (u >> 12 & 63) / 31.5 - 1, T = u >> 23, d = (_ >> 3 & 63) / 63, R = (_ >> 9 & 63) / 63, A = _ >> 15, m = a(3, A ? T ? 5 : 7 : 7 & _), S = a(3, A ? 7 & _ : T ? 5 : 7), N = T ? (15 & e[5]) / 15 : 1, p = (e[5] >> 4) / 15, L = T ? 6 : 5, O = 0, C = (t, i, n) => {
                    let r = [];
                    for (let l = 0; l < i; l++)
                        for (let a = l ? 0 : 1; a * i < t * (i - l); a++) r.push(((e[L + (O >> 1)] >> ((1 & O++) << 2) & 15) / 7.5 - 1) * n);
                    return r
                }, M = C(m, S, (u >> 18 & 31) / 31 / 2), P = C(3, 3, d * i), f = C(3, 3, R * i), U = T ? C(5, 5, p) : [], g = (0, n.thumbHashToApproximateAspectRatio)(e), D = s(g > 1 ? 32 : 32 * g), h = s(g > 1 ? 32 / g : 32), G = new Uint8Array(D * h * 4), b = [], v = [];
                for (let e = 0, i = 0; e < h; e++)
                    for (let n = 0; n < D; n++, i += 4) {
                        let s = E,
                            u = c,
                            _ = I,
                            d = N;
                        for (let e = 0, t = a(m, T ? 5 : 3); e < t; e++) b[e] = o(r / D * (n + .5) * e);
                        for (let t = 0, i = a(S, T ? 5 : 3); t < i; t++) v[t] = o(r / h * (e + .5) * t);
                        for (let e = 0, i = 0; e < S; e++)
                            for (let n = e ? 0 : 1, r = 2 * v[e]; n * S < m * (S - e); n++, i++) !(n > t) && !(e > t) && (s += M[i] * b[n] * r);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let i = e ? 0 : 1, n = 2 * v[e]; i < 3 - e; i++, t++) {
                                let e = b[i] * n;
                                u += P[t] * e, _ += f[t] * e
                            }
                        if (T)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let i = e ? 0 : 1, n = 2 * v[e]; i < 5 - e; i++, t++) d += U[t] * b[i] * n;
                        let R = s - 2 / 3 * u,
                            A = (3 * s - R + _) / 2,
                            p = A - _;
                        G[i] = a(0, 255 * l(1, A)), G[i + 1] = a(0, 255 * l(1, p)), G[i + 2] = a(0, 255 * l(1, R)), G[i + 3] = a(0, 255 * l(1, d))
                    }
                return {
                    w: D,
                    h,
                    rgba: G
                }
            }
        }
    }
]);