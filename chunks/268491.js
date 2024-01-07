            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("686298"),
                s = n("353927");
            let r = l.ApplicationStreamPresets.PRESET_VIDEO,
                u = l.ApplicationStreamResolutions.RESOLUTION_720,
                o = l.ApplicationStreamFPS.FPS_30;
            class d extends i.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t;
                        r = null !== (t = e.preset) && void 0 !== t ? t : l.ApplicationStreamPresets.PRESET_VIDEO, u = e.resolution, o = e.fps
                    }
                }
                getState() {
                    return {
                        preset: r,
                        resolution: u,
                        fps: o
                    }
                }
            }
            d.displayName = "ApplicationStreamingSettingsStore", d.persistKey = "ApplicationStreamingSettingStore";
            var c = new d(a.default, {
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    let {
                        settings: t
                    } = e;
                    if ((null == t ? void 0 : t.context) === s.MediaEngineContextTypes.STREAM) {
                        if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                        u = t.qualityOptions.resolution, o = t.qualityOptions.frameRate
                    }
                },
                STREAM_UPDATE_SETTINGS: function(e) {
                    let {
                        preset: t,
                        resolution: n,
                        frameRate: i
                    } = e, a = !1;
                    return null != t && (r = t, a = !0), null != n && (u = n, a = !0), null != i && (o = i, a = !0), a
                }
            })