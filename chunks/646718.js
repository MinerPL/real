"use strict";
n.r(t), n.d(t, {
  PremiumTypes: function() {
    return i
  },
  UNSELECTED_PREMIUM_TYPE_OVERRIDE: function() {
    return G
  },
  PREMIUM_TYPE_OVERRIDE_OPTIONS: function() {
    return F
  },
  PremiumTypeOrder: function() {
    return x
  },
  PREMIUM_SUBSCRIPTION_APPLICATION: function() {
    return B
  },
  PremiumSubscriptionSKUs: function() {
    return s
  },
  ACTIVE_PREMIUM_SKUS: function() {
    return H
  },
  PremiumSubscriptionSKUToPremiumType: function() {
    return Y
  },
  SubscriptionPlans: function() {
    return r
  },
  PREMIUM_PLANS: function() {
    return j
  },
  PREMIUM_TIER_2_PLANS: function() {
    return W
  },
  PREMIUM_GUILD_SUBSCRIPTION_PLANS: function() {
    return K
  },
  MULTI_MONTH_PLANS: function() {
    return z
  },
  PREMIUM_MONTHLY_PLANS: function() {
    return q
  },
  PREMIUM_SKU_TO_MONTHLY_PLAN: function() {
    return X
  },
  PREMIUM_SKU_TO_YEARLY_PLAN: function() {
    return Q
  },
  SubscriptionIntervalTypes: function() {
    return a
  },
  SubscriptionPlanInfo: function() {
    return Z
  },
  GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: function() {
    return J
  },
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: function() {
    return $
  },
  DEFAULT_MAX_GRACE_PERIOD_DAYS: function() {
    return ee
  },
  PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: function() {
    return et
  },
  MAX_ACCOUNT_HOLD_DAYS: function() {
    return en
  },
  BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID: function() {
    return ei
  },
  STICKERS_GIFT_CODE_BATCH_ID: function() {
    return es
  },
  USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD: function() {
    return er
  },
  MAX_PAYMENT_PROCESSING_TIME_DAYS: function() {
    return ea
  },
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: function() {
    return eo
  },
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: function() {
    return el
  },
  PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID: function() {
    return eu
  },
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: function() {
    return ed
  },
  PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID: function() {
    return ec
  },
  PREMIUM_TIER_2_AUTH3_TRIAL_ID: function() {
    return ef
  },
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: function() {
    return eh
  },
  PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: function() {
    return eg
  },
  PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: function() {
    return em
  },
  SubscriptionTrials: function() {
    return eE
  },
  PremiumUpsellTypes: function() {
    return o
  },
  PurchasedFlags: function() {
    return l
  },
  SKU_ID_PURCHASED_FLAGS: function() {
    return ep
  },
  OUTBOUND_PROMOTION_REDEMPTION_EXPIRATION_WINDOW: function() {
    return ev
  },
  MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE: function() {
    return eS
  },
  IncrementalStickerCountsByTier: function() {
    return eT
  },
  TotalStickerCountsByTier: function() {
    return eI
  },
  TotalSoundboardSoundCountsByTier: function() {
    return eC
  },
  BoostedGuildFeatures: function() {
    return eA
  },
  ORDERED_PREMIUM_SUBSCRIPTION_PLANS: function() {
    return ey
  },
  AnalyticsPremiumFeatureNames: function() {
    return u
  },
  AnalyticsPremiumFeatureTiers: function() {
    return d
  },
  DISCOUNTS: function() {
    return eN
  },
  StreamQualities: function() {
    return c
  },
  StreamQualitiesToPremiumType: function() {
    return eR
  },
  PremiumMarketingEntrypoints: function() {
    return f
  },
  InboundPromotionErrorCodes: function() {
    return _
  },
  PremiumUserLimits: function() {
    return eO
  },
  BoostingUpsellAction: function() {
    return m
  },
  ReferralTrialsAnalyticSteps: function() {
    return E
  },
  LegacyPricingCountries: function() {
    return eD
  },
  LegacySeasonalGiftStyles: function() {
    return eP
  },
  SeasonalGiftStyles2023: function() {
    return eb
  },
  AllSeasonalGiftStyles: function() {
    return eL
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _, h, g, m, E, p, v, S, T, I, C, A, y, N, R, O, D, P, b, L, M = n("866227"),
  U = n.n(M),
  k = n("78345"),
  w = n("49111"),
  V = n("958706");
(p = i || (i = {}))[p.TIER_1 = 1] = "TIER_1", p[p.TIER_2 = 2] = "TIER_2", p[p.TIER_0 = 3] = "TIER_0";
let G = void 0,
  F = [{
    value: null,
    label: "Non-Nitro"
  }, {
    value: 3,
    label: "Basic"
  }, {
    value: 1,
    label: "Classic"
  }, {
    value: 2,
    label: "Standard"
  }],
  x = Object.freeze({
    3: 0,
    1: 1,
    2: 2
  }),
  B = "521842831262875670";
(v = s || (s = {})).NONE = "628379670982688768", v.TIER_0 = "978380684370378762", v.TIER_1 = "521846918637420545", v.TIER_2 = "521847234246082599", v.GUILD = "590663762298667008", v.LEGACY = "521842865731534868";
let H = ["628379670982688768", "978380684370378762", "521846918637420545", "521847234246082599", "590663762298667008"],
  Y = Object.freeze({
    "978380684370378762": 3,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "521842865731534868": 2
  });
(S = r || (r = {})).NONE_MONTH = "628379151761408000", S.NONE_YEAR = "628381571568631808", S.PREMIUM_MONTH_TIER_0 = "978380692553465866", S.PREMIUM_YEAR_TIER_0 = "1024422698568122368", S.PREMIUM_MONTH_TIER_1 = "511651871736201216", S.PREMIUM_YEAR_TIER_1 = "511651876987469824", S.PREMIUM_MONTH_TIER_2 = "511651880837840896", S.PREMIUM_YEAR_TIER_2 = "511651885459963904", S.PREMIUM_MONTH_GUILD = "590665532894740483", S.PREMIUM_YEAR_GUILD = "590665538238152709", S.NONE_3_MONTH = "944265614527037440", S.NONE_6_MONTH = "944265636643602432", S.PREMIUM_3_MONTH_TIER_2 = "642251038925127690", S.PREMIUM_6_MONTH_TIER_2 = "944037208325619722", S.PREMIUM_3_MONTH_GUILD = "944037355453415424", S.PREMIUM_6_MONTH_GUILD = "944037391444738048", S.PREMIUM_MONTH_LEGACY = "511651856145973248", S.PREMIUM_YEAR_LEGACY = "511651860671627264";
let j = new Set(["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904", "511651856145973248", "511651860671627264"]),
  W = new Set(["511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"]),
  K = new Set(["590665532894740483", "944037355453415424", "944037391444738048", "590665538238152709"]),
  z = new Set(["642251038925127690", "944037208325619722", "944037355453415424", "944037391444738048"]),
  q = new Set(["978380692553465866", "511651871736201216", "511651880837840896"]),
  X = Object.freeze({
    "978380684370378762": "978380692553465866",
    "521846918637420545": "511651871736201216",
    "521847234246082599": "511651880837840896",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  }),
  Q = Object.freeze({
    "978380684370378762": "1024422698568122368",
    "521846918637420545": "511651876987469824",
    "521847234246082599": "511651885459963904",
    "628379670982688768": void 0,
    "590663762298667008": void 0,
    "521842865731534868": void 0
  });
(T = a || (a = {}))[T.MONTH = 1] = "MONTH", T[T.YEAR = 2] = "YEAR", T[T.DAY = 3] = "DAY";
let Z = Object.freeze({
    "628379151761408000": {
      id: "628379151761408000",
      name: "None Monthly",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 1
    },
    "628381571568631808": {
      id: "628381571568631808",
      name: "None Yearly",
      skuId: "628379670982688768",
      interval: 2,
      intervalCount: 1
    },
    "978380692553465866": {
      id: "978380692553465866",
      name: "Nitro Basic Monthly",
      premiumType: 3,
      skuId: "978380684370378762",
      interval: 1,
      intervalCount: 1
    },
    "1024422698568122368": {
      id: "1024422698568122368",
      name: "Nitro Basic Yearly",
      premiumType: 3,
      skuId: "978380684370378762",
      interval: 2,
      intervalCount: 1
    },
    "511651871736201216": {
      id: "511651871736201216",
      name: "Nitro Classic Monthly",
      premiumType: 1,
      skuId: "521846918637420545",
      interval: 1,
      intervalCount: 1
    },
    "511651876987469824": {
      id: "511651876987469824",
      name: "Nitro Classic Yearly",
      premiumType: 1,
      skuId: "521846918637420545",
      interval: 2,
      intervalCount: 1
    },
    "511651880837840896": {
      id: "511651880837840896",
      name: "Nitro Monthly",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 1
    },
    "511651885459963904": {
      id: "511651885459963904",
      name: "Nitro Yearly",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 2,
      intervalCount: 1
    },
    "590665532894740483": {
      id: "590665532894740483",
      name: "Nitro Server Boost Monthly",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 1
    },
    "590665538238152709": {
      id: "590665538238152709",
      name: "Nitro Server Boost Yearly",
      skuId: "590663762298667008",
      interval: 2,
      intervalCount: 1
    },
    "642251038925127690": {
      id: "642251038925127690",
      name: "Nitro Three Month",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 3
    },
    "944037208325619722": {
      id: "944037208325619722",
      name: "Nitro Six Month",
      premiumType: 2,
      skuId: "521847234246082599",
      interval: 1,
      intervalCount: 6
    },
    "944037355453415424": {
      id: "944037355453415424",
      name: "Nitro Server Boost Three Month",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 3
    },
    "944037391444738048": {
      id: "944037391444738048",
      name: "Nitro Server Boost Six Month",
      skuId: "590663762298667008",
      interval: 1,
      intervalCount: 6
    },
    "944265614527037440": {
      id: "944265614527037440",
      name: "None Three Month",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 3
    },
    "944265636643602432": {
      id: "944265636643602432",
      name: "None Six Month",
      skuId: "628379670982688768",
      interval: 1,
      intervalCount: 6
    },
    "511651856145973248": {
      id: "511651856145973248",
      name: "Nitro Monthly (Legacy)",
      premiumType: 2,
      skuId: "521842865731534868",
      interval: 1,
      intervalCount: 1
    },
    "511651860671627264": {
      id: "511651860671627264",
      name: "Nitro Classic Yearly (Legacy)",
      premiumType: 2,
      skuId: "521842865731534868",
      interval: 2,
      intervalCount: 1
    }
  }),
  J = 30,
  $ = 2,
  ee = 3,
  et = 7,
  en = 30,
  ei = "775514091874680832",
  es = "845031178288889946",
  er = 432e6,
  ea = 14,
  eo = "520373071933079552",
  el = "902329034132684800",
  eu = "983601860436819968",
  ed = "983601860436819969",
  ec = "984244797441048577",
  ef = "1004850445463584768",
  e_ = "1073698058383917056",
  eh = "1070132870233980928",
  eg = "1150904354090532864",
  em = "1199128659810582528",
  eE = Object.freeze({
    [eo]: {
      id: eo,
      skus: ["521847234246082599"]
    },
    [el]: {
      id: el,
      skus: ["521847234246082599"]
    },
    [eu]: {
      id: eu,
      skus: ["521847234246082599"]
    },
    [ed]: {
      id: ed,
      skus: ["521847234246082599"]
    },
    [ec]: {
      id: ec,
      skus: ["521847234246082599"]
    },
    [ef]: {
      id: ef,
      skus: ["521847234246082599"]
    },
    [eh]: {
      id: eh,
      skus: ["978380684370378762"]
    },
    [e_]: {
      id: e_,
      skus: ["521847234246082599"]
    }
  });
(I = o || (o = {})).ANIMATED_GUILD_BANNER_TOOLTIP = "animated_guild_banner_tooltip", I.EMOJI_PICKER_SEARCH = "emoji_picker_search", I.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked", I.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked", I.EMOJI_PICKER_REACTION_EMOJI_CLICKED = "emoji_picker_reaction_emoji_clicked", I.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED = "emoji_picker_super_reaction_emoji_clicked", I.EMOJI_PICKER_STATUS_EMOJI_CLICKED = "emoji_picker_status_emoji_clicked", I.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED = "emoji_picker_top_server_emoji_clicked", I.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED = "emoji_picker_newly_added_emoji_clicked", I.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline", I.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal", I.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover", I.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover", I.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover", I.EMOJI_IN_BURST_REACTION_HOVER_UPSELL = "emoji_in_burst_reaction_hover_upsell", I.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover", I.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell", I.STREAM_QUALITY_INDICATOR = "stream_quality_indicator", I.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator", I.STREAM_QUALITY_UPSELL = "stream_quality_upsell", I.MESSAGE_LENGTH_UPSELL = "message_length_upsell", I.MESSAGE_LENGTH_IN_EDITOR_UPSELL = "message_length_in_editor_upsell", I.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal", I.CUSTOM_PROFILE_TRY_OUT_UPSELL = "try out custom profile in settings upsell", I.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal", I.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline", I.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list", I.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal", I.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal", I.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell", I.PREMIUM_GUILD_IDENTITY_MODAL = "premium guild identity upsell alert", I.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON = "custom profiles settings banner upsell", I.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL = "custom profiles profile banner social upsell", I.STICKER_PICKER_UPSELL = "sticker_picker_upsell", I.ANIMATED_AVATAR_PREVIEW_GIF_MODAL = "animated avatar preview gif modal", I.PREMIUM_PROGRESS_BAR = "premium_progress_bar_tooltip", I.INVITE_SPLASH_UPSELL = "premium_invite_splash_upsell", I.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal", I.UPLOAD_ERROR_UPSELL = "upload error upsell", I.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE = "premium guild member profile upsell inline", I.CONCURRENT_ACTIVITIES = "Concurrent Activities", I.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED = "premium_uncancel_winback_modal_viewed", I.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET = "animated_video_background_new_preset", I.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip", I.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "profile customization", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "hd streaming", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "larger file uploads", I.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo", I.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell", I.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL = "Voice Channel Effect Bar Emoji Upsell", I.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED = "voice_channel_effects_toggle_clicked", I.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED = "voice_channel_effects_toggle_clicked_expanded", I.PROFILE_THEME_UPSELL_MODAL = "profile_theme_upsell_modal", I.PROFILE_EFFECTS_INLINE_SETTINGS = "profile_effects_inline_settings", I.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE = "profile_effects_inline_settings_mobile", I.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell", I.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out", I.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell", I.BURST_REACTION_UPSELL = "burst_reaction_upsell", I.BURST_REACTION_QUICK_ACTION_UPSELL = "burst_reaction_quick_action_upsell", I.BURST_REACTION_CONTEXT_MENU_UPSELL = "burst_reaction_context_menu_upsell", I.PREMIUM_CLIENT_THEME_TRY_IT_OUT = "premium_client_theme_try_it_out", I.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL = "premium_client_theme_settings_upsell", I.VIDEO_STAGE_LIMIT = "video_stage_limit", I.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked", I.APP_ICON_UPSELL = "app_icon_upsell", I.COLLECTIBLES_SHOP = "collectibles_shop", I.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles_profile_settings_upsell", I.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles_premium_marketing_page_upsell", I.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL = "clips_guild_sidebar_coachmark_premium_early_access_upsell", I.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL = "clips_go_live_premium_early_access_roadblock_upsell", (C = l || (l = {}))[C.PREMIUM_TIER_1 = 1] = "PREMIUM_TIER_1", C[C.PREMIUM_TIER_2 = 2] = "PREMIUM_TIER_2", C[C.GUILD_BOOST = 4] = "GUILD_BOOST", C[C.PREMIUM_TIER_0 = 8] = "PREMIUM_TIER_0";
let ep = Object.freeze({
    "978380684370378762": 8,
    "521846918637420545": 1,
    "521847234246082599": 2,
    "590663762298667008": 4
  }),
  ev = U.duration(30, "days"),
  eS = 52428800,
  eT = {
    [w.BoostedGuildTiers.NONE]: 5,
    [w.BoostedGuildTiers.TIER_1]: 10,
    [w.BoostedGuildTiers.TIER_2]: 15,
    [w.BoostedGuildTiers.TIER_3]: 30
  },
  eI = {
    [w.BoostedGuildTiers.NONE]: eT[w.BoostedGuildTiers.NONE],
    [w.BoostedGuildTiers.TIER_1]: eT[w.BoostedGuildTiers.NONE] + eT[w.BoostedGuildTiers.TIER_1],
    [w.BoostedGuildTiers.TIER_2]: eT[w.BoostedGuildTiers.NONE] + eT[w.BoostedGuildTiers.TIER_1] + eT[w.BoostedGuildTiers.TIER_2],
    [w.BoostedGuildTiers.TIER_3]: eT[w.BoostedGuildTiers.NONE] + eT[w.BoostedGuildTiers.TIER_1] + eT[w.BoostedGuildTiers.TIER_2] + eT[w.BoostedGuildTiers.TIER_3]
  },
  eC = {
    [w.BoostedGuildTiers.NONE]: 8,
    [w.BoostedGuildTiers.TIER_1]: 24,
    [w.BoostedGuildTiers.TIER_2]: 36,
    [w.BoostedGuildTiers.TIER_3]: 48
  },
  eA = Object.freeze({
    [w.BoostedGuildTiers.NONE]: {
      features: [],
      limits: {
        emoji: V.EMOJI_MAX_SLOTS,
        bitrate: w.BITRATE_MAX,
        fileSize: w.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 30,
        screenShareQualityResolution: "720p",
        soundboardSounds: eC[w.BoostedGuildTiers.NONE],
        maxConcurrentActivities: 2,
        stickers: eI[w.BoostedGuildTiers.NONE],
        stageVideoUsers: w.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [w.BoostedGuildTiers.TIER_1]: {
      features: [w.GuildFeatures.INVITE_SPLASH, w.GuildFeatures.ANIMATED_ICON],
      limits: {
        emoji: 100,
        bitrate: 128e3,
        fileSize: w.MAX_ATTACHMENT_SIZE,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "720p",
        soundboardSounds: eC[w.BoostedGuildTiers.TIER_1],
        maxConcurrentActivities: 3,
        stickers: eI[w.BoostedGuildTiers.TIER_1],
        stageVideoUsers: w.MAX_STAGE_VIDEO_USER_LIMIT_TIER01
      }
    },
    [w.BoostedGuildTiers.TIER_2]: {
      features: [w.GuildFeatures.INVITE_SPLASH, w.GuildFeatures.ANIMATED_ICON, w.GuildFeatures.BANNER, w.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 150,
        bitrate: 256e3,
        fileSize: 52428800,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: eC[w.BoostedGuildTiers.TIER_2],
        maxConcurrentActivities: 5,
        stickers: eI[w.BoostedGuildTiers.TIER_2],
        stageVideoUsers: w.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
      }
    },
    [w.BoostedGuildTiers.TIER_3]: {
      features: [w.GuildFeatures.INVITE_SPLASH, w.GuildFeatures.ANIMATED_ICON, w.GuildFeatures.BANNER, w.GuildFeatures.ANIMATED_BANNER, w.GuildFeatures.VANITY_URL, w.GuildFeatures.ROLE_ICONS],
      limits: {
        emoji: 250,
        bitrate: 384e3,
        fileSize: 104857600,
        screenShareQualityFramerate: 60,
        screenShareQualityResolution: "1080p",
        soundboardSounds: eC[w.BoostedGuildTiers.TIER_3],
        maxConcurrentActivities: Number.MAX_SAFE_INTEGER,
        stickers: eI[w.BoostedGuildTiers.TIER_3],
        stageVideoUsers: w.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }
    }
  }),
  ey = ["978380692553465866", "1024422698568122368", "511651871736201216", "511651876987469824", "511651880837840896", "642251038925127690", "944037208325619722", "511651885459963904"];
(A = u || (u = {})).SOUNDBOARD_PLAY = "soundboard play", A.PROFILE_THEME_COLOR = "profile_theme_color", A.PROFILE_BANNER = "profile_banner", A.ANIMATED_AVATAR = "animated_avatar", A.AVATAR_DECORATION = "avatar_decoration", A.CLIENT_THEME = "client_theme", A.SHARED_CANVAS = "shared_canvas", A.PROFILE_EFFECT = "profile_effect", (y = d || (d = {})).FREE = "free", y.PREMIUM_STANDARD = "premium-standard";
let eN = {
  "1024422698568122368": 16,
  "511651876987469824": 16,
  "511651885459963904": 16,
  "944037208325619722": 8,
  "642251038925127690": 5
};
(N = c || (c = {})).HIGH_STREAMING_QUALITY = "high_streaming_quality", N.MID_STREAMING_QUALITY = "mid_streaming_quality";
let eR = Object.freeze({
  high_streaming_quality: 2,
  mid_streaming_quality: 1
});
(R = f || (f = {}))[R.UserSettings = 0] = "UserSettings", R[R.ApplicationStoreHome = 1] = "ApplicationStoreHome", (O = _ || (_ = {})).USER_NOT_VERIFIED = "user_not_verified", O.NO_CODE_BODY = "no_code_body", O.NO_PROMOTION = "no_promotion", O.CODE_CLAIMED = "code_claimed", O.EXISTING_SUBSCRIBER = "existing_subscriber", O.PREVIOUS_SUBSCRIBER = "previous_subscriber", O.BLOCKED_PAYMENT = "blocked_payment";
let eO = Object.freeze({
  3: {
    fileSize: eS
  },
  1: {
    fileSize: 52428800
  },
  2: {
    fileSize: 524288e3
  }
});
(D = h || (h = {})).EXPLORE_ALL_PERKS_CLICKED = "explore_all_perks_clicked", D.HELPER_COLLAPSED = "helper_collapsed", D.HELPER_UNCOLLAPSED = "helper_uncollapsed", D.UNLOCK_EMOJI_CLICKED = "unlock_emoji_clicked", D.CUSTOM_PROFILES_CLICKED = "custom_profiles_clicked", D.SERVER_BOOSTS_CLICKED = "server_boosts_clicked", D.HELPER_DISMISSED = "premium_feature_helper_dismissed", D.HELPER_RENDERED = "premium_feature_helper_rendered", (P = g || (g = {})).EMOJI_TUTORIAL_STARTED = "emoji_tutorial_started", P.EMOJI_INTRO_VIEWED = "emoji_intro_viewed", P.EMOJI_PROMPT_VIEWED = "emoji_prompt_viewed", P.CUSTOM_PROFILE_TUTORIAL_STARTED = "custom_profile_tutorial_started", P.CUSTOM_PROFILE_AVATAR_INTRO_VIEWED = "custom_profile_avatar_intro_viewed", P.CUSTOM_PROFILE_AVATAR_DECORATIONS_VIEWED = "custom_profile_avatar_decorations_viewed", P.CUSTOM_PROFILE_BANNER_INTRO_VIEWED = "custom_profile_banner_intro_viewed", P.CUSTOM_PROFILE_THEME_INTRO_VIEWED = "custom_profile_theme_intro_viewed", P.SERVER_PROFILE_INTRO_VIEWED = "server_profile_intro_viewed", P.SERVER_BOOST_TUTORIAL_STARTED = "server_boost_tutorial_started", P.BOOST_INTRO_VIEWED = "boost_intro_viewed", P.BOOST_PROMPT_VIEWED = "boost_prompt_viewed", (b = m || (m = {})).BOOST = "boost", b.DISMISS = "dismiss", (L = E || (E = {})).BADGE_TOOLTIP_VIEWED = "share_nitro_bagde_tooltip_viewed", L.BADGE_CLICKED = "share_nitro_badge_clicked", L.FLOW_STARTED = "share_nitro_flow_started", L.FLOW_COMPLETED = "share_nitro_flow_completed";
let eD = new Set(["PL", "TR"]),
  eP = [k.PremiumGiftStyles.SNOWGLOBE, k.PremiumGiftStyles.BOX, k.PremiumGiftStyles.CUP],
  eb = [k.PremiumGiftStyles.SEASONAL_STANDARD_BOX, k.PremiumGiftStyles.SEASONAL_CAKE, k.PremiumGiftStyles.SEASONAL_COFFEE, k.PremiumGiftStyles.SEASONAL_CHEST],
  eL = eb.concat(eP)