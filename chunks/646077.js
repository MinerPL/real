            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                a = r("414456"),
                l = r.n(a),
                o = r("77078"),
                s = r("812204"),
                c = r("685665"),
                u = r("873622"),
                d = r("476765"),
                f = r("599110"),
                h = r("652914"),
                v = r("254398"),
                p = r("49111"),
                g = r("782340"),
                w = r("369522");

            function m(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    onComplete: m,
                    uploadType: y,
                    showUpsellHeader: S,
                    analyticsPage: x
                } = e, [A, b] = i.useState(!1), E = (0, o.useModalContext)(), I = (0, d.useUID)(), {
                    AnalyticsLocationProvider: j
                } = (0, c.default)(s.default.GIF_PICKER);
                async function L(e) {
                    let {
                        gifSrc: t
                    } = e;
                    if (null == t || A) return;
                    b(!0);
                    let i = (0, v.makeTenorProxyURL)(t),
                        l = await fetch(i),
                        s = await l.blob();
                    a(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await r.el("57015").then(r.bind(r, "57015"));
                        return t => (0, n.jsx)(e, {
                            imgURI: i,
                            file: new File([s], "tenor.gif", {
                                type: "image/gif"
                            }),
                            onCrop: m,
                            uploadType: y,
                            showUpsellHeader: S,
                            ...t
                        })
                    }, {
                        contextKey: E
                    })
                }
                return i.useEffect(() => {
                    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: x
                        }
                    })
                }, [x]), (0, n.jsx)(j, {
                    children: (0, n.jsxs)(o.ModalRoot, {
                        className: w.gifPickerCroppingModal,
                        "aria-labelledby": I,
                        transitionState: t,
                        size: o.ModalSize.SMALL,
                        children: [S ? (0, n.jsx)(h.default, {
                            type: y,
                            analyticsPage: x,
                            analyticsSection: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, n.jsxs)(o.ModalHeader, {
                            className: w.modalHeader,
                            separator: !1,
                            children: [(0, n.jsx)(o.FormTitle, {
                                className: w.titleCase,
                                tag: o.FormTitleTags.H1,
                                children: g.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, n.jsx)(o.ModalCloseButton, {
                                onClick: a,
                                className: w.modalCloseButton
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(u.default, {
                                className: l(w.gifPicker, {
                                    [w.loadingOverlay]: A
                                }),
                                onSelectGIF: L,
                                hideFavorites: !0
                            }), A && (0, n.jsx)(o.Spinner, {
                                className: w.spinner
                            })]
                        })]
                    })
                })
            }