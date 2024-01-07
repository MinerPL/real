            "use strict";
            n.r(t), n.d(t, {
                useExpandableTextContainer: function() {
                    return o
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("284427");

            function o() {
                let [e, t] = s.useState(!1);
                return {
                    isTruncated: e,
                    ExpandableTextContainer: s.memo(function(e) {
                        let {
                            showAll: n = !1,
                            className: s,
                            children: l,
                            lineClamp: o = 2
                        } = e;
                        return (0, a.jsx)("div", {
                            ref: e => {
                                if (null != e) {
                                    let n = e.scrollHeight - e.clientHeight > 1;
                                    t(n)
                                }
                            },
                            className: i(r.lineClamp, s),
                            style: n ? void 0 : {
                                lineClamp: o,
                                WebkitLineClamp: o
                            },
                            children: l
                        })
                    })
                }
            }