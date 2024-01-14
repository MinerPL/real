"use strict";
let i, l, r, d, s, u, a, o;
n.r(t), n.d(t, {
  default: function() {
    return el
  }
}), n("222007"), n("808653");
var E = n("917351"),
  _ = n.n(E),
  S = n("866227"),
  I = n.n(S),
  c = n("446674"),
  T = n("872717"),
  G = n("95410"),
  f = n("913144"),
  p = n("851387"),
  D = n("233069"),
  A = n("813006"),
  L = n("517763"),
  N = n("766274"),
  U = n("305961"),
  R = n("697218"),
  g = n("468349"),
  C = n("970700"),
  h = n("49111"),
  m = n("447621"),
  O = n("69741");
let y = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
  b = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
  M = !1,
  v = h.FormStates.CLOSED,
  F = {},
  P = !1,
  Y = null,
  B = null,
  V = 0,
  k = h.MFALevels.NONE,
  w = null,
  x = {
    primaryCategoryId: m.DEFAULT_DISCOVERY_CATEGORY_ID,
    secondaryCategoryIds: [],
    keywords: [],
    emojiDiscoverabilityEnabled: m.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
    partnerActionedTimestamp: null,
    partnerApplicationTimestamp: null,
    isPublished: !1,
    reasonsToJoin: [],
    socialLinks: [],
    about: ""
  },
  H = !1,
  W = x,
  K = x,
  J = null,
  Q = 0,
  j = null,
  q = null,
  X = null;

function z(e) {
  if (null == s || null == d || d.id !== e) return !1;
  let t = U.default.getGuild(e);
  return null != t && (d === s ? s = d = t : (d = t, s = s.set("roles", d.roles)), !0)
}

function Z(e) {
  var t;
  let {
    guildId: n,
    section: l,
    subsection: r,
    location: a
  } = e, E = U.default.getGuild(n);
  if (null == E) return $();
  d = s = E, v = h.FormStates.OPEN, F = {}, u = n, k = s.mfaLevel, K = W, o = null, w = a, ee({
    section: null !== (t = null != l ? l : i) && void 0 !== t ? t : h.GuildSettingsSections.OVERVIEW,
    subsection: null != r ? r : null
  })
}

function $() {
  M = !1, v = h.FormStates.CLOSED, d = s = null, P = !1, Y = null, B = null, V = 0, J = null, q = null, X = null, i = null, l = null, r = null, k = h.MFALevels.NONE, a = void 0
}

function ee(e) {
  if (null == s) return !1;
  let t = i;
  if (i = e.section, l = e.subsection, i === h.GuildSettingsSections.BANS) {
    let {
      enabled: e
    } = g.GuildSettingsBansNewExperiment.getCurrentConfig({
      guildId: s.id,
      location: "7f0c91_1"
    });
    !e && p.default.fetchGuildBans(s.id)
  } else if (i === h.GuildSettingsSections.INSTANT_INVITES) T.default.get({
    url: h.Endpoints.GUILD_INSTANT_INVITES(s.id),
    oldFormErrors: !0
  }).then(e => {
    f.default.dispatch({
      type: "GUILD_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  });
  else if (i === h.GuildSettingsSections.WIDGET) T.default.get({
    url: h.Endpoints.GUILD_WIDGET(s.id),
    oldFormErrors: !0
  }).then(e => {
    f.default.dispatch({
      type: "GUILD_SETTINGS_SET_WIDGET",
      enabled: e.body.enabled,
      channelId: e.body.channel_id
    })
  });
  else if (i === h.GuildSettingsSections.INTEGRATIONS || i === h.GuildSettingsSections.ROLES) {
    if (u = null, t !== e.section) return en(e)
  } else i === h.GuildSettingsSections.MEMBERS ? u = s.id : i === h.GuildSettingsSections.VANITY_URL ? T.default.get({
    url: h.Endpoints.GUILD_VANITY_URL(s.id),
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        code: t,
        uses: n,
        error: i
      }
    } = e;
    f.default.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n,
      error: i
    })
  }) : i === h.GuildSettingsSections.SAFETY && f.default.dispatch({
    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
    subsection: null == l ? h.GuildSettingsSubsections.SAFETY_OVERVIEW : l
  })
}

