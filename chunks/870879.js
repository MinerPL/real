            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("808653");
            var s = n("446674"),
                i = n("773364"),
                r = n("913144"),
                a = n("374363"),
                o = n("42887"),
                d = n("18494"),
                u = n("697218"),
                l = n("239448");
            let f = !1,
                _ = null,
                c = !1,
                g = {};

            function m(e) {
                var t;
                let n = u.default.getCurrentUser();
                if (null == n) return !1;
                let s = null != e ? e : (0, l.getVideoBackgroundOptionFromProto)(null === (t = a.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
                return null != d.default.getVoiceChannelId() && o.default.isVideoEnabled() && null != s
            }

            function h() {
                _ !== d.default.getVoiceChannelId() && (c = !1), m() && (c = !0), _ = d.default.getVoiceChannelId()
            }
            class v extends s.default.Store {
                initialize() {
                    this.waitFor(a.default, d.default, o.default), this.syncWith([d.default, o.default], h)
                }
                get videoFilterAssets() {
                    return g
                }
                get hasBeenApplied() {
                    return f
                }
                get hasUsedBackgroundInCall() {
                    return c
                }
            }
            v.displayName = "VideoBackgroundStore";
            var E = new v(r.default, {
                VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
                    let {
                        assets: t
                    } = e;
                    g = t.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {})
                },
                VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
                    let {
                        videoFilterAsset: t
                    } = e;
                    g = {
                        ...g,
                        [t.id]: t
                    }
                },
                VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
                    let {
                        videoFilterAsset: t
                    } = e;
                    g = {
                        ...g
                    }, delete g[t.id]
                },
                VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
                    let {
                        backgroundOption: t
                    } = e;
                    m(t) && (c = !0)
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    i.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (f = !0)
                }
            })