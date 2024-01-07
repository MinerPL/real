            "use strict";
            s.r(t), s.d(t, {
                useEditedChattableDefaultChannelsWithQuestions: function() {
                    return T
                },
                useAdvancedModeReady: function() {
                    return I
                },
                AdvancedModeToggle: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("65597"),
                i = s("77078"),
                r = s("850364"),
                o = s("863636"),
                d = s("380710"),
                u = s("131835"),
                c = s("136278"),
                E = s("653138"),
                _ = s("782340");

            function T(e, t) {
                let s = (0, l.useStateFromStoresArray)([c.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, t, c.default.editedOnboardingPrompts)),
                    a = (0, l.useStateFromStoresArray)([c.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, t, c.default.editedOnboardingPrompts, d.isChattableChannelId));
                return [a, s]
            }

            function I(e) {
                let t = (0, l.default)([o.default], () => o.default.isAdvancedMode(e)),
                    [s, a] = function(e) {
                        let t = (0, l.useStateFromStoresArray)([o.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, o.default.getDefaultChannelIds(e), o.default.getOnboardingPrompts(e))),
                            s = (0, l.useStateFromStoresArray)([o.default], () => (0, d.getMinimumSetOfDefaultChannelIds)(e, o.default.getDefaultChannelIds(e), o.default.getOnboardingPrompts(e), d.isChattableChannelId));
                        return [s, t]
                    }(e);
                return !!t && a.length >= E.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING && s.length >= E.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
            }

            function S(e) {
                let {
                    guildId: t,
                    className: s
                } = e, d = (0, r.useAdvancedModeExperiment)(t).advancedModeAllowed, c = (0, l.default)([o.default], () => o.default.isAdvancedMode(t)), T = n.useCallback(() => {
                    let e = c ? E.GuildOnboardingMode.ONBOARDING_DEFAULT : E.GuildOnboardingMode.ONBOARDING_ADVANCED;
                    c ? (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
                        header: _.default.Messages.ONBOARDING_DEFAULT_MODE_HEADER,
                        confirmText: _.default.Messages.DISABLE,
                        cancelText: _.default.Messages.CANCEL,
                        confirmButtonColor: i.Button.Colors.BRAND,
                        onConfirm: () => (0, u.toggleAdvancedSettings)(t, e),
                        ...s,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.ONBOARDING_DEFAULT_MODE_DESCRIPTION
                        })
                    })) : (0, i.openModal)(s => (0, a.jsx)(i.ConfirmModal, {
                        header: _.default.Messages.ONBOARDING_ADVANCED_MODE_HEADER,
                        confirmText: _.default.Messages.ONBOARDING_ADVANCED_MODE_ENABLE,
                        cancelText: _.default.Messages.CANCEL,
                        confirmButtonColor: i.Button.Colors.BRAND,
                        onConfirm: () => (0, u.toggleAdvancedSettings)(t, e),
                        ...s,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.ONBOARDING_ADVANCED_MODE_DESCRIPTION
                        })
                    }))
                }, [t, c]);
                return d ? (0, a.jsx)("div", {
                    className: s,
                    children: (0, a.jsx)(i.Anchor, {
                        onClick: T,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: c ? _.default.Messages.ONBOARDING_DEFAULT_MODE_TOGGLE : _.default.Messages.ONBOARDING_ADVANCED_MODE_TOGGLE
                        })
                    })
                }) : null
            }