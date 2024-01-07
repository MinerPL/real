            "use strict";
            n.r(t), n.d(t, {
                useVisuallyHidden: function() {
                    return s
                },
                VisuallyHidden: function() {
                    return c
                }
            }), n("222007");
            var r = n("290895"),
                o = n("884691"),
                a = n("495912");
            let i = {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap"
            };

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        style: t,
                        isFocusable: n
                    } = e,
                    [r, s] = (0, o.useState)(!1),
                    {
                        focusWithinProps: c
                    } = (0, a.useFocusWithin)({
                        isDisabled: !n,
                        onFocusWithinChange: e => s(e)
                    }),
                    l = (0, o.useMemo)(() => r ? t : t ? {
                        ...i,
                        ...t
                    } : i, [r]);
                return {
                    visuallyHiddenProps: {
                        ...c,
                        style: l
                    }
                }
            }

            function c(e) {
                let {
                    children: t,
                    elementType: Element = "div",
                    isFocusable: n,
                    style: a,
                    ...i
                } = e, {
                    visuallyHiddenProps: c
                } = s(e);
                return o.createElement(Element, (0, r.mergeProps)(i, c), t)
            }