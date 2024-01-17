"use strict";
a.r(t), a.d(t, {
  useManageResourcePermissions: function() {
    return E
  },
  getManageResourcePermissions: function() {
    return p
  },
  useHasInventoryGuildSettingsPermission: function() {
    return h
  },
  useShouldShowInventoryGuildSettingsCoachmark: function() {
    return C
  }
}), a("222007");
var n = a("884691"),
  l = a("316693"),
  i = a("446674"),
  r = a("252931"),
  s = a("813006");
a("923959");
var u = a("957255"),
  o = a("697218");
a("991170");
var d = a("270161"),
  c = a("843455");
let f = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  m = (e, t, a, n) => {
    if (null == e) return !1;
    if (a) return !0;
    if ("creator_id" in e) return n && null != t && e.creator_id === t.id;
    if ("userId" in e) return n && null != t && e.userId === t.id;
    if ("user" in e) {
      var l;
      return n && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
    }
    return !1
  },
  v = e => {
    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
  },
  E = e => {
    let [t, a] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [l, r, d, E] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(a, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = n.useCallback(e => m(e, p, r, l), [l, r, p]), C = n.useCallback(e => m(e, p, E, d), [E, d, p]);
    return null == e ? f : {
      canCreateExpressions: l,
      canCreateGuildEvent: d,
      canManageAllExpressions: r,
      canManageAllEvents: E,
      canManageGuildExpression: h,
      canManageGuildEvent: C
    }
  },
  p = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
      [n, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
      i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      d = t.can(n, e),
      E = t.can(l, e),
      p = a.getCurrentUser();
    return null == e ? f : {
      canCreateExpressions: i,
      canCreateGuildEvent: d,
      canManageAllExpressions: r,
      canManageAllEvents: E,
      canManageGuildExpression: e => m(e, p, r, i),
      canManageGuildEvent: e => m(e, p, E, d)
    }
  },
  h = e => {
    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
      {
        showSettingsToggle: a
      } = (0, r.useInventoryGuildSettingsExperiment)({
        guildId: null == e ? void 0 : e.id
      });
    return t && null != a
  },
  C = e => {
    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
      {
        showSettingsToggle: a,
        getNewSettingsDescriptionLine1: n
      } = (0, r.useInventoryGuildSettingsExperiment)({
        guildId: null == e ? void 0 : e.id
      });
    return t && null != a && null != n()
  }