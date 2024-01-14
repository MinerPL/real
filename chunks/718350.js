"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  openEffectsUpsellModal: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("349171"),
  i = n("626301"),
  r = n("789946"),
  o = n("58608"),
  u = n("599110"),
  d = n("49111"),
  c = n("782340"),
  f = n("331470"),
  h = n("534044");

function p(e) {
  let {
    onClose: t,
    analytics: n,
    ...l
  } = e, p = c.default.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_BODY_2.format({
    onPressMore: function() {
      (0, s.default)(), t(), u.default.track(d.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: d.AnalyticsSections.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
        location_object: d.AnalyticsObjects.NAVIGATION_LINK
      }), (0, i.navigateToPremiumMarketingPage)()
    }
  });
  return (0, a.jsx)(r.default, {
    title: c.default.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_HEADER_2,
    glowUp: p,
    body: p,
    artContainerClassName: f.artContainer,
    enableArtBoxShadow: !1,
    type: n.type,
    analyticsLocation: {
      section: d.AnalyticsSections.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
      object: n.object
    },
    analyticsSource: {
      page: d.AnalyticsPages.CHANNEL_CALL,
      section: n.section
    },
    onClose: t,
    onSubscribeClick: s.default,
    artElement: (0, a.jsx)(o.default, {
      className: f.video,
      src: h,
      loop: !0,
      autoPlay: !0
    }),
    ...l
  })
}

function m(e) {
  let {
    analytics: t
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("718350").then(n.bind(n, "718350"));
    return n => (0, a.jsx)(e, {
      analytics: t,
      ...n
    })
  })
}