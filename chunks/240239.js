"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("534222"),
  o = n("698652"),
  u = n("393414"),
  d = n("18494"),
  c = n("943232"),
  f = n("627490"),
  h = n("76539"),
  C = n("151185"),
  p = n("11056"),
  m = n("27978"),
  E = n("64657"),
  g = n("49111"),
  I = n("782340"),
  S = n("909130");
let _ = [{
  icon: (0, l.jsx)(c.default, {
    className: S.icon
  }),
  key: "EVENTS",
  getName: e => {
    let {
      numEvents: t
    } = e;
    return t > 0 ? I.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: t
    }) : I.default.Messages.GUILD_EVENTS
  },
  handler: e => (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("659707").then(n.bind(n, "659707"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e.id
    })
  })
}, {
  icon: (0, l.jsx)(f.default, {
    className: S.icon
  }),
  key: "JOIN_SERVERS",
  getName: () => I.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
  handler: (e, t) => (0, u.transitionToGuild)(e.id, t.id)
}, {
  icon: (0, l.jsx)(C.default, {
    className: S.icon
  }),
  key: "ADD_SERVERS",
  getName: () => I.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
  handler: (e, t) => (0, i.openModalLazy)(async () => {
    let {
      default: a
    } = await n.el("467085").then(n.bind(n, "467085"));
    return n => (0, l.jsx)(a, {
      ...n,
      directoryGuildName: e.name,
      directoryGuildId: e.id,
      directoryChannelId: t.id
    })
  })
}, {
  icon: (0, l.jsx)(h.default, {
    className: S.icon
  }),
  key: "INVITE_MEMBERS",
  getName: () => I.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
  handler: (e, t) => (0, i.openModalLazy)(async () => {
    let {
      default: a
    } = await n.el("310688").then(n.bind(n, "310688"));
    return n => (0, l.jsx)(a, {
      ...n,
      guild: e,
      channel: t,
      source: g.InstantInviteSources.HUB_SIDEBAR
    })
  })
}];
var N = e => {
  let {
    guild: t,
    channel: n
  } = e, i = (0, r.default)(t.id);
  a.useEffect(() => {
    m.default.trackExposure({
      guildId: t.id,
      location: "543af8_1"
    })
  }, [t.id]);
  let {
    showHubEventsList: u
  } = m.default.useExperiment({
    guildId: t.id,
    location: "543af8_2"
  }, {
    autoTrackExposure: !1
  }), c = (0, s.useStateFromStores)([d.default], () => null != n && d.default.getChannelId() === n.id), f = a.useMemo(() => ({
    numEvents: i.length
  }), [i.length]), h = e => {
    if (null != n) {
      let l = _.find(t => t.key === e);
      null == l || l.handler(t, n)
    }
  }, C = (0, E.useHubUnreadCount)(n);
  return (0, l.jsx)("div", {
    children: _.map(e => {
      if (!u && "EVENTS" === e.key) return null;
      let t = c && "JOIN_SERVERS" === e.key;
      return (0, l.jsx)(p.default, {
        avatar: e.icon,
        name: e.getName(f),
        focusProps: {
          offset: {
            right: 4,
            top: 1,
            bottom: 1
          }
        },
        onClick: () => h(e.key),
        selected: t,
        className: S.optionItem,
        selectedClassName: S.selected,
        innerClassName: S.itemInner,
        avatarClassName: S.avatar,
        children: "JOIN_SERVERS" === e.key && C > 0 ? (0, o.renderMentionBadge)(C) : null
      }, e.key)
    })
  })
}