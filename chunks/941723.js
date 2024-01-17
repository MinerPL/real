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
var l = n("917351"),
  a = n("748820"),
  r = n("407063"),
  i = n("397485"),
  o = n("284679"),
  s = n("103475");
let u = 7.5,
  c = (0, l.memoize)((e, t, n, l) => new Promise(e => {
    let a = new Image;
    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
      let t = 32 * (0, r.getDevicePixelRatio)(),
        i = JSON.stringify(n);
      if (null != l && (i = (0, s.replaceAnimationColors)(i, (0, o.hexToRgb)(l))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(i));
      else {
        let t = 128 / a.width * a.height;
        e(JSON.parse(i = (i = i.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, n, l) {
  let {
    emojiSize: r,
    key: o,
    messageId: s
  } = null != l ? l : {}, u = (0, i.getEffectUrl)(e, null != r ? 2 * r : void 0);
  return {
    channelId: n,
    messageId: s,
    emoji: e,
    animationId: (0, a.v4)(),
    url: u,
    key: o,
    color: t
  }
}