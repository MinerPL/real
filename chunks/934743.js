            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eT
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("446674"),
                d = n("151426"),
                c = n("669491"),
                f = n("77078"),
                h = n("636974"),
                C = n("255397"),
                p = n("406189"),
                m = n("990766"),
                E = n("832627"),
                g = n("86621"),
                I = n("206230"),
                S = n("550766"),
                _ = n("191225"),
                N = n("871388"),
                T = n("442939"),
                A = n("713726"),
                L = n("705565"),
                v = n("858944"),
                x = n("228854"),
                R = n("243632"),
                M = n("180273"),
                O = n("579565"),
                y = n("917973"),
                D = n("48683"),
                b = n("374014"),
                j = n("223913"),
                G = n("479788"),
                U = n("560367"),
                P = n("293383"),
                w = n("375202"),
                F = n("16916"),
                B = n("233069"),
                V = n("373469"),
                H = n("271938"),
                k = n("42203"),
                Y = n("923959"),
                K = n("305961"),
                W = n("42887"),
                Z = n("957255"),
                z = n("824563"),
                X = n("568307"),
                Q = n("18494"),
                q = n("101125"),
                J = n("703370"),
                $ = n("953109"),
                ee = n("37785"),
                et = n("491605"),
                en = n("437825"),
                el = n("893011"),
                ea = n("76539"),
                es = n("985622"),
                ei = n("619911"),
                er = n("962541"),
                eo = n("762489"),
                eu = n("329858"),
                ed = n("956089"),
                ec = n("980423"),
                ef = n("599110"),
                eh = n("773336"),
                eC = n("974165"),
                ep = n("733335"),
                em = n("49111"),
                eE = n("272505"),
                eg = n("411511"),
                eI = n("782340"),
                eS = n("333695");
            let e_ = (0, E.default)(function(e) {
                let {
                    message: t
                } = e;
                return (0, l.jsx)(eo.default, {
                    children: t
                })
            });
            class eN extends a.PureComponent {
                componentDidUpdate(e) {
                    !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({
                        isDropsActivityPanelTooltipOpen: !1
                    })
                }
                isJoinableActivity() {
                    let {
                        application: e,
                        activity: t,
                        embeddedActivity: n
                    } = this.props;
                    return null != e && (null != n ? n.application_id === e.id : null != t && t.application_id === e.id && t.type === em.ActivityTypes.PLAYING && (0, N.default)(t, em.ActivityFlags.JOIN))
                }
                renderGoLiveButton() {
                    let e, t, n, a;
                    let {
                        canGoLive: s,
                        guildId: i,
                        isStreaming: r,
                        channel: o,
                        canStream: u,
                        runningGame: d,
                        embeddedActivity: c
                    } = this.props;
                    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = es.default, a = eI.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = ei.default, a = null != d ? eI.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
                        game: d.name
                    }) : eI.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = ei.default, a = null != o && (0, B.isVoiceChannel)(o.type) ? eI.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? eI.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : eI.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
                        className: eS.panelButtonContainer,
                        children: (0, l.jsx)(er.default, {
                            tooltipText: a,
                            disabled: e,
                            onClick: t,
                            icon: n,
                            iconForeground: eS.actionIcon
                        })
                    })) : null
                }
                renderInviteButton() {
                    let {
                        embeddedActivity: e
                    } = this.props;
                    return this.isJoinableActivity() && null == e ? (0, l.jsx)(er.default, {
                        tooltipText: eI.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                        onClick: this.handleClickInviteButton,
                        icon: ea.default,
                        iconForeground: eS.actionIcon
                    }) : null
                }
                renderDropsButton() {
                    let {
                        dropsTooltipAction: e,
                        dropsPartnerGame: t
                    } = this.props;
                    if (null == t) return null;
                    let n = this.state.isDropsActivityPanelTooltipOpen,
                        a = () => this.setState({
                            isDropsActivityPanelTooltipOpen: !1
                        });
                    return (0, l.jsx)(f.Popout, {
                        shouldShow: n,
                        position: "top",
                        align: "center",
                        onRequestClose: a,
                        renderPopout: () => (0, l.jsx)(D.default, {
                            partnerGame: t,
                            tooltipAction: e,
                            onClose: a
                        }),
                        children: () => (0, l.jsxs)(l.Fragment, {
                            children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(er.default, {
                                "aria-label": eI.default.Messages.DROPS_ENABLED,
                                tooltipText: n ? null : eI.default.Messages.DROPS_ENABLED,
                                onClick: this.handleClickDropsButton,
                                icon: y.default
                            })]
                        })
                    })
                }
                renderLeaveEmbeddedActivityButton() {
                    let {
                        embeddedActivity: e,
                        channel: t
                    } = this.props;
                    return null == e || null == t ? null : (0, l.jsx)(er.default, {
                        tooltipText: eI.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                        onClick: this.handleClickLeaveEmbeddedActivityButton(e.application_id, t),
                        icon: el.default,
                        iconForeground: eS.actionIcon
                    })
                }
                renderBroadcastButton() {
                    let {
                        channel: e
                    } = this.props;
                    return null != e && (0, B.isVoiceChannel)(e.type) ? null : (0, l.jsx)(eC.default, {})
                }
                renderBroadcastSettingsButton() {
                    let {
                        broadcast: e
                    } = this.props;
                    return null == e ? null : (0, l.jsx)(ep.default, {})
                }
                renderSparkles() {
                    let {
                        useReducedMotion: e
                    } = this.props;
                    async function t() {
                        let {
                            default: e
                        } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                        return e
                    }
                    return (0, l.jsx)("div", {
                        className: eS.sparkleContainer,
                        children: (0, l.jsx)(et.default, {
                            importData: t,
                            shouldAnimate: !e,
                            className: eS.sparkles
                        })
                    })
                }
                renderActions() {
                    let e = this.renderGoLiveButton(),
                        t = this.renderDropsButton(),
                        n = this.renderInviteButton(),
                        a = this.renderLeaveEmbeddedActivityButton(),
                        s = this.renderClipsButton(),
                        i = this.renderBroadcastButton(),
                        r = this.renderBroadcastSettingsButton();
                    return null == e && null == n && null == a ? null : (0, l.jsxs)("div", {
                        className: eS.actions,
                        children: [i, e, r, n, null == e ? a : s, t]
                    })
                }
                getGameName() {
                    let {
                        runningGame: e,
                        application: t
                    } = this.props;
                    return null != t ? t.name : null != e ? e.name : eI.default.Messages.STATUS_UNKNOWN
                }
                renderGame() {
                    let {
                        isStreaming: e,
                        dropsPartnerGame: t,
                        application: n,
                        runningGame: a
                    } = this.props, s = this.getGameName();
                    return (0, l.jsxs)("div", {
                        className: i(eS.gameWrapper, {
                            [eS.clickableGameWrapper]: null != n
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: eS.gameIconWrapper,
                            children: [(0, l.jsx)($.default, {
                                className: eS.gameIcon,
                                game: n,
                                pid: null == a ? void 0 : a.pid
                            }), e ? (0, l.jsx)(en.default, {
                                className: eS.liveBadge
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: i(eS.info, {
                                [eS.infoWithDrops]: null != t
                            }),
                            children: null != s ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(eu.default, {
                                    children: s
                                }), null != t && (0, l.jsx)("div", {
                                    className: eS.dropsBadgeWrapper,
                                    children: (0, l.jsx)(ed.TextBadge, {
                                        text: eI.default.Messages.DROPS_AVAILABLE,
                                        color: c.default.unsafe_rawColors.BRAND_500.css,
                                        className: eS.dropsBadge
                                    })
                                })]
                            }) : null
                        })]
                    })
                }
                renderScreenshare() {
                    let {
                        isStreaming: e,
                        dropsPartnerGame: t,
                        streamMetadata: n
                    } = this.props, {
                        title: a,
                        sanitizedTitle: s
                    } = (0, U.default)(n);
                    return (0, l.jsxs)("div", {
                        className: eS.gameWrapper,
                        children: [e ? (0, l.jsx)(P.default, {
                            title: s
                        }) : (0, l.jsx)(ec.default, {
                            look: ec.default.Looks.GRAY,
                            size: ec.default.Sizes.SMALL,
                            className: eS.liveIndicator
                        }), (0, l.jsxs)("div", {
                            className: i(eS.info, {
                                [eS.infoWithDrops]: null != t
                            }),
                            children: [(0, l.jsx)(eu.default, {
                                children: a
                            }), null != t && (0, l.jsx)("div", {
                                className: eS.dropsBadgeWrapper,
                                children: (0, l.jsx)(ed.TextBadge, {
                                    text: eI.default.Messages.DROPS_AVAILABLE,
                                    color: c.default.unsafe_rawColors.BRAND_500.css,
                                    className: eS.dropsBadge
                                })
                            })]
                        })]
                    })
                }
                renderEmbeddedActivity() {
                    let e;
                    let {
                        application: t,
                        embeddedActivity: n,
                        channel: a
                    } = this.props;
                    if (null == n || null == a) return null;
                    let s = {
                        start: n.connectedSince
                    };
                    return e = null != a.guild_id ? em.Routes.CHANNEL(a.guild_id, a.id) : em.Routes.CHANNEL(em.ME, a.id), (0, l.jsxs)("div", {
                        className: eS.gameWrapper,
                        children: [(0, l.jsx)($.default, {
                            className: eS.gameIcon,
                            game: t
                        }), (0, l.jsxs)("div", {
                            className: eS.info,
                            children: [(0, l.jsx)(ee.default, {
                                href: e,
                                onClick: this.handleApplicationLinkClick,
                                children: (0, l.jsx)(eu.default, {
                                    className: eS.activityName,
                                    children: n.name
                                })
                            }), (0, l.jsx)(e_, {
                                timestamps: s
                            })]
                        })]
                    })
                }
                render() {
                    let {
                        canGoLive: e,
                        embeddedActivity: t,
                        runningGame: n,
                        isStreaming: a,
                        streamMetadata: s,
                        className: r
                    } = this.props;
                    return a || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, l.jsx)("div", {
                        className: i(eS.panel, r),
                        children: (0, l.jsxs)("div", {
                            className: eS.body,
                            children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
                        })
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isDropsActivityPanelTooltipOpen: !1,
                        showDropsSparkles: this.props.showDropsSparkles
                    }, this.startBroadcast = () => {
                        let {
                            stream: e,
                            channel: t,
                            runningGame: n
                        } = this.props, l = null != t && (0, B.isVoiceChannel)(t.type) ? t : null;
                        null != l && null != n && (null == e ? (0, m.createBroadcastChannelOrStartStream)({
                            channelId: l.id,
                            pid: n.pid
                        }) : (0, A.startBroadcastForStream)((0, b.encodeStreamKey)(e), n.pid))
                    }, this.handleClickGoLiveButton = () => {
                        let {
                            guildId: e,
                            channel: t,
                            canStartBroadcast: a
                        } = this.props, s = null != t && (0, B.isVoiceChannel)(t.type) ? t : null, i = null != s ? s.getGuildId() : e;
                        if ((null == s ? void 0 : s.isBroadcastChannel()) && a) {
                            (0, v.openStartBroadcastConfirmModal)(this.startBroadcast);
                            return
                        }(0, f.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("451863").then(n.bind(n, "451863"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                selectSource: !1,
                                guildId: i,
                                analyticsLocation: em.AnalyticsLocations.ACTIVITY_PANEL
                            })
                        }).then(e => {
                            null != e && (this.modalKey = e)
                        })
                    }, this.handleClickStopStreamingButton = () => {
                        let {
                            stream: e,
                            channel: t,
                            userId: n
                        } = this.props, l = null != t && (0, B.isVoiceChannel)(t.type) ? t : null;
                        if ((null == l ? void 0 : l.isBroadcastChannel()) && (null == l ? void 0 : l.isOwner(n))) {
                            (0, v.openStopBroadcastConfirmModal)(() => (0, F.default)(e));
                            return
                        }(0, F.default)(e)
                    }, this.handleClickInviteButton = () => {
                        let {
                            activity: e,
                            analyticsContext: t
                        } = this.props;
                        o(null != e, "Received null activity"), ef.default.track(em.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: e.application_id,
                            location: t.location
                        }), (0, h.openModal)(e, !1)
                    }, this.handleClickDropsButton = () => {
                        let {
                            dropsPartnerGame: e,
                            dropsTooltipAction: t,
                            userId: n
                        } = this.props;
                        if (null == e) return;
                        let l = (0, O.getDrop)(e);
                        null != l && (ef.default.track(em.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
                            user_id: n,
                            drops_quest_id: l.dropsQuestId,
                            game_id: l.dropsGameId,
                            game_name: l.title.toLowerCase(),
                            show_sparkles: this.state.showDropsSparkles,
                            tooltip_action: t
                        }), this.setState({
                            isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
                            showDropsSparkles: !1
                        }))
                    }, this.handleClickLeaveEmbeddedActivityButton = (e, t) => () => {
                        (0, S.stopEmbeddedActivity)({
                            channelId: t.id,
                            applicationId: e
                        })
                    }, this.renderClipsButton = () => {
                        let {
                            stream: e
                        } = this.props;
                        return null == e ? null : (0, l.jsx)(x.default, {})
                    }, this.handleApplicationLinkClick = () => {
                        var e;
                        let {
                            channel: t,
                            embeddedActivity: n
                        } = this.props;
                        o(null != t, "Channel is null during navigation click"), o(null != n, "Activity null during navigation click"), (0, B.isVoiceChannel)(t.type) && C.default.selectParticipant(t.id, n.application_id), p.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : em.ME, t.id), (0, B.isTextChannel)(t.type) && (0, S.updateActivityPanelMode)(eE.ActivityPanelModes.PANEL)
                    }
                }
            }
            var eT = (0, g.default)(function(e) {
                var t;
                let {
                    guildId: n,
                    ...a
                } = e, s = (0, u.useStateFromStores)([H.default], () => H.default.getId()), i = (0, u.useStateFromStores)([X.default, J.default], () => (0, w.default)(X.default, J.default)), r = (0, u.useStateFromStores)([Q.default, k.default], () => k.default.getChannel(Q.default.getVoiceChannelId())), o = (0, u.useStateFromStores)([_.default], () => _.default.getConnectedActivityChannelId()), c = (0, u.useStateFromStores)([k.default], () => k.default.getChannel(o)), [f, h] = (0, u.useStateFromStoresArray)([V.default], () => [V.default.getCurrentUserActiveStream(), V.default.getStreamerActiveStreamMetadata()]), C = (0, u.useStateFromStores)([I.default], () => I.default.useReducedMotion), p = (0, u.useStateFromStores)([M.default], () => M.default.getActivityPanelTooltipAction()), {
                    partnerGame: m,
                    dropsActivityPanelExperienceBlocked: E,
                    showDropsSparkles: g
                } = (0, R.useActivityPanelDrop)(eg.PartnerGame.FORTNITE, i, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), S = (0, u.useStateFromStores)([_.default], () => null != c ? _.default.getSelfEmbeddedActivityForChannel(c.id) : null), N = (0, u.useStateFromStores)([K.default, Z.default, Y.default], () => {
                    if (null != r) return j.canStreamInChannel(r, K.default, Z.default, !1);
                    if (null != n) {
                        let e = j.getStreamEligibleChannels(Y.default.getChannels(n), K.default, Z.default);
                        return e.length > 0
                    }
                    return !1
                }), [A] = (0, T.default)([null !== (t = function() {
                    if (null != h && null != h.id) return h.id;
                    if (null != i && null != i.id) return i.id;
                    if (null != S) return S.application_id
                }()) && void 0 !== t ? t : ""]), v = (0, u.useStateFromStores)([W.default], () => (0, G.default)(W.default) && (0, eh.isWindows)()), x = (0, u.useStateFromStores)([z.default], () => null != s ? z.default.findActivity(s, e => e.type === em.ActivityTypes.PLAYING) : null), O = null != f && f.ownerId === s && f.state !== em.ApplicationStreamStates.ENDED, y = (0, u.useStateFromStores)([q.default], () => q.default.getBroadcast()), D = (0, L.default)() && null != i;
                return (0, l.jsx)(eN, {
                    ...a,
                    guildId: n,
                    canGoLive: v,
                    activity: x,
                    embeddedActivity: S,
                    showDropsSparkles: g,
                    dropsPartnerGame: m,
                    dropsActivityPanelExperienceBlocked: E,
                    userId: s,
                    runningGame: i,
                    application: A,
                    useReducedMotion: C,
                    isStreaming: O,
                    channel: c,
                    canStream: N,
                    dropsTooltipAction: p,
                    stream: f,
                    streamMetadata: h,
                    broadcast: y,
                    canStartBroadcast: D
                })
            })