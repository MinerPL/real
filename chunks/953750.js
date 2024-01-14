"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var n = s("37983"),
  a = s("884691"),
  l = s("775560"),
  r = s("151426"),
  u = s("77078"),
  o = s("10641"),
  i = s("866380"),
  d = s("599110"),
  c = s("489505"),
  E = s("732018"),
  f = s("49111"),
  I = s("782340");

function C(e) {
  let {
    transitionState: t,
    onClose: C,
    guildId: T,
    guildName: D
  } = e, A = (0, l.useLazyValue)(E.getGuildLeaveReasons);
  return a.useEffect(() => {
    d.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Guild Leave Report"
    })
  }, []), (0, n.jsx)(i.default, {
    header: I.default.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
    body: I.default.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({
      server: D
    }),
    problems: A,
    onSubmit: function(e) {
      let {
        problem: t,
        dontShowAgain: a,
        feedback: l
      } = e;
      a && (0, o.markDismissibleContentAsDismissed)(r.DismissibleContent.GUILD_LEAVE_FEEDBACK);
      let i = null == t;
      (0, c.default)(T, t, l, i), !i && (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("874600").then(s.bind(s, "874600"));
        return t => (0, n.jsx)(e, {
          body: I.default.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
          ...t
        })
      })
    },
    onClose: C,
    transitionState: t,
    otherKey: E.GuildLeaveReasons.OTHER,
    hasCloseButton: !0
  })
}