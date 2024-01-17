"use strict";
E.r(_), E.d(_, {
  setLogFn: function() {
    return r
  },
  default: function() {
    return t
  }
}), E("222007");
var t, o = E("14334");
let n = () => {};

function r(e) {
  n = e
}
t = class {
  constructor(e = "default") {
    var _ = this;
    this.logDangerously = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), o = 1; o < E; o++) t[o - 1] = arguments[o];
      n(_.name, "log", e, ...t)
    }, this.log = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) t[r - 1] = arguments[r];
      (0, o.checkLogForPII)(e, ...t), n(_.name, "log", e, ...t)
    }, this.verbose = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) t[r - 1] = arguments[r];
      (0, o.checkLogForPII)(e, ...t), n(_.name, "debug", e, ...t)
    }, this.info = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) t[r - 1] = arguments[r];
      (0, o.checkLogForPII)(e, ...t), n(_.name, "info", e, ...t)
    }, this.warn = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) t[r - 1] = arguments[r];
      (0, o.checkLogForPII)(e, ...t), n(_.name, "warn", e, ...t)
    }, this.error = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), r = 1; r < E; r++) t[r - 1] = arguments[r];
      (0, o.checkLogForPII)(e, ...t), n(_.name, "error", e, ...t)
    }, this.trace = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), o = 1; o < E; o++) t[o - 1] = arguments[o];
      n(_.name, "trace", e, ...t)
    }, this.time = (e, _) => {
      let E = Date.now(),
        t = _();
      return this.log(e, Date.now() - E), t
    }, this.fileOnly = function(e) {
      for (var E = arguments.length, t = Array(E > 1 ? E - 1 : 0), o = 1; o < E; o++) t[o - 1] = arguments[o];
      n(_.name, "file-only", e, ...t)
    }, this.name = e
  }
}