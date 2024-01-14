"use strict";
A.r(t), A.d(t, {
  default: function() {
    return f
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  o = A("476765"),
  i = A("952479"),
  u = A("867544"),
  d = A("782340"),
  c = A("972623");

function f(e) {
  let {
    disabled: t = !1,
    disabledTooltip: A,
    published: n,
    submitting: f = !1,
    onClick: C
  } = e, g = (0, o.useUID)(), [h, T] = l.useState(n);
  return l.useEffect(() => {
    T(e => e || n)
  }, [n]), (0, a.jsxs)("div", {
    className: r({
      [c.publishable]: !t && !n,
      [c.wasEverPublished]: h
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(s.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: n ? d.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : d.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(s.Text, {
        id: g,
        variant: "text-sm/normal",
        color: "text-normal",
        children: n ? d.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : d.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(s.Tooltip, {
      text: t ? A : void 0,
      children: e => (0, a.jsxs)(s.Button, {
        ...e,
        className: r(c.button, {
          [c.wasEverPublished]: h,
          [c.publishButton]: !n,
          [c.disabledPublishButton]: t
        }),
        innerClassName: c.buttonContents,
        color: n ? s.Button.Colors.RED : s.Button.Colors.CUSTOM,
        "aria-describedby": g,
        "aria-disabled": t,
        grow: !1,
        onClick: t ? void 0 : C,
        submitting: f,
        children: [n ? d.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : d.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, n ? (0, a.jsx)(u.default, {
          className: c.buttonIcon,
          color: "currentColor",
          foregroundColor: "currentColor"
        }) : (0, a.jsx)(i.default, {
          className: c.buttonIcon
        })]
      })
    })]
  })
}