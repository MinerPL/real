"use strict";
n.r(e), n.d(e, {
  isDOMError: function() {
    return o
  },
  isDOMException: function() {
    return c
  },
  isElement: function() {
    return f
  },
  isError: function() {
    return i
  },
  isErrorEvent: function() {
    return s
  },
  isEvent: function() {
    return h
  },
  isInstanceOf: function() {
    return y
  },
  isNaN: function() {
    return m
  },
  isPlainObject: function() {
    return d
  },
  isPrimitive: function() {
    return u
  },
  isRegExp: function() {
    return p
  },
  isString: function() {
    return l
  },
  isSyntheticEvent: function() {
    return g
  },
  isThenable: function() {
    return _
  }
}), n("70102");
let r = Object.prototype.toString;

function i(t) {
  switch (r.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return y(t, Error)
  }
}

function a(t, e) {
  return r.call(t) === "[object ".concat(e, "]")
}

function s(t) {
  return a(t, "ErrorEvent")
}

function o(t) {
  return a(t, "DOMError")
}

function c(t) {
  return a(t, "DOMException")
}

function l(t) {
  return a(t, "String")
}

function u(t) {
  return null === t || "object" != typeof t && "function" != typeof t
}

function d(t) {
  return a(t, "Object")
}

function h(t) {
  return "undefined" != typeof Event && y(t, Event)
}

function f(t) {
  return "undefined" != typeof Element && y(t, Element)
}

function p(t) {
  return a(t, "RegExp")
}

function _(t) {
  return !!(t && t.then && "function" == typeof t.then)
}

function g(t) {
  return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function m(t) {
  return "number" == typeof t && t != t
}

function y(t, e) {
  try {
    return t instanceof e
  } catch (t) {
    return !1
  }
}