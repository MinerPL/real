(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68360"], {
        136759: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                persist: function() {
                    return u
                }
            }), r("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var n = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                o = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                s = (e, t) => {
                    for (var r in t || (t = {})) a.call(t, r) && o(e, r, t[r]);
                    if (i)
                        for (var r of i(t)) l.call(t, r) && o(e, r, t[r]);
                    return e
                };
            let c = e => t => {
                    try {
                        let r = e(t);
                        if (r instanceof Promise) return r;
                        return {
                            then: e => c(e)(r),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => c(t)(e)
                        }
                    }
                },
                u = (e, t) => (r, n, i) => {
                    let a, l, o = s({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => s(s({}, t), e)
                    }, t);
                    (o.blacklist || o.whitelist) && console.warn("The ".concat(o.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let u = !1,
                        d = new Set,
                        f = new Set;
                    try {
                        a = o.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(o.name, "', the given storage is currently unavailable.")), r(...t)
                    }, n, i);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(o.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let h = c(o.serialize),
                        v = () => {
                            let e;
                            let t = o.partialize(s({}, n()));
                            o.whitelist && Object.keys(t).forEach(e => {
                                var r;
                                (null == (r = o.whitelist) ? void 0 : r.includes(e)) || delete t[e]
                            }), o.blacklist && o.blacklist.forEach(e => delete t[e]);
                            let r = h({
                                state: t,
                                version: o.version
                            }).then(e => a.setItem(o.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return r
                        },
                        p = i.setState;
                    i.setState = (e, t) => {
                        p(e, t), v()
                    };
                    let g = e(function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r(...t), v()
                        }, n, i),
                        w = () => {
                            var e;
                            if (!a) return;
                            u = !1, d.forEach(e => e(n()));
                            let t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, n())) || void 0;
                            return c(a.getItem.bind(a))(o.name).then(e => {
                                if (e) return o.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === o.version) return e.state;
                                    if (o.migrate) return o.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(l = o.merge(e, null != (t = n()) ? t : g), !0), v()
                            }).then(() => {
                                null == t || t(l, void 0), u = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            o = s(s({}, o), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, o.name)
                        },
                        rehydrate: () => w(),
                        hasHydrated: () => u,
                        onHydrate: e => (d.add(e), () => {
                            d.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, w(), l || g
                }
        },
        328269: function(e, t, r) {
            "use strict";
            e.exports = r.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, r) {
            "use strict";
            e.exports = r.p + "80b04934274a1d198741.svg"
        },
        96386: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("414456"),
                a = r.n(i),
                l = r("691870"),
                o = e => {
                    let {
                        message: t,
                        className: r,
                        noResultsImageURL: i,
                        forceLightTheme: o,
                        suggestions: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: a({
                            [l.forceLightTheme]: o
                        }, r),
                        children: (0, n.jsxs)("div", {
                            className: l.wrapper,
                            children: [(0, n.jsx)("div", {
                                className: l.sadImage,
                                style: null != i ? {
                                    backgroundImage: "url(".concat(i, ")")
                                } : {}
                            }), (0, n.jsx)("div", {
                                children: t
                            }), s]
                        })
                    })
                }
        },
        737960: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983"),
                i = r("884691"),
                a = r("308723");

            function l(e) {
                return i.forwardRef(function(t, r) {
                    let l = i.useRef();
                    return i.useImperativeHandle(r, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, n.jsx)(a.default, {
                        ref: l,
                        children: r => {
                            let {
                                width: i,
                                height: a
                            } = r;
                            return (0, n.jsx)(e, {
                                ...t,
                                width: i,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        308472: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                AnalyticsIcon: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.586V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L11.5 13.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L9 13.414l1.793 1.793a1 1 0 0 0 1.414 0L18 9.414Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        891722: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ArrowSmallLeftIcon: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("669491"),
                a = r("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M3.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 13H20a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        className: o
                    })
                })
            }
        },
        538282: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
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
                    return h
                },
                setExpressionPickerView: function() {
                    return v
                },
                setSearchQuery: function() {
                    return p
                },
                useExpressionPickerStore: function() {
                    return g
                }
            });
            var n = r("995008"),
                i = r.n(n),
                a = r("308503"),
                l = r("136759"),
                o = r("13030");
            let s = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return i(e)
                    }()
                }),
                c = (0, a.default)((0, l.persist)((e, t) => s, {
                    name: "expression-picker-last-active-view",
                    partialize: e => ({
                        lastActiveView: e.lastActiveView
                    })
                })),
                u = (e, t) => {
                    c.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: c.getState().activeView
                    })
                },
                d = e => {
                    let t = c.getState();
                    if (void 0 === e || e === t.activeViewType) null !== t.activeView && c.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: t.activeView
                    })
                },
                f = e => {
                    let t = c.getState();
                    if (null == t.activeView) {
                        var r;
                        u(null !== (r = t.lastActiveView) && void 0 !== r ? r : o.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                h = (e, t) => {
                    c.getState().activeView === e ? d() : u(e, t)
                },
                v = e => {
                    c.setState({
                        activeView: e,
                        lastActiveView: c.getState().activeView
                    })
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    c.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                g = c
        },
        646077: function(e, t, r) {
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
        },
        254398: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                makeTenorProxyURL: function() {
                    return a
                }
            }), r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007"), r("70102");
            var n = r("49111");
            let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function a(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: r
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
                let a = "".concat(n.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(r).concat(a)
            }
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return o
                }
            });
            var n = r("884691"),
                i = r("446674"),
                a = r("872173"),
                l = r("374363");

            function o() {
                return n.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        531470: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("891722"),
                l = r("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, a.ArrowSmallLeftIcon, void 0, {
                    size: 24
                })
        },
        240292: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("469563"),
                a = r("308472"),
                l = r("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, n.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, a.AnalyticsIcon, void 0, {
                    size: 24
                })
        }
    }
]);