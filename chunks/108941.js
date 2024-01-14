"use strict";
n.r(t), n.d(t, {
  useObservePreviews: function() {
    return i
  }
}), n("70102"), n("222007"), n("424973");
var r = n("884691"),
  o = n("476042");

function a(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
var i = function() {
  var e, t, n = (t = 2, function(e) {
      if (Array.isArray(e)) return e
    }(e = (0, r.useState)(!1)) || function(e, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          o = !1,
          a = void 0;
        try {
          for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
        } catch (e) {
          o = !0, a = e
        } finally {
          try {
            !r && null != s.return && s.return()
          } finally {
            if (o) throw a
          }
        }
        return n
      }
    }(e, t) || function(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
      }
    }(e, t) || function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()),
    i = n[0],
    s = n[1],
    c = (0, r.useContext)(o.DndContext);
  return (0, r.useEffect)(function() {
    var e, t = null == c ? void 0 : null === (e = c.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
      n = {
        backendChanged: function(e) {
          s(e.previewEnabled())
        }
      };
    return s(t.previewEnabled()), t.previewsList().register(n),
      function() {
        t.previewsList().unregister(n)
      }
  }, [c, c.dragDropManager]), i
}