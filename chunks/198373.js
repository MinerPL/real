"use strict";
n.r(e), n.d(e, {
  applyAggregateErrorsToEvent: function() {
    return a
  }
}), n("222007"), n("70102");
var r = n("106145"),
  i = n("768538");

function a(t, e) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250,
    a = arguments.length > 3 ? arguments[3] : void 0,
    c = arguments.length > 4 ? arguments[4] : void 0,
    l = arguments.length > 5 ? arguments[5] : void 0,
    u = arguments.length > 6 ? arguments[6] : void 0;
  if (!l.exception || !l.exception.values || !u || !(0, r.isInstanceOf)(u.originalException, Error)) return;
  let d = l.exception.values.length > 0 ? l.exception.values[l.exception.values.length - 1] : void 0;
  d && (l.exception.values = function(t, e) {
    return t.map(t => (t.value && (t.value = (0, i.truncate)(t.value, e)), t))
  }(function t(e, n, i, a, c, l, u, d) {
    if (l.length >= i + 1) return l;
    let h = [...l];
    if ((0, r.isInstanceOf)(a[c], Error)) {
      s(u, d);
      let r = e(n, a[c]),
        l = h.length;
      o(r, c, l, d), h = t(e, n, i, a[c], c, [r, ...h], r, l)
    }
    return Array.isArray(a.errors) && a.errors.forEach((a, l) => {
      if ((0, r.isInstanceOf)(a, Error)) {
        s(u, d);
        let r = e(n, a),
          f = h.length;
        o(r, "errors[".concat(l, "]"), f, d), h = t(e, n, i, a, c, [r, ...h], r, f)
      }
    }), h
  }(t, e, c, u.originalException, a, l.exception.values, d, 0), n))
}

function s(t, e) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    is_exception_group: !0,
    exception_id: e
  }
}

function o(t, e, n, r) {
  t.mechanism = t.mechanism || {
    type: "generic",
    handled: !0
  }, t.mechanism = {
    ...t.mechanism,
    type: "chained",
    source: e,
    exception_id: n,
    parent_id: r
  }
}