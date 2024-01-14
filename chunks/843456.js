"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("476765"),
  u = s("124969"),
  d = s("800932"),
  o = s("434824"),
  c = s("782340"),
  E = s("106468");

function T(e) {
  let {
    transitionState: t,
    onClose: s,
    guildTemplate: n
  } = e, {
    form: T,
    preview: _,
    handleSubmit: f
  } = (0, d.default)(n, !1), L = (0, r.useUID)();
  return (0, a.jsx)("div", {
    children: (0, a.jsxs)(i.ModalRoot, {
      size: i.ModalSize.DYNAMIC,
      transitionState: t,
      className: l(E.modalRoot),
      "aria-labelledby": L,
      children: [(0, a.jsxs)("div", {
        className: E.modalContainer,
        children: [(0, a.jsx)("div", {
          className: l(E.modalSection, E.ctaSection),
          children: (0, a.jsx)("div", {
            className: E.ctaContainer,
            children: (0, a.jsx)(o.default, {
              guildTemplate: n,
              headerId: L
            })
          })
        }), (0, a.jsx)("div", {
          className: l(E.modalSection, E.formSection),
          children: (0, a.jsxs)(i.Scroller, {
            className: E.formContainer,
            children: [(0, a.jsx)(u.Title, {
              className: E.header,
              children: c.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), T, _]
          })
        })]
      }), (0, a.jsxs)(i.ModalFooter, {
        className: E.modalFooter,
        children: [(0, a.jsx)(i.Button, {
          color: i.Button.Colors.PRIMARY,
          onClick: s,
          children: c.default.Messages.CLOSE
        }), (0, a.jsx)(i.Button, {
          color: i.Button.Colors.GREEN,
          onClick: async () => {
            let e = await f();
            null != e && s()
          },
          children: c.default.Messages.CREATE
        })]
      })]
    })
  })
}