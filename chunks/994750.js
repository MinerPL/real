"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("866227"),
  a = n.n(l),
  i = n("489622"),
  r = n("243632"),
  o = n("994428"),
  u = n("782340"),
  d = n("623158");
let c = (e, t) => ({
  bodyText: u.default.Messages.DROPS_BANNER_NOTICE.format({
    gameName: e.title,
    endDate: a(e.endDate, "YYYY-MM-DD HH:mm").format("MMM Do"),
    streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
var f = e => {
  let {
    noticeType: t,
    markAsDismissed: n,
    partnerGame: l
  } = e, a = (0, r.useDropsExperiment)(l);
  if (null == a) return null;
  let {
    bodyText: f,
    articleUrl: E
  } = c(a.drop, a.config.streamLengthRequirement);
  return (0, s.jsxs)(i.default, {
    className: d.colorGuildBlue,
    children: [f, (0, s.jsx)(i.NoticeButtonAnchor, {
      href: E,
      target: "_blank",
      onClick: () => {
        n(o.ContentDismissActionType.PRIMARY)
      },
      children: u.default.Messages.LEARN_MORE
    }), (0, s.jsx)(i.NoticeCloseButton, {
      onClick: () => {
        n(o.ContentDismissActionType.DISMISS)
      },
      noticeType: t
    })]
  })
}