            "use strict";
            l.r(t), l.d(t, {
                loadOnboardingPrompts: function() {
                    return A
                },
                fetchOnboardingPrompts: function() {
                    return g
                },
                maybeFetchOnboardingPrompts: function() {
                    return E
                },
                startOnboarding: function() {
                    return T
                }
            }), l("702976");
            var a = l("872717"),
                n = l("913144"),
                s = l("716241"),
                r = l("271938"),
                i = l("26989"),
                o = l("305961"),
                u = l("599110"),
                d = l("568734"),
                c = l("863636"),
                f = l("653138"),
                S = l("49111"),
                h = l("657944");

            function A(e) {
                u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    has_new_prompts: !1,
                    number_of_prompts: 0
                })
            }

            function g(e) {
                return n.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                }), a.default.get({
                    url: S.Endpoints.GUILD_ONBOARDING(e)
                }).then(t => {
                    let {
                        body: l
                    } = t, a = (0, f.serverApiResponseToClientState)(l);
                    return n.default.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e,
                        ...a
                    }).then(() => a.prompts)
                }, t => (n.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                    guildId: e
                }), t))
            }
            async function E(e) {
                var t, l;
                let a = r.default.getId(),
                    n = (0, d.hasFlag)(null !== (l = null === (t = i.default.getMember(e, a)) || void 0 === t ? void 0 : t.flags) && void 0 !== l ? l : 0, h.GuildMemberFlags.COMPLETED_ONBOARDING),
                    s = o.default.getGuild(e);
                if (null == s || !s.hasFeature(S.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
                let u = c.default.shouldFetchPrompts(e),
                    f = c.default.getOnboardingPrompts(e);
                if (!u && f.length > 0) return f.every(e => !e.inOnboarding) ? (_(e), Promise.resolve()) : (!n && T(e), Promise.resolve());
                let A = await g(e);
                return Array.isArray(A) && A.every(e => !e.inOnboarding) ? (_(e), Promise.resolve()) : (!n && T(e), A)
            }

            function T(e) {
                n.default.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function _(e) {
                u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    required: !0
                }), u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                })
            }