            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("994000");
            let u = {
                    friction: 14,
                    tension: 200
                },
                d = {
                    DURATION: "DURATION",
                    VOLUME: "VOLUME"
                };

            function c(e) {
                let t = 0 | e,
                    n = t % 60;
                return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
            }
            class m extends a.Component {
                componentDidMount() {
                    let {
                        previewWidth: e,
                        animatedProgress: t
                    } = this.state;
                    this._previewId = e.addListener(this.handlePreviewChange), this._progressId = t.addListener(this.handleAnimatedChange)
                }
                componentWillUnmount() {
                    let {
                        previewWidth: e,
                        animatedProgress: t
                    } = this.state;
                    e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, !1), window.removeEventListener("mousemove", this.handleDragMove, !1)
                }
                componentDidUpdate(e, t) {
                    let {
                        dragging: n,
                        previewWidth: l,
                        animatedProgress: a
                    } = this.state;
                    !n && t.dragging && l.setValue(a._value)
                }
                setGrabber(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        {
                            animatedProgress: n
                        } = this.state;
                    t ? r.default.spring(n, {
                        toValue: e,
                        ...u
                    }).start() : n.setValue(e)
                }
                calculatePercentage(e, t) {
                    let {
                        wrapper: n,
                        props: {
                            type: l
                        }
                    } = this;
                    if (null == n) return 0;
                    let {
                        left: a,
                        width: s,
                        bottom: i,
                        height: r
                    } = n.getBoundingClientRect(), o = l === d.VOLUME ? (i - t) / r : (e - a) / s;
                    return Math.min(1, Math.max(0, o))
                }
                render() {
                    let {
                        buffers: e,
                        type: t,
                        className: n,
                        sliderClassName: a
                    } = this.props, {
                        dragging: s,
                        previewWidth: u,
                        animatedProgress: c
                    } = this.state;
                    return (0, l.jsx)("div", {
                        className: i(n, t === d.VOLUME ? o.vertical : o.horizontal),
                        children: (0, l.jsx)("div", {
                            className: i(a, s ? o.mediaBarInteractionDragging : o.mediaBarInteraction, t === d.VOLUME ? o.mediaBarInteractionVolume : null),
                            onMouseDown: this.handleDragStart,
                            onMouseMove: this.handleMouseMove,
                            ref: e => this.wrapper = e,
                            children: (0, l.jsxs)("div", {
                                className: i(o.mediaBarWrapper, t === d.VOLUME ? o.mediaBarWrapperVolume : null),
                                children: [null != e ? e.map((e, t) => {
                                    let [n, a] = e;
                                    return (0, l.jsx)("div", {
                                        className: o.buffer,
                                        style: {
                                            width: "".concat(100 * a, "%"),
                                            left: "".concat(100 * n, "%")
                                        }
                                    }, t)
                                }) : null, t === d.DURATION ? (0, l.jsx)(r.default.div, {
                                    className: o.mediaBarPreview,
                                    style: {
                                        width: u.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    }
                                }) : null, (0, l.jsx)(r.default.div, {
                                    className: o.mediaBarProgress,
                                    style: {
                                        width: c.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    },
                                    children: (0, l.jsx)("span", {
                                        className: o.mediaBarGrabber
                                    })
                                }), t === d.DURATION ? (0, l.jsx)(r.default.div, {
                                    ref: this.setBubbleRef,
                                    className: o.bubble,
                                    style: {
                                        left: (s ? c : u).interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["0%", "100%"]
                                        })
                                    }
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        animatedProgress: new r.default.Value(0),
                        dragging: !1,
                        offsetLeft: 0,
                        offsetWidth: 0,
                        previewWidth: new r.default.Value(0)
                    }, this.handlePreviewChange = () => {
                        let {
                            bubble: e,
                            state: {
                                dragging: t,
                                previewWidth: n
                            },
                            props: {
                                value: l
                            }
                        } = this;
                        !t && null != e && (e.innerText = c(n._value * l))
                    }, this.handleAnimatedChange = () => {
                        let {
                            bubble: e,
                            state: {
                                dragging: t,
                                animatedProgress: n
                            },
                            props: {
                                value: l
                            }
                        } = this;
                        t && null != e && (e.innerText = c(n._value * l))
                    }, this.handleMouseMove = e => {
                        let {
                            dragging: t,
                            previewWidth: n
                        } = this.state;
                        if (t) return;
                        let {
                            clientX: l,
                            clientY: a
                        } = e;
                        n.setValue(this.calculatePercentage(l, a))
                    }, this.handleDragMove = e => {
                        let {
                            onDrag: t,
                            type: n
                        } = this.props, {
                            clientX: l,
                            clientY: a
                        } = e;
                        t(this.calculatePercentage(l, a), n)
                    }, this.handleDragStart = e => {
                        let {
                            onDragStart: t,
                            onDrag: n,
                            type: l,
                            currentWindow: a
                        } = this.props, {
                            clientX: s,
                            clientY: i
                        } = e;
                        if (e.preventDefault(), null == this.wrapper) return;
                        let {
                            left: r,
                            width: o
                        } = this.wrapper.getBoundingClientRect();
                        this.setState({
                            dragging: !0,
                            offsetLeft: r,
                            offsetWidth: o
                        }, () => {
                            t(l), n(this.calculatePercentage(s, i), l), a.removeEventListener("mouseup", this.handleDragEnd, !1), a.removeEventListener("mousemove", this.handleDragMove, !1), a.addEventListener("mouseup", this.handleDragEnd, !1), a.addEventListener("mousemove", this.handleDragMove, !1)
                        })
                    }, this.handleDragEnd = () => {
                        let {
                            onDragEnd: e,
                            currentWindow: t
                        } = this.props;
                        e(), t.removeEventListener("mouseup", this.handleDragEnd, !1), t.removeEventListener("mousemove", this.handleDragMove, !1), this.setState({
                            dragging: !1
                        })
                    }, this.setBubbleRef = e => {
                        null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
                    }
                }
            }
            m.Types = d, m.defaultProps = {
                currentWindow: window
            };
            var f = m