"use strict";
i.r(t), i.d(t, {
  PerkIcons: function() {
    return _
  },
  getNextTier: function() {
    return M
  },
  getTotalStickerCountForTier: function() {
    return f
  },
  getIncrementalStickerCountForTier: function() {
    return c
  },
  getTotalSoundboardSoundCountForTier: function() {
    return L
  },
  getIncrementalSoundboardSoundCountForTier: function() {
    return D
  },
  getTiers: function() {
    return N
  },
  getTierName: function() {
    return P
  },
  getShortenedTierName: function() {
    return O
  },
  minimumRequiredTierForGuildFeature: function() {
    return B
  },
  boostedGuildTierToAnalyticsObjectType: function() {
    return A
  },
  getGuildTierFromAppliedBoostCount: function() {
    return p
  },
  getNextGuildTierFromAppliedBoostCount: function() {
    return g
  },
  getAppliedGuildBoostMonths: function() {
    return m
  },
  isGuildBoostedAtLeast: function() {
    return C
  },
  isTierUnlocked: function() {
    return b
  },
  getAvailableGuildBoostSlots: function() {
    return K
  },
  generateBlockGuildSubscriptionPurchasesNode: function() {
    return y
  },
  isInGracePeriod: function() {
    return h
  },
  appliedGuildBoostsRequiredForPerks: function() {
    return F
  },
  getAppliedGuildBoostsRequired: function() {
    return v
  },
  getGracePeriodEndingDate: function() {
    return w
  },
  getAvailableStickerSlotCount: function() {
    return V
  },
  getAvailableSoundboardSoundCount: function() {
    return j
  },
  getNumberOfAppliedBoostsNeededForTier: function() {
    return x
  },
  isGuildBoostSlotCanceled: function() {
    return k
  }
}), i("70102"), i("222007"), i("808653");
var _, s, o = i("917351"),
  I = i.n(o),
  u = i("866227"),
  r = i.n(u),
  T = i("625634"),
  d = i("521012"),
  l = i("993105"),
  n = i("449008"),
  E = i("701909"),
  a = i("719923"),
  S = i("49111"),
  R = i("646718"),
  G = i("782340");
Object.freeze({
  1: 1,
  2: 2,
  3: 3,
  4: 6,
  5: 9,
  6: 12,
  7: 15,
  8: 18,
  9: 24
}), (s = _ || (_ = {}))[s.EMOJI = 1] = "EMOJI", s[s.AUDIO = 2] = "AUDIO", s[s.ANIMATED = 3] = "ANIMATED", s[s.CUSTOMIZATION = 4] = "CUSTOMIZATION", s[s.UPLOAD = 5] = "UPLOAD", s[s.VANITY = 6] = "VANITY", s[s.STREAM = 7] = "STREAM", s[s.STICKER = 8] = "STICKER", s[s.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", s[s.STAGE_VIDEO = 12] = "STAGE_VIDEO", s[s.SOUNDBOARD = 13] = "SOUNDBOARD";
let U = [S.BoostedGuildTiers.NONE, S.BoostedGuildTiers.TIER_1, S.BoostedGuildTiers.TIER_2, S.BoostedGuildTiers.TIER_3],
  M = (e, t) => {
    var i;
    return e === S.BoostedGuildTiers.NONE ? S.BoostedGuildTiers.TIER_1 : null === (i = Y(t).find(t => t.tier === e)) || void 0 === i ? void 0 : i.nextTier
  },
  f = e => R.TotalStickerCountsByTier[e],
  c = e => R.IncrementalStickerCountsByTier[e],
  L = e => R.TotalSoundboardSoundCountsByTier[e],
  D = e => {
    if (e === S.BoostedGuildTiers.NONE) return R.TotalSoundboardSoundCountsByTier[e];
    let t = U[U.indexOf(e) - 1];
    return R.TotalSoundboardSoundCountsByTier[e] - R.TotalSoundboardSoundCountsByTier[t]
  },
  N = e => [{
    tier: S.BoostedGuildTiers.TIER_1,
    title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
    perks: [{
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji - R.BoostedGuildFeatures[S.BoostedGuildTiers.NONE].limits.emoji,
        total: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
      icon: 1
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: c(S.BoostedGuildTiers.TIER_1),
        total: f(S.BoostedGuildTiers.TIER_1)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
      icon: 8
    }, {
      title: G.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: D(S.BoostedGuildTiers.TIER_1),
        totalSoundCount: L(S.BoostedGuildTiers.TIER_1)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
      icon: 13
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
      icon: 2
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
      icon: 3
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
      icon: 4
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
      icon: 7
    }].filter(n.isNotNullish)
  }, {
    tier: S.BoostedGuildTiers.TIER_2,
    title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
    perks: [{
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji - R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji,
        total: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
      icon: 1
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: c(S.BoostedGuildTiers.TIER_2),
        total: f(S.BoostedGuildTiers.TIER_2)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
      icon: 8
    }, {
      title: G.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: D(S.BoostedGuildTiers.TIER_2),
        totalSoundCount: L(S.BoostedGuildTiers.TIER_2)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
      icon: 13
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
      icon: 2
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
      icon: 4
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
        fileSize: (0, l.formatSize)(R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
      icon: 5
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
      icon: 7
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
      icon: 11
    }, e ? {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
      }),
      icon: 12
    } : null].filter(n.isNotNullish)
  }, {
    tier: S.BoostedGuildTiers.TIER_3,
    title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
    perks: [{
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
        adding: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.emoji - R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji,
        total: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.emoji
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
      icon: 1
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
        adding: c(S.BoostedGuildTiers.TIER_3),
        total: f(S.BoostedGuildTiers.TIER_3)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
      icon: 8
    }, {
      title: G.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
        soundCount: D(S.BoostedGuildTiers.TIER_3),
        totalSoundCount: L(S.BoostedGuildTiers.TIER_3)
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
      icon: 13
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
        bitrate: R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
      icon: 2
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
        helpdeskArticle: E.default.getArticleURL(S.HelpdeskArticles.GUILD_VANITY_URL)
      }),
      icon: 6
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
        fileSize: (0, l.formatSize)(R.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
      icon: 5
    }, {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
      icon: 3
    }, e ? {
      title: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }),
      description: G.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
        limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
      }),
      icon: 12
    } : null].filter(n.isNotNullish)
  }];

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      useLevels: i = !0
    } = t;
  switch (e) {
    case S.BoostedGuildTiers.NONE:
      return i ? G.default.Messages.PREMIUM_GUILD_TIER_0 : G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
    case S.BoostedGuildTiers.TIER_1:
      return G.default.Messages.PREMIUM_GUILD_TIER_1;
    case S.BoostedGuildTiers.TIER_2:
      return G.default.Messages.PREMIUM_GUILD_TIER_2;
    case S.BoostedGuildTiers.TIER_3:
      return G.default.Messages.PREMIUM_GUILD_TIER_3;
    default:
      throw Error("Not a valid tier type")
  }
}

