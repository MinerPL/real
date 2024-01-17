"use strict";
n.r(t), n.d(t, {
  UIKitGuildDiscoveryDisqualified: function() {
    return o
  },
  UIKitGuildDiscoveryRequalified: function() {
    return u
  },
  UIKitGuildDiscoveryGracePeriodInitialWarning: function() {
    return d
  },
  UIKitGuildDiscoveryGracePeriodFinalWarning: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("423487"),
  a = n("304198"),
  i = n("782340"),
  r = n("744806");

function o(e) {
  let {
    message: t,
    compact: l,
    onClick: o
  } = e;
  return (0, s.jsx)(a.default, {
    icon: n("768074"),
    timestamp: t.timestamp,
    compact: l,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_DISQUALIFIED.format({
      onClick: o
    })
  })
}

function u(e) {
  let {
    message: t,
    compact: l
  } = e;
  return (0, s.jsx)(a.default, {
    icon: n("228165"),
    timestamp: t.timestamp,
    compact: l,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_REQUALIFIED
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(a.default, {
    iconNode: (0, s.jsx)(l.default, {
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
  })
}

function c(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(a.default, {
    iconNode: (0, s.jsx)(l.default, {
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
  })
}