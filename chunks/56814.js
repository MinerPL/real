"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var l = s("37983"),
  a = s("884691"),
  n = s("775560"),
  u = s("151426"),
  r = s("77078"),
  o = s("10641"),
  i = s("866380"),
  d = s("599110"),
  c = s("705417"),
  E = s("42960"),
  f = s("49111"),
  D = s("782340");
let _ = [E.GuildDeleteReasons.OTHER];

function m(e) {
  let {
    transitionState: t,
    onClose: m,
    guildId: T
  } = e, L = (0, n.useLazyValue)(E.getGuildDeleteReasons);
  return a.useEffect(() => {
    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Guild Delete Report"
    })
  }, []), (0, l.jsx)(i.default, {
    header: D.default.Messages.GUILD_DELETE_FEEDBACK_HEADER,
    body: D.default.Messages.GUILD_DELETE_FEEDBACK_BODY,
    problems: L,
    feedbackProblems: _,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: n
      } = e;
      a && (0, o.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_DELETE_FEEDBACK);
      let i = null == t;
      (0, c.default)(T, t, n, i), !i && (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("874600").then(s.bind(s, "874600"));
        return t => (0, l.jsx)(e, {
          body: D.default.Messages.GUILD_DELETE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: m,
    transitionState: t,
    otherKey: E.GuildDeleteReasons.OTHER
  })
}