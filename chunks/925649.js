"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("669491"),
  o = s("77078"),
  d = s("272030"),
  u = s("648747"),
  c = s("380710"),
  E = s("41594"),
  _ = s("676143"),
  T = s("98292"),
  I = s("45029"),
  S = s("851490"),
  N = s("904383"),
  g = s("223729"),
  f = s("49111"),
  A = s("782340"),
  L = s("622802");

function m(e) {
  let {
    guild: t,
    channel: n
  } = e, l = (0, N.useIsChecked)(n.id);
  return "null" === n.id ? (0, a.jsx)("div", {
    className: i(L.categoryRow, L.uncategorized),
    children: (0, a.jsx)(o.Text, {
      className: L.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: n.name
    })
  }) : (0, a.jsxs)(o.Clickable, {
    className: i(L.categoryRow, {
      [L.uncategorized]: "null" === n.id
    }),
    onContextMenu: e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("142047").then(s.bind(s, "142047"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: n,
          guild: t
        })
      })
    },
    onClick: e => {
      e.stopPropagation();
      let l = (0, u.canChannelBeDefault)(t.id, n.id);
      return l ? (0, S.toggleDefaultChannel)(n.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("10035").then(s.bind(s, "10035"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t.id,
          startingChannelId: n.id
        })
      }), !0
    },
    children: [(0, a.jsx)(o.Text, {
      className: L.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: n.name
    }), (0, a.jsx)(o.Checkbox, {
      "aria-checked": l,
      value: l,
      type: o.Checkbox.Types.INVERTED,
      className: L.checkbox,
      displayOnly: !0
    })]
  })
}
let C = n.memo(function() {
    return (0, a.jsx)("div", {
      className: L.separator
    })
  }),
  O = n.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: L.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  h = n.memo(function(e) {
    let {
      channel: t,
      category: n,
      guild: l,
      isFirstChannel: _,
      isLastChannel: m,
      tooltipDirection: h = "right"
    } = e, R = (0, N.useIsChecked)(t.id, n.id), D = (0, N.useIsDisabled)(t.id, n.id), M = (0, N.useDisabledTooltip)(t.id, n.id), G = (0, N.useTooltip)(l.id, n.id), x = (0, g.default)(l), p = null != x.find(e => e.id === t.id), U = (0, c.useIsChattableChannel)(t.id), v = e => {
      if (D) return;
      e.stopPropagation();
      let n = (0, u.canChannelBeDefault)(l.id, t.id);
      return n ? (0, S.toggleDefaultChannel)(t.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("10035").then(s.bind(s, "10035"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: l.id,
          startingChannelId: t.id
        })
      }), !0
    }, j = e => {
      t.isGuildVocal() ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("168003").then(s.bind(s, "168003"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t,
          guild: l
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("327241").then(s.bind(s, "327241"));
        return s => (0, a.jsx)(e, {
          ...s,
          channel: t,
          guild: l
        })
      })
    };
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Tooltip, {
        text: null != M ? M : G,
        delay: 500,
        position: h,
        children: e => (0, a.jsxs)(o.Clickable, {
          className: i(L.channelRow, {
            [L.firstChannel]: _,
            [L.lastChannel]: m,
            [L.disabled]: D
          }),
          ...e,
          onClick: v,
          onContextMenu: j,
          children: [(0, a.jsx)("div", {
            className: L.channelInfo,
            children: (0, a.jsxs)("div", {
              className: L.channelName,
              children: [(0, a.jsx)(E.ChannelItemIcon, {
                channel: t,
                guild: l
              }), (0, a.jsx)(T.default, {
                className: L.name,
                children: (0, a.jsx)(o.Text, {
                  className: L.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: D ? "text-muted" : "text-normal",
                  children: t.name
                })
              }), p ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(O, {
                  index: 0
                }), (0, a.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: L.channelSubtitle,
                  color: "text-brand",
                  children: A.default.Messages.CHANNEL_POPULAR
                })]
              }) : null]
            })
          }), (0, a.jsx)("div", {
            className: L.channelActions,
            children: (0, u.canChannelBeDefault)(t.guild_id, t.id) ? (0, a.jsx)(o.Checkbox, {
              "aria-checked": R,
              value: R,
              type: o.Checkbox.Types.INVERTED,
              disabled: D,
              color: U ? r.default.colors.TEXT_BRAND.css : r.default.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: L.checkboxInner,
              displayOnly: !0
            }) : (0, a.jsxs)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.PRIMARY,
              className: L.lockedPill,
              innerClassName: L.lockedPillInner,
              onClick: f.NOOP,
              children: [(0, a.jsx)(I.default, {
                width: 16,
                height: 16
              }), (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: A.default.Messages.UNLOCK
              })]
            })
          })]
        })
      }), !m && (0, a.jsx)(C, {})]
    })
  });

function R(e) {
  let {
    categories: t,
    guild: s,
    className: l,
    hasSidebar: i
  } = e, r = n.useCallback(e => {
    let n = t._categories[e];
    return (0, a.jsx)(m, {
      channel: n.channel,
      guild: s
    }, n.channel.id)
  }, [t, s]), o = n.useCallback((e, n) => {
    let l = t._categories[e],
      r = t[l.channel.id][n];
    return null == r ? null : (0, a.jsx)(h, {
      category: l.channel,
      channel: r.channel,
      guild: s,
      isFirstChannel: 0 === n,
      isLastChannel: t[l.channel.id].length - 1 === n,
      tooltipDirection: i ? "right" : "top"
    }, r.channel.id)
  }, [t, s, i]), d = (0, _.useChannelBrowserSections)(s.id, t, 64);
  return (0, a.jsx)("div", {
    className: l,
    children: d.map((e, t) => {
      let s = r(t),
        n = [],
        l = e.rowCount;
      if (0 === l) return null;
      for (let e = 0; e < l; e++) n.push(o(t, e));
      return (0, a.jsxs)(a.Fragment, {
        children: [s, n]
      })
    })
  })
}