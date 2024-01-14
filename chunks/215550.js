"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var n = i("37983"),
  l = i("884691"),
  s = i("917351"),
  a = i.n(s),
  r = i("77078"),
  o = i("867805"),
  u = i("993244"),
  c = i("315102"),
  d = i("958706"),
  f = i("593115");
let E = a.memoize(e => "".concat(e * d.EmojiSprites.NonDiversityPerRow, "px ").concat(e * Math.ceil(o.default.numNonDiversitySprites / d.EmojiSprites.NonDiversityPerRow), "px")),
  m = a.memoize(e => "".concat(e * d.EmojiSprites.DiversityPerRow, "px ").concat(e * Math.ceil(o.default.numDiversitySprites / d.EmojiSprites.DiversityPerRow), "px")),
  I = (e, t, n) => {
    let l, s, a;
    if (!e.useSpriteSheet) return;
    let r = null != e.index ? e.index : 0;
    e.hasDiversity ? (l = i("110126")("./images/spritesheet-".concat(t, "-").concat(n, ".png").replace("./images/", "./")), s = m(n), a = d.EmojiSprites.DiversityPerRow) : (l = i("996542")("./images/spritesheet-emoji-".concat(n, ".png").replace("./images/", "./")), s = E(n), a = d.EmojiSprites.NonDiversityPerRow);
    let o = -r % a * n,
      u = -Math.floor(r / a) * n;
    return {
      backgroundImage: "url('".concat(l, "')"),
      backgroundPosition: "".concat(o, "px ").concat(u, "px"),
      backgroundSize: s,
      height: n,
      width: n
    }
  },
  p = l.memo(function(e) {
    let {
      emoji: t,
      size: i,
      surrogateCodePoint: l,
      allowAnimatedEmoji: s,
      "aria-label": a
    } = e;
    if (!t.useSpriteSheet) {
      var o;
      let e = null == t.id ? t.url : c.default.getEmojiURL({
        id: t.id,
        animated: s && t.animated,
        size: 48
      });
      return null != e ? (0, n.jsx)(u.default, {
        "aria-label": a,
        src: e,
        size: i,
        alt: null !== (o = t.allNamesString) && void 0 !== o ? o : ""
      }) : null
    }
    return (0, n.jsx)("div", {
      className: f.emojiSpriteImage,
      style: I(t, l, i),
      children: (0, n.jsx)(r.HiddenVisually, {
        children: a
      })
    })
  });
var g = p