            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("584074"),
                r = e => {
                    let {
                        value: t = 0,
                        text: n,
                        className: a,
                        ...r
                    } = e;
                    return null != n ? (0, l.jsx)("div", {
                        className: s(i.wrapper, a),
                        ...r,
                        children: n
                    }) : t > 0 ? (0, l.jsx)("div", {
                        className: s(i.wrapper, a),
                        ...r,
                        children: t
                    }) : null
                }