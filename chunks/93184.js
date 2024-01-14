"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  o = n("266491"),
  s = n("77078"),
  a = n("45299"),
  u = n("965397"),
  c = n("476765"),
  d = n("526253"),
  f = n("347977"),
  E = n("267235"),
  _ = n("394294"),
  h = n("782340"),
  p = n("120825");
let I = () => (0, i.jsx)(a.default, {
  submitting: !1,
  message: h.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: h.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, s.closeModal)(_.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: h.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: s.ButtonColors.RED
});
var C = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: a,
    onComplete: _,
    isPreview: h = !1
  } = e, C = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), T = (0, l.useStateFromStores)([d.default], () => d.default.get(t)), S = (0, c.useUID)();
  return (r.useEffect(() => {
    T === d.NO_MEMBER_VERIFICATION_FORM && a()
  }, [a, T]), T === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.ModalRoot, {
      size: s.ModalSize.MEDIUM,
      className: p.container,
      transitionState: n,
      "aria-labelledby": S,
      children: [(0, i.jsx)(s.ModalCloseButton, {
        onClick: () => a(!1),
        className: p.closeButton
      }), (0, i.jsx)(E.default, {
        headerId: S,
        guildId: t,
        onClose: a,
        onComplete: _,
        isPreview: h
      })]
    }), (0, i.jsx)(o.default, {
      children: !0 === C && (0, i.jsx)(u.default, {
        className: p.notice,
        children: (0, i.jsx)(I, {})
      })
    })]
  })
}