            "use strict";
            t.r(n), t.d(n, {
                VoiceChannelEffectSentLocation: function() {
                    return u
                },
                sendVoiceChannelCustomCallSoundEffect: function() {
                    return U
                },
                sendVoiceChannelSoundboardEffect: function() {
                    return L
                },
                sendVoiceChannelEffect: function() {
                    return T
                }
            });
            var l, u, i = t("917351"),
                o = t("872717"),
                a = t("913144"),
                d = t("812204"),
                r = t("716241"),
                s = t("385976"),
                c = t("389480"),
                f = t("454614"),
                _ = t("18494"),
                E = t("402671"),
                S = t("82230"),
                C = t("568088"),
                y = t("397485"),
                m = t("626334"),
                A = t("49111"),
                g = t("846325");

            function I(e) {
                let n = new AbortController,
                    t = (0, i.throttle)(t => {
                        _.default.getVoiceChannelId() !== e && n.abort()
                    }, 1e3);
                return {
                    abortController: n,
                    onRequestProgress: t
                }
            }

            function U(e, n, t) {
                var l;
                let {
                    abortController: u,
                    onRequestProgress: i
                } = I(e), a = null !== (l = S.default.getState().animationType) && void 0 !== l ? l : m.VoiceChannelEffectAnimationType.BASIC, r = {
                    animation_type: a,
                    animation_id: (0, y.sampleAnimationId)(a, y.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
                };
                o.default.post({
                    url: A.Endpoints.CUSTOM_CALL_SOUNDS(e),
                    body: r,
                    signal: u.signal,
                    onRequestProgress: i
                }).then(A.NOOP_NULL, () => {
                    if (u.signal.aborted) return
                }), (0, f.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
            }

            function L(e, n, t, l) {
                var u, i;
                let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
                    {
                        abortController: d,
                        onRequestProgress: r
                    } = I(e),
                    _ = {
                        sound_id: n.soundId,
                        emoji_id: n.emojiId,
                        emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
                    };
                n.guildId !== g.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
                    url: A.Endpoints.SEND_SOUNDBOARD_SOUND(e),
                    body: _,
                    signal: d.signal,
                    onRequestProgress: r
                }).then(A.NOOP_NULL, () => {
                    if (d.signal.aborted) return
                }), (0, f.default)(null != l ? l : [], t, n, c.AnalyticsSoundType.DEFAULT)
            }(l = u || (u = {})).EMOJI_PICKER = "emoji_picker", l.EFFECT_BAR = "effect_bar";
            let T = async e => {
                let {
                    channel: n,
                    emoji: t,
                    location: l,
                    animationType: u,
                    animationId: i,
                    isPremium: d
                } = e;
                if (null == t || C.default.isOnCooldown) return;
                let r = d && null != u ? u : m.VoiceChannelEffectAnimationType.BASIC;
                try {
                    let e = null != t.id ? {
                        emoji_id: t.id,
                        emoji_name: t.name,
                        animation_type: r,
                        animation_id: i
                    } : {
                        emoji_id: null,
                        emoji_name: t.optionallyDiverseSequence,
                        animation_type: r,
                        animation_id: i
                    };
                    await o.default.post({
                        url: A.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
                        body: e
                    }), D(n, t, l, r), a.default.dispatch({
                        type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
                    })
                } catch (e) {
                    if (429 === e.status && null != e.body.retry_after) {
                        let n = 1e3 * e.body.retry_after;
                        a.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
                            cooldownEndsAtMs: n
                        })
                    }
                }
            }, N = {
                [m.VoiceChannelEffectAnimationType.BASIC]: "Basic",
                [m.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
            }, D = (e, n, t, l) => {
                let {
                    unicode: u,
                    custom: i,
                    customExternal: o,
                    managed: a,
                    managedExternal: d,
                    animated: s
                } = (0, E.countEmoji)([n], e.getGuildId()), c = N[l];
                r.default.trackWithMetadata(A.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
                    channel_id: e.id,
                    guild_id: e.getGuildId(),
                    location: t,
                    emoji_unicode: u,
                    emoji_custom: i,
                    emoji_custom_external: o,
                    emoji_managed: a,
                    emoji_managed_external: d,
                    emoji_animated: s,
                    animation_type: c,
                    is_broadcast: e.isBroadcastChannel()
                })
            }