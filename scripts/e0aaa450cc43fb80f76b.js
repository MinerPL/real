(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54387"], {
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                d = n("255397"),
                o = n("191145"),
                r = n("782340");

            function s(e) {
                let t = (0, a.useStateFromStores)([o.default], () => o.default.getVoiceParticipantsHidden(e));
                return (0, l.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        172844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                d = n("629109"),
                o = n("272030"),
                r = n("987317"),
                s = n("990766"),
                i = n("901582"),
                c = n("243288"),
                f = n("769928"),
                M = n("976074"),
                S = n("76393"),
                g = n("816106"),
                h = n("373469"),
                m = n("42203"),
                E = n("42887"),
                T = n("697218"),
                p = n("374014"),
                C = n("49111"),
                I = n("860604"),
                x = n("782340");

            function A(e) {
                return (0, a.useStateFromStores)([h.default], () => {
                    let t = h.default.getActiveStreamForApplicationStream(e);
                    return null != t && (0, p.encodeStreamKey)(t) === (0, p.encodeStreamKey)(e)
                })
            }

            function v(e) {
                let {
                    stream: t,
                    analyticsContext: n,
                    appContext: h,
                    exitFullscreen: v,
                    onSelect: _
                } = e, U = A(t), b = function(e) {
                    let t = A(e),
                        n = (0, g.default)(e.ownerId, I.MediaEngineContextTypes.STREAM);
                    return t ? n : null
                }(t), O = function(e) {
                    let t;
                    let n = (0, a.useStateFromStores)([S.default], () => null != S.default.getRemoteSessionId()),
                        d = (0, a.useStateFromStores)([m.default], () => m.default.getChannel(e.channelId), [e.channelId]),
                        o = A(e),
                        i = T.default.getCurrentUser(),
                        c = null != i && e.ownerId === i.id;
                    return (t = c ? x.default.Messages.STOP_STREAMING : o ? x.default.Messages.STOP_WATCHING : x.default.Messages.WATCH_STREAM, n || !c && o && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, l.jsx)(u.MenuItem, {
                        id: "watch",
                        label: t,
                        action: o ? function() {
                            (0, s.stopStream)((0, p.encodeStreamKey)(e))
                        } : function() {
                            r.default.selectVoiceChannel(e.channelId), (0, s.watchStream)(e)
                        }
                    })
                }(t), R = function(e) {
                    let t = A(e),
                        n = (0, a.useStateFromStores)([E.default], () => E.default.isLocalMute(e.ownerId, I.MediaEngineContextTypes.STREAM)),
                        o = T.default.getCurrentUser(),
                        r = null != o && e.ownerId === o.id;
                    return !t || r ? null : (0, l.jsx)(u.MenuCheckboxItem, {
                        id: "mute",
                        label: x.default.Messages.SOUND_MUTE,
                        action: function() {
                            d.default.toggleLocalMute(e.ownerId, I.MediaEngineContextTypes.STREAM)
                        },
                        checked: n
                    })
                }(t), V = (0, M.default)(t, h, v), j = (0, f.default)(t.channelId, t.ownerId), L = (0, c.default)(t.channelId), w = (0, a.useStateFromStores)([m.default], () => m.default.getChannel(t.channelId), [t.channelId]);
                return (0, l.jsx)(i.default, {
                    context: n,
                    object: C.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "stream-context",
                        onClose: o.closeContextMenu,
                        "aria-label": x.default.Messages.STREAM_ACTIONS_MENU_LABEL,
                        onSelect: _,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [O, R]
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: b
                        }), (0, l.jsxs)(u.MenuGroup, {
                            children: [(null == w ? void 0 : w.isGuildStageVoice()) ? null : L, j, U && V]
                        })]
                    })
                })
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                d = n("629109"),
                o = n("42887"),
                r = n("697218"),
                s = n("829536"),
                i = n("773336"),
                c = n("860604"),
                f = n("782340");

            function M(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
                    M = (0, a.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, n), [e, n]),
                    S = e === (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    g = n === c.MediaEngineContextTypes.STREAM;
                return S ? null : (0, l.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
                    control: (t, a) => (0, l.jsx)(u.MenuSliderControl, {
                        ...t,
                        ref: a,
                        value: (0, s.amplitudeToPerceptual)(M),
                        maxValue: i.isPlatformEmbedded ? 200 : 100,
                        onChange: t => d.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
                        "aria-label": g ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
                    })
                })
            }
        }
    }
]);