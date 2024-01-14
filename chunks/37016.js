"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  i = n("77078"),
  l = n("393414"),
  r = n("476765"),
  o = n("701909"),
  u = n("669499"),
  d = n("49111"),
  c = n("782340"),
  E = n("762874");

function f() {
  (0, u.closeAgeGateModal)(), (0, l.transitionTo)(d.Routes.LOGIN)
}

function _(e) {
  let {
    underageMessage: t,
    transitionState: l
  } = e, u = (0, r.useUID)();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: l,
    size: i.ModalSize.SMALL,
    "aria-labelledby": u,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, a.jsx)(i.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: E.container,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: n("803452"),
          className: E.img
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          className: E.title,
          id: u,
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_HEADER
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          className: E.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
            underageMessage: null != t ? t : c.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
            helpURL: o.default.getArticleURL(d.HelpdeskArticles.AGE_GATE)
          })
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          className: E.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_BODY_DELETION_WITH_DAYS.format({
            days: 30
          })
        })]
      })
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        size: i.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: f,
        children: c.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
      })
    })]
  })
}