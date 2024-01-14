"use strict";
a.r(t), a.d(t, {
  GuildFeedConversationReply: function() {
    return S
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("77078"),
  r = a("574073"),
  u = a("865343"),
  o = a("909917"),
  c = a("380986"),
  f = a("969706"),
  m = a("39331"),
  h = a("115859"),
  E = a("497880"),
  g = a("93332"),
  I = a("587904"),
  _ = a("894488"),
  x = a("307078");

function v(e) {
  let {
    message: t,
    guildId: a,
    animateAvatar: s,
    channel: i,
    author: r
  } = e, {
    popouts: m,
    setPopout: h
  } = (0, f.default)(t.id, _.DEFAULT_POPOUTS), {
    usernameProfile: E,
    avatarProfile: v
  } = m, S = n.useMemo(() => e => (0, o.default)(e, t), [t]), C = (0, c.useContextMenuUser)(t.author.id, i.id), N = (0, c.useClickMessageAuthorUsername)(t, i, E, h), p = (0, c.useClickMessageAuthorAvatar)(v, h), T = n.useCallback(() => h({
    usernameProfile: !1,
    avatarProfile: !1,
    referencedUsernameProfile: !1
  }), [h]), A = (0, g.useAvatar)({
    props: {
      message: t,
      channel: i,
      author: r,
      guildId: a,
      compact: !0,
      displayCompactAvatars: !0,
      animate: s,
      showAvatarPopout: v,
      showUsernamePopout: E,
      onContextMenu: C,
      onClickUsername: N,
      onClickAvatar: p,
      onPopoutRequestClose: T
    },
    guildId: a,
    handleRenderPopout: S,
    className: x.avatar
  }), j = (0, g.useUsername)(e, S), M = (0, u.getMessageUsernameId)(t), D = (0, u.getMessageTimestampId)(t), F = "".concat(M, " ").concat(D), L = (0, u.getMessageReplyId)(t);
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(d.H, {
      className: x.header,
      "aria-describedby": L,
      "aria-labelledby": F,
      children: [A, (0, l.jsx)("span", {
        id: (0, u.getMessageUsernameId)(t),
        className: x.username,
        children: (0, l.jsx)(l.Fragment, {
          children: j
        })
      }), (0, l.jsx)(I.default, {
        id: (0, u.getMessageTimestampId)(t),
        timestamp: t.timestamp,
        className: x.timestamp
      })]
    })
  })
}
let S = n.forwardRef(function(e, t) {
  let {
    message: a,
    className: s,
    onMessageClick: u,
    children: o,
    isTruncated: c,
    channel: f,
    guildId: g,
    animateAvatar: I
  } = e, _ = n.useRef(null), {
    content: S,
    hasSpoilerEmbeds: C
  } = (0, m.default)(a, {
    hideSimpleEmbedContent: !0
  }), N = (0, r.default)(a), p = n.useCallback(e => {
    u(e, _.current, a)
  }, [u, a]);
  return (0, l.jsxs)("div", {
    ref: _,
    className: s,
    onClick: p,
    role: "article",
    children: [(0, l.jsx)(d.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        children: [(0, l.jsxs)("div", {
          children: [(0, l.jsx)(v, {
            author: N,
            message: a,
            channel: f,
            guildId: g,
            animateAvatar: I
          }), (0, l.jsx)(E.default, {
            className: i(x.messageContent, {
              [x.truncatedReply]: c
            }),
            message: a,
            content: S,
            contentRef: t
          })]
        }), (0, h.default)({
          className: x.accessories,
          channelMessageProps: e,
          hasSpoilerEmbeds: C,
          isInteracting: !1
        })]
      })
    }), o]
  })
})