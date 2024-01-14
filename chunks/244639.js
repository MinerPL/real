    "use strict";
    let n, r, s, a, o, l, u, h, c;
    i.r(t), i.d(t, {
      initialize: function() {
        return I
      },
      default: function() {
        return f
      }
    }), i("332822"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("70102");
    var f, d = i("627445"),
      m = i.n(d),
      v = i("739942");
    let p = 409600,
      I = (0, v.createQueuedAsyncInitializer)(async () => {
        let e = await i.el("227332").then(i.bind(i, "227332")),
          t = await e.default();
        s = t.cwrap("lottie_create", "number", ["string"]), a = t._lottie_destroy, o = t._lottie_draw_into_bgra, l = t._lottie_draw_into_rgba, u = t._lottie_frame_count, h = t._lottie_frame_rate, c = t._memory_create, n = t, r = c(p)
      });

    function g(e, t) {
      return new Uint8ClampedArray(n.HEAPU8.buffer, r, e * t * 4)
    }
    f = class {
      get fps() {
        return h(this.native)
      }
      get frames() {
        return u(this.native)
      }
      get_bgra(e, t, i) {
        return m(t <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), o(this.native, r, e, t, i), g(t, i)
      }
      get_rgba(e, t, i) {
        return m(t <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), l(this.native, r, e, t, i), g(t, i)
      }
      drop() {
        a(this.native)
      }
      constructor(e) {
        if (this.native = s(e), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
      }
    }