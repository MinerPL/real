"use strict";
n.r(t), n.d(t, {
  usePermissions: function() {
    return S
  },
  useCompletedStates: function() {
    return A
  }
}), n("222007");
var s = n("884691"),
  a = n("917351"),
  l = n.n(a),
  i = n("446674"),
  r = n("242757"),
  o = n("913491"),
  u = n("271938"),
  d = n("42203"),
  c = n("923959"),
  f = n("525065"),
  h = n("305961"),
  C = n("778588"),
  p = n("377253"),
  m = n("957255"),
  g = n("299039"),
  E = n("49111");

function S(e, t) {
  return (0, i.useStateFromStoresObject)([m.default], () => ({
    canInvite: (0, r.canViewInviteModal)(m.default, t, e),
    canManageGuild: null != t && m.default.can(E.Permissions.MANAGE_GUILD, t),
    canMessage: null != e && m.default.can(E.Permissions.SEND_MESSAGES, e),
    canCreateChannel: null != t && m.default.can(E.Permissions.MANAGE_CHANNELS, t)
  }), [t, e])
}

function A(e) {
  var t;
  return {
    guildPopulated: function(e) {
      let t = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(null == e ? void 0 : e.systemChannelId)),
        n = (0, i.useStateFromStoresArray)([p.default], () => null != t ? p.default.getMessages(t.id).toArray() : []);
      return (0, i.useStateFromStores)([f.default], () => {
        var t;
        let s = null !== (t = f.default.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
          a = n.some(e => e.type === E.MessageTypes.USER_JOIN);
        return s > 1 || a
      }, [e, n])
    }(e),
    guildMessaged: function(e) {
      let t = (0, i.useStateFromStores)([d.default], () => null != e ? d.default.getMutableBasicGuildChannelsForGuild(e.id) : null),
        n = s.useMemo(() => null == t ? [] : l.values(t), [t]);
      return function(e) {
        let t = (0, i.useStateFromStores)([u.default], () => u.default.getId());
        return (0, i.useStateFromStores)([p.default], () => l.some(e, e => {
          let n = p.default.getMessages(e.id).toArray();
          return l.some(n, e => e.author.id === t && !(0, o.default)(e))
        }))
      }(n)
    }(e),
    guildPersonalized: function(e) {
      let t = (0, i.useStateFromStores)([C.default], () => C.default.hasLayers()),
        n = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(null == e ? void 0 : e.id));
      return (null == n ? void 0 : n.icon) != null && !t
    }(e),
    guildChannelCreated: (t = e, (0, i.useStateFromStores)([c.default], () => {
      let e = c.default.getChannels(null == t ? void 0 : t.id),
        n = e[c.GUILD_VOCAL_CHANNELS_KEY];

      function s(e) {
        return null != t && g.default.extractTimestamp(e.channel.id) - g.default.extractTimestamp(t.id) > 500
      }
      return e[0, c.GUILD_SELECTABLE_CHANNELS_KEY].some(s) || n.some(s)
    }, [t]))
  }
}