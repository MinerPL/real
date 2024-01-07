            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eq
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("627445"),
                o = n.n(r),
                u = n("90915"),
                d = n("446674"),
                c = n("77078"),
                E = n("629109"),
                f = n("272030"),
                _ = n("406189"),
                h = n("32296"),
                C = n("412026"),
                T = n("86621"),
                I = n("997289"),
                S = n("244201"),
                N = n("266790"),
                A = n("84460"),
                m = n("191225"),
                p = n("372610"),
                g = n("380691"),
                R = n("943349"),
                O = n("702173"),
                L = n("10524"),
                v = n("478272"),
                M = n("812204"),
                P = n("685665"),
                D = n("754493"),
                y = n("458685"),
                x = n("679653"),
                b = n("76393"),
                U = n("261552"),
                G = n("167715"),
                j = n("479788"),
                k = n("16916"),
                w = n("597517"),
                F = n("269596"),
                B = n("38654"),
                H = n("393414"),
                V = n("245463"),
                Y = n("486185"),
                W = n("488464"),
                K = n("998716"),
                z = n("819450"),
                q = n("111542"),
                Q = n("924872"),
                Z = n("274438"),
                X = n("808422"),
                J = n("845579"),
                $ = n("999180"),
                ee = n("830210"),
                et = n("289180"),
                en = n("951691"),
                ea = n("19065"),
                es = n("977347"),
                ei = n("799808"),
                el = n("727284"),
                er = n("116439"),
                eo = n("373469"),
                eu = n("271938"),
                ed = n("42203"),
                ec = n("305961"),
                eE = n("778588"),
                ef = n("42887"),
                e_ = n("957255"),
                eh = n("945956"),
                eC = n("27618"),
                eT = n("697218"),
                eI = n("800762"),
                eS = n("316133"),
                eN = n("145131"),
                eA = n("437825"),
                em = n("142303"),
                ep = n("406019"),
                eg = n("220075"),
                eR = n("82636"),
                eO = n("394832"),
                eL = n("394640"),
                ev = n("343571"),
                eM = n("962541"),
                eP = n("762489"),
                eD = n("599110"),
                ey = n("701909"),
                ex = n("158998"),
                eb = n("452469"),
                eU = n("997769"),
                eG = n("49111"),
                ej = n("533613"),
                ek = n("782340"),
                ew = n("833076"),
                eF = n("926622");

            function eB(e) {
                let t = e.currentTarget;
                eD.default.track(eG.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
                    text: t.text,
                    href: t.href,
                    location: {
                        section: eG.AnalyticsSections.NOISE_CANCELLATION_POPOUT
                    }
                })
            }

            function eH() {
                let e = s.useRef(null);
                (0, c.useFocusLock)(e), s.useEffect(() => {
                    eD.default.track(eG.AnalyticEvents.OPEN_POPOUT, {
                        type: eG.AnalyticsSections.NOISE_CANCELLATION_POPOUT
                    })
                }, []);
                let t = (0, d.useStateFromStores)([ef.default], () => ef.default.getNoiseCancellation());
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: ew.noiseCancellationPopout,
                    children: [(0, a.jsx)(c.FormSwitch, {
                        hideBorder: !0,
                        className: eF.marginBottom4,
                        value: t,
                        onChange: () => E.default.setNoiseCancellation(!t, {
                            section: eG.AnalyticsSections.NOISE_CANCELLATION_POPOUT
                        }),
                        note: ek.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
                        children: ek.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
                    }), (0, a.jsx)(h.default, {
                        title: ek.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
                        notchBackground: h.NotchBackground.BLACK,
                        buttonTest: ek.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
                        buttonStop: ek.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
                        buttonClassName: ew.micTestButton,
                        buttonColor: c.Button.Colors.PRIMARY,
                        location: {
                            section: eG.AnalyticsSections.NOISE_CANCELLATION_POPOUT
                        }
                    }), (0, a.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        className: l(eF.marginBottom8, eF.marginTop20),
                        children: ek.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
                    }), (0, a.jsxs)(eN.default, {
                        justify: eN.default.Justify.BETWEEN,
                        className: ew.footer,
                        children: [(0, a.jsx)(c.Anchor, {
                            href: eG.MarketingURLs.KRISP,
                            onClick: e => eB(e),
                            children: (0, a.jsx)("div", {
                                className: ew.krispLogo
                            })
                        }), (0, a.jsx)(c.Anchor, {
                            href: ey.default.getArticleURL(eG.HelpdeskArticles.NOISE_SUPPRESSION),
                            className: ew.krispLink,
                            onClick: e => eB(e),
                            children: ek.default.Messages.LEARN_MORE
                        })]
                    })]
                })
            }

            function eV() {
                let e = (0, d.useStateFromStores)([Z.default], () => Z.default.isMuted()),
                    t = e ? ek.default.Messages.STAGE_MUSIC_UNMUTE : ek.default.Messages.STAGE_MUSIC_MUTE;
                return (0, a.jsx)(eM.default, {
                    "aria-label": t,
                    tooltipText: t,
                    icon: e ? ev.default : eL.default,
                    onClick: () => (0, q.updateStageMusicMuted)(!e)
                })
            }

            function eY(e) {
                let {
                    channel: t,
                    enableActivities: n,
                    disabled: i
                } = e, r = (0, $.default)(), o = (0, et.default)(t), u = (0, d.useStateFromStoresObject)([m.default], () => null != m.default.getSelfEmbeddedActivityForChannel(t.id)), f = (0, V.default)(t), {
                    reachedLimit: _,
                    limit: h
                } = (0, ee.default)(t), C = s.useCallback(() => {
                    (0, ea.default)()
                }, []), T = (0, S.useAppContext)(), I = s.useCallback(e => {
                    if (ef.default.isVideoEnabled() === e) return;
                    let n = () => {
                        var n;
                        E.default.setVideoEnabled(e), e && (0, H.transitionTo)(eG.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eG.ME, t.id))
                    };
                    e ? (0, el.default)(n, T) : n()
                }, [t, T]), N = u || n || f;
                return (0, a.jsx)(er.VideoButtonWrapper, {
                    onChange: I,
                    onCameraUnavailable: C,
                    hasPermission: o,
                    channelLimit: h,
                    channelLimitReached: _,
                    ...r,
                    enabled: !i && r.enabled,
                    children: e => {
                        let {
                            unavailable: t,
                            active: n,
                            label: s,
                            iconComponent: i,
                            ...r
                        } = e, o = n ? eA.default : em.default, u = (0, a.jsx)(o, {
                            className: l(ew.buttonIcon, {
                                [ew.withText]: !N
                            })
                        });
                        return (0, a.jsx)(c.Popout, {
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, a.jsx)(y.default, {
                                    onClose: t
                                })
                            },
                            position: "top",
                            align: "center",
                            animation: c.Popout.Animation.FADE,
                            children: (e, i) => {
                                let {
                                    onClick: o,
                                    ...d
                                } = e, {
                                    isShown: E
                                } = i;
                                return (0, a.jsx)(c.Tooltip, {
                                    text: s,
                                    children: e => (0, a.jsx)(c.Button, {
                                        ...r,
                                        ...e,
                                        ...d,
                                        onClick: t => {
                                            var n;
                                            r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), E && o(t)
                                        },
                                        onContextMenu: t => {
                                            var n;
                                            o(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
                                        },
                                        size: c.Button.Sizes.SMALL,
                                        className: l(ew.button, ew.buttonColor, {
                                            [ew.buttonActive]: n,
                                            [ew.fauxDisabled]: t,
                                            [ew.disabled]: r.disabled
                                        }),
                                        innerClassName: ew.buttonContents,
                                        wrapperClassName: ew.button,
                                        fullWidth: !0,
                                        children: N ? u : (0, a.jsxs)(eN.default, {
                                            align: eN.default.Align.CENTER,
                                            children: [u, ek.default.Messages.VIDEO]
                                        })
                                    })
                                })
                            }
                        })
                    }
                })
            }

            function eW(e) {
                let {
                    channel: t,
                    enableActivities: n
                } = e, s = (0, S.useAppContext)(), {
                    analyticsLocations: i
                } = (0, P.default)(), r = s === eG.AppContext.POPOUT, o = (0, d.useStateFromStores)([A.default], () => A.default.getIsEnabled(), []), u = t.getGuildId();
                (0, N.useActivitiesRolloutExperiments)(u);
                let E = (0, R.useEmbeddedActivityLaunchability)(t.id),
                    f = (0, R.getEmbeddedActivityLaunchabilityLabel)(E),
                    [_] = (0, d.useStateFromStores)([m.default], () => null != t.id && "" !== t.id ? m.default.getEmbeddedActivitiesForChannel(t.id) : m.NO_ACTIVITIES),
                    {
                        userInActivity: h
                    } = (0, d.useStateFromStoresObject)([m.default], () => ({
                        userInActivity: null != m.default.getSelfEmbeddedActivityForChannel(t.id)
                    })),
                    C = (0, I.useAnalyticsContext)(),
                    T = (0, g.useShowActivityIndicator)(),
                    p = E !== R.EmbeddedActivityLaunchability.CAN_LAUNCH;
                return n ? (0, a.jsx)(c.Tooltip, {
                    text: f,
                    children: e => (0, a.jsxs)(c.Button, {
                        ...e,
                        fullWidth: !0,
                        size: c.Button.Sizes.SMALL,
                        onClick: () => {
                            var n;
                            (0, v.default)({
                                channel: t,
                                guildId: t.guild_id,
                                locationObject: C.location,
                                openInPopout: r,
                                analyticsLocations: i
                            }), null === (n = e.onClick) || void 0 === n || n.call(e)
                        },
                        disabled: p,
                        className: l(ew.button, ew.buttonColor, {
                            [ew.buttonDeveloperActivityShelf]: o,
                            [ew.buttonActive]: h || null != _,
                            [ew.disabled]: p
                        }),
                        innerClassName: ew.buttonContents,
                        wrapperClassName: ew.button,
                        children: [T ? (0, a.jsx)(L.FreeActivityIndicatorDot, {
                            top: -1,
                            right: -1
                        }) : null, (0, a.jsx)(eR.default, {
                            className: ew.buttonIcon
                        })]
                    })
                }) : null
            }

            function eK(e) {
                let t, {
                        channel: n,
                        canGoLive: i,
                        enableActivities: r,
                        disabled: o
                    } = e,
                    u = (0, d.useStateFromStores)([eT.default], () => eT.default.getCurrentUser()),
                    E = (0, d.useStateFromStoresArray)([eo.default], () => eo.default.getAllActiveStreams()),
                    f = (0, et.default)(n),
                    _ = n.getGuildId(),
                    h = (0, d.useStateFromStoresObject)([m.default], () => null != m.default.getSelfEmbeddedActivityForChannel(n.id)),
                    C = (0, V.default)(n),
                    T = s.useCallback(() => {
                        (0, ei.default)(_, n.id, eG.AnalyticsSections.ACTIVITY_PANEL)
                    }, [_, n.id]),
                    I = E.find(e => e.ownerId === (null == u ? void 0 : u.id)),
                    S = (0, en.useOtherStreams)(n, u, E);
                t = null == I ? i ? T : es.default : () => (0, k.default)(I);
                let N = null != I || S.length > 0,
                    A = f ? ek.default.Messages.SHARE_YOUR_SCREEN : ek.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
                    p = h || r || C,
                    g = (0, a.jsx)(eO.default, {
                        className: l(ew.buttonIcon, {
                            [ew.withText]: !p
                        })
                    });
                return (0, a.jsx)(c.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(en.default, {
                            channel: n,
                            currentUser: u,
                            activeStreams: E,
                            onClose: t,
                            handleGoLive: i ? T : es.default
                        })
                    },
                    position: "top",
                    align: "center",
                    animation: c.Popout.Animation.FADE,
                    children: e => {
                        let {
                            onClick: n,
                            ...s
                        } = e;
                        return (0, a.jsx)(c.Tooltip, {
                            text: A,
                            children: e => (0, a.jsx)(c.Button, {
                                ...e,
                                size: c.Button.Sizes.SMALL,
                                onClick: a => {
                                    var s;
                                    N ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
                                },
                                disabled: !f || o,
                                className: l(ew.button, ew.buttonColor, {
                                    [ew.buttonActive]: null != I,
                                    [ew.disabled]: !f || o
                                }),
                                ...N ? s : null,
                                innerClassName: ew.buttonContents,
                                wrapperClassName: ew.button,
                                children: p ? g : (0, a.jsxs)(eN.default, {
                                    align: eN.default.Align.CENTER,
                                    children: [g, ek.default.Messages.GO_LIVE_SHARE_SCREEN]
                                })
                            })
                        })
                    }
                })
            }
            class ez extends s.PureComponent {
                renderConnectionStatus() {
                    let e;
                    let {
                        channel: t,
                        guild: n,
                        rtcConnectionQuality: s,
                        rtcConnectionState: i,
                        rtcConnectionLastPing: l,
                        hasVideo: r,
                        isBroadcasting: o
                    } = this.props;
                    if (null == t) return null;
                    let d = (0, x.computeChannelName)(t, eT.default, eC.default);
                    return null != n ? (e = eG.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eG.Routes.CHANNEL(eG.ME, t.id), o && t.isBroadcastChannel() && (d = ek.default.Messages.BROADCASTING), (0, a.jsx)(C.default, {
                        statusTextClassName: ew.statusWithPopout,
                        quality: s,
                        state: i,
                        lastPing: l,
                        hasVideo: r,
                        children: (0, a.jsx)(c.FocusRing, {
                            children: (0, a.jsx)(u.Link, {
                                to: e,
                                onClick: this.handleChannelLinkClick,
                                onContextMenu: this.handleChannelLinkContextMenu,
                                children: (0, a.jsx)(eP.default, {
                                    className: ew.channel,
                                    children: d
                                })
                            })
                        })
                    })
                }
                renderNoiseCancellation() {
                    let {
                        noiseCancellationActive: e,
                        noiseCancellationError: t,
                        hasLayers: n,
                        remoteVoiceState: s,
                        channel: i,
                        voiceStates: l
                    } = this.props;
                    if (null != s) return null;
                    if (null == i ? void 0 : i.isGuildStageVoice()) {
                        let e = null != l.find(e => e.user.id === eu.default.getId() && (0, X.getAudienceRequestToSpeakState)(e.voiceState) === X.RequestToSpeakStates.ON_STAGE);
                        if (!e && (0, Q.shouldShowStageMusicMuteButton)(i.id)) return (0, a.jsx)(eV, {})
                    }
                    return !n && t ? (0, a.jsx)(c.Tooltip, {
                        text: ek.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
                        tooltipClassName: ew.noiseCancellationTooltip,
                        forceOpen: !0,
                        children: e => {
                            let {
                                "aria-label": t
                            } = e;
                            return (0, a.jsx)(eM.default, {
                                "aria-label": t,
                                tooltipText: null,
                                disabled: !0,
                                icon: eg.default
                            })
                        }
                    }) : (0, a.jsx)(c.Popout, {
                        position: "top",
                        align: "center",
                        renderPopout: () => (0, a.jsx)(eH, {}),
                        children: (t, n) => {
                            let {
                                isShown: s
                            } = n;
                            return (0, a.jsx)(eM.default, {
                                ...t,
                                tooltipClassName: ew.noiseCancellationTooltip,
                                tooltipText: s ? null : ek.default.Messages.NOISE_CANCELLATION_TOOLTIP,
                                icon: e ? ep.default : eg.default
                            })
                        }
                    }, "krisp-popout")
                }
                renderVoiceStates() {
                    let {
                        channel: e,
                        voiceStates: t,
                        showVoiceStates: n
                    } = this.props;
                    return null != e && n && 0 !== t.length ? (0, a.jsx)(eU.default, {
                        voiceStates: t,
                        channel: e,
                        className: ew.voiceUsers
                    }) : null
                }
                renderChannelButtons() {
                    let {
                        channel: e,
                        canGoLive: t,
                        remoteVoiceState: n,
                        enableActivities: s,
                        voiceStates: i,
                        selfStream: r,
                        isPrivateChannelWithEnabledActivities: o
                    } = this.props;
                    if (null == e || null != n) return null;
                    let u = eu.default.getId();
                    if (e.isGuildStageVoice()) {
                        if (!(0, z.isStageVideoEnabled)(e.guild_id) || !t) return null;
                        let n = i.find(e => e.user.id === u);
                        if (null == n || n.voiceState.suppress) return null
                    }
                    let d = (e.isGuildVoice() || o) && s,
                        {
                            reachedLimit: c
                        } = (0, ee.getChannelVideoLimit)(e),
                        E = (0, z.getStageHasMedia)(e.id);
                    return (0, a.jsxs)("div", {
                        className: ew.actionButtons,
                        children: [(0, a.jsx)(eY, {
                            channel: e,
                            enableActivities: d,
                            disabled: !E && c
                        }), (0, a.jsx)(eK, {
                            channel: e,
                            canGoLive: t,
                            enableActivities: d,
                            disabled: e.isGuildStageVoice() && (E && null == r || !E && c)
                        }), (0, a.jsxs)(a.Fragment, {
                            children: [d ? (0, a.jsx)(eW, {
                                channel: e,
                                enableActivities: s
                            }) : null, (0, V.default)(e) ? (0, a.jsx)(Y.default, {
                                className: l(ew.button, ew.buttonColor),
                                innerClassName: ew.buttonContents,
                                iconClassName: ew.buttonIcon,
                                channel: e
                            }) : null]
                        })]
                    })
                }
                render() {
                    let {
                        channel: e,
                        noiseCancellationSupported: t,
                        shouldShowVoicePanelIntroduction: n
                    } = this.props;
                    return null == e ? null : (0, a.jsx)(c.Popout, {
                        renderPopout: this.renderVoicePanelIntroduction,
                        position: "top",
                        align: "center",
                        animation: c.Popout.Animation.TRANSLATE,
                        shouldShow: n,
                        children: () => (0, a.jsxs)("div", {
                            className: ew.container,
                            children: [(0, a.jsxs)(eN.default, {
                                className: ew.connection,
                                align: eN.default.Align.CENTER,
                                children: [(0, a.jsx)("div", {
                                    className: ew.inner,
                                    children: this.renderConnectionStatus()
                                }), (0, a.jsxs)(eN.default, {
                                    grow: 0,
                                    shrink: 0,
                                    children: [t ? this.renderNoiseCancellation() : null, (0, a.jsx)(eb.default, {
                                        channel: e
                                    })]
                                })]
                            }), this.renderVoiceStates(), this.renderChannelButtons()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.canScreenshare = () => {
                        let {
                            channel: e,
                            canGoLive: t
                        } = this.props;
                        return t && null != e && null != e.getGuildId()
                    }, this.handleNoiseCancellationClicked = () => {
                        let {
                            noiseCancellationActive: e
                        } = this.props;
                        E.default.setNoiseCancellation(!e, {
                            section: eG.AnalyticsSections.NOISE_CANCELLATION_POPOUT
                        })
                    }, this.handleGoLive = () => {
                        let {
                            guild: e,
                            channel: t
                        } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
                        null != n && (0, ei.default)(n, t.id, eG.AnalyticsLocations.VOICE_PANEL)
                    }, this.handleChannelLinkClick = e => {
                        var t;
                        let {
                            guild: n,
                            channel: a
                        } = this.props;
                        o(null != a, "Channel is null during navigation click"), e.stopPropagation(), _.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eG.ME, a.id)
                    }, this.handleChannelLinkContextMenu = e => {
                        let {
                            channel: t
                        } = this.props;
                        (0, f.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("19577").then(n.bind(n, "19577"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                channel: t
                            })
                        })
                    }, this.handleCloseVoicePanelIntroduction = () => {
                        w.hideHotspot(ej.HotspotLocations.VOICE_PANEL_INTRODUCTION)
                    }, this.renderVoicePanelIntroduction = () => (0, a.jsxs)("div", {
                        className: l(ew.voicePanelIntroductionWrapper, "theme-light"),
                        children: [(0, a.jsx)(c.Heading, {
                            className: ew.voicePanelIntroductionHeader,
                            variant: "heading-md/semibold",
                            children: ek.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
                        }), (0, a.jsx)(c.Text, {
                            className: ew.voicePanelIntroductionText,
                            variant: "text-sm/normal",
                            children: ek.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
                        }), (0, a.jsx)(c.Button, {
                            className: ew.voicePanelIntroductionButton,
                            color: c.Button.Colors.BRAND,
                            onClick: this.handleCloseVoicePanelIntroduction,
                            children: ek.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
                        })]
                    })
                }
            }
            var eq = (0, T.default)(function(e) {
                let t = (0, U.default)(),
                    n = (0, d.useStateFromStores)([b.default], () => b.default.getAwaitingRemoteSessionInfo()),
                    i = (0, d.useStateFromStores)([eT.default], () => eT.default.getCurrentUser()),
                    {
                        channelId: l,
                        ...r
                    } = (0, d.useStateFromStoresObject)([eh.default], () => null != t ? {
                        channelId: t.channelId,
                        rtcConnectionQuality: eG.RTCConnectionQuality.FINE,
                        rtcConnectionState: eG.RTCConnectionStates.RTC_CONNECTED,
                        rtcConnectionLastPing: 0
                    } : {
                        channelId: eh.default.getChannelId(),
                        rtcConnectionQuality: eh.default.getQuality(),
                        rtcConnectionState: eh.default.getState(),
                        rtcConnectionLastPing: eh.default.getLastPing()
                    }),
                    o = (0, d.useStateFromStores)([ed.default], () => ed.default.getChannel(l), [l]),
                    u = null == o ? void 0 : o.getGuildId(),
                    E = (0, d.useStateFromStores)([ec.default], () => ec.default.getGuild(u), [u]),
                    f = (0, d.useStateFromStoresObject)([ef.default], () => ({
                        noiseCancellationSupported: ef.default.isNoiseCancellationSupported(),
                        noiseCancellationActive: ef.default.getNoiseCancellation(),
                        noiseCancellationError: ef.default.isNoiseCancellationError(),
                        canGoLive: (0, j.default)(ef.default)
                    })),
                    _ = (0, d.useStateFromStores)([ef.default, F.default], () => F.default.hasHotspot(ej.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, ex.isNewUser)(i) && !ef.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
                    h = (0, d.useStateFromStores)([eI.default], () => null != l && eI.default.hasVideo(l), [l]),
                    C = (0, d.useStateFromStores)([eo.default], () => eo.default.getCurrentUserActiveStream()),
                    T = (0, d.useStateFromStores)([eE.default], () => eE.default.hasLayers()),
                    I = (0, d.useStateFromStores)([B.default], () => B.default.isViewingRoles(u)),
                    S = (0, d.useStateFromStores)([e_.default], () => I && !e_.default.can(eG.Permissions.VIEW_CHANNEL, o), [I, o]),
                    N = J.RtcPanelShowVoiceStates.useSetting(),
                    [A, m, g] = (0, d.useStateFromStoresArray)([eS.default, W.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [W.default.getMutableParticipants(o.id, K.StageChannelParticipantNamedIndex.SPEAKER), W.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eS.default.getVoiceStatesForChannel(o) : null], [o]),
                    R = s.useMemo(() => {
                        var e, t;
                        return null !== (t = null !== (e = null == A ? void 0 : A.map(e => {
                            let {
                                user: t,
                                userNick: n,
                                voiceState: a
                            } = e;
                            return {
                                user: t,
                                nick: n,
                                voiceState: a
                            }
                        })) && void 0 !== e ? e : g) && void 0 !== t ? t : []
                    }, [A, m, g]),
                    [L, v] = s.useState(!1);
                s.useEffect(() => {
                    (I || S) && v(!1)
                }, [I, S, v]);
                let {
                    AnalyticsLocationProvider: y
                } = (0, P.default)(M.default.RTC_PANEL), x = (0, p.default)(null != u ? u : "", null == o ? void 0 : o.id), k = (0, O.default)(null == o ? void 0 : o.id), w = (0, D.default)();
                return (0, a.jsx)(y, {
                    children: (0, a.jsxs)("div", {
                        className: ew.wrapper,
                        children: [null != t || null != n ? (0, a.jsx)(G.default, {
                            voiceState: t,
                            awaitingRemoteSessionInfo: n
                        }) : null, (0, a.jsx)(ez, {
                            ...e,
                            ...f,
                            ...r,
                            enableActivities: x,
                            remoteVoiceState: t,
                            guild: E,
                            channel: o,
                            hasVideo: h,
                            selfStream: C,
                            hasLayers: T,
                            voiceStates: R,
                            showVoiceStates: N,
                            shouldShowVoicePanelIntroduction: _,
                            isPrivateChannelWithEnabledActivities: k,
                            isBroadcasting: w
                        }), !L && I && null != u ? (0, a.jsxs)("div", {
                            className: ew.viewAsRolesWarning,
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: ew.viewAsRolesWarningText,
                                children: S ? ek.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : ek.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
                            }), (0, a.jsx)(c.Button, {
                                className: ew.viewAsRolesWarningButton,
                                size: c.Button.Sizes.MIN,
                                onClick: () => {
                                    v(!0)
                                },
                                children: ek.default.Messages.DISMISS
                            })]
                        }) : null]
                    })
                })
            })