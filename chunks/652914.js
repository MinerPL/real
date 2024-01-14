"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var i = n("507497"),
  l = n("193867"),
  r = n("75015");

function o(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: o,
    isGIF: a,
    banner: u
  } = e;
  return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && a ? (0, s.jsx)(l.default, {
    analyticsSection: o,
    type: t
  }) : t === r.UploadTypes.GUILD_BANNER ? (0, s.jsx)(i.default, {
    analyticsSection: o,
    analyticsPage: n,
    isGIF: a,
    banner: u
  }) : null
}