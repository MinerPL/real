"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("151426"),
  l = n("77078"),
  r = n("997289"),
  o = n("685665"),
  u = n("369964"),
  d = n("649844"),
  c = n("697218"),
  f = n("599110"),
  E = n("764364"),
  _ = n("56947"),
  h = n("49111"),
  C = n("994428"),
  I = n("646718"),
  T = n("782340"),
  S = n("150119"),
  m = function(e) {
    let {
      markAsDismissed: t
    } = e, n = (0, _.useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark)({
      autoTrackExposure: !0
    }), m = (0, r.useAnalyticsContext)(), {
      analyticsLocations: p
    } = (0, o.default)(), A = c.default.getCurrentUser(), g = (0, E.isPremium)(A);
    return s.useEffect(() => {
      n && !g && f.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: I.PremiumUpsellTypes.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL,
        location: m.location,
        location_stack: p
      })
    }, [n, g, m.location, p]), n ? (0, a.jsx)(u.default, {
      dismissibleContent: i.DismissibleContent.CLIPS_GUILD_PANEL_PREMIUM_EARLY_ACCESS_COACHMARK,
      contentClassName: S.container,
      isPremiumEarlyAccess: !0,
      shouldUseHorizontalButtons: !0,
      inlineArt: !0,
      artClassName: S.clipsArt,
      position: "right",
      header: T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_TITLE,
      headerClassName: S.clipsEducationHeader,
      body: (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_BODY
      }),
      tryItText: g ? void 0 : T.default.Messages.CLIPS_NITRO_EA_ANNOUNCEMENT_COACHMARK_CTA_NON_SUBS,
      onTryFeature: g ? void 0 : () => {
        (0, d.default)({
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: p
        })
      },
      onClose: () => t(C.ContentDismissActionType.UNKNOWN)
    }) : null
  }