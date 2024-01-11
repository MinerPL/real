            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_OPACITY: function() {
                    return p
                },
                default: function() {
                    return C
                }
            }), n("70102");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("208302"),
                r = n.n(o),
                d = n("77078"),
                u = n("49111"),
                c = n("615124"),
                f = n("173791");
            let h = u.OverlayWidgetTypes.DEFAULT,
                p = 1,
                g = a.createContext({
                    type: h,
                    opacity: p
                }),
                m = a.createContext(void 0),
                S = e => {
                    let {
                        children: t,
                        className: n,
                        ...a
                    } = e;
                    return (0, i.jsx)(g.Consumer, {
                        children: e => {
                            let {
                                type: l
                            } = e;
                            return (0, i.jsx)(m.Consumer, {
                                children: e => (0, i.jsx)("div", {
                                    className: s(n, c.bar, c[r(l)]),
                                    style: e,
                                    ...a,
                                    children: t
                                })
                            })
                        }
                    })
                };
            class E extends a.PureComponent {
                render() {
                    let {
                        disableScroll: e,
                        children: t,
                        className: n
                    } = this.props;
                    return (0, i.jsx)(m.Consumer, {
                        children: a => (0, i.jsx)(g.Consumer, {
                            children: l => {
                                let o = s(c.body, c[r(l.type)], n);
                                return e ? (0, i.jsx)("div", {
                                    className: o,
                                    style: a,
                                    children: t
                                }) : (0, i.jsx)(d.Scroller, {
                                    fade: !0,
                                    className: o,
                                    children: t
                                })
                            }
                        })
                    })
                }
            }
            E.defaultProps = {
                disableScroll: !1
            };
            let v = e => {
                    let {
                        type: t = h,
                        width: n,
                        height: a,
                        children: l,
                        className: o,
                        opacity: d = p,
                        onClick: u
                    } = e;
                    return (0, i.jsx)(g.Provider, {
                        value: {
                            type: t,
                            opacity: d
                        },
                        children: (0, i.jsx)("div", {
                            className: s(c.widget, c[r(t)], o),
                            style: {
                                width: n,
                                height: a
                            },
                            onClick: u,
                            children: l
                        })
                    })
                },
                y = e => {
                    let {
                        children: t,
                        className: n,
                        dynamicSize: a = !1
                    } = e;
                    return (0, i.jsx)(m.Consumer, {
                        children: e => (0, i.jsx)("div", {
                            className: s(c.content, n, {
                                [c.staticSize]: !a
                            }),
                            style: e,
                            children: t
                        })
                    })
                };
            v.Background = e => {
                let {
                    children: t,
                    opacityOverride: n
                } = e;
                if (null == t) return null;
                let l = [S, E, y];
                return (0, i.jsx)(g.Consumer, {
                    children: e => {
                        let {
                            opacity: s
                        } = e, o = {
                            backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : s), ")")
                        };
                        if ("string" == typeof t.type) return a.cloneElement(t, {
                            style: o
                        });
                        {
                            if (l.includes(t.type)) return (0, i.jsx)(m.Provider, {
                                value: o,
                                children: t
                            });
                            let e = t.type.displayName;
                            throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(l.map(e => "Widget." + e.name).join(",")))
                        }
                    }
                })
            }, v.Body = E, v.Content = y, v.Icon = e => {
                let {
                    icon: t,
                    label: n,
                    onClick: a,
                    isActive: l,
                    tooltipPosition: o = "top",
                    size: r = 20,
                    isTutorial: u = !1
                } = e;
                return (0, i.jsx)(d.Tooltip, {
                    text: u ? (0, i.jsx)("div", {
                        className: c.tutorialTip,
                        children: n
                    }) : n,
                    "aria-label": n,
                    position: o,
                    forceOpen: u,
                    color: u ? d.Tooltip.Colors.BRAND : d.Tooltip.Colors.BLACK,
                    children: e => {
                        let {
                            onMouseEnter: o,
                            onMouseLeave: u
                        } = e;
                        return (0, i.jsx)(d.Button, {
                            look: d.Button.Looks.BLANK,
                            size: d.Button.Sizes.NONE,
                            onClick: a,
                            onMouseEnter: o,
                            onMouseLeave: u,
                            className: s(c.icon, {
                                [c.toggledIconOn]: l
                            }),
                            innerClassName: f.flexCenter,
                            "aria-label": n,
                            children: (0, i.jsx)(t, {
                                width: r,
                                height: r,
                                role: "img"
                            })
                        })
                    }
                })
            }, v.Bar = S;
            var C = v