"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("697218"),
  l = n("489622"),
  r = n("579565"),
  o = n("994428"),
  u = n("782340"),
  d = n("229701"),
  c = e => {
    var t;
    let {
      noticeType: n,
      markAsDismissed: c,
      partnerGame: E
    } = e, f = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser());
    if (null == E) return null;
    let _ = (0, r.getDrop)(E);
    if (null == _) return null;
    let h = "https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id=".concat(null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : "");
    return (0, a.jsxs)(l.default, {
      className: d.colorGuildBlue,
      children: [u.default.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({
        gameTitle: _.title
      }), (0, a.jsx)(l.NoticeButtonAnchor, {
        href: h,
        target: "_blank",
        onClick: () => {
          c(o.ContentDismissActionType.PRIMARY)
        },
        children: u.default.Messages.DROPS_FEEDBACK_SURVEY
      }), (0, a.jsx)(l.NoticeCloseButton, {
        onClick: () => {
          c(o.ContentDismissActionType.DISMISS)
        },
        noticeType: n
      })]
    })
  }