function O(e) {
  switch (e) {
    case S.BoostedGuildTiers.NONE:
      return G.default.Messages.PREMIUM_GUILD_TIER_0;
    case S.BoostedGuildTiers.TIER_1:
      return G.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
    case S.BoostedGuildTiers.TIER_2:
      return G.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
    case S.BoostedGuildTiers.TIER_3:
      return G.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
    default:
      throw Error("Not a valid tier type")
  }
}
let B = I.memoize(e => (0, R.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_1].features.includes(e) ? S.BoostedGuildTiers.TIER_1 : (0, R.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_2].features.includes(e) ? S.BoostedGuildTiers.TIER_2 : (0, R.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_3].features.includes(e) ? S.BoostedGuildTiers.TIER_3 : null),
  A = e => {
    if (e === S.BoostedGuildTiers.NONE) return S.AnalyticsObjectTypes.NONE;
    if (e === S.BoostedGuildTiers.TIER_1) return S.AnalyticsObjectTypes.TIER_1;
    if (e === S.BoostedGuildTiers.TIER_2) return S.AnalyticsObjectTypes.TIER_2;
    else if (e === S.BoostedGuildTiers.TIER_3) return S.AnalyticsObjectTypes.TIER_3;
    return null
  };

function p(e, t) {
  for (let i of Y(t))
    if (e >= i.amount) return i.tier;
  return S.BoostedGuildTiers.NONE
}

function g(e, t) {
  for (let i of Y(t))
    if (e >= i.amount) return i.nextTier;
  return S.BoostedGuildTiers.TIER_1
}

function m(e) {
  var t;
  return null !== (t = r().diff(r(e), "months")) && void 0 !== t ? t : 1
}

function C(e, t) {
  return null == t || null != e && e >= t
}

function b(e, t) {
  return C(e.premiumTier, t)
}

function K(e) {
  return I.values(e).filter(e => e.isAvailable())
}

function y() {
  let e = d.default.getPremiumTypeSubscription(),
    t = Object.values(T.default.boostSlots),
    {
      numAvailableGuildBoostSlots: i,
      numCanceledGuildBoostSlots: _
    } = t.reduce((e, t) => (k(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
      numAvailableGuildBoostSlots: 0,
      numCanceledGuildBoostSlots: 0
    });
  if (null == e || i > 0) return null;
  if (e.status === S.SubscriptionStatusTypes.PAST_DUE) return G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
  if (e.status === S.SubscriptionStatusTypes.ACCOUNT_HOLD) return G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
  if (_ > 0) return G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
  if (null == e.renewalMutations) return null;
  let s = a.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
    o = a.getNumPremiumGuildSubscriptions(e.additionalPlans);
  return o > s ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : G.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
}

function h(e, t) {
  return F(e, t) > 0
}

function F(e, t) {
  let i = p(e.length, t),
    _ = v(t)[i],
    s = e.filter(e => null != e.endsAt);
  return _ - (e.length - s.length)
}

function v(e) {
  return S.AppliedGuildBoostsRequiredForBoostedGuildTier
}

function Y(e) {
  let t = v(e);
  return [{
    tier: S.BoostedGuildTiers.TIER_3,
    amount: t[S.BoostedGuildTiers.TIER_3],
    nextTier: null
  }, {
    tier: S.BoostedGuildTiers.TIER_2,
    amount: t[S.BoostedGuildTiers.TIER_2],
    nextTier: S.BoostedGuildTiers.TIER_3
  }, {
    tier: S.BoostedGuildTiers.TIER_1,
    amount: t[S.BoostedGuildTiers.TIER_1],
    nextTier: S.BoostedGuildTiers.TIER_2
  }]
}

function w(e, t) {
  let i = F(e, t);
  if (i > 0) {
    let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt),
      _ = t[t.length - i];
    return _.endsAt
  }
  return null
}

function V(e, t) {
  let i = c(t),
    _ = U.indexOf(t);
  if (-1 === _) return 0;
  let s = U[_ - 1],
    o = null != s ? f(s) : 0,
    I = f(t);
  return Math.max(0, i - e.slice(o, I).length)
}

function j(e, t) {
  let i = U.indexOf(t);
  if (-1 === i) return 0;
  let _ = L(t);
  return Math.max(0, _ - e.length)
}

function x(e, t) {
  let i = e.premiumSubscriberCount,
    _ = v(e.id)[t];
  return Math.max(0, _ - i)
}

function k(e) {
  var t;
  return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === S.SubscriptionStatusTypes.CANCELED || e.canceled
}