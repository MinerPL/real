"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("789207"),
  r = n("42203"),
  o = n("18494"),
  u = n("211248"),
  d = n("118530"),
  c = n("138217");
n("440612");
var f = n("49111"),
  h = n("782340");

function E(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, u = (0, l.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
    everyoneFilter: d,
    roleFilter: E,
    guildFilter: m
  } = (0, l.useStateFromStoresObject)([c.default], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = c.default;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, a.jsxs)(s.Menu, {
    navId: "mentions-filter",
    "aria-label": h.default.Messages.FILTER,
    onClose: t,
    onSelect: n,
    children: [(0, a.jsx)(s.MenuCheckboxItem, {
      id: "Everyone",
      label: h.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
      action: function() {
        i.default.setGuildFilter({
          everyoneFilter: !d
        })
      },
      checked: d
    }), (0, a.jsx)(s.MenuCheckboxItem, {
      id: "Roles",
      label: h.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
      action: function() {
        i.default.setGuildFilter({
          roleFilter: !E
        })
      },
      checked: E
    }), null == u || u.isPrivate() ? null : (0, a.jsx)(s.MenuCheckboxItem, {
      id: "All Servers",
      label: h.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
      action: function() {
        i.default.setGuildFilter({
          guildFilter: m === f.RecentMentionsFilters.THIS_SERVER ? f.RecentMentionsFilters.ALL_SERVERS : f.RecentMentionsFilters.THIS_SERVER
        })
      },
      checked: m === f.RecentMentionsFilters.ALL_SERVERS
    })]
  })
}

function m() {
  return (0, a.jsx)(s.Popout, {
    align: "right",
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(E, {
        closePopout: t
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(u.default, {
        tooltip: h.default.Messages.FILTER,
        color: u.CircleIconButtonColors.SECONDARY,
        icon: (0, a.jsx)(d.default, {}),
        onClick: t
      })
    }
  })
}