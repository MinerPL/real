"use strict";
n.r(t), n.d(t, {
  openMigrationModal: function() {
    return f
  },
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("95410"),
  s = n("77078"),
  l = n("872717"),
  r = n("689988"),
  u = n("282109"),
  o = n("640497"),
  d = n("699668");
class c extends r.default {
  async handlePostConnectionOpen() {
    if (i.default.get("turnedOffNewNotifications") || !o.NotificationsExperiment.getCurrentConfig({
        location: "NotificationMigrationManager"
      }, {
        autoTrackExposure: !1
      }).enabled || u.default.useNewNotifications) return;
    let {
      logExposure: e,
      autoOpen: t
    } = o.UnreadsEntryPointExperiment.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: !1
    });
    if (!e) return;
    let {
      body: {
        guild_noise: r,
        usage: c
      }
    } = await l.default.get("/users/@me/notification-migration-data2"), f = (0, d.transformUsageData)(c), {
      default: m
    } = await n.el("923660").then(n.bind(n, "923660"));
    if (!(0, s.hasAnyModalOpen)()) o.UnreadsEntryPointExperiment.trackExposure({
      location: "NotificationMigrationManager"
    }), t && ((0, d.hasGoodCandidateServers)(r, f) ? (0, s.openModal)(e => (0, a.jsx)(m, {
      ...e,
      dismissable: !1,
      guildPain: r,
      myUsage: f
    }), {
      onCloseRequest: () => {}
    }) : (0, d.autoMigrateToNewSystem)())
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }
  }
}
async function f(e) {
  let {
    body: {
      guild_noise: t,
      usage: i
    }
  } = await l.default.get("/users/@me/notification-migration-data2"), r = (0, d.transformUsageData)(i);
  (0, s.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("923660").then(n.bind(n, "923660"));
    return n => (0, a.jsx)(i, {
      ...n,
      dismissable: e,
      guildPain: t,
      myUsage: r
    })
  })
}
var m = new c