"use strict";
n.r(t), n.d(t, {
  handlePollGifAttachmentAdd: function() {
    return o
  },
  handlePollMediaAttachmentAdd: function() {
    return u
  },
  removePollUploadAttachment: function() {
    return d
  },
  removeAllPollUploadAttachments: function() {
    return c
  },
  sendPollMessageWithAttachments: function() {
    return f
  }
});
var s = n("81594"),
  l = n("783480"),
  a = n("966724"),
  i = n("474643"),
  r = n("314743");
async function o(e, t, n) {
  let s = (0, r.getFileNameFromGifUrl)(t, n),
    l = await fetch(n),
    a = await l.blob(),
    i = new File([a], s, {
      type: "image/gif"
    });
  return u(e, t, i), n
}

function u(e, t, n) {
  let l = {
    id: t,
    channelId: e,
    file: n,
    platform: a.UploadPlatform.WEB
  };
  s.default.addFile({
    file: l,
    channelId: e,
    draftType: i.DraftType.Poll
  })
}
async function d(e, t, n) {
  s.default.remove(e, t, i.DraftType.Poll)
}
async function c(e) {
  s.default.clearAll(e, i.DraftType.Poll)
}
async function f(e) {
  let {
    channel: t,
    items: n,
    poll: s,
    nonce: a,
    maxSizeCallback: r
  } = e;
  return l.default.uploadFiles({
    channelId: t.id,
    uploads: n,
    draftType: i.DraftType.Poll,
    parsedMessage: {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    },
    options: {
      nonce: a,
      poll: s
    },
    raiseEndpointErrors: !0
  })
}