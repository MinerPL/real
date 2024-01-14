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
var a = n("81594"),
  s = n("783480"),
  l = n("966724"),
  i = n("474643"),
  r = n("314743");
async function o(e, t, n) {
  let s = (0, r.getFileNameFromGifUrl)(t, n),
    o = await fetch(n),
    u = await o.blob(),
    d = new File([u], s, {
      type: "image/gif"
    }),
    c = {
      id: t,
      channelId: e,
      file: d,
      platform: l.UploadPlatform.WEB
    };
  return a.default.addFile({
    file: c,
    channelId: e,
    draftType: i.DraftType.Poll
  }), n
}
async function u(e, t, n) {
  a.default.remove(e, t, i.DraftType.Poll)
}
async function d(e) {
  a.default.clearAll(e, i.DraftType.Poll)
}
async function c(e) {
  let {
    channel: t,
    items: n,
    poll: a,
    nonce: l,
    maxSizeCallback: r
  } = e;
  return s.default.uploadFiles({
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
      nonce: l,
      poll: a
    },
    raiseEndpointErrors: !0
  })
}