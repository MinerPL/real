"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return n
  },
  default: function() {
    return j
  }
});
var a, n, l = s("65597"),
  i = s("151426"),
  r = s("79112"),
  u = s("812204"),
  o = s("685665"),
  d = s("18346"),
  c = s("21526"),
  _ = s("38766"),
  E = s("42887"),
  I = s("521012"),
  T = s("701909"),
  f = s("719923"),
  S = s("184684"),
  R = s("646718"),
  m = s("49111"),
  p = s("397336"),
  N = s("782340"),
  A = s("571685"),
  g = s("994679"),
  P = s("620826"),
  C = s("333078"),
  O = s("156591"),
  M = s("913204"),
  h = s("174433"),
  L = s("62414"),
  x = s("613697"),
  v = s("907511"),
  U = s("165870"),
  b = s("443646");
(a = n || (n = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed";
var j = () => {
  let {
    analyticsLocations: e
  } = (0, o.default)(u.default.PREMIUM_MARKETING_PERK_CARD), t = (0, l.default)([I.default], () => I.default.getPremiumTypeSubscription()), s = null != t ? f.default.getPremiumPlanItem(t) : null, a = null != s ? f.default.getSkuIdForPlan(s.planId) : null, n = a === R.PremiumSubscriptionSKUs.TIER_2, {
    flipped: j
  } = (0, S.useWhatsNewAvatarDecoRollout)(), {
    flipped: D
  } = (0, S.useWhatsNewProfileFXRollout)(), G = (0, d.default)(E.default), B = (0, _.default)({
    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), y = () => {
    (0, c.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: u.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, k = {
    avatarDecorations: n ? {
      name: "avatarDecorations",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: N.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: y,
      pillText: N.default.Messages.EARLY_ACCESS,
      perkImage: C,
      canReveal: j,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: N.default.Messages.EARLY_ACCESS,
      perkImage: C,
      canReveal: j,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: N.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        r.default.open(m.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: A
    },
    clips: n ? {
      name: "clips",
      title: N.default.Messages.CLIPS,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: G ? N.default.Messages.TAKE_ME_THERE : N.default.Messages.LEARN_MORE,
      pillText: N.default.Messages.EARLY_ACCESS,
      onCtaClick: G ? () => {
        r.default.open(m.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(T.default.getArticleURL(m.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: O
    } : {
      name: "clips",
      title: N.default.Messages.CLIPS,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: N.default.Messages.EARLY_ACCESS,
      perkImage: O
    },
    earlyAccess: n ? {
      name: "earlyAccess",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: M
    } : {
      name: "earlyAccess",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: M
    },
    entranceSounds: n ? {
      name: "entranceSounds",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: N.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        r.default.open(m.UserSettingsSections.VOICE, p.SOUNDBOARD_SUBSECTION, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: h
    } : {
      name: "entranceSounds",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: h
    },
    profileEffects: n ? {
      name: "profileEffects",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: N.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: y,
      pillText: N.default.Messages.EARLY_ACCESS,
      perkImage: x,
      canReveal: D,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: N.default.Messages.EARLY_ACCESS,
      perkImage: x,
      canReveal: D,
      dismissibleContentType: i.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: N.default.Messages.TAKE_ME_THERE,
      onCtaClick: B,
      perkImage: g
    },
    remixing: n ? {
      name: "remixing",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: v,
      pillText: N.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: v,
      pillText: N.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: N.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: N.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        r.default.open(m.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: P
    },
    specialMemberPricing: n ? {
      name: "specialMemberPricing",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: N.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: y,
      perkImage: U
    } : {
      name: "specialMemberPricing",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: U
    },
    specialShopPerks: n ? {
      name: "specialShopPerks",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: N.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: y,
      perkImage: U
    } : {
      name: "specialShopPerks",
      title: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: N.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: N.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: y,
      perkImage: U
    },
    unlimitedSuperReactions: n ? {
      name: "unlimitedSuperReactions",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: b
    } : {
      name: "unlimitedSuperReactions",
      title: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: N.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: b
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: N.default.Messages.NEW_DROP,
      pillText: N.default.Messages.COMING_SOON,
      backgroundImage: L
    }
  };
  return k
}