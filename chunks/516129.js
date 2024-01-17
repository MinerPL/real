"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("105110"),
  i = n("77078"),
  l = n("649844"),
  r = n("393414"),
  o = n("181114"),
  u = n("599110"),
  d = n("701909"),
  c = n("646718"),
  f = n("49111"),
  E = n("782340"),
  _ = n("334873"),
  h = n("121432");

function C(e) {
  var t, n;
  let {
    content: C,
    renderModalProps: I,
    analyticsLocations: T,
    analyticsLocation: S,
    isLightTheme: m
  } = e, p = "AnnouncementModalVariant1", {
    onClose: A
  } = I, g = null != C.button && "" !== C.button.copy ? C.button.copy : E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, N = (null === (t = C.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = C.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, r.transitionTo)(f.Routes.APPLICATION_STORE), A()
  } : () => (0, l.default)({
    subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: T,
    analyticsObject: {
      ...S,
      object: f.AnalyticsObjects.BUTTON_CTA,
      objectType: f.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && A()
    }
  }), O = "" !== C.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
    className: _.termsApplyAnchor,
    href: d.default.getArticleURL(C.helpArticleId),
    children: (0, a.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: _.termsApplyBodyText,
      children: E.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, L = {
    type: "video",
    src: m ? C.heroArtVideoLinkLightTheme : C.videoLink
  };
  return ("" !== C.heroArtImageLinkDarkTheme || "" !== C.heroArtImageLinkLightTheme) && (L = {
    type: "image",
    src: m ? C.heroArtImageLinkLightTheme : C.heroArtImageLinkDarkTheme
  }), {
    renderModalProps: I,
    header: C.header,
    subHeader: C.subheader,
    subHeaderExtra: O,
    heroArt: L,
    featureCards: C.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: m ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: p,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(o.default, {
        className: _.buttonWide,
        innerClassName: _.innerButton,
        color: i.Button.Colors.GREEN,
        size: i.Button.Sizes.SMALL,
        onClick: () => {
          u.default.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: p,
            cta_type: N,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: p
          }), R()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: _.nitroIconSubHeader,
          src: h
        }), g]
      })
    },
    modalDismissibleContent: "" !== C.dismissKey ? Number(C.dismissKey) : void 0
  }
}