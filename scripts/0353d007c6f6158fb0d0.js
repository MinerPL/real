(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93223"], {
        20606: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = i("171210").default
        },
        597517: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return s
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var n = i("913144"),
                r = i("599110"),
                u = i("49111");

            function o(e) {
                r.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("446674"),
                r = i("913144"),
                u = i("197881"),
                o = i("492397");
            let s = new Set,
                a = {};
            class E extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (a = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !t && a[e];
                    return !(o.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (i || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return a[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: a
                    }
                }
            }
            E.displayName = "HotspotStore", E.persistKey = "hotspots", E.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var l = new E(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: i
                    } = e;
                    a[t] = i
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == a[t]) return !1;
                    delete a[t]
                }
            })
        },
        75015: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UploadTypes: function() {
                    return u
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return a
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return E
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return l
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return R
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return A
                },
                BANNER_ASPECT_RATIO: function() {
                    return I
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return O
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return S
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return h
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return T
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return L
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return H
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return C
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return N
                },
                MessageTypes: function() {
                    return o
                }
            });
            var n, r, u, o, s = i("917219");
            (n = u || (u = {}))[n.AVATAR = 0] = "AVATAR", n[n.BANNER = 1] = "BANNER", n[n.GUILD_BANNER = 2] = "GUILD_BANNER", n[n.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", n[n.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", n[n.HOME_HEADER = 5] = "HOME_HEADER", n[n.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                E = 2400,
                l = 848,
                d = 2400,
                c = 1350,
                _ = 2400,
                f = 960,
                R = 2400,
                A = 600,
                I = 17 / 6,
                O = 16 / 9,
                S = 2.5,
                h = 4,
                T = a / I,
                p = a / O,
                L = a / S,
                H = a / h,
                C = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                N = a / C;
            (r = o || (o = {}))[r.CROP_GIF_START = 0] = "CROP_GIF_START", r[r.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", r[r.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        716849: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return A
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return I
                }
            });
            var n = i("884691"),
                r = i("65597"),
                u = i("872717"),
                o = i("913144"),
                s = i("775433"),
                a = i("697218"),
                E = i("10514"),
                l = i("764364"),
                d = i("676572"),
                c = i("646718"),
                _ = i("49111");
            let f = "nonSubscriber";
            async function R() {
                try {
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await u.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [c.PremiumSubscriptionSKUs.TIER_0]: e[c.PremiumSubscriptionSKUs.TIER_0],
                                [c.PremiumSubscriptionSKUs.TIER_2]: e[c.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function A(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), n = d.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                O(r, n, t, i)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), u = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, r.default)([a.default], () => a.default.getCurrentUser());
                n.useEffect(() => {
                    O(o, u, t, i)
                }, [o, u, t, i])
            }

            function O(e, t, i, n) {
                null != e && !(0, l.isPremium)(e) && i && (t && R(), n && (!E.default.isLoadedForSKU(c.PremiumSubscriptionSKUs.TIER_0) && !E.default.isFetchingForSKU(c.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(c.PremiumSubscriptionSKUs.TIER_0), !E.default.isLoadedForSKU(c.PremiumSubscriptionSKUs.TIER_2) && !E.default.isFetchingForSKU(c.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(c.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("446674"),
                r = i("913144");
            let u = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = u;
            class s extends n.default.Store {
                initialize() {
                    o = u
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var a = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    o.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    o.premiumLikelihood = t, o.fetched = !0, o.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    o.isFetching = !1
                },
                LOGOUT: function() {
                    o.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var u = r
        },
        648911: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("446674"),
                r = i("42887"),
                u = i("512244");

            function o() {
                return (0, n.useStateFromStores)([r.default], () => (0, u.default)(r.default))
            }
        },
        381736: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("37983"),
                r = i("884691"),
                u = i("77078"),
                o = i("629109"),
                s = i("901582"),
                a = i("997289"),
                E = i("812204"),
                l = i("685665"),
                d = i("845579"),
                c = i("659558"),
                _ = i("154867"),
                f = i("439141"),
                R = i("648911"),
                A = i("42887"),
                I = i("697218"),
                O = i("145131"),
                S = i("476765"),
                h = i("599110"),
                T = i("739477"),
                p = i("49111"),
                L = i("782340"),
                H = i("684003");
            let C = {
                width: 368,
                height: 207
            };

            function N(e) {
                let {
                    transitionState: t,
                    videoEnabled: i,
                    onEnable: C,
                    onClose: N
                } = e, D = A.default.getCameraComponent(), m = (0, S.useUID)(), M = (0, R.default)(), U = d.AlwaysPreviewVideo.useSetting(), [P, g] = r.useState((0, c.getLastUsedVideoBackgroundOption)(I.default.getCurrentUser())), G = (0, a.useAnalyticsContext)(), {
                    AnalyticsLocationProvider: v
                } = (0, l.default)(E.default.CAMERA_PREVIEW), V = r.useRef(null);
                r.useEffect(() => {
                    h.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Camera Preview Modal"
                    })
                }, []), r.useEffect(() => {
                    var e;
                    null === (e = V.current) || void 0 === e || e.scrollToTop()
                }, []);
                let B = async () => {
                    await y(), o.default.setVideoEnabled(!0), null == C || C()
                }, y = async () => {
                    try {
                        await (0, f.applyBackgroundOptionLive)(P, {
                            location: {
                                page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                                ...G.location
                            }
                        })
                    } catch (e) {}
                    await N(), (0, _.saveLastUsedBackgroundOption)(P)
                };
                return (0, n.jsx)(v, {
                    children: (0, n.jsx)(s.default, {
                        page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                        children: (0, n.jsxs)(u.ModalRoot, {
                            className: H.modalRoot,
                            size: u.ModalSize.DYNAMIC,
                            "aria-labelledby": m,
                            transitionState: t,
                            children: [(0, n.jsxs)(u.ModalContent, {
                                className: M ? H.contentWithVideoBackgrounds : H.content,
                                scrollerRef: V,
                                children: [(0, n.jsx)(u.Heading, {
                                    id: m,
                                    className: H.header,
                                    variant: "heading-xl/semibold",
                                    children: i ? L.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : L.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
                                }), (0, n.jsx)(T.default, {
                                    hidePreviewToggle: !0,
                                    showSmallBackgroundOptions: !0,
                                    hideDeviceHeader: !0,
                                    selectedBackgroundOption: P,
                                    onSelectBackgroundOption: g,
                                    hideDeviceSelector: i,
                                    renderCamera: e => (0, n.jsxs)("div", {
                                        className: H.cameraPreview,
                                        children: [(0, n.jsx)("div", {
                                            className: H.camera,
                                            children: (0, n.jsx)(D, {
                                                disabled: !1,
                                                deviceId: e,
                                                width: 368,
                                                height: 207
                                            })
                                        }), (0, n.jsx)(T.FilterLoadingIndicator, {})]
                                    }),
                                    onLearnMore: N
                                })]
                            }), (0, n.jsxs)(u.ModalFooter, {
                                justify: O.default.Justify.BETWEEN,
                                children: [(() => {
                                    let e = i ? L.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : L.default.Messages.CAMERA_ON;
                                    return (0, n.jsx)(u.Button, {
                                        onClick: i ? y : B,
                                        size: u.Button.Sizes.SMALL,
                                        autoFocus: !i,
                                        children: e
                                    })
                                })(), (0, n.jsx)(u.Checkbox, {
                                    size: 18,
                                    type: u.Checkbox.Types.INVERTED,
                                    value: U,
                                    onChange: () => {
                                        d.AlwaysPreviewVideo.updateSetting(!U), h.default.track(p.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                            always_preview_video: !U
                                        })
                                    },
                                    children: (0, n.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: L.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                                    })
                                })]
                            }), (0, n.jsx)(u.ModalCloseButton, {
                                onClick: N,
                                className: H.modalClose
                            })]
                        })
                    })
                })
            }
        }
    }
]);