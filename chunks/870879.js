            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return g
                }
            }), n("808653");
            var i = n("446674"),
                u = n("773364"),
                r = n("913144"),
                o = n("374363"),
                a = n("42887"),
                s = n("18494"),
                d = n("697218"),
                l = n("239448");
            let c = !1,
                _ = null,
                f = !1,
                E = {};

            function p(t) {
                var e;
                let n = d.default.getCurrentUser();
                if (null == n) return !1;
                let i = null != t ? t : (0, l.getVideoBackgroundOptionFromProto)(null === (e = o.default.settings.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, n.id);
                return null != s.default.getVoiceChannelId() && a.default.isVideoEnabled() && null != i
            }

            function A() {
                _ !== s.default.getVoiceChannelId() && (f = !1), p() && (f = !0), _ = s.default.getVoiceChannelId()
            }
            class O extends i.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, a.default), this.syncWith([s.default, a.default], A)
                }
                get videoFilterAssets() {
                    return E
                }
                get hasBeenApplied() {
                    return c
                }
                get hasUsedBackgroundInCall() {
                    return f
                }
            }
            O.displayName = "VideoBackgroundStore";
            var g = new O(r.default, {
                VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(t) {
                    let {
                        assets: e
                    } = t;
                    E = e.reduce((t, e) => ({
                        ...t,
                        [e.id]: e
                    }), {})
                },
                VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    E = {
                        ...E,
                        [e.id]: e
                    }
                },
                VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(t) {
                    let {
                        videoFilterAsset: e
                    } = t;
                    E = {
                        ...E
                    }, delete E[e.id]
                },
                VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(t) {
                    let {
                        backgroundOption: e
                    } = t;
                    p(e) && (f = !0)
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(t) {
                    let {
                        settings: e
                    } = t;
                    u.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in e && (c = !0)
                }
            })