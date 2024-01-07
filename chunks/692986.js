            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                i = n("404118"),
                d = n("629109"),
                o = n("235004"),
                r = n("42887"),
                c = n("945956"),
                l = n("162771"),
                p = n("697218"),
                f = n("423487"),
                _ = n("599110"),
                m = n("49111"),
                E = n("353927"),
                g = n("782340"),
                S = n("113508");

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([p.default], () => {
                        var t;
                        return (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    A = (0, a.useStateFromStores)([o.default], () => o.default.isLocalSoundboardMuted(e)),
                    {
                        muted: D,
                        deafened: I = !1,
                        localVideoDisabled: b = !1,
                        localVideoAutoDisabled: v = !1
                    } = (0, a.useStateFromStoresObject)([r.default], () => n ? {
                        muted: r.default.isSelfMute(t),
                        deafened: r.default.isSelfDeaf(t)
                    } : {
                        muted: r.default.isLocalMute(e, t),
                        localVideoDisabled: r.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: r.default.isLocalVideoAutoDisabled(e, t)
                    }, [n, t, e]),
                    O = r.default.supports(E.Features.DISABLE_VIDEO) && !n ? (0, s.jsx)(u.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (v) {
                                i.default.show({
                                    title: g.default.Messages.UNSTABLE_CONNECTION,
                                    body: g.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: g.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: g.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => d.default.setDisableLocalVideo(e, m.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let n = b ? m.VideoToggleState.MANUAL_ENABLED : m.VideoToggleState.DISABLED;
                            d.default.setDisableLocalVideo(e, n, t)
                        },
                        checked: b,
                        subtext: v ? (0, s.jsxs)("div", {
                            className: S.videoPaused,
                            children: [(0, s.jsx)(f.default, {
                                width: 12,
                                className: S.warningCircle
                            }), g.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    h = n ? null : (0, s.jsx)(u.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let n = c.default.getRTCConnection();
                            _.default.track(m.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: l.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !A
                            }), d.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: A
                    }, "soundboard-sound-mute");
                return n ? [(0, s.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: g.default.Messages.SOUND_MUTE,
                    action: () => d.default.toggleSelfMute({
                        context: t
                    }),
                    checked: D
                }, "self-mute"), (0, s.jsx)(u.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.default.Messages.DEAFEN,
                    action: () => d.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: I
                }, "self-deafen"), O] : [(0, s.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: g.default.Messages.SOUND_MUTE,
                    action: () => d.default.toggleLocalMute(e, t),
                    checked: D
                }, "self-mute"), h, O]
            }