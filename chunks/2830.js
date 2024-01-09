            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
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
                f = n("76813"),
                h = n("992207"),
                p = n("374014"),
                m = n("336804"),
                E = n("311197"),
                C = n("830251"),
                g = n("170643"),
                S = n("550410"),
                _ = n("124824"),
                I = n("640553"),
                T = n("104815"),
                v = n("925674"),
                x = n("331759"),
                N = n("63260"),
                A = n("422736"),
                M = n("280168"),
                R = n("664336"),
                j = n("68148"),
                L = n("980423"),
                O = n("191145"),
                y = n("598785"),
                b = n("226735"),
                P = n("340513"),
                D = n("99795"),
                U = n("49111"),
                w = n("782340"),
                F = n("767290");

            function k(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e, l = Date.now(), s = (0, o.useStateFromStores)([M.default, O.default], () => u(M.default.getSpeakers()).map(e => O.default.getParticipant(t, e)).filter(e => null != e && e.type === D.ParticipantTypes.USER && e.speaking && !(0, C.default)(e)).sortBy(e => -M.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
                return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
                    children: s.map((e, t) => (0, a.jsx)(d.Tooltip, {
                        position: "bottom",
                        color: d.Tooltip.Colors.GREY,
                        text: w.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
                            username: e.user.username
                        }),
                        children: l => (0, a.jsx)(j.default, {
                            ...l,
                            className: i(F.speaker, {
                                [F.last]: t === s.length - 1
                            }),
                            user: e.user,
                            speaking: !0,
                            collapsed: !0,
                            guildId: n
                        })
                    }, e.id))
                })
            }

            function V(e) {
                let {
                    inPopout: t,
                    channel: n,
                    appContext: s,
                    inCall: i,
                    isChatOpen: r,
                    exitFullScreen: u
                } = e, C = n.id, {
                    voiceParticipantsHidden: M,
                    selectedParticipant: j,
                    userParticipantCount: w
                } = (0, o.useStateFromStoresObject)([O.default], () => ({
                    selectedParticipant: O.default.getSelectedParticipant(C),
                    voiceParticipantsHidden: O.default.getVoiceParticipantsHidden(C),
                    userParticipantCount: O.default.getUserParticipantCount(C)
                }), [C]), V = (0, y.default)(n), {
                    preventIdle: B,
                    allowIdle: H
                } = (0, S.usePreventIdle)("popup"), G = [];
                if (V) {
                    let e = (null == j ? void 0 : j.type) === D.ParticipantTypes.STREAM ? (0, p.decodeStreamKey)(j.id) : void 0,
                        t = (null == j ? void 0 : j.type) === D.ParticipantTypes.ACTIVITY ? j.id : void 0;
                    G.push((0, a.jsx)(x.default, {
                        className: F.button,
                        channel: n,
                        applicationId: t,
                        stream: e,
                        exitFullScreen: u,
                        analyticsLocation: n.type === U.ChannelTypes.GUILD_VOICE ? U.AnalyticsPages.GUILD_CHANNEL : U.AnalyticsPages.DM_CHANNEL
                    }, "invite-button"))
                }
                return M && G.push((0, a.jsx)(k, {
                    channelId: C,
                    guildId: n.guild_id
                }, "current-speaker")), G.push((0, a.jsx)(h.default, {
                    className: F.button,
                    channelId: C
                }, "clips-enabled-indicator")), (null == j ? void 0 : j.type) === D.ParticipantTypes.STREAM && (G.push((0, a.jsx)(g.default, {
                    className: F.button,
                    participant: j
                }, "warning")), G.push((0, a.jsx)(m.default, {
                    size: L.default.Sizes.LARGE,
                    className: F.button,
                    participant: j,
                    showQuality: !0
                }, "live-indicator"))), M && G.push((0, a.jsx)(d.Popout, {
                    position: "bottom",
                    renderPopout: () => (0, a.jsx)(_.default, {
                        children: (0, a.jsx)(P.default, {
                            channel: n
                        })
                    }),
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return (0, l.createElement)(N.default, {
                            ...e,
                            isActive: n,
                            count: w,
                            key: "call-members",
                            className: F.button
                        })
                    }
                }, "call-members-popout")), i && G.push(null != j ? (0, a.jsx)(v.default, {
                    className: F.button,
                    channelId: C
                }, "deselect-participant") : (0, a.jsx)(A.default, {
                    className: F.button,
                    channelId: C,
                    isHorizontal: !0
                }, "select-participant")), !t && G.push((0, a.jsx)(f.default, {
                    className: F.button
                }, "clips")), G.push((0, a.jsx)(E.default, {
                    onOpen: B,
                    onClose: H,
                    className: F.button
                }, "recents")), G.push((0, a.jsx)(c.CallscopeChannelCallIssueMarker, {
                    className: F.button
                }, "callscope-marker")), G.push((0, a.jsx)(d.Popout, {
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(_.default, {
                            children: (0, a.jsx)(b.default, {
                                channelId: C,
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
                        return (0, l.createElement)(T.default, {
                            ...e,
                            key: "more-options",
                            isActive: n,
                            className: F.lastButton
                        })
                    }
                }, "more-options-popout")), !r && (G.push((0, a.jsx)(R.default.Divider, {
                    className: F.divider
                }, "divider")), G.push((0, a.jsx)(I.ChatButton, {
                    channelId: n.id,
                    className: F.chatButtonSpacer,
                    disabled: !0
                }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
                    children: G
                })
            }