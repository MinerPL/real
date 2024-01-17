"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("466818"),
  o = n("645266"),
  u = n("305961"),
  d = n("18494"),
  c = n("162771"),
  f = n("476263"),
  E = n("45029"),
  _ = n("489622"),
  T = n("599110"),
  I = n("398654"),
  m = n("712125"),
  N = n("311161"),
  p = n("49111"),
  S = n("724210"),
  A = n("782340"),
  C = n("17629");

function h(e) {
  var t, h;
  let {
    onDismiss: g
  } = e, M = (0, a.useStateFromStores)([c.default], () => c.default.getGuildId()), O = (0, a.useStateFromStores)([d.default], () => null != M ? d.default.getChannelId(M) : null, [M]), R = null != M ? M : null, L = (0, a.useStateFromStores)([u.default], () => null != R ? u.default.getGuild(R) : null, [R]), {
    shouldShowIncidentActions: v,
    incidentData: P,
    isUnderLockdown: D
  } = (0, I.useGuildIncidentsState)(R), x = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == L ? void 0 : L.id) && void 0 !== t ? t : ""), y = l.useCallback(() => null != L && (0, o.goToMemberSafetyDashboard)(L.id), [L]);
  if (null == L || null == P || !v) return null;
  let U = e => {
      if (e && x && O !== S.StaticChannelRoute.MEMBER_SAFETY && y()) {
        T.default.track(p.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: p.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: L.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: m.GuildIncidentActionSources.NAGBAR,
            alertType: (0, N.getIncidentAlertType)(P)
          },
          {
            default: t
          } = await n.el("186638").then(n.bind(n, "186638"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: L.id,
          analyticsData: e
        })
      })
    },
    j = (0, s.jsx)(f.default, {
      className: C.guildIcon,
      guild: L,
      size: f.default.Sizes.MINI
    }),
    b = (0, N.getSecurityActionDetailsString)(P, L.name),
    G = null !== (h = P.dmsDisabledUntil) && void 0 !== h ? h : P.invitesDisabledUntil;
  if (null != G && D) return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: p.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, b, (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!1),
      children: (0, s.jsxs)("div", {
        className: C.actionButtonInner,
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let B = (0, N.hasDetectedRaid)(P) ? A.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: L.name
    }) : (0, N.hasDetectedDMRaid)(P) ? A.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: L.name
    }) : A.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: L.name
    }),
    F = x && O === S.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.WARNING,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: p.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, B, !F && (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!0),
      children: (0, s.jsx)("div", {
        className: C.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: A.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}