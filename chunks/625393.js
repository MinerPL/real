"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("927858"),
  i = s("77078");

function r() {
  let [e, t] = n.useState("");
  return (0, a.jsxs)(i.FormSection, {
    title: "Text components",
    tag: i.FormTitleTags.H1,
    children: [(0, a.jsx)(i.TextInput, {
      placeholder: "Enter custom text...",
      onChange: e => t(e)
    }), (0, a.jsx)(i.FormDivider, {
      style: {
        margin: "10px 0"
      }
    }), l.TEXT_VARIANT.map(t => "code" === t ? null : (0, a.jsx)(i.Text, {
      variant: t,
      children: "" !== e ? "".concat(e, " (").concat(t, ")") : t
    }, t))]
  })
}