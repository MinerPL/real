            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                r = n("452804"),
                i = n("135230"),
                l = n("168973"),
                u = n("782340");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        r.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    o = !l.default.disableEmbeddedActivityPopOutAlert;
                o ? (0, s.openModal)(s => (0, a.jsx)(i.default, {
                    confirmText: u.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
                    title: u.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: u.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: u.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...s
                })) : e()
            }