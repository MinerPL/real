"use strict";
let u;
t.r(n), t.d(n, {
  clearVoiceChannelEffectForUser: function() {
    return E
  },
  default: function() {
    return A
  }
}), t("222007"), t("843762");
var l = t("917351"),
  i = t("446674"),
  o = t("819855"),
  a = t("913144"),
  d = t("718517"),
  r = t("397485"),
  s = t("99795");
let c = [],
  _ = {},
  f = [],
  E = e => {
    null != e && a.default.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  S = [],
  C = 10 * d.default.Millis.SECOND,
  y = (0, l.debounce)(() => {
    let e = (0, r.getEffectAnnouncement)(f);
    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
  }, 500);
class m extends i.default.Store {
  get recentlyUsedEmojis() {
    return c
  }
  get isOnCooldown() {
    return null != u && new Date < u
  }
  get effectCooldownEndTime() {
    return u
  }
  getEffectForUserId(e) {
    return _[e]
  }
}
m.displayName = "VoiceChannelEffectsStore";
var A = new m(a.default, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: n
    } = e;
    null != _[n] && delete _[n]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: n
    } = e;
    null != n && (c.unshift(n), (c = (0, l.uniqBy)(c, "name")).length > s.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && c.pop())
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: n,
      userId: t,
      animationType: u
    } = e;
    null != n && null != u && (_[t] = {
      emoji: n,
      sentAt: Date.now(),
      animationType: u
    }, f = [...f, {
      emojiName: n.name,
      userId: t
    }], y())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((S = [e, ...S].slice(0, 20)).length >= 20) {
      let n = S[S.length - 1],
        t = e.getTime() - n.getTime();
      t < C && (u = new Date(e.getTime() + C - t))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: n
    } = e;
    u = new Date(Date.now() + n)
  }
})