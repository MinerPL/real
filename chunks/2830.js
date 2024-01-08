            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n.n(r),
                o = n("446674"),
                d = n("77078"),
                c = n("777274"),
                f = n("56947"),
                h = n("76813"),
                p = n("992207"),
                m = n("374014"),
                E = n("336804"),
                C = n("311197"),
                g = n("830251"),
                S = n("170643"),
                _ = n("550410"),
                I = n("124824"),
                T = n("640553"),
                v = n("104815"),
                x = n("925674"),
                N = n("331759"),
                A = n("63260"),
                M = n("422736"),
                R = n("280168"),
                j = n("664336"),
                L = n("68148"),
                O = n("980423"),
                y = n("191145"),
                b = n("598785"),
                P = n("226735"),
                D = n("340513"),
                U = n("99795"),
                w = n("49111"),
                F = n("782340"),
                k = n("767290");

            function V(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e, l = Date.now(), s = (0, o.useStateFromStores)([R.default, y.default], () => u(R.default.getSpeakers()).map(e => y.default.getParticipant(t, e)).filter(e => null != e && e.type === U.ParticipantTypes.USER && e.speaking && !(0, g.default)(e)).sortBy(e => -R.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
                return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
                    children: s.map((e, t) => (0, a.jsx)(d.Tooltip, {
                        position: "bottom",
                        color: d.Tooltip.Colors.GREY,
                        text: F.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
                            username: e.user.username
                        }),
                        children: l => (0, a.jsx)(L.default, {
                            ...l,
                            className: i(k.speaker, {
                                [k.last]: t === s.length - 1
                            }),
                            user: e.user,
                            speaking: !0,
                            collapsed: !0,
                            guildId: n
                        })
                    }, e.id))
                })
            }

            function B(e) {
                let {
                    inPopout: t,
                    channel: n,
                    appContext: s,
                    inCall: i,
                    isChatOpen: r,
                    exitFullScreen: u
                } = e, g = n.id, {
                    voiceParticipantsHidden: R,
                    selectedParticipant: L,
                    userParticipantCount: F
                } = (0, o.useStateFromStoresObject)([y.default], () => ({
                    selectedParticipant: y.default.getSelectedParticipant(g),
                    voiceParticipantsHidden: y.default.getVoiceParticipantsHidden(g),
                    userParticipantCount: y.default.getUserParticipantCount(g)
                }), [g]), B = (0, b.default)(n), {
                    showClipsHeaderEntrypoint: H
                } = f.ClipsExperiment.useExperiment({
                    location: "ChannelCallHeaderToolbar"
                }, {
                    autoTrackExposure: !1
                }), {
                    preventIdle: G,
                    allowIdle: W
                } = (0, _.usePreventIdle)("popup"), Y = [];
                if (B) {
                    let e = (null == L ? void 0 : L.type) === U.ParticipantTypes.STREAM ? (0, m.decodeStreamKey)(L.id) : void 0,
                        t = (null == L ? void 0 : L.type) === U.ParticipantTypes.ACTIVITY ? L.id : void 0;
                    Y.push((0, a.jsx)(N.default, {
                        className: k.button,
                        channel: n,
                        applicationId: t,
                        stream: e,
                        exitFullScreen: u,
                        analyticsLocation: n.type === w.ChannelTypes.GUILD_VOICE ? w.AnalyticsPages.GUILD_CHANNEL : w.AnalyticsPages.DM_CHANNEL
                    }, "invite-button"))
                }
                return R && Y.push((0, a.jsx)(V, {
                    channelId: g,
                    guildId: n.guild_id
                }, "current-speaker")), Y.push((0, a.jsx)(p.default, {
                    className: k.button,
                    channelId: g
                }, "clips-enabled-indicator")), (null == L ? void 0 : L.type) === U.ParticipantTypes.STREAM && (Y.push((0, a.jsx)(S.default, {
                    className: k.button,
                    participant: L
                }, "warning")), Y.push((0, a.jsx)(E.default, {
                    size: O.default.Sizes.LARGE,
                    className: k.button,
                    participant: L,
                    showQuality: !0
                }, "live-indicator"))), R && Y.push((0, a.jsx)(d.Popout, {
                    position: "bottom",
                    renderPopout: () => (0, a.jsx)(I.default, {
                        children: (0, a.jsx)(D.default, {
                            channel: n
                        })
                    }),
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, l.createElement)(A.default, {
                            ...e,
                            isActive: n,
                            count: F,
                            key: "call-members",
                            className: k.button
                        })
                    }
                }, "call-members-popout")), i && Y.push(null != L ? (0, a.jsx)(x.default, {
                    className: k.button,
                    channelId: g
                }, "deselect-participant") : (0, a.jsx)(M.default, {
                    className: k.button,
                    channelId: g,
                    isHorizontal: !0
                }, "select-participant")), H && !t && Y.push((0, a.jsx)(h.default, {
                    className: k.button
                }, "clips")), Y.push((0, a.jsx)(C.default, {
                    onOpen: G,
                    onClose: W,
                    className: k.button
                }, "recents")), Y.push((0, a.jsx)(c.CallscopeChannelCallIssueMarker, {
                    className: k.button
                }, "callscope-marker")), Y.push((0, a.jsx)(d.Popout, {
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(I.default, {
                            children: (0, a.jsx)(P.default, {
                                channelId: g,
                                onClose: t,
                                appContext: s,
                                exitFullScreen: u
                            })
                        })
                    },
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, l.createElement)(v.default, {
                            ...e,
                            key: "more-options",
                            isActive: n,
                            className: k.lastButton
                        })
                    }
                }, "more-options-popout")), !r && (Y.push((0, a.jsx)(j.default.Divider, {
                    className: k.divider
                }, "divider")), Y.push((0, a.jsx)(T.ChatButton, {
                    channelId: n.id,
                    className: k.chatButtonSpacer,
                    disabled: !0
                }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
                    children: Y
                })
            }