            "use strict";
            i.r(t), i.d(t, {
                confirmActivityAgeGate: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("870346"),
                u = i("49111");

            function r(e) {
                let {
                    application: t,
                    onAgree: r,
                    onDisagree: d
                } = e, o = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), s = o ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        ActivityAgeGateModal: e
                    } = await i.el("413012").then(i.bind(i, "413012"));
                    return i => (0, n.jsx)(e, {
                        ...i,
                        application: t,
                        onAgree: r,
                        onDisagree: d
                    })
                }, {
                    modalKey: "activity-age-gate",
                    contextKey: s
                }), Promise.resolve()
            }