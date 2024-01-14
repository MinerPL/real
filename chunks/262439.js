"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("808653"), n("424973"), n("222007");
var l = n("448105"),
  i = n.n(l),
  r = n("385976"),
  o = n("867805"),
  s = n("389480"),
  a = n("78581");
let u = [];

function d(e, t, n, l) {
  if (0 === e.length) return u;
  let d = t.reduce((e, t) => {
      for (let n of t.items) t.categoryInfo.type !== s.SoundboardSoundGridSectionType.FAVORITES && n.type === s.SoundboardSoundItemType.SOUND && e.push(n.sound);
      return e
    }, []),
    c = d.reduce((t, s) => (t[s.soundId] = function(e, t, n, l) {
      var s;
      let u = 0,
        d = t.name.toLocaleLowerCase(),
        c = null != t.emojiId ? r.default.getCustomEmojiById(t.emojiId) : null,
        f = null != t.emojiName ? o.default.convertSurrogateToName(t.emojiName, !1) : null,
        p = null != f ? o.default.getByName(f) : null,
        m = null != c ? [c.name] : null !== (s = null == p ? void 0 : p.names) && void 0 !== s ? s : [];
      return e === d && (u += 8), m.includes(e) && (u += 7), d.startsWith(e) && (u += 6), m.some(t => t.startsWith(e)) && (u += 5), d.endsWith(e) && (u += 4), m.some(t => t.endsWith(e)) && (u += 3), i(e, t.name.toLocaleLowerCase()) && (u += 2), m.some(t => i(e, t)) && (u += 1), u > 0 && (0, a.canUseSoundboardSound)(n, t, l) && (u += 100), u
    }(e.toLocaleLowerCase(), s, n, l), t), {}),
    f = d.filter(e => c[e.soundId] > 0).sort((e, t) => c[t.soundId] - c[e.soundId]);
  return f
}