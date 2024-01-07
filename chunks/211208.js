            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return h
                }
            }), t("222007");
            var s = t("37983"),
                n = t("884691"),
                l = t("446674"),
                o = t("77078"),
                c = t("997289"),
                i = t("716849"),
                r = t("552917"),
                d = t("697218"),
                u = t("719923"),
                O = t("154867"),
                E = t("870879"),
                _ = t("239448"),
                g = t("439141"),
                A = t("648911"),
                p = t("360371"),
                f = t("917219"),
                M = t("49111"),
                m = t("991207"),
                I = t("782340"),
                v = t("253493");

            function h(e) {
                let {
                    onLearnMore: a,
                    selectedBackgroundOption: h,
                    onSelectBackgroundOption: x,
                    currentDeviceId: C,
                    smallerBackgroundOptions: N
                } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, k] = n.useState(null);
                (0, i.useMaybeFetchPremiumLikelihood)(r.default);
                let D = (0, A.default)(),
                    B = u.default.canUseCustomBackgrounds(R),
                    U = (0, l.useStateFromStoresObject)([E.default], () => B ? E.default.videoFilterAssets : {}),
                    j = n.useMemo(() => Object.values(U).filter(e => e.type === f.VideoFilterType.BACKGROUND), [U]),
                    V = (0, c.useAnalyticsContext)();
                n.useEffect(() => {
                    D ? (0, g.applyBackgroundOptionPreview)(h, C, {
                        track: !1
                    }).catch(() => x(null)) : null != h && x(null)
                }, [C]);
                let L = e => {
                    x(e), (0, g.applyBackgroundOptionPreview)(e, C, {
                        location: V.location
                    }).then(() => k(null)).catch(() => {
                        k(I.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, g.applyBackgroundOptionPreview)(null, C, {
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
                    }) : null, (0, s.jsx)(p.default, {
                        canUseCustomBackgrounds: B,
                        customBackgroundOptions: j,
                        selectedOption: h,
                        onSelectOption: L,
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
                                        object: M.AnalyticsObjects.BUTTON_CTA
                                    }
                                })
                            })
                        },
                        onAddBackgroundImage: function(e, a) {
                            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return new Promise(async s => {
                                try {
                                    let s = await (0, O.uploadVideoFilterAsset)(e, f.VideoFilterType.BACKGROUND);
                                    L(s), (0, _.trackBackgroundOptionAdded)(s, a.type === m.FileTypes.MP4, t), k(null)
                                } catch (e) {
                                    k(e.message)
                                }
                                s()
                            })
                        },
                        smallerOptions: N
                    })]
                }) : null
            }