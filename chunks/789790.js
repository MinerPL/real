"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("702976");
var s = n("37983");
n("884691");
var a = n("568734"),
  l = n("913491"),
  i = n("823674"),
  r = n("49111"),
  o = n("877671");

function u(e) {
  let {
    setPopout: t,
    messagePopouts: {
      emojiPicker: n,
      emojiBurstPicker: u,
      moreUtilities: d
    },
    isFocused: c,
    buttonProps: {
      message: f,
      channel: h,
      groupId: C,
      compact: p = !1
    }
  } = e, m = f.state === r.MessageStates.SENDING, g = f.id === C, E = (0, a.hasFlag)(f.flags, r.MessageFlags.EPHEMERAL), S = f.state === r.MessageStates.SEND_FAILED;
  return m || E && !S ? null : (0, s.jsx)(i.default, {
    className: o.buttons,
    innerClassName: o.buttonsInner,
    isHeader: !p && g && !(0, l.default)(f),
    channel: h,
    message: f,
    setPopout: t,
    showEmojiPicker: n,
    showEmojiBurstPicker: u,
    showMoreUtilities: d,
    isFocused: c
  })
}