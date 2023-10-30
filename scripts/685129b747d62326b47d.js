(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33235"], {
        361345: function(e, t, r) {
            "use strict";
            e.exports = r.p + "7a280f89e607805835b8.png"
        },
        627771: function(e, t, r) {
            "use strict";
            e.exports = r.p + "1998dcf226b71188b1bb.png"
        },
        202023: function(e, t, r) {
            "use strict";
            e.exports = r.p + "41fc6b68fd6791249f24.png"
        },
        626964: function(e, t, r) {
            "use strict";
            e.exports = r.p + "967ea9a6f0917ccea479.png"
        },
        937549: function(e, t, r) {
            "use strict";
            e.exports = r.p + "5cf339c022ee100316f1.png"
        },
        674303: function(e, t, r) {
            "use strict";
            e.exports = r.p + "969507450abcd9cdd0f8.png"
        },
        475577: function(e, t, r) {
            "use strict";
            e.exports = r.p + "c19dbbb190412b96403e.png"
        },
        365127: function(e, t, r) {
            "use strict";
            e.exports = r.p + "6ca564c0842e4bf922a9.png"
        },
        711737: function(e, t, r) {
            "use strict";
            e.exports = r.p + "d886ddab54ac6aa53568.png"
        },
        361784: function(e, t, r) {
            "use strict";
            e.exports = r.p + "6ecfa3eb0eb955e3006a.png"
        },
        134647: function(e, t, r) {
            "use strict";
            e.exports = r.p + "9d40ac01a4c79449fa1c.png"
        },
        856931: function(e, t, r) {
            "use strict";
            e.exports = r.p + "48956fccb1adf21b366d.png"
        },
        160864: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            });
            var n = r("37983"),
                s = r("884691"),
                i = r("414456"),
                a = r.n(i),
                o = r("77078"),
                l = r("716849"),
                c = r("552917"),
                u = r("109036"),
                d = r("336522"),
                p = r("782340"),
                h = r("831839"),
                f = r("4184");

            function g() {
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleOne)
                    }), (0, n.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleTwo)
                    }), (0, n.jsx)("div", {
                        className: a(f.lightWhite, h.lightOne)
                    }), (0, n.jsx)("div", {
                        className: a(f.lightWhite, h.lightTwo)
                    }), (0, n.jsx)("div", {
                        className: a(f.crossWhite, h.crossOne)
                    }), (0, n.jsx)("div", {
                        className: a(f.crossWhite, h.crossTwo)
                    }), (0, n.jsx)("div", {
                        className: a(f.popWhite, h.popOne)
                    })]
                })
            }
            class v extends s.Component {
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
                        icons: r,
                        style: s,
                        className: i
                    } = this.props;
                    return (0, n.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: a(i, h.uploadArea, {
                            [h.droppable]: this.state.isDragging,
                            [h.uploadModalIn]: this.state.isOverZone
                        }),
                        style: s,
                        children: (0, n.jsxs)("div", {
                            className: h.uploadDropModal,
                            children: [this.state.isDragging && (0, n.jsx)(g, {}), (0, n.jsx)("div", {
                                className: h.bgScale
                            }), (0, n.jsxs)("div", {
                                className: h.inner,
                                children: [(0, n.jsx)(u.default, {
                                    icons: r
                                }), (0, n.jsx)("div", {
                                    className: h.title,
                                    children: e
                                }), (0, n.jsx)("div", {
                                    className: h.instructions,
                                    children: (0, n.jsx)("pre", {
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
                        for (let r = 0; r < e.length; r++) try {
                            var t;
                            let n = null !== (t = e[r].webkitGetAsEntry()) && void 0 !== t ? t : e[r].getAsEntry();
                            if (n && !n.isFile) return !1
                        } catch (e) {
                            continue
                        }
                        return !0
                    }, this.preventUnwantedDrop = function(e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.dataTransfer;
                        if (null == n) return !0;
                        let s = Array.isArray(n.types) && -1 !== n.types.indexOf("text/uri-list") && -1 === n.types.indexOf("application/json"),
                            i = null != n.items && !t.isAllDropFiles(n.items);
                        return !s && !i || (e.stopPropagation(), e.preventDefault(), n.effectAllowed = "none", n.dropEffect = "none", r && (t.setState({
                            isDragging: !1
                        }), (0, d.openUploadError)({
                            title: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                            help: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                            icons: t.props.icons
                        })), !1)
                    }, this.handleDragOver = e => {
                        var t, r, n;
                        if (!this.preventUnwantedDrop(e)) return !1;
                        let s = e.dataTransfer;
                        if (null == s) return;
                        s.dropEffect = "copy";
                        let i = (0, o.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
                        if (i && (0, o.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (r = this.props).onDragOver) || void 0 === t || t.call(r, e), !this.state.isDragging) {
                            (0, l.maybeFetchPremiumLikelihood)(c.default);
                            let e = null === (n = this.elementDOMRef.current) || void 0 === n ? void 0 : n.ownerDocument.defaultView,
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
            var m = v
        },
        645156: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SlashIcon: function() {
                    return a
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("669491"),
                i = r("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        594203: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeOrientation: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var n, s, i, a, o = r("884691"),
                l = r("917351");

            function c(e) {
                return e === i.HORIZONTAL_LEFT || e === i.HORIZONTAL_RIGHT ? a.HORIZONTAL : a.VERTICAL
            }(n = i || (i = {}))[n.VERTICAL_TOP = 0] = "VERTICAL_TOP", n[n.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", n[n.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", n[n.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = a || (a = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
            var u = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: r,
                    maxDimension: n,
                    minDimension: s,
                    onElementResize: u,
                    onElementResizeEnd: d,
                    throttleDuration: p = 300,
                    orientation: h,
                    usePointerEvents: f = !1
                } = e, [g, v] = o.useState(!1), m = o.useRef(0), O = o.useRef(null == t ? 0 : t);
                return o.useLayoutEffect(() => {
                    if (!g || null == r.current) return;

                    function e(e) {
                        let t = c(h) === a.HORIZONTAL ? e.screenX : e.screenY,
                            r = h === i.VERTICAL_TOP || h === i.HORIZONTAL_LEFT,
                            o = (t - m.current) * (r ? -1 : 1),
                            u = O.current + o;
                        return (0, l.clamp)(u, null != s ? s : 0, null != n ? n : u)
                    }
                    let t = (0, l.throttle)(u, p),
                        o = n => {
                            if (null == r.current) return null;
                            let s = e(n),
                                i = c(h) === a.HORIZONTAL ? "width" : "height";
                            r.current.style[i] = "".concat(s, "px"), t(s)
                        },
                        L = t => {
                            v(!1);
                            let r = e(t);
                            u(r), null == d || d(r)
                        },
                        D = f ? "pointerup" : "mouseup",
                        E = f ? "pointermove" : "mousemove",
                        T = r.current.ownerDocument;
                    return T.addEventListener(D, L), T.addEventListener(E, o), () => {
                        T.removeEventListener(D, L), T.removeEventListener(E, o), t.cancel()
                    }
                }, [g, u, s, n, h, r, p, d, f]), o.useCallback(e => {
                    let t = c(h) === a.HORIZONTAL;
                    null != r.current && (O.current = t ? r.current.offsetWidth : r.current.offsetHeight), m.current = t ? e.screenX : e.screenY, v(!0)
                }, [h, r])
            }
        },
        882641: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return O
                },
                default: function() {
                    return L
                }
            });
            var n = r("37983"),
                s = r("884691"),
                i = r("414456"),
                a = r.n(i),
                o = r("301165"),
                l = r("446674"),
                c = r("77078"),
                u = r("765969"),
                d = r("630400"),
                p = r("557562"),
                h = r("162771"),
                f = r("474293"),
                g = r("958706"),
                v = r("782340"),
                m = r("505436");
            let O = {
                tension: 800,
                friction: 24
            };
            var L = function(e) {
                let {
                    tabIndex: t,
                    className: r,
                    renderButtonContents: i,
                    active: L,
                    onClick: D,
                    "aria-controls": E,
                    focusProps: T
                } = e, [x, R] = s.useState(!1), [b, A] = s.useState(0), I = (0, l.useStateFromStores)([h.default], () => h.default.getGuildId()), N = x || L, j = (0, f.getClass)(m, "emojiButton", N ? "Hovered" : "Normal"), _ = function(e) {
                    let t = -e % g.EmojiSprites.PickerPerRow * 22,
                        r = -(22 * Math.floor(e / g.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(r, "px"),
                        backgroundSize: "".concat(22 * g.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(g.EmojiSprites.PickerCount / g.EmojiSprites.PickerPerRow), "px")
                    }
                }(b), w = s.useCallback(() => {
                    if (N) return;
                    let e = Math.floor(Math.random() * g.EmojiSprites.PickerCount);
                    R(!0), A(e), (0, d.maybeFetchTopEmojisByGuild)(I), (0, p.maybeGetPacksForUser)("emoji button - mouse enter"), (0, u.maybeGetEmojiCaptionsForUser)("emoji button - mouse enter")
                }, [N, R, A, I]), y = s.useCallback(() => {
                    R(!1)
                }, [R]), M = s.useCallback(() => {
                    (0, d.maybeFetchTopEmojisByGuild)(I)
                }, [I]);
                return (0, n.jsx)(c.Button, {
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.NONE,
                    tabIndex: t,
                    className: a(j, r),
                    onMouseEnter: w,
                    onMouseOver: w,
                    onMouseLeave: y,
                    onFocus: M,
                    onClick: D,
                    "aria-label": v.default.Messages.SELECT_EMOJI,
                    "aria-controls": E,
                    "aria-expanded": L,
                    "aria-haspopup": "dialog",
                    focusProps: T,
                    children: null != i ? i() : (0, n.jsx)(o.Spring, {
                        config: O,
                        to: {
                            value: N ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.jsx)(o.animated.div, {
                                className: m.sprite,
                                style: {
                                    ..._,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        548775: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("469563"),
                i = r("645156"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: r = 16,
                        color: s = "currentColor",
                        className: i,
                        foreground: a
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: i,
                        width: t,
                        height: r,
                        viewBox: "0 0 16 16",
                        children: (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, n.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, n.jsx)("polygon", {
                                className: a,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, i.SlashIcon)
        }
    }
]);