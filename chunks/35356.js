            "use strict";
            n.r(t), n.d(t, {
                useButton: function() {
                    return i
                },
                useToggleButton: function() {
                    return s
                }
            });
            var r = n("290895"),
                o = n("780095"),
                a = n("495912");

            function i(e, t) {
                let n, {
                    elementType: i = "button",
                    isDisabled: s,
                    onPress: c,
                    onPressStart: l,
                    onPressEnd: u,
                    onPressChange: d,
                    preventFocusOnPress: p,
                    allowFocusWhenDisabled: f,
                    onClick: m,
                    href: h,
                    target: g,
                    rel: v,
                    type: y = "button"
                } = e;
                n = "button" === i ? {
                    type: y,
                    disabled: s
                } : {
                    role: "button",
                    tabIndex: s ? void 0 : 0,
                    href: "a" === i && s ? void 0 : h,
                    target: "a" === i ? g : void 0,
                    type: "input" === i ? y : void 0,
                    disabled: "input" === i ? s : void 0,
                    "aria-disabled": s && "input" !== i ? s : void 0,
                    rel: "a" === i ? v : void 0
                };
                let {
                    pressProps: b,
                    isPressed: x
                } = (0, a.usePress)({
                    onPressStart: l,
                    onPressEnd: u,
                    onPressChange: d,
                    onPress: c,
                    isDisabled: s,
                    preventFocusOnPress: p,
                    ref: t
                }), {
                    focusableProps: S
                } = (0, o.useFocusable)(e, t);
                f && (S.tabIndex = s ? -1 : S.tabIndex);
                let w = (0, r.mergeProps)(S, b, (0, r.filterDOMProps)(e, {
                    labelable: !0
                }));
                return {
                    isPressed: x,
                    buttonProps: (0, r.mergeProps)(n, w, {
                        "aria-haspopup": e["aria-haspopup"],
                        "aria-expanded": e["aria-expanded"],
                        "aria-controls": e["aria-controls"],
                        "aria-pressed": e["aria-pressed"],
                        onClick: e => {
                            m && (m(e), console.warn("onClick is deprecated, please use onPress"))
                        }
                    })
                }
            }

            function s(e, t, n) {
                let {
                    isSelected: o
                } = t, {
                    isPressed: a,
                    buttonProps: s
                } = i({
                    ...e,
                    onPress: (0, r.chain)(t.toggle, e.onPress)
                }, n);
                return {
                    isPressed: a,
                    buttonProps: (0, r.mergeProps)(s, {
                        "aria-pressed": o
                    })
                }
            }