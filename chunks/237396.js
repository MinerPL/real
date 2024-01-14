"use strict";
var n = r("808598"),
  i = null;

function o(t) {
  return "LTR" === t || "RTL" === t
}

function a(t) {
  return o(t) || n(!1), "LTR" === t ? "ltr" : "rtl"
}

function u(t) {
  i = t
}
t.exports = {
  NEUTRAL: "NEUTRAL",
  LTR: "LTR",
  RTL: "RTL",
  isStrong: o,
  getHTMLDir: a,
  getHTMLDirIfDifferent: function(t, e) {
    return o(t) || n(!1), o(e) || n(!1), t === e ? null : a(t)
  },
  setGlobalDir: u,
  initGlobalDir: function() {
    i = "LTR"
  },
  getGlobalDir: function() {
    return !i && this.initGlobalDir(), i || n(!1), i
  }
}