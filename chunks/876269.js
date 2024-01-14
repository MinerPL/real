"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("837899"),
  i = s("271945"),
  r = e => {
    let {
      label: t,
      onClick: s,
      submitting: r
    } = e;
    return (0, a.jsx)(n.Clickable, {
      onClick: r ? void 0 : s,
      className: i.button,
      children: (0, a.jsxs)("div", {
        className: i.contentContainer,
        children: [r ? (0, a.jsx)(n.Spinner, {
          type: n.Spinner.Type.PULSING_ELLIPSIS,
          className: i.spinner
        }) : (0, a.jsx)(n.Text, {
          variant: "text-md/medium",
          className: i.label,
          children: t
        }), (0, a.jsx)(l.default, {
          className: i.arrow
        })]
      })
    })
  }