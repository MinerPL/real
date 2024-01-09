            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("77078"),
                u = n("244201"),
                a = n("558286"),
                d = n("49111");
            let i = "guild-event-modal";
            var s = () => {
                let e = (0, u.useAppContext)(),
                    t = e === d.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(i, t)
                    }
                }
            }