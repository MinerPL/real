            "use strict";
            n.r(t), n.d(t, {
                Operations: function() {
                    return i
                },
                default: function() {
                    return C
                }
            }), n("222007"), n("70102");
            var i, a, l = n("37983"),
                s = n("884691"),
                o = n("414456"),
                r = n.n(o),
                d = n("233736"),
                u = n("80687"),
                c = n("49111"),
                f = n("502011");
            let h = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
            (a = i || (i = {})).MOVE = "MOVE", a.RESIZE_NORTH = "RESIZE_NORTH", a.RESIZE_WEST = "RESIZE_WEST", a.RESIZE_EAST = "RESIZE_EAST", a.RESIZE_SOUTH = "RESIZE_SOUTH", a.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", a.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", a.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", a.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST";
            let p = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

            function g(e, t, n) {
                let {
                    width: i,
                    height: a
                } = e;
                return {
                    width: "auto" === i ? "auto" : Math.max(t, i),
                    height: "auto" === a ? "auto" : Math.max(n, a)
                }
            }

            function m(e) {
                let {
                    top: t,
                    left: n,
                    bottom: i,
                    right: a
                } = e;
                return null == n && null == a && (n = 0), null != n && null != a && (a = null), null == t && null == i && (t = 0), null != t && null != i && (i = null), {
                    top: t,
                    left: n,
                    bottom: i,
                    right: a
                }
            }

            function S(e) {
                return "auto" === e || null == e ? "auto" : "".concat(e, "px")
            }

            function E(e, t) {
                let n = 0,
                    i = 0;
                return n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width, {
                    width: n,
                    height: i = "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
                }
            }

            function v(e, t) {
                let {
                    top: n,
                    left: i,
                    bottom: a,
                    right: l
                } = t;
                switch (e) {
                    case "RESIZE_EAST":
                    case "RESIZE_NORTH_EAST":
                    case "RESIZE_NORTH":
                        return {
                            bottom: a, left: i, right: null, top: null
                        };
                    case "RESIZE_WEST":
                    case "RESIZE_NORTH_WEST":
                        return {
                            bottom: a, right: l, left: null, top: null
                        };
                    case "RESIZE_SOUTH_EAST":
                        return {
                            top: n, left: i, bottom: null, right: null
                        };
                    case "RESIZE_SOUTH":
                    case "RESIZE_SOUTH_WEST":
                        return {
                            top: n, right: l, bottom: null, left: null
                        };
                    default:
                        throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
                }
            }
            class y extends s.Component {
                shouldComponentUpdate(e, t) {
                    return !(0, d.default)(t, this.state) || !(0, d.default)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, d.default)(e.anchor, this.props.anchor) || !(0, d.default)(e.size, this.props.size) || !(0, d.default)(e.minSize, this.props.minSize) || !(0, d.default)(e.container, this.props.container)
                }
                componentDidUpdate(e, t) {
                    null == t.operation && (!(0, d.default)(this.props.anchor, e.anchor) && this.setDOMPositions(m(this.props.anchor)), !(0, d.default)(this.props.size, e.size) && this.setDOMSize(g(this.props.size, this.props.minSize.width, this.props.minSize.height)))
                }
                componentWillUnmount() {
                    this.handleOperationEnd()
                }
                handleResizeMouseDown(e, t) {
                    let {
                        clientX: n,
                        clientY: i
                    } = e;
                    e.stopPropagation(), this.handleOperationStart(t, n, i)
                }
                handleDragMove(e, t) {
                    let {
                        ref: {
                            current: n
                        },
                        props: {
                            id: i,
                            container: {
                                maxX: a,
                                maxY: l,
                                minX: s,
                                minY: o
                            },
                            onDragStart: r,
                            onDrag: d,
                            snapOrientation: c
                        },
                        dragState: {
                            offsetX: f,
                            offsetY: h
                        },
                        state: {
                            operationStarted: p
                        }
                    } = this;
                    if (null == n) return null;
                    e = Math.max(Math.min(a, e), s), t = Math.max(Math.min(l, t), o);
                    let {
                        width: g,
                        height: m
                    } = E(n, this.size), S = t - h, y = e - f, C = (0, u.fitFullCoordsToContainer)((0, u.getFullCoordsFromAnchorCoords)({
                        top: S,
                        left: y,
                        bottom: null,
                        right: null
                    }, a, l, g, m)), I = c ? (0, u.getAnchorCoordsFromFullCoords)(C) : v("RESIZE_SOUTH_EAST", C);
                    this.setDOMPositions(I), !p && (null != r && r(), this.setState({
                        operationStarted: !0
                    })), null != d && d(i, "MOVE", this.anchor, this.size)
                }
                handleResizeMove(e, t) {
                    let {
                        props: {
                            id: n,
                            minSize: i,
                            container: {
                                maxX: a,
                                maxY: l,
                                minX: s,
                                minY: o
                            },
                            onDragStart: r,
                            onDrag: d
                        },
                        state: {
                            operation: u,
                            operationStarted: c
                        }
                    } = this, {
                        startX: f,
                        startY: h,
                        offsetWidth: p,
                        offsetHeight: g
                    } = this.dragState, m = 0, S = 0;
                    if (null != u) {
                        switch (e = Math.max(Math.min(a, e), s), t = Math.max(Math.min(l, t), o), u) {
                            case "RESIZE_EAST":
                            case "RESIZE_SOUTH_EAST":
                            case "RESIZE_NORTH_EAST":
                                m -= f - e;
                                break;
                            case "RESIZE_WEST":
                            case "RESIZE_SOUTH_WEST":
                            case "RESIZE_NORTH_WEST":
                                m += f - e
                        }
                        switch (u) {
                            case "RESIZE_SOUTH":
                            case "RESIZE_SOUTH_WEST":
                            case "RESIZE_SOUTH_EAST":
                                S -= h - t;
                                break;
                            case "RESIZE_NORTH":
                            case "RESIZE_NORTH_WEST":
                            case "RESIZE_NORTH_EAST":
                                S += h - t
                        }
                        p = Math.max(p + m, i.width), g = Math.max(g + S, i.height), this.setDOMSize({
                            width: p,
                            height: g
                        }), !c && (null != r && r(), this.setState({
                            operationStarted: !0
                        })), null != d && d(n, u, this.anchor, this.size)
                    }
                }
                setDOMPositions(e) {
                    let {
                        top: t,
                        left: n,
                        bottom: i,
                        right: a
                    } = e, {
                        current: l
                    } = this.ref;
                    this.anchor = {
                        top: t,
                        left: n,
                        bottom: i,
                        right: a
                    }, null != l && (l.style.top = S(t), l.style.bottom = S(i), l.style.left = S(n), l.style.right = S(a))
                }
                setDOMSize(e) {
                    let {
                        width: t,
                        height: n
                    } = e, {
                        current: i
                    } = this.ref;
                    t = "auto" === this.size.width ? "auto" : t, n = "auto" === this.size.height ? "auto" : n, this.size = {
                        width: t,
                        height: n
                    }, null != i && (i.style.width = S(t), i.style.height = S(n))
                }
                renderResizeHandles() {
                    let {
                        resizeY: e,
                        resizeX: t,
                        active: n
                    } = this.props;
                    return (0, l.jsxs)(s.Fragment, {
                        children: [e ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: r(f.resizeNorth, {
                                    [f.resizeNSCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
                            }), (0, l.jsx)("div", {
                                className: r(f.resizeSouth, {
                                    [f.resizeNSCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
                            })]
                        }) : null, t ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: r(f.resizeEast, {
                                    [f.resizeEWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
                            }), (0, l.jsx)("div", {
                                className: r(f.resizeWest, {
                                    [f.resizeEWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
                            })]
                        }) : null, t && e ? (0, l.jsxs)(s.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: r(f.resizeNorthWest, {
                                    [f.resizeNWSECursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
                            }), (0, l.jsx)("div", {
                                className: r(f.resizeNorthEast, {
                                    [f.resizeNESWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
                            }), (0, l.jsx)("div", {
                                className: r(f.resizeSouthWest, {
                                    [f.resizeNESWCursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
                            }), (0, l.jsx)("div", {
                                className: r(f.resizeSouthEast, {
                                    [f.resizeNWSECursor]: n
                                }),
                                onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
                            })]
                        }) : null]
                    })
                }
                render() {
                    let {
                        props: {
                            children: e,
                            hidden: t,
                            onClick: n,
                            id: i,
                            style: a
                        },
                        size: s,
                        anchor: o,
                        state: {
                            operation: d,
                            operationStarted: u
                        }
                    } = this;
                    return (0, l.jsxs)("div", {
                        ref: this.ref,
                        style: {
                            ...o,
                            ...s,
                            ...a,
                            ...null != d ? {
                                zIndex: 1e3
                            } : void 0,
                            ...t ? {
                                visibility: "hidden"
                            } : void 0
                        },
                        className: r({
                            [f.wrapper]: !0,
                            [f.operation]: u
                        }),
                        onMouseDown: this.handleMouseDown,
                        onClick: null != n ? () => n(i) : void 0,
                        children: [e(this.handleOperationStart), this.renderResizeHandles()]
                    })
                }
                constructor(e) {
                    super(e), this.ref = s.createRef(), this.dragState = {
                        startX: 0,
                        startY: 0,
                        offsetX: 0,
                        offsetY: 0,
                        offsetWidth: 0,
                        offsetHeight: 0
                    }, this.state = {
                        operation: null,
                        operationStarted: !1
                    }, this.handleMouseDown = e => {
                        e.stopPropagation();
                        let {
                            dragAnywhere: t
                        } = this.props, {
                            current: n
                        } = this.ref;
                        null != n && e.button === c.MouseButtons.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
                    }, this.handleMouseMove = e => {
                        e.preventDefault(), e.stopPropagation();
                        let {
                            clientX: t,
                            clientY: n
                        } = e, {
                            dragState: {
                                startX: i,
                                startY: a
                            },
                            state: {
                                operation: l,
                                operationStarted: s
                            }
                        } = this;
                        !(null == l || !s && 3 > h(i, a, t, n)) && ("MOVE" === l ? this.handleDragMove(t, n) : p.has(l) && this.handleResizeMove(t, n))
                    }, this.handleOperationStart = (e, t, n) => {
                        let {
                            ref: {
                                current: i
                            },
                            props: {
                                active: a,
                                container: {
                                    maxX: l,
                                    maxY: s
                                }
                            }
                        } = this;
                        if (null == i || !a) return;
                        let {
                            width: o,
                            height: r
                        } = E(i, this.size), d = (0, u.getFullCoordsFromAnchorCoords)(this.anchor, l, s, o, r);
                        if ("MOVE" === e) {
                            let {
                                x: e,
                                y: i
                            } = function(e) {
                                let {
                                    top: t,
                                    left: n
                                } = e;
                                return {
                                    x: n,
                                    y: t
                                }
                            }(d);
                            this.dragState = {
                                ...this.dragState,
                                startX: t,
                                startY: n,
                                offsetX: t - e,
                                offsetY: n - i
                            }
                        } else {
                            let i = v(e, d);
                            this.setDOMPositions(i), this.dragState = {
                                ...this.dragState,
                                startX: t,
                                startY: n,
                                offsetWidth: o,
                                offsetHeight: r
                            }
                        }
                        this.setState({
                            operation: e,
                            operationStarted: !1
                        }, () => {
                            window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleOperationEnd)
                        })
                    }, this.handleOperationEnd = () => {
                        let {
                            operation: e,
                            operationStarted: t
                        } = this.state, {
                            onDragEnd: n
                        } = this.props;
                        window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleOperationEnd);
                        let i = t ? () => {
                            let {
                                onUpdate: t,
                                id: n
                            } = this.props;
                            t(e, n, this.anchor, this.size, E(this.ref.current, this.size))
                        } : void 0;
                        if (t) {
                            let {
                                maxX: e,
                                maxY: t
                            } = this.props.container, {
                                width: i,
                                height: a
                            } = E(this.ref.current, this.size), l = (0, u.getFullCoordsFromAnchorCoords)(this.anchor, e, t, i, a), s = (0, u.getAnchorCoordsFromFullCoords)(l);
                            this.setDOMPositions(s), this.setDOMSize({
                                width: i,
                                height: a
                            }), null != n && n()
                        }
                        this.setState({
                            operation: null,
                            operationStarted: !1
                        }, i)
                    }, this.anchor = m(e.anchor), this.size = g(e.size, e.minSize.width, e.minSize.height)
                }
            }
            y.Operations = i, y.defaultProps = {
                snapOrientation: !0,
                minSize: {
                    width: 0,
                    height: 0
                },
                container: {
                    minX: 0,
                    minY: 0,
                    maxX: 1 / 0,
                    maxY: 1 / 0
                },
                resizeX: !0,
                resizeY: !0,
                hidden: !1,
                dragAnywhere: !0,
                active: !0
            };
            var C = y