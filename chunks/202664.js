"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("446674"),
  o = n("77078"),
  u = n("109036"),
  d = n("697218"),
  c = n("993105"),
  m = n("719923"),
  f = n("552917"),
  _ = n("843647"),
  E = n("789946"),
  T = n("646718"),
  I = n("49111"),
  P = n("527382"),
  p = n("782340"),
  S = n("74230");

function R(e) {
  let t, {
      onClose: n,
      fileSize: l,
      ...R
    } = e,
    C = null != l && T.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
    {
      isLoading: O,
      suggestedPremiumType: M
    } = (0, _.default)({
      autoTrackExposure: !C,
      experiment: f.default,
      location: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
    }),
    g = !C && M === T.PremiumTypes.TIER_0,
    L = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    v = (0, i.jsx)(u.default, {
      icons: P.DEFAULT_FILE_UPLOAD_ICONS
    });
  t = g ? p.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
    premiumPlan: (0, m.getPremiumTypeDisplayName)(T.PremiumTypes.TIER_0),
    premiumMaxSize: p.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
  }) : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
  let U = r.useMemo(() => {
      let e = m.default.getUserMaxFileSize(L),
        t = (0, c.formatSize)(e / 1024, {
          useKibibytes: !0
        }),
        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
          maxSize: t
        });
      switch (null == L ? void 0 : L.premiumType) {
        case T.PremiumTypes.TIER_0:
          n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
            maxSize: t
          });
          break;
        case T.PremiumTypes.TIER_1:
          n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
            maxSize: t
          })
      }
      return n
    }, [L]),
    h = (0, i.jsxs)("div", {
      className: S.body,
      children: [(0, i.jsx)("span", {
        children: U
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        children: t
      })]
    });
  return (0, i.jsx)(E.default, {
    artElement: v,
    artContainerClassName: s(S.artContainer),
    enableArtBoxShadow: !1,
    type: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: h,
    context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: t,
    analyticsLocation: {
      section: I.AnalyticsSections.FILE_UPLOAD_POPOUT
    },
    onClose: n,
    subscriptionTier: g ? T.PremiumSubscriptionSKUs.TIER_0 : T.PremiumSubscriptionSKUs.TIER_2,
    isLoading: O,
    ...R
  })
}