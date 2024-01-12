            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("562228"),
                s = n("259687"),
                u = n("782340");

            function r(e) {
                return null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, l.hasNonVoteReactions)(e) ? null : (0, a.jsx)(i.MenuItem, {
                    id: "reactions",
                    label: u.default.Messages.VIEW_REACTIONS,
                    icon: s.default,
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