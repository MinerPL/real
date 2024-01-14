"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("77078"),
  u = a("398654"),
  i = a("712125"),
  d = a("311161"),
  r = a("45029"),
  o = a("372624"),
  c = a("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      shouldShowIncidentActions: f,
      isUnderLockdown: E,
      incidentData: C
    } = (0, u.useGuildIncidentsState)(e.id),
    h = n.useCallback(() => {
      let t = {
        source: i.GuildIncidentActionSources.CONTEXT_MENU,
        alertType: (0, d.getIncidentAlertType)(C)
      };
      (0, s.openModalLazy)(async () => {
        let {
          default: n
        } = await a.el("186638").then(a.bind(a, "186638"));
        return a => (0, l.jsx)(n, {
          ...a,
          guildId: e.id,
          analyticsData: t
        })
      })
    }, [e.id, C]);
  return e.isCommunity() && f ? (0, l.jsx)(s.MenuItem, {
    id: "server-lockdown",
    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
    icon: t ? E ? o.default : r.default : void 0,
    action: h,
    color: "danger"
  }) : null
}