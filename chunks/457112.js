            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureWindow: function() {
                    return h
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                i = n.n(r),
                l = n("817736"),
                u = n("773336"),
                o = n("325753"),
                d = n("49111"),
                c = n("925201"),
                f = n("212029");
            let E = {
                top: 80,
                bottom: 132,
                left: 80
            };
            class h extends s.PureComponent {
                componentDidMount() {
                    this.setPosition(this.props.position)
                }
                componentDidUpdate(e) {
                    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
                }
                getPosition(e) {
                    let t = (0, l.findDOMNode)(this._innerDiv);
                    if (null != t) {
                        let e = t.getBoundingClientRect();
                        this._width = e.width, this._height = e.height
                    }
                    let {
                        edgeOffsetTop: n,
                        edgeOffsetLeft: a,
                        edgeOffsetBottom: s,
                        edgeOffsetRight: r,
                        maxX: i,
                        maxY: o,
                        dockedRect: c
                    } = this.props, f = Math.round(n), E = Math.round(o - s - this._height), h = Math.round(a), p = Math.round(i - r - this._width), S = (0, u.getPlatform)(), _ = S !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != c) {
                        var C, m;
                        return {
                            y: (null !== (C = null == c ? void 0 : c.y) && void 0 !== C ? C : 0) - _,
                            x: null !== (m = null == c ? void 0 : c.x) && void 0 !== m ? m : 0
                        }
                    }
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: f, x: h
                            };
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: E, x: h
                            };
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: f, x: p
                            };
                        default:
                            return {
                                y: E, x: p
                            }
                    }
                }
                setPosition(e) {
                    var t;
                    let {
                        x: n,
                        y: a
                    } = this.getPosition(e);
                    null === (t = this._draggable) || void 0 === t || t.setPosition(n, a)
                }
                animateToPosition(e, t) {
                    var n;
                    let {
                        x: a,
                        y: s
                    } = this.getPosition(e);
                    null === (n = this._draggable) || void 0 === n || n.animateToPosition(a, s, {}, t)
                }
                calculateDecayingPosition(e, t, n, a) {
                    return {
                        x: e + 200 * n,
                        y: t + 200 * a
                    }
                }
                getXOffset() {
                    let {
                        position: e,
                        edgeOffsetLeft: t,
                        edgeOffsetRight: n
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return -t;
                        default:
                            return n
                    }
                }
                getYOffset() {
                    let {
                        position: e,
                        edgeOffsetTop: t,
                        edgeOffsetBottom: n
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return -t;
                        default:
                            return n
                    }
                }
                get inPopout() {
                    return this.props.appContext === d.AppContext.POPOUT
                }
                render() {
                    let {
                        maxX: e,
                        maxY: t,
                        dockedRect: n,
                        hidden: s,
                        roundCorners: r,
                        className: l
                    } = this.props, u = {};
                    return null != n && (u = {
                        transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
                        width: n.width,
                        height: n.height
                    }), (0, a.jsx)(o.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: i(c.pictureInPictureWindow, l, {
                            [c.hidden]: s,
                            [c.borderRadius]: r
                        }),
                        maxX: e,
                        maxY: t,
                        disabled: null != n,
                        onDragStart: this.handleDragStart,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        children: (0, a.jsx)("div", {
                            ref: this.handleSetInnerDivRef,
                            style: u,
                            children: this.props.children
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._width = 0, this._height = 0, this._velocityX = 0, this._velocityY = 0, this._lastMoveX = 0, this._lastMoveY = 0, this.ensureIsInPosition = () => {
                        this.setPosition(this.props.position)
                    }, this.handleSetInnerDivRef = e => {
                        this._innerDiv = e;
                        let t = null == e ? void 0 : e.ownerDocument.defaultView;
                        if (null != e && null != t) {
                            var n;
                            this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null === (n = this._resizeObserver) || void 0 === n || n.observe(e)
                        }
                    }, this.handleSetDraggableRef = e => {
                        this._draggable = e
                    }, this.handleDragStart = (e, t) => {
                        this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date
                    }, this.handleDrag = (e, t) => {
                        let n = new Date,
                            a = Number(n) - Number(this._lastMoveTime);
                        this._velocityX = (e - this._lastMoveX) / a, this._velocityY = (t - this._lastMoveY) / a, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n
                    }, this.handleDragEnd = (e, t) => {
                        let n;
                        let {
                            maxX: a,
                            maxY: s
                        } = this.props, r = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), i = !0, l = !0;
                        if (r.x > a / 2 && (l = !1), r.y > s / 2 && (i = !1), n = i && l ? d.PictureInPicturePositions.TOP_LEFT : i && !l ? d.PictureInPicturePositions.TOP_RIGHT : !i && l ? d.PictureInPicturePositions.BOTTOM_LEFT : d.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                            let {
                                id: e,
                                onMove: t
                            } = this.props;
                            null == t || t(e, n)
                        }
                    }
                }
            }
            h.defaultProps = {
                hidden: !1,
                roundCorners: !0
            };
            var p = s.memo(e => {
                let {
                    selectedPIPWindow: t,
                    pipWindows: n,
                    maxX: s,
                    maxY: r,
                    onWindowMove: l,
                    dockedRect: u,
                    pictureInPictureComponents: o,
                    appContext: p,
                    roundCorners: S
                } = e;
                return (0, a.jsx)("div", {
                    className: c.pictureInPicture,
                    children: (() => {
                        if (null == t) return null;
                        let e = n.map(e => {
                                if (e.id !== t.id && e.component !== d.PictureInPictureComponents.EMBED_IFRAME) return null;
                                let n = "string" == typeof e.component ? o[e.component] : e.component;
                                return (0, a.jsx)(n, {
                                    ...e.props
                                }, "pipWindow-".concat(e.id))
                            }),
                            _ = e.length > 1 ? c.noBoxShadow : {};
                        return (0, a.jsx)(h, {
                            className: i(c.pictureInPictureWindowOverflow, f.elevationHigh, _),
                            appContext: p,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: l,
                            maxX: s,
                            maxY: r,
                            dockedRect: u,
                            edgeOffsetTop: E.top,
                            edgeOffsetBottom: E.bottom,
                            edgeOffsetLeft: E.left,
                            edgeOffsetRight: E.top,
                            roundCorners: S,
                            children: e
                        })
                    })()
                })
            })