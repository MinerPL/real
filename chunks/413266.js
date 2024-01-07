            "use strict";
            s.r(t), s.d(t, {
                openReportRaidModal: function() {
                    return l
                },
                openSafetyChannelSetupModal: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078");

            function l(e) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await s.el("423588").then(s.bind(s, "423588"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        guildId: e
                    })
                })
            }

            function i(e) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await s.el("982537").then(s.bind(s, "982537"));
                    return s => (0, a.jsx)(t, {
                        ...s,
                        guildId: e
                    })
                })
            }