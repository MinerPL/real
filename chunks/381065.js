"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("77078"),
  r = n("466818"),
  o = n("645266"),
  u = n("305961"),
  d = n("18494"),
  c = n("162771"),
  E = n("476263"),
  f = n("45029"),
  _ = n("489622"),
  h = n("599110"),
  C = n("398654"),
  T = n("712125"),
  I = n("311161"),
  S = n("49111"),
  N = n("724210"),
  A = n("782340"),
  p = n("17629");

function m(e) {
  var t, m;
  let {
    onDismiss: g
  } = e, R = (0, i.useStateFromStores)([c.default], () => c.default.getGuildId()), O = (0, i.useStateFromStores)([d.default], () => null != R ? d.default.getChannelId(R) : null, [R]), L = null != R ? R : null, v = (0, i.useStateFromStores)([u.default], () => null != L ? u.default.getGuild(L) : null, [L]), {
    shouldShowIncidentActions: M,
    incidentData: P,
    isUnderLockdown: D
  } = (0, C.useGuildIncidentsState)(L), y = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : ""), x = s.useCallback(() => null != v && (0, o.goToMemberSafetyDashboard)(v.id), [v]);
  if (null == v || null == P || !M) return null;
  let b = e => {
      if (e && y && O !== N.StaticChannelRoute.MEMBER_SAFETY && x()) {
        h.default.track(S.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: S.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: v.id
        });
        return
      }(0, l.openModalLazy)(async () => {
        let e = {
            source: T.GuildIncidentActionSources.NAGBAR,
            alertType: (0, I.getIncidentAlertType)(P)
          },
          {
            default: t
          } = await n.el("186638").then(n.bind(n, "186638"));
        return n => (0, a.jsx)(t, {
          ...n,
          guildId: v.id,
          analyticsData: e
        })
      })
    },
    U = (0, a.jsx)(E.default, {
      className: p.guildIcon,
      guild: v,
      size: E.default.Sizes.MINI
    }),
    G = (0, I.getSecurityActionDetailsString)(P, v.name),
    j = null !== (m = P.dmsDisabledUntil) && void 0 !== m ? m : P.invitesDisabledUntil;
  if (null != j && D) return (0, a.jsxs)(_.default, {
    className: p.notice,
    color: _.NoticeColors.NEUTRAL,
    children: [(0, a.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: S.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, G, (0, a.jsx)(_.NoticeButton, {
      className: p.actionButton,
      onClick: () => b(!1),
      children: (0, a.jsxs)("div", {
        className: p.actionButtonInner,
        children: [(0, a.jsx)(f.default, {
          width: 16,
          height: 16
        }), (0, a.jsx)("span", {
          children: A.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let k = (0, I.hasDetectedRaid)(P) ? A.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : (0, I.hasDetectedDMRaid)(P) ? A.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : A.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: v.name
    }),
    w = y && O === N.StaticChannelRoute.MEMBER_SAFETY;
  return (0, a.jsxs)(_.default, {
    className: p.notice,
    color: _.NoticeColors.WARNING,
    children: [(0, a.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: S.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, k, !w && (0, a.jsx)(_.NoticeButton, {
      className: p.actionButton,
      onClick: () => b(!0),
      children: (0, a.jsx)("div", {
        className: p.actionButtonInner,
        children: (0, a.jsx)("span", {
          children: A.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}