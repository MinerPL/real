"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("77078"),
  s = n("857171"),
  a = n("339524"),
  u = n("782340"),
  d = n("625499"),
  c = n("831839");
let f = [{
  name: "Custom Upload",
  extensions: ["jpg", "jpeg", "png", "gif", "webp"]
}];

function p(e) {
  let {
    onCustomUpload: t,
    customUploadFilters: n = f
  } = e, {
    dragRef: i,
    hover: p
  } = (0, a.default)({
    onDrop: t
  }), m = {
    color: o.ButtonColors.CUSTOM,
    hover: o.ButtonHovers.DEFAULT
  };
  return (0, l.jsx)("div", {
    ref: i,
    className: d.clickContainer,
    children: (0, l.jsxs)(s.default, {
      onChange: e => {
        var n, l;
        let i = null === (l = e.currentTarget) || void 0 === l ? void 0 : null === (n = l.files) || void 0 === n ? void 0 : n[0];
        t(i), e.currentTarget.value = ""
      },
      multiple: !1,
      filters: n,
      "aria-label": u.default.Messages.EXPRESSION_PICKER_UPLOAD_ARIA,
      className: r(d.clickable, {
        [d.clickableActive]: p
      }),
      ...m,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: r(d.tag, {
          [d.tagActive]: p
        }),
        children: u.default.Messages.EXPRESSION_PICKER_UPLOAD_IMAGE_TAG
      }), (0, l.jsxs)("div", {
        className: d.uploadContainer,
        children: [(0, l.jsx)("div", {
          className: r(c.icon, d.addFileButtonIcon),
          "aria-hidden": !0
        }), (0, l.jsx)(o.Text, {
          className: d.description,
          color: "header-primary",
          variant: "text-sm/medium",
          children: u.default.Messages.EXPRESSION_PICKER_UPLOAD_DESCRIPTION
        })]
      })]
    })
  })
}