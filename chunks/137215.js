            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                l = r.n(s),
                a = r("546671"),
                o = r("341417");
            let u = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                c = {
                    [u.UP]: o.up,
                    [u.RIGHT]: o.right,
                    [u.DOWN]: o.down,
                    [u.LEFT]: o.left
                };
            class d extends i.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, n.jsx)(a.default, {
                        className: l(o.arrow, t, {
                            [c[e]]: !0
                        })
                    })
                }
            }
            d.Directions = u;
            var f = d