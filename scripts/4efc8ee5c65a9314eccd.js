(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10487"], {
        639055: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                EyeDropperIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var t = n("669491"),
                a = n("75196");
            let o = e => {
                let {
                    width: l = 24,
                    height: n = 24,
                    color: o = t.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.499 2.499 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.162.41-.238.748-.63.827-1.098a5 5 0 0 1 1.394-2.705l4.829-4.828Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        248559: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return t
                }
            });
            var r = n("884691"),
                t = () => {
                    let [e, l] = (0, r.useState)(null);
                    return (0, r.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && l(new window.EyeDropper)
                    }, []), e
                }
        },
        597590: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let t = r.createContext(void 0);
            var a = t
        },
        973262: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                DefaultColorButton: function() {
                    return b
                },
                CustomColorButton: function() {
                    return N
                },
                CustomColorPicker: function() {
                    return k
                },
                default: function() {
                    return w
                }
            });
            var r = n("37983"),
                t = n("884691"),
                a = n("414456"),
                o = n.n(a),
                i = n("974667"),
                s = n("509043"),
                c = n("77078"),
                u = n("248559"),
                d = n("449918"),
                h = n("526975"),
                p = n("36694"),
                x = n("422403"),
                f = n("664336"),
                m = n("49111"),
                v = n("782340"),
                C = n("169225");
            let g = () => Promise.resolve();

            function j(e) {
                let {
                    color: l,
                    isDefault: n = !1,
                    isCustom: t = !1,
                    isSelected: a = !1,
                    disabled: u = !1,
                    style: h = {},
                    onClick: f,
                    "aria-label": v
                } = e, g = (0, i.useListItem)("color-".concat(l)), j = null != l ? (0, s.int2hex)(l) : h.backgroundColor, b = !1;
                return t && !a ? b = !0 : (t || a) && (b = (0, s.getDarkness)(l) > .1), (0, r.jsx)(c.FocusRing, {
                    offset: -2,
                    children: (0, r.jsxs)("button", {
                        type: "button",
                        className: o(C.colorPickerSwatch, {
                            [C.disabled]: u,
                            [C.default]: n,
                            [C.custom]: t,
                            [C.noColor]: null == l
                        }),
                        disabled: u,
                        onClick: () => null == f ? void 0 : f(l),
                        style: {
                            ...h,
                            backgroundColor: j
                        },
                        "aria-label": null != v ? v : j,
                        ...g,
                        children: [t ? (0, r.jsx)(x.default, {
                            className: C.colorPickerDropper,
                            foreground: C.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(b ? m.Color.WHITE_500 : m.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                l = 16;
                            if ((t || n) && (e = 32, l = 24), a) return (0, r.jsx)(p.default, {
                                width: e,
                                height: l,
                                color: (0, d.getColor)(b ? m.Color.WHITE_500 : m.Color.BLACK_500)
                            })
                        }()]
                    })
                })
            }
            class b extends t.PureComponent {
                render() {
                    let {
                        color: e,
                        onChange: l,
                        value: n,
                        disabled: t
                    } = this.props;
                    return (0, r.jsx)(j, {
                        isDefault: !0,
                        color: e,
                        isSelected: e === n || 0 === n,
                        onClick: l,
                        disabled: t
                    })
                }
            }
            class N extends t.PureComponent {
                render() {
                    let {
                        customColor: e,
                        value: l,
                        disabled: n,
                        "aria-label": t
                    } = this.props;
                    return (0, r.jsx)(j, {
                        isCustom: !0,
                        color: e,
                        isSelected: l === e,
                        disabled: n,
                        "aria-label": t
                    })
                }
            }
            let k = t.memo(e => {
                let {
                    value: l,
                    onChange: n,
                    onClose: a,
                    suggestedColors: o,
                    middle: i,
                    footer: d,
                    showEyeDropper: p
                } = e, m = (0, u.default)(), [g, j] = t.useState(() => {
                    let e = null != l ? l : 0,
                        n = (0, s.int2hex)(e);
                    return {
                        current: e,
                        pending: n,
                        input: n
                    }
                });
                t.useEffect(() => {
                    if (null == l || l === g.current) return;
                    let e = (0, s.int2hex)(l);
                    j({
                        current: l,
                        pending: e,
                        input: e
                    })
                }, [l, g]), t.useEffect(() => a, [a]);
                let b = e => {
                        let l = "#" === e[0] ? e : "#".concat(e);
                        if (!(0, s.isValidHex)(l)) {
                            j(e => ({
                                ...e,
                                input: l
                            }));
                            return
                        }
                        let r = (0, s.hex2int)(l);
                        j({
                            current: r,
                            pending: l,
                            input: l
                        }), n(r)
                    },
                    N = async () => {
                        if (null != m) try {
                            let {
                                sRGBHex: e
                            } = await m.open();
                            b(e)
                        } catch {}
                    }, k = e => {
                        j(l => ({
                            ...l,
                            pending: e,
                            input: e
                        }))
                    }, w = e => {
                        n((0, s.hex2int)(e))
                    };
                return (0, r.jsxs)(c.Dialog, {
                    "aria-label": v.default.Messages.PICK_A_COLOR,
                    className: C.customColorPicker,
                    children: [(0, r.jsx)(h.default, {
                        onChange: e => {
                            let {
                                hex: l
                            } = e;
                            return k(l)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: l
                            } = e;
                            return w(l)
                        },
                        color: g.pending
                    }), i, (0, r.jsxs)("div", {
                        className: C.customColorPickerInputContainer,
                        children: [p && null != m && (0, r.jsx)(f.Icon, {
                            onClick: N,
                            tooltip: v.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: C.customColorPickerEyeDropper,
                            icon: x.default
                        }), (0, r.jsx)(c.TextInput, {
                            className: C.customColorPickerInput,
                            value: g.input,
                            onChange: b,
                            maxLength: 7
                        })]
                    }), null != o && o.length > 0 && (0, r.jsx)("div", {
                        className: C.suggestedColors,
                        children: o.map((e, l) => (0, r.jsx)(c.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: C.suggestedColor,
                            onClick: () => b(e)
                        }, "".concat(e, "-").concat(l)))
                    }), d]
                })
            });

            function w(e) {
                let {
                    className: l,
                    defaultColor: n,
                    customColor: t,
                    colors: a,
                    value: s,
                    disabled: c,
                    onChange: u,
                    renderDefaultButton: d,
                    renderCustomButton: h,
                    colorContainerClassName: p
                } = e, x = e => (0, r.jsx)("div", {
                    className: C.colorPickerRow,
                    children: e.map(e => (0, r.jsx)(j, {
                        color: e,
                        isSelected: e === s,
                        onClick: u,
                        disabled: c
                    }, e))
                }), f = a.slice(0, a.length / 2), m = a.slice(a.length / 2, a.length), v = (0, i.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: g,
                    scrollToEnd: g
                });
                return (0, r.jsx)(i.ListNavigatorProvider, {
                    navigator: v,
                    children: (0, r.jsx)(i.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: a,
                                ...i
                            } = e;
                            return (0, r.jsxs)("div", {
                                className: o(C.container, l),
                                ref: a,
                                ...i,
                                children: [(0, r.jsx)("div", {
                                    className: o(C.defaultContainer, p),
                                    children: d({
                                        value: s,
                                        color: n,
                                        onChange: u,
                                        disabled: c
                                    })
                                }), (0, r.jsx)("div", {
                                    className: o(C.customContainer, p),
                                    children: h({
                                        value: s,
                                        customColor: t,
                                        disabled: c
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: C.presets,
                                    children: [x(f), x(m)]
                                })]
                            })
                        }
                    })
                })
            }
        },
        526975: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                t = n("884691"),
                a = n("266937"),
                o = n("286458"),
                i = n("29799");
            let s = (0, a.CustomPicker)(e => (0, r.jsxs)("div", {
                className: i.wrapper,
                children: [(0, r.jsx)("div", {
                    className: i.saturation,
                    children: (0, r.jsx)(o.Saturation, {
                        ...e
                    })
                }), (0, r.jsx)("div", {
                    className: i.hue,
                    children: (0, r.jsx)(o.Hue, {
                        ...e,
                        direction: "horizontal"
                    })
                })]
            }));
            var c = t.memo(s)
        },
        422403: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var t = n("469563"),
                a = n("639055"),
                o = (0, t.replaceIcon)(function(e) {
                    let {
                        width: l = 16,
                        height: n = 16,
                        color: t = "currentColor",
                        className: a,
                        foreground: o
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: a,
                        width: l,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            children: [(0, r.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, r.jsx)("path", {
                                className: o,
                                fill: t,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, a.EyeDropperIcon)
        },
        664336: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                Icon: function() {
                    return f
                },
                Divider: function() {
                    return m
                },
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                t = n("884691"),
                a = n("414456"),
                o = n.n(a),
                i = n("353386"),
                s = n("394846"),
                c = n("77078"),
                u = n("597590"),
                d = n("980428"),
                h = n("772280"),
                p = n("587974"),
                x = n("133934");
            let f = e => {
                    let {
                        className: l,
                        iconClassName: n,
                        children: t,
                        selected: a = !1,
                        disabled: i = !1,
                        showBadge: s = !1,
                        color: u,
                        foreground: d,
                        background: h,
                        icon: f,
                        onClick: m,
                        onContextMenu: v,
                        tooltip: C = null,
                        tooltipColor: g,
                        tooltipPosition: j = "bottom",
                        hideOnClick: b = !0,
                        role: N,
                        "aria-label": k,
                        "aria-hidden": w,
                        "aria-checked": E,
                        "aria-expanded": y,
                        "aria-haspopup": M
                    } = e, P = (0, r.jsx)(f, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: o(n, x.icon),
                        foreground: null != d ? d : void 0,
                        background: null != h ? h : void 0,
                        color: u
                    }), I = k;
                    return null == I && "string" == typeof C && (I = C), (0, r.jsx)(c.Tooltip, {
                        text: C,
                        color: g,
                        position: j,
                        hideOnClick: b,
                        children: e => {
                            let {
                                onMouseEnter: C,
                                onMouseLeave: g,
                                onFocus: j,
                                onBlur: b
                            } = e;
                            return null == m ? (0, r.jsx)("div", {
                                className: o(l, [x.iconWrapper]),
                                children: (0, r.jsx)(f, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: o(n, x.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != h ? h : void 0,
                                    color: u,
                                    "aria-hidden": w,
                                    onMouseEnter: C,
                                    onMouseLeave: g,
                                    onFocus: j,
                                    onBlur: b
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: i ? void 0 : m,
                                onContextMenu: i ? void 0 : v,
                                onMouseEnter: C,
                                onMouseLeave: g,
                                onFocus: j,
                                onBlur: b,
                                className: o(l, {
                                    [x.iconWrapper]: !0,
                                    [x.clickable]: !i && null != m,
                                    [x.selected]: a
                                }),
                                role: N,
                                "aria-label": I,
                                "aria-hidden": w,
                                "aria-checked": E,
                                "aria-haspopup": M,
                                "aria-expanded": y,
                                tabIndex: i || null == m ? -1 : 0,
                                children: [s ? (0, r.jsx)(p.default, {
                                    mask: p.default.Masks.HEADER_BAR_BADGE,
                                    children: P
                                }) : P, s ? (0, r.jsx)("span", {
                                    className: x.iconBadge
                                }) : null, t]
                            })
                        }
                    })
                },
                m = e => {
                    let {
                        className: l
                    } = e;
                    return (0, r.jsx)("div", {
                        className: o(x.divider, l)
                    })
                },
                v = e => {
                    let {
                        className: l,
                        innerClassName: n,
                        children: a,
                        childrenBottom: d,
                        toolbar: h,
                        onDoubleClick: p,
                        "aria-label": f,
                        "aria-labelledby": m,
                        role: v,
                        scrollable: C,
                        transparent: g = !1
                    } = e, j = t.useRef(null), b = t.useContext(u.default);
                    return (0, r.jsx)("section", {
                        className: o(l, x.container, {
                            [x.themed]: !g,
                            [x.transparent]: g,
                            [x.themedMobile]: s.isMobile
                        }),
                        "aria-label": f,
                        "aria-labelledby": m,
                        role: v,
                        ref: j,
                        children: (0, r.jsxs)(c.FocusRingScope, {
                            containerRef: j,
                            children: [(0, r.jsxs)("div", {
                                className: x.upperContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: o(x.children, n, {
                                        [x.scrollable]: C
                                    }),
                                    onDoubleClick: p,
                                    children: [s.isMobile && null != b ? (0, r.jsx)(i.default, {
                                        onClick: b,
                                        className: x.hamburger
                                    }) : null, a]
                                }), null != h ? (0, r.jsx)("div", {
                                    className: x.toolbar,
                                    children: h
                                }) : null]
                            }), d]
                        })
                    })
                };
            v.Icon = f, v.Title = e => {
                let {
                    className: l,
                    wrapperClassName: n,
                    children: t,
                    onContextMenu: a,
                    onClick: i,
                    id: s,
                    muted: u = !1,
                    level: d = 1
                } = e, h = (0, r.jsx)(c.HeadingLevel, {
                    forceLevel: d,
                    children: (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: u ? "header-secondary" : void 0,
                        className: o(l, x.title),
                        id: s,
                        children: t
                    })
                });
                return null != i ? (0, r.jsx)(c.Clickable, {
                    onClick: i,
                    onContextMenu: a,
                    className: o(n, x.titleWrapper),
                    children: h
                }) : (0, r.jsx)("div", {
                    className: o(n, x.titleWrapper),
                    onContextMenu: a,
                    children: h
                })
            }, v.Divider = m, v.Caret = function(e) {
                let {
                    direction: l = "right"
                } = e;
                return "right" === l ? (0, r.jsx)(h.default, {
                    className: x.caret
                }) : (0, r.jsx)(d.default, {
                    className: x.caret
                })
            };
            var C = v
        },
        353386: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var t = n("580420"),
                a = n.n(t),
                o = n("249907"),
                i = e => {
                    let {
                        open: l = !1,
                        className: n,
                        ...t
                    } = e;
                    return (0, r.jsxs)("button", {
                        type: "button",
                        className: a(o.btnHamburger, {
                            [o.btnHamburgerOpen]: l
                        }, n),
                        ...t,
                        children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                    })
                }
        }
    }
]);