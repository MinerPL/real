"use strict";
n.r(t), n.d(t, {
  DndProvider: function() {
    return d
  }
}), n("70102"), n("222007"), n("424973");
var r = n("37983"),
  o = n("884691"),
  a = n("515769"),
  i = n("772110"),
  s = ["children"];

function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
var l = 0,
  u = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
  d = (0, o.memo)(function(e) {
    var t, n, d = e.children;
    var f = (n = 2, function(e) {
        if (Array.isArray(e)) return e
      }(t = function(e) {
        return "manager" in e ? [{
          dragDropManager: e.manager
        }, !1] : [function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p(),
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          return !t[u] && (t[u] = {
            dragDropManager: (0, a.createDragDropManager)(e, t, n, r)
          }), t[u]
        }(e.backend, e.context, e.options, e.debugMode), !e.context]
      }(function(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
          if (null == e) return {};
          var n, r, o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++) {
            if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
          }
        }
        return o
      }(e, s))) || function(e, t) {
        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != o) {
          var a = [],
            i = !0,
            s = !1;
          try {
            for (o = o.call(e); !(i = (n = o.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
          } catch (e) {
            s = !0, r = e
          } finally {
            try {
              !i && null != o.return && o.return()
            } finally {
              if (s) throw r
            }
          }
          return a
        }
      }(t, n) || function(e, t) {
        if (e) {
          if ("string" == typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }
      }(t, n) || function() {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()),
      m = f[0],
      h = f[1];
    return (0, o.useEffect)(function() {
      if (h) {
        var e = p();
        return ++l,
          function() {
            0 == --l && (e[u] = null)
          }
      }
    }, []), (0, r.jsx)(i.DndContext.Provider, Object.assign({
      value: m
    }, {
      children: d
    }), void 0)
  });

function p() {
  return void 0 !== n.g ? n.g : window
}