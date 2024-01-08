            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("452804"),
                i = n("135230"),
                r = n("168973"),
                u = n("782340");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = t => {
                        s.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), t(), e()
                    },
                    o = !r.default.disableEmbeddedActivityPopOutAlert;
                o ? (0, l.openModal)(l => (0, a.jsx)(i.default, {
                    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: () => {
                        l.onClose(), e()
                    },
                    onCancel: t,
                    onConfirmSecondary: () => n(l.onClose),
                    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
                    ...l
                }), {}, l.POPOUT_MODAL_CONTEXT) : e()
            }