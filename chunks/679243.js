            "use strict";
            n.r(t), n.d(t, {
                CallTileFit: function() {
                    return el
                },
                default: function() {
                    return es
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("669491"),
                u = n("966900"),
                d = n("838048"),
                c = n("359902"),
                f = n("780624"),
                h = n("77078"),
                p = n("629109"),
                m = n("901582"),
                E = n("442939"),
                C = n("161306"),
                g = n("397443"),
                S = n("170152"),
                _ = n("431923"),
                I = n("719761"),
                T = n("835040"),
                v = n("908583"),
                x = n("568088"),
                N = n("560289"),
                A = n("271938"),
                M = n("42887"),
                R = n("800762"),
                j = n("512264"),
                L = n("328275"),
                O = n("437825"),
                y = n("142303"),
                b = n("200639"),
                P = n("97347"),
                D = n("216947"),
                U = n("267675"),
                w = n("433487"),
                F = n("998564"),
                k = n("420145"),
                V = n("368121"),
                B = n("570511"),
                H = n("491519"),
                G = n("395763"),
                W = n("784981"),
                Y = n("729185"),
                z = n("715764"),
                K = n("144565"),
                Z = n("85208"),
                X = n("49111"),
                J = n("99795"),
                q = n("39141"),
                Q = n("353927"),
                $ = n("782340"),
                ee = n("146789");
            let et = l.memo(e => {
                var t, n, s, o, u;
                let {
                    participant: d,
                    onDoubleClick: c,
                    onContextMenu: f,
                    onClick: L,
                    onMouseDown: y,
                    onKeyDown: b,
                    className: P,
                    style: D,
                    channel: U,
                    width: w,
                    inPopout: F,
                    onVideoResize: k,
                    inCall: V = !1,
                    selected: B = !1,
                    noBorder: K = !1,
                    noVideoRender: et = !1,
                    focused: en = !1,
                    blocked: el = !1,
                    fit: es = j.VideoStreamFit.CONTAIN,
                    paused: ei = !1,
                    pulseSpeakingIndicator: er = !1
                } = e, eo = l.useContext(v.IdleStateContext), [eu, ed] = l.useState(!1), ec = (0, r.useStateFromStores)([A.default], () => A.default.getId()), ef = d.type === J.ParticipantTypes.ACTIVITY ? null : null === (t = d.user) || void 0 === t ? void 0 : t.id, [eh] = (0, E.default)(d.type === J.ParticipantTypes.ACTIVITY ? [d.id] : []), ep = (0, r.useStateFromStores)([S.default], () => S.default.getEnabled()), em = (0, r.useStateFromStores)([M.default], () => null != ef && M.default.isLocalVideoDisabled(ef, (0, C.default)(d.type)), [ef, d.type]), eE = (0, r.useStateFromStores)([M.default], () => null != ef ? M.default.getVideoToggleState(ef, (0, C.default)(d.type)) : X.VideoToggleState.NONE, [ef, d.type]);
                et = eE === X.VideoToggleState.AUTO_PROBING;
                let {
                    speaking: eC,
                    ringing: eg,
                    hasVideo: eS
                } = (0, Z.default)(d, ec), e_ = function(e, t, n) {
                    var a, l, s, i;
                    let o = (0, r.useStateFromStoresObject)([R.default], () => {
                            var e, a, l;
                            let s = R.default.getVoiceState(n, t.id);
                            return {
                                muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
                                deafened: null !== (a = null == s ? void 0 : s.deaf) && void 0 !== a && a,
                                suppressed: null !== (l = null == s ? void 0 : s.suppress) && void 0 !== l && l,
                                voiceChannelId: null == s ? void 0 : s.channelId
                            }
                        }),
                        u = (0, r.useStateFromStoresObject)([M.default], () => e === t.id ? {
                            muted: !1,
                            deafened: !1
                        } : {
                            muted: M.default.isLocalMute(t.id, Q.MediaEngineContextTypes.DEFAULT),
                            localVideoDisabled: M.default.isLocalVideoDisabled(t.id, Q.MediaEngineContextTypes.DEFAULT),
                            localVideoAutoDisabled: M.default.isLocalVideoAutoDisabled(t.id, Q.MediaEngineContextTypes.DEFAULT)
                        }, [e, t.id]);
                    return {
                        serverMuted: o.muted,
                        serverDeafened: o.deafened,
                        suppressed: o.suppressed,
                        localMuted: u.muted,
                        muted: null !== (s = t.type === J.ParticipantTypes.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceMuted())) && void 0 !== s && s,
                        deafened: null !== (i = t.type === J.ParticipantTypes.USER && (null === (l = t.voiceState) || void 0 === l ? void 0 : l.isVoiceDeafened())) && void 0 !== i && i
                    }
                }(ec, d, U.getGuildId()), eI = d.type === J.ParticipantTypes.STREAM && ef === ec, eT = (0, r.useStateFromStores)([x.default], () => null != ef ? x.default.getEffectForUserId(ef) : null), ev = (0, r.useStateFromStores)([R.default], () => R.default.getVoicePlatformForChannel(U.id, null != ef ? ef : ""));
                l.useEffect(() => {
                    ed(en)
                }, [en]);
                let ex = l.useCallback(() => {
                        null != ef && p.default.toggleLocalMute(ef, Q.MediaEngineContextTypes.STREAM)
                    }, [ef]),
                    eN = l.useCallback(e => {
                        null == L || L(d, e)
                    }, [L, d]),
                    eA = l.useCallback(e => {
                        null == c || c(d, e)
                    }, [c, d]),
                    eM = l.useCallback(e => {
                        null == f || f(d, e)
                    }, [f, d]),
                    eR = null,
                    ej = null,
                    eL = "";
                switch (d.type) {
                    case J.ParticipantTypes.STREAM:
                        eR = (0, a.jsx)(Y.default, {
                            participant: d,
                            selected: B,
                            width: w,
                            fit: es,
                            onVideoResize: k,
                            paused: ei,
                            inPopout: F,
                            focused: en
                        }), ej = (0, a.jsx)(Y.StreamTileIndicators, {
                            participant: d,
                            selected: B,
                            width: w,
                            focused: en,
                            idle: eo
                        }), eL = $.default.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({
                            streamerName: d.user.username
                        });
                        break;
                    case J.ParticipantTypes.USER:
                        eR = (0, a.jsx)(z.default, {
                            channel: U,
                            inCall: V,
                            participant: d,
                            fit: es,
                            onVideoResize: k,
                            paused: ei,
                            selected: B,
                            width: w,
                            blocked: el,
                            noVideoRender: et,
                            pulseSpeakingIndicator: er
                        }), eL = $.default.Messages.CALL_TILE_A11Y_LABEL_USER.format({
                            username: d.user.username
                        });
                        break;
                    case J.ParticipantTypes.ACTIVITY:
                        eR = (0, a.jsx)(G.default, {
                            interactible: en,
                            participant: d,
                            selected: B,
                            channel: U,
                            width: w
                        }), eL = $.default.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({
                            activityName: null == eh ? void 0 : eh.name
                        });
                        break;
                    case J.ParticipantTypes.HIDDEN_STREAM:
                        eR = (0, a.jsx)(Y.default, {
                            participant: d,
                            selected: B,
                            width: w,
                            fit: es,
                            onVideoResize: k,
                            paused: ei,
                            inPopout: F,
                            focused: en
                        })
                }
                let eO = l.useRef(null);
                return (0, a.jsx)(m.default, {
                    section: X.AnalyticsSections.VOICE_CHANNEL_TILE,
                    children: (0, a.jsx)("div", {
                        className: i(ee.wrapper, {
                            [ee.ringing]: eg
                        }, P),
                        children: (0, a.jsxs)(T.default, {
                            shakeLocation: q.ShakeLocation.VOICE_USER,
                            isShaking: eC,
                            className: ee.tile,
                            children: [(0, a.jsx)(W.default, {
                                ref: eO,
                                className: i(ee.tile, {
                                    [ee.noBorder]: K,
                                    [ee.noInteraction]: null == L,
                                    [ee.idle]: eo
                                }),
                                noBorder: K,
                                style: D,
                                participantUserId: ef,
                                children: (0, a.jsxs)(h.ClickableContainer, {
                                    "aria-label": eL,
                                    className: ee.tileChild,
                                    onDoubleClick: eA,
                                    onContextMenu: eM,
                                    onClick: eN,
                                    onMouseDown: y,
                                    onKeyDown: b,
                                    focusProps: {
                                        offset: 1
                                    },
                                    children: [d.type === J.ParticipantTypes.USER && null != ef && null != eT ? (0, a.jsx)(N.default, {
                                        voiceChannelEffect: eT,
                                        onComplete: () => (0, x.clearVoiceChannelEffectForUser)(ef),
                                        userId: ef
                                    }) : null, d.type === J.ParticipantTypes.USER ? (0, a.jsx)("div", {
                                        className: ee.voiceChannelEffectsContainer,
                                        children: (0, a.jsx)(g.default, {
                                            userId: ef,
                                            channelId: U.id,
                                            guildId: U.getGuildId(),
                                            containerDimensions: {
                                                width: null !== (o = null == eO ? void 0 : null === (n = eO.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== o ? o : 0,
                                                height: null !== (u = null == eO ? void 0 : null === (s = eO.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== u ? u : 0
                                            }
                                        })
                                    }) : null, eR, K ? null : (0, a.jsx)("div", {
                                        className: ee.indicators,
                                        children: ej
                                    }), B ? (0, a.jsx)("div", {
                                        className: ee.selectedScreen,
                                        children: (0, a.jsx)(O.default, {
                                            className: ee.selectedIcon
                                        })
                                    }) : null, d.type !== J.ParticipantTypes.ACTIVITY ? (0, a.jsx)(ea, {
                                        focused: en,
                                        width: w,
                                        inCall: V,
                                        participantType: d.type,
                                        hasVideo: null != eS && eS,
                                        ...e_,
                                        idle: eo,
                                        platform: ev,
                                        title: (0, H.default)(U, d),
                                        blocked: el,
                                        localVideoDisabled: em,
                                        videoToggleState: eE,
                                        hideAudioIcon: eI,
                                        onContextMenu: eM,
                                        onToggleMute: ex,
                                        participantUserId: ef
                                    }) : null, d.type === J.ParticipantTypes.USER && ep ? (0, a.jsx)(_.default, {
                                        userId: d.id,
                                        channelId: U.id
                                    }) : null, V && !K ? (0, a.jsx)("div", {
                                        className: i(ee.border, {
                                            [ee.voiceChannelEffect]: !en && null != eT,
                                            [ee.speaking]: eC && !en
                                        })
                                    }) : null]
                                })
                            }), (0, a.jsx)(I.default, {
                                isFiring: eu,
                                callTileRef: eO.current
                            })]
                        })
                    })
                })
            });

            function en(e) {
                let {
                    participantType: t,
                    platform: n,
                    className: l
                } = e;
                if (t === J.ParticipantTypes.STREAM) return n === J.VoicePlatforms.XBOX ? (0, a.jsx)(k.default, {
                    className: l
                }) : (0, a.jsx)(U.default, {
                    className: l
                });
                switch (n) {
                    case J.VoicePlatforms.MOBILE:
                        return (0, a.jsx)(D.default, {
                            className: l
                        });
                    case J.VoicePlatforms.XBOX:
                        return (0, a.jsx)(k.default, {
                            className: l
                        });
                    case J.VoicePlatforms.PLAYSTATION:
                        return (0, a.jsx)(F.default, {
                            className: l
                        });
                    default:
                        return null
                }
            }
            et.displayName = "CallTile";
            let ea = l.memo(e => {
                let {
                    muted: t,
                    deafened: n,
                    localMuted: l,
                    serverMuted: s,
                    serverDeafened: p,
                    idle: m,
                    title: E,
                    width: g,
                    hasVideo: S,
                    inCall: _,
                    localVideoDisabled: I,
                    videoToggleState: T,
                    focused: v,
                    blocked: x,
                    hideAudioIcon: N,
                    participantType: A,
                    participantUserId: R,
                    onContextMenu: j,
                    onToggleMute: D,
                    platform: U
                } = e, F = null, k = null, H = null, G = (0, K.isVideoCompact)(g), W = (0, K.isNamesCompact)(g), Y = (0, r.useStateFromStores)([M.default], () => null != R && M.default.isLocalVideoAutoDisabled(R, (0, C.default)(A)), [R, A]), z = (0, h.useRedesignIconContext)().enabled;
                if (!N) {
                    if (l && A === J.ParticipantTypes.STREAM && S && !v) F = (0, a.jsx)(h.Tooltip, {
                        text: $.default.Messages.UNMUTE,
                        children: e => {
                            let {
                                onClick: t,
                                ...n
                            } = e;
                            return (0, a.jsx)(h.Clickable, {
                                ...n,
                                onClick: e => {
                                    e.stopPropagation(), null == t || t(), D()
                                },
                                className: i(ee.interactive),
                                children: (0, a.jsx)(B.default, {})
                            })
                        }
                    });
                    else if (l || A !== J.ParticipantTypes.STREAM || !S || G || v) {
                        if (z) {
                            let e;
                            p ? e = u.HeadphonesDenyIcon : s ? e = c.MicrophoneDenyIcon : n ? e = d.HeadphonesSlashIcon : l ? e = c.MicrophoneDenyIcon : t && (e = f.MicrophoneSlashIcon), F = null != e ? (0, a.jsx)(e, {
                                color: o.default.colors.WHITE
                            }) : null
                        } else if (n || t || l) {
                            let e = n ? b.default : P.default;
                            F = (0, a.jsx)(e, {
                                foreground: i({
                                    [ee.localMuteStrikethrough]: l && !n
                                })
                            })
                        }
                    } else F = (0, a.jsx)(h.Tooltip, {
                        text: $.default.Messages.MUTE,
                        children: e => {
                            let {
                                onClick: t,
                                ...n
                            } = e;
                            return (0, a.jsx)(h.Clickable, {
                                ...n,
                                onClick: e => {
                                    e.stopPropagation(), null == t || t(), D()
                                },
                                className: i(ee.interactive, ee.toggleMute),
                                children: (0, a.jsx)(V.default, {})
                            })
                        }
                    })
                }
                return _ && M.default.supports(Q.Features.VIDEO) || !S ? _ && S && I && !Y && (k = (0, a.jsx)(y.default, {
                    foreground: ee.localMuteStrikethrough
                })) : k = (0, a.jsx)(O.default, {}), A === J.ParticipantTypes.STREAM && !v && S && (H = (0, a.jsx)(h.Tooltip, {
                    text: $.default.Messages.OPTIONS,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, a.jsx)(h.Clickable, {
                            ...n,
                            onClick: e => {
                                e.stopPropagation(), null == t || t(), j(e)
                            },
                            className: i(ee.status, ee.interactive),
                            children: (0, a.jsx)(w.default, {})
                        })
                    }
                })), (0, a.jsxs)("div", {
                    className: ee.overlayContainer,
                    children: [(0, a.jsx)("div", {
                        className: i(ee.overlayTop, {
                            [ee.small]: g < 195
                        }),
                        children: Y || T === X.VideoToggleState.AUTO_PROBING ? m ? (0, a.jsx)("div", {
                            className: ee.status,
                            children: (0, a.jsx)(y.default, {})
                        }) : (0, a.jsxs)("div", {
                            className: i(ee.overlayTitle, ee.videoDisabledTitle),
                            children: [(0, a.jsx)("div", {
                                className: ee.status,
                                children: (0, a.jsx)(y.default, {})
                            }), (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                className: ee.overlayTitleText,
                                children: $.default.Messages.UNSTABLE_CONNECTION
                            })]
                        }) : null
                    }), (0, a.jsxs)("div", {
                        className: i(ee.overlayBottom, {
                            [ee.small]: g < 195
                        }),
                        children: [W ? (0, a.jsx)("div", {}) : (0, a.jsxs)(h.Text, {
                            className: i(ee.overlayTitle, {
                                [ee.idle]: m
                            }),
                            color: "none",
                            variant: "text-md/normal",
                            children: [x ? (0, a.jsx)("div", {
                                className: ee.blocked,
                                children: (0, a.jsx)(L.default, {
                                    className: ee.blockedIcon,
                                    color: o.default.unsafe_rawColors.RED_400.css
                                })
                            }) : null, (0, a.jsx)(en, {
                                participantType: A,
                                platform: U,
                                className: ee.titleIcon
                            }), null != E && "" !== E ? (0, a.jsx)("span", {
                                className: ee.overlayTitleText,
                                children: E
                            }) : null]
                        }), (0, a.jsxs)("div", {
                            className: ee.statusContainer,
                            children: [null != k && (0, a.jsx)("div", {
                                className: ee.status,
                                children: k
                            }), null != F && (0, a.jsx)("div", {
                                className: ee.status,
                                children: F
                            }), H]
                        })]
                    })]
                })
            });
            ea.displayName = "CallTileOverlay";
            let el = j.VideoStreamFit;
            var es = et