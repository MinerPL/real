"use strict";
n.r(t), n.d(t, {
  useGuildMigrationSteps: function() {
    return G
  },
  hasGoodCandidateServers: function() {
    return L
  },
  autoMigrateToNewSystem: function() {
    return j
  },
  useSaveSettings: function() {
    return k
  },
  revertToOldSystem: function() {
    return W
  },
  transformUsageData: function() {
    return K
  }
}), n("222007"), n("702976"), n("808653"), n("70102");
var i = n("884691"),
  a = n("627445"),
  l = n.n(a),
  s = n("917351"),
  r = n.n(s),
  o = n("446674"),
  u = n("95410"),
  d = n("913144"),
  c = n("404118"),
  f = n("519705"),
  m = n("542827"),
  h = n("679428"),
  g = n("42507"),
  _ = n("350522"),
  p = n("525065"),
  S = n("952451"),
  v = n("305961"),
  T = n("677099"),
  E = n("282109"),
  N = n("599110"),
  I = n("568734"),
  y = n("449008"),
  O = n("286235"),
  C = n("649649"),
  M = n("845868"),
  A = n("287223"),
  b = n("76618"),
  P = n("380353"),
  R = n("49111"),
  w = n("133335"),
  D = n("397336"),
  x = n("782340");

function G(e, t) {
  let [n, a] = i.useState(P.defaultThresholds), [l, s] = i.useState({});
  (0, g.useFrecencySettings)();
  let u = (0, o.useStateFromStoresArray)([v.default], () => Object.values(v.default.getGuilds())),
    d = i.useCallback(() => {
      let i = {};
      for (let a of u) i[a.id] = function(e, t, n, i, a) {
        var l;
        let [s, r, o] = _.default.hasConsented(R.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, A.guessGuildModeWithLocalData)(e, n), u = null !== (l = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== l ? l : {}, d = (0, M.default)(e, null != a ? a : s, u, i, t);
        return {
          guildId: e.id,
          mode: s,
          debugReason: o,
          actions: d,
          overrideMode: a,
          messagePain: u.messages === P.PainLevel.High,
          visitsALot: r,
          muted: E.default.isMuted(e.id) && !E.default.isTemporarilyMuted(e.id)
        }
      }(a, n, e, t, l[a.id]);
      return i
    }, [u, n, e, t, l]),
    [c, f] = i.useState(() => d());
  i.useEffect(() => f(d()), [d]);
  let m = i.useCallback((e, t) => {
    s(n => ({
      ...n,
      [e]: t
    }))
  }, []);
  return {
    guildPlans: c,
    overrideGuild: m,
    setThresholds: a,
    getDebug: () => (function(e, t) {
      let n = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
        }, 0),
        i = t.reduce((e, t) => {
          var n;
          return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
        }, 0),
        a = T.default.getFlattenedGuildIds(),
        l = r.sortBy(Object.values(e), e => {
          let t = a.indexOf(e.guildId);
          return -1 === t ? a.length : t
        }),
        s = [
          ["Use Grey Dot", new Set([P.Mode.UseGreyDot])],
          ["Keep As Is", new Set([P.Mode.KeepAsIs])]
        ].map(e => {
          let [t, n] = e, i = l.filter(e => {
            var t;
            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
          }), a = i.map(e => {
            let t = v.default.getGuild(e.guildId),
              n = e.actions.map(e => {
                var t;
                return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
              }).join("\n");
            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
          });
          return "# ".concat(t, "\n\n").concat(a.join("\n\n"))
        });
      return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(s.join("\n\n"))
    })(Object.values(c), t)
  }
}

function L(e, t) {
  return Object.values(v.default.getGuilds()).some(n => {
    let [i] = _.default.hasConsented(R.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(n, P.defaultThresholds, e, t, !1) : (0, A.guessGuildModeWithLocalData)(n, e);
    return i === P.Mode.UseGreyDot
  })
}

function j() {
  let e = Object.values(v.default.getGuilds()),
    t = {};
  for (let a of e) {
    var n, i;
    let e = null !== (n = E.default.getAllSettings().userGuildSettings[a.id]) && void 0 !== n ? n : {},
      l = null !== (i = e.flags) && void 0 !== i ? i : 0;
    l = (0, I.setFlag)(l, D.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), l = (0, I.setFlag)(l, D.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[a.id] = {
      flags: l
    }
  }
  F(t), N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
    auto_migrated: !0,
    num_unread_guids_after: e.filter(e => S.default.hasUnread(e.id)).length
  })
}

