            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i("404118"),
                l = i("782340");

            function a(e, t, i, a) {
                var u, r;
                n.default.show({
                    title: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
                    cancelText: l.default.Messages.CANCEL,
                    confirmText: l.default.Messages.CONFIRM,
                    onConfirm: i,
                    onCancel: a,
                    body: l.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                        currentApplicationName: null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                        currentApplicationChannelName: null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : l.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
                    })
                })
            }