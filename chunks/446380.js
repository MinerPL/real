"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("70102"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("450911"),
  u = n("272030"),
  d = n("667771"),
  c = n("139375"),
  f = n("393414"),
  h = n("42203"),
  C = n("305961"),
  p = n("957255"),
  m = n("783735"),
  E = n("41594"),
  g = n("49111"),
  I = n("133335"),
  S = n("708995");

function _(e, t) {
  let n = t.getGuildId();
  if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
  o.default.preload(n, t.id)
}
class N extends m.default {
  render() {
    let {
      channel: e,
      selected: t,
      connectChannelDropTarget: n,
      connectChannelDragSource: a,
      connectDragPreview: s,
      canReorderChannel: r
    } = this.props, o = (0, l.jsx)("li", {
      className: i(this.getClassName(), {
        [S.disabled]: this.isDisabled()
      }),
      "data-dnd-name": e.name,
      children: (0, l.jsxs)(E.default, {
        className: S.iconVisibility,
        channel: e,
        selected: t,
        onClick: this.handleClick,
        onMouseDown: _,
        onContextMenu: this.handleContextMenu,
        connectDragPreview: r ? s : null,
        "aria-label": (0, c.default)({
          channel: e
        }),
        unreadMode: I.UnreadMode.NONE,
        children: [this.renderInviteButton(), this.renderEditButton()]
      })
    });
    return r ? n(a(o)) : o
  }
  constructor(...e) {
    super(...e), this.handleContextMenu = e => {
      let {
        channel: t
      } = this.props, a = C.default.getGuild(t.getGuildId());
      null != a && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("599943").then(n.bind(n, "599943"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: a
        })
      })
    }, this.handleClick = e => {
      ! function(e) {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, f.transitionTo)(g.Routes.CHANNEL(t, e.id), {
          state: {
            analyticsSource: {
              page: g.AnalyticsPages.GUILD_CHANNEL,
              section: g.AnalyticsSections.CHANNEL_LIST,
              object: g.AnalyticsObjects.CHANNEL
            }
          }
        })
      }(e)
    }
  }
}
let T = (0, d.makeChannelSortable)(N);
var A = a.memo(function(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: a
  } = e, s = (0, r.useStateFromStoresObject)([h.default, p.default], () => {
    let e = h.default.getChannel(t.parent_id);
    return {
      canManageChannel: p.default.can(g.Permissions.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== a && null != e ? p.default.can(g.Permissions.MANAGE_CHANNELS, e) : p.default.can(g.Permissions.MANAGE_CHANNELS, n)
    }
  });
  return (0, l.jsx)(T, {
    ...s,
    ...e
  })
})