            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("452804"),
                r = a("135230"),
                d = a("535348"),
                l = a("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: a,
                    ...s
                } = e, i = t === d.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === d.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, n.jsx)(r.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: i,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: a,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), a()
                    },
                    body: o,
                    ...s
                })
            }