"use strict";
n.r(t), n.d(t, {
  useGuildMigrationSteps: function() {
    return x
  },
  hasGoodCandidateServers: function() {
    return G
  },
  autoMigrateToNewSystem: function() {
    return L
  },
  useSaveSettings: function() {
    return k
  },
  revertToOldSystem: function() {
    return Q
  },
  transformUsageData: function() {
    return q
  }
}), n("222007"), n("702976"), n("808653"), n("70102");
var a = n("884691"),
  i = n("627445"),
  s = n.n(i),
  l = n("917351"),
  r = n.n(l),
  u = n("446674"),
  o = n("95410"),
  d = n("913144"),
  c = n("404118"),
  f = n("519705"),
  m = n("542827"),
  _ = n("679428"),
  h = n("42507"),
  g = n("350522"),
  S = n("525065"),
  p = n("952451"),
  E = n("305961"),
  T = n("677099"),
  v = n("282109"),
  N = n("599110"),
  I = n("568734"),
  y = n("449008"),
  C = n("286235"),
  O = n("649649"),
  A = n("845868"),
  M = n("287223"),
  b = n("76618"),
  R = n("380353"),
  w = n("49111"),
  P = n("133335"),
  U = n("397336"),
  D = n("782340");

function x(e, t) {
  let [n, i] = a.useState(R.defaultThresholds), [s, l] = a.useState({});
  (0, h.useFrecencySettings)();
  let o = (0, u.useStateFromStoresArray)([E.default], () => Object.values(E.default.getGuilds())),
    d = a.useCallback(() => {
      let a = {};
      for (let i of o) a[i.id] = function(e, t, n, a, i) {
        var s;
        let [l, r, u] = g.default.hasConsented(w.Consents.PERSONALIZATION) ? (0, M.guessGuildModeWithRemoteData)(e, t, n, a) : (0, M.guessGuildModeWithLocalData)(e, n), o = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, A.default)(e, null != i ? i : l, o, a, t);
        return {
          guildId: e.id,
          mode: l,
          debugReason: u,
          actions: d,
          overrideMode: i,
          messagePain: o.messages === R.PainLevel.High,
          visitsALot: r,
          muted: v.default.isMuted(e.id) && !v.default.isTemporarilyMuted(e.id)
        }
      }(i, n, e, t, s[i.id]);
      return a
    }, [o, n, e, t, s]),
    [c, f] = a.useState(() => d());
  a.useEffect(() => f(d()), [d]);
  let m = a.useCallback((e, t) => {
    l(n => ({
      ...n,
      [e]: t
    }))
  }, []);
  return {
    guildPlans: c,
    overrideGuild: m,
    setThresholds: i,
    getDebug: () => (function(e, t) {
      let n = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
        }, 0),
        a = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
        }, 0),
        i = T.default.getFlattenedGuildIds(),
        s = r.sortBy(Object.values(e), e => {
          let t = i.indexOf(e.guildId);
          return -1 === t ? i.length : t
        }),
        l = [
          ["Use Grey Dot", new Set([R.Mode.UseGreyDot])],
          ["Keep As Is", new Set([R.Mode.KeepAsIs])]
        ].map(e => {
          let [t, n] = e, a = s.filter(e => {
            var t;
            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
          }), i = a.map(e => {
            let t = E.default.getGuild(e.guildId),
              n = e.actions.map(e => {
                var t;
                return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
              }).join("\n");
            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
          });
          return "# ".concat(t, "\n\n").concat(i.join("\n\n"))
        });
      return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(a, "\n\n").concat(l.join("\n\n"))
    })(Object.values(c), t)
  }
}

function G(e, t) {
  return Object.values(E.default.getGuilds()).some(n => {
    let [a] = g.default.hasConsented(w.Consents.PERSONALIZATION) ? (0, M.guessGuildModeWithRemoteData)(n, R.defaultThresholds, e, t) : (0, M.guessGuildModeWithLocalData)(n, e);
    return a === R.Mode.UseGreyDot
  })
}

function L() {
  let e = Object.values(E.default.getGuilds()),
    t = {};
  for (let i of e) {
    var n, a;
    let e = null !== (n = v.default.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {},
      s = null !== (a = e.flags) && void 0 !== a ? a : 0;
    s = (0, I.setFlag)(s, U.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, I.setFlag)(s, U.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[i.id] = {
      flags: s
    }
  }
  F(t), N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
    auto_migrated: !0,
    num_unread_guids_after: e.filter(e => p.default.hasUnread(e.id)).length
  })
}

