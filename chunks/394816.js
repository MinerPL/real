"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  openInteractionModal: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("555158"),
  r = n("258078"),
  o = n("307311"),
  i = n("470055"),
  s = n("732523"),
  c = n("383247"),
  d = n("782340"),
  f = n("907926");

function I(e) {
  let {
    customId: t,
    title: n,
    onClose: I,
    transitionState: E
  } = e, {
    components: p,
    applicationIconURL: C,
    applicationName: _,
    submissionState: h,
    error: M,
    validators: R,
    onSubmit: m
  } = (0, s.useModalState)(e, I);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), m()
    },
    children: (0, l.jsxs)(u.ModalRoot, {
      transitionState: E,
      children: [(0, l.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(u.Avatar, {
          src: C,
          size: u.AvatarSizes.SIZE_24,
          "aria-label": _,
          className: f.applicationIcon
        }), (0, l.jsx)(r.default, {
          color: r.default.Colors.HEADER_PRIMARY,
          size: r.default.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(u.ModalCloseButton, {
          onClick: I,
          className: f.closeButton
        })]
      }), (0, l.jsxs)(u.ModalContent, {
        children: [null != M && "" !== M ? (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: M
        }) : null, (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: _
          })
        }), (0, l.jsx)(u.FormSection, {
          children: (0, l.jsx)(o.ComponentStateContextProvider, {
            modal: {
              customId: t
            },
            validators: R,
            children: (0, c.renderComponents)(p)
          })
        })]
      }), (0, l.jsxs)(u.ModalFooter, {
        children: [(0, l.jsx)(u.Button, {
          type: "submit",
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.MEDIUM,
          submitting: h === i.InteractionModalState.IN_FLIGHT,
          children: d.default.Messages.SUBMIT
        }), (0, l.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          onClick: I,
          children: d.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function E(e) {
  (0, u.openModal)(t => (0, l.jsx)(I, {
    ...t,
    ...e
  }))
}