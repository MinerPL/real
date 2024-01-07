            "use strict";
            n.r(e), n.d(e, {
                fetchVideoFilterAssets: function() {
                    return _
                },
                uploadVideoFilterAsset: function() {
                    return f
                },
                deleteVideoFilterAsset: function() {
                    return E
                },
                saveLastUsedBackgroundOption: function() {
                    return p
                },
                applyMediaFilterSettings: function() {
                    return A
                },
                startApplyMediaFilterSettings: function() {
                    return O
                },
                errorApplyingMediaFilterSettings: function() {
                    return g
                }
            });
            var i = n("872717"),
                u = n("913144"),
                r = n("872173"),
                o = n("42887"),
                a = n("697218"),
                s = n("659558"),
                d = n("239448"),
                l = n("284231"),
                c = n("49111");
            async function _() {
                let t = await i.default.get(c.Endpoints.VIDEO_FILTER_ASSETS);
                return u.default.dispatch({
                    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                    assets: t.body
                }), t
            }
            async function f(t, e, n) {
                try {
                    let r = await i.default.post({
                        url: c.Endpoints.VIDEO_FILTER_ASSETS,
                        body: {
                            type: e,
                            asset: t,
                            last_used: null == n ? void 0 : n.toISOString()
                        }
                    });
                    return u.default.dispatch({
                        type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                        videoFilterAsset: r.body
                    }), r.body
                } catch (t) {
                    throw new l.default(t)
                }
            }
            async function E(t) {
                await i.default.delete(c.Endpoints.VIDEO_FILTER_ASSET(t.id));
                let e = (0, s.getLastUsedVideoBackgroundOption)(a.default.getCurrentUser());
                (0, d.isCustomBackgroundOption)(e) && e.id === t.id && p(null), u.default.dispatch({
                    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
                    videoFilterAsset: t
                })
            }
            async function p(t) {
                if (await r.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", e => {
                        e.videoBackgroundFilterDesktop = (0, d.getVideoBackgroundProtoFromOption)(t)
                    }, r.UserSettingsDelay.FREQUENT_USER_ACTION), (0, d.isCustomBackgroundOption)(t)) {
                    let e = await i.default.post(c.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(t.id));
                    u.default.dispatch({
                        type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                        backgroundOption: e.body
                    })
                } else u.default.dispatch({
                    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                    backgroundOption: t
                })
            }

            function A(t) {
                o.default.isSupported() && u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
                    settings: t
                })
            }

            function O() {
                o.default.isSupported() && u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
                })
            }

            function g() {
                u.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
                })
            }