            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("390236"),
                r = a.memo(function(e) {
                    var t, l, r, o;
                    let {
                        user: u,
                        size: d = s.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, p = a.useContext(i.default);
                    return (0, n.jsx)(s.Avatar, {
                        src: (t = u, l = (0, s.getAvatarSize)(d), r = c, o = p, t.getAvatarURL(o, l, r)),
                        size: d,
                        "aria-label": f ? void 0 : u.username,
                        "aria-hidden": f,
                        ...m
                    })
                })