            "use strict";
            n.r(t), n.d(t, {
                confirmNoSharedServerSubscribeWarningModal: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078");

            function l(e) {
                let {
                    application: t,
                    onConfirm: l,
                    onCancel: a
                } = e;
                return (0, r.openModalLazy)(async () => {
                    let {
                        ConfirmNoSharedServerSubscribeWarningModal: e
                    } = await n.el("411638").then(n.bind(n, "411638"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        application: t,
                        onConfirm: l,
                        onCancel: a
                    })
                }, {
                    modalKey: "application-user-subscribe-no-shared-server-warning"
                }), Promise.resolve()
            }