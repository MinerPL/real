(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54387"], {
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                d = n("255397"),
                r = n("191145"),
                o = n("782340");

            function s(e) {
                let t = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
                return (0, l.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        172844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                d = n("629109"),
                r = n("272030"),
                o = n("987317"),
                s = n("990766"),
                i = n("901582"),
                c = n("243288"),
                f = n("769928"),
                S = n("976074"),
                M = n("18346"),
                E = n("803725"),
                g = n("76393"),
                m = n("103979"),
                h = n("816106"),
                p = n("373469"),
                C = n("42203"),
                I = n("42887"),
                T = n("697218"),
                x = n("374014"),
                A = n("49111"),
                _ = n("353927"),
                v = n("782340");

            function U(e) {
                return (0, a.useStateFromStores)([p.default], () => {
                    let t = p.default.getActiveStreamForApplicationStream(e);
                    return null != t && (0, x.encodeStreamKey)(t) === (0, x.encodeStreamKey)(e)
                })
            }

            function V(e) {
                let {
                    stream: t,
                    analyticsContext: n,
                    appContext: p,
                    exitFullscreen: V,
                    onSelect: b
                } = e, R = function(e) {
                    let t = U(e),
                        n = T.default.getCurrentUser(),
                        a = null != n && e.ownerId === n.id,
                        d = (0, M.default)(),
                        {
                            enableEndEncoderViewerClipping: r,
                            enableSideEncoderViewerClipping: o
                        } = m.default.useExperiment({
                            location: "StreamContextMenu"
                        }, {
                            autoTrackExposure: !1
                        });
                    return d && (r || o) && t && !a ? (0, l.jsx)(u.MenuItem, {
                        id: "clip-stream",
                        label: v.default.Messages.CLIPS_VIEWERSIDE_SAVE,
                        action: () => (0, E.saveClip)((0, x.encodeStreamKey)(e))
                    }) : null
                }(t), j = U(t), O = function(e) {
                    let t = U(e),
                        n = (0, h.default)(e.ownerId, _.MediaEngineContextTypes.STREAM);
                    return t ? n : null
                }(t), L = function(e) {
                    let t;
                    let n = (0, a.useStateFromStores)([g.default], () => null != g.default.getRemoteSessionId()),
                        d = (0, a.useStateFromStores)([C.default], () => C.default.getChannel(e.channelId), [e.channelId]),
                        r = U(e),
                        i = T.default.getCurrentUser(),
                        c = null != i && e.ownerId === i.id;
                    return (t = c ? v.default.Messages.STOP_STREAMING : r ? v.default.Messages.STOP_WATCHING : v.default.Messages.WATCH_STREAM, n || !c && r && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, l.jsx)(u.MenuItem, {
                        id: "watch",
                        label: t,
                        action: r ? function() {
                            (0, s.stopStream)((0, x.encodeStreamKey)(e))
                        } : function() {
                            o.default.selectVoiceChannel(e.channelId), (0, s.watchStream)(e)
                        }
                    })
                }(t), w = function(e) {
                    let t = U(e),
                        n = (0, a.useStateFromStores)([I.default], () => I.default.isLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)),
                        r = T.default.getCurrentUser(),
                        o = null != r && e.ownerId === r.id;
                    return !t || o ? null : (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "mute",
                        label: v.default.Messages.SOUND_MUTE,
                        action: function() {
                            d.default.toggleLocalMute(e.ownerId, _.MediaEngineContextTypes.STREAM)
                        },
                        checked: n
                    })
                }(t), y = (0, S.default)(t, p, V), k = (0, f.default)(t.channelId, t.ownerId), F = (0, c.default)(t.channelId), N = (0, a.useStateFromStores)([C.default], () => C.default.getChannel(t.channelId), [t.channelId]);
                return (0, l.jsx)(i.default, {
                    context: n,
                    object: A.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "stream-context",
                        onClose: r.closeContextMenu,
                        "aria-label": v.default.Messages.STREAM_ACTIONS_MENU_LABEL,
                        onSelect: b,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [L, R, w]
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: O
                        }), (0, l.jsxs)(u.MenuGroup, {
                            children: [(null == N ? void 0 : N.isGuildStageVoice()) ? null : F, k, j && y]
                        })]
                    })
                })
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                d = n("629109"),
                r = n("42887"),
                o = n("697218"),
                s = n("829536"),
                i = n("773336"),
                c = n("353927"),
                f = n("782340");

            function S(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
                    S = (0, a.useStateFromStores)([r.default], () => r.default.getLocalVolume(e, n), [e, n]),
                    M = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    E = n === c.MediaEngineContextTypes.STREAM;
                return M ? null : (0, l.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: E ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
                    control: (t, a) => (0, l.jsx)(u.MenuSliderControl, {
                        ...t,
                        ref: a,
                        value: (0, s.amplitudeToPerceptual)(S),
                        maxValue: i.isPlatformEmbedded ? 200 : 100,
                        onChange: t => d.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
                        "aria-label": E ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);