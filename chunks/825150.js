"use strict";
n.r(t), n.d(t, {
  pickWelcomeSticker: function() {
    return u
  },
  handleWelcomeCtaClicked: function() {
    return d
  }
});
var s = n("819689"),
  l = n("697218"),
  a = n("599110"),
  i = n("299039"),
  r = n("417256"),
  o = n("49111");
let u = e => {
    var t;
    let n = null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
      s = null != n ? i.default.extractTimestamp(n) : 0,
      a = (s + i.default.extractTimestamp(e)) % r.WELCOME_STICKERS.length;
    return r.WELCOME_STICKERS[a]
  },
  d = (e, t, n) => {
    var i;
    s.default.sendGreetMessage(e.id, n, s.default.getSendMessageOptionsForReply({
      channel: e,
      message: t,
      shouldMention: !0,
      showMentionToggle: !0
    })), a.default.track(o.AnalyticEvents.WELCOME_CTA_CLICKED, {
      is_reply: !0,
      sticker_id: n,
      target_user: t.author.id,
      sender: null === (i = l.default.getCurrentUser()) || void 0 === i ? void 0 : i.id
    })
  }