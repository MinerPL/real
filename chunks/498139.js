            "use strict";
            n.r(t), n.d(t, {
                useFavoritesServerExperiment: function() {
                    return s
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "user",
                    id: "2021-09_favorites_server",
                    label: "Enable fancy super-alpha favorites server.",
                    defaultConfig: {
                        favoritesEnabled: !1,
                        canShow: !0,
                        isFavoritesPerk: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Favorites v1 - On",
                        config: {
                            favoritesEnabled: !0,
                            canShow: !0,
                            isFavoritesPerk: !1
                        }
                    }, {
                        id: 2,
                        label: "Favorites v1 - Forced Off",
                        config: {
                            favoritesEnabled: !1,
                            canShow: !1,
                            isFavoritesPerk: !1
                        }
                    }, {
                        id: 3,
                        label: "Favorites v2",
                        config: {
                            favoritesEnabled: !0,
                            canShow: !0,
                            isFavoritesPerk: !0
                        }
                    }]
                }),
                s = e => r.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                });
            var a = r