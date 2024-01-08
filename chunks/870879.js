            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("808653");
            var i = n("446674"),
                a = n("773364"),
                l = n("913144"),
                s = n("374363"),
                r = n("42887"),
                u = n("18494"),
                o = n("697218"),
                d = n("239448");
            let c = !1,
                _ = null,
                E = !1,
                f = {};

            function h(e) {
                var t;
                let n = o.default.getCurrentUser();
                if (null == n) return !1;
                let i = null != e ? e : (0, d.getVideoBackgroundOptionFromProto)(null === (t = s.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
                return null != u.default.getVoiceChannelId() && r.default.isVideoEnabled() && null != i
            }

            function p() {
                _ !== u.default.getVoiceChannelId() && (E = !1), h() && (E = !0), _ = u.default.getVoiceChannelId()
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(s.default, u.default, r.default), this.syncWith([u.default, r.default], p)
                }
                get videoFilterAssets() {
                    return f
                }
                get hasBeenApplied() {
                    return c
                }
                get hasUsedBackgroundInCall() {
                    return E
                }
            }
            T.displayName = "VideoBackgroundStore";
            var C = new T(l.default, {
                VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
                    let {
                        assets: t
                    } = e;
                    f = t.reduce((e, t) => ({
                        ...e,
                        [t.id]: t
                    }), {})
                },
                VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
                    let {
                        videoFilterAsset: t
                    } = e;
                    f = {
                        ...f,
                        [t.id]: t
                    }
                },
                VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
                    let {
                        videoFilterAsset: t
                    } = e;
                    f = {
                        ...f
                    }, delete f[t.id]
                },
                VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
                    let {
                        backgroundOption: t
                    } = e;
                    h(t) && (E = !0)
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    a.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (c = !0)
                }
            })