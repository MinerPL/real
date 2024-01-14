"use strict";
n.r(t), n.d(t, {
  MediaSinkWantsLadder: function() {
    return r
  }
}), n("70102"), n("222007"), n("424973");
var i = n("353927");
class r {
  getMaxSinkValue(e) {
    if (e < 0) throw Error("getMaxSinkValue: Requested " + e);
    let t = this.orderedLadder[0].wantValue;
    for (let {
        pixelCount: n,
        wantValue: i
      }
      of this.orderedLadder) {
      if (n * e > this.pixelBudget) break;
      t = i
    }
    return t
  }
  getResolution(e) {
    let t = null;
    for (let n of this.orderedLadder)
      if (e >= n.wantValue) t = n;
      else break;
    return {
      width: (t = null != t ? t : this.orderedLadder[0]).width,
      height: t.height,
      budgetPortion: t.budgetPortion,
      mutedFramerate: t.mutedFramerate,
      framerate: t.framerate
    }
  }
  static calculateLadder(e) {
    let t = new Set([0, 4, 8, 10]),
      n = [];
    for (let i = 1; i < 4096; ++i) {
      let r = 16 * i / 9;
      if (t.has(r % 16) && t.has(i % 16)) {
        let t = r * i;
        n.push({
          pixelCount: t,
          width: r,
          height: i,
          budgetPortion: t / e,
          wantValue: 0
        })
      }
    }
    let s = {},
      a = 0,
      o = 100;
    for (let t = 1; t <= 25; ++t) {
      let l = 0,
        u = 0,
        c = 0;
      for (let i of n) {
        if (i.pixelCount * t > e) break;
        l = i.width, u = i.height, c = i.budgetPortion
      }
      if (a !== l) {
        let e = r.getMutedFramerate(o);
        s[o] = {
          width: l,
          height: u,
          budgetPortion: c,
          mutedFramerate: e,
          framerate: i.VIDEO_QUALITY_FRAMERATE
        }, o -= 10, a = l
      }
    }
    return s
  }
  static getMutedFramerate(e) {
    return e <= 20 ? i.VIDEO_QUALITY_FRAMERATE_MUTED_2 : i.VIDEO_QUALITY_FRAMERATE_MUTED
  }
  static calculateOrderedLadder(e) {
    let t = [],
      n = Object.keys(e).map(e => Number(e)).sort((e, t) => e - t);
    for (let i of n) {
      if (0 === i) continue;
      let n = e[i];
      t.push({
        pixelCount: n.width * n.height,
        wantValue: i,
        ...n
      })
    }
    return t
  }
  constructor(e = i.defaultVideoQualityOptions) {
    let {
      width: t,
      height: n
    } = e.videoBudget;
    if (t <= 0 || n <= 0) throw Error("Invalid argument");
    this.pixelBudget = t * n, this.ladder = r.calculateLadder(this.pixelBudget), this.orderedLadder = r.calculateOrderedLadder(this.ladder)
  }
}