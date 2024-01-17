"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("697218"),
  i = n("489622"),
  r = n("579565"),
  o = n("994428"),
  u = n("782340"),
  d = n("229701"),
  c = e => {
    var t;
    let {
      noticeType: n,
      markAsDismissed: c,
      partnerGame: f
    } = e, E = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser());
    if (null == f) return null;
    let _ = (0, r.getDrop)(f);
    if (null == _) return null;
    let T = "https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id=".concat(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : "");
    return (0, s.jsxs)(i.default, {
      className: d.colorGuildBlue,
      children: [u.default.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({
        gameTitle: _.title
      }), (0, s.jsx)(i.NoticeButtonAnchor, {
        href: T,
        target: "_blank",
        onClick: () => {
          c(o.ContentDismissActionType.PRIMARY)
        },
        children: u.default.Messages.DROPS_FEEDBACK_SURVEY
      }), (0, s.jsx)(i.NoticeCloseButton, {
        onClick: () => {
          c(o.ContentDismissActionType.DISMISS)
        },
        noticeType: n
      })]
    })
  }