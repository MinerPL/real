"use strict";
s.r(t), s.d(t, {
  openActionCompleteSuccessModal: function() {
    return d
  }
});
var l = s("37983");
s("884691");
var n = s("77078"),
  r = s("191814"),
  o = s("430677"),
  a = s("476765"),
  i = s("782340"),
  u = s("937769");

function c(e) {
  let {
    transitionState: t,
    Icon: s,
    title: c,
    body: d,
    onClose: f
  } = e, E = (0, a.useUID)();
  return (0, l.jsxs)(n.ModalRoot, {
    className: u.container,
    transitionState: t,
    "aria-labelledby": E,
    children: [(0, l.jsxs)(n.ModalContent, {
      children: [(0, l.jsx)(o.default, {
        Icon: s
      }), (0, l.jsx)(r.default, {
        size: 24
      }), (0, l.jsx)(n.Heading, {
        id: E,
        className: u.title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, l.jsx)(r.default, {
        size: 8
      }), (0, l.jsx)(n.Text, {
        className: u.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, l.jsx)(r.default, {
      size: 24
    }), (0, l.jsx)(n.Button, {
      size: n.Button.Sizes.MEDIUM,
      grow: !1,
      onClick: f,
      children: i.default.Messages.GOT_IT
    })]
  })
}

function d(e) {
  (0, n.openModal)(t => (0, l.jsx)(c, {
    ...t,
    ...e
  }))
}