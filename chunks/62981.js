    "use strict";
    i.r(t), i.d(t, {
      default: function() {
        return n
      }
    }), i("854508");
    var n, r = i("627445"),
      s = i.n(r),
      a = i("429281");
    let o = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
    n = class {
      setState(e, t) {
        null != t && (!e && t !== this.currentFrame && this.draw(t), this.currentFrame = t), e && !this.animate && this.resumeAnimation(), this.animate = e, this.scheduleOrCancelTick()
      }
      setVisibility(e) {
        let t = this.visible;
        this.visible = e, this.visible && !t && this.resumeAnimation(), this.scheduleOrCancelTick()
      }
      resumeAnimation() {
        this.currentFrameTime = performance.now()
      }
      clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
      draw(e) {
        return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, e, this.canvas.width, this.canvas.height), !0)
      }
      drop() {
        this.animate = !1, this.scheduleOrCancelTick(), a.default.drop(this.key), this.animation = null, this.dropped = !0
      }
      scheduleOrCancelTick() {
        !this.dropped && (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
      }
      requestAnimationFrame(e) {
        null != e && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(e)), null != e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = requestAnimationFrame(e)), null == e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = null)
      }
      constructor({
        canvas: e,
        id: t,
        assetUrl: i,
        assetData: n,
        isVisible: r,
        shouldAnimate: l,
        onInitialDraw: u,
        onError: h
      }) {
        this.animation = null, this.onInitialAnimationTick = e => {
          this.requestAnimationFrameId = null;
          let t = performance.now();
          if ((t - e < 30 || o) && this.draw(0)) {
            var i;
            this.resumeAnimation(), null === (i = this.onInitialDraw) || void 0 === i || i.call(this), this.hasInitialFrame = !0
          }
          this.scheduleOrCancelTick()
        }, this.onAnimationTick = e => {
          this.requestAnimationFrameId = null;
          let t = performance.now(),
            i = (o ? t : e) - this.currentFrameTime,
            n = Math.floor(i / this.frameDuration);
          n > 0 && ((t - e < 12 || o) && (this.draw(this.currentFrame), this.currentFrame += n), this.currentFrameTime += n * this.frameDuration), this.scheduleOrCancelTick()
        };
        let c = e.getContext("2d");
        s(null != c, "couldn't get canvas 2d context."), this.canvas = e, this.canvasContext = c, this.animation = null, this.dropped = !1, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = l, this.visible = r, this.requestAnimationFrameId = null, this.hasInitialFrame = !1, this.onInitialDraw = u, this.onError = h, this.key = "".concat(t, ":").concat(e.width, ":").concat(e.height), a.default.create(this.key, e.width, e.height, i, n).then(e => {
          null != e && (this.dropped ? a.default.drop(this.key) : (this.animation = e, this.frameDuration = 1e3 / e.frameRate, this.scheduleOrCancelTick()))
        }).catch(e => {
          null == h || h()
        })
      }
    }