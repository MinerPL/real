    "use strict";
    var n;
    i.r(t), i.d(t, {
      default: function() {
        return n
      }
    }), i("222007"), i("70102");
    n = class {
      drawInto(e, t, i, n) {
        t %= this.frameCount, this.requireFrame(t);
        let [s, a, o, l] = r(t, this.frameWidth, this.frameHeight, this.cells);
        e.drawImage(this.canvas, s, a, o, l, 0, 0, i, n)
      }
      drop() {
        var e;
        null === (e = this.native) || void 0 === e || e.drop(), this.native = null
      }
      requireFrame(e) {
        null != this.native && (!this.renderedFrames.has(e) && (this.paint(e), this.renderedFrames.add(e)), this.renderedFrames.size === this.frameCount && this.drop())
      }
      paint(e) {
        if (null != this.native) {
          var t;
          let i = this.native.get_bgra(e, this.frameWidth, this.frameHeight),
            n = new ImageData(i, this.frameWidth, this.frameHeight),
            [s, a, o, l] = r(e, this.frameWidth, this.frameHeight, this.cells);
          null === (t = this.context) || void 0 === t || t.putImageData(n, s, a, 0, 0, o, l)
        }
      }
      constructor(e, t, i, n) {
        let [r, s, a] = function(e, t, i) {
          let n = Math.ceil(Math.sqrt(i));
          return [n, n * e, n * t]
        }(i, n, e.frames);
        if (this.key = t, this.canvas = function(e, t) {
            if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(e, t);
            let i = document.createElement("canvas");
            return i.width = e, i.height = t, i
          }(s, a), this.context = this.canvas.getContext("2d"), this.cells = r, this.native = e, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = n, this.frameRate = e.fps, this.frameCount = e.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
      }
    };

    function r(e, t, i, n) {
      return [Math.floor(e / n) * t, e % n * i, t, i]
    }