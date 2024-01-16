"use strict";
n.r(l), n.d(l, {
  createEventLocationClickHandler: function() {
    return A
  },
  default: function() {
    return V
  }
});
var t = n("37983"),
  s = n("884691"),
  a = n("414456"),
  i = n.n(a),
  u = n("446674"),
  r = n("77078"),
  d = n("970728"),
  o = n("987317"),
  c = n("716214"),
  E = n("813006"),
  m = n("42203"),
  v = n("305961"),
  N = n("580357"),
  h = n("174622"),
  C = n("660279"),
  p = n("36694"),
  I = n("374021"),
  f = n("398604"),
  g = n("1339"),
  x = n("882550"),
  S = n("189443"),
  R = n("822516"),
  T = n("93550"),
  L = n("255050"),
  j = n("400271"),
  _ = n("931874"),
  D = n("936965"),
  B = n("745049"),
  G = n("782340"),
  k = n("336179");
let y = (e, l) => n => {
    n.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
  },
  U = (e, l) => n => {
    let t = m.default.getChannel(e.channel_id);
    null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
  },
  A = (e, l) => {
    switch (null == e ? void 0 : e.entity_type) {
      case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
        return U(e, l);
      case B.GuildScheduledEventEntityTypes.VOICE:
        return y(e, l)
    }
    return () => {}
  },
  b = (e, l) => l && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
  M = s.memo(function(e) {
    var l;
    let {
      guild: n,
      guildScheduledEvent: a,
      channel: i,
      isMember: o
    } = e, c = (0, u.useStateFromStores)([v.default], () => {
      var e;
      return null == n ? null : null !== (e = v.default.getGuild(n.id)) && void 0 !== e ? e : new E.default(n)
    }, [n]), m = (0, _.getLocationDataForEvent)(a, i), C = s.useCallback(e => {
      o && null != a && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(a))
    }, [o, a]), p = s.useCallback(e => {
      A(a)(e)
    }, [a]);
    if (null == c) return null;
    let I = null == m ? void 0 : m.IconComponent,
      f = (0, t.jsxs)(t.Fragment, {
        children: [null != I && (0, t.jsx)(I, {
          width: 16,
          height: 16,
          className: k.channelIcon
        }), (0, t.jsx)(r.Text, {
          className: k.channelDescription,
          variant: "text-xs/normal",
          children: (0, g.guildEventDetailsParser)(null !== (l = null == m ? void 0 : m.locationName) && void 0 !== l ? l : "", !0)
        })]
      });
    return (0, t.jsxs)("div", {
      className: k.inviteDetailsContainer,
      children: [(0, t.jsx)(h.default.Icon, {
        guild: c,
        onClick: C
      }), (0, t.jsxs)("div", {
        className: k.verticalContainer,
        children: [(0, t.jsxs)("div", {
          className: k.guildChannelInfoContainer,
          children: [(0, t.jsx)(N.default, {
            guild: c,
            tooltipPosition: "top",
            tooltipColor: r.Tooltip.Colors.PRIMARY,
            size: 16,
            className: k.guildBadge
          }), (0, t.jsx)(r.Clickable, {
            className: k.guildNameClickable,
            onClick: C,
            children: (0, t.jsx)(r.Heading, {
              className: o ? k.guildNameLinkable : k.guildName,
              variant: "text-sm/medium",
              children: c.name
            })
          })]
        }), (0, t.jsx)("div", {
          className: k.channelInfoContainer,
          children: b(a, o) ? (0, t.jsx)(r.Clickable, {
            className: k.channelLocationLink,
            onClick: p,
            children: f
          }) : f
        })]
      })]
    })
  }),
  P = s.memo(function(e) {
    let {
      guildId: l,
      guildScheduledEventId: n,
      recurrenceId: s,
      isActive: a,
      isEnded: i,
      isMember: d,
      isExternal: o,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: E
    } = e, m = (0, u.useStateFromStores)([f.default], () => f.default.isInterestedInEventRecurrence(n, s), [n, s]), v = e => {
      e.stopPropagation(), d ? a && E() : c()
    };
    return d ? a ? (0, t.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      onClick: e => {
        !o && v(e)
      },
      color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
      children: o ? G.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : G.default.Messages.JOIN_GUILD
    }) : i ? (0, t.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      disabled: !0,
      color: r.Button.Colors.PRIMARY,
      look: r.Button.Looks.OUTLINED,
      children: G.default.Messages.GUILD_EVENT_INVITE_COMPLETED
    }) : (0, t.jsxs)(r.Button, {
      className: k.button,
      innerClassName: k.innerButton,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      look: m ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, D.default)(n, s, l)
      },
      children: [m ? (0, t.jsx)(p.default, {
        width: 16,
        height: 16,
        className: k.buttonIcon
      }) : (0, t.jsx)(C.default, {
        width: 16,
        height: 16,
        className: k.buttonIcon
      }), G.default.Messages.INDICATE_RSVP]
    }) : (0, t.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      onClick: v,
      color: r.Button.Colors.GREEN,
      children: G.default.Messages.JOIN_GUILD
    })
  }),
  w = s.memo(function(e) {
    var l;
    let {
      guildScheduledEvent: n,
      guild: a,
      channel: u,
      isMember: d,
      recurrenceId: o,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: E
    } = e, m = null != o ? o : null != n ? (0, R.getNextRecurrenceIdInEvent)(n) : null, v = (null == n ? void 0 : n.recurrence_rule) == null || null == m || (0, R.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), m), N = (0, x.default)(n), C = s.useCallback(() => {
      d && null != n && (0, I.openGuildEventDetails)({
        eventId: n.id,
        recurrenceId: m
      })
    }, [d, n, m]);
    if (null == n || !v) return null;
    let p = (0, f.isGuildScheduledEventActive)(n),
      g = (0, f.isGuildEventEnded)(n),
      _ = n.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
    return (0, t.jsx)(h.default, {
      className: i({
        [k.clickable]: d
      }),
      children: (0, t.jsxs)(r.Clickable, {
        onClick: C,
        children: [null != n.image && (0, t.jsx)(L.default, {
          source: (0, T.default)(n),
          className: k.banner
        }), (0, t.jsx)(j.default, {
          name: n.name,
          description: null !== (l = n.description) && void 0 !== l ? l : void 0,
          descriptionClassName: k.eventDescription,
          guildId: n.guild_id,
          creator: N,
          guildEventId: n.id,
          eventPreview: n,
          recurrenceId: m
        }), (0, t.jsxs)("div", {
          className: k.footerContainer,
          children: [(0, t.jsx)(M, {
            guild: a,
            channel: u,
            guildScheduledEvent: n,
            isMember: d
          }), (0, t.jsx)(P, {
            isActive: p,
            isEnded: g,
            isMember: d,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: m,
            onAcceptInstantInvite: c,
            onTransitionToInviteChannel: E,
            isExternal: _
          })]
        })]
      })
    })
  });
var V = w