"use strict";
n.r(t), n.d(t, {
  configureJoin: function() {
    return S
  },
  copyId: function() {
    return I
  },
  copyLink: function() {
    return v
  },
  deleteMessage: function() {
    return x
  },
  editMessage: function() {
    return A
  },
  markMessageUnread: function() {
    return C
  },
  pinMessage: function() {
    return T
  },
  publishMessage: function() {
    return O
  },
  retrySendMessage: function() {
    return L
  },
  replyToMessage: function() {
    return D
  },
  createThread: function() {
    return R
  },
  goToThread: function() {
    return P
  },
  markMessageAsReminder: function() {
    return y
  },
  markMessageRemindersAsComplete: function() {
    return b
  }
}), n("37983"), n("884691"), n("77078");
var a = n("828986"),
  s = n("819689"),
  l = n("249561"),
  i = n("550762"),
  r = n("592407");
n("377114");
var d = n("931318"),
  u = n("529805"),
  o = n("967241"),
  c = n("271938"),
  f = n("42203"),
  g = n("599110"),
  E = n("404008"),
  m = n("306160"),
  h = n("659500"),
  p = n("613387"),
  M = n("456936"),
  _ = n("409058"),
  N = n("49111");

function S(e) {
  let t = e.getGuildId();
  null != t && r.default.open(t, N.GuildSettingsSections.OVERVIEW)
}

function I(e, t, n) {
  (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function v(e, t) {
  g.default.track(N.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, m.copy)((0, E.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function x(e, t, n) {
  t.state === N.MessageStates.SEND_FAILED || n.shiftKey ? s.default.deleteMessage(e.id, t.id, t.state === N.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function A(e, t) {
  s.default.startEditMessage(e.id, t.id, t.content)
}

function C(e, t) {
  (0, M.default)(e.id, t.id)
}

function T(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function O(e, t) {
  (0, i.default)(e.id, t.id)
}

function L(e, t) {
  (0, _.default)(e, t, void 0, p.default.getOptions(t.id))
}

function D(e, t, n) {
  let a = e.isPrivate(),
    s = t.author.id === c.default.getId();
  (0, u.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !s,
    showMentionToggle: !a && !s
  }), h.ComponentDispatch.dispatchToLastSubscribed(N.ComponentActions.TEXTAREA_FOCUS)
}

function R(e, t) {
  (0, o.openThreadSidebarForCreating)(e, t, "Message")
}

function P(e, t) {
  let n = f.default.getChannel(t.id);
  null != n && (0, o.openThreadSidebarForViewing)(n)
}

function y(e, t) {
  (0, d.addMessageReminders)(t)
}

function b(e, t) {
  (0, d.completeMessageReminders)(t.id)
}