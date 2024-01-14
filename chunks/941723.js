"use strict";
n.r(t), n.d(t, {
  ANIMATION_TO_EMOJI_RATIO: function() {
    return u
  },
  getResizedAnimation: function() {
    return c
  },
  buildEffect: function() {
    return d
  }
}), n("781738");
var a = n("917351"),
  l = n("748820"),
  r = n("407063"),
  i = n("397485"),
  o = n("284679"),
  s = n("103475");
let u = 7.5,
  c = (0, a.memoize)((e, t, n, a) => new Promise(e => {
    let l = new Image;
    l.src = t, l.crossOrigin = "Anonymous", l.onload = () => {
      let t = 32 * (0, r.getDevicePixelRatio)(),
        i = JSON.stringify(n);
      if (null != a && (i = (0, s.replaceAnimationColors)(i, (0, o.hexToRgb)(a))), l.width === t && l.height === t || 0 === l.width && 0 === l.height) e(JSON.parse(i));
      else {
        let t = 128 / l.width * l.height;
        e(JSON.parse(i = (i = i.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, n, a) {
  let {
    emojiSize: r,
    key: o,
    messageId: s
  } = null != a ? a : {}, u = (0, i.getEffectUrl)(e, null != r ? 2 * r : void 0);
  return {
    channelId: n,
    messageId: s,
    emoji: e,
    animationId: (0, l.v4)(),
    url: u,
    key: o,
    color: t
  }
}