            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("452804"),
                u = n("135230"),
                o = n("535348"),
                a = n("782340");

            function r(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...r
                } = e, d = t === o.SelfStreamAndVideoAlertType.STREAM ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, s = t === o.SelfStreamAndVideoAlertType.STREAM ? a.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : a.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(u.default, {
                    confirmText: a.default.Messages.CONFIRM,
                    secondaryConfirmText: a.default.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: a.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        l.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: s,
                    ...r
                })
            }