"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("77078"),
  i = a("928328"),
  c = a("597517"),
  o = a("599110"),
  u = a("575057"),
  d = a("646559"),
  r = a("954016"),
  f = a("49111"),
  T = a("533613"),
  I = a("782340");
let _ = [r.ActivityFeedbackReasons.OTHER, r.ActivityFeedbackReasons.NOT_FUN];

function A(e) {
  let {
    channel: t,
    activityApplication: A,
    onClose: E,
    transitionState: R,
    analyticsData: m
  } = e;
  return n.useEffect(() => {
    o.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: A.id,
      application_name: A.name,
      game_id: A.id,
      source: "Activity End"
    })
  }, [A]), (0, l.jsx)(i.default, {
    header: I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
      applicationName: A.name
    }),
    body: I.default.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
    problemTitle: I.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
    problems: (0, u.default)(!0),
    feedbackProblems: _,
    onSubmit: function(e) {
      let {
        rating: n,
        problem: i,
        dontShowAgain: u,
        feedback: r
      } = e;
      if (u && ! function(e) {
          let {
            applicationId: t,
            rating: a
          } = e;
          o.default.track(f.AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, {
            application_id: t,
            rating: a
          }), (0, c.hideHotspot)(T.HotspotLocations.POST_ACTIVITY_FEEDBACK)
        }({
          rating: n,
          applicationId: A.id
        }), null != n)(0, d.default)({
        problem: i,
        channel: t,
        feedback: r,
        activityApplication: A,
        analyticsData: m,
        location: "Activity End",
        rating: n
      }), null != i && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await a.el("874600").then(a.bind(a, "874600"));
        return t => (0, l.jsx)(e, {
          body: I.default.Messages.ACTIVITY_REPORTED_BODY,
          ...t
        })
      })
    },
    onClose: E,
    transitionState: R,
    otherKey: r.ActivityFeedbackReasons.OTHER
  })
}