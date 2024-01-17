"use strict";
n.r(t), n.d(t, {
  SendGiftToUser: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  a = n("87657"),
  l = n("158998"),
  i = n("782340"),
  u = n("438269");
let c = e => {
  let {
    giftRecipient: t
  } = e;
  return null == t ? null : (0, s.jsxs)("div", {
    className: u.content,
    children: [(0, s.jsx)(r.FormTitle, {
      children: i.default.Messages.FORM_LABEL_SEND_TO
    }), (0, s.jsxs)("div", {
      className: u.giftRecipientInfo,
      children: [(0, s.jsx)(a.default, {
        user: t,
        className: u.giftRecipient,
        size: r.AvatarSizes.SIZE_20
      }), (0, s.jsx)(r.Heading, {
        className: u.giftRecipientName,
        variant: "text-md/normal",
        children: l.default.getName(t)
      }), (0, s.jsx)(r.Heading, {
        className: u.giftRecipientTag,
        variant: "text-md/normal",
        children: l.default.getUserTag(t)
      })]
    })]
  })
}