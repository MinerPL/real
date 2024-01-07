            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("452804"),
                i = n("135230"),
                r = n("168973"),
                o = n("782340");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = t => {
                        s.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), t(), e()
                    },
                    u = !r.default.disableEmbeddedActivityPopOutAlert;
                u ? (0, l.openModal)(l => (0, a.jsx)(i.default, {
                    confirmText: o.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
                    title: o.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: o.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: () => {
                        l.onClose(), e()
                    },
                    onCancel: t,
                    onConfirmSecondary: () => n(l.onClose),
                    body: o.default.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
                    ...l
                }), {}, l.POPOUT_MODAL_CONTEXT) : e()
            }