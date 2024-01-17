"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("151426"),
  o = n("77078"),
  u = n("590514"),
  d = n("20606"),
  c = n("954732"),
  f = n("22082"),
  h = n("979268"),
  E = n("520899"),
  m = n("913796"),
  p = n("826267"),
  g = n("956089"),
  S = n("124031"),
  N = n("782340"),
  _ = n("804220");

function I(e) {
  let t = (0, m.useInDesktopNotificationCenterExperiment)();
  return t ? (0, a.jsx)(T, {
    ...e
  }) : (0, a.jsx)(C, {
    ...e
  })
}

function T(e) {
  let {
    tab: t,
    setTab: n,
    children: l,
    badgeState: m,
    closePopout: I
  } = e, {
    showReminders: T
  } = h.default.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = f.default.useExperiment({
    location: "RecentsHeader"
  }), A = (0, i.default)([c.default], () => c.default.getUnseenInviteCount()), x = (0, i.default)([E.default], () => E.default.getMessageReminders()), v = x.length;
  return (0, a.jsxs)(u.Header, {
    className: s(_.header, _.expanded),
    children: [(0, a.jsxs)("div", {
      className: s(_.expandedInboxHeader),
      children: [(0, a.jsx)(p.default, {
        className: _.inboxIcon
      }), (0, a.jsx)(o.Text, {
        className: _.inboxTitle,
        variant: "text-lg/semibold",
        children: N.default.Messages.INBOX
      }), (0, a.jsx)(S.default, {
        closePopout: I
      })]
    }), (0, a.jsxs)("div", {
      className: s(_.expandedTabSection),
      children: [(0, a.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, a.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": N.default.Messages.FOR_YOU,
          className: s(_.tab, _.expanded, {
            [_.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [N.default.Messages.FOR_YOU, (null == m ? void 0 : m.badgeForYou) ? (0, a.jsx)(g.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(_.iconBadge)
          }) : null]
        }), (0, a.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: s(_.tab, _.expanded, {
            [_.active]: t === r.InboxTab.UNREADS
          }),
          children: N.default.Messages.UNREADS_TAB_LABEL
        }), (0, a.jsx)(o.TabBar.Item, {
          "aria-label": N.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: s(_.tab, _.expanded, {
            [_.active]: t === r.InboxTab.MENTIONS
          }),
          children: N.default.Messages.MENTIONS
        }), C ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: s(_.tab, _.expanded, {
            [_.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [N.default.Messages.GAME_INVITES, A > 0 ? (0, a.jsx)(g.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(_.iconBadge)
          }) : null]
        }) : null, T ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: s(_.tab, _.expanded, {
            [_.active]: t === r.InboxTab.TODOS
          }),
          children: [N.default.Messages.MESSAGE_REMINDERS_HEADER, v > 0 ? (0, a.jsx)(g.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(_.iconBadge)
          }) : null]
        }) : null]
      }), (0, a.jsx)("div", {
        className: _.controls,
        children: l
      })]
    })]
  })
}

function C(e) {
  let {
    tab: t,
    setTab: n,
    children: l
  } = e, {
    showReminders: i
  } = h.default.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), d = (0, m.useInDesktopNotificationCenterExperiment)(), {
    enabled: c
  } = f.default.useExperiment({
    location: "RecentsHeader"
  });
  return (0, a.jsxs)(u.Header, {
    className: _.header,
    children: [(0, a.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: _.tabBar,
      children: [d ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.FOR_YOU,
        className: s(_.tab, {
          [_.active]: t === r.InboxTab.FOR_YOU
        }),
        children: N.default.Messages.FOR_YOU
      }) : null, (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: s(_.tab, {
          [_.active]: t === r.InboxTab.MENTIONS
        }),
        children: N.default.Messages.MENTIONS
      }), (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: s(_.tab, {
          [_.active]: t === r.InboxTab.UNREADS
        }),
        children: N.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: s(_.tab, {
          [_.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: N.default.Messages.GAME_INVITES
      }) : null, i ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: s(_.tab, {
          [_.active]: t === r.InboxTab.TODOS
        }),
        children: N.default.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, a.jsx)("div", {
      className: _.controls,
      children: l
    })]
  })
}