"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("37983");
s("884691");
var n = s("77078"),
  a = s("292687"),
  o = s("974889"),
  r = s("599110"),
  i = s("49111");

function c(e, t) {
  let c = null != t ? t : "".concat(i.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
  null != e.targetBoostedGuildTier && (c += " - Tier ".concat(e.targetBoostedGuildTier));
  r.default.track(i.AnalyticEvents.OPEN_MODAL, {
    type: c,
    location: e.analyticsSourceLocation
  });
  let {
    openInPopoutEnabled: u,
    ...d
  } = e, f = a.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != u && u;
  f && (0, o.default)(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let _ = f ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT;
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await s.el("874642").then(s.bind(s, "874642"));
    return t => (0, l.jsx)(e, {
      ...d,
      ...t
    })
  }, {
    onCloseCallback: () => {
      r.default.track(i.AnalyticEvents.MODAL_DISMISSED, {
        type: c,
        location: e.analyticsSourceLocation
      })
    },
    contextKey: _
  })
}