"use strict";
n.r(t), n.d(t, {
  openStopBroadcastConfirmModal: function() {
    return i
  },
  openStartBroadcastConfirmModal: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("713726"),
  l = n("782340");

function i(e) {
  (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
    header: l.default.Messages.STOP_STREAMING,
    confirmText: l.default.Messages.STOP_STREAMING,
    cancelText: l.default.Messages.CANCEL,
    onConfirm: () => {
      (0, s.stopBroadcast)(), e()
    },
    ...t,
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: l.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
    })
  }))
}

function u(e) {
  (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
    header: l.default.Messages.START_STREAMING,
    confirmText: l.default.Messages.START_STREAMING,
    cancelText: l.default.Messages.CANCEL,
    onConfirm: e,
    confirmButtonColor: r.Button.Colors.BRAND,
    ...t,
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: l.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
    })
  }))
}