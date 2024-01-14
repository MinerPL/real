"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  },
  ChannelSettingsIntegrationsNotice: function() {
    return h
  }
});
var l = s("37983");
s("884691");
var a = s("446674"),
  n = s("713841"),
  i = s("45299"),
  r = s("467733"),
  o = s("161810"),
  d = s("492114"),
  u = s("305961");

function c(e) {
  let {
    refToScroller: t
  } = e, {
    channel: s
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps(), []), n = (0, a.useStateFromStores)([u.default], () => null != s ? u.default.getGuild(s.getGuildId()) : null, [s]), {
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: E,
    isFetching: f,
    errors: m
  } = (0, a.useStateFromStores)([o.default], () => o.default.getProps(), []);
  return null == n || null == s ? null : (0, l.jsx)(r.default, {
    guild: n,
    channel: s,
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: E,
    isFetching: f,
    hasChanges: o.default.hasChanges,
    errors: m,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps()), s = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getGuild(e.getGuildId()) : null, [e]);
  return (0, l.jsx)(i.default, {
    submitting: t,
    onReset: () => {
      n.default.init()
    },
    onSave: () => {
      null != s && null != o.default.editedWebhook && n.default.saveWebhook(s.id, o.default.editedWebhook)
    }
  })
}