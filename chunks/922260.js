            "use strict";
            n.r(t), n.d(t, {
                MenuCompositeControlItem: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("697917"),
                l = n("389802"),
                u = n("946032");

            function c(e) {
                let {
                    color: t = "default",
                    disabled: n,
                    isFocused: s,
                    showDefaultFocus: c = !1,
                    menuItemProps: d,
                    children: f
                } = e, E = r.useRef(null);
                return r.useLayoutEffect(() => {
                    if (!s) return;
                    let e = E.current;
                    if (null == e) return;
                    (0, o.ensureItemVisible)(E);
                    let t = e.querySelector('[tabindex="0"]');
                    null == t || t.focus()
                }, [s]), (0, i.jsx)("div", {
                    ref: E,
                    className: a(u.item, l.MENU_ITEM_COLORS[t], {
                        [u.disabled]: n,
                        [u.focused]: c && s,
                        [u.hideInteraction]: !c
                    }),
                    "aria-disabled": n,
                    ...d,
                    children: f
                })
            }