            "use strict";
            n.r(t), n.d(t, {
                ClickableContainer: function() {
                    return o
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("227645"),
                a = n("913906");

            function o(e) {
                let {
                    tag: t = "div",
                    children: n,
                    className: o,
                    focusProps: l,
                    onClick: u,
                    onDoubleClick: c,
                    onContextMenu: d,
                    onKeyDown: f,
                    onFocus: E,
                    onBlur: h,
                    onMouseOver: p,
                    onMouseDown: _,
                    onMouseLeave: S,
                    buttonProps: m,
                    "aria-label": T
                } = e, g = r.useRef(null);
                return (0, i.jsxs)(t, {
                    ref: g,
                    className: o,
                    onClick: u,
                    onMouseOver: p,
                    onMouseLeave: S,
                    onDoubleClick: c,
                    onContextMenu: d,
                    children: [(0, i.jsx)(s.Clickable, {
                        ...m,
                        focusProps: {
                            ringTarget: g,
                            ...l
                        },
                        className: a.focusTarget,
                        "aria-label": T,
                        onClick: e => {
                            e.stopPropagation(), null == u || u(e)
                        },
                        onKeyDown: f,
                        onFocus: E,
                        onBlur: h,
                        onMouseDown: _
                    }), n]
                })
            }