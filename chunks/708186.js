"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  },
  NonChannelCategory: function() {
    return y
  },
  VoiceChannelCategoryButton: function() {
    return D
  },
  VoiceChannelCategory: function() {
    return b
  },
  ReadonlyCategoryChannel: function() {
    return j
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("820542"),
  c = n("272030"),
  f = n("667771"),
  h = n("870691"),
  C = n("305961"),
  p = n("957255"),
  m = n("282109"),
  E = n("98292"),
  g = n("381546"),
  I = n("256170"),
  S = n("689476"),
  _ = n("368121"),
  N = n("826684"),
  T = n("323137"),
  A = n("2003"),
  L = n("49111"),
  v = n("782340"),
  x = n("716439");

function R(e) {
  e.stopPropagation()
}
let M = a.memo(function(e) {
  let t, {
      channel: s,
      connectChannelDragSource: f,
      connectChannelDropTarget: g,
      disableManageChannels: _,
      position: T,
      sortingPosition: A,
      hideIcon: M,
      children: O
    } = e,
    y = (0, o.useStateFromStores)([m.default], () => m.default.isChannelMuted(s.getGuildId(), s.id)),
    D = (0, o.useStateFromStores)([h.default], () => h.default.isCollapsed(s.id)),
    b = (0, o.useStateFromStores)([p.default], () => p.default.can(L.Permissions.MANAGE_CHANNELS, s));
  t = null != A ? T > A ? x.containerDragAfter : x.containerDragBefore : x.containerDefault;
  let j = a.useCallback(() => {
      D ? (0, d.categoryExpand)(s.id) : (0, d.categoryCollapse)(s.id)
    }, [s.id, D]),
    G = a.useCallback(e => {
      if ("null" !== s.id) {
        let t = C.default.getGuild(s.getGuildId());
        null != t && (0, c.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("142047").then(n.bind(n, "142047"));
          return n => (0, l.jsx)(e, {
            ...n,
            channel: s,
            guild: t
          })
        })
      }
    }, [s]),
    U = a.useCallback(() => {
      let e = s.type === L.ChannelTypes.GUILD_CATEGORY ? null : s.type,
        t = s.getGuildId();
      null != t && (0, u.openModalLazy)(async () => {
        let {
          default: a
        } = await n.el("581354").then(n.bind(n, "581354"));
        return n => (0, l.jsx)(a, {
          ...n,
          channelType: e,
          guildId: t,
          categoryId: "null" !== s.id ? s.id : null
        })
      })
    }, [s]),
    {
      role: P,
      tabIndex: w,
      ...F
    } = (0, r.useListItem)(s.id),
    B = a.useRef(null),
    V = a.useRef(null),
    H = (0, l.jsxs)("li", {
      className: t,
      "data-dnd-name": s.name,
      children: [(0, l.jsx)(u.FocusRing, {
        focusTarget: B,
        ringTarget: V,
        offset: {
          left: 4,
          right: 4
        },
        children: (0, l.jsxs)("div", {
          ref: V,
          className: i(x.iconVisibility, x.wrapper, {
            [x.collapsed]: D,
            [x.muted]: y,
            [x.clickable]: !0
          }),
          onContextMenu: G,
          children: [(0, l.jsxs)(u.Clickable, {
            innerRef: B,
            className: x.mainContent,
            tabIndex: w,
            ...F,
            onClick: j,
            "aria-label": v.default.Messages.CATEGORY_A11Y_LABEL.format({
              categoryName: s.name
            }),
            "aria-expanded": !D,
            focusProps: {
              enabled: !1
            },
            children: [M ? null : (0, l.jsx)(I.default, {
              className: x.icon
            }), (0, l.jsx)(N.default, {
              className: x.name,
              children: (0, l.jsx)(E.default, {
                children: s.name
              })
            })]
          }), (0, l.jsx)("div", {
            onClick: R,
            className: x.children,
            children: b && !_ ? (0, l.jsx)(u.Tooltip, {
              text: v.default.Messages.CREATE_CHANNEL,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, l.jsx)(u.Button, {
                  "aria-label": v.default.Messages.CREATE_CHANNEL,
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  className: i(x.addButton, x.forceVisible),
                  onClick: U,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  tabIndex: w,
                  focusProps: {
                    offset: {
                      top: -3,
                      right: -4,
                      bottom: -3,
                      left: -4
                    }
                  },
                  children: (0, l.jsx)(S.default, {
                    width: 18,
                    height: 18,
                    className: x.addButtonIcon
                  })
                })
              }
            }) : null
          })]
        })
      }), O]
    });
  return null != g && null != f ? g(f(H)) : H
});
var O = (0, f.makeChannelSortable)(M);
let y = a.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: a
    } = e;
    return (0, l.jsx)("li", {
      className: i(a, x.containerDefault),
      children: (0, l.jsxs)("div", {
        className: i(x.iconVisibility, x.wrapperStatic),
        children: [(0, l.jsx)("div", {
          className: x.mainContent,
          children: (0, l.jsx)(N.default, {
            className: x.name,
            children: (0, l.jsx)(E.default, {
              children: t
            })
          })
        }), null != n ? (0, l.jsx)(u.TooltipContainer, {
          text: v.default.Messages.CLEAR_RECENT_CHANNELS,
          className: x.dismissWrapper,
          children: (0, l.jsx)(u.Clickable, {
            className: x.dismissButton,
            onClick: n,
            children: (0, l.jsx)(g.default, {
              className: x.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  D = a.memo(function(e) {
    let {
      category: t
    } = e, n = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id)), s = a.useCallback(() => {
      n ? (0, A.voiceCategoryExpand)(t.guild.id) : (0, A.voiceCategoryCollapse)(t.guild.id)
    }, [t.guild.id, n]);
    return n ? (0, l.jsxs)(u.Clickable, {
      className: x.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(_.default, {
        className: x.voiceChannelsToggleIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: v.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
      })]
    }) : (0, l.jsxs)(u.Clickable, {
      className: x.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(_.default, {
        className: x.voiceChannelsToggleIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: v.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
      })]
    })
  }),
  b = a.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, a = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id));
    return a || null == n || n.record.type === L.ChannelTypes.GUILD_CATEGORY ? a ? (0, l.jsx)("li", {
      className: i(x.containerDefault),
      children: (0, l.jsx)("div", {
        className: i(x.iconVisibility, x.wrapperStatic),
        children: (0, l.jsx)(N.default, {
          className: x.name,
          children: (0, l.jsx)(E.default, {
            children: v.default.Messages.VOICE_CHANNELS_CATEGORY_HEADER
          })
        })
      })
    }) : null : (0, l.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  j = a.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, l.jsx)("li", {
      className: i(x.containerDefault),
      children: (0, l.jsx)("div", {
        className: i(x.iconVisibility, x.wrapperStatic),
        children: (0, l.jsx)(N.default, {
          className: x.name,
          children: (0, l.jsx)(E.default, {
            children: t.name
          })
        })
      })
    })
  })