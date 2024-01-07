            "use strict";
            var a, l, s, i;
            n.r(t), n.d(t, {
                GuildSettingsOnboardingPage: function() {
                    return a
                },
                ONBOARDING_STEPS: function() {
                    return r
                },
                GuildSettingsCTAs: function() {
                    return l
                },
                COMPLETABLE_ONBOARDING_STEPS: function() {
                    return d
                },
                pageToEducationUpsellType: function() {
                    return o
                }
            }), (s = a || (a = {}))[s.LANDING = 0] = "LANDING", s[s.SAFETY_CHECK = 1] = "SAFETY_CHECK", s[s.DEFAULT_CHANNELS = 2] = "DEFAULT_CHANNELS", s[s.WELCOME_CARD = 3] = "WELCOME_CARD", s[s.CUSTOMIZATION_QUESTIONS = 4] = "CUSTOMIZATION_QUESTIONS", s[s.REVIEW = 5] = "REVIEW", s[s.HOME_SETTINGS = 6] = "HOME_SETTINGS";
            let r = [0, 1, 2, 4, 6, 5];
            (i = l || (l = {}))[i.TOGGLE_ENABLED = 0] = "TOGGLE_ENABLED", i[i.TOGGLE_DISABLED = 1] = "TOGGLE_DISABLED", i[i.PREVIEW = 2] = "PREVIEW", i[i.EDIT_DEFAULT_CHANNELS = 3] = "EDIT_DEFAULT_CHANNELS", i[i.EDIT_CUSTOMIZATION_QUESTIONS = 4] = "EDIT_CUSTOMIZATION_QUESTIONS", i[i.EDIT_HOME_SETTINGS = 5] = "EDIT_HOME_SETTINGS";
            let d = r.filter(e => 0 !== e);

            function o(e) {
                switch (e) {
                    case 1:
                        return "Safety Check";
                    case 2:
                        return "Default Channels";
                    case 4:
                        return "Customization Questions";
                    case 6:
                        return "Home Settings";
                    default:
                        return null
                }
            }