"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("476765"),
  i = n("849467"),
  r = n("155207"),
  u = n("228427"),
  c = n("244480"),
  d = n("151642"),
  o = n("29846"),
  f = n("119184"),
  _ = n("782340"),
  h = n("262999");

function E(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: E,
    ...p
  } = e, T = (0, l.useUID)(), g = (0, d.useStageBlockedUsersCount)(t.id), I = async () => {
    await (0, c.moveSelfToAudience)(t), E()
  }, S = async () => {
    await (0, c.audienceAckRequestToSpeak)(t, !1), E()
  };
  return (0, a.jsx)(s.ModalRoot, {
    transitionState: n,
    "aria-labelledby": T,
    ...p,
    size: s.ModalSize.SMALL,
    children: (0, a.jsxs)(s.ModalContent, {
      className: h.content,
      children: [(0, a.jsx)(f.default, {
        children: (0, a.jsx)("div", {
          className: h.stageIconBackground,
          children: (0, a.jsx)(u.default, {
            width: 40,
            height: 40,
            className: h.stageIcon
          })
        })
      }), (0, a.jsx)(s.Heading, {
        id: T,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: h.headerTitle,
        children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: h.headerSubtitle,
        children: _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
      }), g > 0 && (0, a.jsx)(o.BlockedUsersNotice, {
        channelId: t.id
      }), (0, a.jsxs)("div", {
        className: h.buttonsContainer,
        children: [(0, a.jsxs)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          className: h.button,
          innerClassName: h.innerButton,
          onClick: S,
          children: [(0, a.jsx)("div", {
            className: h.icon,
            children: (0, a.jsx)(i.default, {
              width: 20,
              height: 20
            })
          }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
        }), (0, a.jsxs)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          className: h.button,
          innerClassName: h.innerButton,
          onClick: I,
          children: [(0, a.jsx)("div", {
            className: h.icon,
            children: (0, a.jsx)(r.default, {
              width: 20,
              height: 20
            })
          }), _.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
        })]
      })]
    })
  })
}