            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return S
                },
                default: function() {
                    return h
                }
            });
            var i, r, l = n("37983"),
                o = n("884691"),
                a = n("414456"),
                u = n.n(a),
                s = n("458960"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let _ = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                p = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class S extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(s.default.div, {
                        ...i,
                        className: u(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, l.jsx)("div", {
                                className: p[t]
                            })
                        })
                    })
                }
            }
            S.defaultProps = {
                shineSize: "default"
            };
            let T = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: a,
                    shineSize: s = "default",
                    shinePaused: f,
                    buttonShineClassName: _,
                    onlyShineOnHover: p,
                    ...T
                } = e, h = o.createRef(), I = (0, c.default)(h), A = !i && !r && !0 !== a && (!p || I);
                return (0, l.jsxs)(d.Button, {
                    buttonRef: h,
                    ...T,
                    className: u(E.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, A ? (0, l.jsx)(S, {
                        shinePaused: f,
                        className: u(E.buttonShine, p ? E.onlyShineOnHover : void 0, _),
                        shineSize: s
                    }) : null]
                })
            };
            T.ShineSizes = r;
            var h = T