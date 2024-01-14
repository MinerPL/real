"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007"), l("702976");
var a = l("37983"),
  n = l("884691"),
  u = l("446674"),
  i = l("77078"),
  s = l("158574"),
  d = l("851387"),
  r = l("750560"),
  o = l("278483"),
  c = l("700179"),
  f = l("406043"),
  m = l("130037"),
  M = l("42203"),
  E = l("26989"),
  S = l("305961"),
  g = l("957255"),
  I = l("697218"),
  C = l("800762"),
  _ = l("568734"),
  v = l("387111"),
  N = l("49111"),
  A = l("903639"),
  O = l("657944"),
  R = l("782340");

function b(e, t, b, h) {
  let L = n.useMemo(() => ({
      [t]: [e.id]
    }), [t, e.id]),
    T = null != h ? [h] : [];
  (0, r.useSubscribeGuildMembers)(L), (0, u.useStateFromStores)([g.default], () => g.default.getGuildVersion(t), [t]);
  let p = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]),
    F = (0, u.useStateFromStores)([I.default], () => {
      var t;
      return (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id
    }, [e.id]),
    U = (0, u.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(t, e.id), [t, e.id]),
    x = (0, u.useStateFromStores)([M.default], () => M.default.getChannel(b), [b]),
    [, D] = (0, f.default)(e.id, t),
    P = null == x ? void 0 : x.isGuildStageVoice(),
    {
      muted: y,
      deafened: G,
      suppressed: j,
      voiceChannelId: V
    } = (0, u.useStateFromStoresObject)([C.default], () => {
      var l, a, n;
      let u = C.default.getVoiceState(t, e.id);
      return {
        muted: null !== (l = null == u ? void 0 : u.mute) && void 0 !== l && l,
        deafened: null !== (a = null == u ? void 0 : u.deaf) && void 0 !== a && a,
        suppressed: null !== (n = null == u ? void 0 : u.suppress) && void 0 !== n && n,
        voiceChannelId: null == u ? void 0 : u.channelId
      }
    }),
    B = (0, u.useStateFromStores)([E.default], () => E.default.getMember(t, e.id)),
    k = (0, m.useTrackModerationAction)(t, {
      location: h,
      targetUserId: e.id
    }),
    K = (0, c.default)(t, e.id),
    w = null != V && null != b && g.default.canWithPartialContext(N.Permissions.VIEW_CHANNEL, {
      channelId: V
    }) && !U ? [(!P || P && !j) && g.default.canWithPartialContext(N.Permissions.MUTE_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-mute",
      label: R.default.Messages.SERVER_VOICE_MUTE,
      checked: y,
      color: "danger",
      action: () => {
        !1 === y && k(m.ModerationActionType.MUTE), d.default.setServerMute(t, e.id, !y)
      }
    }, "voice-mute") : null, (!P || P && !j) && g.default.canWithPartialContext(N.Permissions.DEAFEN_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(i.MenuCheckboxItem, {
      id: "voice-deafen",
      label: R.default.Messages.SERVER_DEAFEN,
      checked: G,
      color: "danger",
      action: () => d.default.setServerDeaf(t, e.id, !G)
    }, "voice-deafen") : null, !F && null != p && g.default.canWithPartialContext(N.Permissions.MOVE_MEMBERS, {
      channelId: b
    }) ? (0, a.jsx)(i.MenuItem, {
      id: "voice-disconnect",
      label: F ? R.default.Messages.DISCONNECT_SELF : R.default.Messages.DISCONNECT_OTHER,
      color: "danger",
      action: () => d.default.setChannel(t, e.id, null)
    }, "voice-disconnect") : null] : [],
    H = async (t, l, a) => {
      if (t.ctrlKey || t.metaKey) try {
        var n;
        await s.default.setCommunicationDisabledDuration(l, a, A.DisableCommunicationDuration.DURATION_60_SEC, null, h), k(m.ModerationActionType.TIMEOUT), (0, i.showToast)((0, i.createToast)(R.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: null !== (n = v.default.getName(l, null, e)) && void 0 !== n ? n : ""
        }), i.ToastType.SUCCESS))
      } catch (e) {
        (0, i.showToast)((0, i.createToast)(R.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, i.ToastType.FAILURE))
      }
    }, Y = null;
  if (!F && null != p && null != B && null != B.joinedAt && (g.default.canManageUser(N.Permissions.MODERATE_MEMBERS, e, p) || g.default.canManageUser(N.Permissions.MANAGE_ROLES, e, p)) && p.hasFeature(N.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) {
    var W;
    Y = (0, _.hasFlag)(null !== (W = B.flags) && void 0 !== W ? W : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION) ? (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: R.default.Messages.MANUALLY_UNVERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(p.id, e.id, (0, _.setFlag)(null !== (t = B.flags) && void 0 !== t ? t : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !1))
      }
    }, "verify") : (0, a.jsx)(i.MenuItem, {
      id: "verify",
      label: R.default.Messages.MANUALLY_VERIFY_MEMBER,
      action: () => {
        var t;
        return d.default.setMemberFlags(p.id, e.id, (0, _.setFlag)(null !== (t = B.flags) && void 0 !== t ? t : 0, O.GuildMemberFlags.BYPASSES_VERIFICATION, !0))
      }
    }, "verify")
  }
  let z = F || null == p ? [] : [Y, K && !U ? D ? (0, a.jsx)(i.MenuItem, {
    id: "removetimeout",
    label: R.default.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => {
      (0, o.openEnableCommunication)(t, e.id, T)
    }
  }, "removetimeout") : (0, a.jsx)(i.MenuItem, {
    id: "timeout",
    label: R.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
      user: e.username
    }),
    color: "danger",
    action: l => {
      if (l.ctrlKey || l.metaKey) return H(l, t, e.id);
      (0, o.openDisableCommunication)(t, e.id, T)
    }
  }, "timeout") : null, g.default.canManageUser(N.Permissions.KICK_MEMBERS, e, p) && !e.isClyde() ? (0, a.jsx)(i.MenuItem, {
    id: "kick",
    label: R.default.Messages.KICK_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await l.el("125104").then(l.bind(l, "125104"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: h,
        guildId: t,
        user: e
      })
    })
  }, "kick") : null, g.default.canManageUser(N.Permissions.BAN_MEMBERS, e, p) ? (0, a.jsx)(i.MenuItem, {
    id: "ban",
    label: R.default.Messages.BAN_USER.format({
      user: e.username
    }),
    color: "danger",
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: n
      } = await l.el("743506").then(l.bind(l, "743506"));
      return l => (0, a.jsx)(n, {
        ...l,
        location: h,
        guildId: t,
        user: e
      })
    })
  }, "ban") : null];
  return [...w, ...z]
}