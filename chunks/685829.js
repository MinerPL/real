"use strict";
t.r(e), t.d(e, {
  loadOnboardingPrompts: function() {
    return f
  },
  fetchOnboardingPrompts: function() {
    return N
  },
  maybeFetchOnboardingPrompts: function() {
    return g
  },
  startOnboarding: function() {
    return E
  }
}), t("702976");
var i = t("872717"),
  r = t("913144"),
  o = t("716241"),
  l = t("271938"),
  u = t("26989"),
  d = t("305961"),
  s = t("599110"),
  a = t("568734"),
  p = t("863636"),
  O = t("653138"),
  _ = t("49111"),
  c = t("657944");

function f(n) {
  s.default.track(_.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
    ...(0, o.collectGuildAnalyticsMetadata)(n),
    has_new_prompts: !1,
    number_of_prompts: 0
  })
}

function N(n) {
  return r.default.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
    guildId: n
  }), i.default.get({
    url: _.Endpoints.GUILD_ONBOARDING(n)
  }).then(e => {
    let {
      body: t
    } = e, i = (0, O.serverApiResponseToClientState)(t);
    return r.default.dispatch({
      type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
      guildId: n,
      ...i
    }).then(() => i.prompts)
  }, e => (r.default.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
    guildId: n
  }), e))
}
async function g(n) {
  var e, t;
  let i = l.default.getId(),
    r = (0, a.hasFlag)(null !== (t = null === (e = u.default.getMember(n, i)) || void 0 === e ? void 0 : e.flags) && void 0 !== t ? t : 0, c.GuildMemberFlags.COMPLETED_ONBOARDING),
    o = d.default.getGuild(n);
  if (null == o || !o.hasFeature(_.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
  let s = p.default.shouldFetchPrompts(n),
    O = p.default.getOnboardingPrompts(n);
  if (!s && O.length > 0) return O.every(n => !n.inOnboarding) ? (P(n), Promise.resolve()) : (!r && E(n), Promise.resolve());
  let f = await N(n);
  return Array.isArray(f) && f.every(n => !n.inOnboarding) ? (P(n), Promise.resolve()) : (!r && E(n), f)
}

function E(n) {
  r.default.dispatch({
    type: "GUILD_ONBOARDING_START",
    guildId: n
  })
}

function P(n) {
  s.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
    ...(0, o.collectGuildAnalyticsMetadata)(n),
    step: -2,
    required: !0
  }), s.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
    ...(0, o.collectGuildAnalyticsMetadata)(n),
    step: -2,
    skipped: !1,
    is_final_step: !0,
    in_onboarding: !0
  })
}