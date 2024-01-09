            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("907002"),
                i = n("77078");

            function r(e) {
                let {
                    children: t,
                    className: n,
                    flashKey: r
                } = e, o = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
                    opacity: 1
                }), u = (0, i.useToken)(i.tokens.colors.BACKGROUND_MESSAGE_HIGHLIGHT).spring({
                    opacity: 0
                }), [d, c] = (0, l.useSpring)(() => ({
                    immediate: !0,
                    from: {
                        backgroundColor: o
                    }
                }));
                return a.useEffect(() => {
                    c({
                        reset: !0,
                        immediate: !0,
                        to: {
                            backgroundColor: o
                        }
                    }), c({
                        delay: 1e3,
                        immediate: !1,
                        to: {
                            backgroundColor: u
                        }
                    })
                }, [r, c]), (0, s.jsx)(l.animated.div, {
                    style: d,
                    className: n,
                    children: t
                })
            }