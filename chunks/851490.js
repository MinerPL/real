            "use strict";
            s.r(t), s.d(t, {
                resetDefaultChannels: function() {
                    return I
                },
                toggleDefaultChannel: function() {
                    return S
                },
                saveDefaultChannels: function() {
                    return N
                }
            }), s("222007");
            var a = s("913144"),
                n = s("404118"),
                l = s("448993"),
                i = s("863636"),
                r = s("380710"),
                o = s("42203"),
                d = s("449008"),
                u = s("653274"),
                c = s("330724"),
                E = s("136278"),
                _ = s("653138"),
                T = s("782340");

            function I() {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
                    channelId: e
                })
            }
            async function N(e) {
                let t = Array.from(u.default.editedDefaultChannelIds).filter(e => null != o.default.getChannel(e)),
                    s = E.default.advancedMode,
                    [I, S] = (0, r.getChattableDefaultChannels)(e.id, [...t]),
                    N = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts),
                    g = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts, r.isChattableChannelId);
                if (i.default.getEnabled(e.id) && (!s && (S.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || I.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN) || s && (N.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || g.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN))) {
                    n.default.show({
                        title: T.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                        body: T.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
                    });
                    return
                }
                if (u.default.hasChanges()) {
                    a.default.dispatch({
                        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
                    });
                    try {
                        await (0, c.editOnboarding)(e.id, {
                            default_channel_ids: t
                        }), a.default.dispatch({
                            type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
                            guildId: e.id,
                            channelIds: t
                        })
                    } catch (s) {
                        var f;
                        let {
                            fieldName: e,
                            error: t
                        } = null !== (f = new(0, l.APIError)(s).getAnyErrorMessageAndField()) && void 0 !== f ? f : {};
                        n.default.show({
                            title: T.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
                            body: [e, t].filter(d.isNotNullish).join(": ")
                        }), a.default.dispatch({
                            type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
                        })
                    }
                }
            }