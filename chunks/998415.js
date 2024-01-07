            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("355263"),
                u = n("343599"),
                d = a.memo(function(e) {
                    var t;
                    let {
                        className: n,
                        channel: a,
                        section: l
                    } = e, d = null != l ? (0, o.getIconComponent)(l) : null;
                    return (0, s.jsx)("div", {
                        className: i(n, u.wrapper),
                        children: (0, s.jsx)("div", {
                            className: u.icon,
                            children: null != d ? (0, s.jsx)(r.Tooltip, {
                                text: null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : "",
                                position: "top",
                                children: e => (0, s.jsx)(d, {
                                    ...e,
                                    channel: a,
                                    section: l,
                                    width: 24,
                                    height: 24
                                })
                            }) : null
                        })
                    })
                })