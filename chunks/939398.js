            "use strict";
            n.r(t), n.d(t, {
                getDesktopSourceMetadata: function() {
                    return o
                },
                trackWithOverlayMetadata: function() {
                    return d
                }
            });
            var i = n("42887"),
                a = n("568307"),
                l = n("703370"),
                s = n("599110"),
                r = n("716241"),
                u = n("49111");

            function o() {
                let e, t, n, l, s;
                let r = i.default.getGoLiveSource();
                if (null != r && (e = r.quality.resolution, t = r.quality.frameRate, null != r.desktopSource)) {
                    var u, o;
                    n = r.desktopSource.soundshareSession;
                    let e = null != r.desktopSource.sourcePid ? a.default.getGameForPID(r.desktopSource.sourcePid) : null;
                    l = null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : null, s = null !== (o = null == e ? void 0 : e.id) && void 0 !== o ? o : null
                }
                return {
                    video_input_resolution: e,
                    video_input_frame_rate: t,
                    soundshare_session: n,
                    share_game_name: l,
                    share_game_id: s
                }
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = l.default.getGame();
                switch (t = {
                        ...t,
                        overlay_game_name: null != i ? i.name : "Unknown Game",
                        overlay_app_id: null != i ? i.id : null
                    }, e) {
                    case u.AnalyticEvents.VOICE_CHANNEL_SELECTED:
                    case u.AnalyticEvents.SETTINGS_PANE_VIEWED:
                    case u.AnalyticEvents.GUILD_VIEWED:
                    case u.AnalyticEvents.CHANNEL_OPENED:
                        return (0, r.trackWithMetadata)(e, t, n);
                    default:
                        return s.default.track(e, t, {
                            flush: n
                        })
                }
            }