function k(e) {
  let [t, n] = i.useState(!1), [a, l] = i.useState(!1), s = i.useCallback(async t => {
    if (a) throw Error("Already submitted notifications migration");
    n(!0);
    try {
      await U(t, e), l(!0)
    } finally {
      n(!1)
    }
  }, [a, e]);
  return {
    submitting: t,
    submitted: a,
    saveSettings: s
  }
}
async function U(e, t) {
  if (E.default.useNewNotifications) {
    c.default.show({
      title: "Info",
      body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
    });
    return
  }
  let n = function(e) {
    let t = Object.values(e).filter(e => {
        var t;
        return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === P.Mode.UseGreyDot
      }).map(e => {
        var t;
        return {
          plan: e,
          memberCount: null !== (t = p.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
        }
      }),
      n = {
        num_unread_guilds_before: Object.keys(e).filter(e => S.default.hasUnread(e)).length,
        unmuted_server_ids: t.filter(e => E.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
      };
    return () => {
      N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
        ...n,
        auto_migrated: !0,
        pre_selected_server_ids: Object.values(e).filter(e => e.mode === P.Mode.UseGreyDot).map(e => e.guildId),
        final_selected_server_ids: t.map(e => e.plan.guildId),
        num_unread_guids_after: Object.keys(e).filter(e => S.default.hasUnread(e)).length,
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
      var i, a;
      let e = null !== (i = E.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
        l = {};
      for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, l, e);
      t[n.guildId] = l
    }
    await F(t);
    let l = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
    if (l.length > 0) {
      let e = setTimeout(n, 5e3);
      (0, m.default)(l, void 0, () => {
        d.default.dispatch({
          type: "RECOMPUTE_READ_STATES"
        }), clearTimeout(e), n()
      })
    } else n()
  } catch (e) {
    O.default.captureException(e), c.default.show({
      title: x.default.Messages.ERROR,
      body: x.default.Messages.NOTIF_MIGRATION_ERROR,
      onConfirm: t
    })
  }
}
async function F(e) {
  await H(() => B()), l((await (0, C.listSnapshots)()).length > 0, "No snapshot exists before migration."), await H(() => f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
  let t = await H(() => h.default.saveUserGuildSettingsBulk(e));
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
  let e = await (0, C.listSnapshots)();
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
    t && (0, C.backupSettings)(e)
  } else(0, C.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
}
async function W() {
  u.default.set("turnedOffNewNotifications", !0), N.default.track(R.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
    num_guilds_with_new_setting: Object.values(v.default.getGuilds()).filter(e => E.default.resolveGuildUnreadSetting(e) === w.UnreadSetting.ONLY_MENTIONS).length
  });
  let e = await (0, C.listSnapshots)(),
    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
  if (t.length > 0) {
    let e = t[t.length - 1];
    await new Promise(t => c.default.show({
      title: "Please Confirm",
      body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
      onConfirm: t,
      cancelText: "Cancel",
      onCancel: () => {}
    })), await (0, C.restoreSnapshot)(e.id), await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
  } else await f.default.setAccountFlag(b.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
}

function K(e) {
  var t, n, i;
  if (null == e) return [];
  let a = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
    l = r.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
  return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
    var t, n, i, s, r, o, u, d, c, f, m;
    let h = null !== (t = a[e.channel_id]) && void 0 !== t ? t : {},
      g = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
    return {
      channel_id: e.channel_id,
      num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
      num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
      num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
      num_six_month_opens: Number(null !== (o = e.six_month_opens) && void 0 !== o ? o : 0),
      num_messages: Number(null !== (u = null == g ? void 0 : g.num_messages) && void 0 !== u ? u : 0),
      num_year_voice_joins: Number(null !== (d = null == h ? void 0 : h.year_opens) && void 0 !== d ? d : 0),
      num_month_voice_joins: Number(null !== (c = null == h ? void 0 : h.one_month_opens) && void 0 !== c ? c : 0),
      num_three_month_voice_joins: Number(null !== (f = null == h ? void 0 : h.three_month_opens) && void 0 !== f ? f : 0),
      num_six_month_voice_joins: Number(null !== (m = null == h ? void 0 : h.six_month_opens) && void 0 !== m ? m : 0)
    }
  }).filter(y.isNotNullish)
}