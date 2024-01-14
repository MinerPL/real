"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var a = s("917351"),
  n = s.n(a),
  l = s("446674"),
  i = s("913144"),
  r = s("698882"),
  o = s("900938");
let d = {
    enabled: !1
  },
  u = null,
  c = Object.assign({}, d),
  E = !1,
  _ = {},
  T = {};

function I() {
  (function() {
    u = null, c = Object.assign({}, d), E = !1, T = {}
  })(), u = o.default.getGuildId(), c = n.cloneDeep(Object.assign({}, r.default.getSettings(u))), T = {}
}

function S(e, t) {
  if (null == c.newMemberActions) return !1;
  let s = c.newMemberActions.findIndex(t => t.channelId === e);
  if (s < 0) return !1;
  c.newMemberActions[s] = {
    ...t
  }, c.newMemberActions = [...c.newMemberActions], delete T[e]
}

function N(e, t) {
  if (null == c.resourceChannels) return !1;
  let s = c.resourceChannels.findIndex(t => t.channelId === e);
  if (s < 0) return !1;
  c.resourceChannels[s] = {
    ...t
  }, c.resourceChannels = [...c.resourceChannels]
}

function g() {
  E = !1, c = n.cloneDeep(Object.assign({}, r.default.getSettings(u)))
}
class f extends l.default.PersistedStore {
  initialize(e) {
    null != e && (_ = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(o.default, r.default)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: _
    }
  }
  getSettings() {
    return null != c ? c : d
  }
  hasChanges() {
    return null != u && !n.isEqual(n.omit(c, "newMemberActions"), n.omit(r.default.getSettings(u), "newMemberActions"))
  }
  getSubmitting() {
    return E
  }
  getDismissedSuggestedChannelIds(e) {
    var t;
    return null == e ? [] : null !== (t = _[e]) && void 0 !== t ? t : []
  }
  getResourceChannel(e) {
    var t;
    if (null == e) return null;
    let s = null === (t = c.resourceChannels) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == s ? null : s
  }
  getNewMemberAction(e) {
    var t;
    if (null == e) return null;
    let s = null === (t = c.newMemberActions) || void 0 === t ? void 0 : t.find(t => t.channelId === e);
    return null == s ? null : s
  }
  getNewMemberActionIconData(e) {
    var t;
    return null == e ? null : null !== (t = T[e]) && void 0 !== t ? t : null
  }
  hasActionIconChanged(e) {
    if (null == e) return !1;
    let t = r.default.getNewMemberAction(u, e);
    if (null == t) return !1;
    let s = T[e];
    return void 0 !== s && (null != s || null != t.icon && null == s)
  }
}
f.displayName = "GuildSettingsOnboardingHomeSettingsStore", f.persistKey = "GuildSettingsOnboardingHomeSettingsStore";
var A = new f(i.default, {
  GUILD_SETTINGS_INIT: I,
  GUILD_SETTINGS_SET_SECTION: I,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: I,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    c = n.cloneDeep(Object.assign({}, r.default.getSettings(u))), T = {}
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    E = !0
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: g,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: g,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: t
    } = e;
    return S(t.channelId, t)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: t
    } = e;
    N(t.channelId, t)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: t
    } = e;
    if (null == t) c.welcomeMessage = void 0;
    else {
      var s, a, n, l, i, r;
      c.welcomeMessage = {
        authorIds: null !== (l = null !== (n = t.authorIds) && void 0 !== n ? n : null === (s = c.welcomeMessage) || void 0 === s ? void 0 : s.authorIds) && void 0 !== l ? l : [],
        message: null !== (r = null !== (i = t.message) && void 0 !== i ? i : null === (a = c.welcomeMessage) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t,
      action: s
    } = e;
    return S(t, s)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var t;
    let {
      action: s
    } = e;
    c.newMemberActions = null !== (t = c.newMemberActions) && void 0 !== t ? t : [], c.newMemberActions = [...c.newMemberActions, s]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: t
    } = e;
    if (null == c.newMemberActions) return !1;
    c.newMemberActions = [...c.newMemberActions.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: t
    } = e;
    c.newMemberActions = t
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      resourceChannel: s
    } = e;
    N(t, s)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var t;
    let {
      resourceChannel: s
    } = e;
    c.resourceChannels = (null !== (t = c.resourceChannels) && void 0 !== t ? t : []).filter(e => e.channelId !== s.channelId), c.resourceChannels = [...c.resourceChannels, s]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: t
    } = e;
    if (null == c.resourceChannels) return !1;
    c.resourceChannels = [...c.resourceChannels.filter(e => e.channelId !== t)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: t
    } = e;
    c.resourceChannels = t
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var t;
    let {
      guildId: s,
      channelIds: a
    } = e;
    _[s] = [...null !== (t = _[s]) && void 0 !== t ? t : [], ...a]
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_ICON_DATA: function(e) {
    var t;
    let {
      channelId: s,
      iconData: a
    } = e, n = null === (t = c.newMemberActions) || void 0 === t ? void 0 : t.find(e => e.channelId === s);
    if (null == n) return !1;
    T[s] = a, n.icon = null
  }
})