            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("364082"),
                r = e => {
                    let {
                        children: t,
                        shouldAnimate: n
                    } = e;
                    return n ? (0, a.jsx)("div", {
                        className: s.outerContainer,
                        children: (0, a.jsx)("div", {
                            className: s.innerContainer,
                            children: t
                        })
                    }) : t
                }