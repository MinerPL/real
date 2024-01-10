            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                o = n("308289"),
                u = n("789394"),
                d = n("244201"),
                c = n("204947"),
                f = n("442939"),
                h = n("207273"),
                p = n("679653"),
                m = n("619335"),
                E = n("534222"),
                C = n("822516"),
                g = n("941298"),
                S = n("539938"),
                _ = n("557809"),
                I = n("367376"),
                T = n("616718"),
                v = n("550410"),
                x = n("957255"),
                N = n("953109"),
                A = n("832132"),
                M = n("664336"),
                R = n("439932"),
                j = n("191145"),
                L = n("598785"),
                O = n("2830"),
                y = n("836087"),
                P = n("843624"),
                b = n("99795"),
                D = n("49111"),
                U = n("843455"),
                w = n("782340"),
                F = n("125738"),
                k = n("632215");

            function V(e) {
                let {
                    focusedParticipant: t,
                    channel: n
                } = e, l = (0, d.useAppContext)(), s = (0, i.useStateFromStores)([j.default], () => j.default.getLayout(n.id, l));
                return (0, a.jsx)(v.default, {
                    children: (0, a.jsx)(y.default, {
                        className: F.participants,
                        participant: t,
                        maxVisibleUsers: 5,
                        guildId: n.getGuildId(),
                        channelId: n.id,
                        disableInteraction: l === D.AppContext.POPOUT || s === D.ChannelLayouts.FULL_SCREEN
                    })
                })
            }

            function B(e) {
                let {
                    user: t,
                    channel: n,
                    stream: l,
                    color: s
                } = e, i = (0, T.default)(n, t, l);
                return null == t || null == l ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.default, {
                        className: F.avatar,
                        size: r.AvatarSizes.SIZE_24,
                        user: t,
                        animate: !1
                    }), (0, a.jsx)(r.Text, {
                        className: F.playingText,
                        variant: "text-md/medium",
                        color: s,
                        children: i
                    })]
                })
            }

            function H(e) {
                let t, {
                        focusedApplication: n,
                        focusedParticipant: l,
                        channel: s
                    } = e,
                    i = (0, L.default)(s, !0),
                    o = (0, E.useActiveEvent)(s.id),
                    u = null != o ? (0, C.getNextRecurrenceIdInEvent)(o) : null,
                    d = null != o;
                if ((null == l ? void 0 : l.type) === b.ParticipantTypes.ACTIVITY) null != n && (t = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(M.default.Divider, {
                        className: F.divider
                    }), (0, a.jsx)(N.default, {
                        game: n,
                        className: F.activityIcon
                    }), (0, a.jsx)(r.Text, {
                        className: F.playingText,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.default)(n.name)
                    }), i && (0, a.jsx)(V, {
                        channel: s,
                        focusedParticipant: l
                    })]
                }));
                else if ((null == l ? void 0 : l.type) === b.ParticipantTypes.STREAM) {
                    let e = l.user,
                        n = l.stream;
                    t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(M.default.Divider, {
                            className: F.divider
                        }), (0, a.jsx)(B, {
                            user: e,
                            channel: s,
                            stream: n,
                            color: i ? "header-primary" : "none"
                        }), i && (0, a.jsx)(V, {
                            channel: s,
                            focusedParticipant: l
                        })]
                    })
                } else d && (t = (0, a.jsx)(g.default, {
                    guildEvent: o,
                    recurrenceId: u
                }));
                return (0, a.jsx)("div", {
                    className: F.container,
                    children: t
                })
            }

            function G(e) {
                let {
                    channel: t,
                    guild: l,
                    appContext: o,
                    inCall: d,
                    isChatOpen: c,
                    exitFullScreen: E
                } = e, {
                    focusedParticipant: C
                } = (0, i.useStateFromStoresObject)([j.default], () => ({
                    focusedParticipant: j.default.getSelectedParticipant(t.id),
                    participantsOpen: j.default.getParticipantsOpen(t.id)
                }), [t.id]), g = (0, p.default)(t), T = (0, m.default)(t), [v] = (0, f.default)((null == C ? void 0 : C.type) === b.ParticipantTypes.ACTIVITY ? [C.id] : []), N = w.default.Messages.VOICE_CHANNEL;
                t.isDM() ? N = w.default.Messages.DM : t.isGroupDM() && (N = w.default.Messages.GROUP_DM);
                let {
                    enabled: L,
                    left: y
                } = u.ChannelEmojisExperiment.useExperiment({
                    location: "7b48cc_2"
                }, {
                    autoTrackExposure: !1
                }), V = L && (0, a.jsx)(_.ChannelEmoji, {
                    channel: t
                }), B = (0, i.useStateFromStores)([h.default], () => h.default.getChannelStatus(t)), G = t.isGuildVoice() && d && null != B && B.length > 0, W = (0, i.useStateFromStores)([x.default], () => x.default.can(D.Permissions.SET_VOICE_CHANNEL_STATUS, t)), Y = G ? (0, a.jsx)(r.Tooltip, {
                    text: w.default.Messages.VOICE_CHANNEL_SET_STATUS,
                    delay: 500,
                    position: "bottom",
                    shouldShow: W,
                    children: e => (0, a.jsxs)(r.Clickable, {
                        ...e,
                        className: s(F.channelStatusClickable, {
                            [F.hoverable]: W
                        }),
                        onClick: W ? z : void 0,
                        children: [(0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            className: s(F.channelStatus, k.markup, {
                                [F.hoverable]: W
                            }),
                            children: I.default.parseVoiceChannelStatus(B, !0, {
                                channelId: t.id
                            })
                        }), W && (0, a.jsx)(A.default, {
                            className: s(F.pencilIcon, F.hoverable),
                            width: 14,
                            height: 14
                        })]
                    })
                }) : null;

                function z() {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("843624").then(n.bind(n, "843624"));
                        return n => (0, a.jsx)(e, {
                            channel: t,
                            ...n
                        })
                    }, {
                        modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY
                    })
                }
                return (0, a.jsx)("div", {
                    className: F.subtitleContainer,
                    children: (0, a.jsxs)(M.default, {
                        onDoubleClick: S.handleDoubleClick,
                        transparent: !0,
                        className: (0, R.getThemeClass)(U.ThemeTypes.DARK),
                        childrenBottom: Y,
                        toolbar: (0, a.jsx)(O.default, {
                            inPopout: o === D.AppContext.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: d,
                            isChatOpen: c,
                            exitFullScreen: E
                        }),
                        children: [y && V, null != T ? (0, a.jsx)(M.default.Icon, {
                            icon: T,
                            disabled: !0,
                            "aria-label": N
                        }) : null, !y && V, (0, a.jsx)(M.default.Title, {
                            children: g
                        }), (0, a.jsx)(_.HeaderGuildBreadcrumb, {
                            channel: t,
                            guild: l
                        }), (0, a.jsx)(H, {
                            focusedApplication: v,
                            focusedParticipant: C,
                            channel: t
                        })]
                    })
                })
            }