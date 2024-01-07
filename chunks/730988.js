            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("77078"),
                o = l("145131"),
                d = l("68927");
            class u extends a.PureComponent {
                render() {
                    let {
                        scrollable: e,
                        ...t
                    } = this.props;
                    return e ? (0, n.jsx)("aside", {
                        className: d.sidebarScrollable,
                        children: (0, n.jsx)(r.Scroller, {
                            fade: !0,
                            className: d.scroller,
                            children: (0, n.jsx)(o.default.Child, {
                                ...t,
                                wrap: !0
                            })
                        })
                    }) : (0, n.jsx)(o.default.Child, {
                        ...t,
                        wrap: !0
                    })
                }
            }
            u.defaultProps = {
                basis: 232,
                grow: 0,
                shrink: 0,
                className: d.sidebar
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        ...t
                    } = this.props;
                    return (0, n.jsx)(o.default.Child, {
                        className: i(d.content, e),
                        wrap: !0,
                        ...t
                    })
                }
            }
            class f extends a.PureComponent {
                render() {
                    return (0, n.jsx)(o.default, {
                        ...this.props
                    })
                }
            }
            f.defaultProps = {
                className: d.layout,
                direction: o.default.Direction.HORIZONTAL,
                justify: o.default.Justify.START,
                align: o.default.Align.START,
                wrap: o.default.Wrap.NO_WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, f.Direction = o.default.Direction, f.Justify = o.default.Justify, f.Align = o.default.Align, f.Wrap = o.default.Wrap, f.Sidebar = u, f.Content = c;
            var m = f