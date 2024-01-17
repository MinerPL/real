"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("462579"),
  a = n("49111"),
  i = n("782340"),
  r = n("486064");

function o(e) {
  let {
    message: t,
    onDeleteMessage: n,
    children: o
  } = e;
  return (0, s.jsxs)("div", {
    className: r.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, s.jsx)(l.default, {
      className: r.icon,
      width: 16,
      height: 16
    }), (null == t ? void 0 : t.type) === a.MessageTypes.STAGE_RAISE_HAND ? i.default.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
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