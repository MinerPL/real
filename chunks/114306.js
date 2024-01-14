"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("37983"),
  l = a("884691"),
  s = a("77078"),
  r = a("229353"),
  o = a.n(r),
  u = a("928328"),
  i = a("597517"),
  c = a("599110"),
  d = a("129393"),
  f = a("692812"),
  E = a("49111"),
  _ = a("533613"),
  m = a("782340");
let h = [o.CALL_FEEDBACK_OPTION_OTHER];

function g(e) {
  let {
    reportId: t,
    reportType: r,
    ...g
  } = e;
  return l.useEffect(() => {
    c.default.track(E.AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: t,
      report_type: r
    })
  }, [t, r]), (0, n.jsx)(u.default, {
    header: m.default.Messages.IAR_FEEDBACK_TITLE,
    body: m.default.Messages.IAR_FEEDBACK_PROMPT,
    problemTitle: m.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
    problems: (0, d.default)(),
    feedbackProblems: h,
    onSubmit: function(e) {
      let {
        rating: l,
        problem: o,
        dontShowAgain: u,
        feedback: c
      } = e;
      u && (0, i.hideHotspot)(_.HotspotLocations.IN_APP_REPORTS_FEEDBACK), (0, f.default)({
        rating: l,
        problem: o,
        feedback: c,
        reportId: t,
        reportType: r,
        dontShowAgain: u
      }), null != l && null != o && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await a.el("874600").then(a.bind(a, "874600"));
        return t => (0, n.jsx)(e, {
          body: m.default.Messages.CALL_FEEDBACK_CONFIRMATION,
          ...t
        })
      })
    },
    otherKey: o.CALL_FEEDBACK_OPTION_OTHER,
    ...g
  })
}