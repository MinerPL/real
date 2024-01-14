"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  a = n.n(l),
  o = n("77078"),
  u = n("371642"),
  s = n("775980");

function c(e) {
  let {
    filename: t,
    className: n,
    filters: l,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = e, E = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: a(n, s.fileUpload),
    children: [(0, r.jsx)("input", {
      className: s.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: t
    }), (0, r.jsxs)(o.Button, {
      size: o.Button.Sizes.MIN,
      className: s.fileUploadButton,
      children: [c, (0, r.jsx)(u.default, {
        ref: E,
        tabIndex: -1,
        onChange: e => {
          var t;
          let n = null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0];
          f(n)
        },
        multiple: !1,
        filters: l
      })]
    })]
  })
}