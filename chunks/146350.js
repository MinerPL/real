"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("86621"),
  c = n("775377"),
  f = n("583232"),
  E = n("891964"),
  _ = n("644091"),
  h = n("845579"),
  C = n("52028"),
  I = n("381546"),
  T = n("304121"),
  S = n("599110"),
  m = n("158998"),
  p = n("49111"),
  A = n("782340"),
  g = n("304169");

function N(e) {
  let {
    status: t,
    description: n,
    focused: s
  } = e;
  return (0, a.jsxs)("div", {
    className: g.statusItem,
    children: [(0, a.jsx)(u.Status, {
      status: t,
      className: g.icon,
      size: 10,
      color: s ? "currentColor" : void 0
    }), (0, a.jsx)("div", {
      className: g.status,
      children: (0, m.humanizeStatus)(t)
    }), null != n && (0, a.jsx)("div", {
      className: g.description,
      children: n
    })]
  })
}

function R(e) {
  let {
    customStatus: t
  } = e, n = e => {
    e.stopPropagation(), h.CustomStatusSetting.updateSetting(void 0)
  };
  return null != t ? (0, a.jsx)("div", {
    "aria-label": A.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
    children: (0, a.jsx)(c.default, {
      className: null != t.emoji ? g.customStatusWithEmoji : g.customStatusItem,
      activity: t,
      emojiClassName: g.customEmoji,
      textClassName: g.customText,
      placeholderText: A.default.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
      children: (0, a.jsx)(u.Tooltip, {
        text: A.default.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: g.clearStatusButton,
          onClick: n,
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          tabIndex: -1,
          "aria-hidden": !0,
          children: (0, a.jsx)(I.default, {
            className: g.clearStatusIcon
          })
        })
      })
    })
  }) : (0, a.jsxs)("div", {
    className: l(g.statusItem, g.customStatusContentIcon),
    "aria-label": A.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
    children: [(0, a.jsx)("div", {
      className: g.customEmojiPlaceholder
    }), (0, a.jsx)("div", {
      className: g.status,
      children: A.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
    })]
  })
}

function O(e) {
  let {
    focused: t
  } = e;
  return (0, a.jsxs)("div", {
    className: l(g.statusItem, g.statusItemNoPadding, g.customStatusContentIcon, g.switchAccountsItem),
    "aria-label": A.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
    children: [(0, a.jsx)(T.default, {
      width: 18,
      height: 18,
      className: g.switchAccountsIcon,
      color: t ? o.default.unsafe_rawColors.WHITE_500.css : "currentColor"
    }), (0, a.jsx)("div", {
      className: g.status,
      children: A.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE
    })]
  })
}
let L = e => {
  let {
    customStatus: t,
    onClose: i,
    analyticsContext: l,
    onSelect: r
  } = e, o = (0, _.useMultiAccountMenuItems)();
  s.useEffect(() => {
    S.default.track(p.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != t,
      location: l.location
    })
  }, []);
  let d = e => {
    (0, f.default)(e, void 0, {
      location: l.location
    })
  };
  return (0, a.jsxs)(u.Menu, {
    navId: "status-picker",
    variant: "fixed",
    "aria-label": A.default.Messages.SET_STATUS,
    onClose: i,
    onSelect: r,
    children: [(0, a.jsx)(u.MenuItem, {
      id: "online",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.ONLINE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.ONLINE)
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "idle",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.IDLE,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.IDLE)
    }), (0, a.jsx)(u.MenuItem, {
      id: "dnd",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.DND,
          description: A.default.Messages.STATUS_DND_HELP,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.DND)
    }), (0, a.jsx)(u.MenuItem, {
      id: "invisible",
      keepItemStyles: !0,
      render: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(N, {
          status: u.StatusTypes.INVISIBLE,
          description: A.default.Messages.STATUS_INVISIBLE_HELPER,
          focused: t
        })
      },
      action: () => d(u.StatusTypes.INVISIBLE)
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "custom-status",
      keepItemStyles: !0,
      render: () => (0, a.jsx)(R, {
        customStatus: t
      }),
      action: () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("711438").then(n.bind(n, "711438"));
          return t => (0, a.jsx)(e, {
            ...t,
            sourceAnalyticsContext: l
          })
        })
      }
    }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
      id: "switch-account",
      action: E.default,
      label: e => {
        let {
          isFocused: t
        } = e;
        return (0, a.jsx)(O, {
          focused: t
        })
      },
      children: o
    }, "switch-account")]
  })
};
var v = (0, d.default)(e => {
  let t = (0, r.useStateFromStores)([C.default], () => C.default.getCustomStatusActivity()),
    n = h.StatusSetting.useSetting();
  return (0, a.jsx)(L, {
    ...e,
    customStatus: t,
    status: n
  })
})