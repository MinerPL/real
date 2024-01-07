            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("669491"),
                i = s("77078"),
                r = s("863636"),
                o = s("380710"),
                d = s("578706"),
                u = s("381546"),
                c = s("266926"),
                E = s("653274"),
                _ = s("682327"),
                T = s("653138"),
                I = s("782340"),
                S = s("22394");

            function N(e) {
                let {
                    guildId: t,
                    scrollToQuestions: s
                } = e, N = (0, n.useStateFromStores)([r.default], () => r.default.isAdvancedMode(t)), g = (0, n.useStateFromStores)([E.default], () => E.default.editedDefaultChannelIds), [f, A] = (0, o.useChattableDefaultChannels)(t, [...g]), [L, m] = (0, _.useEditedChattableDefaultChannelsWithQuestions)(t, [...g]), C = N ? m.length : A.length, O = N ? L.length : f.length, h = C < T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING, R = O >= T.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN, D = m.length - A.length, M = (0, a.jsx)(d.default, {
                    color: l.default.unsafe_rawColors.BRAND_500.css,
                    backgroundColor: l.default.unsafe_rawColors.WHITE_100.css,
                    className: S.icon,
                    width: 18,
                    height: 18
                }), G = (0, a.jsx)(u.default, {
                    className: S.icon,
                    color: "var(--background-accent)",
                    backgroundColor: l.default.colors.WHITE.css,
                    width: 18,
                    height: 18
                }), x = [Math.min(T.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN, O) / T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING * 100, Math.min(T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING, C) / T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING * 100], p = !h && R ? [l.default.colors.TEXT_POSITIVE.css, l.default.colors.TEXT_POSITIVE.css] : [l.default.colors.TEXT_BRAND.css, l.default.colors.TEXT_MUTED.css];
                return (0, a.jsxs)("div", {
                    className: S.container,
                    children: [(0, a.jsxs)("div", {
                        className: S.header,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            color: "text-brand",
                            children: I.default.Messages.DEFAULT_CHANNELS_CHATTABLE_COUNT.format({
                                count: O
                            })
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            color: "text-muted",
                            children: I.default.Messages.DEFAULT_CHANNELS_TOTAL_COUNT.format({
                                count: C
                            })
                        })]
                    }), (0, a.jsx)(i.StackedProgress, {
                        foregroundColors: p,
                        percents: x,
                        size: i.StackedProgress.Sizes.XSMALL
                    }), (0, a.jsxs)("div", {
                        className: S.requiredItem,
                        children: [h ? G : M, (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHANNELS.format({
                                count: T.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: S.requiredItem,
                        children: [R ? M : G, (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: I.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_MIN_CHATTABLE_CHANNELS.format({
                                count: T.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
                            })
                        })]
                    }), N && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: S.requiredItem,
                            children: [(0, a.jsx)(c.default, {
                                color: "var(--background-accent)",
                                backgroundColor: l.default.colors.WHITE.css,
                                className: S.icon,
                                width: 18,
                                height: 18
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: I.default.Messages.DEFAULT_CHANNELS_ADVANCED_EXPLAINER
                            })]
                        }), (0, a.jsxs)("div", {
                            className: S.requiredItem,
                            children: [(0, a.jsx)(c.default, {
                                color: "var(--background-accent)",
                                backgroundColor: l.default.colors.WHITE.css,
                                className: S.icon,
                                width: 18,
                                height: 18
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: I.default.Messages.DEFAULT_CHANNELS_PREVIEW_ADDITIONAL.format({
                                    count: D,
                                    prejoinHook: e => (0, a.jsx)(i.Anchor, {
                                        onClick: s,
                                        children: (0, a.jsx)(i.Text, {
                                            tag: "span",
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            children: e
                                        })
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }