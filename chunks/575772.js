            "use strict";
            n.r(t), n.d(t, {
                useDialog: function() {
                    return s
                }
            });
            var r = n("290895"),
                o = n("780095"),
                a = n("884691"),
                i = n("439991");

            function s(e, t) {
                let {
                    role: n = "dialog"
                } = e, s = (0, r.useSlotId)();
                s = e["aria-label"] ? void 0 : s;
                let c = (0, a.useRef)(!1);
                return (0, a.useEffect)(() => {
                    if (t.current && !t.current.contains(document.activeElement)) {
                        (0, o.focusSafely)(t.current);
                        let e = setTimeout(() => {
                            document.activeElement === t.current && (c.current = !0, t.current.blur(), (0, o.focusSafely)(t.current), c.current = !1)
                        }, 500);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [t]), (0, i.useOverlayFocusContain)(), {
                    dialogProps: {
                        ...(0, r.filterDOMProps)(e, {
                            labelable: !0
                        }),
                        role: n,
                        tabIndex: -1,
                        "aria-labelledby": e["aria-labelledby"] || s,
                        onBlur: e => {
                            c.current && e.stopPropagation()
                        }
                    },
                    titleProps: {
                        id: s
                    }
                }
            }