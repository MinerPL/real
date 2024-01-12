            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                l = n("884691"),
                r = n("917351"),
                o = n("77078"),
                a = n("812204"),
                u = n("685665"),
                s = n("652914"),
                c = n("95689"),
                d = n("599110"),
                f = n("8731"),
                E = n("817295"),
                A = n("75015"),
                h = n("49111"),
                _ = n("917219"),
                p = n("782340"),
                T = n("879777"),
                I = e => {
                    let {
                        file: t,
                        imgURI: n,
                        transitionState: I,
                        allowSkip: g = !1,
                        onCrop: m,
                        onClose: R,
                        uploadType: C = A.UploadTypes.AVATAR,
                        showUpsellHeader: N = !1,
                        analyticsPage: w
                    } = e, [M, v] = l.useState({
                        width: 0,
                        height: 0
                    }), [S, O] = l.useState({
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }), [D, L] = l.useState(!1), [U, y] = l.useState(1), [b, P] = l.useState({
                        x: 0,
                        y: 0
                    }), [H, x] = l.useState(null), [G, B] = l.useState(!1), {
                        AnalyticsLocationProvider: V
                    } = (0, u.default)(a.default.IMAGE_CROPPING_MODAL), k = l.useRef({
                        x: 0,
                        y: 0
                    }), j = l.useRef(null), F = l.useRef(null), W = "image/gif" === t.type;
                    l.useEffect(() => {
                        (0, E.default)()
                    }, []), l.useEffect(() => {
                        W && N && d.default.track(h.AnalyticEvents.OPEN_MODAL, {
                            type: h.AnalyticsSections.CROP_GIF_MODAL,
                            location: {
                                page: w
                            }
                        })
                    }, [N, w, W]);
                    let Z = () => {
                            switch (C) {
                                case A.UploadTypes.BANNER:
                                    return {
                                        height: A.USER_BANNER_MAX_HEIGHT, width: A.USER_BANNER_MAX_WIDTH
                                    };
                                case A.UploadTypes.VIDEO_BACKGROUND:
                                    return _.BACKGROUND_REPLACEMENT_SIZE;
                                case A.UploadTypes.AVATAR:
                                case A.UploadTypes.AVATAR_DECORATION:
                                    return {
                                        height: h.AVATAR_MAX_SIZE, width: h.AVATAR_MAX_SIZE
                                    };
                                case A.UploadTypes.GUILD_BANNER:
                                    return {
                                        height: A.GUILD_BANNER_MAX_HEIGHT, width: A.GUILD_BANNER_MAX_WIDTH
                                    };
                                case A.UploadTypes.SCHEDULED_EVENT_IMAGE:
                                    return {
                                        height: A.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: A.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
                                    };
                                case A.UploadTypes.HOME_HEADER:
                                    return {
                                        height: A.HOME_HEADER_MAX_HEIGHT, width: A.HOME_HEADER_MAX_WIDTH
                                    }
                            }
                        },
                        z = l.useCallback((e, t, n) => {
                            k.current = (0, f.getBoundedCoordinates)(e, t, n), null != j.current && (j.current.style.transform = "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0)"))
                        }, [j]),
                        X = l.useCallback(() => {
                            if (null == j.current || U > 1) return;
                            let {
                                width: e,
                                height: t
                            } = j.current.getBoundingClientRect(), {
                                width: n,
                                height: i
                            } = (0, f.adjustImageDimensionsForAspectRatio)(C, e, t), l = (0, f.calculateOverlaySize)(C, n, i, t);
                            x({
                                width: n,
                                height: i
                            }), v(l), O((0, f.calculateDragBoundaries)(n, i, l))
                        }, [C, U]),
                        Y = l.useCallback(e => {
                            let {
                                x: t,
                                y: n
                            } = k.current;
                            if (!D || e.clientX === t && e.clientY === n) return;
                            let i = e.clientX - b.x,
                                l = e.clientY - b.y;
                            z(i, l, S)
                        }, [S, D, b, z]),
                        K = () => {
                            L(!1)
                        },
                        q = () => {
                            let e = Z();
                            return e.width !== e.height
                        },
                        $ = async () => {
                            let e;
                            if (null == j.current) return;
                            B(!0);
                            let n = j.current,
                                i = Z();
                            if (W) try {
                                let {
                                    result: l,
                                    cancelFn: r
                                } = await (0, f.cropGIF)(t, n, M, k.current, i);
                                F.current = r, e = await l, F.current = null
                            } catch (e) {
                                var l;
                                throw null === (l = F.current) || void 0 === l || l.call(F), F.current = null, Error("Error cropping GIF")
                            } else e = (0, f.cropStaticImage)(n, M, k.current, i);
                            await m(e, t), B(!1), R()
                        };
                    return l.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", X), () => {
                        window.removeEventListener("mouseup", K), window.removeEventListener("resize", X)
                    }), [X]), l.useEffect(() => () => {
                        null != F.current && F.current()
                    }, []), l.useEffect(() => {
                        if (D) return window.addEventListener("mousemove", Y), () => window.removeEventListener("mousemove", Y)
                    }, [Y, D]), (0, i.jsx)(V, {
                        children: (0, i.jsxs)(o.ModalRoot, {
                            onAnimationEnd: X,
                            transitionState: I,
                            size: o.ModalSize.MEDIUM,
                            children: [N && (0, i.jsx)(s.default, {
                                type: C,
                                analyticsPage: w,
                                analyticsSection: h.AnalyticsSections.CROP_GIF_MODAL,
                                isGIF: W,
                                banner: n
                            }), (0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.FormTitle, {
                                    className: T.titleCase,
                                    tag: o.FormTitleTags.H1,
                                    children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                className: T.modalContent,
                                children: [(0, i.jsxs)("div", {
                                    className: T.editingContainer,
                                    children: [(0, i.jsx)("img", {
                                        style: {
                                            opacity: null == H ? 0 : 1,
                                            transform: "translate3d(".concat(k.current.x, "px, ").concat(k.current.y, "px, 0px)"),
                                            ...(() => {
                                                if (null == H) return {};
                                                let e = H.width / H.height,
                                                    t = q() && e > A.BANNER_ASPECT_RATIO ? M.height / H.height : 1;
                                                return {
                                                    width: H.width * U * t,
                                                    minWidth: H.width * U * t,
                                                    height: H.height * U * t
                                                }
                                            })()
                                        },
                                        className: G ? T.imageDisabled : T.imageEnabled,
                                        src: n,
                                        alt: "avatar",
                                        ref: j,
                                        onMouseDown: e => {
                                            let t = e.clientX - k.current.x,
                                                n = e.clientY - k.current.y;
                                            P({
                                                x: t,
                                                y: n
                                            }), L(!0)
                                        },
                                        draggable: !1
                                    }), (0, i.jsx)("div", {
                                        className: C === A.UploadTypes.AVATAR ? T.overlayAvatar : T.overlayBanner,
                                        style: {
                                            opacity: null == H ? 0 : 1,
                                            width: M.width,
                                            height: M.height
                                        }
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: T.sliderContainer,
                                    children: [(0, i.jsx)(c.default, {
                                        className: T.icon,
                                        width: 24,
                                        height: 24
                                    }), (0, i.jsx)(o.Slider, {
                                        initialValue: 1,
                                        minValue: 1,
                                        maxValue: 2,
                                        keyboardStep: .025,
                                        asValueChanges: e => {
                                            if (null == H) return;
                                            let {
                                                width: t,
                                                height: n
                                            } = H, i = (0, f.calculateDragBoundaries)(t * e, n * e, M), {
                                                x: l,
                                                y: o
                                            } = k.current;
                                            (!(0, r.inRange)(l, i.right, i.left) || !(0, r.inRange)(o, i.top, i.bottom)) && z(l, o, i), y(e), O(i)
                                        },
                                        disabled: G,
                                        equidistant: !0,
                                        hideBubble: !0,
                                        "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
                                    }), (0, i.jsx)(c.default, {
                                        className: T.icon,
                                        width: 48,
                                        height: 48
                                    })]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                className: T.modalFooter,
                                children: [g ? (0, i.jsx)(o.Button, {
                                    className: T.cancelButton,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    size: o.ButtonSizes.SMALL,
                                    onClick: () => {
                                        g && (m(n, t), R())
                                    },
                                    children: p.default.Messages.AVATAR_UPLOAD_SKIP
                                }) : null, (0, i.jsxs)("div", {
                                    className: T.buttonsRight,
                                    children: [(0, i.jsx)(o.Button, {
                                        className: T.cancelButton,
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.ButtonSizes.SMALL,
                                        onClick: () => {
                                            if (null != F.current) {
                                                F.current(), F.current = null, B(!1);
                                                return
                                            }
                                            R()
                                        },
                                        children: p.default.Messages.AVATAR_UPLOAD_CANCEL
                                    }), (0, i.jsx)(o.Button, {
                                        submitting: G,
                                        size: o.ButtonSizes.SMALL,
                                        onClick: $,
                                        children: p.default.Messages.AVATAR_UPLOAD_APPLY
                                    })]
                                })]
                            })]
                        })
                    })
                }