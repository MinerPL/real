(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47498"], {
        685829: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                loadOnboardingPrompts: function() {
                    return f
                },
                fetchOnboardingPrompts: function() {
                    return N
                },
                maybeFetchOnboardingPrompts: function() {
                    return E
                },
                startOnboarding: function() {
                    return I
                }
            });
            var i = t("990746"),
                r = t("913144"),
                o = t("716241"),
                l = t("271938"),
                u = t("26989"),
                d = t("305961"),
                s = t("599110"),
                a = t("568734"),
                O = t("863636"),
                p = t("653138"),
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
                    } = e, i = (0, p.serverApiResponseToClientState)(t);
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
            async function E(n) {
                var e, t;
                let i = l.default.getId(),
                    r = (0, a.hasFlag)(null !== (t = null === (e = u.default.getMember(n, i)) || void 0 === e ? void 0 : e.flags) && void 0 !== t ? t : 0, c.GuildMemberFlags.COMPLETED_ONBOARDING),
                    o = d.default.getGuild(n);
                if (null == o || !o.hasFeature(_.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
                let s = O.default.shouldFetchPrompts(n),
                    p = O.default.getOnboardingPrompts(n);
                if (!s && p.length > 0) return p.every(n => !n.inOnboarding) ? (g(n), Promise.resolve()) : (!r && I(n), Promise.resolve());
                let f = await N(n);
                return Array.isArray(f) && f.every(n => !n.inOnboarding) ? (g(n), Promise.resolve()) : (!r && I(n), f)
            }

            function I(n) {
                r.default.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: n
                })
            }

            function g(n) {
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
        },
        653138: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                MAX_PROMPT_TITLE_LENGTH: function() {
                    return p
                },
                MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
                    return _
                },
                MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_PROMPTS: function() {
                    return f
                },
                MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
                    return N
                },
                DROPDOWN_MAX_NUM_OPTIONS: function() {
                    return E
                },
                MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
                    return I
                },
                MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
                    return g
                },
                NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
                    return P
                },
                ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
                    return m
                },
                GuildOnboardingTab: function() {
                    return l
                },
                OnboardingPromptType: function() {
                    return u
                },
                GuildOnboardingMode: function() {
                    return d
                },
                isDefaultPrompt: function() {
                    return v
                },
                getDefaultPrompt: function() {
                    return D
                },
                getEmptyPrompt: function() {
                    return S
                },
                clientPromptToServerPrompt: function() {
                    return T
                },
                serverApiResponseToClientState: function() {
                    return R
                },
                isEmojiEmpty: function() {
                    return b
                }
            });
            var i, r, o, l, u, d, s = t("376929"),
                a = t.n(s),
                O = t("782340");
            let p = 100,
                _ = 50,
                c = 100,
                f = 15,
                N = 12,
                E = 50,
                I = 4,
                g = 7,
                P = 5,
                m = 13;

            function v(n) {
                if (n.options.length > 0) return !1;
                let {
                    id: e,
                    ...t
                } = D(), {
                    id: i,
                    ...r
                } = n;
                return a(t, r)
            }

            function D() {
                return {
                    id: String(Date.now()),
                    title: O.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: u.MULTIPLE_CHOICE
                }
            }

            function S(n) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: n,
                    type: u.MULTIPLE_CHOICE
                }
            }

            function T(n) {
                return {
                    id: n.id,
                    options: n.options.map(n => {
                        var e, t, i;
                        return {
                            id: n.id,
                            channel_ids: n.channelIds,
                            role_ids: n.roleIds,
                            emoji: n.emoji,
                            emoji_id: null === (e = n.emoji) || void 0 === e ? void 0 : e.id,
                            emoji_name: null === (t = n.emoji) || void 0 === t ? void 0 : t.name,
                            emoji_animated: null === (i = n.emoji) || void 0 === i ? void 0 : i.animated,
                            title: n.title,
                            description: n.description
                        }
                    }),
                    title: n.title,
                    single_select: n.singleSelect,
                    disabled: n.disabled,
                    required: n.required,
                    in_onboarding: n.inOnboarding,
                    type: n.type
                }
            }

            function A(n) {
                var e;
                return {
                    id: n.id,
                    options: n.options.map(n => ({
                        id: n.id,
                        channelIds: n.channel_ids,
                        roleIds: n.role_ids,
                        emoji: n.emoji,
                        title: n.title,
                        description: null !== (e = n.description) && void 0 !== e ? e : ""
                    })),
                    title: n.title,
                    singleSelect: n.single_select,
                    disabled: n.disabled,
                    required: n.required,
                    inOnboarding: n.in_onboarding,
                    type: n.type
                }
            }

            function R(n) {
                var e, t, i;
                return {
                    prompts: n.prompts.map(A),
                    defaultChannelIds: n.default_channel_ids,
                    responses: null !== (e = n.responses) && void 0 !== e ? e : [],
                    mode: n.mode,
                    enabled: n.enabled,
                    onboardingPromptsSeen: null !== (t = n.onboarding_prompts_seen) && void 0 !== t ? t : {},
                    onboardingResponsesSeen: null !== (i = n.onboarding_responses_seen) && void 0 !== i ? i : {},
                    belowRequirements: n.below_requirements
                }
            }

            function b(n) {
                return null == n || null == n.id && null == n.name
            }(i = l || (l = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (r = u || (u = {}))[r.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", r[r.DROPDOWN = 1] = "DROPDOWN", (o = d || (d = {}))[o.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", o[o.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
        },
        863636: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return T
                }
            });
            var i = t("427964"),
                r = t.n(i),
                o = t("498225"),
                l = t("913144"),
                u = t("38654"),
                d = t("42203"),
                s = t("718517"),
                a = t("299039"),
                O = t("648747"),
                p = t("471706"),
                _ = t("653138");
            let c = {},
                f = {},
                N = {},
                E = !1;

            function I(n, e, t) {
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

            function g(n) {
                var e, t, i, r, o, l, u, d, s;
                let {
                    guildId: a,
                    updates: O
                } = n, p = null !== (o = null !== (r = O.onboardingPromptsSeen) && void 0 !== r ? r : null === (e = c[a]) || void 0 === e ? void 0 : e.onboardingPromptsSeen) && void 0 !== o ? o : {}, _ = null !== (u = null !== (l = O.onboardingResponsesSeen) && void 0 !== l ? l : null === (t = c[a]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== u ? u : {}, f = I(null !== (s = null !== (d = O.prompts) && void 0 !== d ? d : null === (i = c[a]) || void 0 === i ? void 0 : i.prompts) && void 0 !== s ? s : [], p, _);
                c[a] = {
                    ...c[a],
                    ...O,
                    prompts: f
                }
            }

            function P(n, e) {
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
            let m = [],
                v = [],
                D = [];
            class S extends o.default.Store {
                initialize() {
                    this.waitFor(d.default, p.default, u.default)
                }
                getOnboardingPromptsForOnboarding(n) {
                    var e, t;
                    return null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.onboardingPrompts) && void 0 !== t ? t : m
                }
                getOnboardingPrompts(n) {
                    var e, t;
                    return null !== (t = null === (e = c[n]) || void 0 === e ? void 0 : e.prompts) && void 0 !== t ? t : m
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
                    return u.default.isFullServerPreview(n) ? null !== (e = null == i ? void 0 : i.prompts) && void 0 !== e ? e : m : null != i && i.enabled ? null !== (t = i.prompts) && void 0 !== t ? t : m : m
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
                    return E
                }
                shouldFetchPrompts(n) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.Millis.HOUR;
                    if (E) return !1;
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
            var T = new S(l.default, {
                CONNECTION_OPEN: function() {
                    E = !1, c = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    E = !0
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
                    E = !1;
                    let a = p.default.getOnboardingStatus(e) === p.GuildOnboardingStatus.READY,
                        _ = I(t, l, u);
                    c[e] = {
                        enabled: r,
                        mode: d,
                        belowRequirements: s,
                        prompts: _,
                        onboardingPrompts: _.filter(n => n.inOnboarding),
                        defaultChannelIds: i.filter(n => (0, O.canChannelBeDefault)(e, n)),
                        responses: a ? [] : o,
                        onboardingPromptsSeen: l,
                        onboardingResponsesSeen: u
                    }, !a && P(e, o), N[e] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    E = !1
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
                    P(e, t);
                    let o = c[e];
                    if (null == o) return !1;
                    let l = I(o.prompts, i, r);
                    c[e] = {
                        ...o,
                        prompts: l,
                        onboardingPrompts: l.filter(n => n.inOnboarding),
                        onboardingPromptsSeen: i,
                        onboardingResponsesSeen: r
                    }
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: g,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: g,
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
        }
    }
]);