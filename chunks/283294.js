            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("104359"),
                r = n("956089"),
                o = n("108189"),
                u = n("315102"),
                d = n("610898"),
                c = n("829562"),
                f = n("246507");

            function h(e) {
                let [t, h] = a.useState(!1);
                return (0, l.jsx)(d.ListItem, {
                    children: (0, l.jsx)(c.default, {
                        text: e.name,
                        children: (0, l.jsx)(s.BlobMask, {
                            className: f.circleIconButton,
                            selected: t,
                            lowerBadge: (0, l.jsx)(r.IconBadge, {
                                icon: i.default,
                                disableColor: !0,
                                className: f.geoRestrictedBadge
                            }),
                            children: (0, l.jsx)(o.default, {
                                name: e.name,
                                onMouseEnter: () => {
                                    h(!0)
                                },
                                onMouseLeave: () => {
                                    h(!1)
                                },
                                onClick: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let {
                                            default: t
                                        } = await n.el("757973").then(n.bind(n, "757973"));
                                        return n => (0, l.jsx)(t, {
                                            name: e.name,
                                            guildId: e.id,
                                            ...n
                                        })
                                    })
                                },
                                icon: null != e.icon ? u.default.getGuildIconURL({
                                    id: e.id,
                                    icon: e.icon,
                                    canAnimate: !1,
                                    size: 42
                                }) : null
                            })
                        })
                    })
                })
            }