"use strict";
n.r(t), n.d(t, {
  renderTitle: function() {
    return y
  },
  renderTopic: function() {
    return O
  },
  HeaderGuildBreadcrumb: function() {
    return b
  },
  ChannelEmoji: function() {
    return P
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("430568"),
  d = n("789394"),
  c = n("843962"),
  f = n("679653"),
  h = n("619335"),
  C = n("965381"),
  p = n("393414"),
  m = n("506885"),
  g = n("27618"),
  E = n("162771"),
  S = n("697218"),
  A = n("79798"),
  _ = n("476263"),
  T = n("718490"),
  M = n("960454"),
  I = n("740961"),
  N = n("539938"),
  v = n("540853"),
  L = n("49111"),
  x = n("782340"),
  R = n("305794");

function y(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: l,
    guild: r,
    inSidebar: u = !1,
    handleClick: d,
    handleContextMenu: C,
    handleParentClick: p,
    handleParentContextMenu: m,
    renderFollowButton: E,
    channelEmojiLeftOfIcon: A
  } = e, _ = (0, h.default)(t, r), {
    prefix: T,
    level: I
  } = function(e, t) {
    var n, s;
    switch (e) {
      case L.ChannelTypes.DM:
        return {
          prefix: x.default.Messages.DIRECT_MESSAGE, level: 1
        };
      case L.ChannelTypes.GROUP_DM:
        return {
          prefix: x.default.Messages.GROUP_DM, level: 1
        };
      case L.ChannelTypes.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case L.ChannelTypes.GUILD_ANNOUNCEMENT:
      case L.ChannelTypes.GUILD_TEXT:
      case L.ChannelTypes.GUILD_FORUM:
      case L.ChannelTypes.GUILD_MEDIA:
      case L.ChannelTypes.GUILD_STAGE_VOICE:
      case L.ChannelTypes.GUILD_VOICE:
        return {
          prefix: null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : "", level: 1
        };
      case L.ChannelTypes.ANNOUNCEMENT_THREAD:
      case L.ChannelTypes.PUBLIC_THREAD:
      case L.ChannelTypes.PRIVATE_THREAD:
        return {
          prefix: x.default.Messages.THREAD, level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, r), y = (0, s.jsxs)(s.Fragment, {
    children: [null != T ? (0, s.jsxs)(o.HiddenVisually, {
      children: [T, ":"]
    }) : null, " ", n]
  }), D = (0, s.jsx)(P, {
    channel: t
  });
  switch (t.type) {
    case L.ChannelTypes.DM:
      return (0, s.jsx)(v.default, {
        level: I,
        channel: t,
        handleClick: d,
        handleContextMenu: C
      });
    case L.ChannelTypes.GROUP_DM:
      if (t.isManaged()) return y;
      return (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(o.HiddenVisually, {
          children: x.default.Messages.GROUP_DM
        }), (0, s.jsx)("div", {
          children: (0, s.jsx)(o.Avatar, {
            "aria-hidden": !0,
            className: R.avatar,
            size: o.AvatarSizes.SIZE_24,
            src: (0, c.getChannelIconURL)(t, 80, !1)
          })
        }), (0, s.jsx)(M.default, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case L.ChannelTypes.GUILD_ANNOUNCEMENT:
    case L.ChannelTypes.GUILD_TEXT:
    case L.ChannelTypes.GUILD_FORUM:
    case L.ChannelTypes.GUILD_MEDIA:
      return (0, s.jsxs)(a.Fragment, {
        children: [A && D, j(_, t.type === L.ChannelTypes.GUILD_ANNOUNCEMENT ? x.default.Messages.NEWS_CHANNEL : x.default.Messages.TEXT_CHANNEL), !A && D, (0, s.jsx)(N.default.Title, {
          level: I,
          onContextMenu: C,
          onClick: d,
          children: y
        }), null != E ? E() : null]
      });
    case L.ChannelTypes.GUILD_VOICE:
      return (0, s.jsxs)(a.Fragment, {
        children: [A && D, j(_, x.default.Messages.VOICE_CHANNEL), !A && D, (0, s.jsx)(N.default.Title, {
          level: I,
          onContextMenu: C,
          onClick: d,
          children: y
        })]
      });
    case L.ChannelTypes.GUILD_STAGE_VOICE:
      return (0, s.jsxs)(a.Fragment, {
        children: [A && D, j(_, x.default.Messages.STAGE_CHANNEL), !A && D, (0, s.jsx)(N.default.Title, {
          level: I,
          onContextMenu: C,
          onClick: d,
          children: y
        })]
      });
    case L.ChannelTypes.ANNOUNCEMENT_THREAD:
    case L.ChannelTypes.PUBLIC_THREAD:
    case L.ChannelTypes.PRIVATE_THREAD:
      let O = null;
      if (!u && null != l) {
        let e = (0, h.default)(l, r);
        O = (0, s.jsxs)(a.Fragment, {
          children: [j(e, x.default.Messages.TEXT_CHANNEL), (0, s.jsx)(N.default.Title, {
            level: I,
            onContextMenu: m,
            onClick: p,
            className: i(R.parentChannelName, R.cursorPointer),
            children: (0, f.computeChannelName)(l, S.default, g.default)
          }), (0, s.jsx)(N.default.Caret, {})]
        })
      }
      let b = (null == l ? void 0 : l.type) != null && L.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type);
      return (0, s.jsxs)(a.Fragment, {
        children: [O, j(b ? null : _, x.default.Messages.THREAD), (0, s.jsx)(N.default.Title, {
          level: I,
          onContextMenu: C,
          onClick: d,
          className: i({
            [R.cursorPointer]: u,
            [R.forumPostTitle]: b
          }),
          children: y
        })]
      });
    case L.ChannelTypes.GUILD_DIRECTORY:
      let H = (null == r ? void 0 : r.hasFeature(L.GuildFeatures.HUB)) ? x.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, s.jsxs)(a.Fragment, {
        children: [null !== _ ? (0, s.jsx)(N.default.Icon, {
          iconClassName: R.icon,
          icon: _,
          "aria-hidden": !0
        }) : null, (0, s.jsxs)(N.default.Title, {
          level: I,
          onContextMenu: C,
          onClick: d,
          children: [null != T ? (0, s.jsxs)(o.HiddenVisually, {
            children: [T, ":"]
          }) : null, " ", H]
        })]
      });
    default:
      return null
  }
}
let D = e => {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([S.default], () => S.default.getCurrentUser()), l = (0, r.useStateFromStores)([S.default], () => S.default.getUser(t.getRecipientId()));
  return (a.useEffect(() => {
    (null == n ? void 0 : n.isStaff()) && (0, m.default)(l.id, l.getAvatarURL(void 0, 80), {
      dispatchWait: !0,
      withMutualGuilds: !0,
      withMutualFriendsCount: !0
    })
  }, [n, l]), t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff())) ? (0, s.jsx)(A.default, {
    type: A.default.Types.STAFF_ONLY_DM
  }) : null
};

function O(e, t) {
  switch (e.type) {
    case L.ChannelTypes.DM:
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(D, {
          channel: e
        }), (0, s.jsx)(T.default, {
          channel: e
        }, e.id)]
      });
    case L.ChannelTypes.GUILD_ANNOUNCEMENT:
    case L.ChannelTypes.GUILD_TEXT:
    case L.ChannelTypes.GUILD_VOICE:
    case L.ChannelTypes.GUILD_STAGE_VOICE:
    case L.ChannelTypes.GROUP_DM:
      return null != t ? (0, s.jsx)(I.default, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function j(e, t) {
  return (0, s.jsxs)(s.Fragment, {
    children: [null !== e && (0, s.jsx)(N.default.Icon, {
      iconClassName: R.icon,
      icon: e,
      "aria-hidden": !0
    }), (0, s.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function b(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: a = "left"
  } = e, l = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId());
  return l !== L.FAVORITES || null == t ? null : (0, s.jsxs)("div", {
    className: R.guildBreadcrumbContainer,
    children: ["left" === a && (0, s.jsx)(N.default.Caret, {
      direction: "left"
    }), (0, s.jsx)(_.default, {
      guild: t,
      size: _.default.Sizes.SMALLER,
      className: R.guildBreadcrumbIcon,
      active: !0
    }), (0, s.jsx)(N.default.Title, {
      onClick: () => {
        (0, p.transitionToGuild)(t.id, n.id)
      },
      className: i(R.parentChannelName, R.cursorPointer),
      children: t.name
    }), "right" === a && (0, s.jsx)(N.default.Caret, {
      direction: "right"
    })]
  })
}
let P = a.memo(function(e) {
  let {
    channel: t
  } = e, {
    enabled: n,
    left: a
  } = d.ChannelEmojisExperiment.useExperiment({
    location: "f2c6da_2"
  }, {
    autoTrackExposure: !1
  }), {
    emoji: l,
    color: r
  } = (0, C.useChannelEmojiAndColor)(t);
  return n ? (0, s.jsx)("div", {
    className: i(R.channelEmoji, a ? R.channelEmojiLeftOfIcon : R.channelEmojiRightOfIcon),
    style: {
      backgroundColor: r
    },
    children: (0, s.jsx)(u.default, {
      className: R.twemoji,
      emojiName: l.name,
      emojiId: l.id,
      src: l.url
    })
  }) : null
})