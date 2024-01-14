"use strict";
n.r(t), n.d(t, {
  isChannelItemDisabled: function() {
    return O
  },
  getChannelItemClassName: function() {
    return y
  },
  ChannelItemEditButton: function() {
    return D
  },
  ChannelItemInviteButton: function() {
    return b
  },
  default: function() {
    return a
  }
});
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("18054"),
  f = n("398604"),
  h = n("242757"),
  C = n("629220"),
  p = n("834052"),
  m = n("12896"),
  E = n("233069"),
  g = n("373469"),
  I = n("305961"),
  S = n("957255"),
  _ = n("162771"),
  N = n("36694"),
  T = n("945330"),
  A = n("474571"),
  L = n("76539"),
  v = n("230674"),
  x = n("49111"),
  R = n("782340"),
  M = n("708995");

function O(e, t, n) {
  return null != t && !!t && !(0, v.areTypesInSameSection)(n, e.type)
}

function y(e, t) {
  return null == t ? M.containerDefault : e > t ? M.containerDragAfter : M.containerDragBefore
}

function D(e) {
  let {
    channel: t,
    disableManageChannels: n,
    tabIndex: l,
    forceShowButtons: a,
    hasChannelInfo: i = !1
  } = e, r = (0, u.useStateFromStores)([S.default, _.default], () => n || _.default.getGuildId() === x.FAVORITES || !S.default.can(x.Permissions.MANAGE_CHANNELS, t) && !S.default.can(x.Permissions.MANAGE_ROLES, t) && !S.default.can(x.Permissions.MANAGE_WEBHOOKS, t) || (0, E.isGuildSelectableChannelType)(t.type) && !S.default.can(x.Permissions.VIEW_CHANNEL, t) || t.isGuildVocal() && !S.default.can(x.Permissions.CONNECT, t) || !E.EDITABLE_CHANNEL_TYPES.has(t.type));
  if (r) return null;

  function f() {
    c.default.open(t.id)
  }
  return (0, s.jsx)(d.Tooltip, {
    text: R.default.Messages.EDIT_CHANNEL,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: r,
        onBlur: u
      } = e;
      return (0, s.jsx)(d.Clickable, {
        className: o(M.iconItem, a ? M.alwaysShown : void 0, i ? M.iconWithChannelInfo : M.iconNoChannelInfo),
        onClick: f,
        tabIndex: l,
        "aria-label": R.default.Messages.EDIT_CHANNEL,
        onMouseEnter: t,
        onMouseLeave: n,
        onFocus: r,
        onBlur: u,
        children: (0, s.jsx)(A.default, {
          width: 16,
          height: 16,
          className: M.actionIcon
        })
      })
    }
  })
}

function b(e) {
  let {
    channel: t,
    isDefaultChannel: l = !1,
    locked: a,
    tabIndex: i,
    forceShowButtons: r,
    hasChannelInfo: c = !1
  } = e, C = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t.getGuildId())), E = (0, u.useStateFromStores)([p.default], () => p.default.getStageInstanceByChannel(t.id), [t.id]), _ = (0, u.useStateFromStores)([f.default], () => f.default.getActiveEventByChannel(t.id), [t.id]), N = (0, u.useStateFromStores)([S.default], () => (0, h.canViewInviteModal)(S.default, C, t, E)), T = (0, u.useStateFromStores)([S.default], () => S.default.can(x.Permissions.CREATE_INSTANT_INVITE, t) ? R.default.Messages.CREATE_INSTANT_INVITE : R.default.Messages.INVITE_TO_SERVER);
  if (a || !N) return null;

  function A() {
    if (null != C) {
      let e = g.default.getAllActiveStreams().filter(e => e.state !== x.ApplicationStreamStates.ENDED && e.channelId === t.id);
      (0, d.openModalLazy)(async () => {
        let {
          default: l
        } = await n.el("310688").then(n.bind(n, "310688"));
        return n => (0, s.jsx)(l, {
          ...n,
          guild: C,
          channel: t,
          streamUserId: 1 === e.length ? e[0].ownerId : null,
          source: x.InstantInviteSources.GUILD_CHANNELS,
          guildScheduledEvent: _
        })
      })
    }
  }
  let v = (0, s.jsx)(L.default, {
    width: 16,
    height: 16,
    className: M.actionIcon,
    "aria-hidden": !0
  });
  return l && (v = (0, s.jsx)(m.default, {
    tutorialId: "instant-invite",
    position: "left",
    children: (0, s.jsx)("div", {
      children: v
    })
  })), (0, s.jsx)(d.Tooltip, {
    text: T,
    children: e => (0, s.jsx)(d.Clickable, {
      className: o(M.iconItem, r ? M.alwaysShown : void 0, c ? M.iconWithChannelInfo : M.iconNoChannelInfo),
      ...e,
      onClick: A,
      tabIndex: i,
      "aria-label": T,
      children: v
    })
  })
}

function j(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C.dimissFavoriteSuggestion)(t.guild_id, t.id)
  };
  return (0, s.jsx)(d.Tooltip, {
    text: R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
    children: e => (0, s.jsx)(d.Clickable, {
      className: M.iconItem,
      ...e,
      onClick: n,
      "aria-label": R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
      children: (0, s.jsx)(T.default, {
        width: 16,
        height: 16,
        className: M.actionIcon
      })
    })
  })
}

function G(e) {
  let {
    channel: t
  } = e, n = () => {
    (0, C.setIsFavorite)(t.guild_id, t.id, !0, {
      section: x.AnalyticsSections.CHANNEL_LIST
    })
  };
  return (0, s.jsx)(d.Tooltip, {
    text: R.default.Messages.ADD_FAVORITE,
    children: e => (0, s.jsx)(d.Clickable, {
      className: M.iconItem,
      ...e,
      onClick: n,
      "aria-label": R.default.Messages.ADD_FAVORITE,
      children: (0, s.jsx)(N.default, {
        width: 16,
        height: 16,
        className: M.actionIcon
      })
    })
  })
}(l = class extends i.PureComponent {
  renderEditButton() {
    return (0, s.jsx)(D, {
      ...this.props
    })
  }
  renderInviteButton() {
    return (0, s.jsx)(b, {
      ...this.props
    })
  }
  renderRemoveSuggestionButton() {
    return (0, s.jsx)(j, {
      ...this.props
    })
  }
  renderAcceptSuggestionButton() {
    return (0, s.jsx)(G, {
      ...this.props
    })
  }
  getClassName() {
    let {
      position: e,
      sortingPosition: t
    } = this.props;
    return y(e, t)
  }
  isDisabled() {
    let {
      channel: e,
      sorting: t,
      sortingType: n
    } = this.props;
    return O(e, t, n)
  }
}).defaultProps = {
  isDefaultChannel: !1
}, a = l