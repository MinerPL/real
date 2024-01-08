            "use strict";
            n.r(t), n.d(t, {
                openBroadcastingPrivacySettingsModal: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078");

            function r(e, t, r) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: s
                    } = await n.el("725420").then(n.bind(n, "725420"));
                    return n => (0, a.jsx)(s, {
                        headerText: e,
                        buttonCTA: t,
                        onSave: r,
                        ...n
                    })
                })
            }