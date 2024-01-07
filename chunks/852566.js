            "use strict";
            n.r(t), n.d(t, {
                ProgressCircle: function() {
                    return u
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("812725");
            let l = Object.freeze({
                SMALL: 1,
                MEDIUM: 2,
                LARGE: 4
            });
            class u extends r.Component {
                renderCircle() {
                    let {
                        strokeSize: e,
                        percent: t,
                        colorOverride: n,
                        background: r
                    } = this.props, s = (20 - e) / 2, l = s * Math.PI * 2;
                    return (0, i.jsxs)("svg", {
                        viewBox: "0 0 ".concat(20, " ").concat(20),
                        className: o.circle,
                        children: [(0, i.jsx)("circle", {
                            className: o.circleBackgroundAlt,
                            cx: 10,
                            cy: 10,
                            r: 10
                        }), (0, i.jsx)("circle", {
                            className: a(o.circleBackground, r),
                            cx: 10,
                            cy: 10,
                            r: (20 - 2 * e) / 2
                        }), (0, i.jsx)("circle", {
                            className: o.circleProgress,
                            cx: 10,
                            cy: 10,
                            r: s,
                            strokeWidth: "".concat(e, "px"),
                            strokeLinecap: "round",
                            transform: "rotate(-90 ".concat(10, " ").concat(10, ")"),
                            stroke: null != n ? n : "currentColor",
                            style: {
                                strokeDasharray: l,
                                strokeDashoffset: (1 - Math.min(Math.max(t, 0), 100) / 100) * l
                            }
                        })]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(o.progressCircle, e),
                        children: [this.renderCircle(), null != t ? (0, i.jsx)("div", {
                            className: o.circleOverlay,
                            children: t
                        }) : null]
                    })
                }
            }
            u.StrokeSizes = l, u.defaultProps = {
                strokeSize: l.MEDIUM
            }