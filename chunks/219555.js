            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("731898"),
                u = s("206230"),
                c = s("945330"),
                E = s("673122"),
                _ = s("79189");
            let T = n.forwardRef(function(e, t) {
                var s, l;
                let {
                    value: r,
                    isSelected: d,
                    isEditing: u,
                    forceShowErrorTooltip: c = !1,
                    error: E
                } = e, [T, I, S] = n.useMemo(() => {
                    if (null == E) return [];
                    let {
                        erroringCharacterOffset: e = 0,
                        erroringCharacterLength: t = r.length
                    } = null != E ? E : {}, s = r.slice(0, e), a = r.slice(e, e + t), n = r.slice(e + t);
                    return [s, a, n]
                }, [r, E]);
                if (null == E) return (0, a.jsx)("div", {
                    className: i(_.chipletValue, {
                        [_.isEditing]: u,
                        [_.isSelected]: d
                    }),
                    ref: t,
                    children: r
                });
                let N = (null !== (s = null == T ? void 0 : T.length) && void 0 !== s ? s : 0) + (null !== (l = null == I ? void 0 : I.length) && void 0 !== l ? l : 0) > 70;
                return N ? (0, a.jsx)(o.Tooltip, {
                    "aria-label": E.message,
                    text: () => (0, a.jsxs)("div", {
                        "aria-label": E.message,
                        children: [E.message, " ", (0, a.jsx)("span", {
                            className: _.errorOverflowValue,
                            children: I
                        })]
                    }),
                    tooltipClassName: _.errorTooltip,
                    color: o.Tooltip.Colors.RED,
                    position: "left",
                    forceOpen: c || void 0,
                    children: e => (0, a.jsxs)("div", {
                        ref: t,
                        className: i(_.chipletValue, {
                            [_.isEditing]: u,
                            [_.isError]: null != E && !u,
                            [_.isOverflowing]: null != E && !u
                        }),
                        ...e,
                        children: [(0, a.jsx)("span", {
                            children: T
                        }), (0, a.jsx)("span", {
                            className: _.errorValue,
                            children: I
                        }), (0, a.jsx)("span", {
                            children: S
                        })]
                    })
                }) : (0, a.jsxs)("div", {
                    ref: t,
                    className: i(_.chipletValue, {
                        [_.isEditing]: u,
                        [_.isError]: null != E && !u
                    }),
                    children: [(0, a.jsx)("span", {
                        children: T
                    }), (0, a.jsx)(o.Tooltip, {
                        text: E.message,
                        color: o.Tooltip.Colors.RED,
                        position: "top",
                        forceOpen: c || void 0,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: _.errorValue,
                            children: I
                        })
                    }), (0, a.jsx)("span", {
                        children: S
                    })]
                })
            });

            function I(e) {
                let {
                    value: t,
                    onChange: s,
                    onBlur: l,
                    onFocus: I,
                    onRemove: S,
                    isSelected: N,
                    isSelecting: g,
                    error: f,
                    forceShowErrorTooltip: A
                } = e, L = n.useRef(null), m = n.useRef(null), [C, O] = n.useState(!1), {
                    ref: h,
                    width: R = 0
                } = (0, d.default)(C), {
                    ref: D,
                    width: M = 0
                } = (0, d.default)(C), G = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [x, p] = n.useState(A), U = n.useRef(null), v = R > M ? R : M;
                n.useEffect(() => {
                    A ? (p(!0), U.current = setTimeout(() => {
                        p(!1), U.current = null
                    }, E.CHIPLET_ERROR_FORCE_SHOW_TOOLTIP_TIMER_MS)) : p(!1)
                }, [A]), n.useEffect(() => () => {
                    clearTimeout(U.current)
                }, []);
                let j = n.useCallback(e => {
                        s(e.target.value)
                    }, [s]),
                    P = n.useCallback(function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            s = t.trim().length <= 0;
                        if (s && S(), null != L.current && null != h.current && null != m.current) {
                            var a;
                            L.current.scrollTo(0, 0), L.current.setSelectionRange(0, 0), L.current.scrollLeft = 0, h.current.scrollLeft = 0, (null === (a = m.current) || void 0 === a ? void 0 : a.ref) != null && (m.current.ref.scrollLeft = 0)
                        }
                        O(!1), l(e)
                    }, [t, h, l, S]),
                    y = n.useCallback(e => {
                        let s = t.trim().length <= 0;
                        E.NEXT_CHIP_INPUT_KEY.has(e.key) ? (e.preventDefault(), e.stopPropagation(), P(!0)) : "Backspace" === e.key && s && (e.preventDefault(), e.stopPropagation(), P(!0))
                    }, [P, t]),
                    b = n.useCallback(e => {
                        let t = e.metaKey || e.ctrlKey;
                        I(t), t ? e.preventDefault() : O(!0), e.stopPropagation()
                    }, [I]),
                    B = n.useCallback(e => {
                        S()
                    }, [S]);
                return (0, a.jsx)("div", {
                    className: _.chipletFlexContainer,
                    children: (0, a.jsxs)("div", {
                        ref: D,
                        className: i(_.chipletContainer, {
                            [_.isEditing]: C,
                            [_.smallBlink]: !C && !G,
                            [_.isSelected]: N,
                            [_.isSelecting]: g,
                            [_.isError]: null != f && !C
                        }),
                        children: [(0, a.jsxs)(o.Clickable, {
                            tag: "div",
                            onBlur: () => P(!1),
                            onClick: b,
                            ignoreKeyPress: !0,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            className: i(_.chipletContainerInner, {
                                [_.isSelecting]: g,
                                [_.isEditing]: C
                            }),
                            ref: m,
                            children: [(0, a.jsx)("input", {
                                className: i(_.chipletInput, {
                                    [_.isEditing]: C,
                                    [_.isSelecting]: g
                                }),
                                ref: L,
                                onChange: j,
                                onKeyDownCapture: y,
                                value: t,
                                style: {
                                    width: v > 0 ? v : "calc(".concat(t.length, "ch + 10px)")
                                }
                            }), (0, a.jsx)(T, {
                                ref: h,
                                value: t,
                                isEditing: C,
                                isSelected: N,
                                error: f,
                                forceShowErrorTooltip: x || C
                            })]
                        }), !C && (0, a.jsx)(o.Clickable, {
                            className: _.closeIconContainer,
                            onClick: B,
                            children: (0, a.jsx)(c.default, {
                                className: _.closeIcon,
                                width: 12,
                                height: 12
                            })
                        })]
                    })
                })
            }