            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("862337"),
                o = l("145131"),
                u = l("813896");

            function d(e) {
                let {
                    percentage: t,
                    isSingleLine: l
                } = e;
                return (0, n.jsx)("div", {
                    className: i({
                        [u.bar]: l,
                        [u.barInMultiLine]: !l
                    }),
                    children: (0, n.jsx)("div", {
                        className: u.barInner,
                        style: {
                            width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
                        }
                    })
                })
            }

            function c(e) {
                return String(e).padStart(2, "0")
            }

            function f(e) {
                let {
                    time: t,
                    padLargestUnit: l
                } = e, n = Math.floor(t) % 60, a = Math.floor(t / 60) % 60, s = Math.floor(t / 3600);
                return 0 === s ? l ? "".concat(c(a), ":").concat(c(n)) : "".concat(a, ":").concat(c(n)) : l ? "".concat(c(s), ":").concat(c(a), ":").concat(c(n)) : "".concat(s, ":").concat(c(a), ":").concat(c(n))
            }
            class m extends a.PureComponent {
                componentDidMount() {
                    this.timer.start(500, () => {
                        this.setState({
                            now: Date.now()
                        })
                    })
                }
                componentWillUnmount() {
                    this.timer.stop()
                }
                render() {
                    let {
                        start: e,
                        end: t,
                        className: l,
                        themed: a,
                        singleLine: s = !1
                    } = this.props, {
                        now: r
                    } = this.state, c = (t - e) / 1e3, m = Math.max(Math.min((r - e) / 1e3, c), 0);
                    return s ? (0, n.jsxs)("div", {
                        className: i(l, {
                            [u.themed]: a
                        }, u.singleLineContainer),
                        children: [(0, n.jsx)("div", {
                            className: u.textLeftInSingleLine,
                            children: f({
                                time: m,
                                padLargestUnit: !0
                            })
                        }), (0, n.jsx)("div", {
                            className: u.barInSingleLine,
                            children: (0, n.jsx)(d, {
                                percentage: m / c,
                                isSingleLine: !0
                            })
                        }), (0, n.jsx)("div", {
                            className: u.textRight,
                            children: f({
                                time: c,
                                padLargestUnit: !0
                            })
                        })]
                    }) : (0, n.jsxs)("div", {
                        className: i(l, {
                            [u.themed]: a
                        }),
                        children: [(0, n.jsx)(d, {
                            percentage: m / c,
                            isSingleLine: !1
                        }), (0, n.jsxs)(o.default, {
                            children: [(0, n.jsx)(o.default.Child, {
                                grow: 1,
                                className: u.textLeft,
                                children: f({
                                    time: m,
                                    padLargestUnit: !1
                                })
                            }), (0, n.jsx)(o.default.Child, {
                                grow: 0,
                                className: u.textRight,
                                children: f({
                                    time: c,
                                    padLargestUnit: !1
                                })
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new r.Interval, this.state = {
                        now: Date.now()
                    }
                }
            }
            m.defaultProps = {
                themed: !1
            };
            var p = m