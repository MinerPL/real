(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68360"], {
        328269: function(e, t, n) {
            "use strict";
            e.exports = n.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, n) {
            "use strict";
            e.exports = n.p + "80b04934274a1d198741.svg"
        },
        96386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("575482"),
                r = n.n(a),
                l = n("49049"),
                s = e => {
                    let {
                        message: t,
                        className: n,
                        noResultsImageURL: a,
                        forceLightTheme: s,
                        suggestions: c
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r({
                            [l.forceLightTheme]: s
                        }, n),
                        children: (0, i.jsxs)("div", {
                            className: l.wrapper,
                            children: [(0, i.jsx)("div", {
                                className: l.sadImage,
                                style: null != a ? {
                                    backgroundImage: "url(".concat(a, ")")
                                } : {}
                            }), (0, i.jsx)("div", {
                                children: t
                            }), c]
                        })
                    })
                }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040"),
                a = n("773670"),
                r = n("363363");

            function l(e) {
                return a.forwardRef(function(t, n) {
                    let l = a.useRef();
                    return a.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, i.jsx)(r.default, {
                        ref: l,
                        children: n => {
                            let {
                                width: a,
                                height: r
                            } = n;
                            return (0, i.jsx)(e, {
                                ...t,
                                width: a,
                                height: r
                            })
                        }
                    })
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("912557"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm17 5.414V11a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L13.5 11.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 1 0 1.414 1.414L11 11.414l1.793 1.793a1 1 0 0 0 1.414 0L20 7.414Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        891722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallLeftIcon: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("912557"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 13H20a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        538282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openExpressionPicker: function() {
                    return u
                },
                closeExpressionPicker: function() {
                    return d
                },
                toggleMultiExpressionPicker: function() {
                    return f
                },
                toggleExpressionPicker: function() {
                    return v
                },
                setExpressionPickerView: function() {
                    return p
                },
                setSearchQuery: function() {
                    return h
                },
                useExpressionPickerStore: function() {
                    return w
                }
            });
            var i = n("552473"),
                a = n.n(i),
                r = n("710835"),
                l = n("212653"),
                s = n("13030");
            let c = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return a(e)
                    }()
                }),
                o = (0, r.default)((0, l.persist)((e, t) => c, {
                    name: "expression-picker-last-active-view",
                    partialize: e => ({
                        lastActiveView: e.lastActiveView
                    })
                })),
                u = (e, t) => {
                    o.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: o.getState().activeView
                    })
                },
                d = e => {
                    let t = o.getState();
                    if (void 0 === e || e === t.activeViewType) null !== t.activeView && o.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: t.activeView
                    })
                },
                f = e => {
                    let t = o.getState();
                    if (null == t.activeView) {
                        var n;
                        u(null !== (n = t.lastActiveView) && void 0 !== n ? n : s.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                v = (e, t) => {
                    o.getState().activeView === e ? d() : u(e, t)
                },
                p = e => {
                    o.setState({
                        activeView: e,
                        lastActiveView: o.getState().activeView
                    })
                },
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    o.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                w = o
        },
        646077: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n("920040"),
                a = n("773670"),
                r = n("575482"),
                l = n.n(r),
                s = n("77078"),
                c = n("812204"),
                o = n("685665"),
                u = n("873622"),
                d = n("476765"),
                f = n("599110"),
                v = n("652914"),
                p = n("254398"),
                h = n("49111"),
                w = n("782340"),
                g = n("351412");

            function x(e) {
                let {
                    transitionState: t,
                    onClose: r,
                    onComplete: x,
                    uploadType: A,
                    showUpsellHeader: m,
                    analyticsPage: S
                } = e, [y, L] = a.useState(!1), E = (0, s.useModalContext)(), V = (0, d.useUID)(), {
                    AnalyticsLocationProvider: I
                } = (0, o.default)(c.default.GIF_PICKER);
                async function R(e) {
                    let {
                        gifSrc: t
                    } = e;
                    if (null == t || y) return;
                    L(!0);
                    let a = (0, p.makeTenorProxyURL)(t),
                        l = await fetch(a),
                        c = await l.blob();
                    r(), (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("57015").then(n.bind(n, "57015"));
                        return t => (0, i.jsx)(e, {
                            imgURI: a,
                            file: new File([c], "tenor.gif", {
                                type: "image/gif"
                            }),
                            onCrop: x,
                            uploadType: A,
                            showUpsellHeader: m,
                            ...t
                        })
                    }, {
                        contextKey: E
                    })
                }
                return a.useEffect(() => {
                    f.default.track(h.AnalyticEvents.OPEN_MODAL, {
                        type: h.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: S
                        }
                    })
                }, [S]), (0, i.jsx)(I, {
                    children: (0, i.jsxs)(s.ModalRoot, {
                        className: g.gifPickerCroppingModal,
                        "aria-labelledby": V,
                        transitionState: t,
                        size: s.ModalSize.SMALL,
                        children: [m ? (0, i.jsx)(v.default, {
                            type: A,
                            analyticsPage: S,
                            analyticsSection: h.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, i.jsxs)(s.ModalHeader, {
                            className: g.modalHeader,
                            separator: !1,
                            children: [(0, i.jsx)(s.FormTitle, {
                                className: g.titleCase,
                                tag: s.FormTitleTags.H1,
                                children: w.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, i.jsx)(s.ModalCloseButton, {
                                onClick: r,
                                className: g.modalCloseButton
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(u.default, {
                                className: l(g.gifPicker, {
                                    [g.loadingOverlay]: y
                                }),
                                onSelectGIF: R,
                                hideFavorites: !0
                            }), y && (0, i.jsx)(s.Spinner, {
                                className: g.spinner
                            })]
                        })]
                    })
                })
            }
        },
        254398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeTenorProxyURL: function() {
                    return r
                }
            });
            var i = n("49111");
            let a = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function r(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: n
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(a)) throw Error("Unexpected Tenor GIF path.");
                let r = "".concat(i.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(r)
            }
        },
        42507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return s
                }
            });
            var i = n("773670"),
                a = n("498225"),
                r = n("872173"),
                l = n("374363");

            function s() {
                return i.useEffect(() => {
                    r.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, a.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        531470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("469563"),
                r = n("891722"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, r.ArrowSmallLeftIcon)
        },
        240292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("469563"),
                r = n("308472"),
                l = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, i.jsx)("path", {
                                className: r,
                                fill: a,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, r.AnalyticsIcon)
        }
    }
]);