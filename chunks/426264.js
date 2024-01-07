            "use strict";
            n.r(t), n.d(t, {
                MenuItem: function() {
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("227645"),
                l = n("199285"),
                u = n("107728"),
                c = n("697917"),
                d = n("886074"),
                f = n("772280"),
                E = n("389802"),
                h = n("946032");

            function p(e) {
                let {
                    color: t = "default",
                    label: n,
                    icon: s,
                    showIconFirst: p = !1,
                    imageUrl: _,
                    hint: S,
                    subtext: m,
                    hasSubmenu: T,
                    disabled: g,
                    isFocused: I,
                    menuItemProps: C,
                    action: v,
                    onClose: A,
                    onFocus: R,
                    className: N,
                    focusedClassName: O,
                    subMenuIconClassName: D,
                    dontCloseOnActionIfHoldingShiftKey: y,
                    iconProps: P,
                    sparkle: L
                } = e, b = r.useContext(u.OnMenuSelectContext), M = r.useRef(null), U = r.useCallback(e => {
                    if (null == v) return !1;
                    !(e.shiftKey && y) && A(), e.persist(), null == b || b(), requestAnimationFrame(() => v(e))
                }, [v, A, b, y]);
                return r.useEffect(() => {
                    I && ((0, c.ensureItemVisible)(M), null == R || R())
                }, [I, R]), (0, i.jsxs)(o.Clickable, {
                    innerRef: M,
                    className: a(h.item, h.labelContainer, E.MENU_ITEM_COLORS[t], N, {
                        [h.disabled]: g,
                        [h.focused]: I,
                        [null != O ? O : ""]: I
                    }),
                    onClick: g ? void 0 : U,
                    "aria-disabled": g,
                    ...C,
                    "data-menu-item": "true",
                    children: [p && null != s && (0, i.jsx)("div", {
                        className: h.iconContainerLeft,
                        children: (0, i.jsx)(s, {
                            ...P,
                            className: a(h.icon, null == P ? void 0 : P.className),
                            isFocused: I
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.label,
                        children: [(0, l.renderSubnode)(n, e), null != m && (0, i.jsx)("div", {
                            className: h.subtext,
                            children: m
                        })]
                    }), null != S && (0, i.jsx)("div", {
                        className: h.hintContainer,
                        children: (0, l.renderSubnode)(S, e)
                    }), !p && null != s && (0, i.jsx)("div", {
                        className: h.iconContainer,
                        children: (0, i.jsx)(s, {
                            ...P,
                            className: a(h.icon, null == P ? void 0 : P.className),
                            isFocused: I
                        })
                    }), null != _ && (0, i.jsx)("div", {
                        className: h.imageContainer,
                        children: (0, i.jsx)("img", {
                            className: h.image,
                            src: (0, l.renderSubnode)(_, e),
                            alt: ""
                        })
                    }), T && (0, i.jsxs)("div", {
                        className: h.iconContainer,
                        children: [(0, i.jsx)(f.default, {
                            className: a(h.caret, D)
                        }), L && (0, i.jsx)(d.default, {
                            className: h.sparkles
                        })]
                    })]
                })
            }