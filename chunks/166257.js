"use strict";
n.r(t), n.d(t, {
  ReactionLocations: function() {
    return a
  },
  getReactors: function() {
    return O
  },
  addReaction: function() {
    return p
  },
  playBurstReaction: function() {
    return I
  },
  removeAllReactions: function() {
    return M
  },
  removeEmojiReactions: function() {
    return N
  },
  removeReaction: function() {
    return C
  },
  removeReactionWithConfirmation: function() {
    return v
  }
});
var l, a, r = n("872717"),
  i = n("819855"),
  o = n("913144"),
  s = n("404118"),
  u = n("875978"),
  c = n("263024"),
  d = n("271938"),
  f = n("377253"),
  R = n("659500"),
  m = n("718517"),
  E = n("402671"),
  h = n("61069"),
  A = n("49111"),
  T = n("782340");

function g(e, t, n) {
  let {
    status: l,
    body: a
  } = e;
  if (429 === l) return setTimeout(t, e.body.retry_after * m.default.Millis.SECOND), !1;
  if (403 === l) switch (a && a.code) {
    case A.AbortCodes.TOO_MANY_REACTIONS:
      s.default.show({
        title: T.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
        body: T.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
        confirmText: T.default.Messages.OKAY
      });
      break;
    case A.AbortCodes.REACTION_BLOCKED:
      R.ComponentDispatch.dispatch(A.ComponentActions.SHAKE_APP, {
        duration: 200,
        intensity: 2
      })
  } else if (!n.isRetry) return t(), !1;
  return !0
}

function _(e, t, n, l, a) {
  var r, i, s;
  o.default.dispatch({
    type: e,
    channelId: t,
    messageId: n,
    userId: null !== (r = null == a ? void 0 : a.userId) && void 0 !== r ? r : d.default.getId(),
    emoji: l,
    optimistic: !0,
    burst: null !== (i = null == a ? void 0 : a.burst) && void 0 !== i && i,
    colors: null !== (s = null == a ? void 0 : a.colors) && void 0 !== s ? s : []
  })
}

function S(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: l,
    userId: a,
    useTypeEndpoint: r = !1,
    type: i = u.ReactionTypes.NORMAL
  } = e, o = null != l.id ? "".concat(l.name, ":").concat(l.id) : l.name;
  return null == a ? A.Endpoints.REACTIONS(t, n, o) : r ? A.Endpoints.REACTION_WITH_TYPE(t, n, o, a, i) : A.Endpoints.REACTION(t, n, o, a)
}
async function O(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: l,
    limit: a,
    after: i,
    type: s
  } = e, u = await r.default.get({
    url: S({
      channelId: t,
      messageId: n,
      emoji: l
    }),
    query: {
      limit: a,
      after: i,
      type: s
    },
    oldFormErrors: !0
  });
  return o.default.dispatch({
    type: "MESSAGE_REACTION_ADD_USERS",
    channelId: t,
    messageId: n,
    users: u.body,
    emoji: l,
    reactionType: s
  }), u.body
}
async function p(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
    a = arguments.length > 4 ? arguments[4] : void 0,
    o = null != a && !!a.burst,
    d = null != a && !!a.isRetry;
  if (!d && function(e, t, n, l) {
      let a = f.default.getMessage(e, t);
      return null != a && a.userHasReactedWithEmoji(n, l)
    }(e, t, n, o)) {
    s.default.show({
      title: T.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
      body: T.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
      confirmText: T.default.Messages.GOT_IT
    });
    return
  }
  let R = await y(n, o);
  _("MESSAGE_REACTION_ADD", e, t, n, {
    burst: o,
    colors: R
  }), await c.default.unarchiveThreadIfNecessary(e), r.default.put({
    url: S({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: "@me"
    }),
    query: {
      location: l,
      type: o ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
    },
    oldFormErrors: !0
  }).then(() => {
    o ? (i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
      name: n.name
    })), h.default.triggerFullscreenAnimation({
      channelId: e,
      messageId: t,
      emoji: {
        ...n,
        animated: !1
      }
    })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(a => {
    g(a, () => p(e, t, n, l, {
      burst: o,
      isRetry: !0
    }), {
      isRetry: d
    }) && (_("MESSAGE_REACTION_REMOVE", e, t, n, {
      burst: o
    }), o ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
      name: n.name
    })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_ADD_ERROR_A11Y.format({
      name: n.name
    })))
  })
}

function I(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: l,
    key: a
  } = e;
  o.default.dispatch({
    type: "BURST_REACTION_EFFECT_PLAY",
    channelId: t,
    messageId: n,
    emoji: l,
    key: a
  })
}
async function M(e, t, n) {
  let l = null != n && !!n.isRetry;
  await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
    url: A.Endpoints.REMOVE_REACTIONS(e, t),
    oldFormErrors: !0
  }).catch(n => {
    g(n, () => M(e, t, {
      isRetry: !0
    }), {
      isRetry: l
    })
  })
}
async function N(e, t, n, l) {
  let a = null != l && !!l.isRetry;
  await c.default.unarchiveThreadIfNecessary(e);
  let i = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
  r.default.delete({
    url: A.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, i),
    oldFormErrors: !0
  }).catch(l => {
    g(l, () => N(e, t, n, {
      isRetry: !0
    }), {
      isRetry: a
    })
  })
}
async function C(e, t, n, l) {
  let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
    o = arguments.length > 5 ? arguments[5] : void 0,
    s = null != o && !!o.burst,
    d = null != o && !!o.isRetry;
  _("MESSAGE_REACTION_REMOVE", e, t, n, {
    userId: l,
    burst: s
  }), await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
    url: S({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: null != l ? l : "@me",
      type: s ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
      useTypeEndpoint: !0
    }),
    query: {
      location: a,
      burst: s
    },
    oldFormErrors: !0
  }).then(() => {
    (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    })): i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(async r => {
    if (g(r, () => C(e, t, n, l, a, {
        burst: s,
        isRetry: !0
      }), {
        isRetry: d
      })) {
      let a = await y(n, s);
      _("MESSAGE_REACTION_ADD", e, t, n, {
        userId: l,
        burst: s,
        colors: a
      }), (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      }))
    }
  })
}
async function y(e, t) {
  let n = [];
  if (t) try {
    n = await (0, E.getEmojiColors)(e)
  } catch {}
  return n
}(l = a || (a = {})).MESSAGE = "Message", l.FORUM_TOOLBAR = "Forum Toolbar", l.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

function v(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: l,
    reactionType: a,
    userId: r,
    location: i
  } = e, o = a === u.ReactionTypes.BURST;
  C(t, n, l, r, i, {
    burst: o
  })
}