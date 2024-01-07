            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("222007");
            var a = s("446674"),
                n = s("913144"),
                l = s("863636"),
                i = s("129092"),
                r = s("900938"),
                o = s("353830"),
                d = s("772871"),
                u = s("653274"),
                c = s("642807"),
                E = s("136278"),
                _ = s("259483"),
                T = s("867928"),
                I = s("49111");
            let S = new Set,
                N = _.GuildSettingsOnboardingPage.LANDING,
                g = null;

            function f(e) {
                let {
                    subsection: t
                } = e;
                if (r.default.getGuildId() === g) return !1;
                N = t === I.GuildSettingsSubsections.SERVER_GUIDE ? _.GuildSettingsOnboardingPage.HOME_SETTINGS : _.GuildSettingsOnboardingPage.LANDING, g = r.default.getGuildId()
            }
            class A extends a.default.Store {
                initialize() {
                    this.waitFor(l.default, u.default, E.default, c.default, o.default), this.syncWith([l.default, u.default, E.default, c.default, o.default], () => !0)
                }
                isEducationUpsellDismissed(e) {
                    return S.has(e)
                }
                getCurrentPage() {
                    return N
                }
                hasChanges() {
                    if (null == g) return !1;
                    let e = l.default.isAdvancedMode(g);
                    if (N === _.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return e ? u.default.hasChanges() || E.default.hasChanges() : u.default.hasChanges();
                    if (N === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return E.default.hasChanges();
                    if (N === _.GuildSettingsOnboardingPage.HOME_SETTINGS) return c.default.hasChanges();
                    return !1
                }
                hasConfiguredAnythingForCurrentStep() {
                    if (null == g) return !1;
                    if (N === _.GuildSettingsOnboardingPage.SAFETY_CHECK) return !0;
                    if (N === _.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return u.default.editedDefaultChannelIds.size > 0;
                    if (N === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return E.default.editedOnboardingPrompts.length > 0;
                    else if (N === _.GuildSettingsOnboardingPage.HOME_SETTINGS) return !(0, i.isSettingsEmpty)(c.default.getSettings());
                    return !1
                }
                hasErrors() {
                    return N === _.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS && null != E.default.errors.find(e => null != e)
                }
                showNotice() {
                    if (null == g) return !1;
                    if ((0, T.isOnboardingWizardCompleted)(g)) return this.hasChanges();
                    let e = o.default.getCurrentPage();
                    return (N !== _.GuildSettingsOnboardingPage.SAFETY_CHECK || e === d.GuildSettingsSafetyPage.OVERVIEW) && null != N && N !== _.GuildSettingsOnboardingPage.LANDING
                }
                canCloseEarly() {
                    return null == g || !this.hasErrors() && (!(0, T.isOnboardingWizardCompleted)(g) || !this.hasChanges())
                }
            }
            A.displayName = "GuildSettingsOnboardingStore";
            var L = new A(n.default, {
                GUILD_SETTINGS_INIT: f,
                GUILD_SETTINGS_SET_SECTION: f,
                GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
                    let {
                        step: t
                    } = e;
                    N = t
                },
                GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
                    let {
                        upsellType: t
                    } = e;
                    S.add(t)
                }
            })