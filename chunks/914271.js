"use strict";
n.r(t), n.d(t, {
  handlePollGifAttachmentAdd: function() {
    return o
  },
  removePollUploadAttachment: function() {
    return u
  },
  removeAllPollUploadAttachments: function() {
    return d
  },
  sendPollMessageWithAttachments: function() {
    return c
  }
});
var s = n("81594"),
  l = n("783480"),
  a = n("966724"),
  i = n("474643"),
  r = n("314743");
async function o(e, t, n) {
  let l = (0, r.getFileNameFromGifUrl)(t, n),
    o = await fetch(n),
    u = await o.blob(),
    d = new File([u], l, {
      type: "image/gif"
    }),
    c = {
      id: t,
      channelId: e,
      file: d,
      platform: a.UploadPlatform.WEB
    };
  return s.default.addFile({
    file: c,
    channelId: e,
    draftType: i.DraftType.Poll
  }), n
}
async function u(e, t, n) {
  s.default.remove(e, t, i.DraftType.Poll)
}
async function d(e) {
  s.default.clearAll(e, i.DraftType.Poll)
}
async function c(e) {
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