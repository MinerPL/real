"use strict";
i.r(t), i.d(t, {
  GuildTooltipText: function() {
    return z
  },
  default: function() {
    return Z
  }
}), i("881410"), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("917351"),
  o = i.n(r),
  u = i("446674"),
  c = i("769846"),
  d = i("77078"),
  f = i("191225"),
  E = i("51565"),
  m = i("567054"),
  I = i("5367"),
  p = i("100835"),
  g = i("38654"),
  _ = i("319165"),
  S = i("488464"),
  h = i("998716"),
  C = i("170183"),
  T = i("689275"),
  N = i("373469"),
  A = i("923959"),
  y = i("282109"),
  v = i("697218"),
  j = i("316133"),
  R = i("580357"),
  O = i("40469"),
  M = i("272339"),
  x = i("82636"),
  P = i("368121"),
  L = i("228427"),
  D = i("619911"),
  b = i("811305"),
  U = i("159885"),
  w = i("49111"),
  G = i("782340"),
  k = i("455547"),
  F = i("805959");
let V = (0, U.cssValueToNumber)(c.default.GUILD_TOOLTIP_ICON_SIZE),
  K = (0, U.cssValueToNumber)(c.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

function H(e, t, i) {
  return 0 === t.length ? null : (0, n.jsxs)("div", {
    className: k.row,
    children: [(0, n.jsx)(e, {
      className: k.activityIcon
    }), (0, n.jsx)(b.default, {
      guildId: i,
      users: t,
      max: 6
    })]
  })
}

function B(e) {
  let {
    muteConfig: t,
    className: i
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, n.jsx)(d.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: i,
    children: G.default.Messages.FORM_LABEL_MUTED
  }) : (0, n.jsx)(_.default, {
    muteConfig: t,
    className: i
  })
}

function J(e) {
  var t, i, s;
  let {
    guild: r
  } = e, c = r.id, E = (0, u.useStateFromStoresArray)([A.default, T.default], () => {
    let e = A.default.getChannels(c)[A.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === w.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      t = Object.values(T.default.getThreadsForGuild(c)).flatMap(e => Object.keys(e));
    return [...e, ...t]
  }, [c]), m = (0, C.default)(c), I = l.useMemo(() => m.map(e => e.id), [m]), p = (0, u.useStateFromStores)([j.default], () => j.default.getVoiceStates(c), [c]), g = o.flatMap(E, e => {
    var t;
    if (e === r.afkChannelId) return [];
    let i = null !== (t = p[e]) && void 0 !== t ? t : [];
    return i.map(e => {
      let {
        user: t
      } = e;
      return t
    })
  }), _ = (0, u.useStateFromStoresArray)([S.default], () => o.flatMap(I, e => {
    if (e === r.afkChannelId) return [];
    let t = S.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER);
    return t.filter(e => e.type === h.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })
  })), R = (0, u.useStateFromStores)([S.default], () => {
    let e = 0;
    for (let t of I) e += S.default.getParticipantCount(t, h.StageChannelParticipantNamedIndex.AUDIENCE);
    return e
  }), O = (0, u.useStateFromStoresArray)([N.default], () => N.default.getAllApplicationStreams().filter(e => e.guildId === c).map(e => e.ownerId), [c]), U = (0, u.useStateFromStoresArray)([f.default], () => f.default.getEmbeddedActivitiesForGuild(c).flatMap(e => Array.from(e.userIds)), [c]), G = (0, u.useStateFromStoresArray)([v.default], () => U.map(e => v.default.getUser(e)), [U]), F = (0, u.useStateFromStoresArray)([v.default], () => O.map(e => v.default.getUser(e)), [O]), V = H(P.default, g.filter(e => !O.includes(e.id) && !U.includes(e.id)), c);
  let K = (t = c, i = _, s = R, 0 === i.length ? null : (0, n.jsxs)("div", {
      className: k.row,
      children: [(0, n.jsx)(L.default, {
        className: k.activityIcon
      }), (0, n.jsx)(b.default, {
        guildId: t,
        users: i,
        max: 3
      }), (0, n.jsxs)("div", {
        className: k.stageListenerPill,
        children: [(0, n.jsx)(M.default, {
          width: 16,
          height: 16
        }), (0, n.jsx)(d.Text, {
          className: k.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })),
    J = H(D.default, F.filter(e => null != e && !U.includes(e.id)), c),
    W = H(x.default, G, c),
    {
      isMuted: z,
      muteConfig: Z
    } = (0, u.useStateFromStoresObject)([y.default], () => ({
      isMuted: y.default.isMuted(c),
      muteConfig: y.default.getMuteConfig(c)
    }), [c]);
  return (0, n.jsxs)(n.Fragment, {
    children: [K, V, J, W, z ? (0, n.jsx)(B, {
      muteConfig: Z,
      className: a(k.muteText, {
        [k.muteTextWithActivity]: null != V || null != J
      })
    }) : null]
  })
}

function W(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, n.jsx)(d.Text, {
    className: k.viewAsRolesWarning,
    color: "text-normal",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
          return G.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case m.GuildJoinRequestApplicationStatuses.REJECTED:
          return G.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case m.GuildJoinRequestApplicationStatuses.APPROVED:
          return G.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
          return G.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
      }
    }(t)
  })
}

function z(e) {
  let {
    guild: t,
    includeActivity: i = !0
  } = e, l = (0, E.default)(t), s = (0, I.useCurrentUserGuildBadgeStatus)(t.id), r = null != s ? (0, n.jsx)(W, {
    guildJoinRequestStatus: s
  }) : null, o = i ? (0, n.jsx)(J, {
    guild: t
  }) : null, c = (0, u.useStateFromStores)([g.default], () => g.default.isViewingRoles(t.id)), f = (0, p.useShouldShowInvitesDisabledNotif)(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a(k.row, k.rowGuildName),
      children: [l ? (0, n.jsx)(O.default, {
        guild: t,
        size: K,
        className: k.rowIconV2
      }) : (0, n.jsx)(R.default, {
        guild: t,
        size: V,
        className: k.rowIcon
      }), (0, n.jsx)("span", {
        className: a(k.guildNameText, {
          [k.guildNameTextLimitedSize]: null != o
        }),
        children: t.toString()
      })]
    }), f ? (0, n.jsx)(d.Text, {
      className: k.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: G.default.Messages.INVITES_DISABLED_TOOLTIP
    }) : null, c ? (0, n.jsx)(d.Text, {
      className: k.viewAsRolesWarning,
      color: "text-normal",
      variant: "text-xs/normal",
      children: G.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
    }) : null != r ? r : o]
  })
}

function Z(e) {
  let {
    guild: t,
    disabled: i = !1,
    "aria-label": s = !1,
    children: a,
    includeActivity: r
  } = e;
  return (0, n.jsx)(d.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: i ? null : (0, n.jsx)(z, {
      guild: t,
      includeActivity: r
    }),
    "aria-label": s,
    tooltipClassName: F.listItemTooltip,
    children: e => {
      let {
        onFocus: t,
        onBlur: i,
        ...s
      } = e;
      return (0, n.jsx)("div", {
        onFocus: t,
        onBlur: i,
        children: l.cloneElement(l.Children.only(a), {
          ...s
        })
      })
    }
  })
}