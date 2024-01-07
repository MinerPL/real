            "use strict";
            n.r(t), n.d(t, {
                setOnboardingStep: function() {
                    return D
                },
                dismissEducationUpsell: function() {
                    return g
                },
                toggleAdvancedSettings: function() {
                    return A
                },
                goToNextOnboardingStep: function() {
                    return G
                },
                goToPrevOnboardingStep: function() {
                    return h
                },
                startPreview: function() {
                    return L
                }
            }), n("222007");
            var a = n("913144"),
                l = n("404118"),
                s = n("863636"),
                i = n("471706"),
                r = n("380710"),
                d = n("937692"),
                o = n("233706"),
                u = n("479756"),
                c = n("507950"),
                N = n("42203"),
                _ = n("305961"),
                I = n("592407"),
                E = n("653274"),
                f = n("330724"),
                O = n("259483"),
                S = n("724210"),
                m = n("653138"),
                T = n("782340");

            function D(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_STEP",
                    step: e
                })
            }

            function g(e) {
                null != e && a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
                    upsellType: e
                })
            }
            async function A(e, t) {
                let n = s.default.getEnabled(e),
                    i = Array.from(E.default.editedDefaultChannelIds).filter(e => null != N.default.getChannel(e)),
                    [d, o] = (0, r.getChattableDefaultChannels)(e, [...i]);
                if (n && t === m.GuildOnboardingMode.ONBOARDING_DEFAULT && (o.length < m.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || d.length < m.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN)) {
                    l.default.show({
                        title: T.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: T.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
                    });
                    return
                }
                await (0, f.editOnboarding)(e, {
                    mode: t
                }), a.default.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
                    guildId: e,
                    mode: t
                })
            }

            function G(e, t) {
                let {
                    homeSettingsEnabled: n
                } = (0, o.getOnboardingHomeAdminExperiment)(e), a = O.ONBOARDING_STEPS.findIndex(e => e === t);
                if (-1 !== a && a !== O.ONBOARDING_STEPS.length - 1) {
                    if (!n && O.ONBOARDING_STEPS[a + 1] === O.GuildSettingsOnboardingPage.HOME_SETTINGS) {
                        D(O.ONBOARDING_STEPS[a + 2]);
                        return
                    }
                    D(O.ONBOARDING_STEPS[a + 1])
                }
            }

            function h(e, t) {
                let {
                    homeSettingsEnabled: n
                } = (0, o.getOnboardingHomeAdminExperiment)(e), a = O.ONBOARDING_STEPS.findIndex(e => e === t);
                if (-1 !== a && 0 !== a) {
                    if (!n && O.ONBOARDING_STEPS[a - 1] === O.GuildSettingsOnboardingPage.HOME_SETTINGS) {
                        D(O.ONBOARDING_STEPS[a - 2]);
                        return
                    }
                    D(O.ONBOARDING_STEPS[a - 1])
                }
            }
            async function L(e) {
                let t = _.default.getGuild(e);
                null != t && (I.default.close(), (0, u.startImpersonating)(t.id, {
                    type: c.ImpersonateType.NEW_MEMBER,
                    roles: {},
                    optInChannels: new Set,
                    optInEnabled: !1,
                    onboardingResponses: new Set,
                    onboardingEnabled: !0,
                    memberOptions: {
                        isPending: t.hasVerificationGate(),
                        flags: 0
                    }
                }), i.default.resetOnboardingStatus(t.id), (0, d.discardOnboardingPromise)(t.id), await (0, d.default)({
                    guildId: t.id,
                    isPreview: !0,
                    returnChannelId: S.StaticChannelRoute.GUILD_HOME
                }))
            }