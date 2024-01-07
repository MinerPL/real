            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("627445"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("901582"),
                c = l("997289"),
                f = l("56947"),
                m = l("506317"),
                S = l("305961"),
                C = l("697218"),
                E = l("140848"),
                h = l("145131"),
                _ = l("216422"),
                p = l("719923"),
                g = l("773356"),
                N = l("480862"),
                I = l("686298"),
                x = l("49111"),
                v = l("646718"),
                A = l("782340"),
                R = l("770420"),
                T = l("986916"),
                L = l("926622");

            function M(e) {
                let {
                    analyticsLocation: t,
                    onClose: a
                } = e;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("754534").then(l.bind(l, "754534"));
                    return l => (0, n.jsx)(e, {
                        ...l,
                        onCloseParent: a,
                        analyticsSource: t
                    })
                })
            }

            function O() {
                return (0, n.jsxs)("div", {
                    className: T.toolTipTextContainer,
                    children: [(0, n.jsx)(_.default, {
                        className: s(T.premiumIcon, T.premiumIconColor)
                    }), (0, n.jsx)(o.Text, {
                        className: T.upsellText,
                        variant: "text-sm/medium",
                        children: A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
                    })]
                })
            }

            function j(e) {
                let t, l, {
                        type: a,
                        selected: r,
                        needsPremium: i,
                        analyticsLocation: u,
                        onClick: d,
                        onClose: c
                    } = e,
                    {
                        value: f,
                        label: m
                    } = a;
                return i ? (t = (0, n.jsx)(o.TooltipContainer, {
                    tooltipClassName: T.tooltip,
                    spacing: 12,
                    "aria-label": A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
                    text: (0, n.jsx)(O, {}),
                    children: (0, n.jsx)(h.default, {
                        align: h.default.Align.CENTER,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: T.selectorNitroText,
                            children: m
                        })
                    })
                }), l = () => M({
                    analyticsLocation: u,
                    onClose: c
                })) : (t = (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: r ? T.selectorTextSelected : T.selectorText,
                    children: m
                }), l = () => d(f)), {
                    content: t,
                    className: s(r ? T.selectorButtonSelected : T.selectorButton, {
                        [T.selectorButtonPremiumRequired]: i
                    }),
                    onClick: l
                }
            }

            function D(e) {
                let {
                    onClose: t,
                    selectedPreset: l,
                    selectedResolution: a,
                    selectedFPS: s,
                    onResolutionChange: r,
                    onFPSChange: _,
                    onPresetChange: O,
                    guildId: D,
                    captureDeviceSelected: P
                } = e, b = (0, u.useStateFromStores)([C.default], () => {
                    let e = C.default.getCurrentUser();
                    return i(null != e, "StreamSettings: user cannot be undefined"), e
                }), U = p.default.isPremiumExactly(b, v.PremiumTypes.TIER_0), y = p.default.isPremium(b), G = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getGuild(D)) || void 0 === e ? void 0 : e.premiumTier
                }), {
                    location: H
                } = (0, c.useAnalyticsContext)(), {
                    enabled: V
                } = m.NitroBasicHDStreamingUpsellExperiment.useExperiment({
                    location: "a87c74_1"
                }, {
                    autoTrackExposure: U,
                    disable: !U
                }), w = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !1
                }), F = (V || !y) && !w, k = P ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, B = {
                    ...H,
                    section: x.AnalyticsSections.STREAM_SETTINGS
                }, W = (0, n.jsx)(E.default, {
                    buttons: k.map(e => j({
                        type: e,
                        selected: e.value === a,
                        needsPremium: !(0, g.default)(l, e.value, s, b, G),
                        analyticsLocation: B,
                        onClick: () => r(e.value),
                        onClose: t
                    }))
                }), z = (0, n.jsx)(E.default, {
                    buttons: I.ApplicationStreamFPSButtons.map(e => j({
                        type: e,
                        selected: e.value === s,
                        needsPremium: !(0, g.default)(l, a, e.value, b, G),
                        analyticsLocation: B,
                        onClick: () => _(e.value),
                        onClose: t
                    }))
                }), K = [{
                    value: I.ApplicationStreamPresets.PRESET_VIDEO,
                    label: A.default.Messages.STREAM_PRESET_VIDEO
                }, ...P ? [] : [{
                    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
                    label: A.default.Messages.STREAM_PRESET_DOCUMENTS
                }], {
                    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
                    label: A.default.Messages.STREAM_PRESET_CUSTOM
                }], Y = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(h.default, {
                        children: (0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.STREAM_RESOLUTION,
                            titleClassName: R.formItemTitleSlim,
                            className: T.documentModeGroup,
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                children: A.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
                                    fps: s
                                })
                            })
                        })
                    }), F ? (0, n.jsx)(N.default, {
                        message: A.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                        onClose: t,
                        openStreamUpsellModal: M
                    }) : null]
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(h.default, {
                        children: [(0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.STREAM_RESOLUTION,
                            className: T.settingsGroup,
                            titleClassName: R.formItemTitleSlim,
                            children: W
                        }), (0, n.jsx)(o.FormItem, {
                            title: A.default.Messages.SCREENSHARE_FRAME_RATE,
                            className: T.settingsGroup,
                            titleClassName: R.formItemTitleSlim,
                            children: z
                        })]
                    }), F ? (0, n.jsx)(N.default, {
                        onClose: t,
                        openStreamUpsellModal: M
                    }) : null]
                });
                return (0, n.jsx)(d.default, {
                    ...B,
                    children: (0, n.jsx)(o.FormItem, {
                        title: A.default.Messages.STREAM_QUALITY,
                        titleClassName: R.formItemTitle,
                        className: R.modalContent,
                        children: (0, n.jsxs)("div", {
                            className: T.qualitySettingsContainer,
                            children: [(0, n.jsx)(o.SingleSelect, {
                                value: l,
                                className: L.marginTop8,
                                options: K,
                                onChange: e => O(e)
                            }), Y]
                        })
                    })
                })
            }