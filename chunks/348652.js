"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("736964"),
  i = n("27618"),
  r = n("701909"),
  o = n("361528"),
  u = n("49111"),
  d = n("782340");

function c(e) {
  let {
    channel: t,
    children: c
  } = e, f = (0, a.useStateFromStores)([i.default], () => i.default.isBlocked(t.getRecipientId())), h = t.isSystemDM(), C = f && !h && !t.isMultiUserDM(), p = {};
  return h ? (p.message = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, p.subtitle = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, p.buttonText = d.default.Messages.LEARN_MORE, p.onButtonClick = () => open(r.default.getArticleURL(u.HelpdeskArticles.SYSTEM_DMS)), p.imageSrc = n("172522")) : C && (p.message = d.default.Messages.DM_VERIFICATION_TEXT_BLOCKED, p.buttonText = d.default.Messages.UNBLOCK, p.onButtonClick = () => {
    l.default.unblockUser(t.getRecipientId())
  }), (0, s.jsx)(o.default, {
    ...p,
    children: c
  })
}