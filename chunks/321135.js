"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("168973"),
  r = n("301603"),
  o = n("632616"),
  u = n("535348"),
  d = n("353927"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
    [n, f, h] = (0, r.default)(e, t),
    p = (0, l.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, a.jsx)(s.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (p || f) return h(!f);
      (0, s.openModal)(e => (0, a.jsx)(o.default, {
        ...e,
        type: u.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => h(!f)
      }))
    }
  }) : null
}