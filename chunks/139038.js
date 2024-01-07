            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("862337"),
                u = n("659500"),
                d = n("49111"),
                c = n("782340"),
                f = n("815815");
            let h = {
                friction: 15,
                tension: 100
            };
            class C extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        shown: !0
                    }), u.ComponentDispatch.subscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
                }
                componentWillUnmount() {
                    this.focusTimeout.stop(), u.ComponentDispatch.unsubscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
                }
                componentDidUpdate() {
                    let {
                        hasQuery: e
                    } = this.props;
                    !e && this.springTo(0)
                }
                springTo(e) {
                    r.default.spring(this.state.translateY, {
                        toValue: Math.min(e, 250),
                        ...h
                    }).start()
                }
                renderArrowGroup(e) {
                    return (0, l.jsxs)("div", {
                        className: i(f.arrowGroup, e),
                        children: [(0, l.jsx)(r.default.div, {
                            className: i(f.arrowContainer, f.horizontal),
                            style: this.getStyle(),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("446963"),
                                className: f.arrowIcon
                            })
                        }), (0, l.jsx)("div", {
                            className: i(f.arrowContainer, f.diag1),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("423739"),
                                className: f.arrowIcon
                            })
                        }), (0, l.jsx)("div", {
                            className: i(f.arrowContainer, f.diag2),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("22079"),
                                className: f.arrowIcon
                            })
                        })]
                    })
                }
                renderContent() {
                    return (0, l.jsxs)("div", {
                        className: f.tutorialMessages,
                        children: [(0, l.jsx)("div", {
                            className: f.searchMessage,
                            children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
                        }), (0, l.jsx)("div", {
                            className: f.selectMessage,
                            children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT
                        })]
                    })
                }
                render() {
                    let {
                        hasQuery: e
                    } = this.props, {
                        shown: t
                    } = this.state;
                    return (0, l.jsxs)("div", {
                        ref: this.rootRef,
                        className: i(f.tutorial, {
                            [f.shown]: t,
                            [f.hasQuery]: e
                        }),
                        children: [this.renderContent(), this.renderArrowGroup(f.left), this.renderArrowGroup(f.right)]
                    })
                }
                getStyle() {
                    return {
                        transform: [{
                            translateY: this.state.translateY.interpolate({
                                inputRange: [0, 250],
                                outputRange: ["0px", "".concat(250, "px")]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shown: !1,
                        translateY: new r.default.Value(0)
                    }, this.rootRef = a.createRef(), this.focusTimeout = new o.Timeout, this.handleResultFocus = e => {
                        let {
                            node: t
                        } = e;
                        this.focusTimeout.start(1, () => {
                            if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                                let {
                                    top: e
                                } = this.rootRef.current.getBoundingClientRect(), {
                                    top: n
                                } = t.getBoundingClientRect();
                                this.springTo(Math.abs(e - n) - 118 + 9)
                            } else this.springTo(0)
                        })
                    }
                }
            }
            var p = C