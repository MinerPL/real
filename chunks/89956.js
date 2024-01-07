            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("640322"),
                l = n("477635");

            function r(e) {
                let {
                    guild: t,
                    setHasSubheader: n
                } = e, r = s.useRef(null);
                return s.useLayoutEffect(() => {
                    let e = r.current;
                    null != e && n(e.childNodes.length > 0)
                }), (0, a.jsx)("div", {
                    className: l.container,
                    ref: r,
                    children: (0, a.jsx)(i.default, {
                        guild: t
                    })
                })
            }