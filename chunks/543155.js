            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var a, s, i, l, r, o, u = n("37983"),
                d = n("884691"),
                c = n("49111");
            let E = (e, t) => {
                let {
                    x: n,
                    y: a
                } = e, {
                    x: s,
                    y: i
                } = t;
                return Math.pow(n - s, 2) + Math.pow(a - i, 2)
            };

            function f(e, t, n, a, s) {
                let {
                    top: i,
                    bottom: l,
                    left: r,
                    right: o
                } = e;
                if (null == i && null == l ? (i = 0, l = n - s) : null == i && null != l ? i = n - (l + s) : null != i && (l = n - (i + s)), null == r && null == o ? (r = 0, o = t - a) : null == r && null != o ? r = t - (o + a) : null == o && null != r && (o = t - (r + a)), null == i || null == l || null == r || null == o) throw Error("Logically this can never happen based on our if/else statements");
                return {
                    top: i,
                    left: r,
                    bottom: l,
                    right: o
                }
            }(r = s || (s = {}))[r.DISABLED = 0] = "DISABLED", r[r.DEFAULT = 1] = "DEFAULT", r[r.OFFSET = 2] = "OFFSET", (o = i || (i = {})).TOP = "TOP", o.BOTTOM = "BOTTOM", o.RIGHT = "RIGHT", o.LEFT = "LEFT";

            function _(e) {
                return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"]
            }

            function h(e) {
                let {
                    top: t,
                    left: n,
                    bottom: a,
                    right: s
                } = e;
                return 0 === t || t <= a ? a = null : t = null, 0 === n || n <= s ? s = null : n = null, {
                    top: t,
                    left: n,
                    bottom: a,
                    right: s
                }
            }

            function C(e) {
                let {
                    top: t,
                    left: n,
                    bottom: a,
                    right: s
                } = e;
                return a < 0 && (t += a, a = 0), t < 0 && (a += t, t = 0), s < 0 && (n += s, s = 0), n < 0 && (s += n, n = 0), {
                    top: t,
                    left: n,
                    bottom: a,
                    right: s
                }
            }

            function T(e) {
                return null != e ? "".concat(e, "px") : "auto"
            }(a = class extends d.PureComponent {
                componentDidMount() {
                    this.checkBounds(), this.setDOMPositions(this.position)
                }
                componentDidUpdate(e, t) {
                    let {
                        state: {
                            verticalOrientation: n,
                            horizontalOrientation: a,
                            atTopEdge: s
                        },
                        props: {
                            maxX: i,
                            maxY: l,
                            onRelocated: r,
                            snapOrientation: o
                        }
                    } = this, u = e.maxX !== i || e.maxY !== l || e.onRelocated !== r || e.snapOrientation !== o || t.verticalOrientation !== n || t.horizontalOrientation !== a || t.atTopEdge !== s;
                    u && this.checkBounds()
                }
                componentWillUnmount() {
                    window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp)
                }
                setDOMPositions(e) {
                    let {
                        top: t,
                        left: n,
                        bottom: a,
                        right: s
                    } = e, {
                        draggableRef: {
                            current: i
                        }
                    } = this;
                    this.position = {
                        top: t,
                        left: n,
                        bottom: a,
                        right: s
                    }, null != i && (i.style.top = T(t), i.style.bottom = T(a), i.style.left = T(n), i.style.right = T(s))
                }
                render() {
                    let {
                        children: e,
                        className: t
                    } = this.props, {
                        dragging: n,
                        verticalOrientation: a,
                        horizontalOrientation: s,
                        atTopEdge: i
                    } = this.state, {
                        top: l,
                        left: r,
                        right: o,
                        bottom: c
                    } = this.position;
                    return (0, u.jsx)("div", {
                        ref: this.draggableRef,
                        className: t,
                        onMouseDown: this.handleMouseDown,
                        style: {
                            pointerEvents: n ? "none" : "auto",
                            position: "absolute",
                            top: l,
                            left: r,
                            bottom: c,
                            right: o
                        },
                        children: d.cloneElement(d.Children.only(e), {
                            flipped: "RIGHT" === s,
                            verticalFlipped: "BOTTOM" === a,
                            checkBounds: this.checkBounds,
                            atTopEdge: i
                        })
                    })
                }
                constructor(e) {
                    super(e), this.draggableRef = d.createRef(), this._dragStart = {
                        x: 0,
                        y: 0
                    }, this.handleMouseDown = e => {
                        let {
                            top: t,
                            left: n,
                            bottom: a,
                            right: s
                        } = this.position, {
                            dragAnywhere: i,
                            selector: l,
                            maxX: r,
                            maxY: o
                        } = this.props, {
                            target: u
                        } = e, {
                            current: d
                        } = this.draggableRef;
                        if (null != d && e.button === c.MouseButtons.PRIMARY && (i || null != u && null != l && "" !== l && null != u.closest(l))) {
                            let i = f({
                                    top: t,
                                    left: n,
                                    bottom: a,
                                    right: s
                                }, r, o, d.clientWidth, d.clientHeight),
                                {
                                    x: l,
                                    y: u
                                } = function(e) {
                                    let {
                                        top: t,
                                        left: n
                                    } = e;
                                    return {
                                        x: n,
                                        y: t
                                    }
                                }(i);
                            this._dragStart = {
                                x: e.clientX,
                                y: e.clientY
                            }, this._offsetX = e.clientX - l, this._offsetY = e.clientY - u, window.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)
                        }
                    }, this.handleMouseMove = e => {
                        e.preventDefault();
                        let {
                            clientX: t,
                            clientY: n
                        } = e, {
                            current: a
                        } = this.draggableRef, {
                            maxX: s,
                            maxY: i,
                            flipVertical: l,
                            flipHorizontal: r,
                            onDragStart: o,
                            onDrag: u,
                            onFlip: d,
                            snapOrientation: c
                        } = this.props, {
                            dragging: T,
                            dragging: I,
                            verticalOrientation: S,
                            horizontalOrientation: N
                        } = this.state, A = !1;
                        if (null == a || !T && 9 > E(this._dragStart, {
                                x: t,
                                y: n
                            })) return;
                        T = !0;
                        let {
                            clientWidth: m,
                            clientHeight: p
                        } = a, g = n - this._offsetY, R = t - this._offsetX, O = C(f({
                            top: g,
                            left: R
                        }, s, i, m, p));
                        if (c) {
                            O = h(O);
                            let e = _(O);
                            S = e[0], N = e[1]
                        } else O = {
                            top: O.top,
                            left: O.left
                        };
                        2 === r && N !== this.state.horizontalOrientation && (this._offsetX = m - this._offsetX, A = !0), 2 === l && S !== this.state.verticalOrientation && (this._offsetY = p - this._offsetY, A = !0), this.setDOMPositions(O), !I && (null == o || o(O, a)), null == u || u(O, a), A && (null == d || d([S, N])), this.setState({
                            dragging: T,
                            verticalOrientation: S,
                            horizontalOrientation: N,
                            atTopEdge: 0 === O.top
                        })
                    }, this.handleMouseUp = () => {
                        window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp), this.state.dragging && this.setState({
                            dragging: !1
                        }, () => {
                            let {
                                onDragEnd: e
                            } = this.props, {
                                current: t
                            } = this.draggableRef;
                            null != t && null != e && e(this.position, t)
                        })
                    }, this._checkBoundsRAF = null, this.checkBounds = () => {
                        null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)
                    }, this._performCheckBounds = () => {
                        let e;
                        let {
                            position: t,
                            state: n,
                            draggableRef: {
                                current: a
                            },
                            props: {
                                maxX: s,
                                maxY: i,
                                onRelocated: l,
                                snapOrientation: r
                            }
                        } = this, {
                            verticalOrientation: o,
                            horizontalOrientation: u
                        } = this.state;
                        if (null == a) return;
                        let {
                            clientHeight: d,
                            clientWidth: c
                        } = a, E = f(t, s, i, c, d);
                        if (E = C(E), r) {
                            e = h(E);
                            let t = _(e);
                            o = t[0], u = t[1]
                        } else e = {
                            top: E.top,
                            left: E.left,
                            right: null,
                            bottom: null
                        };
                        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
                        null == l || l(e, a), this.setDOMPositions(e);
                        let T = 0 === e.top;
                        (o !== n.verticalOrientation || u !== n.horizontalOrientation || T !== n.atTopEdge) && this.setState({
                            verticalOrientation: o,
                            horizontalOrientation: u,
                            atTopEdge: T
                        })
                    };
                    let [t, n] = _(e.initialPosition);
                    this.position = function(e) {
                        let {
                            top: t,
                            left: n,
                            bottom: a,
                            right: s
                        } = e;
                        return null == n && null == s && (n = 0), null != n && null != s && (s = null), null == t && null == a && (t = 0), null != t && null != a && (a = null), {
                            top: t,
                            left: n,
                            bottom: a,
                            right: s
                        }
                    }(e.initialPosition), this.state = {
                        dragging: !1,
                        verticalOrientation: t,
                        horizontalOrientation: n,
                        atTopEdge: 0 === this.position.top
                    }
                }
            }).FlipTypes = s, a.defaultProps = {
                snapOrientation: !1,
                maxX: 0,
                maxY: 0,
                flipVertical: 0,
                flipHorizontal: 0,
                dragAnywhere: !1
            }, l = a