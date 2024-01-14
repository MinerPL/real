"use strict";
A.r(t), A.d(t, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return c
  }
}), A("222007");
var a, l, n = A("37983"),
  r = A("884691"),
  s = A("77078"),
  o = A("191814"),
  i = A("423487"),
  u = A("782340"),
  d = A("55472");
(l = a || (a = {})).DANGER = "danger", l.WARNING = "warning";

function c(e) {
  let {
    transitionState: t,
    onClose: A,
    title: a,
    body: l,
    cta: c,
    closeLabel: f,
    onConfirm: C,
    iconVariant: g = "warning"
  } = e, [h, T] = r.useState(!1), m = async () => {
    T(!0);
    try {
      await C(), A()
    } finally {
      T(!1)
    }
  }, p = null != a ? a : u.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, n.jsxs)(s.ModalRoot, {
    className: d.container,
    size: s.ModalSize.DYNAMIC,
    transitionState: t,
    "aria-label": p,
    children: [(0, n.jsxs)(s.ModalContent, {
      className: d.content,
      children: [(0, n.jsxs)("div", {
        className: d.header,
        children: [(0, n.jsx)(i.default, {
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return d.dangerIcon;
              case "warning":
                return d.warningIcon
            }
          }(g)
        }), (0, n.jsx)(o.default, {
          size: 8,
          horizontal: !0
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: p
        })]
      }), (0, n.jsx)(o.default, {
        size: 12
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: d.body,
        children: l
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: m,
        submitting: h,
        children: c
      }), (0, n.jsx)(o.default, {
        size: 12,
        horizontal: !0
      }), null != f && (0, n.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.OUTLINED,
        onClick: A,
        children: f
      })]
    })]
  })
}