"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("974667"),
  r = n("446674"),
  o = n("77078"),
  u = n("943722"),
  d = n("843962"),
  c = n("679653"),
  f = n("419830"),
  h = n("373469"),
  E = n("42203"),
  m = n("305961"),
  p = n("824563"),
  g = n("697218"),
  S = n("220677"),
  N = n("476263"),
  _ = n("476765"),
  I = n("782340"),
  T = n("636431");
let C = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function A(e) {
  let {
    channel: t,
    children: n,
    gotoChannel: l,
    mentionCount: s,
    channelState: r,
    toggleCollapsed: u
  } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, _.useUID)()));
  return (0, a.jsx)(o.FocusRing, {
    offset: C,
    children: (0, a.jsxs)("div", {
      className: T.channelHeader,
      ...d,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
      },
      children: [(0, a.jsx)(x, {
        channel: t,
        gotoChannel: l
      }), (0, a.jsx)(R, {
        channel: t,
        gotoChannel: l,
        mentionCount: s
      }), n]
    })
  })
}

function x(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, a.jsx)(v, {
    channel: t,
    gotoChannel: n
  }) : (0, a.jsx)(M, {
    channel: t,
    gotoChannel: n
  })
}

function v(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([g.default], () => t.isDM() ? g.default.getUser(t.getRecipientId()) : null), s = null == l ? (0, d.getChannelIconURL)(t) : l.getAvatarURL(void 0, 40);
  return (0, a.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, a.jsx)("img", {
      className: T.dmIcon,
      src: s,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, l = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id));
  return null == l ? null : (0, a.jsx)(N.default, {
    "aria-hidden": !0,
    className: T.guildIcon,
    guild: l,
    size: N.default.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: l
  } = e, i = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), h = (0, c.default)(t, !1), p = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), g = t.isMultiUserDM() ? I.default.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, a.jsx)(L, {
    channel: t
  }) : (0, a.jsx)(o.Clickable, {
    className: s(T.subtext, T.guildName),
    onClick: n,
    children: p
  });
  return (0, a.jsxs)("div", {
    className: T.channelNameSection,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: T.channelNameHeader,
      children: (0, a.jsxs)(o.Clickable, {
        className: T.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, a.jsx)(d, {
          className: t.isForumLikeChannel() ? T.forumIcon : void 0,
          width: 18,
          height: 18
        }), (0, a.jsx)("span", {
          className: T.channelNameSpan,
          children: h
        }), null != l && l > 0 ? (0, a.jsx)(S.default, {
          value: l,
          className: T.badge
        }) : null]
      })
    }), (0, a.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: T.subtextContainer,
      children: g
    })]
  })
}

function L(e) {
  let {
    channel: t
  } = e, {
    user: n,
    activities: l,
    applicationStream: s
  } = (0, r.useStateFromStoresObject)([g.default, p.default, h.default], () => {
    let e = g.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? p.default.getActivities(e.id) : null,
      applicationStream: null != e ? h.default.getAnyStreamForUser(e.id) : null
    }
  });
  return null == l ? null : (0, a.jsx)(u.default, {
    className: T.activityStatus,
    emojiClassName: T.activityEmoji,
    activities: l,
    applicationStream: s,
    hideTooltip: !0,
    user: n
  })
}