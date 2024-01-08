            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("355263"),
                u = n("343599"),
                d = s.memo(function(e) {
                    var t;
                    let {
                        className: n,
                        channel: s,
                        section: l
                    } = e, d = null != l ? (0, o.getIconComponent)(l) : null;
                    return (0, a.jsx)("div", {
                        className: i(n, u.wrapper),
                        children: (0, a.jsx)("div", {
                            className: u.icon,
                            children: null != d ? (0, a.jsx)(r.Tooltip, {
                                text: null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : "",
                                position: "top",
                                children: e => (0, a.jsx)(d, {
                                    ...e,
                                    channel: s,
                                    section: l,
                                    width: 24,
                                    height: 24
                                })
                            }) : null
                        })
                    })
                })