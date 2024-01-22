"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007"), n("702976"), n("808653");
var i = n("446674"),
  s = n("913144"),
  r = n("305961"),
  a = n("568734"),
  o = n("507950"),
  l = n("49111"),
  u = n("397336");
let d = {};
class c extends i.default.Store {
  hasViewingRoles() {
    return Object.keys(d).length > 0
  }
  isViewingRoles(e) {
    return null != e && null != d[e]
  }
  getViewingRoles(e) {
    var t;
    return null === (t = d[e]) || void 0 === t ? void 0 : t.roles
  }
  getViewingRolesTimestamp(e) {
    var t;
    return null != e ? null === (t = d[e]) || void 0 === t ? void 0 : t.timestamp : null
  }
  getData(e) {
    return d[e]
  }
  isFullServerPreview(e) {
    var t;
    return (null === (t = d[e]) || void 0 === t ? void 0 : t.type) === o.ImpersonateType.NEW_MEMBER
  }
  isOptInEnabled(e) {
    let t = d[e];
    return null != t && t.type === o.ImpersonateType.NEW_MEMBER && t.optInEnabled
  }
  isOnboardingEnabled(e) {
    let t = d[e];
    return null != t && t.type === o.ImpersonateType.NEW_MEMBER && t.onboardingEnabled
  }
  getViewingChannels(e) {
    let t = d[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.optInChannels
  }
  getOnboardingResponses(e) {
    let t = d[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.onboardingResponses
  }
  getMemberOptions(e) {
    let t = d[e];
    return null == t || t.type !== o.ImpersonateType.NEW_MEMBER ? null : t.memberOptions
  }
  isChannelOptedIn(e, t) {
    let n = this.getViewingChannels(e);
    return null != n && n.has(t)
  }
  isViewingServerShop(e) {
    var t;
    return null != e && (null === (t = d[e]) || void 0 === t ? void 0 : t.type) === o.ImpersonateType.SERVER_SHOP
  }
  getImpersonateType(e) {
    if (null == e) return null;
    let t = d[e];
    return null == t ? null : t.type
  }
  getBackNavigationSection(e) {
    if (null == e) return l.GuildSettingsSections.ROLES;
    let t = d[e];
    if (null == t) return l.GuildSettingsSections.ROLES;
    switch (t.type) {
      case o.ImpersonateType.ROLES:
      case o.ImpersonateType.SERVER_SHOP:
        return t.returnToSection;
      case o.ImpersonateType.NEW_MEMBER:
        return l.GuildSettingsSections.ONBOARDING;
      default:
        return l.GuildSettingsSections.ROLES
    }
  }
}
c.displayName = "ImpersonateStore";
var f = new c(s.default, {
  IMPERSONATE_UPDATE: function(e) {
    let {
      guildId: t,
      data: n
    } = e;
    delete n.roles[t], d[t] = {
      ...n,
      timestamp: Date.now()
    }
  },
  IMPERSONATE_STOP: function(e) {
    let {
      guildId: t
    } = e;
    if (null == d[t]) return !1;
    delete d[t]
  },
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e;
    if (null == d[t]) return !1;
    delete d[t].roles[n]
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    var t;
    let {
      guildId: n,
      overrides: i
    } = e;
    if (null == n || null == d[n]) return !1;
    let s = d[n];
    if (null == s || s.type !== o.ImpersonateType.NEW_MEMBER) return !1;
    let r = null !== (t = s.optInChannels) && void 0 !== t ? t : new Set;
    return Object.keys(i).forEach(e => {
      var t;
      let n = i[e];
      a.hasFlag(null !== (t = n.flags) && void 0 !== t ? t : 0, u.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? r.add(e) : r.delete(e)
    }), s.optInChannels = r, !0
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
    var t;
    let {
      guildId: n,
      optionId: i,
      selected: s,
      removedOptionIds: r
    } = e;
    if (null == n || null == d[n]) return !1;
    let a = d[n];
    if (null == a || a.type !== o.ImpersonateType.NEW_MEMBER) return !1;
    let l = null !== (t = a.onboardingResponses) && void 0 !== t ? t : new Set;
    return null != r && r.length > 0 && r.forEach(e => l.delete(e)), s ? l.add(i) : l.delete(i), a.onboardingResponses = l, !0
  },
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t,
      roles: n,
      flags: i
    } = e;
    if (null == t) return !1;
    let s = d[t],
      a = r.default.getGuild(t);
    return null != a && null != s && (null != n && (s.roles = n.reduce((e, t) => {
      let n = a.getRole(t);
      return null != n && (e[t] = n), e
    }, {})), null != i && s.type === o.ImpersonateType.NEW_MEMBER && (s.memberOptions.flags = i), !0)
  }
})