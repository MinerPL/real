"use strict";
var i;
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("424973");
let r = 1 / 240;
i = class {
  to(e) {
    let {
      to: t,
      from: n,
      animate: i = !1,
      callback: r
    } = e;
    if (this.target = t, null != r && this.callbacks.push(r), null != n && (this.from = n), !i) {
      this.stop(t);
      return
    }
    return this.animating ? this : (this.start(), this)
  }
  cancel() {
    return this.stop(this.from), this
  }
  start() {
    var e, t;
    this.animating = !0, this.vel = 0, this.last = null, this.nodeWindow = this.getNodeWindow(), this.nextTick = null !== (t = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== t ? t : -1
  }
  getUpdates(e, t) {
    let n = -this.tension * (t - this.target),
      i = -this.friction * e,
      o = (n + i) / this.mass;
    return Math.abs(e += o * r) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)), {
      from: t += e * r,
      vel: e,
      accel: o
    }
  }
  stop(e) {
    var t;
    null === (t = this.nodeWindow) || void 0 === t || t.cancelAnimationFrame(this.nextTick), this.animating = !1, this.accumulator = 0, null != e && (this.target = this.from = e, this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach(e => e()), this.callbacks.length = 0)
  }
  constructor({
    callback: e,
    tension: t = 160,
    friction: n = 22,
    mass: i = 1,
    threshold: o = .001,
    clamp: s = !1,
    maxVelocity: l = 1 / 0,
    getNodeWindow: a = () => window
  }) {
    this.accumulator = 0, this.from = 0, this.target = 0, this.vel = 0, this.animating = !1, this.last = null, this.nextTick = -1, this.nodeWindow = null, this.callbacks = [], this.mergeTo = e => {
      let {
        to: t,
        callback: n
      } = e;
      !this.animating && (null != n && this.callbacks.push(n), this.stop(t));
      let i = t - this.from;
      this.from = t, this.target = this.target + i, this.callback(this.from, this.abort), null != n && n()
    }, this.abort = () => {
      this.animating = !1
    }, this.update = e => {
      var t, n, i, o;
      if (null == this.last) {
        this.last = e, this.nextTick = null !== (n = null === (t = this.nodeWindow) || void 0 === t ? void 0 : t.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1;
        return
      }
      for (this.accumulator = Math.min((e - this.last) / 1e3 + this.accumulator, 2); this.accumulator > r;) {
        this.accumulator -= r;
        let {
          vel: e,
          from: t,
          accel: n
        } = this.getUpdates(this.vel, this.from);
        if (this.vel = e, this.clamp && (t === this.target || t < this.target && this.from > this.target || t > this.target && this.from < this.target) || Math.abs(n * r) < this.threshold) {
          this.stop(this.target);
          return
        }
        this.from = t
      }
      let {
        from: s
      } = this;
      if (this.accumulator > 0) {
        let {
          from: e
        } = this.getUpdates(this.vel, s), t = (e - s) * (this.accumulator / r);
        s += t
      }
      this.callback(s, this.abort), this.animating && (this.last = e, this.nextTick = null !== (o = null === (i = this.nodeWindow) || void 0 === i ? void 0 : i.requestAnimationFrame(this.update)) && void 0 !== o ? o : -1)
    }, this.callback = e, this.from = 0, this.tension = t, this.friction = n, this.mass = i, this.maxVelocity = l, this.threshold = o, this.clamp = s, this.getNodeWindow = a
  }
}