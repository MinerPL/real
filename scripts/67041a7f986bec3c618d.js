(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29232"], {
        101916: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c6614584201970ac058c.png"
        },
        211208: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                o = s("77078"),
                i = s("997289"),
                c = s("716849"),
                d = s("552917"),
                r = s("697218"),
                u = s("719923"),
                O = s("154867"),
                _ = s("870879"),
                E = s("239448"),
                p = s("439141"),
                g = s("648911"),
                m = s("360371"),
                A = s("917219"),
                f = s("49111"),
                I = s("991207"),
                C = s("782340"),
                N = s("253493");

            function x(e) {
                let {
                    onLearnMore: t,
                    selectedBackgroundOption: x,
                    onSelectBackgroundOption: M,
                    currentDeviceId: R,
                    smallerBackgroundOptions: T
                } = e, k = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()), [D, U] = n.useState(null);
                (0, c.useMaybeFetchPremiumLikelihood)(d.default);
                let B = (0, g.default)(),
                    j = u.default.canUseCustomBackgrounds(k),
                    h = (0, l.useStateFromStoresObject)([_.default], () => j ? _.default.videoFilterAssets : {}),
                    S = n.useMemo(() => Object.values(h).filter(e => e.type === A.VideoFilterType.BACKGROUND), [h]),
                    V = (0, i.useAnalyticsContext)();
                n.useEffect(() => {
                    B ? (0, p.applyBackgroundOptionPreview)(x, R, {
                        track: !1
                    }).catch(() => M(null)) : null != x && M(null)
                }, [R]);
                let v = e => {
                    M(e), (0, p.applyBackgroundOptionPreview)(e, R, {
                        location: V.location
                    }).then(() => U(null)).catch(() => {
                        U(C.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, p.applyBackgroundOptionPreview)(null, R, {
                            location: V.location
                        })
                    })
                };
                return B ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.Heading, {
                        className: N.spacingTop24,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: C.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
                    }), null != D ? (0, a.jsx)(o.FormErrorBlock, {
                        className: N.videoBackgroundError,
                        children: D
                    }) : null, (0, a.jsx)(m.default, {
                        canUseCustomBackgrounds: j,
                        customBackgroundOptions: S,
                        selectedOption: x,
                        onSelectOption: v,
                        onUpsellClick: () => {
                            (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("497296").then(s.bind(s, "497296"));
                                return s => (0, a.jsx)(e, {
                                    ...s,
                                    onLearnMore: t,
                                    analyticsSource: {
                                        ...V.location,
                                        object: f.AnalyticsObjects.BUTTON_CTA
                                    }
                                })
                            })
                        },
                        onAddBackgroundImage: function(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return new Promise(async a => {
                                try {
                                    let a = await (0, O.uploadVideoFilterAsset)(e, A.VideoFilterType.BACKGROUND);
                                    v(a), (0, E.trackBackgroundOptionAdded)(a, t.type === I.FileTypes.MP4, s), U(null)
                                } catch (e) {
                                    U(e.message)
                                }
                                a()
                            })
                        },
                        smallerOptions: T
                    })]
                }) : null
            }
        },
        360371: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return w
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                o = s.n(l),
                i = s("446674"),
                c = s("77078"),
                d = s("272030"),
                r = s("997289"),
                u = s("812204"),
                O = s("685665"),
                _ = s("597517"),
                E = s("269596"),
                p = s("589578"),
                g = s("818643"),
                m = s("216422"),
                A = s("468759"),
                f = s("132755"),
                I = s("956089"),
                C = s("58608"),
                N = s("599110"),
                x = s("315102"),
                M = s("299039"),
                R = s("239448"),
                T = s("977801"),
                k = s("917219"),
                D = s("49111"),
                U = s("533613"),
                B = s("75015"),
                j = s("646718"),
                h = s("782340"),
                S = s("492625");

            function V(e) {
                let {
                    icon: t,
                    iconClassName: s,
                    onClick: n,
                    text: l,
                    children: i,
                    className: d,
                    selected: r = !1,
                    disabled: u = !1,
                    onMouseLeave: O,
                    onBlur: _
                } = e;
                return (0, a.jsxs)(c.Clickable, {
                    className: o(d, S.backgroundOption, {
                        [S.backgroundOptionSelected]: r,
                        [S.backgroundOptionDisabled]: u
                    }),
                    onMouseLeave: O,
                    onBlur: _,
                    onClick: u ? void 0 : n,
                    children: [r ? (0, a.jsx)("div", {
                        className: S.backgroundOptionRing
                    }) : null, (0, a.jsxs)("div", {
                        className: S.backgroundOptionInner,
                        children: [i, (0, a.jsxs)("div", {
                            className: S.backgroundOptionContent,
                            children: [(0, a.jsx)(t, {
                                className: o(S.backgroundIconOptionIcon, s)
                            }), (0, a.jsx)(c.Text, {
                                className: S.backgroundOptionText,
                                color: "none",
                                variant: "text-sm/normal",
                                children: l
                            })]
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    option: t,
                    source: s,
                    isAnimated: l
                } = e, [o, i] = n.useState(!1);
                if (n.useEffect(() => {
                        let e = new Image;
                        e.src = s
                    }, [s]), !l || null == t) return (0, a.jsx)("div", {
                    className: S.backgroundImageOption,
                    style: {
                        backgroundImage: "url(".concat(s, ")")
                    }
                });
                let c = (0, x.getVideoFilterAssetURL)({
                    userId: t.user_id,
                    assetId: t.id,
                    assetHash: t.asset,
                    size: 720,
                    canAnimate: !1
                });
                return (0, a.jsx)("img", {
                    onMouseMove: () => i(!0),
                    onMouseLeave: () => i(!1),
                    className: S.backgroundImageOption,
                    src: o ? s : c,
                    alt: t.id
                })
            }

            function P(e) {
                let {
                    option: t,
                    source: n,
                    selected: l = !1,
                    onSelectOption: p,
                    isAnimatedImage: g,
                    isVideo: m,
                    hotspotLocation: A,
                    ...x
                } = e, M = (0, r.useAnalyticsContext)(), {
                    analyticsLocations: T
                } = (0, O.default)(u.default.VIDEO_BACKGROUND_IMAGE_OPTION), k = (0, i.useStateFromStores)([E.default], () => null != A && E.default.hasHotspot(A)), U = m ? (0, a.jsx)(C.default, {
                    className: S.backgroundImageOption,
                    src: n,
                    loop: !0,
                    playOnHover: !0,
                    muted: !0
                }) : (0, a.jsx)(v, {
                    isAnimated: g,
                    option: (0, R.isCustomBackgroundOption)(t) ? t : void 0,
                    source: n
                });

                function B() {
                    null != A && k && (_.hideHotspot(A), N.default.track(D.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: j.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                        location: M.location,
                        location_stack: T
                    }))
                }
                return (0, a.jsxs)(c.Clickable, {
                    ...x,
                    className: o(S.backgroundOption, {
                        [S.backgroundOptionSelected]: l
                    }),
                    onClick: () => p(t),
                    onContextMenu: e => (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await s.el("597035").then(s.bind(s, "597035"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            backgroundOption: t,
                            optionIsInUse: l
                        })
                    }),
                    children: [l ? (0, a.jsx)("div", {
                        className: S.backgroundOptionRing
                    }) : null, (0, a.jsx)("div", {
                        onFocus: B,
                        onMouseEnter: B,
                        className: S.backgroundOptionInner,
                        children: U
                    }), m || g ? (0, a.jsx)(f.default, {
                        className: S.playIcon
                    }) : null, k && (0, a.jsx)(I.TextBadge, {
                        text: h.default.Messages.NEW,
                        className: S.newTextBadge
                    })]
                })
            }

            function L() {
                return (0, a.jsxs)("div", {
                    className: S.customBackgroundTooltip,
                    children: [(0, a.jsx)(m.default, {
                        className: S.customBackgroundTooltipIcon
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
                    })]
                })
            }

            function b(e) {
                let {
                    onClick: t,
                    tooltipText: s,
                    disabled: n = !1
                } = e, l = (0, i.useStateFromStores)([E.default], () => E.default.hasHotspot(U.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

                function o() {
                    _.hideHotspot(U.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
                }
                let d = l ? h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : s;
                return (0, a.jsxs)(c.TooltipContainer, {
                    text: d,
                    className: S.newBackgroundTooltipContainer,
                    children: [(0, a.jsxs)(V, {
                        className: S.backgroundOptionBlurred,
                        disabled: n,
                        icon: g.default,
                        iconClassName: S.uploadIconOption,
                        onClick: t,
                        onMouseLeave: o,
                        onBlur: o,
                        text: (0, a.jsxs)("div", {
                            className: S.backgroundCustomInlineUpsell,
                            children: [(0, a.jsx)(m.default, {
                                className: S.backgroundCustomInlineUpsellIcon
                            }), (0, a.jsx)("div", {
                                className: S.overflowEllipsis,
                                children: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
                            })]
                        }),
                        children: [(0, a.jsx)("div", {
                            className: S.backgroundCustomInlineUpsellBackground
                        }), (0, a.jsx)("div", {
                            className: S.backgroundCustomInlineUpsellBackgroundDarkener
                        })]
                    }), l && (0, a.jsx)(I.TextBadge, {
                        text: h.default.Messages.NEW,
                        className: S.newTextBadge
                    })]
                })
            }

            function y(e) {
                let {
                    onClick: t
                } = e, s = (0, r.useAnalyticsContext)(), {
                    analyticsLocations: l
                } = (0, O.default)(u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
                return n.useEffect(() => {
                    N.default.track(D.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: j.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
                        location: s.location,
                        location_stack: l
                    })
                }, []), (0, a.jsx)(b, {
                    onClick: t,
                    tooltipText: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
                })
            }

            function G(e) {
                let {
                    onAddBackgroundImage: t,
                    disabled: n
                } = e, l = (0, c.useModalContext)(), o = n ? h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
                    maxCustomBackgrounds: 25
                }) : h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM, i = [{
                    name: h.default.Messages.IMAGES,
                    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
                }];
                return (0, a.jsx)(b, {
                    disabled: n,
                    onClick: function() {
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("420333").then(s.bind(s, "420333"));
                            return s => (0, a.jsx)(e, {
                                maxFileSizeBytes: k.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
                                onComplete: t,
                                uploadType: B.UploadTypes.VIDEO_BACKGROUND,
                                filters: i,
                                modalTitle: h.default.Messages.UPLOAD_BACKGROUND,
                                imageSpecifications: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                                uploadOptionTitle: h.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                                showUpsellHeader: !0,
                                ...s
                            })
                        }, {
                            contextKey: l
                        })
                    },
                    tooltipText: o
                })
            }

            function w(e) {
                let {
                    canUseCustomBackgrounds: t,
                    customBackgroundOptions: s,
                    selectedOption: l,
                    onSelectOption: o,
                    onUpsellClick: i,
                    onAddBackgroundImage: d,
                    smallerOptions: r
                } = e, _ = n.useMemo(() => s.sort((e, t) => null == e.last_used || null == t.last_used ? M.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [s]), E = _.length >= 25, {
                    AnalyticsLocationProvider: g
                } = (0, O.default)(u.default.VIDEO_BACKGROUND_OPTIONS), m = Object.values((0, T.default)()), f = m.sort((e, t) => k.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - k.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]);
                return (0, a.jsx)(g, {
                    children: (0, a.jsxs)("div", {
                        className: r ? S.backgroundOptionsSmall : S.backgroundOptionsLarge,
                        children: [(0, a.jsx)(V, {
                            selected: null == l,
                            icon: A.default,
                            iconClassName: S.noneOptionIcon,
                            onClick: () => o(null),
                            text: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
                        }), (0, a.jsx)(V, {
                            className: S.backgroundOptionBlurred,
                            selected: l === k.BLUR_BACKGROUND_OPTION,
                            icon: p.default,
                            iconClassName: S.blurOptionIcon,
                            onClick: () => o(k.BLUR_BACKGROUND_OPTION),
                            text: h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                            children: (0, a.jsx)("div", {
                                className: S.backgroundOptionBlurBackground
                            })
                        }), t ? (0, a.jsx)(G, {
                            onAddBackgroundImage: d,
                            disabled: E
                        }) : (0, a.jsx)(y, {
                            onClick: i
                        }), _.map(e => (0, a.jsx)(c.Tooltip, {
                            text: (0, a.jsx)(L, {}),
                            "aria-label": h.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                            children: t => {
                                let s = (0, x.getVideoFilterAssetURL)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == s ? null : (0, n.createElement)(P, {
                                    ...t,
                                    key: e.id,
                                    option: e,
                                    source: s,
                                    selected: (0, R.isCustomBackgroundOption)(l) && l.id === e.id,
                                    onSelectOption: o,
                                    isVideo: (0, x.isVideoAssetHash)(e.asset),
                                    isAnimatedImage: (0, x.isAnimatedIconHash)(e.asset)
                                })
                            }
                        }, e.id)), f.map(e => {
                            let t = !0 === e.isVideo;
                            return (0, a.jsx)(c.Tooltip, {
                                text: e.name,
                                "aria-label": e.name,
                                children: s => (0, n.createElement)(P, {
                                    ...s,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: o,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation
                                })
                            }, e.id)
                        })]
                    })
                })
            }
        },
        739477: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                FilterLoadingIndicator: function() {
                    return f
                },
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                o = s.n(l),
                i = s("446674"),
                c = s("862337"),
                d = s("77078"),
                r = s("629109"),
                u = s("845579"),
                O = s("154867"),
                _ = s("211208"),
                E = s("42887"),
                p = s("599110"),
                g = s("49111"),
                m = s("782340"),
                A = s("986399");

            function f() {
                let [e, t] = n.useState(!1), s = (0, i.useStateFromStores)([E.default], () => E.default.isMediaFilterSettingLoading());
                return (n.useEffect(() => {
                    let e = new c.Timeout;
                    return s ? e.start(150, () => {
                        t(!0)
                    }) : (e.stop(), t(!1)), () => e.stop()
                }, [s]), e) ? (0, a.jsx)("div", {
                    className: A.filterLoadingIndicator,
                    children: (0, a.jsx)(d.Spinner, {})
                }) : null
            }

            function I(e) {
                let {
                    hideDeviceSelector: t = !1,
                    hideDeviceHeader: s = !1,
                    onLearnMore: l,
                    selectedBackgroundOption: c,
                    onSelectBackgroundOption: f,
                    renderCamera: I,
                    hidePreviewToggle: C = !1,
                    showSmallBackgroundOptions: N = !1
                } = e, x = (0, i.useStateFromStores)([E.default], () => E.default.getVideoDeviceId()), M = (0, i.useStateFromStoresArray)([E.default], () => Object.values(E.default.getVideoDevices())), R = u.AlwaysPreviewVideo.useSetting(), T = M.map(e => {
                    let {
                        id: t,
                        name: s
                    } = e;
                    return {
                        value: t,
                        label: s
                    }
                });
                return n.useEffect(() => {
                    (0, O.fetchVideoFilterAssets)()
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [I(x), E.default.isEnabled() ? null : (0, a.jsx)(d.Text, {
                        className: A.permissionWarning,
                        color: "interactive-normal",
                        variant: "text-sm/normal",
                        children: m.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                            onEnableClick: r.default.enable
                        })
                    }), C ? null : (0, a.jsx)(d.FormSwitch, {
                        className: A.previewToggle,
                        note: m.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                        onChange: e => {
                            u.AlwaysPreviewVideo.updateSetting(e), p.default.track(g.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                always_preview_video: e
                            })
                        },
                        value: R,
                        hideBorder: !0,
                        children: (0, a.jsx)("div", {
                            className: A.cameraPreviewTitle,
                            children: m.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                        })
                    }), t ? null : (0, a.jsxs)(a.Fragment, {
                        children: [s ? null : (0, a.jsx)(d.Heading, {
                            className: A.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: m.default.Messages.CAMERA_PREVIEW_CAMERA
                        }), (0, a.jsx)(d.SingleSelect, {
                            placeholder: m.default.Messages.CHANGE_CAMERA,
                            className: o(A.selector, {
                                [A.selectorNoHeader]: s
                            }),
                            options: T,
                            value: x,
                            onChange: e => r.default.setVideoDevice(e)
                        })]
                    }), (0, a.jsx)(_.default, {
                        onLearnMore: l,
                        selectedBackgroundOption: c,
                        onSelectBackgroundOption: f,
                        currentDeviceId: x,
                        smallerBackgroundOptions: N
                    })]
                })
            }
        }
    }
]);