"use strict";
n.r(t), n.d(t, {
  LIST_ITEM_ID_ATTRIBUTE: function() {
    return i
  },
  LIST_ID_ATTRIBUTE: function() {
    return r
  },
  createListItemId: function() {
    return s
  },
  getItemId: function() {
    return a
  },
  createSelector: function() {
    return o
  },
  makeId: function() {
    return l
  },
  makeGridId: function() {
    return u
  },
  throttle: function() {
    return c
  },
  HandlerMemoizer: function() {
    return d
  }
}), n("222007");
let i = "data-list-item-id",
  r = "data-list-id";

function s(e, t) {
  return "".concat(e).concat("___").concat(t)
}

function a(e) {
  return e.split("___")[1]
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
  return "[".concat(t, '="').concat(e, '"]')
}

function l(e, t) {
  return "".concat(e, "-").concat(t)
}

function u(e, t, n) {
  return "".concat(e, "-").concat(t, "-").concat(n)
}

function c(e, t) {
  let n = !1;
  return function() {
    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    !n && (e(...r), n = !0, setTimeout(() => n = !1, t))
  }
}
class d {
  get(e) {
    let t = this.handlers.get(e);
    return null == t && (t = this.makeHandler(e), this.handlers.set(e, t)), t
  }
  clean() {
    delete this.handlers, this.handlers = new Map
  }
  constructor(e) {
    this.makeHandler = e, this.handlers = new Map, this.makeHandler = e
  }
}