"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("866227"),
  i = n.n(s),
  l = n("489622"),
  r = n("243632"),
  o = n("994428"),
  u = n("782340"),
  d = n("623158");
let c = (e, t) => ({
  bodyText: u.default.Messages.DROPS_BANNER_NOTICE.format({
    gameName: e.title,
    endDate: i(e.endDate, "YYYY-MM-DD HH:mm").format("MMM Do"),
    streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
var E = e => {
  let {
    noticeType: t,
    markAsDismissed: n,
    partnerGame: s
  } = e, i = (0, r.useDropsExperiment)(s);
  if (null == i) return null;
  let {
    bodyText: E,
    articleUrl: f
  } = c(i.drop, i.config.streamLengthRequirement);
  return (0, a.jsxs)(l.default, {
    className: d.colorGuildBlue,
    children: [E, (0, a.jsx)(l.NoticeButtonAnchor, {
      href: f,
      target: "_blank",
      onClick: () => {
        n(o.ContentDismissActionType.PRIMARY)
      },
      children: u.default.Messages.LEARN_MORE
    }), (0, a.jsx)(l.NoticeCloseButton, {
      onClick: () => {
        n(o.ContentDismissActionType.DISMISS)
      },
      noticeType: t
    })]
  })
}