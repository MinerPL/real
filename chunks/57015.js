            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                s = n("77078"),
                a = n("812204"),
                o = n("685665"),
                u = n("652914"),
                d = n("95689"),
                c = n("599110"),
                E = n("8731"),
                _ = n("817295"),
                f = n("75015"),
                A = n("49111"),
                I = n("917219"),
                R = n("782340"),
                h = n("879777"),
                N = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: N,
                        allowSkip: T = !1,
                        onCrop: p,
                        onClose: g,
                        uploadType: C = f.UploadTypes.AVATAR,
                        showUpsellHeader: m = !1,
                        analyticsPage: S
                    } = e, [L, D] = i.useState({
                        width: 0,
                        height: 0
                    }), [O, M] = i.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [U, w] = i.useState(!1), [v, P] = i.useState(1), [y, b] = i.useState({
                        x: 0,
                        y: 0
                    }), [x, G] = i.useState(null), [B, H] = i.useState(!1), {
                        AnalyticsLocationProvider: V
                    } = (0, o.default)(a.default.IMAGE_CROPPING_MODAL), F = i.useRef({
                        x: 0,
                        y: 0
                    }), j = i.useRef(null), k = i.useRef(null), W = "image/gif" === t.type;
                    i.useEffect(() => {
                        (0, _.default)()
                    }, []), i.useEffect(() => {
                        W && m && c.default.track(A.AnalyticEvents.OPEN_MODAL, {
                            type: A.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: S
                            }
                        })
                    }, [m, S, W]);
                    let Y = () => {
                            switch (C) {
                                case f.UploadTypes.BANNER:
                                    return {
                                        height: f.USER_BANNER_MAX_HEIGHT, width: f.USER_BANNER_MAX_WIDTH
                                    };
                                case f.UploadTypes.VIDEO_BACKGROUND:
                                    return I.BACKGROUND_REPLACEMENT_SIZE;
                                case f.UploadTypes.AVATAR:
                                case f.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: A.AVATAR_MAX_SIZE, width: A.AVATAR_MAX_SIZE
                                    };
                                case f.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: f.GUILD_BANNER_MAX_HEIGHT, width: f.GUILD_BANNER_MAX_WIDTH
                                    };
                                case f.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: f.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: f.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case f.UploadTypes.HOME_HEADER:
                                    return {
                                        height: f.HOME_HEADER_MAX_HEIGHT, width: f.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        Z = i.useCallback((e, t, n) => {
                            F.current = (0, E.getBoundedCoordinates)(e, t, n), null != j.current && (j.current.style.transform = "translate3d(".concat(F.current.x, "px, ").concat(F.current.y, "px, 0)"))
                        }, [j]),
                        z = i.useCallback(() => {
                            if (null == j.current || v > 1) return;
                            let {
                                width: e,
                                height: t
                            } = j.current.getBoundingClientRect(), {
                                width: n,
                                height: l
                            } = (0, E.adjustImageDimensionsForAspectRatio)(C, e, t), i = (0, E.calculateOverlaySize)(C, n, l, t);
                            G({
                                width: n,
                                height: l
                            }), D(i), M((0, E.calculateDragBoundaries)(n, l, i))
                        }, [C, v]),
                        K = i.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = F.current;
                            if (!U || e.clientX === t && e.clientY === n) return;
                            let l = e.clientX - y.x,
                                i = e.clientY - y.y;
                            Z(l, i, O)
                        }, [O, U, y, Z]),
                        X = () => {
                            w(!1)
                        },
                        Q = () => {
                            let e = Y();
                            return e.width !== e.height
                        },
                        J = async () => {
                            let e;
                            if (null == j.current) return;
                            H(!0);
                            let n = j.current,
                                l = Y();
                            if (W) try {
                                let {
                                    result: i,
                                    cancelFn: r
                                } = await (0, E.cropGIF)(t, n, L, F.current, l);
                                k.current = r, e = await i, k.current = null
                            } catch (e) {
                                var i;
                                throw null === (i = k.current) || void 0 === i || i.call(k), k.current = null, Error("Error cropping GIF")
                            } else e = (0, E.cropStaticImage)(n, L, F.current, l);
                            await p(e, t), H(!1), g()
                        };
                    return i.useEffect(() => (window.addEventListener("mouseup", X), window.addEventListener("resize", z), () => {
                        window.removeEventListener("mouseup", X), window.removeEventListener("resize", z)
                    }), [z]), i.useEffect(() => () => {
                        null != k.current && k.current()
                    }, []), i.useEffect(() => {
                        if (U) return window.addEventListener("mousemove", K), () => window.removeEventListener("mousemove", K)
                    }, [K, U]), (0, l.jsx)(V, {
                        children: (0, l.jsxs)(s.ModalRoot, {
                            onAnimationEnd: z,
                            transitionState: N,
                            size: s.ModalSize.MEDIUM,
                            children: [m && (0, l.jsx)(u.default, {
                                type: C,
                                analyticsPage: S,
                                analyticsSection: A.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: W,
                                banner: n
                            }), (0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.FormTitle, {
                                    className: h.titleCase,
                                    tag: s.FormTitleTags.H1,
                                    children: R.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                className: h.modalContent,
                                children: [(0, l.jsxs)("div", {
                                    className: h.editingContainer,
                                    children: [(0, l.jsx)("img", {
                                        style: {
                                            opacity: null == x ? 0 : 1,
                                            transform: "translate3d(".concat(F.current.x, "px, ").concat(F.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == x) return {};
                                                let e = x.width / x.height,
                                                    t = Q() && e > f.BANNER_ASPECT_RATIO ? L.height / x.height : 1;
                                                return {
                                                    width: x.width * v * t,
                                                    minWidth: x.width * v * t,
                                                    height: x.height * v * t
                                                }
                                            })()
                                        },
                                        className: B ? h.imageDisabled : h.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: j,
                                        onMouseDown: e => {
                                            let t = e.clientX - F.current.x,
                                                n = e.clientY - F.current.y;
                                            b({
                                                x: t,
                                                y: n
                                            }), w(!0)
                                        },
                                        draggable: !1
                                    }), (0, l.jsx)("div", {
                                        className: C === f.UploadTypes.AVATAR ? h.overlayAvatar : h.overlayBanner,
                                        style: {
                                            opacity: null == x ? 0 : 1,
                                            width: L.width,
                                            height: L.height
                                        }
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: h.sliderContainer,
                                    children: [(0, l.jsx)(d.default, {
                                        className: h.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)(s.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == x) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = x, l = (0, E.calculateDragBoundaries)(t * e, n * e, L), {
                                                x: i,
                                                y: s
                                            } = F.current;
                                            (!(0, r.inRange)(i, l.right, l.left) || !(0, r.inRange)(s, l.top, l.bottom)) && Z(i, s, l), P(e), M(l)
                                        },
                                        disabled: B,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": R.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, l.jsx)(d.default, {
                                        className: h.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                className: h.modalFooter,
                                children: [T ? (0, l.jsx)(s.Button, {
                                    className: h.cancelButton,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    size: s.ButtonSizes.SMALL,
                                    onClick: () => {
                                        T && (p(n, t), g())
                                    },
                                    children: R.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, l.jsxs)("div", {
                                    className: h.buttonsRight,
                                    children: [(0, l.jsx)(s.Button, {
                                        className: h.cancelButton,
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        size: s.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != k.current) {
                                                k.current(), k.current = null, H(!1);
                                                return
                                            }
                                            g()
                                        },
                                        children: R.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, l.jsx)(s.Button, {
                                        submitting: B,
                                        size: s.ButtonSizes.SMALL,
                                        onClick: J,
                                        children: R.default.Messages.AVATAR_UPLOAD_APPLY
                                    })]
                                })]
                            })]
                        })
                    })
                }