"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("913796"),
  r = n("211248"),
  o = n("11539"),
  u = n("599110"),
  d = n("440612"),
  c = n("49111"),
  f = n("782340");

function h(e) {
  let {
    type: t,
    onClick: n
  } = e, [s, h] = l.useState(!1), m = (0, i.useInDesktopNotificationCenterExperiment)(), p = () => {
    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: !0,
      num_unread_channels_remaining: 0
    })
  }, S = e => {
    e.shiftKey ? p() : h(!0)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(E, {
      confirm: p,
      cancel: () => h(!1)
    }) : null, "bottom-floating" === t ? (0, a.jsx)(d.FloatingActionButton, {
      text: f.default.Messages.MARK_ALL_AS_READ,
      icon: o.default,
      onClick: S
    }) : (0, a.jsx)(r.default, {
      tooltip: m ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
      color: r.CircleIconButtonColors.SECONDARY,
      icon: (0, a.jsx)(o.default, {}),
      onClick: S
    })]
  })
}

function E(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, a.jsx)(s.DeclarativeConfirmModal, {
    dismissable: !0,
    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
    confirmText: f.default.Messages.MARK_AS_READ,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: s.Button.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, a.jsx)(s.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
    })
  })
}