"use strict";
n.r(t), n.d(t, {
  createToast: function() {
    return E
  },
  Toast: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("748820"),
  a = n("577776"),
  o = n("77078"),
  l = n("522049"),
  u = n("984678"),
  c = n("830031"),
  d = n("159350"),
  f = n("677841");

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.TOAST_DEFAULT_OPTIONS,
    {
      position: i = d.TOAST_DEFAULT_OPTIONS.position,
      component: r = d.TOAST_DEFAULT_OPTIONS.component,
      duration: a = d.TOAST_DEFAULT_OPTIONS.duration
    } = n;
  return {
    message: e,
    id: (0, s.v4)(),
    type: t,
    options: {
      position: i,
      component: r,
      duration: a
    }
  }
}
let h = r.memo(function(e) {
  let {
    message: t,
    type: n,
    id: r,
    options: {
      component: s = d.TOAST_DEFAULT_OPTIONS.component
    } = d.TOAST_DEFAULT_OPTIONS
  } = e;
  return null != s ? (0, i.jsx)(i.Fragment, {
    children: s
  }) : (0, i.jsxs)("div", {
    id: r,
    className: f.toast,
    children: [function(e) {
      switch (e) {
        case d.ToastType.SUCCESS:
          return (0, i.jsx)(c.default, {
            className: f.icon,
            color: o.tokens.colors.STATUS_POSITIVE.css
          });
        case d.ToastType.FAILURE:
          return (0, i.jsx)(u.default, {
            className: f.icon,
            color: o.tokens.colors.STATUS_DANGER.css
          });
        case d.ToastType.CLIP:
          return (0, i.jsx)(l.default, {
            className: f.clipIcon,
            color: o.tokens.colors.HEADER_PRIMARY.css
          });
        default:
          return null
      }
    }(n), (0, i.jsx)(a.Text, {
      className: f.content,
      color: "header-primary",
      variant: "text-md/normal",
      children: t
    })]
  })
})