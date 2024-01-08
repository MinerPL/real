            "use strict";
            n.r(t), n.d(t, {
                fetchVideoFilterAssets: function() {
                    return _
                },
                uploadVideoFilterAsset: function() {
                    return E
                },
                deleteVideoFilterAsset: function() {
                    return f
                },
                saveLastUsedBackgroundOption: function() {
                    return h
                },
                applyMediaFilterSettings: function() {
                    return p
                },
                startApplyMediaFilterSettings: function() {
                    return T
                },
                errorApplyingMediaFilterSettings: function() {
                    return C
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("872173"),
                s = n("42887"),
                r = n("697218"),
                u = n("659558"),
                o = n("239448"),
                d = n("284231"),
                c = n("49111");
            async function _() {
                let e = await i.default.get(c.Endpoints.VIDEO_FILTER_ASSETS);
                return a.default.dispatch({
                    type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                    assets: e.body
                }), e
            }
            async function E(e, t, n) {
                try {
                    let l = await i.default.post({
                        url: c.Endpoints.VIDEO_FILTER_ASSETS,
                        body: {
                            type: t,
                            asset: e,
                            last_used: null == n ? void 0 : n.toISOString()
                        }
                    });
                    return a.default.dispatch({
                        type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                        videoFilterAsset: l.body
                    }), l.body
                } catch (e) {
                    throw new d.default(e)
                }
            }
            async function f(e) {
                await i.default.delete(c.Endpoints.VIDEO_FILTER_ASSET(e.id));
                let t = (0, u.getLastUsedVideoBackgroundOption)(r.default.getCurrentUser());
                (0, o.isCustomBackgroundOption)(t) && t.id === e.id && h(null), a.default.dispatch({
                    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
                    videoFilterAsset: e
                })
            }
            async function h(e) {
                if (await l.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", t => {
                        t.videoBackgroundFilterDesktop = (0, o.getVideoBackgroundProtoFromOption)(e)
                    }, l.UserSettingsDelay.FREQUENT_USER_ACTION), (0, o.isCustomBackgroundOption)(e)) {
                    let t = await i.default.post(c.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(e.id));
                    a.default.dispatch({
                        type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                        backgroundOption: t.body
                    })
                } else a.default.dispatch({
                    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                    backgroundOption: e
                })
            }

            function p(e) {
                s.default.isSupported() && a.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
                    settings: e
                })
            }

            function T() {
                s.default.isSupported() && a.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
                })
            }

            function C() {
                a.default.dispatch({
                    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
                })
            }