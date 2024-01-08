            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("917351"),
                i = n("446674"),
                r = n("151426"),
                u = n("77078"),
                o = n("913144"),
                d = n("79112"),
                c = n("206230"),
                f = n("716241"),
                h = n("509802"),
                p = n("788506"),
                m = n("867805"),
                E = n("252931"),
                C = n("5667"),
                g = n("697218"),
                S = n("402671"),
                _ = n("449008"),
                I = n("719923"),
                T = n("229502"),
                v = n("82230"),
                x = n("568088"),
                N = n("397485"),
                A = n("463532"),
                M = n("718350"),
                R = n("258901"),
                j = n("626334"),
                L = n("49111"),
                O = n("99795"),
                y = n("958706"),
                b = n("646718"),
                P = n("397336"),
                D = n("782340"),
                U = n("308036");
            let w = y.EmojiIntention.CHAT,
                F = {
                    section: L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "voice_channel_effect_emoji_picker"
                },
                k = [m.default.getByName("thumbsup"), m.default.getByName("eyes"), m.default.getByName("laughing"), m.default.getByName("watermelon"), m.default.getByName("fork_and_knife"), m.default.getByName("yum")].filter(_.isNotNullish);

            function V(e) {
                var t;
                let {
                    channel: n,
                    closePopout: m,
                    onFocus: _
                } = e, y = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), V = (0, i.useStateFromStores)([g.default], () => g.default.getCurrentUser()), B = I.default.canUseFancyVoiceChannelReactions(V), H = (0, i.useStateFromStores)([v.default], () => v.default.getState().animationType), {
                    viewAndUseEnabled: G
                } = (0, E.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                }), W = l.useRef(!1), Y = (0, p.useFrequentlyUsedEmojis)(n.guild_id), z = (0, s.uniqBy)([...Y, ...k], "name").filter(e => !S.default.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: n,
                    intention: w,
                    canViewAndUsePackEmoji: G
                })).slice(0, O.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT), K = null !== (t = x.default.recentlyUsedEmojis) && void 0 !== t ? t : [], Z = K.filter(e => !z.slice(0, O.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT - 1).some(t => t.name === e.name));
                Z.length > 0 && z.splice(z.length - 1, 1, Z[0]);
                let X = (0, N.sampleAnimationId)(H),
                    J = e => {
                        o.default.dispatch({
                            type: "VOICE_CHANNEL_EFFECT_RECENT_EMOJI",
                            emoji: e
                        }), (0, T.sendVoiceChannelEffect)({
                            channel: n,
                            emoji: e,
                            location: T.VoiceChannelEffectSentLocation.EMOJI_PICKER,
                            animationType: H,
                            animationId: X,
                            isPremium: B
                        })
                    },
                    q = () => {
                        (0, M.openEffectsUpsellModal)({
                            analytics: {
                                type: b.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED,
                                object: L.AnalyticsObjects.BUTTON_CTA,
                                section: L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
                            }
                        })
                    },
                    Q = e => {
                        W.current = e, e && f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                            channel_id: $,
                            guild_id: ee
                        })
                    },
                    {
                        id: $,
                        guild_id: ee
                    } = n;
                l.useEffect(() => {
                    f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
                        channel_id: $,
                        guild_id: ee
                    })
                }, [$, ee]);
                let et = y ? [r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
                    en = H === j.VoiceChannelEffectAnimationType.PREMIUM;
                return (0, a.jsx)(h.default, {
                    contentTypes: et,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: l
                        } = e, s = y && t === r.DismissibleContent.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
                        return (0, a.jsx)(u.Popout, {
                            position: "left",
                            "aria-label": D.default.Messages.VOICE_CHANNEL_EFFECTS_MORE,
                            shouldShow: s,
                            renderPopout: () => (0, a.jsx)("div", {
                                onMouseEnter: _,
                                children: (0, a.jsx)(C.default, {
                                    className: U.reducedMotionTooltip,
                                    header: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
                                    content: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
                                    onClick: () => {
                                        d.default.open(L.UserSettingsSections.ACCESSIBILITY, null, {
                                            scrollPosition: P.AccessibilityScrollPositions.REDUCED_MOTION
                                        }), m()
                                    },
                                    markAsDismissed: l,
                                    buttonCTA: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CONFIRM,
                                    secondaryButtonCTA: D.default.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CANCEL,
                                    caretPosition: C.CaretPosition.RIGHT_CENTER
                                })
                            }),
                            children: () => (0, a.jsx)(R.default, {
                                title: D.default.Messages.VOICE_CHANNEL_EFFECTS_HOTBAR_TITLE,
                                channel: n,
                                closePopout: m,
                                onSelectEmoji: J,
                                onSelectDisabledEmoji: q,
                                onFocus: _,
                                onExpandedToggle: Q,
                                analyticsOverride: F,
                                emojiSearchProps: {
                                    accessory: (0, a.jsx)(A.default, {
                                        labelText: D.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                        value: en,
                                        onChange: () => {
                                            if (B) return f.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: $,
                                                guild_id: ee,
                                                enabled: !en
                                            }), o.default.dispatch({
                                                type: "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE"
                                            })
                                        },
                                        onShowUpsell: () => (0, M.openEffectsUpsellModal)({
                                            analytics: {
                                                type: W.current ? b.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : b.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                                object: L.AnalyticsObjects.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                                section: W.current ? L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : L.AnalyticsSections.VOICE_CHANNEL_EFFECTS_BAR
                                            }
                                        })
                                    })
                                },
                                recentlyUsedEmojis: Z
                            })
                        })
                    }
                })
            }