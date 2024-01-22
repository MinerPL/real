"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("446674"),
  s = n("77078"),
  o = n("87657"),
  u = n("627490"),
  a = n("745633"),
  c = n("83900"),
  d = n("71216"),
  f = n("741919"),
  E = n("387111"),
  _ = n("178406"),
  h = n("835257"),
  p = n("782340"),
  S = n("236807");
let m = i.memo(function() {
    return (0, l.jsx)(s.Tooltip, {
      text: p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, l.jsx)(s.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: S.unknownInvite,
        children: p.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  M = {
    [h.JoinSourceType.UNSPECIFIED]: {
      type: h.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [h.JoinSourceType.BOT]: {
      type: h.JoinSourceType.BOT,
      getJoinTypeLabel: () => p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, l.jsx)(d.default, {
        className: S.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [h.JoinSourceType.INTEGRATION]: {
      type: h.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, l.jsx)(f.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.JoinSourceType.DISCOVERY]: {
      type: h.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, l.jsx)(u.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.JoinSourceType.HUB]: {
      type: h.JoinSourceType.HUB,
      getJoinTypeLabel: () => p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, l.jsx)(a.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [h.JoinSourceType.INVITE]: {
      type: h.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: null,
      hasTooltip: !0
    },
    [h.JoinSourceType.VANITY_URL]: {
      type: h.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(c.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function T(e) {
  var t;
  let {
    children: n,
    hasTooltip: i,
    inviterMember: r,
    joinSourceType: u
  } = e;
  return i && (null == r ? void 0 : r.user) != null ? (0, l.jsx)(s.Tooltip, {
    "aria-label": u !== h.JoinSourceType.BOT ? p.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : p.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    tooltipContentClassName: S.roleTooltip,
    allowOverflow: !0,
    text: (0, l.jsxs)("div", {
      className: S.inviterTooltipContainer,
      children: [(0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: u !== h.JoinSourceType.BOT ? p.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : p.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
      }), (0, l.jsx)(o.default, {
        user: r.user,
        size: s.AvatarSizes.SIZE_16
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: (0, l.jsx)(s.NameWithRole, {
          name: E.default.getName(r.guildId, null, r.user),
          color: null !== (t = r.colorString) && void 0 !== t ? t : void 0
        })
      })]
    }),
    children: e => (0, l.jsx)(l.Fragment, {
      children: n(e)
    })
  }) : (0, l.jsx)(l.Fragment, {
    children: n({})
  })
}

function v(e) {
  let {
    type: t
  } = e, n = (0, h.useGetIntegrationIconString)(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: S.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function L(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    integrationType: i,
    ...r
  } = e, o = null != n ? M[n] : null, u = n === h.JoinSourceType.INTEGRATION && null != i;
  switch (!0) {
    case null == o:
    case null == n:
    case n === h.JoinSourceType.UNSPECIFIED:
      return (0, l.jsx)(m, {
        ...r
      });
    case null != i && u:
      return (0, l.jsxs)("div", {
        className: S.inviteContainer,
        ...r,
        children: [(0, l.jsx)(v, {
          type: i
        }), (0, l.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: (0, h.getIntegrationLabel)(i)
        })]
      });
    case null != o:
      return (0, l.jsxs)("div", {
        className: S.inviteContainer,
        ...r,
        children: [null == o ? void 0 : o.icon, (0, l.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: null == o ? void 0 : o.getJoinTypeLabel(null != t ? t : void 0)
        })]
      });
    default:
      return (0, l.jsx)(m, {
        ...r
      })
  }
}
var C = i.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: s
  } = e, o = (0, r.useStateFromStores)([_.default], () => _.default.getEnhancedMember(s, i), [s, i]), u = null !== (t = null == o ? void 0 : o.inviterId) && void 0 !== t ? t : "", a = (0, r.useStateFromStores)([_.default], () => _.default.getEnhancedMember(i, u), [u, i]);
  if (null == o) return (0, l.jsx)(m, {});
  let {
    sourceInviteCode: c,
    joinSourceType: d,
    integrationType: f
  } = o, E = null != d ? M[d] : null, h = null !== (n = null == E ? void 0 : E.hasTooltip) && void 0 !== n && n;
  return (0, l.jsx)(T, {
    hasTooltip: h,
    inviterMember: a,
    joinSourceType: d,
    children: e => (0, l.jsx)(L, {
      sourceInviteCode: c,
      joinSourceType: d,
      integrationType: f,
      ...e
    })
  })
})