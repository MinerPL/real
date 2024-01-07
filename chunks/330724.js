            "use strict";
            n.r(t), n.d(t, {
                resetGuildOnboardingPrompts: function() {
                    return E
                },
                editGuildOnboardingPrompt: function() {
                    return f
                },
                deleteGuildOnboardingPrompt: function() {
                    return O
                },
                editGuildOnboardingPrompts: function() {
                    return S
                },
                saveGuildOnboardingPrompts: function() {
                    return m
                },
                enableGuildOnboarding: function() {
                    return T
                },
                editOnboarding: function() {
                    return D
                },
                validateOptionRoles: function() {
                    return A
                }
            }), n("70102"), n("222007");
            var a = n("872717"),
                l = n("913144"),
                s = n("404118"),
                i = n("448993"),
                r = n("385976"),
                d = n("837648"),
                o = n("42203"),
                u = n("449008"),
                c = n("136278"),
                N = n("49111"),
                _ = n("653138"),
                I = n("782340");

            function E() {
                l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
                })
            }

            function f(e, t, n) {
                S(e, c.default.editedOnboardingPrompts.map(e => e.id === t ? {
                    ...e,
                    ...n
                } : e))
            }

            function O(e, t) {
                S(e, c.default.editedOnboardingPrompts.filter(e => e.id !== t))
            }

            function S(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
                        prompts: t
                    }), n) {
                    let n = t.map(n => g(e, t, n));
                    l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
                        errors: n
                    })
                }
            }
            async function m(e, t) {
                let {
                    dropdownsAllowed: n
                } = (0, d.getOnboardingDropdownExperiment)(e.id);
                if (!c.default.hasChanges()) return;
                let a = c.default.editedOnboardingPrompts;
                null != t && t.ignoreDefaultPrompt && 1 === a.length && (0, _.isDefaultPrompt)(a[0]) && (a = []);
                let N = a.map(t => {
                        let a = t.options.map(t => {
                            var n;
                            let a = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != e.getRole(t)),
                                l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.default.getChannel(e)),
                                s = (null == t ? void 0 : null === (n = t.emoji) || void 0 === n ? void 0 : n.id) == null || null == r.default.getCustomEmojiById(t.emoji.id) ? void 0 : t.emoji.id;
                            return {
                                ...t,
                                roleIds: a,
                                channelIds: l,
                                emojiId: s
                            }
                        });
                        return {
                            ...t,
                            options: a,
                            type: a.length >= _.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD && n ? _.OnboardingPromptType.DROPDOWN : _.OnboardingPromptType.MULTIPLE_CHOICE
                        }
                    }),
                    E = N.filter(e => e.inOnboarding),
                    f = N.filter(e => !0 !== e.inOnboarding),
                    O = N.map(t => g(e, N, t));
                if (O.filter(u.isNotNullish).length > 0) throw l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                    errors: O
                }), Error("failed to locally validate prompts");
                if (E.length > _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING) throw s.default.show({
                    title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                    body: I.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
                        numQuestions: _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
                    })
                }), l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                    errors: O
                }), Error("too many prompts in onboarding");
                let S = [...E, ...f];
                l.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
                });
                try {
                    await D(e.id, {
                        prompts: S.map(_.clientPromptToServerPrompt)
                    }), l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                        guildId: e.id,
                        updates: {
                            prompts: S
                        }
                    })
                } catch (n) {
                    var m;
                    let {
                        fieldName: e,
                        error: t
                    } = null !== (m = new(0, i.APIError)(n).getAnyErrorMessageAndField()) && void 0 !== m ? m : {};
                    throw s.default.show({
                        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: [e, t].filter(u.isNotNullish).join(": ")
                    }), l.default.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
                    }), Error("failed to save prompts")
                }
            }
            async function T(e, t) {
                l.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
                    guildId: e,
                    updates: {
                        enabled: t
                    }
                });
                try {
                    await D(e, {
                        enabled: t
                    })
                } catch (a) {
                    var n;
                    let {
                        fieldName: e,
                        error: t
                    } = null !== (n = new(0, i.APIError)(a).getAnyErrorMessageAndField()) && void 0 !== n ? n : {};
                    s.default.show({
                        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: [e, t].filter(u.isNotNullish).join(": ")
                    })
                }
            }
            async function D(e, t) {
                await a.default.put({
                    url: N.Endpoints.GUILD_ONBOARDING(e),
                    body: t
                })
            }

            function g(e, t, n) {
                let a = {
                        optionErrors: []
                    },
                    l = !1;
                return n.title.length <= 0 && (a.title = I.default.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED, l = !0), n.options.length <= 0 && (a.options = I.default.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED, l = !0), n.inOnboarding && t.filter(e => e.inOnboarding).length > _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING && (a.config = I.default.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({
                    numQuestions: _.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING
                }), l = !0), a.optionErrors = n.options.map(a => A(e, t, n, a)), (l = l || a.optionErrors.some(e => null != e)) ? a : null
            }

            function A(e, t, n, a) {
                var l, s, i;
                if (n.singleSelect) {
                    let e = new Set(null !== (l = a.roleIds) && void 0 !== l ? l : []);
                    for (let a of t)
                        if (a.id !== n.id) {
                            for (let t of a.options)
                                if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return I.default.Messages.ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES
                        }
                }
                let r = (null !== (s = a.roleIds) && void 0 !== s ? s : []).filter(t => null != e.getRole(t)),
                    d = (null !== (i = a.channelIds) && void 0 !== i ? i : []).filter(e => null != o.default.getChannel(e));
                return 0 === r.length && 0 === d.length ? I.default.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED : null
            }