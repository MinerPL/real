            "use strict";
            n.r(t), n.d(t, {
                MenuCustomItem: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("227645"),
                l = n("697917"),
                u = n("389802"),
                c = n("946032");

            function d(e) {
                let {
                    children: t,
                    color: n = "default",
                    isFocused: s = !1,
                    disabled: d = !1,
                    keepItemStyles: f = !1,
                    menuItemProps: E,
                    action: h,
                    dontCloseOnActionIfHoldingShiftKey: p,
                    onClose: _
                } = e, S = r.useRef(null);
                r.useEffect(() => {
                    s && (0, l.ensureItemVisible)(S)
                }, [s]);
                let m = r.useCallback(e => {
                        if (null == h) return !1;
                        !(e.shiftKey && p) && _(), e.persist(), requestAnimationFrame(() => h(e))
                    }, [h, _, p]),
                    T = f ? a(c.item, u.MENU_ITEM_COLORS[n], {
                        [c.focused]: s
                    }) : c.customItem;
                return (0, i.jsx)(o.Clickable, {
                    innerRef: S,
                    className: T,
                    onClick: d ? void 0 : m,
                    "aria-disabled": d,
                    ...E,
                    children: t({
                        color: n,
                        disabled: d,
                        isFocused: s
                    })
                })
            }