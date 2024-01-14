"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("834022"), n("222007"), n("702976");
var a = n("917351"),
  l = n.n(a),
  i = n("249654"),
  d = n("872717"),
  s = n("913144"),
  r = n("267363"),
  o = n("716241"),
  u = n("412355"),
  f = n("479756"),
  g = n("38654"),
  c = n("629220"),
  _ = n("42203"),
  p = n("26989"),
  E = n("697218"),
  N = n("599110"),
  S = n("568734"),
  h = n("449008"),
  O = n("286235"),
  C = n("863636"),
  I = n("380710"),
  A = n("843323"),
  G = n("49111"),
  T = n("657944"),
  D = n("133335");

function L(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (g.default.isFullServerPreview(e)) return;
  let n = t ? C.default.getOnboardingPromptsForOnboarding(e) : C.default.getOnboardingPrompts(e),
    a = C.default.getOnboardingResponses(e),
    l = n.map(e => e.options.filter(e => a.includes(e.id))).flat(),
    i = {},
    r = {};
  return (n.forEach(e => {
    i[e.id] = Date.now(), e.options.forEach(e => r[e.id] = Date.now())
  }), t) ? d.default.post({
    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: l.map(e => e.id),
      onboarding_prompts_seen: i,
      onboarding_responses_seen: r
    }
  }).then(t => {
    null != t.body && s.default.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => O.default.captureException(e)) : d.default.put({
    url: G.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
    body: {
      onboarding_responses: l.map(e => e.id),
      onboarding_prompts_seen: i,
      onboarding_responses_seen: r
    }
  }).then(t => {
    null != t.body && s.default.dispatch({
      type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
      guildId: e,
      options: t.body.onboarding_responses,
      prompts_seen: t.body.onboarding_prompts_seen,
      options_seen: t.body.onboarding_responses_seen
    })
  }).catch(e => O.default.captureException(e))
}
var U = {
  selectOption(e, t, n, a) {
    let i = C.default.getOnboardingPrompt(t);
    if (null == i) return;
    let d = i.singleSelect ? l.without(l.map(i.options, "id"), n) : [];
    s.default.dispatch({
      type: "GUILD_ONBOARDING_SELECT_OPTION",
      guildId: e,
      promptId: t,
      optionId: n,
      selected: a,
      removedOptionIds: d
    })
  },
  updateOnboardingResponses: l.debounce(L, 1e3),
  updateRolesLocal: function(e, t, n) {
    var a, i;
    let d = null !== (i = null === (a = p.default.getSelfMember(e)) || void 0 === a ? void 0 : a.roles) && void 0 !== i ? i : [];
    if (g.default.isViewingRoles(e)) {
      (0, f.updateImpersonatedRoles)(e, l.difference(l.union(d, t), n));
      return
    }(t.length > 0 || n.length > 0) && s.default.dispatch({
      type: "GUILD_MEMBER_UPDATE_LOCAL",
      guildId: e,
      roles: l.difference(l.union(d, t), n),
      addedRoleIds: t,
      removedRoleIds: n
    })
  },
  completeOnboarding(e, t) {
    let n = t.length > 0 ? t[t.length - 1] : null,
      a = C.default.getSelectedOptions(e),
      l = (0, I.getSelectedRoleIds)(a),
      d = (0, I.getSelectedChannelIds)(a),
      s = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [],
      [u, c] = (0, I.getChannelCoverageForOnboarding)(e, t, s),
      O = [...d, ...s],
      U = O.map(e => _.default.getChannel(e)).filter(h.isNotNullish),
      v = (0, A.getFlattenedChannels)(e, new Set(O), U, !0).length,
      b = null == n ? [] : n.options.map(e => e.id);
    if (N.default.track(G.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
        ...(0, o.collectGuildAnalyticsMetadata)(e),
        step: t.length - 1,
        options_selected: null == n ? 0 : a.filter(e => b.includes(e.id)).length,
        skipped: b.length > 0,
        back: !1,
        in_onboarding: !0,
        is_final_step: !0,
        roles_granted: l.size,
        channels_granted: v,
        guild_onboarding_covered_channel_ids: u.map(e => e.id),
        guild_onboarding_uncovered_channel_ids: c.map(e => e.id)
      }), (0, r.ackGuildFeature)(e, D.ReadStateTypes.GUILD_ONBOARDING_QUESTION, i.default.fromTimestamp(Date.now())), L(e, !0), g.default.isFullServerPreview(e)) {
      (0, f.updateImpersonatedChannels)(e, O, []), (0, f.updateImpersonatedData)(e, {
        optInEnabled: !0
      }), (0, f.updateImpersonatedRoles)(e, Array.from(l));
      let t = E.default.getCurrentUser();
      if (null != t) {
        var F, y;
        let n = null !== (y = null === (F = p.default.getMember(e, t.id)) || void 0 === F ? void 0 : F.flags) && void 0 !== y ? y : 0;
        (0, f.updateImpersonatedData)(e, {
          memberOptions: {
            flags: (0, S.setFlag)(n, T.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
          }
        })
      }
    }
  },
  onboardExistingMember(e, t) {
    let n = new Set(t),
      a = C.default.getEnabled(e) ? C.default.getDefaultChannelIds(e) : [];
    a.forEach(e => n.add(e)), n.size > 0 && (0, c.bulkOptInChannels)(e, Array.from(n), !0, {
      page: G.AnalyticsPages.GUILD_ONBOARDING
    })
  },
  finishOnboarding(e) {
    s.default.dispatch({
      type: "GUILD_ONBOARDING_COMPLETE",
      guildId: e
    })
  },
  setUserOnboardingStep(e, t) {
    s.default.dispatch({
      type: "GUILD_ONBOARDING_SET_STEP",
      guildId: e,
      step: t
    })
  },
  async resetOnboarding(e) {
    let t = E.default.getCurrentUser();
    if (null != t) {
      var n, a;
      let l = null !== (a = null === (n = p.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== a ? a : 0;
      await (0, u.updateGuildSelfMember)(e, {
        flags: (0, S.setFlag)(l, T.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
      })
    }
  }
}