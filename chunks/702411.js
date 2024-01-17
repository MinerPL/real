"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var r = n("884691"),
  i = n("65597"),
  s = n("872717"),
  l = n("913144"),
  a = n("716241"),
  o = n("305961"),
  u = n("957255"),
  c = n("599110"),
  d = n("718517"),
  f = n("15639"),
  p = n("49111");
let _ = 1 * d.default.Millis.DAY,
  m = new Map;
var E = {
  useShouldShowChannelNotice(e) {
    let t = (0, i.default)([o.default, u.default], () => {
      let t = o.default.getGuild(e);
      return null != t && u.default.can(p.Permissions.ADMINISTRATOR, t)
    });
    r.useEffect(() => {
      t && ! function(e) {
        var t;
        let n = Date.now(),
          r = null !== (t = m.get(e)) && void 0 !== t ? t : 0;
        !(n < r + _) && (m.set(e, n), s.default.post({
          url: p.Endpoints.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(t => {
          var n, r;
          l.default.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (r = null === (n = t.body) || void 0 === n ? void 0 : n.integration_ids_with_app_commands) && void 0 !== r ? r : []
          })
        }, () => {
          m.set(e, r)
        }))
      }(e)
    }, [e, t]);
    let n = (0, i.default)([f.default], () => f.default.shouldShowChannelNotice(e));
    return t && n
  },
  dismissNotice(e) {
    l.default.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, t) {
    var n;
    l.default.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: t.id
    }), c.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, a.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, t) {
    var n;
    void 0 !== t && (l.default.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: t.id
    }), c.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, a.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "toggle"
    }))
  }
}