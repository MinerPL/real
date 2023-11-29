(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59211"], {
        361345: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7a280f89e607805835b8.png"
        },
        627771: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1998dcf226b71188b1bb.png"
        },
        202023: function(e, t, n) {
            "use strict";
            e.exports = n.p + "41fc6b68fd6791249f24.png"
        },
        626964: function(e, t, n) {
            "use strict";
            e.exports = n.p + "967ea9a6f0917ccea479.png"
        },
        937549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5cf339c022ee100316f1.png"
        },
        674303: function(e, t, n) {
            "use strict";
            e.exports = n.p + "969507450abcd9cdd0f8.png"
        },
        475577: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c19dbbb190412b96403e.png"
        },
        365127: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ca564c0842e4bf922a9.png"
        },
        711737: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d886ddab54ac6aa53568.png"
        },
        361784: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ecfa3eb0eb955e3006a.png"
        },
        134647: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9d40ac01a4c79449fa1c.png"
        },
        856931: function(e, t, n) {
            "use strict";
            e.exports = n.p + "48956fccb1adf21b366d.png"
        },
        160864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("77078"),
                l = n("716849"),
                c = n("552917"),
                u = n("109036"),
                d = n("336522"),
                p = n("782340"),
                h = n("831839"),
                f = n("4184");

            function v() {
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.lightWhite, h.lightOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.lightWhite, h.lightTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.crossWhite, h.crossOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.crossWhite, h.crossTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.popWhite, h.popOne)
                    })]
                })
            }
            class g extends s.Component {
                componentDidMount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
                }
                componentWillUnmount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
                }
                render() {
                    let {
                        title: e,
                        description: t,
                        icons: n,
                        style: s,
                        className: i
                    } = this.props;
                    return (0, r.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: a(i, h.uploadArea, {
                            [h.droppable]: this.state.isDragging,
                            [h.uploadModalIn]: this.state.isOverZone
                        }),
                        style: s,
                        children: (0, r.jsxs)("div", {
                            className: h.uploadDropModal,
                            children: [this.state.isDragging && (0, r.jsx)(v, {}), (0, r.jsx)("div", {
                                className: h.bgScale
                            }), (0, r.jsxs)("div", {
                                className: h.inner,
                                children: [(0, r.jsx)(u.default, {
                                    icons: n
                                }), (0, r.jsx)("div", {
                                    className: h.title,
                                    children: e
                                }), (0, r.jsx)("div", {
                                    className: h.instructions,
                                    children: (0, r.jsx)("pre", {
                                        children: t
                                    })
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        isDragging: !1,
                        isOverZone: !1
                    }, this.dragOverTimeout = null, this.elementDOMRef = s.createRef(), this.isAllDropFiles = e => {
                        for (let n = 0; n < e.length; n++) try {
                            var t;
                            let r = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                            if (r && !r.isFile) return !1
                        } catch (e) {
                            continue
                        }
                        return !0
                    }, this.preventUnwantedDrop = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = e.dataTransfer;
                        if (null == r) return !0;
                        let s = Array.isArray(r.types) && -1 !== r.types.indexOf("text/uri-list") && -1 === r.types.indexOf("application/json"),
                            i = null != r.items && !t.isAllDropFiles(r.items);
                        return !s && !i || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
                            isDragging: !1
                        }), (0, d.openUploadError)({
                            title: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                            help: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                            icons: t.props.icons
                        })), !1)
                    }, this.handleDragOver = e => {
                        var t, n, r;
                        if (!this.preventUnwantedDrop(e)) return !1;
                        let s = e.dataTransfer;
                        if (null == s) return;
                        s.dropEffect = "copy";
                        let i = (0, o.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
                        if (i && (0, o.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
                            (0, l.maybeFetchPremiumLikelihood)(c.default);
                            let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView,
                                t = null != e && s.types instanceof e.DOMStringList && s.types.contains("application/x-moz-file");
                            (t || -1 !== s.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
                                isDragging: !0
                            })
                        }
                        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({
                                isDragging: !1
                            }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                        }, 1e3)
                    }, this.handleDragOverZone = () => {
                        this.setState({
                            isOverZone: !0
                        })
                    }, this.handleDragLeaveZone = () => {
                        this.setState({
                            isOverZone: !1
                        })
                    }, this.handleDragLeave = e => {
                        this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
                    }, this.clearDragging = () => {
                        var e, t;
                        this.setState({
                            isDragging: !1,
                            isOverZone: !1
                        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                    }, this.handleDrop = e => {
                        if (!this.preventUnwantedDrop(e, !0)) return !1;
                        let t = e.dataTransfer;
                        if (null == t) return !0;
                        this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
                    }
                }
            }
            var m = g
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return r
                },
                default: function() {
                    return u
                }
            }), n("222007");
            var r, s, i, a, o = n("884691"),
                l = n("917351");

            function c(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(i = r || (r = {}))[i.VERTICAL_TOP = 0] = "VERTICAL_TOP", i[i.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", i[i.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", i[i.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = s || (s = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
            var u = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: i,
                    onElementResizeEnd: a,
                    throttleDuration: u = 300,
                    orientation: d,
                    usePointerEvents: p = !1
                } = e, [h, f] = o.useState(!1), v = o.useRef(0), g = o.useRef(null == t ? 0 : t);
                return o.useLayoutEffect(() => {
                    if (!h || null == n.current) return;

                    function e(e) {
                        let t = 1 === c(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            i = (t - v.current) * (n ? -1 : 1),
                            a = g.current + i;
                        return (0, l.clamp)(a, null != s ? s : 0, null != r ? r : a)
                    }
                    let t = (0, l.throttle)(i, u),
                        o = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                i = 1 === c(d) ? "width" : "height";
                            n.current.style[i] = "".concat(s, "px"), t(s)
                        },
                        m = t => {
                            f(!1);
                            let n = e(t);
                            i(n), null == a || a(n)
                        },
                        x = p ? "pointerup" : "mouseup",
                        D = p ? "pointermove" : "mousemove",
                        E = n.current.ownerDocument;
                    return E.addEventListener(x, m), E.addEventListener(D, o), () => {
                        E.removeEventListener(x, m), E.removeEventListener(D, o), t.cancel()
                    }
                }, [h, i, s, r, d, n, u, a, p]), o.useCallback(e => {
                    let t = 1 === c(d);
                    null != n.current && (g.current = t ? n.current.offsetWidth : n.current.offsetHeight), v.current = t ? e.screenX : e.screenY, f(!0)
                }, [d, n])
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let s = r.createContext(void 0);
            var i = s
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return f
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("301165"),
                l = n("77078"),
                c = n("913144"),
                u = n("474293"),
                d = n("958706"),
                p = n("782340"),
                h = n("505436");
            let f = {
                tension: 800,
                friction: 24
            };
            var v = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: i,
                    active: v,
                    onClick: g,
                    "aria-controls": m,
                    focusProps: x
                } = e, [D, E] = s.useState(!1), [O, b] = s.useState(0), j = D || v, L = (0, u.getClass)(h, "emojiButton", j ? "Hovered" : "Normal"), N = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(O), T = s.useCallback(() => {
                    if (j) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    E(!0), b(e), c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [j, E, b]), I = s.useCallback(() => {
                    E(!1)
                }, [E]), R = s.useCallback(() => {
                    c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.NONE,
                    tabIndex: t,
                    className: a(L, n),
                    onMouseEnter: T,
                    onMouseOver: T,
                    onMouseLeave: I,
                    onFocus: R,
                    onClick: g,
                    "aria-label": p.default.Messages.SELECT_EMOJI,
                    "aria-controls": m,
                    "aria-expanded": v,
                    "aria-haspopup": "dialog",
                    focusProps: x,
                    children: null != i ? i() : (0, r.jsx)(o.Spring, {
                        config: f,
                        to: {
                            value: j ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(o.animated.div, {
                                className: h.sprite,
                                style: {
                                    ...N,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("645156"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: i,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, r.jsx)("polygon", {
                                className: a,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, i.SlashIcon, void 0, {
                    size: 16
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return v
                },
                Divider: function() {
                    return g
                },
                default: function() {
                    return x
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("353386"),
                l = n("394846"),
                c = n("77078"),
                u = n("597590"),
                d = n("980428"),
                p = n("772280"),
                h = n("587974"),
                f = n("133934");
            let v = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: s,
                        selected: i = !1,
                        disabled: o = !1,
                        showBadge: l = !1,
                        color: u,
                        foreground: d,
                        background: p,
                        icon: v,
                        onClick: g,
                        onContextMenu: m,
                        tooltip: x = null,
                        tooltipColor: D,
                        tooltipPosition: E = "bottom",
                        hideOnClick: O = !0,
                        role: b,
                        "aria-label": j,
                        "aria-hidden": L,
                        "aria-checked": N,
                        "aria-expanded": T,
                        "aria-haspopup": I
                    } = e, R = (0, r.jsx)(v, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, f.icon),
                        foreground: null != d ? d : void 0,
                        background: null != p ? p : void 0,
                        color: u
                    }), A = j;
                    return null == A && "string" == typeof x && (A = x), (0, r.jsx)(c.Tooltip, {
                        text: x,
                        color: D,
                        position: E,
                        hideOnClick: O,
                        children: e => {
                            let {
                                onMouseEnter: x,
                                onMouseLeave: D,
                                onFocus: E,
                                onBlur: O
                            } = e;
                            return null == g ? (0, r.jsx)("div", {
                                className: a(t, [f.iconWrapper]),
                                children: (0, r.jsx)(v, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a(n, f.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != p ? p : void 0,
                                    color: u,
                                    "aria-hidden": L,
                                    onMouseEnter: x,
                                    onMouseLeave: D,
                                    onFocus: E,
                                    onBlur: O
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: o ? void 0 : g,
                                onContextMenu: o ? void 0 : m,
                                onMouseEnter: x,
                                onMouseLeave: D,
                                onFocus: E,
                                onBlur: O,
                                className: a(t, {
                                    [f.iconWrapper]: !0,
                                    [f.clickable]: !o && null != g,
                                    [f.selected]: i
                                }),
                                role: b,
                                "aria-label": A,
                                "aria-hidden": L,
                                "aria-checked": N,
                                "aria-haspopup": I,
                                "aria-expanded": T,
                                tabIndex: o || null == g ? -1 : 0,
                                children: [l ? (0, r.jsx)(h.default, {
                                    mask: h.default.Masks.HEADER_BAR_BADGE,
                                    children: R
                                }) : R, l ? (0, r.jsx)("span", {
                                    className: f.iconBadge
                                }) : null, s]
                            })
                        }
                    })
                },
                g = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(f.divider, t)
                    })
                },
                m = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: i,
                        childrenBottom: d,
                        toolbar: p,
                        onDoubleClick: h,
                        "aria-label": v,
                        "aria-labelledby": g,
                        role: m,
                        scrollable: x,
                        transparent: D = !1
                    } = e, E = s.useRef(null), O = s.useContext(u.default);
                    return (0, r.jsx)("section", {
                        className: a(t, f.container, {
                            [f.themed]: !D,
                            [f.transparent]: D,
                            [f.themedMobile]: l.isMobile
                        }),
                        "aria-label": v,
                        "aria-labelledby": g,
                        role: m,
                        ref: E,
                        children: (0, r.jsxs)(c.FocusRingScope, {
                            containerRef: E,
                            children: [(0, r.jsxs)("div", {
                                className: f.upperContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: a(f.children, n, {
                                        [f.scrollable]: x
                                    }),
                                    onDoubleClick: h,
                                    children: [l.isMobile && null != O ? (0, r.jsx)(o.default, {
                                        onClick: O,
                                        className: f.hamburger
                                    }) : null, i]
                                }), null != p ? (0, r.jsx)("div", {
                                    className: f.toolbar,
                                    children: p
                                }) : null]
                            }), d]
                        })
                    })
                };
            m.Icon = v, m.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: s,
                    onContextMenu: i,
                    onClick: o,
                    id: l,
                    muted: u = !1,
                    level: d = 1
                } = e, p = (0, r.jsx)(c.HeadingLevel, {
                    forceLevel: d,
                    children: (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: u ? "header-secondary" : void 0,
                        className: a(t, f.title),
                        id: l,
                        children: s
                    })
                });
                return null != o ? (0, r.jsx)(c.Clickable, {
                    onClick: o,
                    onContextMenu: i,
                    className: a(n, f.titleWrapper),
                    children: p
                }) : (0, r.jsx)("div", {
                    className: a(n, f.titleWrapper),
                    onContextMenu: i,
                    children: p
                })
            }, m.Divider = g, m.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, r.jsx)(p.default, {
                    className: f.caret
                }) : (0, r.jsx)(d.default, {
                    className: f.caret
                })
            };
            var x = m
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("580420"),
                i = n.n(s),
                a = n("249907"),
                o = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...s
                    } = e;
                    return (0, r.jsxs)("button", {
                        type: "button",
                        className: i(a.btnHamburger, {
                            [a.btnHamburgerOpen]: t
                        }, n),
                        ...s,
                        children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                    })
                }
        }
    }
]);