function k(e) {
  let [t, n] = a.useState(!1), [i, s] = a.useState(!1), l = a.useCallback(async t => {
    if (i) throw Error("Already submitted notifications migration");
    n(!0);
    try {
      await j(t, e), s(!0)
    } finally {
      n(!1)
    }
  }, [i, e]);
  return {
    submitting: t,
    submitted: i,
    saveSettings: l
  }
}
async function j(e, t) {
  if (v.default.useNewNotifications) {
    c.default.show({
      title: "Info",
      body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
    });
    return
  }
  let n = function(e) {
    let t = Object.values(e).filter(e => {
        var t;
        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === R.Mode.UseGreyDot
      }).map(e => {
        var t;
        return {
          plan: e,
          memberCount: null !== (t = S.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
        }
      }),
      n = {
        num_unread_guilds_before: Object.keys(e).filter(e => p.default.hasUnread(e)).length,
        unmuted_server_ids: t.filter(e => v.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
      };
    return () => {
      N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
        ...n,
        auto_migrated: !0,
        pre_selected_server_ids: Object.values(e).filter(e => e.mode === R.Mode.UseGreyDot).map(e => e.guildId),
        final_selected_server_ids: t.map(e => e.plan.guildId),
        num_unread_guids_after: Object.keys(e).filter(e => p.default.hasUnread(e)).length,
        num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
        num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
        num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
        num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
        num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
        num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
        num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
        num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
      })
    }
  }(e);
  try {
    let t = {};
    for (let n of Object.values(e)) {
      var a, i;
      let e = null !== (a = v.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== a ? a : {},
        s = {};
      for (let t of n.actions) null === (i = t.apply) || void 0 === i || i.call(t, s, e);
      t[n.guildId] = s
    }
    await F(t);
    let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
    if (s.length > 0) {
      let e = setTimeout(n, 5e3);
      (0, m.default)(s, void 0, () => {
        d.default.dispatch({
          type: "RECOMPUTE_READ_STATES"
        }), clearTimeout(e), n()
      })
    } else n()
  } catch (e) {
    C.default.captureException(e), c.default.show({
      title: D.default.Messages.ERROR,
      body: D.default.Messages.NOTIF_MIGRATION_ERROR,
      onConfirm: t
    })
  }
}
async function F(e) {
  await H(() => B()), s((await (0, O.listSnapshots)()).length > 0, "No snapshot exists before migration."), await H(() => f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
  let t = await H(() => _.default.saveUserGuildSettingsBulk(e));
  d.default.dispatch({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: t
  }), d.default.dispatch({
    type: "RECOMPUTE_READ_STATES"
  })
}
async function H(e) {
  for (let e = 0; e < 3; e++) try {
    break
  } catch (t) {
    await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
  }
  return await e()
}
async function B() {
  let e = await (0, O.listSnapshots)();
  if (e.length > 0) {
    let t = await

    function() {
      return new Promise(e => {
        c.default.show({
          title: "Create new Backup?",
          body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
          confirmText: "Take New Backup",
          cancelText: "Skip Backup",
          onConfirm: () => e(!0),
          onCancel: () => e(!1)
        })
      })
    }();
    t && (0, O.backupSettings)(e)
  } else(0, O.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
}
async function Q() {
  o.default.set("turnedOffNewNotifications", !0), N.default.track(w.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: Object.values(E.default.getGuilds()).filter(e => v.default.resolveGuildUnreadSetting(e) === P.UnreadSetting.ONLY_MENTIONS).length
  });
  let e = await (0, O.listSnapshots)(),
    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
  if (t.length > 0) {
    let e = t[t.length - 1];
    await new Promise(t => c.default.show({
      title: "Please Confirm",
      body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
      onConfirm: t,
      cancelText: "Cancel",
      onCancel: () => {}
    })), await (0, O.restoreSnapshot)(e.id), await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
  } else await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
}

function q(e) {
  var t, n, a;
  if (null == e) return [];
  let i = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
    s = r.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
  return (null !== (a = e.channel_opens) && void 0 !== a ? a : []).map(e => {
    var t, n, a, l, r, u, o, d, c, f, m;
    let _ = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
      h = null !== (n = s[e.channel_id]) && void 0 !== n ? n : {};
    return {
      channel_id: e.channel_id,
      num_year_opens: Number(null !== (a = e.year_opens) && void 0 !== a ? a : 0),
      num_month_opens: Number(null !== (l = e.one_month_opens) && void 0 !== l ? l : 0),
      num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
      num_six_month_opens: Number(null !== (u = e.six_month_opens) && void 0 !== u ? u : 0),
      num_messages: Number(null !== (o = null == h ? void 0 : h.num_messages) && void 0 !== o ? o : 0),
      num_year_voice_joins: Number(null !== (d = null == _ ? void 0 : _.year_opens) && void 0 !== d ? d : 0),
      num_month_voice_joins: Number(null !== (c = null == _ ? void 0 : _.one_month_opens) && void 0 !== c ? c : 0),
      num_three_month_voice_joins: Number(null !== (f = null == _ ? void 0 : _.three_month_opens) && void 0 !== f ? f : 0),
      num_six_month_voice_joins: Number(null !== (m = null == _ ? void 0 : _.six_month_opens) && void 0 !== m ? m : 0)
    }
  }).filter(y.isNotNullish)
}