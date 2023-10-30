(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29232"], {
        101916: function(e, a, t) {
            "use strict";
            e.exports = t.p + "c6614584201970ac058c.png"
        },
        384335: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                BlurBackgroundIcon: function() {
                    return o
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("669491"),
                l = t("75196");
            let o = e => {
                let {
                    width: a = 24,
                    height: t = 24,
                    color: o = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a,
                    height: t,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M21.707 2.293a1 1 0 0 1 0 1.414l-4.924 4.924c-.122.123-.33.086-.414-.065a5.02 5.02 0 0 0-.853-1.121.26.26 0 0 1-.006-.369l4.783-4.783a1 1 0 0 1 1.414 0ZM20 20.6c0 .255.365.45.545.269l1.162-1.162a1 1 0 0 0-1.414-1.414l-.408.408a.255.255 0 0 0-.068.236c.12.535.183 1.092.183 1.663Zm-16 0c0 .205.018.405.053.6a.261.261 0 0 1-.07.231l-.276.276a1 1 0 0 1-1.414-1.414l1.346-1.346c.187-.187.533.016.486.275A7.643 7.643 0 0 0 4 20.6ZM16.707 3.707 14.12 6.295a.258.258 0 0 1-.278.055A4.987 4.987 0 0 0 12 6c-.147 0-.23-.184-.126-.288l3.419-3.42a1 1 0 1 1 1.414 1.415ZM7 11c0-.148-.184-.23-.288-.126l-4.42 4.419a1 1 0 1 0 1.415 1.414l3.588-3.588a.258.258 0 0 0 .055-.278A4.987 4.987 0 0 1 7 11Zm11.226 4.36a.256.256 0 0 0-.012.346c.313.37.59.771.828 1.197.083.15.287.182.407.062l2.258-2.258a1 1 0 0 0-1.414-1.414l-2.067 2.066Zm3.481-5.653-4.632 4.632a.256.256 0 0 1-.327.027 7.593 7.593 0 0 0-.452-.293.27.27 0 0 1-.086-.375c.379-.59.637-1.264.74-1.989a.257.257 0 0 1 .072-.145l3.27-3.271a1 1 0 1 1 1.415 1.414Zm-10-7.414a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Zm-5 1.414a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3ZM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.6a5.6 5.6 0 0 1 5.6-5.6h.8a5.6 5.6 0 0 1 5.6 5.6 1.4 1.4 0 0 1-1.4 1.4.166.166 0 0 1-.16-.124c-.19-.7-.44-1.352-.68-1.884-.11-.243-.425-.147-.399.118l.08.79a1 1 0 0 1-.996 1.1h-4.89a1 1 0 0 1-.995-1.1l.079-.79c.027-.265-.289-.361-.399-.118-.24.532-.49 1.184-.68 1.884A.166.166 0 0 1 7.4 22 1.4 1.4 0 0 1 6 20.6Z",
                        clipRule: "evenodd",
                        className: c
                    })
                })
            }
        },
        211208: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return h
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("446674"),
                o = t("77078"),
                c = t("997289"),
                i = t("716849"),
                r = t("552917"),
                u = t("697218"),
                d = t("719923"),
                O = t("154867"),
                E = t("870879"),
                _ = t("239448"),
                p = t("439141"),
                A = t("648911"),
                g = t("360371"),
                m = t("917219"),
                f = t("49111"),
                M = t("991207"),
                I = t("782340"),
                v = t("253493");

            function h(e) {
                let {
                    onLearnMore: a,
                    selectedBackgroundOption: h,
                    onSelectBackgroundOption: C,
                    currentDeviceId: N,
                    smallerBackgroundOptions: x
                } = e, R = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), [T, k] = n.useState(null);
                (0, i.useMaybeFetchPremiumLikelihood)(r.default);
                let D = (0, A.default)(),
                    B = d.default.canUseCustomBackgrounds(R),
                    U = (0, l.useStateFromStoresObject)([E.default], () => B ? E.default.videoFilterAssets : {}),
                    j = n.useMemo(() => Object.values(U).filter(e => e.type === m.VideoFilterType.BACKGROUND), [U]),
                    V = (0, c.useAnalyticsContext)();
                n.useEffect(() => {
                    D ? (0, p.applyBackgroundOptionPreview)(h, N, {
                        track: !1
                    }).catch(() => C(null)) : null != h && C(null)
                }, [N]);
                let S = e => {
                    C(e), (0, p.applyBackgroundOptionPreview)(e, N, {
                        location: V.location
                    }).then(() => k(null)).catch(() => {
                        k(I.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, p.applyBackgroundOptionPreview)(null, N, {
                            location: V.location
                        })
                    })
                };
                return D ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(o.Heading, {
                        className: v.spacingTop24,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: I.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
                    }), null != T ? (0, s.jsx)(o.FormErrorBlock, {
                        className: v.videoBackgroundError,
                        children: T
                    }) : null, (0, s.jsx)(g.default, {
                        canUseCustomBackgrounds: B,
                        customBackgroundOptions: j,
                        selectedOption: h,
                        onSelectOption: S,
                        onUpsellClick: () => {
                            (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await t.el("497296").then(t.bind(t, "497296"));
                                return t => (0, s.jsx)(e, {
                                    ...t,
                                    onLearnMore: a,
                                    analyticsSource: {
                                        ...V.location,
                                        object: f.AnalyticsObjects.BUTTON_CTA
                                    }
                                })
                            })
                        },
                        onAddBackgroundImage: function(e, a) {
                            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return new Promise(async s => {
                                try {
                                    let s = await (0, O.uploadVideoFilterAsset)(e, m.VideoFilterType.BACKGROUND);
                                    S(s), (0, _.trackBackgroundOptionAdded)(s, a.type === M.FileTypes.MP4, t), k(null)
                                } catch (e) {
                                    k(e.message)
                                }
                                s()
                            })
                        },
                        smallerOptions: x
                    })]
                }) : null
            }
        },
        360371: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return z
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("414456"),
                o = t.n(l),
                c = t("446674"),
                i = t("77078"),
                r = t("272030"),
                u = t("997289"),
                d = t("812204"),
                O = t("685665"),
                E = t("597517"),
                _ = t("269596"),
                p = t("589578"),
                A = t("818643"),
                g = t("216422"),
                m = t("468759"),
                f = t("132755"),
                M = t("956089"),
                I = t("58608"),
                v = t("599110"),
                h = t("315102"),
                C = t("299039"),
                N = t("239448"),
                x = t("977801"),
                R = t("917219"),
                T = t("49111"),
                k = t("533613"),
                D = t("75015"),
                B = t("646718"),
                U = t("782340"),
                j = t("492625");

            function V(e) {
                let {
                    icon: a,
                    iconClassName: t,
                    onClick: n,
                    text: l,
                    children: c,
                    className: r,
                    selected: u = !1,
                    disabled: d = !1,
                    onMouseLeave: O,
                    onBlur: E
                } = e;
                return (0, s.jsxs)(i.Clickable, {
                    className: o(r, j.backgroundOption, {
                        [j.backgroundOptionSelected]: u,
                        [j.backgroundOptionDisabled]: d
                    }),
                    onMouseLeave: O,
                    onBlur: E,
                    onClick: d ? void 0 : n,
                    children: [u ? (0, s.jsx)("div", {
                        className: j.backgroundOptionRing
                    }) : null, (0, s.jsxs)("div", {
                        className: j.backgroundOptionInner,
                        children: [c, (0, s.jsxs)("div", {
                            className: j.backgroundOptionContent,
                            children: [(0, s.jsx)(a, {
                                className: o(j.backgroundIconOptionIcon, t)
                            }), (0, s.jsx)(i.Text, {
                                className: j.backgroundOptionText,
                                color: "none",
                                variant: "text-sm/normal",
                                children: l
                            })]
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    option: a,
                    source: t,
                    isAnimated: l
                } = e, [o, c] = n.useState(!1);
                if (n.useEffect(() => {
                        let e = new Image;
                        e.src = t
                    }, [t]), !l || null == a) return (0, s.jsx)("div", {
                    className: j.backgroundImageOption,
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                });
                let i = (0, h.getVideoFilterAssetURL)({
                    userId: a.user_id,
                    assetId: a.id,
                    assetHash: a.asset,
                    size: 720,
                    canAnimate: !1
                });
                return (0, s.jsx)("img", {
                    onMouseMove: () => c(!0),
                    onMouseLeave: () => c(!1),
                    className: j.backgroundImageOption,
                    src: o ? t : i,
                    alt: a.id
                })
            }

            function L(e) {
                let {
                    option: a,
                    source: n,
                    selected: l = !1,
                    onSelectOption: p,
                    isAnimatedImage: A,
                    isVideo: g,
                    hotspotLocation: m,
                    ...h
                } = e, C = (0, u.useAnalyticsContext)(), {
                    analyticsLocations: x
                } = (0, O.default)(d.default.VIDEO_BACKGROUND_IMAGE_OPTION), R = (0, c.useStateFromStores)([_.default], () => null != m && _.default.hasHotspot(m)), k = g ? (0, s.jsx)(I.default, {
                    className: j.backgroundImageOption,
                    src: n,
                    loop: !0,
                    playOnHover: !0,
                    muted: !0
                }) : (0, s.jsx)(S, {
                    isAnimated: A,
                    option: (0, N.isCustomBackgroundOption)(a) ? a : void 0,
                    source: n
                });

                function D() {
                    null != m && R && (E.hideHotspot(m), v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: B.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                        location: C.location,
                        location_stack: x
                    }))
                }
                return (0, s.jsxs)(i.Clickable, {
                    ...h,
                    className: o(j.backgroundOption, {
                        [j.backgroundOptionSelected]: l
                    }),
                    onClick: () => p(a),
                    onContextMenu: e => (0, r.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await t.el("597035").then(t.bind(t, "597035"));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            backgroundOption: a,
                            optionIsInUse: l
                        })
                    }),
                    children: [l ? (0, s.jsx)("div", {
                        className: j.backgroundOptionRing
                    }) : null, (0, s.jsx)("div", {
                        onFocus: D,
                        onMouseEnter: D,
                        className: j.backgroundOptionInner,
                        children: k
                    }), g || A ? (0, s.jsx)(f.default, {
                        className: j.playIcon
                    }) : null, R && (0, s.jsx)(M.TextBadge, {
                        text: U.default.Messages.NEW,
                        className: j.newTextBadge
                    })]
                })
            }

            function P() {
                return (0, s.jsxs)("div", {
                    className: j.customBackgroundTooltip,
                    children: [(0, s.jsx)(g.default, {
                        className: j.customBackgroundTooltipIcon
                    }), (0, s.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
                    })]
                })
            }

            function b(e) {
                let {
                    onClick: a,
                    tooltipText: t,
                    disabled: n = !1
                } = e, l = (0, c.useStateFromStores)([_.default], () => _.default.hasHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

                function o() {
                    E.hideHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
                }
                let r = l ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : t;
                return (0, s.jsxs)(i.TooltipContainer, {
                    text: r,
                    className: j.newBackgroundTooltipContainer,
                    children: [(0, s.jsxs)(V, {
                        className: j.backgroundOptionBlurred,
                        disabled: n,
                        icon: A.default,
                        iconClassName: j.uploadIconOption,
                        onClick: a,
                        onMouseLeave: o,
                        onBlur: o,
                        text: (0, s.jsxs)("div", {
                            className: j.backgroundCustomInlineUpsell,
                            children: [(0, s.jsx)(g.default, {
                                className: j.backgroundCustomInlineUpsellIcon
                            }), (0, s.jsx)("div", {
                                className: j.overflowEllipsis,
                                children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
                            })]
                        }),
                        children: [(0, s.jsx)("div", {
                            className: j.backgroundCustomInlineUpsellBackground
                        }), (0, s.jsx)("div", {
                            className: j.backgroundCustomInlineUpsellBackgroundDarkener
                        })]
                    }), l && (0, s.jsx)(M.TextBadge, {
                        text: U.default.Messages.NEW,
                        className: j.newTextBadge
                    })]
                })
            }

            function y(e) {
                let {
                    onClick: a
                } = e, t = (0, u.useAnalyticsContext)(), {
                    analyticsLocations: l
                } = (0, O.default)(d.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
                return n.useEffect(() => {
                    v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: B.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
                        location: t.location,
                        location_stack: l
                    })
                }, []), (0, s.jsx)(b, {
                    onClick: a,
                    tooltipText: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
                })
            }

            function w(e) {
                let {
                    onAddBackgroundImage: a,
                    disabled: n
                } = e, l = (0, i.useModalContext)(), o = n ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
                    maxCustomBackgrounds: 25
                }) : U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM, c = [{
                    name: U.default.Messages.IMAGES,
                    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
                }];
                return (0, s.jsx)(b, {
                    disabled: n,
                    onClick: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await t.el("420333").then(t.bind(t, "420333"));
                            return t => (0, s.jsx)(e, {
                                maxFileSizeBytes: R.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
                                onComplete: a,
                                uploadType: D.UploadTypes.VIDEO_BACKGROUND,
                                filters: c,
                                modalTitle: U.default.Messages.UPLOAD_BACKGROUND,
                                imageSpecifications: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                                uploadOptionTitle: U.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                                showUpsellHeader: !0,
                                ...t
                            })
                        }, {
                            contextKey: l
                        })
                    },
                    tooltipText: o
                })
            }

            function z(e) {
                let {
                    canUseCustomBackgrounds: a,
                    customBackgroundOptions: t,
                    selectedOption: l,
                    onSelectOption: o,
                    onUpsellClick: c,
                    onAddBackgroundImage: r,
                    smallerOptions: u
                } = e, E = n.useMemo(() => t.sort((e, a) => null == e.last_used || null == a.last_used ? C.default.compare(a.id, e.id) : new Date(a.last_used).getTime() - new Date(e.last_used).getTime()), [t]), _ = E.length >= 25, {
                    AnalyticsLocationProvider: A
                } = (0, O.default)(d.default.VIDEO_BACKGROUND_OPTIONS), g = Object.values((0, x.default)()), f = g.sort((e, a) => R.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - R.DEFAULT_VIDEO_BACKGROUND_SORT[a.id]);
                return (0, s.jsx)(A, {
                    children: (0, s.jsxs)("div", {
                        className: u ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
                        children: [(0, s.jsx)(V, {
                            selected: null == l,
                            icon: m.default,
                            iconClassName: j.noneOptionIcon,
                            onClick: () => o(null),
                            text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
                        }), (0, s.jsx)(V, {
                            className: j.backgroundOptionBlurred,
                            selected: l === R.BLUR_BACKGROUND_OPTION,
                            icon: p.default,
                            iconClassName: j.blurOptionIcon,
                            onClick: () => o(R.BLUR_BACKGROUND_OPTION),
                            text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                            children: (0, s.jsx)("div", {
                                className: j.backgroundOptionBlurBackground
                            })
                        }), a ? (0, s.jsx)(w, {
                            onAddBackgroundImage: r,
                            disabled: _
                        }) : (0, s.jsx)(y, {
                            onClick: c
                        }), E.map(e => (0, s.jsx)(i.Tooltip, {
                            text: (0, s.jsx)(P, {}),
                            "aria-label": U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                            children: a => {
                                let t = (0, h.getVideoFilterAssetURL)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == t ? null : (0, n.createElement)(L, {
                                    ...a,
                                    key: e.id,
                                    option: e,
                                    source: t,
                                    selected: (0, N.isCustomBackgroundOption)(l) && l.id === e.id,
                                    onSelectOption: o,
                                    isVideo: (0, h.isVideoAssetHash)(e.asset),
                                    isAnimatedImage: (0, h.isAnimatedIconHash)(e.asset)
                                })
                            }
                        }, e.id)), f.map(e => {
                            let a = !0 === e.isVideo;
                            return (0, s.jsx)(i.Tooltip, {
                                text: e.name,
                                "aria-label": e.name,
                                children: t => (0, n.createElement)(L, {
                                    ...t,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: o,
                                    isVideo: a,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation
                                })
                            }, e.id)
                        })]
                    })
                })
            }
        },
        739477: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                FilterLoadingIndicator: function() {
                    return f
                },
                default: function() {
                    return M
                }
            });
            var s = t("37983"),
                n = t("884691"),
                l = t("414456"),
                o = t.n(l),
                c = t("446674"),
                i = t("862337"),
                r = t("77078"),
                u = t("629109"),
                d = t("845579"),
                O = t("154867"),
                E = t("211208"),
                _ = t("42887"),
                p = t("599110"),
                A = t("49111"),
                g = t("782340"),
                m = t("986399");

            function f() {
                let [e, a] = n.useState(!1), t = (0, c.useStateFromStores)([_.default], () => _.default.isMediaFilterSettingLoading());
                return (n.useEffect(() => {
                    let e = new i.Timeout;
                    return t ? e.start(150, () => {
                        a(!0)
                    }) : (e.stop(), a(!1)), () => e.stop()
                }, [t]), e) ? (0, s.jsx)("div", {
                    className: m.filterLoadingIndicator,
                    children: (0, s.jsx)(r.Spinner, {})
                }) : null
            }

            function M(e) {
                let {
                    hideDeviceSelector: a = !1,
                    hideDeviceHeader: t = !1,
                    onLearnMore: l,
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: f,
                    renderCamera: M,
                    hidePreviewToggle: I = !1,
                    showSmallBackgroundOptions: v = !1
                } = e, h = (0, c.useStateFromStores)([_.default], () => _.default.getVideoDeviceId()), C = (0, c.useStateFromStoresArray)([_.default], () => Object.values(_.default.getVideoDevices())), N = d.AlwaysPreviewVideo.useSetting(), x = C.map(e => {
                    let {
                        id: a,
                        name: t
                    } = e;
                    return {
                        value: a,
                        label: t
                    }
                });
                return n.useEffect(() => {
                    (0, O.fetchVideoFilterAssets)()
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [M(h), _.default.isEnabled() ? null : (0, s.jsx)(r.Text, {
                        className: m.permissionWarning,
                        color: "interactive-normal",
                        variant: "text-sm/normal",
                        children: g.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                            onEnableClick: u.default.enable
                        })
                    }), I ? null : (0, s.jsx)(r.FormSwitch, {
                        className: m.previewToggle,
                        note: g.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                        onChange: e => {
                            d.AlwaysPreviewVideo.updateSetting(e), p.default.track(A.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                always_preview_video: e
                            })
                        },
                        value: N,
                        hideBorder: !0,
                        children: (0, s.jsx)("div", {
                            className: m.cameraPreviewTitle,
                            children: g.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                        })
                    }), a ? null : (0, s.jsxs)(s.Fragment, {
                        children: [t ? null : (0, s.jsx)(r.Heading, {
                            className: m.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: g.default.Messages.CAMERA_PREVIEW_CAMERA
                        }), (0, s.jsx)(r.SingleSelect, {
                            placeholder: g.default.Messages.CHANGE_CAMERA,
                            className: o(m.selector, {
                                [m.selectorNoHeader]: t
                            }),
                            options: x,
                            value: h,
                            onChange: e => u.default.setVideoDevice(e)
                        })]
                    }), (0, s.jsx)(E.default, {
                        onLearnMore: l,
                        selectedBackgroundOption: i,
                        onSelectBackgroundOption: f,
                        currentDeviceId: h,
                        smallerBackgroundOptions: v
                    })]
                })
            }
        },
        589578: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return c
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("469563"),
                l = t("384335"),
                o = t("75196"),
                c = (0, n.replaceIcon)(function(e) {
                    let {
                        width: a = 24,
                        height: t = 24,
                        color: n = "currentColor",
                        className: l,
                        foreground: c,
                        ...i
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, o.default)(i),
                        className: l,
                        width: a,
                        height: t,
                        viewBox: "0 0 32 32",
                        children: (0, s.jsx)("path", {
                            className: c,
                            d: "M10.5 24c0-3.682 2.318-6 6-6s6 2.318 6 6h-12zM16.5 16a4 4 0 100-8 4 4 0 000 8zM29.166 15.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 15h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 15zM31.167 16.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 11.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 11h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 11zM31.167 12.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 7.334H28.5a.335.335 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.335.335 0 00-.334-.333zM26.5 7h-1.333a.335.335 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333V7.333A.335.335 0 0026.5 7zM31.167 8.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 23.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 23h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 23zM31.167 24.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 19.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 19h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 19zM31.167 20.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 15.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 15H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 15zM1.833 16.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 11.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 11H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 11zM1.833 12.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 7.334h-.667a.335.335 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.335.335 0 00-.333-.333zM7.833 7H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333V7.333A.335.335 0 007.833 7zM1.833 8.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 23.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 23H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 23zM1.833 24.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 19.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 19H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 19zM1.833 20.333a.333.333 0 100-.667.333.333 0 000 .667z",
                            fill: n
                        })
                    })
                }, l.BlurBackgroundIcon)
        }
    }
]);