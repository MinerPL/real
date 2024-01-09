            "use strict";
            n.r(t), n.d(t, {
                openAcceptMessageRequestConfirmModal: function() {
                    return o
                },
                onMarkAsNotSpamConfirmationModal: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("599110"),
                i = n("973199"),
                r = n("49111");

            function o(e) {
                let {
                    channelId: t,
                    onConfirm: o,
                    onCancel: u
                } = e;
                l.default.track(r.AnalyticEvents.OPEN_MODAL, {
                    type: i.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL,
                    channel_id: t
                }), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("950535").then(n.bind(n, "950535"));
                    return t => (0, a.jsx)(e, {
                        onConfirm: o,
                        onDismiss: u,
                        ...t
                    })
                })
            }

            function u(e) {
                let {
                    onConfirm: t,
                    onCancel: l
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("909971").then(n.bind(n, "909971"));
                    return n => (0, a.jsx)(e, {
                        onConfirm: t,
                        onDismiss: l,
                        ...n
                    })
                })
            }