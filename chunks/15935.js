"use strict";
n.r(t), n.d(t, {
  BurstReactionEffectSource: function() {
    return a
  },
  default: function() {
    return R
  }
}), n("222007");
var a, l, r = n("446674"),
  i = n("913144");
(l = a || (a = {})).HOVER = "HOVER", l.EXTERNAL = "EXTERNAL", l.RANDOM = "RANDOM";
let o = {},
  s = {},
  u = {},
  c = (e, t) => {
    let n = null != t.id ? t.id : t.name;
    return "".concat(e, ":").concat(n)
  },
  d = (e, t) => {
    var n;
    let a;
    switch (e) {
      case "HOVER":
        a = "HOVER";
        break;
      case "RANDOM":
        a = "RANDOM";
        break;
      default:
        a = "EXTERNAL"
    }
    let l = Object.entries(null !== (n = s[t]) && void 0 !== n ? n : {}),
      r = l.filter(e => {
        let [, t] = e;
        return t === a
      }),
      i = Object.fromEntries(r);
    if (Object.keys(i).length >= 5 && "EXTERNAL" === e) {
      for (let e in i)
        if (null == u[t] || null == u[t][e]) {
          delete s[t][e], delete i[e];
          break
        }
    }
    return Object.keys(i).length
  };
class f extends r.default.Store {
  getReactionPickerAnimation(e, t, n) {
    return o["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
  }
  getEffectForEmojiId(e, t, n) {
    var a;
    let l = c(t, n);
    return null === (a = s[e]) || void 0 === a ? void 0 : a[l]
  }
}
f.displayName = "BurstReactionEffectsStore";
var R = new f(i.default, {
  BURST_REACTION_EFFECT_CLEAR: e => {
    var t;
    let {
      channelId: n,
      messageId: a,
      emoji: l
    } = e, r = c(a, l);
    null === (t = s[n]) || void 0 === t || delete t[r]
  },
  BURST_REACTION_EFFECT_PLAY: e => {
    var t, n, a;
    let {
      channelId: l,
      messageId: r,
      emoji: i,
      key: o
    } = e, f = c(r, i);
    if (d(o, l) >= 5) return;
    let R = null !== (t = s[l]) && void 0 !== t ? t : {},
      m = null !== (n = u[l]) && void 0 !== n ? n : {},
      E = m[f],
      h = R[f];
    if ("HOVER" !== o || null == h) {
      "HOVER" === h && "EXTERNAL" === o && null != E && ("function" == typeof E.destroy && E.destroy(), null === (a = u[l]) || void 0 === a || delete a[f], h = void 0);
      null == h && (null != s[l] ? s[l][f] = o : s[l] = {
        [f]: o
      })
    }
  },
  BURST_REACTION_ANIMATION_ADD: e => {
    let {
      channelId: t,
      messageId: n,
      emoji: a,
      animation: l
    } = e, r = c(n, a);
    null == u[t] && (u[t] = {}), u[t][r] = l
  },
  BURST_REACTION_PICKER_ANIMATION_ADD: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: a,
      startPosition: l
    } = e;
    o["".concat(t, ":").concat(n, ":").concat(null != a ? a : "")] = l
  },
  BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
    let {
      messageId: t,
      emojiName: n,
      emojiId: a
    } = e;
    delete o["".concat(t, ":").concat(n, ":").concat(null != a ? a : "")]
  }
})