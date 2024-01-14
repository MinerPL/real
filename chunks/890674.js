"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var n = l("872717"),
  a = l("49111"),
  s = {
    updateNote(e, t) {
      n.default.put({
        url: a.Endpoints.NOTE(e),
        body: {
          note: t
        },
        oldFormErrors: !0
      })
    }
  }