            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("368639"),
                u = n("62843"),
                d = n("632215");

            function c(e) {
                let {
                    userBio: t,
                    className: n,
                    animateOnHover: s = !1,
                    isHovering: c = !1,
                    lineClamp: m = 6
                } = e, f = a.useMemo(() => (0, o.parseBioReact)(t), [t]);
                return (0, l.jsx)("div", {
                    className: i(n, d.markup),
                    children: (0, l.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        lineClamp: m,
                        children: (0, l.jsx)(u.MessagesInteractionContext.Provider, {
                            value: {
                                disableAnimations: s && !c,
                                disableInteractions: !1
                            },
                            children: f
                        })
                    })
                })
            }