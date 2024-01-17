"use strict";
n.r(t), n.d(t, {
  initiateChannelPrompts: function() {
    return f
  },
  forcePrompt: function() {
    return h
  },
  sendGamingStatsMessage: function() {
    return p
  },
  updateGamingStats: function() {
    return E
  }
});
var i = n("872717"),
  s = n("295426"),
  a = n("819689"),
  l = n("529805"),
  r = n("42203"),
  o = n("474643"),
  u = n("377253"),
  d = n("659500"),
  c = n("49111");

function f(e) {
  i.default.post({
    url: c.Endpoints.INITIATE_CHANNEL_PROMPTS,
    body: {
      guild_ids: e
    }
  })
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
  i.default.post({
    url: c.Endpoints.FORCE_SEND_PROMPT(e),
    body: {
      prompt_type: t
    }
  })
}
async function p(e, t, n) {
  await i.default.post({
    url: c.Endpoints.SEND_GAMING_STATS(t),
    body: {
      message_reference: {
        guild_id: e,
        channel_id: t,
        message_id: n
      }
    }
  }), T(t)
}
async function E(e) {
  let t = await i.default.patch({
    url: c.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
  });
  if (null != t.text && "" !== t.text) {
    let n = r.default.getChannel(e.channel_id);
    null != n && ((0, l.createPendingReply)({
      channel: n,
      message: e,
      shouldMention: !1,
      showMentionToggle: !1
    }), T(n.id)), s.default.saveDraft(e.channel_id, t.text, o.DraftType.ChannelMessage)
  }
}

function T(e) {
  let t = u.default.getMessages(e);
  t.hasMoreAfter ? a.default.jumpToPresent(e, c.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(c.ComponentActions.SCROLLTO_PRESENT)
}