"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("974667"),
  r = n("446674"),
  o = n("77078"),
  u = n("943722"),
  d = n("843962"),
  c = n("679653"),
  f = n("419830"),
  E = n("373469"),
  h = n("42203"),
  _ = n("305961"),
  S = n("824563"),
  T = n("697218"),
  p = n("220677"),
  N = n("476263"),
  I = n("476765"),
  m = n("782340"),
  g = n("636431");
let A = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function C(e) {
  let {
    channel: t,
    children: n,
    gotoChannel: a,
    mentionCount: s,
    channelState: r,
    toggleCollapsed: u
  } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, I.useUID)()));
  return (0, l.jsx)(o.FocusRing, {
    offset: A,
    children: (0, l.jsxs)("div", {
      className: g.channelHeader,
      ...d,
      tabIndex: 0,
      "data-recents-channel": t.id,
      onKeyDown: function(e) {
        null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
      },
      children: [(0, l.jsx)(R, {
        channel: t,
        gotoChannel: a
      }), (0, l.jsx)(L, {
        channel: t,
        gotoChannel: a,
        mentionCount: s
      }), n]
    })
  })
}

function R(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, l.jsx)(M, {
    channel: t,
    gotoChannel: n
  }) : (0, l.jsx)(O, {
    channel: t,
    gotoChannel: n
  })
}

function M(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, a = (0, r.useStateFromStores)([T.default], () => t.isDM() ? T.default.getUser(t.getRecipientId()) : null), s = null == a ? (0, d.getChannelIconURL)(t) : a.getAvatarURL(void 0, 40);
  return (0, l.jsx)(o.Clickable, {
    onClick: n,
    tabIndex: -1,
    children: (0, l.jsx)("img", {
      className: g.dmIcon,
      src: s,
      alt: "",
      "aria-hidden": !0
    })
  })
}

function O(e) {
  let {
    channel: t,
    gotoChannel: n
  } = e, a = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(t.guild_id));
  return null == a ? null : (0, l.jsx)(N.default, {
    "aria-hidden": !0,
    className: g.guildIcon,
    guild: a,
    size: N.default.Sizes.MEDIUM,
    active: !0,
    onClick: n,
    tabIndex: -1
  })
}

function L(e) {
  let {
    channel: t,
    gotoChannel: n,
    mentionCount: a
  } = e, i = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([h.default], () => h.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), E = (0, c.default)(t, !1), S = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), T = t.isMultiUserDM() ? m.default.Messages.MEMBERS_HEADER.format({
    members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, l.jsx)(v, {
    channel: t
  }) : (0, l.jsx)(o.Clickable, {
    className: s(g.subtext, g.guildName),
    onClick: n,
    children: S
  });
  return (0, l.jsxs)("div", {
    className: g.channelNameSection,
    children: [(0, l.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: g.channelNameHeader,
      children: (0, l.jsxs)(o.Clickable, {
        className: g.channelName,
        onClick: n,
        children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, l.jsx)(d, {
          className: t.isForumLikeChannel() ? g.forumIcon : void 0,
          width: 18,
          height: 18
        }), (0, l.jsx)("span", {
          className: g.channelNameSpan,
          children: E
        }), null != a && a > 0 ? (0, l.jsx)(p.default, {
          value: a,
          className: g.badge
        }) : null]
      })
    }), (0, l.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: g.subtextContainer,
      children: T
    })]
  })
}

function v(e) {
  let {
    channel: t
  } = e, {
    user: n,
    activities: a,
    applicationStream: s
  } = (0, r.useStateFromStoresObject)([T.default, S.default, E.default], () => {
    let e = T.default.getUser(t.getRecipientId());
    return {
      user: e,
      activities: null != e ? S.default.getActivities(e.id) : null,
      applicationStream: null != e ? E.default.getAnyStreamForUser(e.id) : null
    }
  });
  return null == a ? null : (0, l.jsx)(u.default, {
    className: g.activityStatus,
    emojiClassName: g.activityEmoji,
    activities: a,
    applicationStream: s,
    hideTooltip: !0,
    user: n
  })
}