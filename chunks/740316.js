"use strict";
n.r(t), n.d(t, {
  BackToPreviousScreenNotice: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("246053"),
  l = n("489622"),
  r = n("49111"),
  o = n("395200");

function u(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: u,
    showCloseButton: d
  } = e;
  return (0, a.jsxs)(l.default, {
    className: o.backNotice,
    children: [d && (0, a.jsx)(l.NoticeCloseButton, {
      onClick: u,
      noticeType: r.NoticeTypes.BACK_TO_PREVIOUS_SCREEN
    }), (0, a.jsxs)(s.Button, {
      className: o.backButton,
      innerClassName: o.backButtonInner,
      look: s.Button.Looks.OUTLINED,
      color: s.Button.Colors.WHITE,
      size: s.Button.Sizes.NONE,
      onClick: n,
      children: [(0, a.jsx)(i.default, {
        width: 16,
        height: 16,
        direction: i.default.Directions.LEFT,
        className: o.backArrow
      }), t]
    })]
  })
}