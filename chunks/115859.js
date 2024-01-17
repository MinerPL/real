"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  },
  renderSimpleAccessories: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var l = n("849197"),
  a = n("723931");

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
    renderSuppressEmbeds: E,
    forceAddReactions: _,
    className: T
  } = e;
  return d ? null : (0, s.jsx)(l.default, {
    message: t,
    children: (0, s.jsx)(a.default, {
      className: T,
      isInteracting: u,
      message: t,
      channel: n,
      compact: i,
      hasSpoilerEmbeds: r,
      onAttachmentContextMenu: o,
      renderThreadAccessory: c,
      renderComponentAccessory: f,
      renderSuppressEmbeds: E,
      forceAddReactions: _
    })
  })
}

function r(e, t) {
  let {
    message: n,
    channel: l,
    compact: i = !1,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  } = e;
  return (0, s.jsx)(a.SimpleMessageAccessories, {
    message: n,
    channel: l,
    compact: i,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  })
}