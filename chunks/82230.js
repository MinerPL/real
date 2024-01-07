            "use strict";
            let l;
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var u = t("446674"),
                i = t("913144"),
                o = t("626334");
            class a extends u.default.PersistedStore {
                initialize(e) {
                    var n;
                    l = null !== (n = null == e ? void 0 : e.animationType) && void 0 !== n ? n : o.VoiceChannelEffectAnimationType.PREMIUM
                }
                getState() {
                    return {
                        animationType: l
                    }
                }
            }
            a.displayName = "VoiceChannelEffectsPersistedStore", a.persistKey = "VoiceChannelEffectsPersistedStore";
            var d = new a(i.default, {
                VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
                    l = l === o.VoiceChannelEffectAnimationType.BASIC ? o.VoiceChannelEffectAnimationType.PREMIUM : o.VoiceChannelEffectAnimationType.BASIC
                }
            })