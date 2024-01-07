            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("77078"),
                i = n("943232"),
                r = n("842672"),
                o = n("888237"),
                u = n("782340");

            function d(e) {
                let {
                    className: t,
                    guildId: d
                } = e, c = (0, r.default)();
                return (0, a.jsx)(o.default, {
                    className: t,
                    icon: (0, a.jsx)(i.default, {
                        height: 20,
                        width: 20
                    }),
                    color: l.default.unsafe_rawColors.BRAND_500.css,
                    title: u.default.Messages.SCHEDULE_EVENT,
                    description: u.default.Messages.SCHEDULE_EVENT_DESCRIPTION,
                    onClick: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("590942").then(n.bind(n, "590942"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                guildId: d
                            })
                        }, c)
                    }
                })
            }