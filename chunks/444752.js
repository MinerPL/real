"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("476263"),
  l = n("782340"),
  r = n("120825"),
  o = n("270111"),
  u = e => {
    let {
      headerId: t,
      reapplyText: n,
      onReapply: u,
      confirmText: d,
      onConfirm: c,
      rejectionReason: f = null,
      guild: E = null
    } = e;
    return (0, a.jsxs)("div", {
      className: r.confirmation,
      children: [(0, a.jsxs)("div", {
        className: r.confirmationContent,
        children: [null !== E ? (0, a.jsx)(i.default, {
          size: i.default.Sizes.LARGER,
          guild: E,
          className: r.guildIcon
        }) : (0, a.jsx)("img", {
          alt: l.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
          src: o,
          className: r.verificationStateIcon
        }), (0, a.jsx)(s.Heading, {
          id: t,
          variant: "heading-xl/semibold",
          className: r.header,
          children: (null == E ? void 0 : E.name) != null ? l.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
            guildName: E.name
          }) : l.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
        }), null != f && "" !== f ? (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(s.Text, {
            variant: "text-sm/normal",
            children: [(0, a.jsx)("span", {
              className: r.rejectionReasonLabel,
              children: l.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
            }), (0, a.jsx)("span", {
              className: r.rejectionReason,
              children: f
            })]
          })
        }) : null]
      }), (0, a.jsxs)("div", {
        className: r.confirmationButtonRow,
        children: [(0, a.jsx)(s.Button, {
          onClick: u,
          color: s.Button.Colors.PRIMARY,
          className: r.confirmationButton,
          children: n
        }), (0, a.jsx)(s.Button, {
          onClick: c,
          color: s.Button.Colors.PRIMARY,
          className: r.confirmationButton,
          children: d
        })]
      })]
    })
  }