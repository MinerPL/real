"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("446674"),
  s = n("819855"),
  o = n("77078"),
  a = n("87657"),
  u = n("841098"),
  c = n("376556"),
  d = n("572943"),
  f = n("627490"),
  E = n("745633"),
  _ = n("83900"),
  h = n("71216"),
  p = n("741919"),
  S = n("387111"),
  M = n("178406"),
  T = n("835257"),
  m = n("782340"),
  C = n("236807");
let v = i.memo(function() {
    return (0, l.jsx)(o.Tooltip, {
      text: m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, l.jsx)(o.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: m.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  L = e => {
    switch (e) {
      case T.IntegrationType.TWITCH:
        return m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case T.IntegrationType.YOUTUBE:
        return m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  I = e => {
    let t = c.default.get((0, d.useLegacyPlatformType)(e)),
      n = (0, u.default)();
    return null != t && [T.IntegrationType.TWITCH, T.IntegrationType.YOUTUBE].includes(e) ? "url('".concat((0, s.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  },
  A = {
    [T.JoinSourceType.UNSPECIFIED]: {
      type: T.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [T.JoinSourceType.BOT]: {
      type: T.JoinSourceType.BOT,
      getJoinTypeLabel: () => m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, l.jsx)(h.default, {
        className: C.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [T.JoinSourceType.INTEGRATION]: {
      type: T.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, l.jsx)(p.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [T.JoinSourceType.DISCOVERY]: {
      type: T.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, l.jsx)(f.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [T.JoinSourceType.HUB]: {
      type: T.JoinSourceType.HUB,
      getJoinTypeLabel: () => m.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, l.jsx)(E.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [T.JoinSourceType.INVITE]: {
      type: T.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: null,
      hasTooltip: !0
    },
    [T.JoinSourceType.VANITY_URL]: {
      type: T.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(_.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function g(e) {
  var t;
  let {
    children: n,
    hasTooltip: i,
    inviterMember: r,
    joinSourceType: s
  } = e;
  return i && (null == r ? void 0 : r.user) != null ? (0, l.jsx)(o.Tooltip, {
    "aria-label": m.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
    tooltipContentClassName: C.roleTooltip,
    allowOverflow: !0,
    text: (0, l.jsxs)("div", {
      className: C.inviterTooltipContainer,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: s !== T.JoinSourceType.BOT ? m.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : m.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
      }), (0, l.jsx)(a.default, {
        user: r.user,
        size: o.AvatarSizes.SIZE_16
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: (0, l.jsx)(o.NameWithRole, {
          name: S.default.getName(r.guildId, null, r.user),
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

function N(e) {
  let {
    type: t
  } = e, n = I(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: C.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function x(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    integrationType: i,
    ...r
  } = e, s = null != n ? A[n] : null, a = n === T.JoinSourceType.INTEGRATION && null != i;
  switch (!0) {
    case null == s:
    case null == n:
    case n === T.JoinSourceType.UNSPECIFIED:
      return (0, l.jsx)(v, {
        ...r
      });
    case null != i && a:
      return (0, l.jsxs)("div", {
        className: C.inviteContainer,
        ...r,
        children: [(0, l.jsx)(N, {
          type: i
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: L(i)
        })]
      });
    case null != s:
      return (0, l.jsxs)("div", {
        className: C.inviteContainer,
        ...r,
        children: [null == s ? void 0 : s.icon, (0, l.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: null == s ? void 0 : s.getJoinTypeLabel(null != t ? t : void 0)
        })]
      });
    default:
      return (0, l.jsx)(v, {
        ...r
      })
  }
}
var j = i.memo(function(e) {
  var t, n;
  let {
    userId: i,
    guildId: s
  } = e, o = (0, r.useStateFromStores)([M.default], () => M.default.getEnhancedMember(s, i), [s, i]), a = null !== (t = null == o ? void 0 : o.inviterId) && void 0 !== t ? t : "", u = (0, r.useStateFromStores)([M.default], () => M.default.getEnhancedMember(i, a), [a, i]);
  if (null == o) return (0, l.jsx)(v, {});
  let {
    sourceInviteCode: c,
    joinSourceType: d,
    integrationType: f
  } = o, E = null != d ? A[d] : null, _ = null !== (n = null == E ? void 0 : E.hasTooltip) && void 0 !== n && n;
  return (0, l.jsx)(g, {
    hasTooltip: _,
    inviterMember: u,
    joinSourceType: d,
    children: e => (0, l.jsx)(x, {
      sourceInviteCode: c,
      joinSourceType: d,
      integrationType: f,
      ...e
    })
  })
})