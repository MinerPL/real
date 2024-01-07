            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                a = n("77078"),
                o = n("812204"),
                u = n("685665"),
                s = n("473591"),
                d = n("634544"),
                c = n("694187"),
                f = n("305961"),
                E = n("162771"),
                _ = n("697218"),
                p = n("471671"),
                h = n("887718"),
                T = n("818643"),
                S = n("216422"),
                I = n("599110"),
                A = n("719923"),
                g = n("354460"),
                m = n("424960"),
                C = n("49111"),
                N = n("75015"),
                v = n("991207"),
                R = n("782340"),
                O = n("461300");
            let U = [{
                gif: n("6916"),
                png: n("12412")
            }, {
                gif: n("463095"),
                png: n("733105")
            }, {
                gif: n("749003"),
                png: n("918927")
            }, {
                gif: n("54400"),
                png: n("122574")
            }];

            function y(e) {
                let {
                    shouldAnimate: t = !0
                } = e, [n, l] = r.useState(!1);
                return (0, i.jsx)("div", {
                    className: O.gifGrid,
                    onMouseMove: () => l(!0),
                    onMouseLeave: () => l(!1),
                    children: U.map(e => (0, i.jsx)("div", {
                        className: O.gif,
                        style: {
                            backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
                        }
                    }, e.gif))
                })
            }

            function M(e) {
                let {
                    guildFeature: t,
                    guild: n
                } = e;
                return null == t || null == n ? null : (0, i.jsx)("div", {
                    className: O.pillWrapper,
                    children: (0, i.jsx)(d.default, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function P(e) {
                let {
                    uploadType: t,
                    guild: n,
                    showNitroWheel: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: O.optionBoxText,
                    children: [(0, i.jsx)(M, {
                        guild: n,
                        guildFeature: (0, g.getGuildFeatureFromUploadType)(t, {
                            isGIF: !0
                        })
                    }), (0, i.jsxs)("div", {
                        className: O.optionBoxDescription,
                        children: [(0, g.shouldShowPremiumIconForGIFPickerOption)(t) && (0, i.jsx)(a.TooltipContainer, {
                            className: O.nitroWheelFlairContainer,
                            text: R.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: r && (0, i.jsx)(S.default, {
                                className: O.nitroWheelFlair
                            })
                        }), R.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function L(e) {
                let {
                    title: t,
                    uploadType: n,
                    guild: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: O.optionBoxText,
                    children: [(0, i.jsx)(M, {
                        guildFeature: (0, g.getGuildFeatureFromUploadType)(n, {
                            isGIF: !1
                        }),
                        guild: r
                    }), (0, i.jsx)("div", {
                        className: O.optionBoxDescription,
                        children: t
                    })]
                })
            }

            function D(e) {
                let {
                    transitionState: t,
                    onClose: d,
                    onComplete: S,
                    uploadType: g,
                    maxFileSizeBytes: U,
                    showUpsellHeader: M,
                    filters: D,
                    analyticsLocation: w,
                    analyticsLocations: b = [],
                    modalSubTitle: F,
                    imageSpecifications: x,
                    modalTitle: V = R.default.Messages.SELECT_IMAGE_MODAL_TITLE,
                    uploadOptionTitle: G = R.default.Messages.UPLOAD_IMAGE
                } = e, k = (0, l.useStateFromStores)([p.default], () => p.default.isFocused()), B = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()), H = (0, l.useStateFromStores)([E.default], () => E.default.getGuildId()), j = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(H)), W = (0, l.useStateFromStores)([s.default], () => s.default.isEditingClydeProfile()), {
                    reducedMotion: Y
                } = r.useContext(a.AccessibilityPreferencesContext), z = (0, a.useModalContext)(), K = !A.default.canUseAnimatedAvatar(B) && g === N.UploadTypes.AVATAR && !W, {
                    analyticsLocations: Z
                } = (0, u.default)(b, o.default.SELECT_IMAGE_MODAL);

                function X(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    d(), S(e, t, n)
                }
                return r.useEffect(() => {
                    K && I.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: C.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Z
                    }), I.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: w
                    })
                }, [K, w, Z]), (0, i.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    children: [(0, i.jsxs)(a.ModalHeader, {
                        className: O.modalHeader,
                        separator: !1,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H1,
                                className: O.modalTitle,
                                children: V
                            }), null != F ? (0, i.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: F
                            }) : null]
                        }), (0, i.jsx)(a.ModalCloseButton, {
                            onClick: d,
                            className: O.modalCloseButton
                        })]
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: O.modalContent,
                        children: [(0, i.jsxs)("div", {
                            className: O.imagePickerContainer,
                            children: [(0, i.jsxs)(a.Clickable, {
                                className: O.optionBox,
                                children: [(0, i.jsx)("div", {
                                    className: O.contentCircle,
                                    children: (0, i.jsx)(T.default, {
                                        className: O.uploadIcon
                                    })
                                }), (0, i.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(L, {
                                        title: G,
                                        uploadType: g,
                                        guild: j
                                    })
                                }), (0, i.jsx)(c.default, {
                                    onChange: function(e, t) {
                                        if (t.type === v.FileTypes.MP4) return X(e, t);
                                        (0, a.openModalLazy)(async () => {
                                            let {
                                                default: r
                                            } = await n.el("57015").then(n.bind(n, "57015"));
                                            return n => (0, i.jsx)(r, {
                                                imgURI: e,
                                                file: t,
                                                onCrop: X,
                                                uploadType: g,
                                                showUpsellHeader: M,
                                                allowSkip: !0,
                                                analyticsPage: null == w ? void 0 : w.page,
                                                ...n
                                            })
                                        }, {
                                            contextKey: z
                                        })
                                    },
                                    maxFileSizeBytes: U,
                                    onFileSizeError: function() {
                                        d(), (0, m.default)(U)
                                    },
                                    filters: D
                                })]
                            }), (0, i.jsxs)(a.Clickable, {
                                className: O.optionBox,
                                onClick: function() {
                                    (0, a.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("646077").then(n.bind(n, "646077"));
                                        return t => (0, i.jsx)(e, {
                                            uploadType: g,
                                            onComplete: (e, t) => X(e, t, !0),
                                            showUpsellHeader: M,
                                            analyticsPage: null == w ? void 0 : w.page,
                                            ...t
                                        })
                                    }, {
                                        contextKey: z
                                    })
                                },
                                children: [(0, i.jsxs)("div", {
                                    className: O.contentCircle,
                                    children: [(0, i.jsx)(y, {
                                        shouldAnimate: k && !Y.enabled
                                    }), (0, i.jsx)("div", {
                                        className: O.gifIconContainer,
                                        children: (0, i.jsx)(h.default, {
                                            className: O.gifIcon
                                        })
                                    })]
                                }), (0, i.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, i.jsx)(P, {
                                        uploadType: g,
                                        guild: j,
                                        showNitroWheel: !W
                                    })
                                })]
                            })]
                        }), null != x ? (0, i.jsx)(a.Text, {
                            className: O.imageSpecifications,
                            variant: "text-sm/normal",
                            children: x
                        }) : null]
                    })]
                })
            }