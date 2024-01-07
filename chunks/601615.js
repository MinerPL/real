            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var r, n = a("37983"),
                i = a("884691"),
                l = a("414456"),
                s = a.n(l),
                o = a("669491"),
                d = a("77078"),
                u = a("145131"),
                c = a("315585"),
                m = a("361430");
            let f = ["firCount", "nackCount"];
            r = class extends i.PureComponent {
                renderValueIcon() {
                    let {
                        label: e
                    } = this.props, t = f.includes(e);
                    return t ? (0, n.jsx)(c.default, {
                        color: o.default.unsafe_rawColors.YELLOW_300.css,
                        className: m.valueIcon
                    }) : null
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        valueRendered: a,
                        section: r,
                        label: i,
                        renderGraph: l
                    } = this.props;
                    return (0, n.jsxs)(u.default, {
                        className: s(m.item, t),
                        direction: u.default.Direction.VERTICAL,
                        basis: "50%",
                        children: [(0, n.jsxs)(u.default, {
                            className: m.kvContainer,
                            align: u.default.Align.START,
                            children: [(0, n.jsx)(u.default.Child, {
                                children: (0, n.jsx)(d.H, {
                                    className: m.title,
                                    children: e
                                })
                            }), Array.isArray(a) ? (0, n.jsx)(u.default.Child, {
                                grow: 1,
                                children: a
                            }) : (0, n.jsxs)(u.default.Child, {
                                grow: 0,
                                shrink: 0,
                                children: [this.renderValueIcon(), (0, n.jsx)("span", {
                                    className: m.itemValue,
                                    title: a,
                                    children: a
                                })]
                            })]
                        }), null !== l && (0, n.jsx)(u.default.Child, {
                            className: m.graph,
                            children: (0, n.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                children: l
                            })
                        }, null != r ? "".concat(r, "-").concat(i) : i), (0, n.jsx)(d.FormDivider, {
                            className: m.divider
                        })]
                    })
                }
            }