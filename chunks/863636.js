"use strict";
t.r(e), t.d(e, {
  default: function() {
    return A
  }
}), t("424973"), t("834022");
var i = t("917351"),
  r = t.n(i),
  o = t("446674"),
  l = t("913144"),
  u = t("38654"),
  d = t("42203"),
  s = t("718517"),
  a = t("299039"),
  p = t("648747"),
  O = t("471706"),
  _ = t("653138");
let c = {},
  f = {},
  N = {},
  g = !1;

function E(n, e, t) {
  return n.map(n => (function(n, e, t) {
    let i = !1,
      r = [];
    for (let e = 0; e < n.options.length; e++) {
      let o = n.options[e],
        l = null == t[o.id];
      l && (i = !0), r.push({
        ...o,
        isUnseen: l
      })
    }
    return {
      ...n,
      options: r,
      hasNewAnswers: i,
      isNew: null == e[n.id]
    }
  })(n, e, t))
}

function P(n) {
  var e, t, i, r, o, l, u, d, s;
  let {
    guildId: a,
    updates: p
  } = n, O = null !== (o = null !== (r = p.onboardingPromptsSeen) && void 0 !== r ? r : null === (e = c[a]) || void 0 === e ? void 0 : e.onboardingPromptsSeen) && void 0 !== o ? o : {}, _ = null !== (u = null !== (l = p.onboardingResponsesSeen) && void 0 !== l ? l : null === (t = c[a]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== u ? u : {}, f = E(null !== (s = null !== (d = p.prompts) && void 0 !== d ? d : null === (i = c[a]) || void 0 === i ? void 0 : i.prompts) && void 0 !== s ? s : [], O, _);
  c[a] = {
    ...c[a],
    ...p,
    prompts: f
  }
}

function m(n, e) {
  if (null == f[n]) return;
  let t = {};
  Object.keys(f[n]).forEach(i => {
    !e.includes(i) && f[n][i] ? t[i] = !0 : e.includes(i) && !1 === f[n][i] && (t[i] = !1)
  }), f[n] = t;
  let i = e.filter(n => null == t[n] || !0 === t[n]);
  Object.keys(t).forEach(n => {
    !0 === t[n] && !e.includes(n) && i.push(n)
  }), c[n] = {
    ...c[n],
    responses: i
  }
}
let I = [],
  v = [],
  D = [];
class S extends o.default.Store {
  initialize() {
    this.waitFor(d.default, O.default, u.default)
  }
  getOnboardingPromptsForOnboarding(n) {
    var e, t;
    return null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.onboardingPrompts) && void 0 !== t ? t : I
  }
  getOnboardingPrompts(n) {
    var e, t;
    return null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.prompts) && void 0 !== t ? t : I
  }
  getOnboardingResponses(n) {
    var e, t, i;
    return u.default.isFullServerPreview(n) ? Array.from(null !== (t = u.default.getOnboardingResponses(n)) && void 0 !== t ? t : v) : null !== (i = null === (e = c[n]) || void 0 === e ? void 0 : e.responses) && void 0 !== i ? i : v
  }
  getSelectedOptions(n) {
    let e = this.getOnboardingResponses(n),
      t = this.getOnboardingPrompts(n).map(n => n.options).flat();
    return t.filter(n => e.includes(n.id))
  }
  getOnboardingResponsesForPrompt(n, e) {
    let t = c[n];
    if (null == t) return v;
    let i = t.prompts.find(n => n.id === e);
    return null == i ? v : r.intersection(i.options.map(n => n.id), this.getOnboardingResponses(n))
  }
  getEnabledOnboardingPrompts(n) {
    var e, t;
    let i = c[n];
    return u.default.isFullServerPreview(n) ? null !== (e = null == i ? void 0 : i.prompts) && void 0 !== e ? e : I : null != i && i.enabled ? null !== (t = i.prompts) && void 0 !== t ? t : I : I
  }
  getDefaultChannelIds(n) {
    var e, t;
    return null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.defaultChannelIds) && void 0 !== t ? t : D
  }
  getEnabled(n) {
    var e, t;
    return u.default.isFullServerPreview(n) ? null != c[n] : null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.enabled) && void 0 !== t && t
  }
  getOnboardingPrompt(n) {
    return Object.values(c).map(n => n.prompts).flat().find(e => e.id === n)
  }
  isLoading() {
    return g
  }
  shouldFetchPrompts(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.Millis.HOUR;
    if (g) return !1;
    let t = N[n];
    return null == t || Date.now() - t > e
  }
  getPendingResponseOptions(n) {
    return f[n]
  }
  ackIdForGuild(n) {
    let e = this.getEnabledOnboardingPrompts(n),
      t = "0";
    return e.forEach(n => {
      n.options.forEach(n => {
        a.default.compare(n.id, t) > 0 && (t = n.id)
      }), a.default.compare(n.id, t) > 0 && (t = n.id)
    }), t
  }
  lastFetchedAt(n) {
    return N[n]
  }
  isAdvancedMode(n) {
    var e;
    return null != n && (null === (e = c[n]) || void 0 === e ? void 0 : e.mode) === _.GuildOnboardingMode.ONBOARDING_ADVANCED
  }
}
S.displayName = "GuildOnboardingPromptsStore";
var A = new S(l.default, {
  CONNECTION_OPEN: function() {
    g = !1, c = {}
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
    g = !0
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(n) {
    let {
      guildId: e,
      prompts: t,
      defaultChannelIds: i,
      enabled: r,
      responses: o,
      onboardingPromptsSeen: l,
      onboardingResponsesSeen: u,
      mode: d,
      belowRequirements: s
    } = n;
    g = !1;
    let a = O.default.getOnboardingStatus(e) === O.GuildOnboardingStatus.READY,
      _ = E(t, l, u);
    c[e] = {
      enabled: r,
      mode: d,
      belowRequirements: s,
      prompts: _,
      onboardingPrompts: _.filter(n => n.inOnboarding),
      defaultChannelIds: i.filter(n => (0, p.canChannelBeDefault)(e, n)),
      responses: a ? [] : o,
      onboardingPromptsSeen: l,
      onboardingResponsesSeen: u
    }, !a && m(e, o), N[e] = Date.now()
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
    g = !1
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(n) {
    let {
      guildId: e,
      optionId: t,
      selected: i,
      removedOptionIds: o
    } = n;
    return !!u.default.isFullServerPreview(e) || null != c[e] && (null != o && o.length > 0 && r.pullAll(c[e].responses, o), i ? c[e].responses.push(t) : r.pull(c[e].responses, t), null == f[e] && (f[e] = {}), f[e][t] = i, null != o && o.forEach(n => f[e][n] = !1), f[e] = {
      ...f[e]
    }, !0)
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(n) {
    let {
      guildId: e,
      options: t,
      prompts_seen: i,
      options_seen: r
    } = n;
    m(e, t);
    let o = c[e];
    if (null == o) return !1;
    let l = E(o.prompts, i, r);
    c[e] = {
      ...o,
      prompts: l,
      onboardingPrompts: l.filter(n => n.inOnboarding),
      onboardingPromptsSeen: i,
      onboardingResponsesSeen: r
    }
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: P,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: P,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(n) {
    let {
      guildId: e,
      channelIds: t
    } = n;
    c[e] = {
      ...c[e],
      defaultChannelIds: t
    }
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(n) {
    let {
      guildId: e,
      mode: t
    } = n, i = c[e];
    null != i && (i.mode = t)
  }
})