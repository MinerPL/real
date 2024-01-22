"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("437822"),
  u = n("327037"),
  o = n("457108"),
  d = n("965153"),
  c = n("98352"),
  f = n("970366"),
  E = n("271938"),
  I = n("760190"),
  _ = n("124969"),
  p = n("782340"),
  h = n("926622");
l.default.initialize();
var m = e => {
  let {
    location: t
  } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), m = (0, l.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), T = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [N, g] = a.useState(!1), [A, S] = a.useState(p.default.Messages.AUTHORIZING), [C, v] = a.useState(!0);
  return a.useEffect(() => {
    n ? (v(!0), u.fetchCurrentUser({
      withAnalyticsToken: !0
    }).then(() => v(!1)).catch(() => v(!1))) : v(!1)
  }, [n]), a.useEffect(() => {
    !m && !T && r.default.getExperiments()
  }, [m, T]), a.useEffect(() => {
    let e = async e => {
      try {
        let t = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
        null != t ? S(p.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : S(p.default.Messages.REPORT_SECOND_LOOK_FAILURE_TITLE)
      } catch (e) {
        S(p.default.Messages.REPORT_SECOND_LOOK_FAILURE_TITLE)
      } finally {
        g(!1)
      }
    };
    g(!0);
    let n = (0, o.default)(t);
    e(n), (0, f.trackAppUIViewed)("report_second_look")
  }, [t]), T && !C && (0, s.jsxs)(_.default, {
    children: [(0, s.jsx)(_.Title, {
      className: h.marginBottom8,
      children: A
    }), N && (0, s.jsx)(i.Spinner, {})]
  })
}