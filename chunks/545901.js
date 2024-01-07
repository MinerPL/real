            "use strict";
            s.r(t), s.d(t, {
                SafetyCheckUpsell: function() {
                    return o
                },
                DefaultChannelsUpsell: function() {
                    return d
                },
                CustomizationQuestionsUpsell: function() {
                    return u
                },
                HomeSettingsUpsell: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078");
            s("593195"), s("564875");
            var l = s("131835"),
                i = s("782340"),
                r = s("965979");

            function o() {
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: r.stepHeader,
                        children: i.default.Messages.STEP_NUMBER.format({
                            number: 1
                        })
                    }), (0, a.jsx)(n.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: r.header,
                        children: i.default.Messages.GUILD_ONBOARDING_UPSELL_SAFETY_TITLE
                    }), (0, a.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: i.default.Messages.GUILD_ONBOARDING_UPSELL_SAFETY_TITLE_TOOLTIP
                    }), (0, a.jsx)(n.Button, {
                        className: r.button,
                        onClick: () => (0, l.dismissEducationUpsell)("Safety Check"),
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
                    })]
                })
            }

            function d() {
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: r.stepHeader,
                        children: i.default.Messages.STEP_NUMBER.format({
                            number: 2
                        })
                    }), (0, a.jsx)(n.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: r.header,
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_DEFAULT_CHANNELS_TITLE
                    }), (0, a.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_DEFAULT_CHANNELS_SUBTITLE
                    }), (0, a.jsx)(n.Button, {
                        className: r.button,
                        onClick: () => (0, l.dismissEducationUpsell)("Default Channels"),
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
                    })]
                })
            }

            function u() {
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: r.stepHeader,
                        children: i.default.Messages.STEP_NUMBER.format({
                            number: 3
                        })
                    }), (0, a.jsx)(n.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: r.header,
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_CUSTOMIZATION_QUESTIONS_TITLE
                    }), (0, a.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_CUSTOMIZATION_QUESTIONS_SUBTITLE
                    }), (0, a.jsx)(n.Button, {
                        className: r.button,
                        onClick: () => (0, l.dismissEducationUpsell)("Customization Questions"),
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
                    })]
                })
            }

            function c() {
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [(0, a.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        className: r.stepHeader,
                        children: i.default.Messages.STEP_NUMBER.format({
                            number: 4
                        })
                    }), (0, a.jsx)(n.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: r.header,
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_HOME_TITLE
                    }), (0, a.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_HOME_SUBTITLE
                    }), (0, a.jsx)(n.Button, {
                        className: r.button,
                        onClick: () => (0, l.dismissEducationUpsell)("Home Settings"),
                        children: i.default.Messages.GUILD_ONBOARDING_SETUP_EDUCATION_OVERVIEW_CTA
                    })]
                })
            }