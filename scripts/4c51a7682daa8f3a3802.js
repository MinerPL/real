(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["10487"], {
        639055: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                EyeDropperIcon: function() {
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var t = n("912557"),
                o = n("75196");
            let a = e => {
                let {
                    width: l = 24,
                    height: n = 24,
                    color: a = t.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
            var r = n("773670"),
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
                    return o
                }
            });
            var r = n("773670");
            let t = r.createContext(void 0);
            var o = t
        },
        973262: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                DefaultColorButton: function() {
                    return b
                },
                CustomColorButton: function() {
                    return k
                },
                CustomColorPicker: function() {
                    return N
                },
                default: function() {
                    return w
                }
            });
            var r = n("920040"),
                t = n("773670"),
                o = n("575482"),
                a = n.n(o),
                i = n("947980"),
                s = n("253824"),
                c = n("77078"),
                u = n("248559"),
                d = n("449918"),
                h = n("526975"),
                p = n("36694"),
                f = n("422403"),
                x = n("664336"),
                m = n("49111"),
                C = n("782340"),
                v = n("720596");
            let g = () => Promise.resolve();

            function j(e) {
                let {
                    color: l,
                    isDefault: n = !1,
                    isCustom: t = !1,
                    isSelected: o = !1,
                    disabled: u = !1,
                    style: h = {},
                    onClick: x,
                    "aria-label": C
                } = e, g = (0, i.useListItem)("color-".concat(l)), j = null != l ? (0, s.int2hex)(l) : h.backgroundColor, b = !1;
                return t && !o ? b = !0 : (t || o) && (b = (0, s.getDarkness)(l) > .1), (0, r.jsx)(c.FocusRing, {
                    offset: -2,
                    children: (0, r.jsxs)("button", {
                        type: "button",
                        className: a(v.colorPickerSwatch, {
                            [v.disabled]: u,
                            [v.default]: n,
                            [v.custom]: t,
                            [v.noColor]: null == l
                        }),
                        disabled: u,
                        onClick: () => null == x ? void 0 : x(l),
                        style: {
                            ...h,
                            backgroundColor: j
                        },
                        "aria-label": null != C ? C : j,
                        ...g,
                        children: [t ? (0, r.jsx)(f.default, {
                            className: v.colorPickerDropper,
                            foreground: v.colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, d.getColor)(b ? m.Color.WHITE_500 : m.Color.BLACK_500)
                        }) : null, function() {
                            let e = 16,
                                l = 16;
                            if ((t || n) && (e = 32, l = 24), o) return (0, r.jsx)(p.default, {
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
            class k extends t.PureComponent {
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
            let N = t.memo(e => {
                let {
                    value: l,
                    onChange: n,
                    onClose: o,
                    suggestedColors: a,
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
                }, [l, g]), t.useEffect(() => o, [o]);
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
                    k = async () => {
                        if (null != m) try {
                            let {
                                sRGBHex: e
                            } = await m.open();
                            b(e)
                        } catch {}
                    }, N = e => {
                        j(l => ({
                            ...l,
                            pending: e,
                            input: e
                        }))
                    }, w = e => {
                        n((0, s.hex2int)(e))
                    };
                return (0, r.jsxs)(c.Dialog, {
                    "aria-label": C.default.Messages.PICK_A_COLOR,
                    className: v.customColorPicker,
                    children: [(0, r.jsx)(h.default, {
                        onChange: e => {
                            let {
                                hex: l
                            } = e;
                            return N(l)
                        },
                        onChangeComplete: e => {
                            let {
                                hex: l
                            } = e;
                            return w(l)
                        },
                        color: g.pending
                    }), i, (0, r.jsxs)("div", {
                        className: v.customColorPickerInputContainer,
                        children: [p && null != m && (0, r.jsx)(x.Icon, {
                            onClick: k,
                            tooltip: C.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: "top",
                            className: v.customColorPickerEyeDropper,
                            icon: f.default
                        }), (0, r.jsx)(c.TextInput, {
                            className: v.customColorPickerInput,
                            value: g.input,
                            onChange: b,
                            maxLength: 7
                        })]
                    }), null != a && a.length > 0 && (0, r.jsx)("div", {
                        className: v.suggestedColors,
                        children: a.map((e, l) => (0, r.jsx)(c.Clickable, {
                            "aria-label": "",
                            style: {
                                backgroundColor: e
                            },
                            className: v.suggestedColor,
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
                    colors: o,
                    value: s,
                    disabled: c,
                    onChange: u,
                    renderDefaultButton: d,
                    renderCustomButton: h,
                    colorContainerClassName: p
                } = e, f = e => (0, r.jsx)("div", {
                    className: v.colorPickerRow,
                    children: e.map(e => (0, r.jsx)(j, {
                        color: e,
                        isSelected: e === s,
                        onClick: u,
                        disabled: c
                    }, e))
                }), x = o.slice(0, o.length / 2), m = o.slice(o.length / 2, o.length), C = (0, i.default)({
                    id: "color-picker",
                    isEnabled: !0,
                    scrollToStart: g,
                    scrollToEnd: g
                });
                return (0, r.jsx)(i.ListNavigatorProvider, {
                    navigator: C,
                    children: (0, r.jsx)(i.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: o,
                                ...i
                            } = e;
                            return (0, r.jsxs)("div", {
                                className: a(v.container, l),
                                ref: o,
                                ...i,
                                children: [(0, r.jsx)("div", {
                                    className: a(v.defaultContainer, p),
                                    children: d({
                                        value: s,
                                        color: n,
                                        onChange: u,
                                        disabled: c
                                    })
                                }), (0, r.jsx)("div", {
                                    className: a(v.customContainer, p),
                                    children: h({
                                        value: s,
                                        customColor: t,
                                        disabled: c
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: v.presets,
                                    children: [f(x), f(m)]
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
            var r = n("920040"),
                t = n("773670"),
                o = n("668690"),
                a = n("795356"),
                i = n("470088");
            let s = (0, o.CustomPicker)(e => (0, r.jsxs)("div", {
                className: i.wrapper,
                children: [(0, r.jsx)("div", {
                    className: i.saturation,
                    children: (0, r.jsx)(a.Saturation, {
                        ...e
                    })
                }), (0, r.jsx)("div", {
                    className: i.hue,
                    children: (0, r.jsx)(a.Hue, {
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
                    return a
                }
            });
            var r = n("920040");
            n("773670");
            var t = n("469563"),
                o = n("639055"),
                a = (0, t.replaceIcon)(function(e) {
                    let {
                        width: l = 16,
                        height: n = 16,
                        color: t = "currentColor",
                        className: o,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: o,
                        width: l,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            children: [(0, r.jsx)("path", {
                                d: "M-4-4h24v24H-4z"
                            }), (0, r.jsx)("path", {
                                className: a,
                                fill: t,
                                d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            })]
                        })
                    })
                }, o.EyeDropperIcon)
        },
        664336: function(e, l, n) {
            "use strict";
            n.r(l), n.d(l, {
                Icon: function() {
                    return x
                },
                Divider: function() {
                    return m
                },
                default: function() {
                    return v
                }
            });
            var r = n("920040"),
                t = n("773670"),
                o = n("575482"),
                a = n.n(o),
                i = n("902694"),
                s = n("807403"),
                c = n("77078"),
                u = n("597590"),
                d = n("980428"),
                h = n("772280"),
                p = n("587974"),
                f = n("767706");
            let x = e => {
                    let {
                        className: l,
                        iconClassName: n,
                        children: t,
                        selected: o = !1,
                        disabled: i = !1,
                        showBadge: s = !1,
                        color: u,
                        foreground: d,
                        background: h,
                        icon: x,
                        onClick: m,
                        onContextMenu: C,
                        tooltip: v = null,
                        tooltipColor: g,
                        tooltipPosition: j = "bottom",
                        hideOnClick: b = !0,
                        role: k,
                        "aria-label": N,
                        "aria-hidden": w,
                        "aria-checked": E,
                        "aria-expanded": M,
                        "aria-haspopup": P
                    } = e, y = (0, r.jsx)(x, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, f.icon),
                        foreground: null != d ? d : void 0,
                        background: null != h ? h : void 0,
                        color: u
                    }), I = N;
                    return null == I && "string" == typeof v && (I = v), (0, r.jsx)(c.Tooltip, {
                        text: v,
                        color: g,
                        position: j,
                        hideOnClick: b,
                        children: e => {
                            let {
                                onMouseEnter: v,
                                onMouseLeave: g,
                                onFocus: j,
                                onBlur: b
                            } = e;
                            return null == m ? (0, r.jsx)("div", {
                                className: a(l, [f.iconWrapper]),
                                children: (0, r.jsx)(x, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a(n, f.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != h ? h : void 0,
                                    color: u,
                                    "aria-hidden": w,
                                    onMouseEnter: v,
                                    onMouseLeave: g,
                                    onFocus: j,
                                    onBlur: b
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: i ? void 0 : m,
                                onContextMenu: i ? void 0 : C,
                                onMouseEnter: v,
                                onMouseLeave: g,
                                onFocus: j,
                                onBlur: b,
                                className: a(l, {
                                    [f.iconWrapper]: !0,
                                    [f.clickable]: !i && null != m,
                                    [f.selected]: o
                                }),
                                role: k,
                                "aria-label": I,
                                "aria-hidden": w,
                                "aria-checked": E,
                                "aria-haspopup": P,
                                "aria-expanded": M,
                                tabIndex: i || null == m ? -1 : 0,
                                children: [s ? (0, r.jsx)(p.default, {
                                    mask: p.default.Masks.HEADER_BAR_BADGE,
                                    children: y
                                }) : y, s ? (0, r.jsx)("span", {
                                    className: f.iconBadge
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
                        className: a(f.divider, l)
                    })
                },
                C = e => {
                    let {
                        className: l,
                        innerClassName: n,
                        children: o,
                        childrenBottom: d,
                        toolbar: h,
                        onDoubleClick: p,
                        "aria-label": x,
                        "aria-labelledby": m,
                        role: C,
                        scrollable: v,
                        transparent: g = !1
                    } = e, j = t.useRef(null), b = t.useContext(u.default);
                    return (0, r.jsx)("section", {
                        className: a(l, f.container, {
                            [f.themed]: !g,
                            [f.transparent]: g,
                            [f.themedMobile]: s.isMobile
                        }),
                        "aria-label": x,
                        "aria-labelledby": m,
                        role: C,
                        ref: j,
                        children: (0, r.jsxs)(c.FocusRingScope, {
                            containerRef: j,
                            children: [(0, r.jsxs)("div", {
                                className: f.upperContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: a(f.children, n, {
                                        [f.scrollable]: v
                                    }),
                                    onDoubleClick: p,
                                    children: [s.isMobile && null != b ? (0, r.jsx)(i.default, {
                                        onClick: b,
                                        className: f.hamburger
                                    }) : null, o]
                                }), null != h ? (0, r.jsx)("div", {
                                    className: f.toolbar,
                                    children: h
                                }) : null]
                            }), d]
                        })
                    })
                };
            C.Icon = x, C.Title = e => {
                let {
                    className: l,
                    wrapperClassName: n,
                    children: t,
                    onContextMenu: o,
                    onClick: i,
                    id: s,
                    muted: u = !1,
                    level: d = 1
                } = e, h = (0, r.jsx)(c.HeadingLevel, {
                    forceLevel: d,
                    children: (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: u ? "header-secondary" : void 0,
                        className: a(l, f.title),
                        id: s,
                        children: t
                    })
                });
                return null != i ? (0, r.jsx)(c.Clickable, {
                    onClick: i,
                    onContextMenu: o,
                    className: a(n, f.titleWrapper),
                    children: h
                }) : (0, r.jsx)("div", {
                    className: a(n, f.titleWrapper),
                    onContextMenu: o,
                    children: h
                })
            }, C.Divider = m, C.Caret = function(e) {
                let {
                    direction: l = "right"
                } = e;
                return "right" === l ? (0, r.jsx)(h.default, {
                    className: f.caret
                }) : (0, r.jsx)(d.default, {
                    className: f.caret
                })
            };
            var v = C
        }
    }
]);