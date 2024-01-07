            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                CenterControlButton: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("461380"),
                o = n("587974"),
                u = n("550410"),
                d = n("641568"),
                c = n("782340"),
                m = n("397651");

            function f(e) {
                let {
                    label: t,
                    onClick: n,
                    onKeyDown: a,
                    onMouseEnter: r,
                    onMouseLeave: o,
                    onContextMenu: d,
                    className: c,
                    wrapperClassName: f,
                    iconClassName: h,
                    iconComponent: p,
                    themeable: g = !1,
                    disabled: E = !1,
                    isActive: v = !1,
                    tooltipPosition: C = "top",
                    shouldShowTooltip: I = !0,
                    forceTooltipOpen: x = !1,
                    buttonRef: _,
                    grow: S,
                    "aria-label": N
                } = e;
                return (0, l.jsx)(u.default, {
                    children: (0, l.jsx)(i.Tooltip, {
                        position: C,
                        text: t,
                        "aria-label": N,
                        shouldShow: I,
                        forceOpen: x,
                        children: e => {
                            let {
                                onClick: t,
                                onContextMenu: u,
                                onMouseEnter: C,
                                onMouseLeave: I,
                                ...x
                            } = e;
                            return (0, l.jsx)(i.Button, {
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
                                onKeyDown: e => {
                                    null == a || a(e)
                                },
                                onClick: e => {
                                    null == t || t(), null == n || n(e)
                                },
                                onMouseEnter: e => {
                                    null == C || C(), null == r || r(e)
                                },
                                onMouseLeave: e => {
                                    null == I || I(), null == o || o(e)
                                },
                                onContextMenu: e => {
                                    null == u || u(), null == d || d(e)
                                },
                                onFocus: e => {
                                    null == C || C(), null == r || r(e)
                                },
                                onBlur: e => {
                                    null == I || I(), null == o || o(e)
                                },
                                disabled: E,
                                innerClassName: m.lineHeightReset,
                                className: s({
                                    [m.active]: v
                                }, c),
                                wrapperClassName: f,
                                buttonRef: _,
                                grow: S,
                                "aria-label": N,
                                ...x,
                                children: (0, l.jsx)(p, {
                                    className: s(m.controlIcon, h, {
                                        [m.themeable]: g,
                                        [m.active]: v
                                    })
                                })
                            })
                        }
                    })
                })
            }
            let h = {
                red: m.red,
                white: m.white,
                green: m.green,
                yellow: m.yellow,
                primaryDark: m.primaryDark,
                primaryLight: m.primaryLight,
                activeLight: m.activeLight
            };

            function p(e) {
                let {
                    color: t,
                    isActive: n = !1,
                    className: a,
                    iconClassName: p,
                    onPopoutClick: g,
                    popoutOpen: E = !1,
                    ...v
                } = e, C = (0, d.default)(t, n), I = (0, l.jsx)(f, {
                    ...v,
                    grow: !1,
                    onContextMenu: g,
                    iconClassName: s(p, m.centerIcon),
                    className: s(null == g ? a : m.staticButton, m.centerButton, h[C])
                }), x = null;
                return null != g && (x = (0, l.jsxs)("div", {
                    className: s(a, m.contextMenuContainer),
                    children: [(0, l.jsx)(o.default, {
                        mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                        width: 56,
                        height: 56,
                        children: I
                    }), (0, l.jsx)(u.default, {
                        children: (0, l.jsx)(i.Clickable, {
                            "aria-label": c.default.Messages.MORE_OPTIONS,
                            onClick: g,
                            onContextMenu: g,
                            className: s(m.contextMenuNub, h[C], {
                                [m.active]: E
                            }),
                            children: (0, l.jsx)(r.default, {
                                className: s(m.contextMenuCaret, {
                                    [m.open]: E
                                })
                            })
                        })
                    })]
                })), (0, l.jsxs)(l.Fragment, {
                    children: [x, (0, l.jsx)("div", {
                        className: s({
                            [m.unmasked]: null != g
                        }, null != g ? a : null),
                        children: I
                    })]
                })
            }