function et(e) {
  var t;
  return new L.default({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new N.default(e.inviter) : null,
    channel: (0, D.createChannelRecordFromInvite)(e.channel),
    guild: null != e.guild ? new A.default(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: I(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
  })
}

function en(e) {
  if (null == s || v !== h.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id) return !1;
  (0, C.fetchGuildIntegrationsApplications)(s.id), (0, C.fetchGuildIntegrationsCommands)(s.id)
}
class ei extends c.default.Store {
  initialize() {
    this.waitFor(U.default, R.default)
  }
  getMetadata() {
    return K
  }
  hasChanges() {
    return !_.isEqual(s, d) || !_.isEqual(K, W)
  }
  isOpen() {
    return M
  }
  getSavedRouteState() {
    return a
  }
  getSection() {
    return i
  }
  showNotice() {
    return this.hasChanges()
  }
  getGuildId() {
    return null != s ? s.id : null
  }
  showPublicSuccessModal() {
    return !G.default.get(O.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
  }
  getGuild() {
    return s
  }
  isSubmitting() {
    return v === h.FormStates.SUBMITTING
  }
  isGuildMetadataLoaded() {
    return H
  }
  getErrors() {
    return F
  }
  getSelectedRoleId() {
    return u
  }
  getSlug() {
    return o
  }
  getBans() {
    return [J, Q]
  }
  getProps() {
    return {
      submitting: this.isSubmitting(),
      integrations: X,
      section: i,
      subsection: l,
      errors: F,
      guild: s,
      bans: J,
      bansVersion: Q,
      invites: q,
      selectedRoleId: u,
      embedEnabled: P,
      embedChannelId: Y,
      mfaLevel: k,
      searchQuery: r,
      vanityURLCode: B,
      vanityURLUses: V,
      originalGuild: d,
      hasChanges: this.hasChanges(),
      guildMetadata: K,
      analyticsLocation: w,
      isGuildMetadataLoaded: H
    }
  }
}
ei.displayName = "GuildSettingsStore";
var el = new ei(f.default, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_INIT: Z,
  GUILD_SETTINGS_OPEN: function(e) {
    M = !0, Z(e)
  },
  GUILD_SETTINGS_CLOSE: $,
  GUILD_SETTINGS_UPDATE: function(e) {
    if (null == s) return !1;
    y.forEach(t => {
      null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]))
    }), ! function() {
      if (null == s) return;
      let e = s.toJS(),
        t = d.toJS(),
        n = y.some(n => e[n] !== t[n]);
      !n && (s = d)
    }()
  },
  GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
    let {
      guildId: t
    } = e;
    F = {};
    let n = U.default.getGuild(t);
    null != n && (d = s = n)
  },
  GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
    let {
      state: t
    } = e;
    return a = t, !1
  },
  GUILD_SETTINGS_SUBMIT: function() {
    v = h.FormStates.SUBMITTING, F = {}
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
    v = h.FormStates.OPEN
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    v = h.FormStates.OPEN, i = null != i ? i : h.GuildSettingsSections.OVERVIEW, l = null, F = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  GUILD_SETTINGS_SET_SECTION: ee,
  GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
    r = e.searchQuery
  },
  GUILD_SETTINGS_LOADED_BANS: function(e) {
    J = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), Q++
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t,
      guildId: n
    } = e;
    (j !== n || null == J) && (j = n, J = new Map), J = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), J), Q++
  },
  GUILD_SETTINGS_LOADED_INVITES: function(e) {
    q = e.invites.reduce((e, t) => (e[t.code] = et(t), e), {})
  },
  GUILD_SETTINGS_SET_WIDGET: function(e) {
    P = e.enabled, Y = e.channelId
  },
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t;
    B = null !== (t = e.code) && void 0 !== t ? t : null, V = e.uses
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
    let {
      level: t
    } = e;
    k = t
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      roleId: t
    } = e;
    u = null != t ? t : null
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    X = e.integrations
  },
  GUILD_BAN_ADD: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    if (null == J || null == s || s.id !== n) return !1;
    J.set(t.id, {
      user: t,
      reason: null
    }), Q++
  },
  GUILD_BAN_REMOVE: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    if (null == J || null == s || s.id !== n) return !1;
    J.delete(t.id), Q++
  },
  GUILD_ROLE_CREATE: function(e) {
    let {
      guildId: t
    } = e;
    if (!z(t)) return !1
  },
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    if (!z(t)) return !1
  },
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e;
    if (!z(t)) return !1;
    u === n && (u = null)
  },
  GUILD_UPDATE: function(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
      let e = U.default.getGuild(s.id);
      if (null == e) return !1;
      let t = d = e,
        n = s.toJS();
      y.forEach(e => {
        if (!b.has(e)) {
          if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || n[e] !== O.CREATE_NEW_CHANNEL_VALUE) {
            if ("features" === e) {
              t.set(e, new Set(n[e]));
              return
            }
            t = t.set(e, n[e])
          }
        }
      }), s = t
    }
  },
  GUILD_DELETE: function(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    $()
  },
  USER_CONNECTIONS_UPDATE: en,
  GUILD_INTEGRATIONS_UPDATE: en,
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    q = {
      ...q
    }, delete q[e.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    q = {
      ...q,
      [e.invite.code]: et(e.invite)
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
    var t, n, i, l, r, d, u, a, o, E;
    let {
      guildId: _,
      metadata: S
    } = e;
    null != s && _ === s.id && (!1 === H && (H = !0), K = W = {
      primaryCategoryId: null !== (t = S.primaryCategoryId) && void 0 !== t ? t : m.DEFAULT_DISCOVERY_CATEGORY_ID,
      secondaryCategoryIds: null !== (n = S.secondaryCategoryIds) && void 0 !== n ? n : [],
      keywords: null !== (i = S.keywords) && void 0 !== i ? i : [],
      emojiDiscoverabilityEnabled: null !== (l = S.emojiDiscoverabilityEnabled) && void 0 !== l ? l : m.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
      partnerActionedTimestamp: null !== (r = S.partnerActionedTimestamp) && void 0 !== r ? r : null,
      partnerApplicationTimestamp: null !== (d = S.partnerApplicationTimestamp) && void 0 !== d ? d : null,
      isPublished: null !== (u = S.isPublished) && void 0 !== u && u,
      reasonsToJoin: null !== (a = S.reasonsToJoin) && void 0 !== a ? a : [],
      socialLinks: null !== (o = S.socialLinks) && void 0 !== o ? o : [],
      about: null !== (E = S.about) && void 0 !== E ? E : ""
    }, F = {})
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
    W = K = x
  },
  GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
    let {
      guildId: t,
      categoryId: n
    } = e;
    null != s && t === s.id && (K = {
      ...K,
      secondaryCategoryIds: [...K.secondaryCategoryIds, n]
    }, W = {
      ...W,
      secondaryCategoryIds: [...W.secondaryCategoryIds, n]
    })
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
    let t, {
      guildId: n,
      categoryId: i
    } = e;
    if (null == s || n !== s.id) return;
    let l = K.secondaryCategoryIds.indexOf(i); - 1 !== l && ((t = [...K.secondaryCategoryIds]).splice(l, 1), K = {
      ...K,
      secondaryCategoryIds: t
    }), -1 !== (l = W.secondaryCategoryIds.indexOf(i)) && ((t = [...W.secondaryCategoryIds]).splice(l, 1), W = {
      ...W,
      secondaryCategoryIds: t
    })
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
    let {
      guildId: t,
      errors: n
    } = e;
    null != s && t === s.id && (F = null != n ? n : {})
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
    let {
      guildId: t,
      primaryCategoryId: n,
      keywords: i,
      emojiDiscoverabilityEnabled: l,
      isPublished: r,
      reasonsToJoin: d,
      socialLinks: u,
      about: a
    } = e;
    null != s && t === s.id && (K = {
      ...K,
      primaryCategoryId: null != n ? n : K.primaryCategoryId,
      keywords: null != i ? i : K.keywords,
      emojiDiscoverabilityEnabled: null != l ? l : K.emojiDiscoverabilityEnabled,
      isPublished: null != r ? r : K.isPublished,
      reasonsToJoin: null != d ? d : K.reasonsToJoin,
      socialLinks: null != u ? u : K.socialLinks,
      about: null != a ? a : K.about
    })
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
    let {
      guildId: t,
      errors: n
    } = e;
    null != s && t === s.id && (F = null != n ? n : {})
  },
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
    let {
      slug: t
    } = e;
    o = t
  },
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
    let {} = e;
    o = null
  }
})