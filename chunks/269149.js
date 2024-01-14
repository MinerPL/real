"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});

function l(e, t, n) {
  let {
    onChange: l
  } = e, i = !1, r = !1;
  return e.onChange = () => {
    if (i) {
      r = !0;
      return
    }
    i = !0;
    try {
      let e = 0;
      do {
        if (r = !1, e++ >= 5) break;
        null == t || t();
        try {
          l()
        } finally {
          null == n || n()
        }
      } while (r)
    } finally {
      i = !1
    }
  }, e
}