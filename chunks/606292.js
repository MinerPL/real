"use strict";
n.r(t), n.d(t, {
  getDecorationSizeForAvatarSize: function() {
    return a
  },
  openAvatarDecorationModal: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  l = n("393414");
n("103603");
var o = n("573135"),
  s = n("49111");

function a(e) {
  return "number" != typeof e ? (0, i.getAvatarSize)(e) * o.DECORATION_TO_AVATAR_RATIO : e * o.DECORATION_TO_AVATAR_RATIO
}
let u = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: o,
    isTryItOutFlow: a
  } = e;
  (0, i.openModalLazy)(async () => {
    (0, l.getHistory)().location.pathname === s.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, l.transitionTo)(s.Routes.APP);
    let {
      default: e
    } = await n.el("791050").then(n.bind(n, "791050"));
    return n => (0, r.jsx)(e, {
      ...n,
      analyticsLocations: t,
      initialSelectedDecoration: o,
      isTryItOutFlow: a
    })
  }, {})
}