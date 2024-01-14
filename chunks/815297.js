"use strict";
n.r(t), n.d(t, {
  createNonce: function() {
    return o
  },
  userRecordToServer: function() {
    return c
  },
  default: function() {
    return E
  },
  createBotMessage: function() {
    return f
  }
}), n("702976"), n("424973");
var a = n("627445"),
  l = n.n(a),
  s = n("256572"),
  i = n("766274"),
  r = n("697218"),
  d = n("299039"),
  u = n("49111");

function o() {
  return d.default.fromTimestamp(Date.now())
}

function c(e) {
  let {
    id: t,
    username: n,
    avatar: a,
    discriminator: l,
    bot: s,
    globalName: i
  } = e;
  return {
    id: t,
    username: n,
    avatar: a,
    discriminator: l,
    bot: s,
    global_name: i
  }
}

function E(e) {
  let {
    channelId: t,
    content: n,
    tts: a = !1,
    type: d = u.MessageTypes.DEFAULT,
    messageReference: E,
    allowedMentions: f,
    author: _,
    flags: g,
    nonce: h,
    poll: m
  } = e, S = [];
  if (d === u.MessageTypes.REPLY && (l(null != E, "Replies must have a message reference"), null == f || f.replied_user)) {
    let e = s.default.getMessageByReference(E);
    (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED && S.push(c(e.message.author))
  }
  return null == _ && (_ = r.default.getCurrentUser()), _ instanceof i.default && (_ = c(_)), l(null != _, "createMessage: author cannot be undefined"), {
    id: null != h ? h : o(),
    type: d,
    content: n,
    channel_id: t,
    author: _,
    attachments: [],
    embeds: [],
    pinned: !1,
    mentions: S,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: u.MessageStates.SENDING,
    tts: a,
    message_reference: E,
    flags: g,
    nonce: h,
    poll: m
  }
}

function f(e) {
  let {
    channelId: t,
    content: n,
    embeds: a,
    loggingName: l
  } = e;
  return {
    id: o(),
    type: u.MessageTypes.DEFAULT,
    flags: u.MessageFlags.EPHEMERAL,
    content: n,
    channel_id: t,
    author: {
      id: u.LOCAL_BOT_ID,
      username: "Clyde",
      discriminator: u.NON_USER_BOT_DISCRIMINATOR,
      avatar: "clyde",
      bot: !0
    },
    attachments: [],
    embeds: null != a ? a : [],
    pinned: !1,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: u.MessageStates.SENT,
    tts: !1,
    loggingName: l
  }
}