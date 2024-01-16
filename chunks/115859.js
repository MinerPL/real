"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  },
  renderSimpleAccessories: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("849197"),
  l = n("723931");

function i(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: i = !1
    },
    hasSpoilerEmbeds: r,
    handleContextMenu: o,
    isInteracting: u,
    isAutomodBlockedMessage: d,
    renderThreadAccessory: c,
    renderComponentAccessory: f,
    renderSuppressEmbeds: m,
    forceAddReactions: E,
    className: _
  } = e;
  return d ? null : (0, a.jsx)(s.default, {
    message: t,
    children: (0, a.jsx)(l.default, {
      className: _,
      isInteracting: u,
      message: t,
      channel: n,
      compact: i,
      hasSpoilerEmbeds: r,
      onAttachmentContextMenu: o,
      renderThreadAccessory: c,
      renderComponentAccessory: f,
      renderSuppressEmbeds: m,
      forceAddReactions: E
    })
  })
}

function r(e, t) {
  let {
    message: n,
    channel: s,
    compact: i = !1,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  } = e;
  return (0, a.jsx)(l.SimpleMessageAccessories, {
    message: n,
    channel: s,
    compact: i,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  })
}