"use strict";
E.r(_), E.d(_, {
  default: function() {
    return t
  }
}), E("222007");
var t, o = E("907002");

function n(e, _) {
  let E = e.findIndex(_);
  return E < 0 ? e.length : E
}
t = class extends o.FrameLoop {
  setRAF(e, _) {
    0 !== this.id && (this._cancelAnimationFrame(this.id), this.id = 0), this._requestAnimationFrame = e, this._cancelAnimationFrame = _, this.loop()
  }
  constructor(...e) {
    super(...e), this._requestAnimationFrame = e => requestAnimationFrame(e), this._cancelAnimationFrame = e => cancelAnimationFrame(e), this.writing = !1, this.id = 0, this.lastTime = 0, this.animations = [], this.priority = 0, this.startQueue = new Set, this.frameQueue = new Set, this.writeQueue = new Set, this.timeoutQueue = [], this.addAnimation = e => {
      let _ = this.animations.indexOf(e);
      _ < 0 && (_ = this.animations.findIndex(_ => _.priority > e.priority), this.animations.splice(0 != ~_ ? _ : this.animations.length, 0, e))
    }, this.loop = () => {
      if (0 !== this.lastTime) try {
        this.advance()
      } catch (e) {
        console.error(e)
      } finally {
        this.animations.length > 0 || this.startQueue.size > 0 || this.frameQueue.size > 0 || this.writeQueue.size > 0 || this.timeoutQueue.length > 0 ? this.id = this._requestAnimationFrame(this.loop) : (this.lastTime = 0, this.id = 0)
      }
    }, this.startLoop = () => {
      !(this.lastTime > 0) && (this.lastTime = o.Globals.now(), this.id = this._requestAnimationFrame(this.loop))
    }, this.advance = () => {
      let e = o.Globals.now();
      if (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()), this.timeoutQueue.length > 0 && o.Globals.batchedUpdates(() => {
          let _ = n(this.timeoutQueue, _ => _.time > e);
          this.timeoutQueue.splice(0, _).forEach(e => e.handler())
        }), e > this.lastTime) {
        let _ = Math.min(64, e - this.lastTime);
        this.lastTime = e, o.Globals.batchedUpdates(() => {
          this.animations.length > 0 && (o.Globals.willAdvance(this.animations), this.animations = this.animations.filter(e => (this.priority = e.priority, !e.idle && e.advance(_), !e.idle)), this.priority = 0), this.frameQueue.size > 0 && (this.frameQueue.forEach(_ => _(e)), this.frameQueue.clear()), this.writeQueue.size > 0 && (this.writing = !0, this.writeQueue.forEach(_ => _(e)), this.writeQueue.clear(), this.writing = !1)
        })
      }
    }, this.start = e => {
      this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop())
    }, this.setTimeout = (e, _) => {
      let E = o.Globals.now() + _,
        t = () => {
          let e = this.timeoutQueue.findIndex(e => e.cancel === t);
          e >= 0 && this.timeoutQueue.splice(e, 1)
        },
        r = n(this.timeoutQueue, e => e.time > E),
        i = {
          time: E,
          handler: e,
          cancel: t
        };
      return this.timeoutQueue.splice(r, 0, i), this.startLoop(), i
    }, this.onFrame = e => {
      this.frameQueue.add(e), this.startLoop()
    }, this.onWrite = e => {
      this.writing ? e(this.lastTime) : this.writeQueue.add(e)
    }
  }
}