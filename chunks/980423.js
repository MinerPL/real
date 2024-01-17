"use strict";
n.r(t), n.d(t, {
  LiveIndicatorLooks: function() {
    return l
  },
  LiveIndicatorShapes: function() {
    return E
  },
  default: function() {
    return T
  }
});
var s, l, a = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("669491"),
  u = n("956089"),
  d = n("782340"),
  c = n("164910");
(s = l || (l = {})).RED = "RED", s.GRAY = "GRAY";
let f = {
    LARGE: c.liveLarge,
    SMALL: c.liveSmall
  },
  E = {
    [u.BadgeShapes.ROUND]: c.liveShapeRound,
    [u.BadgeShapes.ROUND_LEFT]: c.liveShapeRoundLeft,
    [u.BadgeShapes.ROUND_RIGHT]: c.liveShapeRoundRight,
    [u.BadgeShapes.SQUARE]: ""
  };

function _(e) {
  let {
    className: t,
    style: n,
    shape: s = u.BadgeShapes.ROUND,
    look: l = "RED",
    size: i = f.LARGE
  } = e;
  return "RED" === l ? (0, a.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r(t, c.live, i),
    color: o.default.unsafe_rawColors.RED_400.css,
    shape: E[s],
    style: n
  }) : (0, a.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r(t, c.live, i, c.grey),
    disableColor: !0,
    shape: E[s],
    style: n
  })
}
_.Looks = l, _.Sizes = f;
var T = _