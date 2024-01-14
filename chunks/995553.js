"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("37983");
s("884691");
var a = s("446674"),
  n = s("758085"),
  i = s("492114"),
  r = s("305961"),
  o = s("957255"),
  d = s("102985"),
  u = s("49111");

function c() {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.hideInstantInvites),
    {
      channel: t,
      guild: s
    } = (0, a.useStateFromStoresObject)([i.default, r.default], () => {
      let {
        channel: e
      } = i.default.getProps(), t = null != e ? r.default.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: t
      }
    }, []),
    c = (0, a.useStateFromStores)([o.default], () => null != t && o.default.can(u.Permissions.CREATE_INSTANT_INVITE, t), [t]),
    {
      invites: h,
      loading: E
    } = (0, a.useStateFromStoresObject)([i.default], () => i.default.getInvites(), []);
  return (0, l.jsx)(n.default, {
    invites: h,
    loading: E,
    guild: s,
    channel: t,
    canCreateInvites: c,
    hide: e
  })
}