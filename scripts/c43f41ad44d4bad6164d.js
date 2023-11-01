(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19481"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let i = {};

            function u(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let u = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(u);
                return o.current === u ? (n.current = e(), o.current = t) : !(0, i.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = n("171210").default
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var r = n("913144"),
                i = n("599110"),
                u = n("49111");

            function o(e) {
                i.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("446674"),
                i = n("913144"),
                u = n("197881"),
                o = n("492397");
            let s = new Set,
                a = {};
            class E extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (a = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && a[e];
                    return !(o.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
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
            var c = new E(i.default, {
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
                        enabled: n
                    } = e;
                    a[t] = n
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
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return l
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return d
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
                    return C
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return H
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return N
                },
                MessageTypes: function() {
                    return o
                }
            });
            var r, i, u, o, s = n("917219");
            (r = u || (u = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let a = 568,
                E = 2400,
                c = 848,
                l = 2400,
                d = 1350,
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
                C = a / h,
                H = s.BACKGROUND_REPLACEMENT_SIZE.width / s.BACKGROUND_REPLACEMENT_SIZE.height,
                N = a / H;
            (i = o || (o = {}))[i.CROP_GIF_START = 0] = "CROP_GIF_START", i[i.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", i[i.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var r = n("884691"),
                i = n("65597"),
                u = n("872717"),
                o = n("913144"),
                s = n("775433"),
                a = n("697218"),
                E = n("10514"),
                c = n("764364"),
                l = n("676572"),
                d = n("646718"),
                _ = n("49111");
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
                                [d.PremiumSubscriptionSKUs.TIER_0]: e[d.PremiumSubscriptionSKUs.TIER_0],
                                [d.PremiumSubscriptionSKUs.TIER_2]: e[d.PremiumSubscriptionSKUs.TIER_2]
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
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = l.default.shouldFetchPremiumLikelihood(), i = a.default.getCurrentUser();
                O(i, r, t, n)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), u = (0, i.default)([l.default], () => l.default.shouldFetchPremiumLikelihood()), o = (0, i.default)([a.default], () => a.default.getCurrentUser());
                r.useEffect(() => {
                    O(o, u, t, n)
                }, [o, u, t, n])
            }

            function O(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && R(), r && (!E.default.isLoadedForSKU(d.PremiumSubscriptionSKUs.TIER_0) && !E.default.isFetchingForSKU(d.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(d.PremiumSubscriptionSKUs.TIER_0), !E.default.isLoadedForSKU(d.PremiumSubscriptionSKUs.TIER_2) && !E.default.isFetchingForSKU(d.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(d.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("446674"),
                i = n("913144");
            let u = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = u;
            class s extends r.default.Store {
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
            var a = new s(i.default, {
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
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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
            var u = i
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                i = n("42887"),
                u = n("512244");

            function o() {
                return (0, r.useStateFromStores)([i.default], () => (0, u.default)(i.default))
            }
        },
        381736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                i = n("884691"),
                u = n("77078"),
                o = n("629109"),
                s = n("901582"),
                a = n("997289"),
                E = n("812204"),
                c = n("685665"),
                l = n("845579"),
                d = n("659558"),
                _ = n("154867"),
                f = n("439141"),
                R = n("648911"),
                A = n("42887"),
                I = n("697218"),
                O = n("145131"),
                S = n("476765"),
                h = n("599110"),
                T = n("739477"),
                p = n("49111"),
                L = n("782340"),
                C = n("684003");
            let H = {
                width: 368,
                height: 207
            };

            function N(e) {
                let {
                    transitionState: t,
                    videoEnabled: n,
                    onEnable: H,
                    onClose: N
                } = e, D = A.default.getCameraComponent(), m = (0, S.useUID)(), M = (0, R.default)(), U = l.AlwaysPreviewVideo.useSetting(), [P, g] = i.useState((0, d.getLastUsedVideoBackgroundOption)(I.default.getCurrentUser())), v = (0, a.useAnalyticsContext)(), {
                    AnalyticsLocationProvider: G
                } = (0, c.default)(E.default.CAMERA_PREVIEW), V = i.useRef(null);
                i.useEffect(() => {
                    h.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Camera Preview Modal"
                    })
                }, []), i.useEffect(() => {
                    var e;
                    null === (e = V.current) || void 0 === e || e.scrollToTop()
                }, []);
                let B = async () => {
                    await y(), o.default.setVideoEnabled(!0), null == H || H()
                }, y = async () => {
                    try {
                        await (0, f.applyBackgroundOptionLive)(P, {
                            location: {
                                page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                                ...v.location
                            }
                        })
                    } catch (e) {}
                    await N(), (0, _.saveLastUsedBackgroundOption)(P)
                };
                return (0, r.jsx)(G, {
                    children: (0, r.jsx)(s.default, {
                        page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                        children: (0, r.jsxs)(u.ModalRoot, {
                            className: C.modalRoot,
                            size: u.ModalSize.DYNAMIC,
                            "aria-labelledby": m,
                            transitionState: t,
                            children: [(0, r.jsxs)(u.ModalContent, {
                                className: M ? C.contentWithVideoBackgrounds : C.content,
                                scrollerRef: V,
                                children: [(0, r.jsx)(u.Heading, {
                                    id: m,
                                    className: C.header,
                                    variant: "heading-xl/semibold",
                                    children: n ? L.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : L.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
                                }), (0, r.jsx)(T.default, {
                                    hidePreviewToggle: !0,
                                    showSmallBackgroundOptions: !0,
                                    hideDeviceHeader: !0,
                                    selectedBackgroundOption: P,
                                    onSelectBackgroundOption: g,
                                    hideDeviceSelector: n,
                                    renderCamera: e => (0, r.jsxs)("div", {
                                        className: C.cameraPreview,
                                        children: [(0, r.jsx)("div", {
                                            className: C.camera,
                                            children: (0, r.jsx)(D, {
                                                disabled: !1,
                                                deviceId: e,
                                                width: 368,
                                                height: 207
                                            })
                                        }), (0, r.jsx)(T.FilterLoadingIndicator, {})]
                                    }),
                                    onLearnMore: N
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                justify: O.default.Justify.BETWEEN,
                                children: [(() => {
                                    let e = n ? L.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : L.default.Messages.CAMERA_ON;
                                    return (0, r.jsx)(u.Button, {
                                        onClick: n ? y : B,
                                        size: u.Button.Sizes.SMALL,
                                        autoFocus: !n,
                                        children: e
                                    })
                                })(), (0, r.jsx)(u.Checkbox, {
                                    size: 18,
                                    type: u.Checkbox.Types.INVERTED,
                                    value: U,
                                    onChange: () => {
                                        l.AlwaysPreviewVideo.updateSetting(!U), h.default.track(p.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                            always_preview_video: !U
                                        })
                                    },
                                    children: (0, r.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: L.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                                    })
                                })]
                            }), (0, r.jsx)(u.ModalCloseButton, {
                                onClick: N,
                                className: C.modalClose
                            })]
                        })
                    })
                })
            }
        }
    }
]);