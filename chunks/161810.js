"use strict";
let a, s, i;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("424973"), n("222007");
var l = n("917351"),
  r = n.n(l),
  o = n("446674"),
  u = n("913144"),
  d = n("611183"),
  c = n("492114"),
  f = n("305961"),
  E = n("957255"),
  _ = n("45894"),
  h = n("49111");
let C = [],
  I = null,
  T = !1,
  S = h.FormStates.CLOSED,
  m = {},
  p = !1,
  A = null;

function g() {
  if (a = null != (s = c.default.getChannel()) ? f.default.getGuild(s.guild_id) : null, C = null != s && null != a && E.default.can(h.Permissions.MANAGE_WEBHOOKS, s) ? _.default.getWebhooksForChannel(a.id, s.id) : [], null != I) {
    let e = R(I.id);
    null != e && (I = e)
  }
  S = h.FormStates.OPEN, m = {}, p = !1
}
let N = r.debounce(() => {
  p && ((null == I || r.isEqual(I, R(I.id))) && (p = !1), !p && L.emitChange())
}, 500);

function R(e) {
  return C.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}
class O extends o.default.Store {
  initialize() {
    this.waitFor(c.default, f.default, _.default, E.default)
  }
  hasChanges() {
    return p
  }
  get webhooks() {
    return C
  }
  get editedWebhook() {
    return I
  }
  get formState() {
    return S
  }
  getWebhook(e) {
    return R(e)
  }
  showNotice() {
    return this.hasChanges()
  }
  getProps() {
    return {
      submitting: S === h.FormStates.SUBMITTING,
      webhooks: C,
      editedWebhook: I,
      section: i,
      sectionId: A,
      hasChanges: this.hasChanges(),
      isFetching: T,
      errors: m
    }
  }
}
O.displayName = "ChannelSettingsIntegrationsStore";
let L = new O(u.default, __OVERLAY__ ? {} : {
  INTEGRATION_SETTINGS_INIT: g,
  INTEGRATION_SETTINGS_SAVE_SUCCESS: g,
  CHANNEL_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    if (t !== h.ChannelSettingsSections.INTEGRATIONS) return !1;
    if (i = h.IntegrationSettingsSections.OVERVIEW, null == a) {
      let e = c.default.getChannel(),
        t = null == e ? void 0 : e.getGuildId();
      null != e && null != t && (d.default.fetchForChannel(t, e.id), T = !0), g()
    }
  },
  INTEGRATION_SETTINGS_SET_SECTION: function(e) {
    let {
      section: t,
      sectionId: n
    } = e;
    i = t, A = n
  },
  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
    let {
      webhookId: t
    } = e, n = R(t);
    if (null == n) return !1;
    I = n, m = {}, p = !1
  },
  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
    I = null, m = {}, p = !1
  },
  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
    let {
      settings: t
    } = e;
    if (null == I) return !1;
    I = {
      ...I
    }, null != t.name && I.name !== t.name && (I.name = t.name, p = !0), void 0 !== t.avatar && I.avatar !== t.avatar && (I.avatar = t.avatar, p = !0), null != t.channelId && I.channel_id !== t.channelId && (I.channel_id = t.channelId, p = !0), p && N()
  },
  CHANNEL_SETTINGS_CLOSE: function() {
    s = null, a = null, C = [], I = null, S = h.FormStates.CLOSED
  },
  WEBHOOKS_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      webhooks: i
    } = e;
    if (null == a || t !== a.id || null == s || n !== s.id || null == i || S === h.FormStates.SUBMITTING) return !1;
    T = !1;
    for (let e = C.length - 1; e >= 0; e--) {
      let t = C[e];
      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
      let a = i.find(e => {
        let {
          id: n
        } = e;
        if (n === t.id) return !0
      });
      if (null != a) {
        let n = {
          ...t,
          ...a
        };
        C[e] = n, !p && (null == I ? void 0 : I.id) === n.id && (I = n)
      } else(null == I ? void 0 : I.id) === t.id && (I = null), C.splice(e, 1)
    }
    for (let e of i) {
      let t = C.find(t => {
        let {
          id: n
        } = t;
        if (n === e.id) return !0
      });
      null == t && C.push(e)
    }
    C = [...C], N()
  },
  INTEGRATION_SETTINGS_SUBMITTING: function() {
    S = h.FormStates.SUBMITTING, m = {}
  },
  INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
    var t;
    if (S !== h.FormStates.SUBMITTING) return !1;
    S = h.FormStates.OPEN, m = null !== (t = e.errors) && void 0 !== t ? t : {}
  }
});
var v = L