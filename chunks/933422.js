"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("393414"),
  l = n("5667"),
  r = n("599110"),
  o = n("701909"),
  u = n("568456"),
  d = n("49111"),
  c = n("994428"),
  f = n("782340"),
  E = n("393254"),
  _ = e => {
    let {
      markAsDismissed: t
    } = e;
    return s.useEffect(() => {
      r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
        action: u.DMSafetyCoachmarkActions.VIEW
      })
    }, []), (0, a.jsx)(l.default, {
      header: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_HEADER_V2,
      content: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_CONTENT_V2.format({
        helpdeskArticle: o.default.getArticleURL(d.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
      }),
      buttonCTA: f.default.Messages.GOT_IT,
      secondaryButtonCTA: f.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_REDIRECT,
      className: E.coachmark,
      onClick: e => {
        e.stopPropagation(), t(c.ContentDismissActionType.UNKNOWN), r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
          action: u.DMSafetyCoachmarkActions.DISMISS
        })
      },
      onSecondaryClick: () => {
        (0, i.transitionTo)(d.Routes.SETTINGS("privacy-and-safety")), r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
          action: u.DMSafetyCoachmarkActions.CHANGE_SETTING
        })
      },
      markAsDismissed: t,
      caretPosition: l.CaretPosition.BOTTOM_CENTER,
      headerClassName: E.header
    })
  }