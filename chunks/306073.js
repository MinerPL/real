            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("37983"),
                n = s("884691");
            let r = e => t => {
                null == t || t.stopPropagation(), e()
            };

            function o(e) {
                let {
                    onClick: t,
                    className: s,
                    children: o
                } = e, a = n.useRef(null);
                return (0, l.jsx)("div", {
                    onClick: t,
                    ref: a,
                    className: s,
                    children: o({
                        areaRef: a,
                        handleStopPropagation: r
                    })
                })
            }