            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("971792"),
                a = n("173791");
            let u = {
                    VERTICAL: a.vertical,
                    HORIZONTAL: l.horizontal,
                    HORIZONTAL_REVERSE: l.horizontalReverse
                },
                c = {
                    START: a.justifyStart,
                    END: a.justifyEnd,
                    CENTER: a.justifyCenter,
                    BETWEEN: a.justifyBetween,
                    AROUND: a.justifyAround
                },
                d = {
                    START: a.alignStart,
                    END: a.alignEnd,
                    CENTER: a.alignCenter,
                    STRETCH: a.alignStretch,
                    BASELINE: a.alignBaseline
                },
                _ = {
                    NO_WRAP: a.noWrap,
                    WRAP: a.wrap,
                    WRAP_REVERSE: a.wrapReverse
                },
                f = e => {
                    let {
                        children: t,
                        className: n,
                        shrink: o,
                        grow: a,
                        basis: u,
                        style: c,
                        wrap: d = !1,
                        ..._
                    } = e;
                    n = null != n ? n : l.flexChild;
                    let f = {
                        className: n,
                        style: {
                            flexGrow: a,
                            flexShrink: o,
                            flexBasis: u,
                            ...c
                        },
                        ..._
                    };
                    if (!d && "string" != typeof t && 1 === r.Children.count(t)) {
                        let e = r.Children.only(t);
                        return f.style = {
                            ...f.style,
                            ...e.props.style
                        }, f.className = s(e.props.className, n), r.cloneElement(e, f)
                    }
                    return (0, i.jsx)("div", {
                        ...f,
                        children: t
                    })
                };
            f.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto",
                wrap: !1
            };
            let E = e => {
                let {
                    children: t,
                    className: n,
                    direction: r = u.HORIZONTAL,
                    justify: o = c.START,
                    align: a = d.STRETCH,
                    wrap: f = _.NO_WRAP,
                    shrink: E,
                    grow: S,
                    basis: g,
                    style: h,
                    ...m
                } = e;
                return (0, i.jsx)("div", {
                    style: {
                        flexShrink: E,
                        flexGrow: S,
                        flexBasis: g,
                        ...h
                    },
                    className: s(l.flex, r, o, a, f, n),
                    ...m,
                    children: t
                })
            };
            E.defaultProps = {
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, E.Child = f, E.Direction = u, E.Align = d, E.Justify = c, E.Wrap = _;
            var S = E