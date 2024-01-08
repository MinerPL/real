            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return X
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("669491"),
                o = n("77078"),
                d = n("255397"),
                c = n("789394"),
                f = n("244201"),
                h = n("191145"),
                p = n("777274"),
                m = n("679653"),
                E = n("56947"),
                C = n("76813"),
                g = n("992207"),
                S = n("95039"),
                _ = n("539938"),
                I = n("557809"),
                T = n("311197"),
                v = n("550410"),
                x = n("124824"),
                N = n("640553"),
                A = n("104815"),
                M = n("305961"),
                R = n("957255"),
                j = n("181114"),
                L = n("849467"),
                O = n("155207"),
                y = n("228427"),
                b = n("664336"),
                P = n("599110"),
                D = n("439932"),
                U = n("567469"),
                w = n("998716"),
                F = n("619395"),
                k = n("923510"),
                V = n("834052"),
                B = n("506466"),
                H = n("199811"),
                G = n("96151"),
                W = n("49111"),
                Y = n("646718"),
                z = n("782340"),
                K = n("76066");

            function Z(e) {
                let {
                    inPopout: t,
                    channel: n,
                    toggleRequestToSpeakSidebar: s,
                    showRequestToSpeakSidebar: u
                } = e, c = (0, f.useAppContext)(), m = (0, r.useStateFromStores)([h.default], () => h.default.getChatOpen(n.id)), S = (0, F.useCanModerateRequestToSpeak)(n.id), _ = (0, U.useStageParticipantsCount)(n.id, w.StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY), {
                    preventIdle: I,
                    allowIdle: M
                } = (0, v.usePreventIdle)("popup"), {
                    showClipsHeaderEntrypoint: R
                } = E.ClipsExperiment.useExperiment({
                    location: "StageChannelCallHeaderToolbar"
                }, {
                    autoTrackExposure: !1
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g.default, {
                        channelId: n.id
                    }, "clips-enabled-indicator"), (0, a.jsx)(o.Popout, {
                        position: "bottom",
                        animation: o.Popout.Animation.NONE,
                        align: "right",
                        renderPopout: e => (0, a.jsx)(x.default, {
                            children: (0, a.jsx)(H.default, {
                                ...e,
                                channelId: n.id,
                                appContext: c
                            })
                        }),
                        autoInvert: !1,
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.createElement)(A.default, {
                                ...e,
                                key: "more-options",
                                isActive: n,
                                className: K.button,
                                iconClassName: K.buttonIcon
                            })
                        }
                    }, "more-options-popout"), R && !t && (0, a.jsx)(C.default, {
                        className: K.button
                    }, "clips"), (0, a.jsx)(T.default, {
                        onOpen: I,
                        onClose: M,
                        className: K.button
                    }, "recents"), !u && S ? (0, a.jsx)("div", {
                        className: K.button,
                        children: (0, a.jsx)(B.default, {
                            toggleRequestToSpeakSidebar: () => {
                                m && d.default.updateChatOpen(n.id, !1), s()
                            },
                            showRequestToSpeakSidebar: u,
                            numRequestToSpeak: _
                        })
                    }) : null, (0, a.jsx)(p.CallscopeChannelCallIssueMarker, {
                        className: K.button
                    }), !m && (0, a.jsx)("div", {
                        className: i(K.button, {
                            [K.sidebarOpen]: u
                        }),
                        children: (0, a.jsx)(N.ChatButton, {
                            channelId: n.id,
                            showRequestToSpeakSidebar: u,
                            toggleRequestToSpeakSidebar: s,
                            iconClassName: K.buttonIcon
                        })
                    })]
                })
            }

            function X(e) {
                var t, n;
                let {
                    inPopout: s,
                    channel: f,
                    toggleRequestToSpeakSidebar: h,
                    showRequestToSpeakSidebar: p
                } = e, E = (0, m.default)(f), C = (0, r.useStateFromStores)([V.default], () => V.default.getStageInstanceByChannel(f.id)), g = (0, U.useActualStageSpeakerCount)(f.id), T = (0, U.useStageParticipantsCount)(f.id, w.StageChannelParticipantNamedIndex.AUDIENCE), v = (0, r.useStateFromStores)([M.default], () => M.default.getGuild(f.guild_id), [f.guild_id]), x = null !== (t = null == v ? void 0 : v.maxStageVideoChannelUsers) && void 0 !== t ? t : 0, N = (null == v ? void 0 : v.isCommunity()) ? x < W.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == v ? void 0 : v.premiumTier) !== W.BoostedGuildTiers.TIER_3 && x <= W.MAX_STAGE_VIDEO_USER_LIMIT_TIER2, A = (0, G.default)(f), F = (0, r.useStateFromStores)([R.default], () => R.default.can(k.MODERATE_STAGE_CHANNEL_PERMISSIONS, f)), B = () => {
                    d.default.updateStageVideoLimitBoostUpsellDismissed(f.id, !0), P.default.track(W.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                        guild_id: f.guild_id,
                        type: Y.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                        is_moderator: F,
                        action: Y.BoostingUpsellAction.DISMISS
                    })
                };
                l.useEffect(() => {
                    A && P.default.track(W.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                        guild_id: f.guild_id,
                        type: Y.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                        is_moderator: F,
                        listener_count: g + T
                    })
                }, [A]);
                let {
                    enabled: H,
                    left: X
                } = c.ChannelEmojisExperiment.useExperiment({
                    location: "f2c6da_2"
                }, {
                    autoTrackExposure: !1
                }), q = H && (0, a.jsx)(I.ChannelEmoji, {
                    channel: f
                }), Q = (0, a.jsxs)(b.default, {
                    toolbar: (0, a.jsx)(Z, {
                        inPopout: s,
                        toggleRequestToSpeakSidebar: h,
                        showRequestToSpeakSidebar: p,
                        channel: f
                    }),
                    onDoubleClick: _.handleDoubleClick,
                    transparent: !0,
                    className: i((0, D.getThemeClass)(W.ThemeTypes.DARK), K.participants),
                    children: [X && q, (0, a.jsx)(b.default.Icon, {
                        icon: y.default,
                        disabled: !0,
                        "aria-label": z.default.Messages.STAGE_CHANNEL,
                        className: K.icon,
                        color: null != C ? u.default.unsafe_rawColors.GREEN_360.css : void 0
                    }), !X && q, (0, a.jsx)(b.default.Title, {
                        className: K.channelName,
                        wrapperClassName: K.channelNameWrapper,
                        children: null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : E
                    }), (0, a.jsx)(b.default.Divider, {
                        className: K.divider
                    }), (0, a.jsxs)(b.default.Title, {
                        children: [(0, a.jsx)(L.default, {
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            className: K.speakerCount,
                            children: z.default.Messages.SPEAKING_COUNT.format({
                                count: g
                            })
                        }), (0, a.jsx)(O.default, {
                            width: 16,
                            height: 16
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            className: K.speakerCount,
                            children: z.default.Messages.LISTENING_COUNT.format({
                                count: T
                            })
                        })]
                    })]
                });
                return A ? (0, a.jsxs)("div", {
                    children: [Q, (0, a.jsxs)("div", {
                        className: K.boostUpsell,
                        children: [(0, a.jsx)(J, {}), (0, a.jsxs)("div", {
                            className: K.text,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: N ? z.default.Messages.STAGE_FULL_MODERATOR_TITLE : z.default.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-normal",
                                children: N ? z.default.Messages.STAGE_FULL_MODERATOR_BODY : z.default.Messages.STAGE_FULL_MAX_BODY
                            })]
                        }), (0, a.jsx)("div", {
                            className: K.buttons,
                            children: N ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(o.Button, {
                                    className: K.notNowButton,
                                    onClick: B,
                                    look: o.Button.Looks.BLANK,
                                    size: o.Button.Sizes.SMALL,
                                    children: z.default.Messages.NOT_NOW
                                }), (0, a.jsx)(j.default, {
                                    size: o.Button.Sizes.SMALL,
                                    onClick: () => {
                                        (0, S.openGuildBoostingMarketingModal)({
                                            guildId: f.guild_id,
                                            location: {
                                                section: W.AnalyticsSections.STAGE_VIDEO_LIMIT
                                            }
                                        }), P.default.track(W.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                            guild_id: f.guild_id,
                                            type: Y.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                            is_moderator: F,
                                            action: Y.BoostingUpsellAction.BOOST
                                        })
                                    },
                                    className: K.boostButton,
                                    children: z.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                                })]
                            }) : (0, a.jsx)(o.Button, {
                                className: K.notNowButton,
                                onClick: B,
                                look: o.Button.Looks.BLANK,
                                size: o.Button.Sizes.SMALL,
                                children: z.default.Messages.DISMISS
                            })
                        })]
                    })]
                }) : Q
            }

            function J() {
                return (0, a.jsxs)("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 36 36",
                    fill: "none",
                    children: [(0, a.jsxs)("g", {
                        clipPath: "url(#clip0_595_59940)",
                        children: [(0, a.jsx)("path", {
                            d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
                            fill: "url(#paint0_linear_595_59940)"
                        }), (0, a.jsx)("path", {
                            d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
                            fill: "white"
                        }), (0, a.jsx)("path", {
                            d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
                            fill: "white"
                        })]
                    }), (0, a.jsxs)("defs", {
                        children: [(0, a.jsxs)("linearGradient", {
                            id: "paint0_linear_595_59940",
                            x1: "2.4046e-06",
                            y1: "35.2166",
                            x2: "35.7182",
                            y2: "-1.45185",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("stop", {
                                stopColor: "#3E70DD"
                            }), (0, a.jsx)("stop", {
                                offset: "1",
                                stopColor: "#B377F3"
                            })]
                        }), (0, a.jsx)("clipPath", {
                            id: "clip0_595_59940",
                            children: (0, a.jsx)("rect", {
                                width: "36",
                                height: "36",
                                fill: "white"
                            })
                        })]
                    })]
                })
            }