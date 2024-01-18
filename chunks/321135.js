"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("168973"),
  o = n("301603"),
  d = n("632616"),
  r = n("535348"),
  s = n("353927"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
    [n, f, E] = (0, o.default)(e, t),
    _ = (0, i.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, l.jsx)(a.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (_ || f) return E(!f);
      (0, a.openModal)(e => (0, l.jsx)(d.default, {
        ...e,
        type: r.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => E(!f)
      }))
    }
  }) : null
}