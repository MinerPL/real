            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("913144"),
                i = n("135230"),
                r = n("316272"),
                o = n("782340");
            let u = "ActivityInviteManager",
                d = () => {
                    s.default.dispatch({
                        type: "ACTIVITY_INVITE_MODAL_CLOSE"
                    })
                };
            class c extends r.default {
                _initialize() {
                    s.default.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
                }
                _terminate() {
                    s.default.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
                }
                handleModalOpen(e) {
                    let {
                        activity: t,
                        isPrivate: s
                    } = e;
                    s ? (0, a.openModal)(e => (0, l.jsx)(i.default, {
                        title: o.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                            name: t.name
                        }),
                        body: o.default.Messages.ACTIVITY_INVITE_PRIVATE,
                        confirmText: o.default.Messages.OKAY,
                        ...e
                    }), {
                        onCloseCallback: d,
                        modalKey: u
                    }) : (0, a.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("582139").then(n.bind(n, "582139"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    }, {
                        onCloseCallback: d,
                        modalKey: u
                    })
                }
                handleModalClose(e) {
                    (0, a.closeModal)(u)
                }
            }
            var f = new c