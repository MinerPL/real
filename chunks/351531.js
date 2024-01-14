"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var l = s("37983");
s("884691");
var a = s("627445"),
  i = s.n(a),
  n = s("77078"),
  d = s("393414"),
  r = s("145131"),
  o = s("476263"),
  u = s("782340"),
  c = s("690522");

function C(e) {
  let {
    directoryGuildName: t,
    guildToAdd: s,
    isExistingGuildFlow: a,
    onClose: C
  } = e;
  return i(null != s, "Missing guild in Hub add guild confirmation"), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(n.ModalHeader, {
      direction: r.default.Direction.VERTICAL,
      className: c.header,
      separator: !1,
      children: [null != C && (0, l.jsx)(n.ModalCloseButton, {
        className: c.closeButton,
        onClick: C
      }), (0, l.jsx)(o.default, {
        guild: s,
        size: o.default.Sizes.XLARGE,
        active: !0
      }), (0, l.jsx)(n.Heading, {
        className: c.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.HUB_ADD_OR_CREATE_SERVER_CONFIRMATION_TITLE
      }), (0, l.jsx)(n.Text, {
        className: c.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: a ? u.default.Messages.HUB_ADD_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        }) : u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        })
      })]
    }), (0, l.jsx)(n.ModalFooter, {
      className: c.buttonRow,
      children: a ? (0, l.jsx)(n.Button, {
        className: c.addConfirmButton,
        color: n.Button.Colors.BRAND,
        onClick: C,
        children: u.default.Messages.HUB_ADD_SERVER_CONFIRMATION_BUTTON
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.Button, {
          className: c.createSecondaryButton,
          color: n.Button.Colors.PRIMARY,
          onClick: C,
          children: u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_STAY
        }), (0, l.jsx)(n.Button, {
          className: c.createConfirmButton,
          color: n.Button.Colors.BRAND,
          onClick: () => {
            (0, d.transitionToGuild)(s.id), null == C || C()
          },
          children: u.default.Messages.HUB_CREATE_SERVER_CONFIRMATION_GO
        })]
      })
    })]
  })
}