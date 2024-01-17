"use strict";
n.r(t), n.d(t, {
  useClickMessageAuthorUsername: function() {
    return O
  },
  useClickReferencedMessageAuthorUsername: function() {
    return R
  },
  useClickInteractionUserUsername: function() {
    return L
  },
  useClickMessageAuthorAvatar: function() {
    return P
  },
  useClickReferencedMessageAuthorAvatar: function() {
    return D
  },
  useClickInteractionUserAvatar: function() {
    return x
  },
  useContextMenuMessage: function() {
    return y
  },
  useContextMenuUser: function() {
    return U
  },
  useContextMenuModerateUser: function() {
    return j
  },
  useContextMenuRaidAlert: function() {
    return b
  },
  useClickMessage: function() {
    return G
  },
  useHoveredMessage: function() {
    return B
  },
  useFocusInside: function() {
    return F
  },
  useClickReply: function() {
    return k
  },
  useClickInteractionCommandName: function() {
    return w
  }
}), n("702976"), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("404118"),
  i = n("272030"),
  r = n("819689"),
  o = n("352674"),
  u = n("244201"),
  d = n("42203"),
  c = n("836417"),
  f = n("377253"),
  E = n("697218"),
  _ = n("659500"),
  T = n("791776"),
  I = n("568734"),
  m = n("773336"),
  N = n("158998"),
  p = n("441823"),
  S = n("913491"),
  A = n("456936"),
  C = n("49111"),
  h = n("782340");

function g(e, t, n) {
  return l.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function M(e, t, n) {
  return l.useCallback(s => {
    let l = E.default.getUser(e);
    if (null == l) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let a = "@".concat(N.default.getUserTag(l, {
        decoration: "never"
      })),
      i = "<@".concat(e, ">");
    _.ComponentDispatch.dispatchToLastSubscribed(C.ComponentActions.INSERT_TEXT, {
      plainText: a,
      rawText: i
    }), o.default.startTyping(t)
  }, [e, t, n])
}

function O(e, t, n, s) {
  let l = g("usernameProfile", n, s);
  return M(e.author.id, t.id, l)
}

function R(e, t, n, s) {
  let l = g("referencedUsernameProfile", n, s);
  return M(null == e ? void 0 : e.author.id, t.id, l)
}

function L(e, t, n, s) {
  let l = g("interactionUsernameProfile", n, s);
  return M(null == e ? void 0 : e.user.id, t.id, l)
}

function v(e) {
  return l.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function P(e, t) {
  let n = g("avatarProfile", e, t);
  return v(n)
}

function D(e, t) {
  let n = g("referencedAvatarProfile", e, t);
  return v(n)
}

function x(e, t) {
  let n = g("interactionAvatarProfile", e, t);
  return v(n)
}

function y(e, t, a, r) {
  let {
    id: o
  } = t, {
    id: E,
    flags: _
  } = e, T = (0, I.hasFlag)(_, C.MessageFlags.EPHEMERAL), N = (0, S.default)(e), p = (0, u.useAppContext)();
  return l.useCallback((e, t) => {
    if (T) return;
    if (!m.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let l = d.default.getChannel(o),
      u = f.default.getMessage(o, E),
      _ = c.default.isEditing(o, E);
    null != l && null != u && !_ && (a({
      contextMenu: !0
    }), (0, i.openContextMenuLazy)(e, async () => {
      if (N) {
        let {
          default: e
        } = await n.el("385065").then(n.bind(n, "385065"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: l,
          attachment: t
        })
      } {
        let {
          default: e
        } = await n.el("261649").then(n.bind(n, "261649"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: l,
          attachment: t,
          shouldHideMediaOptions: r
        })
      }
    }, {
      onClose: () => a({
        contextMenu: !1
      }),
      context: p
    }))
  }, [T, o, E, a, p, N, r])
}

function U(e, t) {
  return l.useCallback(n => {
    let s = E.default.getUser(e),
      l = d.default.getChannel(t);
    null != s && null != l && (n.stopPropagation(), (0, p.openUserContextMenu)(n, s, l))
  }, [e, t])
}

function j(e, t, n) {
  return l.useCallback(s => {
    let l = E.default.getUser(e),
      a = d.default.getChannel(t);
    null != l && null != a && (s.stopPropagation(), (0, p.openModerateUserContextMenu)(s, {
      user: l,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function b(e, t) {
  return l.useCallback(n => {
    let s = E.default.getUser(e),
      l = d.default.getChannel(t);
    null != s && null != l && (n.stopPropagation(), (0, p.openModerationRaidContextMenu)(n, s, l.guild_id))
  }, [e, t])
}

function G(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return l.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, A.default)(s, n))
  }, [s, n])
}

function B(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    a = l.useRef(n),
    [i, r] = l.useState(n);
  a.current = i || a.current;
  let o = l.useCallback(() => {
      !i && (_.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [i, s]),
    u = l.useCallback(() => {
      _.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: a.current,
    isHovered: i,
    handleMouseEnter: o,
    handleMouseLeave: u
  }
}

function F(e, t) {
  let [n, s] = l.useState(!1), [a, i] = l.useState(!1), r = l.useCallback(t => {
    var n, l;
    let a = null !== (l = null === (n = (0, T.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
    (t.target === t.currentTarget || t.currentTarget.contains(a)) && (i(!0), s(!0)), null != e && e(t)
  }, [e]), o = l.useCallback(e => {
    var n, l;
    let a = null !== (l = null === (n = (0, T.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== l ? l : null;
    (e.target === e.currentTarget || !e.currentTarget.contains(a)) && s(!1), null != t && t(e)
  }, [t]);
  return {
    handleFocus: r,
    handleBlur: o,
    isFocused: n,
    hasFocused: a
  }
}

function k(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return l.useCallback(() => {
    null != t && (n ? a.default.show({
      title: h.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: h.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: h.default.Messages.OKAY
    }) : r.default.jumpToMessage({
      channelId: t.channel_id,
      messageId: t.id,
      flash: !0,
      returnMessageId: e.id
    }))
  }, [n, e.id, t])
}

function w(e, t) {
  let n = g("interactionData", e, t);
  return l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}