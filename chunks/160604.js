            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("907002"),
                o = s("837403");
            class d extends n.Component {
                render() {
                    let {
                        icon: e,
                        ...t
                    } = this.props;
                    return (0, a.jsx)(e, {
                        ...t
                    })
                }
            }
            let u = (0, r.animated)(d);
            var c = function(e) {
                let {
                    className: t,
                    name: s,
                    icon: n,
                    iconClassName: l
                } = e, d = (0, r.useTransition)({
                    name: s,
                    icon: n,
                    iconClassName: l
                }, {
                    key: e => e.name,
                    initial: null,
                    from: {
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    leave: {
                        opacity: 0
                    }
                });
                return (0, a.jsx)("div", {
                    className: i(o.crossfade, t),
                    children: d((e, t) => {
                        let {
                            icon: s,
                            iconClassName: n
                        } = t;
                        return (0, a.jsx)(u, {
                            icon: s,
                            className: i(o.icon, n),
                            style: e
                        })
                    })
                })
            }