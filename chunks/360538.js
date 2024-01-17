"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("446674"),
  o = n("77078"),
  u = n("970728"),
  d = n("401642"),
  c = n("26989"),
  f = n("305961"),
  h = n("580357"),
  E = n("476263"),
  C = n("155207"),
  p = n("158998"),
  v = n("933326"),
  _ = n("398604"),
  g = n("882550"),
  S = n("466148"),
  T = n("189443"),
  m = n("909151"),
  N = n("427554"),
  I = n("393745"),
  A = n("586403"),
  R = n("49111"),
  U = n("782340"),
  y = n("171632");

function x(e) {
  var t;
  let {
    creator: n,
    guildId: l
  } = e, r = (0, a.useStateFromStores)([c.default], () => c.default.getMember(l, n.id), [n, l]);
  return (0, i.jsxs)("div", {
    className: y.row,
    children: [(0, i.jsx)(o.Avatar, {
      size: o.AvatarSizes.SIZE_20,
      src: n.getAvatarURL(l, 20),
      "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : p.default.getName(n),
      className: y.icon
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: U.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
        usernameHook: function() {
          var e, t;
          return (0, i.jsx)(o.Clickable, {
            onClick: () => (0, d.openUserProfileModal)({
              userId: n.id,
              guildId: l,
              analyticsLocation: {
                section: R.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
              }
            }),
            className: y.creator,
            tag: "span",
            role: "link",
            children: (0, i.jsx)(o.NameWithRole, {
              name: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : p.default.getName(n),
              color: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
            })
          }, "open-user-profile")
        }
      })
    })]
  })
}

function L(e) {
  let {
    guild: t,
    onClick: n,
    onClose: r
  } = e, a = l.useCallback(e => {
    null == n || n(e), null != n && (null == r || r(e))
  }, [n, r]), u = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.default, {
      guild: t,
      size: E.default.Sizes.MINI,
      active: !0,
      className: s(y.guildIcon, y.icon)
    }), (0, i.jsx)(h.default, {
      guild: t,
      tooltipPosition: "top",
      tooltipColor: o.Tooltip.Colors.PRIMARY,
      size: 16,
      className: y.guildBadge
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: y.linkText,
      children: t.name
    })]
  });
  return (0, i.jsx)("div", {
    className: y.row,
    children: null != n ? (0, i.jsx)(o.Clickable, {
      onClick: a,
      className: y.clickable,
      role: "link",
      children: u
    }) : u
  })
}

function w(e) {
  let {
    userCount: t,
    onClick: n
  } = e;
  return (0, i.jsxs)("div", {
    className: y.row,
    children: [(0, i.jsx)(C.default, {
      width: 20,
      height: 20,
      className: y.icon
    }), (0, i.jsx)(o.Clickable, {
      onClick: n,
      className: y.interestedCount,
      children: (0, i.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: U.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
          count: t
        })
      })
    })]
  })
}

function b(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    headerId: s,
    onClose: d,
    onClickInterestedCount: c,
    isHub: h = !1,
    containerRef: E,
    recurrenceId: C,
    setRecurrenceId: p
  } = e, R = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
    startTime: U,
    endTime: b
  } = (0, S.default)(t.id, C), P = (0, a.useStateFromStores)([_.default], () => _.default.getUserCount(t.id, C)), O = l.useCallback(e => {
    e.stopPropagation(), null != t && (0, u.transitionToGuildFromEventInvite)(t)
  }, [t]), M = (0, g.default)(t);
  l.useEffect(() => {
    v.default.getGuildEventUserCounts(n.id, t.id, null != C ? [C] : []), v.default.getGuildEventsForCurrentUser(n.id)
  }, [n.id, t.id, C]);
  let D = (0, T.recurrenceRuleFromServer)(t.recurrence_rule);
  return (0, i.jsxs)("div", {
    ref: E,
    children: [(0, i.jsxs)("div", {
      className: y.header,
      children: [(0, i.jsx)(I.GuildEventTimeStatus, {
        startTime: U.toISOString(),
        endTime: null == b ? void 0 : b.toISOString(),
        status: t.status,
        eventType: t.entity_type,
        guildEventId: t.id,
        recurrenceId: C
      }), (0, i.jsx)(o.Heading, {
        id: s,
        variant: "heading-lg/semibold",
        color: "header-primary",
        className: y.title,
        children: t.name
      })]
    }), (0, i.jsxs)("div", {
      className: y.body,
      children: [(0, i.jsx)(L, {
        guild: n,
        onClick: R ? O : void 0,
        onClose: d
      }), (0, i.jsx)(A.default, {
        guildScheduledEvent: t,
        channel: r,
        onClose: d
      }), null != P && (0, i.jsx)(w, {
        userCount: P,
        onClick: c
      }), !h && null != M && (0, i.jsx)(x, {
        creator: M,
        guildId: n.id
      }, M.id), null != t.description && (0, i.jsx)("div", {
        className: y.description,
        children: (0, i.jsx)(m.default, {
          description: t.description,
          truncate: !1,
          guildId: n.id
        })
      })]
    }), null != D && (0, i.jsx)("hr", {
      className: y.divider
    }), null != D && (0, i.jsx)(N.default, {
      guildId: n.id,
      recurrenceRule: D,
      guildEventId: t.id,
      onRecurrenceClick: p,
      hideScroller: !0,
      activeRecurrenceId: C
    })]
  })
}