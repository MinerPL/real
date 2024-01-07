            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return g
                },
                EmptyStateText: function() {
                    return N
                },
                default: function() {
                    return i
                }
            });
            var l, i, r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("819855"),
                d = n("77078"),
                c = n("145131"),
                E = n("49111"),
                _ = n("430098"),
                f = n("926622");
            let {
                Provider: I,
                Consumer: h
            } = s.createContext(E.ThemeTypes.DARK);
            class g extends s.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: l,
                        offsetX: i,
                        offsetY: s,
                        style: a
                    } = this.props;
                    return (0, r.jsx)(h, {
                        children: d => (0, r.jsx)(c.default.Child, {
                            grow: 0,
                            className: o(_.image, f.marginBottom40),
                            style: {
                                ...a,
                                width: n,
                                height: l,
                                marginLeft: i,
                                marginTop: s,
                                backgroundImage: "url(".concat((0, u.isThemeDark)(d) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let N = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: l,
                    note: i,
                    style: s
                } = e;
                return (0, r.jsxs)(c.default.Child, {
                    grow: 0,
                    direction: c.default.Direction.VERTICAL,
                    style: s,
                    children: [null != t && (0, r.jsx)(d.H, {
                        className: o(n, _.title),
                        children: t
                    }), null != i ? (0, r.jsx)("div", {
                        className: o(l, _.text, f.marginTop8),
                        children: i
                    }) : null]
                })
            };
            (l = class extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: l
                    } = this.props;
                    return (0, r.jsx)(I, {
                        value: t,
                        children: (0, r.jsx)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            align: c.default.Align.CENTER,
                            justify: c.default.Justify.CENTER,
                            className: o(_.wrapper, n),
                            style: l,
                            children: e
                        })
                    })
                }
            }).Text = N, l.Image = g, i = l