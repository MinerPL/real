(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74117"], {
        962429: function(e, t, n) {
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
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = n("732427"),
                u = n("866490"),
                i = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("773670");

            function u() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773670");
            let u = {};

            function i(e) {
                let t = (0, r.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("773670"),
                u = n("962429");
            let i = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(i);
                return o.current === i ? (n.current = e(), o.current = t) : !(0, u.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("912557"),
                i = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("912557"),
                i = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("912557"),
                i = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = n("710984").default
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return l
                }
            });
            var r = n("913144"),
                u = n("599110"),
                i = n("49111");

            function o(e) {
                u.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function l(e) {
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
            var r = n("498225"),
                u = n("913144"),
                i = n("197881"),
                o = n("492397");
            let a = new Set,
                l = {};
            class s extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (l = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && l[e];
                    return !(o.CONFERENCE_MODE_ENABLED || i.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return l[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: l
                    }
                }
            }
            s.displayName = "HotspotStore", s.persistKey = "hotspots", s.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new s(u.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    l[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == l[t]) return !1;
                    delete l[t]
                }
            })
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return i
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return l
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return f
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return _
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return h
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return I
                },
                BANNER_ASPECT_RATIO: function() {
                    return R
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return A
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return C
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return S
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return L
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return p
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return O
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return T
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return v
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return m
                },
                MessageTypes: function() {
                    return o
                }
            });
            var r, u, i, o, a = n("917219");
            (r = i || (i = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let l = 568,
                s = 2400,
                c = 848,
                d = 2400,
                f = 1350,
                E = 2400,
                _ = 960,
                h = 2400,
                I = 600,
                R = 17 / 6,
                A = 16 / 9,
                C = 2.5,
                S = 4,
                L = l / R,
                p = l / A,
                O = l / C,
                T = l / S,
                v = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                m = l / v;
            (u = o || (o = {}))[u.CROP_GIF_START = 0] = "CROP_GIF_START", u[u.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", u[u.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return R
                }
            });
            var r = n("773670"),
                u = n("744196"),
                i = n("990746"),
                o = n("913144"),
                a = n("775433"),
                l = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function h() {
                try {
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
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

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), u = l.default.getCurrentUser();
                A(u, r, t, n)
            }

            function R(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, u.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, u.default)([l.default], () => l.default.getCurrentUser());
                r.useEffect(() => {
                    A(o, i, t, n)
                }, [o, i, t, n])
            }

            function A(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && h(), r && (!s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("498225"),
                u = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = i;
            class a extends r.default.Store {
                initialize() {
                    o = i
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var l = new a(u.default, {
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
                    return i
                }
            });
            var r = n("862205");
            let u = (0, r.createExperiment)({
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
            var i = u
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("498225"),
                u = n("42887"),
                i = n("512244");

            function o() {
                return (0, r.useStateFromStores)([u.default], () => (0, i.default)(u.default))
            }
        },
        381736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("920040"),
                u = n("773670"),
                i = n("77078"),
                o = n("629109"),
                a = n("901582"),
                l = n("997289"),
                s = n("812204"),
                c = n("685665"),
                d = n("845579"),
                f = n("659558"),
                E = n("154867"),
                _ = n("439141"),
                h = n("648911"),
                I = n("42887"),
                R = n("697218"),
                A = n("145131"),
                C = n("476765"),
                S = n("599110"),
                L = n("739477"),
                p = n("49111"),
                O = n("782340"),
                T = n("809447");
            let v = {
                width: 368,
                height: 207
            };

            function m(e) {
                let {
                    transitionState: t,
                    videoEnabled: n,
                    onEnable: v,
                    onClose: m
                } = e, M = I.default.getCameraComponent(), N = (0, C.useUID)(), g = (0, h.default)(), H = d.AlwaysPreviewVideo.useSetting(), [D, U] = u.useState((0, f.getLastUsedVideoBackgroundOption)(R.default.getCurrentUser())), P = (0, l.useAnalyticsContext)(), {
                    AnalyticsLocationProvider: x
                } = (0, c.default)(s.default.CAMERA_PREVIEW), y = u.useRef(null);
                u.useEffect(() => {
                    S.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Camera Preview Modal"
                    })
                }, []), u.useEffect(() => {
                    var e;
                    null === (e = y.current) || void 0 === e || e.scrollToTop()
                }, []);
                let B = async () => {
                    await V(), o.default.setVideoEnabled(!0), null == v || v()
                }, V = async () => {
                    try {
                        await (0, _.applyBackgroundOptionLive)(D, {
                            location: {
                                page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                                ...P.location
                            }
                        })
                    } catch (e) {}
                    await m(), (0, E.saveLastUsedBackgroundOption)(D)
                };
                return (0, r.jsx)(x, {
                    children: (0, r.jsx)(a.default, {
                        page: p.AnalyticsPages.PREVIEW_CAMERA_MODAL,
                        children: (0, r.jsxs)(i.ModalRoot, {
                            className: T.modalRoot,
                            size: i.ModalSize.DYNAMIC,
                            "aria-labelledby": N,
                            transitionState: t,
                            children: [(0, r.jsxs)(i.ModalContent, {
                                className: g ? T.contentWithVideoBackgrounds : T.content,
                                scrollerRef: y,
                                children: [(0, r.jsx)(i.Heading, {
                                    id: N,
                                    className: T.header,
                                    variant: "heading-xl/semibold",
                                    children: n ? O.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : O.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
                                }), (0, r.jsx)(L.default, {
                                    hidePreviewToggle: !0,
                                    showSmallBackgroundOptions: !0,
                                    hideDeviceHeader: !0,
                                    selectedBackgroundOption: D,
                                    onSelectBackgroundOption: U,
                                    hideDeviceSelector: n,
                                    renderCamera: e => (0, r.jsxs)("div", {
                                        className: T.cameraPreview,
                                        children: [(0, r.jsx)("div", {
                                            className: T.camera,
                                            children: (0, r.jsx)(M, {
                                                disabled: !1,
                                                deviceId: e,
                                                width: 368,
                                                height: 207
                                            })
                                        }), (0, r.jsx)(L.FilterLoadingIndicator, {})]
                                    }),
                                    onLearnMore: m
                                })]
                            }), (0, r.jsxs)(i.ModalFooter, {
                                justify: A.default.Justify.BETWEEN,
                                children: [(() => {
                                    let e = n ? O.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : O.default.Messages.CAMERA_ON;
                                    return (0, r.jsx)(i.Button, {
                                        onClick: n ? V : B,
                                        size: i.Button.Sizes.SMALL,
                                        autoFocus: !n,
                                        children: e
                                    })
                                })(), (0, r.jsx)(i.Checkbox, {
                                    size: 18,
                                    type: i.Checkbox.Types.INVERTED,
                                    value: H,
                                    onChange: () => {
                                        d.AlwaysPreviewVideo.updateSetting(!H), S.default.track(p.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                            always_preview_video: !H
                                        })
                                    },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: O.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                                    })
                                })]
                            }), (0, r.jsx)(i.ModalCloseButton, {
                                onClick: m,
                                className: T.modalClose
                            })]
                        })
                    })
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return l
                }
            });
            var r = n("552473"),
                u = n.n(r),
                i = n("365444");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(e)
                },
                a = () => (0, i.useLazyValue)(() => o()),
                l = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("469563"),
                i = n("851298"),
                o = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: u
                        }), (0, r.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: u
                        })]
                    })
                }, i.ImagePlusIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("469563"),
                i = n("202909"),
                o = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        viewBox: i = "0 0 24 24",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: i,
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: u,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, i.NitroWheelIcon)
        },
        468759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    className: o,
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(l),
                    className: o,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, r.jsx)("path", {
                        className: a,
                        fill: i,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                })
            }
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("469563"),
                i = n("876726"),
                o = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: u = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: i,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: u
                        })
                    })
                }, i.PlayIcon)
        },
        719347: function(e, t, n) {
            "use strict";
            var r, u;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return i
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return o
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return a
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return l
                }
            });
            let i = 550,
                o = 350,
                a = 40;
            (u = r || (r = {})).STATIC = "STATIC", u.RESPONSIVE = "RESPONSIVE", u.MOSAIC = "MOSAIC";
            let l = 20
        },
        956089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeShapes: function() {
                    return l
                },
                getBadgeWidthForValue: function() {
                    return s
                },
                getBadgeCountString: function() {
                    return c
                },
                NumberBadge: function() {
                    return d
                },
                TextBadge: function() {
                    return f
                },
                PremiumBadge: function() {
                    return E
                },
                IconBadge: function() {
                    return _
                },
                CircleBadge: function() {
                    return h
                }
            });
            var r = n("920040");
            n("773670");
            var u = n("575482"),
                i = n.n(u);
            n("77078");
            var o = n("20606");
            n("782340");
            var a = n("460671");
            let l = {
                ROUND: a.baseShapeRound,
                ROUND_LEFT: a.baseShapeRoundLeft,
                ROUND_RIGHT: a.baseShapeRoundRight,
                SQUARE: ""
            };

            function s(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function c(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let d = e => {
                    let {
                        count: t,
                        color: n = o.default.STATUS_DANGER,
                        disableColor: u = !1,
                        shape: d = l.ROUND,
                        className: f,
                        style: E,
                        ..._
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i(f, a.numberBadge, d),
                        style: {
                            backgroundColor: u ? void 0 : n,
                            width: s(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ...E
                        },
                        ..._,
                        children: c(t)
                    })
                },
                f = e => {
                    let {
                        text: t,
                        className: n,
                        color: u = o.default.STATUS_DANGER,
                        shape: s = l.ROUND,
                        disableColor: c = !1,
                        style: d,
                        ...f
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i(n, a.textBadge, s),
                        style: {
                            backgroundColor: c ? void 0 : u,
                            ...d
                        },
                        ...f,
                        children: t
                    })
                },
                E = e => {
                    let {
                        text: t,
                        className: n,
                        ...u
                    } = e;
                    return (0, r.jsx)(f, {
                        className: i(a.premiumBadge, n),
                        text: t,
                        ...u
                    })
                },
                _ = e => {
                    let {
                        icon: t,
                        className: n,
                        color: u = o.default.STATUS_DANGER,
                        shape: s = l.ROUND,
                        disableColor: c = !1,
                        style: d
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i(n, a.iconBadge, s),
                        style: {
                            backgroundColor: c ? void 0 : u,
                            ...d
                        },
                        children: (0, r.jsx)(t, {
                            className: a.icon
                        })
                    })
                },
                h = e => {
                    let {
                        className: t,
                        color: n = o.default.INTERACTIVE_ACTIVE,
                        shape: u = l.ROUND,
                        disableColor: s = !1,
                        style: c,
                        ...d
                    } = e;
                    return (0, r.jsx)("div", {
                        className: i(t, a.circleBadge, u),
                        style: {
                            backgroundColor: s ? void 0 : n,
                            ...c
                        },
                        ...d
                    })
                }
        },
        58608: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("920040"),
                u = n("773670"),
                i = n("117064"),
                o = n("498225"),
                a = n("206230"),
                l = n("719347");
            let s = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: s,
                    responsive: c,
                    mediaLayoutType: d,
                    ...f
                } = e, E = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion), _ = u.useRef(null);

                function h() {
                    var e;
                    s && (null == _ || null === (e = _.current) || void 0 === e || e.play())
                }

                function I() {
                    var e;
                    s && (null == _ || null === (e = _.current) || void 0 === e || e.pause())
                }
                return u.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = _;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, i.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, i.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), u.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(_.current)) : null != t && (t.current = _.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, _]), (0, r.jsx)("video", {
                    ref: _,
                    autoPlay: !E && !s && n,
                    onMouseEnter: h,
                    onMouseLeave: I,
                    onFocus: h,
                    onBlur: I,
                    style: d === l.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : c ? function() {
                        return {
                            maxWidth: f.width,
                            maxHeight: f.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...f
                })
            };
            var c = u.forwardRef((e, t) => (0, r.jsx)(s, {
                ...e,
                externalRef: t
            }))
        }
    }
]);