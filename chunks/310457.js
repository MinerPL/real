            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                o = n("679653"),
                s = n("42203"),
                a = n("782340");

            function u(e) {
                let {
                    onConfirm: t,
                    onCancel: n,
                    channelId: u
                } = e, d = (0, r.useStateFromStores)([s.default], () => null != u ? s.default.getChannel(u) : null), c = (0, o.default)(d, !0);
                return (0, i.jsx)(l.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
                    confirmText: a.default.Messages.REMOVE,
                    cancelText: a.default.Messages.CANCEL,
                    onConfirm: t,
                    onCancel: n,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: null != d ? a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
                            channelName: c
                        }) : a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
                    })
                })
            }