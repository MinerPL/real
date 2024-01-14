"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("462579"),
  l = n("49111"),
  i = n("782340"),
  r = n("486064");

function o(e) {
  let {
    message: t,
    onDeleteMessage: n,
    children: o
  } = e;
  return (0, a.jsxs)("div", {
    className: r.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, a.jsx)(s.default, {
      className: r.icon,
      width: 16,
      height: 16
    }), (null == t ? void 0 : t.type) === l.MessageTypes.STAGE_RAISE_HAND ? i.default.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
      handleDelete() {
        n(t, !0)
      }
    }) : i.default.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
      count: 1,
      countMessages: 1,
      handleDelete() {
        n(t, !0)
      }
    }), o]
  })
}