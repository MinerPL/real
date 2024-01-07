            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("358689");
            class o extends s.PureComponent {
                render() {
                    let {
                        tag: e,
                        children: t,
                        hoverText: n,
                        className: s,
                        forceHover: i,
                        ...o
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        ...o,
                        className: l(s, r.hoverRoll, {
                            [r.disabled]: null == n,
                            [r.forceHover]: i
                        }),
                        children: [(0, a.jsx)(e, {
                            className: r.hovered,
                            children: n
                        }), (0, a.jsx)(e, {
                            className: r.default,
                            children: t
                        })]
                    })
                }
            }
            o.defaultProps = {
                tag: "div",
                forceHover: !1
            };
            var u = o