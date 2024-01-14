"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("987317"),
  i = n("476765"),
  u = n("674083"),
  r = n("244480"),
  d = n("119184"),
  o = n("782340"),
  c = n("421086"),
  f = e => {
    let {
      channel: t,
      ...n
    } = e, f = (0, i.useUID)();
    return (0, a.jsxs)(l.ConfirmModal, {
      confirmText: o.default.Messages.END_STAGE,
      cancelText: o.default.Messages.CANCEL,
      onConfirm: () => {
        (0, r.endStage)(t), s.default.disconnect()
      },
      confirmButtonColor: l.Button.Colors.RED,
      bodyClassName: c.body,
      ...n,
      children: [(0, a.jsx)(d.default, {
        className: c.headerIconContainer,
        children: (0, a.jsx)("div", {
          className: c.iconBackground,
          children: (0, a.jsx)(u.default, {
            width: 40,
            height: 40,
            className: c.headerIcon
          })
        })
      }), (0, a.jsx)(l.Heading, {
        id: f,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: c.title,
        children: o.default.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: c.subtitle,
        children: o.default.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
      })]
    })
  }