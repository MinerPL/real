"use strict";
let C, n, l, t, F, i;
E.r(e), E.d(e, {
  default: function() {
    return G
  }
}), E("808653"), E("702976"), E("222007");
var u = E("917351"),
  a = E.n(u),
  o = E("866227"),
  r = E.n(o),
  D = E("446674"),
  d = E("872717"),
  s = E("913144"),
  A = E("233069"),
  c = E("813006"),
  _ = E("517763"),
  N = E("766274"),
  f = E("42203"),
  m = E("49111");
let T = m.FormStates.CLOSED,
  h = {},
  v = {},
  S = !1,
  I = !1,
  p = null,
  L = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

function g(B) {
  let e = f.default.getChannel(B.channelId);
  if (null == e) return U();
  T = m.FormStates.OPEN, t = l = e, p = "location" in B && null != B.location ? B.location : null, n = "subsection" in B ? B.subsection : null, null != t && (t = t.set("nsfw", t.isNSFW())), F = f.default.getChannel(t.parent_id), i = t.getGuildId(), h = {}, O({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: null != C ? C : m.ChannelSettingsSections.OVERVIEW,
    subsection: n
  })
}

function O(B) {
  C = B.section, n = B.subsection, null != t && C === m.ChannelSettingsSections.INSTANT_INVITES && (S = !0, d.default.get({
    url: m.Endpoints.INSTANT_INVITES(t.id),
    oldFormErrors: !0
  }).then(B => {
    S = !1, s.default.dispatch({
      type: "CHANNEL_SETTINGS_LOADED_INVITES",
      invites: B.body
    })
  }, () => S = !1))
}

function U() {
  I = !1, T = m.FormStates.CLOSED, C = null, t = l = null, F = null, v = {}
}
let y = a.debounce(() => {
  if (null == t || null == l) return !1;
  let B = t.toJS(),
    e = l.toJS(),
    E = L.every(E => B[E] === e[E]);
  E && t !== l && (t = l, R.emitChange())
}, 500);

