            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("421898"),
                i = s.n(a),
                r = s("122508"),
                o = s("637487");
            let c = {
                    VERTICAL: r.flexVertical,
                    HORIZONTAL: r.flexHorizontal,
                    HORIZONTAL_REVERSE: r.flexHorizontalReverse
                },
                u = {
                    START: r.flexJustifyStart,
                    END: r.flexJustifyEnd,
                    CENTER: r.flexJustifyCenter,
                    BETWEEN: r.flexJustifyBetween,
                    AROUND: r.flexJustifyAround
                },
                d = {
                    NO_WRAP: r.flexNowrap,
                    WRAP: r.flexWrap,
                    WRAP_REVERSE: r.flexWrapReverse
                },
                p = {
                    START: r.flexAlignStart,
                    END: r.flexAlignEnd,
                    CENTER: r.flexAlignCenter,
                    STRETCH: r.flexAlignStretch
                },
                h = {
                    SMALL: o.flexGutterSmall,
                    LARGE: o.flexGutterLarge
                };
            class N extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        shrink: s,
                        grow: a,
                        basis: r,
                        style: c,
                        wrap: u,
                        ...d
                    } = this.props, p = {
                        style: {
                            flexGrow: a,
                            flexShrink: s,
                            flexBasis: r,
                            ...c
                        },
                        className: t === o.flexChild ? t : i(o.flexChild, t),
                        ...d
                    };
                    if (!u && "string" != typeof e && 1 === l.Children.count(e)) {
                        let s = l.Children.only(e);
                        return p.style = {
                            ...p.style,
                            ...s.props.style
                        }, p.className = i(s.props.className, t), l.cloneElement(s, p)
                    }
                    return (0, n.jsx)("div", {
                        ...p,
                        children: e
                    })
                }
            }
            N.defaultProps = {
                className: o.flexChild,
                style: {},
                wrap: !1
            };
            class m extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        direction: s,
                        justify: l,
                        align: a,
                        wrap: r,
                        shrink: c,
                        grow: u,
                        basis: d,
                        style: p,
                        gutter: h,
                        ...N
                    } = this.props, m = {
                        flexShrink: c,
                        flexGrow: u,
                        flexBasis: d,
                        ...p
                    };
                    return (0, n.jsx)("div", {
                        style: m,
                        className: i(o.flex, s, l, a, r, h, t),
                        ...N,
                        children: e
                    })
                }
            }
            m.Child = N, m.Direction = c, m.Align = p, m.Justify = u, m.Wrap = d, m.Gutter = h, m.defaultProps = {
                direction: c.HORIZONTAL,
                justify: u.START,
                align: p.STRETCH,
                wrap: d.WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto",
                style: {}
            };
            var g = m