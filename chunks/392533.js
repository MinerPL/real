"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  GuildDiscoveryMenuPopout: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("272030"),
  r = n("861370"),
  o = n("377114"),
  u = n("305961"),
  d = n("957255"),
  c = n("907566"),
  f = n("378662"),
  E = n("49111"),
  _ = n("782340");

function h(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: h,
    closePopout: C,
    "aria-label": I
  } = e, T = (0, r.default)({
    id: t.id,
    label: _.default.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: C
  }), S = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), m = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, S)), {
    canSeeInAppReportingButtons: p
  } = f.DiscoveryInAppReportingExperiment.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), A = () => {
    (0, l.closeContextMenu)(), null == C || C()
  };
  return (0, a.jsxs)(i.Menu, {
    onSelect: h,
    navId: "guild-discovery-context-menu",
    "aria-label": null != I ? I : _.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: l.closeContextMenu,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: !m && p ? (0, a.jsx)(i.MenuItem, {
        id: "report-guild-discovery-listing",
        label: _.default.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.showReportModalForDiscoverableGuild)(t), A()
        },
        icon: c.default,
        color: "danger"
      }) : null
    }), (0, a.jsx)(i.MenuGroup, {
      children: T
    })]
  })
}
let C = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: s,
    onRequestClose: l
  } = e;
  return (0, a.jsx)(i.Popout, {
    onRequestOpen: s,
    onRequestClose: l,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(h, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}