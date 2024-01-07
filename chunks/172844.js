            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                d = n("629109"),
                o = n("272030"),
                r = n("987317"),
                s = n("990766"),
                i = n("901582"),
                c = n("243288"),
                f = n("769928"),
                S = n("976074"),
                M = n("386045"),
                g = n("18346"),
                m = n("803725"),
                p = n("76393"),
                E = n("103979"),
                C = n("816106"),
                h = n("373469"),
                I = n("271938"),
                T = n("42203"),
                x = n("42887"),
                A = n("697218"),
                v = n("374014"),
                _ = n("49111"),
                b = n("353927"),
                U = n("782340");

            function V(e) {
                return (0, l.useStateFromStores)([h.default], () => {
                    let t = h.default.getActiveStreamForApplicationStream(e);
                    return null != t && (0, v.encodeStreamKey)(t) === (0, v.encodeStreamKey)(e)
                })
            }

            function w(e) {
                let {
                    stream: t,
                    analyticsContext: n,
                    appContext: h,
                    exitFullscreen: w,
                    onSelect: O
                } = e, j = function(e) {
                    let t = V(e),
                        n = e.ownerId === I.default.getId(),
                        d = (0, g.default)(x.default),
                        {
                            enableViewerClipping: o,
                            ignoreSenderPreference: r
                        } = E.default.useExperiment({
                            location: "StreamContextMenu"
                        }, {
                            autoTrackExposure: !1
                        }),
                        s = (0, l.useStateFromStores)([M.default], () => M.default.getIsAtMaxSaveClipOperations()),
                        i = (0, l.useStateFromStores)([M.default], () => M.default.isViewerClippingAllowedForUser(e.ownerId)) || r;
                    return d && o && t ? (0, a.jsx)(u.MenuItem, {
                        id: "clip-stream",
                        disabled: !(n || i) || s,
                        label: U.default.Messages.CLIPS_SAVE,
                        action: () => n ? (0, m.saveClip)() : (0, m.saveClip)((0, v.encodeStreamKey)(e))
                    }) : null
                }(t), R = V(t), F = function(e) {
                    let t = V(e),
                        n = (0, C.default)(e.ownerId, b.MediaEngineContextTypes.STREAM);
                    return t ? n : null
                }(t), L = function(e) {
                    let t;
                    let n = (0, l.useStateFromStores)([p.default], () => null != p.default.getRemoteSessionId()),
                        d = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(e.channelId), [e.channelId]),
                        o = V(e),
                        i = A.default.getCurrentUser(),
                        c = null != i && e.ownerId === i.id;
                    return (t = c ? U.default.Messages.STOP_STREAMING : o ? U.default.Messages.STOP_WATCHING : U.default.Messages.WATCH_STREAM, n || !c && o && (null == d ? void 0 : d.isGuildStageVoice())) ? null : (0, a.jsx)(u.MenuItem, {
                        id: "watch",
                        label: t,
                        action: o ? function() {
                            (0, s.stopStream)((0, v.encodeStreamKey)(e))
                        } : function() {
                            r.default.selectVoiceChannel(e.channelId), (0, s.watchStream)(e)
                        }
                    })
                }(t), y = function(e) {
                    let t = V(e),
                        n = (0, l.useStateFromStores)([x.default], () => x.default.isLocalMute(e.ownerId, b.MediaEngineContextTypes.STREAM)),
                        o = A.default.getCurrentUser(),
                        r = null != o && e.ownerId === o.id;
                    return !t || r ? null : (0, a.jsx)(u.MenuCheckboxItem, {
                        id: "mute",
                        label: U.default.Messages.SOUND_MUTE,
                        action: function() {
                            d.default.toggleLocalMute(e.ownerId, b.MediaEngineContextTypes.STREAM)
                        },
                        checked: n
                    })
                }(t), k = (0, S.default)(t, h, w), N = (0, f.default)(t.channelId, t.ownerId), G = (0, c.default)(t.channelId), P = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(t.channelId), [t.channelId]);
                return (0, a.jsx)(i.default, {
                    context: n,
                    object: _.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, a.jsxs)(u.Menu, {
                        navId: "stream-context",
                        onClose: o.closeContextMenu,
                        "aria-label": U.default.Messages.STREAM_ACTIONS_MENU_LABEL,
                        onSelect: O,
                        children: [(0, a.jsxs)(u.MenuGroup, {
                            children: [L, j, y]
                        }), (0, a.jsx)(u.MenuGroup, {
                            children: F
                        }), (0, a.jsxs)(u.MenuGroup, {
                            children: [(null == P ? void 0 : P.isGuildStageVoice()) ? null : G, N, R && k]
                        })]
                    })
                })
            }