"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var a = i("37983");
i("884691");
var s = i("77078"),
  r = i("974889"),
  n = i("954016"),
  l = i("49111");

function o(e) {
  let {
    channel: t,
    guildId: o,
    locationObject: d,
    openInPopout: c,
    initialSelectedApplicationId: h,
    initialSlide: u = n.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: f = !1,
    analyticsLocations: _
  } = e;
  c && (0, r.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let p = c ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  return (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await i.el("605455").then(i.bind(i, "605455"));
    return i => (0, a.jsx)(e, {
      ...i,
      channel: t,
      guildId: o,
      locationObject: d,
      initialSlide: u,
      initialSelectedApplicationId: h,
      enableSelectedTextChannelInvite: f,
      analyticsLocations: _
    })
  }, {
    modalKey: n.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: p
  })
}