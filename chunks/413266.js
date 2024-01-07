            "use strict";
            n.r(t), n.d(t, {
                openReportRaidModal: function() {
                    return u
                },
                openSafetyChannelSetupModal: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078");

            function u(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("423588").then(n.bind(n, "423588"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }

            function a(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("982537").then(n.bind(n, "982537"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }