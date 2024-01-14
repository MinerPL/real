"use strict";
a.r(t), a.d(t, {
  NewMemberAction: function() {
    return j
  },
  default: function() {
    return D
  }
}), a("702976");
var l = a("37983"),
  n = a("884691"),
  s = a("446674"),
  i = a("77078"),
  d = a("679653"),
  r = a("419830"),
  u = a("42203"),
  o = a("26989"),
  c = a("305961"),
  f = a("957255"),
  m = a("593195"),
  h = a("578706"),
  E = a("904276"),
  g = a("641892"),
  I = a("315102"),
  _ = a("568734"),
  x = a("347895"),
  v = a("698882"),
  S = a("675305"),
  C = a("205454"),
  N = a("49111"),
  p = a("657944"),
  T = a("782340"),
  A = a("280337");

function j(e) {
  let {
    channelId: t,
    title: a,
    channelName: n,
    emojiId: s,
    emojiName: d,
    icon: r,
    completed: u,
    Icon: o
  } = e, c = I.default.getNewMemberActionIconURL({
    channelId: t,
    icon: r
  });
  return (0, l.jsxs)("div", {
    className: A.action,
    children: [null != c ? (0, l.jsx)("img", {
      src: c,
      className: A.icon,
      width: 32,
      height: 32,
      alt: "",
      "aria-hidden": !0
    }) : (0, l.jsx)(C.default, {
      emojiId: s,
      emojiName: d,
      size: C.CTAEmojiSize.LARGE,
      defaultComponent: (0, l.jsx)("div", {
        className: A.channelIconContainer,
        children: (0, l.jsx)(o, {
          className: A.channelIcon
        })
      })
    }), (0, l.jsxs)("div", {
      className: A.actionInfo,
      children: [(0, l.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: a
      }), null != n ? (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: n
      }) : null]
    }), u ? (0, l.jsx)(h.default, {
      backgroundColor: "#fff",
      className: A.checkCircleCompleted,
      width: 24,
      height: 24
    }) : (0, l.jsx)(E.default, {
      className: A.checkCircle,
      width: 24,
      height: 24
    })]
  })
}

function M(e) {
  var t;
  let {
    action: a,
    completed: o
  } = e, {
    channelId: c,
    title: h,
    emoji: E,
    icon: g
  } = a, {
    id: I,
    name: _
  } = null != E ? E : {}, v = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(c)), S = (0, d.default)(v, !0), C = (0, s.useStateFromStores)([f.default], () => f.default.can(N.Permissions.VIEW_CHANNEL, v)), p = n.useCallback(() => {
    if (null == v) return null;
    (0, x.selectNewMemberActionChannel)(v.guild_id, v.id)
  }, [v]);
  if (null == v || !C) return null;
  let T = null !== (t = (0, r.getChannelIconComponent)(v)) && void 0 !== t ? t : m.default;
  return (0, l.jsx)(i.Clickable, {
    className: A.clickableAction,
    onClick: p,
    children: (0, l.jsx)(j, {
      channelId: c,
      title: h,
      channelName: S,
      emojiId: I,
      emojiName: _,
      icon: g,
      completed: o,
      Icon: T
    })
  })
}

function D(e) {
  let {
    guildId: t
  } = e, a = (0, s.useStateFromStores)([v.default], () => v.default.getNewMemberActions(t), [t]), d = (0, s.useStateFromStores)([S.default], () => S.default.getCompletedActions(t)), r = (0, s.useStateFromStores)([o.default], () => o.default.getSelfMember(t)), u = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t));
  n.useEffect(() => {
    var e;
    null == d && (null == r ? void 0 : r.flags) != null && (0, _.hasFlag)(null !== (e = r.flags) && void 0 !== e ? e : 0, p.GuildMemberFlags.STARTED_HOME_ACTIONS) && (0, x.fetchNewMemberActions)(t)
  }, [d, t, null == r ? void 0 : r.flags]);
  let f = n.useCallback(() => {
    null != u && null != u.rulesChannelId && (0, x.selectNewMemberActionChannel)(u.id, u.rulesChannelId)
  }, [u]);
  return null == r || null == a || 0 === a.length ? null : (0, l.jsxs)("div", {
    className: A.container,
    children: [(0, l.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: T.default.Messages.GET_STARTED
    }), a.map(e => (0, l.jsx)(M, {
      action: e,
      completed: (null == d ? void 0 : d[e.channelId]) === !0,
      guildId: t
    }, e.channelId)), (null == u ? void 0 : u.rulesChannelId) != null && (0, l.jsxs)(i.Clickable, {
      className: A.action,
      onClick: f,
      children: [(0, l.jsx)("div", {
        className: A.rulesIconContainer,
        children: (0, l.jsx)(g.default, {
          className: A.rulesIcon
        })
      }), (0, l.jsx)("div", {
        className: A.actionInfo,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: T.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })]
  })
}