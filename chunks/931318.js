"use strict";
n.r(t), n.d(t, {
  addMessageReminders: function() {
    return _
  },
  updateReminderDueAt: function() {
    return g
  },
  toggleMessageReminders: function() {
    return E
  },
  completeMessageReminders: function() {
    return S
  },
  cleanupMessageReminders: function() {
    return p
  },
  fetchAndUpdateSavedMessages: function() {
    return M
  }
});
var a = n("872717"),
  s = n("913144"),
  r = n("679653"),
  i = n("42203"),
  u = n("305961"),
  l = n("27618"),
  d = n("697218"),
  c = n("599110"),
  o = n("520899"),
  m = n("988864"),
  f = n("49111");

function _(e, t) {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "adding",
    rating: "".concat(o.default.getMessageReminders().length)
  }), I([{
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = i.default.getChannel(e.channel_id);
      if (null == t) return null;
      let n = u.default.getGuild(t.guild_id),
        a = "",
        s = (0, r.computeChannelName)(t, d.default, l.default, !0);
      if (t.isPrivate()) a = s;
      else if (t.isThread()) {
        let e = i.default.getChannel(t.parent_id);
        if (null == e) return null;
        let n = (0, r.computeChannelName)(e, d.default, l.default, !0);
        a = "".concat(n, " > ").concat(s)
      } else a = s;
      let c = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: a,
        messageSummary: c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
        guildId: null == n ? void 0 : n.id
      }
    }(e)
  }], [])
}

function g(e, t) {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updating_due_at",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let n = o.default.getMessageReminders(),
    a = n.find(t => t.messageId === e);
  null != a && I([{
    ...a,
    savedAt: new Date,
    dueAt: t
  }], [a])
}

function E(e, t) {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: t,
    reason: "updating within the list",
    rating: "".concat(o.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function S(e) {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "complete and clear immediately",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let t = o.default.getMessageReminders();
  I([], t.filter(t => t.messageId === e))
}

function p() {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "clearing",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let e = o.default.getMessageReminders();
  e.some(e => e.complete) && I([], e.filter(e => e.complete))
}

function h(e) {
  c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updated_from_server",
    rating: "".concat(o.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}

function I(e, t) {
  (0 !== e.length || 0 !== t.length) && a.default.post({
    url: f.Endpoints.SAVED_MESSAGES,
    body: {
      added: e.map(m.savedMessageToServer),
      removed: t.map(m.savedMessageToServer)
    }
  }).then(e => {
    h(e.body.saved_messages.map(m.savedMessageToClient))
  })
}

function M() {
  return o.default.recentlyFetched() ? Promise.resolve() : a.default.get({
    url: f.Endpoints.SAVED_MESSAGES
  }).then(e => {
    let t = e.body.saved_messages,
      n = t.map(m.savedMessageToClient);
    h(n)
  })
}