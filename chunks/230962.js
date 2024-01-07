            "use strict";
            n.r(t), n.d(t, {
                NotchBackground: function() {
                    return f
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("669491"),
                o = n("769846"),
                u = n("159885"),
                d = n("874293"),
                c = n("976143");
            let E = (0, u.cssValueToNumber)(o.default.GRADIENT_PROGRESS_NOTCH_WIDTH),
                f = Object.freeze({
                    BLACK: c.black,
                    GRAY: c.gray
                });
            class _ extends s.Component {
                componentDidMount() {
                    this.computeBars(), window.addEventListener("resize", this.computeBars)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.computeBars)
                }
                roundToNearestStep(e) {
                    return Math.round(e / E) * E
                }
                getProgressStyles() {
                    let {
                        progress: e
                    } = this.props, {
                        barWidth: t
                    } = this.state, n = this.roundToNearestStep(t * (100 - Math.max(0, Math.min(100, e))) / 100);
                    return {
                        transform: "translateX(".concat(Math.abs(n - t), "px)")
                    }
                }
                getGradientStyles() {
                    let {
                        gradientEnd: e,
                        gradientStart: t,
                        progress: n
                    } = this.props, {
                        barWidth: a
                    } = this.state;
                    return {
                        width: "".concat(a, "px"),
                        background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(t, ", ").concat(e, ")")
                    }
                }
                render() {
                    let {
                        className: e,
                        notchBackground: t
                    } = this.props, {
                        barWidth: n
                    } = this.state;
                    return (0, a.jsx)("div", {
                        className: c.wrapper,
                        ref: this.sizerRef,
                        children: (0, a.jsxs)("div", {
                            className: l(c.container, e),
                            style: this.getGradientStyles(),
                            children: [(0, a.jsx)("div", {
                                className: c.progress,
                                style: this.getProgressStyles()
                            }), 0 !== n && (0, a.jsx)(d.default, {
                                width: n,
                                className: l(c.notches, t)
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        barWidth: 0
                    }, this.sizerRef = s.createRef(), this.computeBars = () => {
                        let {
                            current: e
                        } = this.sizerRef;
                        this.setState({
                            barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
                        })
                    }
                }
            }
            _.defaultProps = {
                gradientStart: r.default.unsafe_rawColors.YELLOW_260.css,
                gradientEnd: r.default.unsafe_rawColors.GREEN_360.css
            };
            var h = _