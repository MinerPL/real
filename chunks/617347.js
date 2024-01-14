"use strict";
l.r(t), l.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return G
  }
});
var n, a, s = l("37983"),
  r = l("884691"),
  i = l("414456"),
  u = l.n(i),
  d = l("446674"),
  o = l("77078"),
  c = l("812204"),
  E = l("685665"),
  f = l("656038"),
  _ = l("419830"),
  I = l("817963"),
  T = l("957255"),
  N = l("476263"),
  h = l("718550"),
  v = l("398604"),
  m = l("651072"),
  S = l("1339"),
  g = l("613767"),
  C = l("822516"),
  x = l("707916"),
  p = l("255050"),
  A = l("400271"),
  O = l("427554"),
  R = l("644189"),
  M = l("29913"),
  L = l("745049"),
  D = l("49111"),
  y = l("782340"),
  j = l("955614");

function V(e) {
  let {
    channel: t,
    onClick: l
  } = e, {
    canManageAllEvents: n
  } = (0, I.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([T.default], () => !t.isGuildVocal() || T.default.can(D.Permissions.CONNECT, t), [t]), i = r.useMemo(() => (0, f.default)(t), [t]), c = (0, _.getChannelIconComponent)(t);
  return (0, s.jsx)(o.Tooltip, {
    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != l,
    children: e => (0, s.jsxs)(o.Clickable, {
      ...e,
      className: u(j.inline, j.channelContainer, {
        [j.channelContainerEnabled]: a && null != l,
        [j.channelContainerDisabled]: !a && null != l
      }),
      onClick: l,
      children: [(0, s.jsx)(o.Tooltip, {
        text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: n && i && a && null != l,
        children: e => null != c ? (0, s.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: j.icon
        }) : null
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: j.channelLocation,
        children: t.name
      })]
    })
  })
}

function U(e) {
  let {
    guild: t,
    channel: l,
    onJoinClick: n,
    handleLocationClick: a,
    location: r,
    isExternal: i,
    isHub: d
  } = e;
  if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: j.inline,
    children: [(0, s.jsx)(N.default, {
      className: j.guildIcon,
      size: N.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != l ? (0, s.jsx)(V, {
    channel: l,
    onClick: n
  }) : (0, s.jsxs)(o.Clickable, {
    className: j.inline,
    onClick: a,
    children: [(0, s.jsx)(h.default, {
      height: 20,
      width: 20,
      className: u(j.channelContainer, j.icon)
    }), (0, s.jsx)(o.Text, {
      className: i ? j.externalLocation : j.channelLocation,
      variant: "text-sm/normal",
      children: (0, S.guildEventDetailsParser)(r, !0)
    })]
  })
}

function G(e) {
  var t;
  let {
    className: l,
    guild: n,
    channel: a,
    creator: r,
    name: i,
    entityType: f,
    description: _,
    imageLocation: I = 0,
    imageSource: T,
    isActive: N,
    isUserLurking: h,
    isJoined: S = !1,
    isMember: D = !1,
    isHub: y = !1,
    speakers: V,
    speakerCount: G,
    rsvped: P,
    canInvite: H,
    location: B,
    truncate: b,
    onContextMenu: F,
    onJoinClick: w,
    onJoinGuildClick: k,
    onGoToGuildClick: Y,
    onRsvpClick: z,
    onStartClick: Z,
    onInviteClick: X,
    onEndClick: W,
    onClick: K,
    isNew: q,
    guildEventId: J,
    eventPreview: Q,
    recurrenceRule: $,
    recurrenceId: ee
  } = e, et = (0, g.isChannelPublic)(a, f), el = f === L.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: en
  } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
    enabled: ea
  } = m.default.useExperiment({
    guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
    location: en[0]
  }, {
    autoTrackExposure: !1
  }), es = (0, d.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), er = [];
  if (null != $ && null != es) {
    let e = (0, C.getRRule)($);
    er = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
  }
  let ei = ea && er.length > 0;
  return (0, s.jsxs)(o.ClickableContainer, {
    "aria-label": i,
    onClick: () => null == K ? void 0 : K(ee),
    onContextMenu: F,
    className: u(j.card, {
      [j.joined]: S,
      [j.lurking]: h
    }, l),
    children: [(0, s.jsxs)("div", {
      className: u(j.padding, {
        [j.isRecurring]: ei
      }),
      children: [0 === I && (0, s.jsx)(p.default, {
        source: T
      }), (0, s.jsx)(A.default, {
        creator: r,
        name: i,
        description: _,
        imageSource: 1 === I ? T : null,
        truncate: b,
        guildId: null == n ? void 0 : n.id,
        isHub: y,
        isNew: q,
        guildEventId: J,
        eventPreview: Q,
        recurrenceId: ee
      }), N && null != n && null != V && G > 0 && (0, s.jsx)(M.default, {
        guild: n,
        speakers: V,
        speakerCount: G,
        className: j.spacing
      }), (0, s.jsx)("hr", {
        className: j.divider
      }), (0, s.jsxs)("div", {
        className: u(j.inline, j.footer),
        children: [(0, s.jsx)(U, {
          guild: n,
          channel: a,
          onJoinClick: w,
          handleLocationClick: el ? e => e.stopPropagation() : void 0,
          location: B,
          isExternal: el,
          isHub: y
        }), y ? (0, s.jsx)(R.default, {
          isActive: N,
          isUserLurking: h,
          isMember: D,
          rsvped: P,
          onRsvpClick: z,
          onJoinGuildClick: k,
          onGoToGuildClick: Y,
          guildName: null == n ? void 0 : n.name,
          canInvite: H,
          isChannelPublic: et,
          onInviteClick: X
        }) : (0, s.jsx)(x.default, {
          entityType: f,
          isJoined: S,
          isActive: N,
          isUserLurking: h,
          rsvped: P,
          canInvite: H,
          isChannelPublic: et,
          onContextMenu: F,
          onJoinClick: w,
          onRsvpClick: z,
          onStartClick: Z,
          onInviteClick: X,
          onEndClick: W
        })]
      }), ei && (0, s.jsx)("hr", {
        className: j.divider
      })]
    }), ei && (0, s.jsx)(O.default, {
      guildId: null == n ? void 0 : n.id,
      recurrenceRule: $,
      guildEventId: J,
      onRecurrenceClick: K
    })]
  })
}(n = a || (a = {}))[n.BANNER = 0] = "BANNER", n[n.THUMBNAIL = 1] = "THUMBNAIL"