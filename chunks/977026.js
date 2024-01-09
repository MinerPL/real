            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eC
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("987317"),
                d = n("244201"),
                c = n("191145"),
                f = n("266392"),
                h = n("458685"),
                p = n("338677"),
                m = n("76393"),
                E = n("479788"),
                C = n("398604"),
                g = n("109526"),
                S = n("487984"),
                _ = n("817963"),
                I = n("999180"),
                T = n("830210"),
                v = n("289180"),
                x = n("244390"),
                N = n("581389"),
                A = n("19065"),
                M = n("124824"),
                R = n("981913"),
                j = n("785344"),
                L = n("116439"),
                O = n("271938"),
                y = n("42887"),
                b = n("957255"),
                P = n("18494"),
                D = n("697218"),
                U = n("887657"),
                w = n("293137"),
                F = n("381546"),
                k = n("293499"),
                V = n("277174"),
                B = n("711486"),
                H = n("394640"),
                G = n("343571"),
                W = n("751661"),
                Y = n("244480"),
                z = n("716214"),
                K = n("619395"),
                Z = n("923510"),
                X = n("325861"),
                J = n("834052"),
                q = n("819450"),
                Q = n("111542"),
                $ = n("924872"),
                ee = n("274438"),
                et = n("734019"),
                en = n("519581"),
                ea = n("58763"),
                el = n("709752"),
                es = n("49111"),
                ei = n("782340"),
                er = n("134095");

            function eu(e) {
                let {
                    channel: t,
                    appContext: n
                } = e, a = (0, et.default)(t);
                if (a) {
                    (0, W.openEndStageModal)(t, n);
                    return
                }
                o.default.disconnect()
            }

            function eo(e) {
                var t, n;
                let {
                    channel: l
                } = e, s = (0, en.default)(l.id), [i, u] = (0, el.default)(l), o = (0, r.useStateFromStores)([b.default], () => b.default.can(es.Permissions.REQUEST_TO_SPEAK, l));
                if (s) return null;
                return (0, a.jsx)(R.CenterControlButton, {
                    isActive: i,
                    label: (t = i, n = o, t ? ei.default.Messages.AUDIENCE_LOWER_HAND : n ? ei.default.Messages.AUDIENCE_RAISE_HAND_CTA : ei.default.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
                    iconComponent: () => (0, a.jsx)(B.default, {
                        className: i ? er.raisedHandButtonIconActive : er.raisedHandButtonIcon
                    }),
                    onClick: u,
                    className: er.buttonSpacing,
                    disabled: !o && !i
                })
            }
            let ed = l.memo(function(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([P.default], () => P.default.getVoiceChannelId() === t.id, [t.id]);
                return (0, a.jsxs)("div", {
                    className: er.container,
                    children: [(0, a.jsx)(ep, {
                        channelId: t.id
                    }), n ? (0, a.jsx)(eo, {
                        channel: t
                    }) : null, (0, a.jsx)(ef, {
                        channel: t
                    })]
                })
            });

            function ec(e) {
                let {
                    onClick: t
                } = e;
                return (0, a.jsx)(u.Button, {
                    size: u.Button.Sizes.MEDIUM,
                    color: er.primaryButtonColor,
                    className: i(er.buttonSpacing, er.buttonWithTextButton),
                    onClick: t,
                    children: (0, a.jsxs)("div", {
                        className: er.buttonWithTextInnerContainer,
                        children: [(0, a.jsx)(V.default, {
                            height: 24,
                            width: 24,
                            className: er.buttonWithTextIcon
                        }), (0, a.jsx)(u.Text, {
                            color: "none",
                            variant: "text-sm/medium",
                            children: ei.default.Messages.MODERATOR_RAISE_OWN_HAND
                        })]
                    })
                })
            }

            function ef(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, d.useAppContext)(), {
                    canManageGuildEvent: s
                } = (0, _.useManageResourcePermissions)(t), o = (0, r.useStateFromStores)([J.default], () => J.default.getStageInstanceByChannel(t.id), [t.id]), c = (0, r.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(null == o ? void 0 : o.guild_scheduled_event_id)), f = (0, r.useStateFromStores)([P.default], () => P.default.getVoiceChannelId() === t.id, [t.id]), {
                    suppress: h
                } = (0, x.default)(t), p = O.default.getId(), [m] = (0, el.default)(t), E = X.default.isModerator(p, t.id), g = (0, K.useCanModerateRequestToSpeak)(t.id), S = s(c);
                return f ? (E || S) && null != o ? (0, a.jsx)(u.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: s
                        } = e;
                        return (0, a.jsx)(M.default, {
                            children: (0, a.jsx)(u.Menu, {
                                navId: "exit-options",
                                "aria-label": ei.default.Messages.SET_STATUS,
                                onClose: s,
                                onSelect: n,
                                children: (0, a.jsx)(u.MenuItem, {
                                    id: "end-stage",
                                    color: "danger",
                                    action: () => (0, W.openEndGuildEventConfirmationModal)(t, l),
                                    label: ei.default.Messages.END_GUILD_EVENT_FOR_EVERYONE,
                                    icon: F.default
                                })
                            })
                        })
                    },
                    align: "center",
                    position: "top",
                    animation: u.Popout.Animation.FADE,
                    children: (e, n) => {
                        let {
                            onClick: s
                        } = e, {
                            isShown: i
                        } = n;
                        return (0, a.jsx)(R.CenterControlButton, {
                            className: er.buttonSpacing,
                            label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
                            color: "red",
                            iconComponent: () => (0, a.jsx)(w.default, {
                                height: 24,
                                width: 24
                            }),
                            onClick: () => eu({
                                channel: t,
                                appContext: l
                            }),
                            onPopoutClick: s,
                            popoutOpen: i
                        })
                    }
                }) : h && !g || m ? (0, a.jsx)(u.Button, {
                    size: u.Button.Sizes.MEDIUM,
                    color: u.Button.Colors.RED,
                    className: i(er.buttonSpacing, er.buttonWithTextButton),
                    onClick: () => eu({
                        channel: t,
                        appContext: l
                    }),
                    children: (0, a.jsxs)("div", {
                        className: er.buttonWithTextInnerContainer,
                        children: [(0, a.jsx)(w.default, {
                            height: 24,
                            width: 24,
                            className: er.buttonWithTextIcon
                        }), (0, a.jsx)(u.Text, {
                            color: "none",
                            variant: "text-sm/medium",
                            children: ei.default.Messages.AUDIENCE_DISCONNECT
                        })]
                    })
                }) : (0, a.jsx)(R.CenterControlButton, {
                    className: er.buttonSpacing,
                    label: ei.default.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
                    color: "red",
                    iconComponent: () => (0, a.jsx)(w.default, {
                        height: 24,
                        width: 24
                    }),
                    onClick: () => eu({
                        channel: t,
                        appContext: l
                    })
                }) : (0, a.jsx)(u.Button, {
                    size: u.Button.Sizes.MEDIUM,
                    color: u.Button.Colors.GREEN,
                    className: i(er.buttonSpacing, er.buttonWithTextButton),
                    onClick: () => {
                        var e;
                        return e = t, void(0, z.connectToStage)(e)
                    },
                    children: (0, a.jsxs)("div", {
                        className: er.buttonWithTextInnerContainer,
                        children: [(0, a.jsx)(U.default, {
                            height: 24,
                            width: 24,
                            className: er.buttonWithTextIcon
                        }), (0, a.jsx)(u.Text, {
                            color: "none",
                            variant: "text-sm/medium",
                            children: ei.default.Messages.STAGE_CHANNEL_JOIN
                        })]
                    })
                })
            }

            function eh(e) {
                let {
                    onClick: t
                } = e;
                return (0, a.jsx)(u.Button, {
                    size: u.Button.Sizes.MEDIUM,
                    color: er.primaryButtonColor,
                    className: i(er.buttonSpacing, er.buttonWithTextButton),
                    onClick: t,
                    children: (0, a.jsxs)("div", {
                        className: er.buttonWithTextInnerContainer,
                        children: [(0, a.jsx)(k.default, {
                            height: 24,
                            width: 24,
                            className: er.buttonWithTextIcon
                        }), (0, a.jsx)(u.Text, {
                            color: "none",
                            variant: "text-sm/medium",
                            children: ei.default.Messages.MOVE_ME_TO_AUDIENCE
                        })]
                    })
                })
            }

            function ep(e) {
                let {
                    channelId: t
                } = e, n = (0, r.useStateFromStores)([ee.default], () => ee.default.isMuted()), l = (0, $.useShowStageMusicMuteButton)(t), s = (0, r.useStateFromStores)([ee.default], () => ee.default.shouldPlay());
                return l ? (0, a.jsx)(R.CenterControlButton, {
                    isActive: n,
                    className: er.buttonSpacing,
                    label: n ? ei.default.Messages.STAGE_MUSIC_UNMUTE : ei.default.Messages.STAGE_MUSIC_MUTE,
                    iconComponent: () => n ? (0, a.jsx)(G.default, {
                        height: 24,
                        width: 24
                    }) : (0, a.jsx)(H.default, {
                        height: 24,
                        width: 24
                    }),
                    onClick: () => (0, Q.updateStageMusicMuted)(!n)
                }) : (0, a.jsx)(R.CenterControlButton, {
                    isActive: s,
                    className: er.buttonSpacing,
                    label: s ? ei.default.Messages.STAGE_MUSIC_MUTE : ei.default.Messages.STAGE_MUSIC_UNMUTE,
                    iconComponent: () => s ? (0, a.jsx)(H.default, {
                        height: 24,
                        width: 24
                    }) : (0, a.jsx)(G.default, {
                        height: 24,
                        width: 24
                    }),
                    onClick: () => (0, Q.updateStageMusicShouldPlay)(!s)
                })
            }
            let em = l.memo(function(e) {
                let {
                    channel: t
                } = e, {
                    suppress: n,
                    selfMute: l,
                    mute: s
                } = (0, x.default)(t), o = (0, K.useCanModerateRequestToSpeak)(t.id), d = (0, r.useStateFromStores)([m.default], () => null != m.default.getAwaitingRemoteSessionInfo()), {
                    cameraUnavailable: C,
                    enabled: g
                } = (0, I.default)(), S = (0, v.default)(t), {
                    limit: _,
                    reachedLimit: R
                } = (0, T.default)(t), O = (0, r.useStateFromStores)([D.default], () => D.default.getCurrentUser()), b = (0, r.useStateFromStores)([y.default], () => (0, E.default)(y.default)), U = (0, r.useStateFromStores)([P.default], () => P.default.getVoiceChannelId() === t.id, [t.id]), w = (0, r.useStateFromStores)([c.default], () => c.default.getStreamParticipants(t.id)[0], [t.id]), F = (0, q.useStageHasMedia)(t.id), k = _ > 0, V = R && !F || null != w && w.user.id !== (null == O ? void 0 : O.id);
                if (null == O) return null;
                let B = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.Popout, {
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, a.jsx)(M.default, {
                                children: (0, a.jsx)(h.default, {
                                    onClose: t
                                })
                            })
                        },
                        position: "top",
                        align: "center",
                        animation: u.Popout.Animation.FADE,
                        children: (e, t) => {
                            let {
                                onClick: n
                            } = e, {
                                isShown: l
                            } = t;
                            return (0, a.jsx)(L.default, {
                                centerButton: !0,
                                hasPermission: S,
                                enabled: g,
                                cameraUnavailable: C,
                                onChange: N.handleToggleVideo,
                                onCameraUnavailable: A.default,
                                channelLimitReached: R,
                                channelLimit: _,
                                popoutOpen: l,
                                onPopoutClick: n
                            })
                        }
                    }), (0, a.jsx)(N.GoLiveButton, {
                        channel: t,
                        currentUser: O,
                        exitFullScreen: () => null,
                        canGoLive: b,
                        hasPermission: S,
                        disabled: V
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: er.container,
                    children: [(0, a.jsx)(ep, {
                        channelId: t.id
                    }), U && (0, a.jsx)(eo, {
                        channel: t
                    }), U && !n ? (0, a.jsxs)("div", {
                        className: i(er.avControls, er.buttonSpacing),
                        children: [k && _ > 0 && B, (0, a.jsx)(u.Popout, {
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, a.jsx)(M.default, {
                                    children: (0, a.jsx)(f.default, {
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderOutputDevices: !0
                                    })
                                })
                            },
                            align: "center",
                            position: "top",
                            animation: u.Popout.Animation.FADE,
                            children: (e, t) => {
                                let {
                                    onClick: i
                                } = e, {
                                    isShown: r
                                } = t;
                                return (0, a.jsx)(j.default, {
                                    centerButton: !0,
                                    onPopoutClick: i,
                                    selfMute: l,
                                    serverMute: s,
                                    suppress: n,
                                    popoutOpen: r,
                                    onClick: () => (0, p.default)(s, n),
                                    awaitingRemote: d
                                })
                            }
                        })]
                    }) : null, U && o && n && (0, a.jsx)(ec, {
                        onClick: () => (0, Y.audienceAckRequestToSpeak)(t, !1)
                    }), U && !n && (0, a.jsx)(eh, {
                        onClick: () => (0, Y.moveSelfToAudience)(t)
                    }), (0, a.jsx)(ef, {
                        channel: t
                    })]
                })
            });

            function eE(e) {
                let {
                    channel: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: er.container,
                    children: [(0, a.jsx)(ep, {
                        channelId: t.id
                    }), (0, a.jsx)(ef, {
                        channel: t
                    })]
                })
            }
            var eC = l.memo(function(e) {
                let {
                    channel: t,
                    isOnStartStageScreen: n
                } = e, l = (0, en.default)(t.id), s = (0, K.useCanModerateRequestToSpeak)(t.id), i = (0, r.useStateFromStores)([b.default], () => b.default.can(Z.MODERATE_STAGE_CHANNEL_PERMISSIONS, t), [t]), u = (0, ea.default)(t.id), o = (0, r.useStateFromStores)([c.default], () => null != t ? c.default.getSelectedParticipant(t.id) : null), d = !u && null == o;
                return n ? (0, a.jsx)(eE, {
                    channel: t
                }) : l || s ? (0, a.jsxs)("div", {
                    className: er.containerColumn,
                    children: [(0, a.jsxs)("div", {
                        className: er.eventPrompts,
                        children: [d ? (0, a.jsx)(g.default, {
                            channelId: null == t ? void 0 : t.id
                        }) : null, (0, a.jsx)("div", {
                            className: er.separator
                        }), d && i ? (0, a.jsx)(S.default, {
                            highlight: !0,
                            channel: t
                        }) : null, (0, a.jsx)("div", {
                            className: er.separator
                        })]
                    }), (0, a.jsx)(em, {
                        channel: t
                    })]
                }) : (0, a.jsx)(ed, {
                    channel: t
                })
            })