function j(B) {
  return new _.default({
    code: B.code,
    temporary: B.temporary,
    revoked: B.revoked,
    inviter: null != B.inviter ? new N.default(B.inviter) : null,
    channel: (0, A.createChannelRecordFromInvite)(B.channel),
    guild: null != B.guild ? new c.default(B.guild) : null,
    uses: B.uses,
    maxUses: B.max_uses,
    maxAge: B.max_age,
    createdAt: r(B.created_at),
    type: B.type
  })
}
class M extends D.default.Store {
  initialize() {
    this.waitFor(f.default)
  }
  hasChanges() {
    return t !== l
  }
  isOpen() {
    return I
  }
  getSection() {
    return C
  }
  getInvites() {
    return {
      invites: v,
      loading: S
    }
  }
  showNotice() {
    return this.hasChanges()
  }
  getChannel() {
    return t
  }
  getFormState() {
    return T
  }
  getCategory() {
    return F
  }
  getProps() {
    return {
      submitting: T === m.FormStates.SUBMITTING,
      errors: h,
      channel: t,
      section: C,
      subsection: n,
      invites: v,
      selectedOverwriteId: i,
      hasChanges: this.hasChanges(),
      analyticsLocation: p
    }
  }
}
M.displayName = "ChannelSettingsStore";
let R = new M(s.default, {
  CHANNEL_SETTINGS_INIT: g,
  CHANNEL_SETTINGS_OPEN: function(B) {
    I = !0, g(B)
  },
  CHANNEL_SETTINGS_SUBMIT: function() {
    T = m.FormStates.SUBMITTING, h = {}
  },
  CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
    l = t, T = m.FormStates.OPEN
  },
  CHANNEL_SETTINGS_SUBMIT_FAILURE: function(B) {
    var e;
    T = m.FormStates.OPEN, h = Object.keys(null !== (e = B.errors) && void 0 !== e ? e : {}).reduce((e, E) => {
      let C = B.errors[E];
      return (0, u.isArray)(C) ? e[E] = C.join("\n") : e[E] = C, e
    }, {})
  },
  CHANNEL_SETTINGS_CLOSE: U,
  CHANNEL_SETTINGS_OVERWRITE_SELECT: function(B) {
    let {
      overwriteId: e
    } = B;
    i = e
  },
  CHANNEL_SETTINGS_UPDATE: function(B) {
    let {
      name: e,
      channelType: E,
      topic: C,
      bitrate: n,
      userLimit: l,
      nsfw: F,
      flags: i,
      rateLimitPerUser: u,
      defaultThreadRateLimitPerUser: a,
      autoArchiveDuration: o,
      locked: r,
      invitable: D,
      defaultAutoArchiveDuration: d,
      template: s,
      defaultReactionEmoji: A,
      rtcRegion: c,
      videoQualityMode: _,
      availableTags: N,
      defaultSortOrder: f,
      defaultForumLayout: m,
      iconEmoji: T,
      themeColor: h
    } = B;
    if (null == t) return !1;
    null != e && (t = t.set("name", e)), null != C && (t = t.set("topic", C)), null != n && (t = t.set("bitrate", n)), null != l && (t = t.set("userLimit", l)), null != F && (t = t.set("nsfw", F)), null != i && (t = t.set("flags", i)), null != u && (t = t.set("rateLimitPerUser", u)), null != a && (t = t.set("defaultThreadRateLimitPerUser", a)), null != o && (t = t.set("threadMetadata", {
      ...t.threadMetadata,
      autoArchiveDuration: o
    })), null != r && (t = t.set("threadMetadata", {
      ...t.threadMetadata,
      locked: r
    })), null != D && (t = t.set("threadMetadata", {
      ...t.threadMetadata,
      invitable: D
    })), null != d && (t = t.set("defaultAutoArchiveDuration", d)), null != s && (t = t.set("template", s)), null != E && (t = t.set("type", E)), void 0 !== c && (t = t.set("rtcRegion", c)), null != _ && (t = t.set("videoQualityMode", _)), void 0 !== A && (t = t.set("defaultReactionEmoji", A)), null != N && (t = t.set("availableTags", N)), null != f && (t = t.set("defaultSortOrder", f)), null != m && (t = t.set("defaultForumLayout", m)), void 0 !== T && (t = t.set("iconEmoji", T)), null != h && (t = t.set("themeColor", h)), y()
  },
  CHANNEL_SETTINGS_SET_SECTION: O,
  CHANNEL_SETTINGS_LOADED_INVITES: function(B) {
    v = {}, B.invites.forEach(B => {
      v[B.code] = j(B)
    })
  },
  CHANNEL_UPDATES: function(B) {
    let {
      channels: e
    } = B;
    if (null == t) return !1;
    let E = !1;
    for (let B of e)(function(B) {
      if (null == l || l.id !== B) return !1;
      if (l === t) {
        let e = f.default.getChannel(B);
        if (null == e) return !1;
        t = l = e, F = f.default.getChannel(t.parent_id)
      } else {
        let e = f.default.getChannel(B);
        if (null == e) return !1;
        l = e, null != t && (t = t.set("permissionOverwrites", l.permissionOverwrites), F = f.default.getChannel(t.parent_id))
      }
      return !0
    })(B.id) && null != t && (null != i && null == t.permissionOverwrites[i] && (i = t.getGuildId()), E = !0);
    return E
  },
  CHANNEL_DELETE: function(B) {
    let {
      channel: {
        id: e
      }
    } = B;
    if (null == t || t.id !== e) return !1;
    T = m.FormStates.CLOSED
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(B) {
    v = {
      ...v
    }, delete v[B.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(B) {
    v = {
      ...v,
      [B.invite.code]: j(B.invite)
    }
  }
});
var G = R