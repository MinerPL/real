            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var i, a, n = l("37983"),
                s = l("884691"),
                r = l("414456"),
                c = l.n(r),
                o = l("817736"),
                d = l("118810"),
                u = l("77078"),
                p = l("737960"),
                m = l("137215"),
                _ = l("43236");
            (a = i || (i = {}))[a.LEFT = 0] = "LEFT", a[a.RIGHT = 1] = "RIGHT";
            let f = e => {
                let {
                    onClick: t,
                    className: l,
                    direction: i
                } = e;
                return (0, n.jsx)(u.Clickable, {
                    "aria-hidden": !0,
                    className: c(_.scrollerButton, l),
                    onClick: t,
                    children: (0, n.jsx)(m.default, {
                        className: _.scrollerButtonArrow,
                        direction: i
                    })
                })
            };
            class h extends s.Component {
                static getDerivedStateFromProps(e, t) {
                    return t.prevWidth !== e.width ? {
                        tileIndex: 0,
                        prevWidth: e.width,
                        lastArrowDirection: 0
                    } : null
                }
                getMaxOffset() {
                    let {
                        width: e
                    } = this.props, {
                        scrollerWidth: t
                    } = this.state;
                    return Math.max(Math.floor(t - e), 0)
                }
                getSideOffset() {
                    let {
                        tileWidth: e,
                        tileMargin: t
                    } = this.props, l = this.getMaxOffset(), i = e + t;
                    return l - Math.floor(l / i) * i
                }
                getMaxIndex() {
                    let {
                        tileWidth: e,
                        tileMargin: t
                    } = this.props;
                    return Math.round(this.getMaxOffset() / (e + t))
                }
                getOffset(e, t) {
                    let {
                        tileWidth: l,
                        tileMargin: i
                    } = this.props;
                    return Math.min(e * (l + i) + (1 === t ? this.getSideOffset() : 0), this.getMaxOffset())
                }
                componentDidMount() {
                    this.setScrollerWidth()
                }
                componentDidUpdate(e, t) {
                    if (t.tileIndex !== this.state.tileIndex || t.lastArrowDirection !== this.state.lastArrowDirection) {
                        var l, i, a;
                        let {
                            tileIndex: e
                        } = this.state, t = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
                        null === (l = this.advancedScrollerRef.current) || void 0 === l || l.scrollTo({
                            to: t,
                            animate: !0
                        }), null === (i = (a = this.props).onScroll) || void 0 === i || i.call(a, {
                            tileIndex: e
                        })
                    }
                    e.width !== this.props.width && this.setScrollerWidth()
                }
                render() {
                    let {
                        tileIndex: e,
                        lastArrowDirection: t
                    } = this.state, {
                        header: l,
                        headerId: i,
                        subHeader: a,
                        headerContainerClassName: s,
                        scrollContainerClassName: r
                    } = this.props, o = this.getMaxOffset();
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: c(_.headerContainer, s),
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(u.Heading, {
                                    id: i,
                                    variant: "heading-lg/semibold",
                                    children: l
                                }), null == a ? null : (0, n.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: _.subheader,
                                    children: a
                                })]
                            }), o > 0 ? (0, n.jsxs)("div", {
                                className: _.arrowsContainer,
                                children: [(0, n.jsx)(f, {
                                    direction: m.default.Directions.LEFT,
                                    onClick: this.prev,
                                    className: c(_.arrowLeft, {
                                        [_.arrowDisabled]: 0 === e && 0 === t
                                    })
                                }), (0, n.jsx)(f, {
                                    direction: m.default.Directions.RIGHT,
                                    onClick: this.next,
                                    className: c(_.arrowRight, {
                                        [_.arrowDisabled]: e === this.getMaxIndex() && 1 === t
                                    })
                                })]
                            }) : null]
                        }), (0, n.jsx)("div", {
                            className: c(_.scrollerContainer, r),
                            children: (0, n.jsx)(u.AdvancedScrollerNone, {
                                ref: this.advancedScrollerRef,
                                orientation: "horizontal",
                                className: _.scroller,
                                children: (0, n.jsx)("div", {
                                    className: _.scroller,
                                    ref: e => {
                                        this.tileScrollerRef.current = e, this.setScrollerWidth()
                                    },
                                    children: this.props.children
                                })
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        tileIndex: 0,
                        prevWidth: this.props.width,
                        lastArrowDirection: 0,
                        scrollerWidth: 0
                    }, this.advancedScrollerRef = s.createRef(), this.tileScrollerRef = s.createRef(), this.setScrollerWidth = () => {
                        let e = (0, o.findDOMNode)(this.tileScrollerRef.current);
                        (0, d.isElement)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({
                            scrollerWidth: e.offsetWidth
                        })
                    }, this.prev = () => {
                        this.setState({
                            tileIndex: Math.max(this.state.tileIndex - 1, 0),
                            lastArrowDirection: 0
                        })
                    }, this.next = () => {
                        this.setState({
                            tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
                            lastArrowDirection: 1
                        })
                    }
                }
            }
            var C = (0, p.default)(h)