"use strict";
let r;
n.r(e), n.d(e, {
  CONSOLE_LEVELS: function() {
    return a
  },
  consoleSandbox: function() {
    return s
  },
  logger: function() {
    return r
  }
}), n("222007");
var i = n("232945");
let a = ["debug", "info", "warn", "error", "log", "assert", "trace"];

function s(t) {
  if (!("console" in i.GLOBAL_OBJ)) return t();
  let e = i.GLOBAL_OBJ.console,
    n = {};
  a.forEach(t => {
    let r = e[t] && e[t].__sentry_original__;
    t in e && r && (n[t] = e[t], e[t] = r)
  });
  try {
    return t()
  } finally {
    Object.keys(n).forEach(t => {
      e[t] = n[t]
    })
  }
}

function o() {
  let t = !1,
    e = {
      enable: () => {
        t = !0
      },
      disable: () => {
        t = !1
      }
    };
  return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? a.forEach(n => {
    e[n] = function() {
      for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
      t && s(() => {
        i.GLOBAL_OBJ.console[n]("".concat("Sentry Logger ", "[").concat(n, "]:"), ...r)
      })
    }
  }) : a.forEach(t => {
    e[t] = () => void 0
  }), e
}
r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, i.getGlobalSingleton)("logger", o) : o()