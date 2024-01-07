            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("259687"),
                s = n("782340");

            function u(e) {
                return null == e.reactions || 0 === e.reactions.length ? null : (0, a.jsx)(i.MenuItem, {
                    id: "reactions",
                    label: s.default.Messages.VIEW_REACTIONS,
                    icon: l.default,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("57155").then(n.bind(n, "57155"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            message: e
                        })
                    })
                })
            }