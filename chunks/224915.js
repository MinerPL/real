    "use strict";
    r.r(n), r("854508");
    var e = r("817295");
    r("129334");
    var o = r("75015");
    async function u(t, n, r, u, i) {
      try {
        let c = await (0, e.wasmCropGIF)(t, n, r, u, i);
        self.postMessage({
          type: o.MessageTypes.CROP_GIF_COMPLETE,
          result: c
        })
      } catch (t) {
        self.postMessage({
          type: o.MessageTypes.CROP_GIF_ERROR
        })
      }
    }
    self.addEventListener("message", t => {
      let {
        data: n
      } = t;
      if (n.type === o.MessageTypes.CROP_GIF_START) {
        let {
          gif: t,
          x: r,
          y: e,
          width: o,
          height: i
        } = n;
        u(t, r, e, o, i)
      }
    })