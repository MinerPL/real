            "use strict";
            t.r(a), t.d(a, {
                FilterLoadingIndicator: function() {
                    return M
                },
                default: function() {
                    return m
                }
            }), t("222007");
            var s = t("37983"),
                n = t("884691"),
                l = t("414456"),
                o = t.n(l),
                c = t("446674"),
                i = t("862337"),
                r = t("77078"),
                d = t("629109"),
                u = t("845579"),
                O = t("154867"),
                E = t("211208"),
                _ = t("42887"),
                g = t("599110"),
                A = t("49111"),
                p = t("782340"),
                f = t("986399");

            function M() {
                let [e, a] = n.useState(!1), t = (0, c.useStateFromStores)([_.default], () => _.default.isMediaFilterSettingLoading());
                return (n.useEffect(() => {
                    let e = new i.Timeout;
                    return t ? e.start(150, () => {
                        a(!0)
                    }) : (e.stop(), a(!1)), () => e.stop()
                }, [t]), e) ? (0, s.jsx)("div", {
                    className: f.filterLoadingIndicator,
                    children: (0, s.jsx)(r.Spinner, {})
                }) : null
            }

            function m(e) {
                let {
                    hideDeviceSelector: a = !1,
                    hideDeviceHeader: t = !1,
                    onLearnMore: l,
                    selectedBackgroundOption: i,
                    onSelectBackgroundOption: M,
                    renderCamera: m,
                    hidePreviewToggle: I = !1,
                    showSmallBackgroundOptions: v = !1
                } = e, h = (0, c.useStateFromStores)([_.default], () => _.default.getVideoDeviceId()), x = (0, c.useStateFromStoresArray)([_.default], () => Object.values(_.default.getVideoDevices())), C = u.AlwaysPreviewVideo.useSetting(), N = x.map(e => {
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
                    children: [m(h), _.default.isEnabled() ? null : (0, s.jsx)(r.Text, {
                        className: f.permissionWarning,
                        color: "interactive-normal",
                        variant: "text-sm/normal",
                        children: p.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
                            onEnableClick: d.default.enable
                        })
                    }), I ? null : (0, s.jsx)(r.FormSwitch, {
                        className: f.previewToggle,
                        note: p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
                        onChange: e => {
                            u.AlwaysPreviewVideo.updateSetting(e), g.default.track(A.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                                always_preview_video: e
                            })
                        },
                        value: C,
                        hideBorder: !0,
                        children: (0, s.jsx)("div", {
                            className: f.cameraPreviewTitle,
                            children: p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
                        })
                    }), a ? null : (0, s.jsxs)(s.Fragment, {
                        children: [t ? null : (0, s.jsx)(r.Heading, {
                            className: f.spacingTop24,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.CAMERA_PREVIEW_CAMERA
                        }), (0, s.jsx)(r.SingleSelect, {
                            placeholder: p.default.Messages.CHANGE_CAMERA,
                            className: o(f.selector, {
                                [f.selectorNoHeader]: t
                            }),
                            options: N,
                            value: h,
                            onChange: e => d.default.setVideoDevice(e)
                        })]
                    }), (0, s.jsx)(E.default, {
                        onLearnMore: l,
                        selectedBackgroundOption: i,
                        onSelectBackgroundOption: M,
                        currentDeviceId: h,
                        smallerBackgroundOptions: v
                    })]
                })
            }