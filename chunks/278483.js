            "use strict";
            n.r(t), n.d(t, {
                openDisableCommunication: function() {
                    return s
                },
                openEnableCommunication: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078");

            function s(e, t, s) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("693120").then(n.bind(n, "693120"));
                    return n => (0, a.jsx)(l, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: s,
                        ...n
                    })
                })
            }

            function i(e, t, s) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("750331").then(n.bind(n, "750331"));
                    return n => (0, a.jsx)(l, {
                        guildId: e,
                        userId: t,
                        anaylticsLocations: s,
                        ...n
                    })
                })
            }