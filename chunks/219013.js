"use strict";
n.r(t), n.d(t, {
  ReactionPicker: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var l = n("86678"),
  a = n("958706");

function i(e) {
  let {
    channel: t,
    closePopout: n,
    analyticsOverride: i,
    onSelectEmoji: r,
    messageId: o
  } = e;
  return (0, s.jsx)(l.default, {
    closePopout: n,
    channel: t,
    onSelectEmoji: r,
    pickerIntention: a.EmojiIntention.REACTION,
    analyticsOverride: i,
    messageId: o
  })
}