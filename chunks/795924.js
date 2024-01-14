"use strict";
e.a(n, async function(r, i) {
  try {
    var u = e("738113"),
      c = r([u]),
      [u] = c.then ? (await c)() : c;
    await e.v(t, n.id, "6c50d545de671668.module.wasm", {
      "./index_bg.js": {
        __wbindgen_string_new: u.__wbindgen_string_new,
        __wbindgen_rethrow: u.__wbindgen_rethrow
      }
    }), i()
  } catch (n) {
    i(n)
  }
}, 1)