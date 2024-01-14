"use strict";
let l;
t.r(n), t.d(n, {
  clearVoiceChannelEffectForUser: function() {
    return _
  },
  default: function() {
    return y
  }
}), t("222007"), t("843762");
var u = t("917351"),
  i = t("446674"),
  o = t("819855"),
  a = t("913144"),
  d = t("397485"),
  r = t("99795");
let s = [],
  c = {},
  f = [],
  _ = e => {
    null != e && a.default.dispatch({
      type: "VOICE_CHANNEL_EFFECT_CLEAR",
      userId: e
    })
  },
  E = [],
  S = (0, u.debounce)(() => {
    let e = (0, d.getEffectAnnouncement)(f);
    o.AccessibilityAnnouncer.announce(e, "polite"), f = []
  }, 500);
class C extends i.default.Store {
  get recentlyUsedEmojis() {
    return s
  }
  get isOnCooldown() {
    return null != l && new Date < l
  }
  get effectCooldownEndTime() {
    return l
  }
  getEffectForUserId(e) {
    return c[e]
  }
}
C.displayName = "VoiceChannelEffectsStore";
var y = new C(a.default, {
  VOICE_CHANNEL_EFFECT_CLEAR: e => {
    let {
      userId: n
    } = e;
    null != c[n] && delete c[n]
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
    let {
      emoji: n
    } = e;
    null != n && (s.unshift(n), (s = (0, u.uniqBy)(s, "name")).length > r.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && s.pop())
  },
  VOICE_CHANNEL_EFFECT_SEND: e => {
    let {
      emoji: n,
      userId: t,
      animationType: l
    } = e;
    null != n && null != l && (c[t] = {
      emoji: n,
      sentAt: Date.now(),
      animationType: l
    }, f = [...f, {
      emojiName: n.name,
      userId: t
    }], S())
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
    let e = new Date;
    if ((E = [e, ...E].slice(0, 20)).length >= 20) {
      let n = E[E.length - 1],
        t = e.getTime() - n.getTime();
      t < 1e4 && (l = new Date(e.getTime() + 1e4 - t))
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
    let {
      cooldownEndsAtMs: n
    } = e;
    l = new Date(Date.now() + n)
  }
})