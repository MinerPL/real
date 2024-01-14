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
  E = n("782340"),
  f = n("393254"),
  _ = e => {
    let {
      markAsDismissed: t
    } = e;
    return s.useEffect(() => {
      r.default.track(d.AnalyticEvents.DM_SAFETY_COACHMARK_ACTION, {
        action: u.DMSafetyCoachmarkActions.VIEW
      })
    }, []), (0, a.jsx)(l.default, {
      header: E.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_HEADER_V2,
      content: E.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_CONTENT_V2.format({
        helpdeskArticle: o.default.getArticleURL(d.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
      }),
      buttonCTA: E.default.Messages.GOT_IT,
      secondaryButtonCTA: E.default.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_REDIRECT,
      className: f.coachmark,
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
      headerClassName: f.header
    })
  }