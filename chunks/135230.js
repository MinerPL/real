"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  a = n("271841"),
  o = n("227645"),
  l = n("818810"),
  u = n("516256"),
  c = n("577776"),
  d = n("145131"),
  f = n("782340"),
  E = n("525625"),
  h = e => {
    let t, n, r, {
      body: h,
      cancelText: p,
      className: _,
      confirmColor: S,
      confirmText: m = f.default.Messages.OKAY,
      secondaryConfirmText: T,
      onCancel: g,
      onClose: I,
      onConfirm: C,
      onConfirmSecondary: v,
      title: A,
      transitionState: R,
      titleClassName: N
    } = e;
    return null != p && "" !== p && (t = (0, i.jsx)(a.Button, {
      type: "button",
      size: a.Button.Sizes.XLARGE,
      color: a.Button.Colors.PRIMARY,
      onClick: () => {
        null == I || I(), null == g || g()
      },
      className: E.secondaryButton,
      children: p
    })), null != m && "" !== m && (n = (0, i.jsx)(a.Button, {
      type: "submit",
      color: S,
      size: a.Button.Sizes.XLARGE,
      className: s(E.primaryButton, null != t ? E.gutter : null),
      autoFocus: !0,
      children: m
    })), null != T && "" !== T && (r = (0, i.jsx)(o.Clickable, {
      onClick: () => {
        null == I || I(), null == v || v()
      },
      className: E.minorContainer,
      children: (0, i.jsx)(c.Text, {
        className: E.secondaryAction,
        variant: "text-xs/normal",
        children: T
      })
    })), (0, i.jsx)(u.ModalRoot, {
      transitionState: R,
      className: s(_, E.container),
      "aria-label": A,
      children: (0, i.jsxs)("form", {
        onSubmit: e => {
          null != e && e.preventDefault(), null == I || I(), null == C || C()
        },
        className: E.form,
        children: [(0, i.jsx)(u.ModalContent, {
          className: E.modalContent,
          children: (0, i.jsxs)(d.default, {
            direction: d.default.Direction.VERTICAL,
            justify: d.default.Justify.CENTER,
            className: E.content,
            children: [null != A && (0, i.jsx)(l.FormTitle, {
              tag: "h2",
              className: s(E.title, N),
              children: A
            }), null != h && (0, i.jsx)(c.Text, {
              variant: "text-md/normal",
              className: E.body,
              children: h
            })]
          })
        }), (0, i.jsxs)(u.ModalFooter, {
          justify: d.default.Justify.BETWEEN,
          wrap: d.default.Wrap.WRAP,
          children: [n, t, r]
        })]
      })
    })
  }