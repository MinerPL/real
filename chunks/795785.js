            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return h
                }
            }), A("222007");
            var a = A("37983"),
                l = A("884691"),
                n = A("414456"),
                r = A.n(n),
                s = A("77078"),
                o = A("694187"),
                i = A("818643"),
                d = A("987772"),
                u = A("228220"),
                c = A("782340"),
                f = A("610828");
            let C = "custom-image",
                g = l.forwardRef(function(e, t) {
                    let {
                        selectedImageName: A,
                        onChange: l,
                        disabled: n = !1,
                        name: o,
                        alt: i,
                        data: d
                    } = e, u = o === A, c = (0, s.useRadioItem)({
                        isSelected: u,
                        label: i
                    }), C = n ? void 0 : () => {
                        l(d, o)
                    };
                    return (0, a.jsx)(s.Clickable, {
                        ref: t,
                        className: r(f.radioOption, {
                            [f.selected]: u,
                            [f.disabled]: n
                        }),
                        onClick: C,
                        "aria-disabled": n,
                        ...c,
                        children: (0, a.jsx)("img", {
                            src: d,
                            alt: i,
                            className: f.radioOptionImage
                        })
                    })
                });

            function h(e) {
                let {
                    presetImages: t,
                    image: A,
                    imageName: n,
                    savedImageName: h,
                    onChange: T,
                    uploadButtonLabel: m = c.default.Messages.UPLOAD_IMAGE,
                    radioGroupAriaLabel: p = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
                    disabled: U = !1
                } = e, I = n === C, [v, E] = l.useState(I ? A : null), [x, N] = l.useState(null), q = l.useRef(null), O = l.useRef(null);
                l.useEffect(() => {
                    h !== C && (E(null), N(null))
                }, [h]);
                let R = null != x ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
                        filename: x
                    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
                    L = (0, s.useRadioGroup)({
                        orientation: "horizontal",
                        isDisabled: U
                    }),
                    D = () => {
                        var e;
                        return null === (e = q.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                    },
                    P = () => {
                        n === C && T(t[0].data, t[0].name), E(null), N(null)
                    };
                return l.useEffect(() => {
                    if (I && null != x) {
                        var e, t;
                        null === (t = O.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()
                    }
                }, [I, x]), (0, a.jsxs)("div", {
                    className: f.imageSelectionContainer,
                    children: [(0, a.jsx)(s.FocusRing, {
                        within: !0,
                        children: (0, a.jsxs)("div", {
                            className: r(f.uploadButton, {
                                [f.disabled]: U,
                                [f.hidden]: null != v
                            }),
                            "aria-disabled": U,
                            children: [(0, a.jsx)(i.default, {
                                width: 16,
                                height: 16,
                                color: "currentColor",
                                "aria-hidden": !0
                            }), (0, a.jsx)(s.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                "aria-hidden": !0,
                                children: m
                            }), (0, a.jsx)(o.default, {
                                ref: q,
                                tabIndex: 0,
                                onChange: (e, t) => {
                                    null != t && (N(t.name), E(e), T(e, C))
                                },
                                "aria-label": m
                            })]
                        })
                    }), null != v && (0, a.jsxs)("div", {
                        className: f.customImageActionContainer,
                        children: [(0, a.jsx)(s.Tooltip, {
                            text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
                            hideOnClick: !0,
                            children: e => (0, a.jsx)(s.Clickable, {
                                ...e,
                                className: f.customImageAction,
                                onClick: D,
                                "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
                                    filename: x
                                }),
                                children: (0, a.jsx)(d.default, {
                                    className: f.editIcon
                                })
                            })
                        }), (0, a.jsx)(s.Tooltip, {
                            text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
                            hideOnClick: !0,
                            children: e => (0, a.jsx)(s.Clickable, {
                                ...e,
                                className: f.customImageAction,
                                onClick: P,
                                "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
                                    filename: x
                                }),
                                children: (0, a.jsx)(u.default, {
                                    className: f.deleteIcon
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        "aria-label": p,
                        ...L,
                        className: f.radioGroup,
                        children: [null != v && (0, a.jsx)(g, {
                            ref: O,
                            selectedImageName: n,
                            onChange: T,
                            disabled: U,
                            name: C,
                            alt: R,
                            data: v
                        }), t.map(e => (0, a.jsx)(g, {
                            selectedImageName: n,
                            onChange: T,
                            disabled: U,
                            ...e
                        }, e.name))]
                    })]
                })
            }