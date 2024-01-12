            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                o = n("679653"),
                s = n("42203"),
                u = n("782340");

            function a(e) {
                let {
                    onConfirm: t,
                    onCancel: n,
                    channelId: a
                } = e, c = (0, r.useStateFromStores)([s.default], () => null != a ? s.default.getChannel(a) : null), d = (0, o.default)(c, !0);
                return (0, i.jsx)(l.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
                    confirmText: u.default.Messages.REMOVE,
                    cancelText: u.default.Messages.CANCEL,
                    onConfirm: t,
                    onCancel: n,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: null != c ? u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
                            channelName: d
                        }) : u.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
                    })
                })
            }