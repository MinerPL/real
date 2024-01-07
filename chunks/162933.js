            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("414456"),
                u = l.n(i),
                o = l("145131"),
                d = l("773712");
            (n = a || (a = {})).WRAP = "wrap", n.STACK = "stack";
            class c extends r.PureComponent {
                renderChildren() {
                    let e;
                    let {
                        children: t,
                        layout: l,
                        columns: n
                    } = this.props;
                    switch (l) {
                        case "stack":
                            e = "100%";
                            break;
                        case "wrap":
                            e = "".concat(1 / n * 100, "%")
                    }
                    return t.map((t, l) => (0, s.jsx)(o.default.Child, {
                        className: d.tile,
                        basis: e,
                        grow: 0,
                        children: t
                    }, l))
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsx)(o.default, {
                        className: u(e, d.grid),
                        wrap: o.default.Wrap.WRAP,
                        children: this.renderChildren()
                    })
                }
            }
            c.Layout = a, c.defaultProps = {
                children: [],
                layout: "wrap",
                columns: 4
            };
            var f = c