"use strict";
n("424973"), n("70102");
var i = n("133331").forEach,
  o = n("241075"),
  r = n("501174"),
  a = n("528049"),
  s = n("793274"),
  l = n("705116"),
  c = n("233193"),
  d = n("724079"),
  u = n("574394"),
  f = n("462913"),
  h = n("178010");

function p(e) {
  return Array.isArray(e) || void 0 !== e.length
}

function m(e) {
  if (Array.isArray(e)) return e;
  var t = [];
  return i(e, function(e) {
    t.push(e)
  }), t
}

function g(e) {
  return e && 1 === e.nodeType
}

function v(e, t, n) {
  var i = e[t];
  return null == i && void 0 !== n ? n : i
}
e.exports = function(e) {
  if ((e = e || {}).idHandler) t = {
    get: function(t) {
      return e.idHandler.get(t, !0)
    },
    set: e.idHandler.set
  };
  else {
    var t, n;
    t = s({
      idGenerator: a(),
      stateHandler: u
    })
  }
  var b = e.reporter;
  !b && (b = l(!1 === b));
  var y = v(e, "batchProcessor", d({
      reporter: b
    })),
    w = {};
  w.callOnAdd = !!v(e, "callOnAdd", !0), w.debug = !!v(e, "debug", !1);
  var E = r(t),
    x = o({
      stateHandler: u
    }),
    S = v(e, "strategy", "object"),
    k = v(e, "important", !1),
    z = {
      reporter: b,
      batchProcessor: y,
      stateHandler: u,
      idHandler: t,
      important: k
    };
  if ("scroll" === S && (c.isLegacyOpera() ? (b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), S = "object") : c.isIE(9) && (b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), S = "object")), "scroll" === S) n = h(z);
  else if ("object" === S) n = f(z);
  else throw Error("Invalid strategy name: " + S);
  var D = {};
  return {
    listenTo: function(e, o, r) {
      function a(e) {
        i(E.get(e), function(t) {
          t(e)
        })
      }

      function s(e, t, n) {
        E.add(t, n), e && n(t)
      }
      if (!r && (r = o, o = e, e = {}), !o) throw Error("At least one element required.");
      if (!r) throw Error("Listener required.");
      if (g(o)) o = [o];
      else {
        if (!p(o)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        o = m(o)
      }
      var l = 0,
        c = v(e, "callOnAdd", w.callOnAdd),
        d = v(e, "onReady", function() {}),
        f = v(e, "debug", w.debug);
      i(o, function(e) {
        !u.getState(e) && (u.initState(e), t.set(e));
        var h = t.get(e);
        if (f && b.log("Attaching listener to element", h, e), !x.isDetectable(e)) {
          if (f && b.log(h, "Not detectable."), x.isBusy(e)) {
            f && b.log(h, "System busy making it detectable"), s(c, e, r), D[h] = D[h] || [], D[h].push(function() {
              ++l === o.length && d()
            });
            return
          }
          return f && b.log(h, "Making detectable..."), x.markBusy(e, !0), n.makeDetectable({
            debug: f,
            important: k
          }, e, function(e) {
            if (f && b.log(h, "onElementDetectable"), u.getState(e)) {
              x.markAsDetectable(e), x.markBusy(e, !1), n.addListener(e, a), s(c, e, r);
              var t = u.getState(e);
              if (t && t.startSize) {
                var p = e.offsetWidth,
                  m = e.offsetHeight;
                (t.startSize.width !== p || t.startSize.height !== m) && a(e)
              }
              D[h] && i(D[h], function(e) {
                e()
              })
            } else f && b.log(h, "Element uninstalled before being detectable.");
            delete D[h], ++l === o.length && d()
          })
        }
        f && b.log(h, "Already detecable, adding listener."), s(c, e, r), l++
      }), l === o.length && d()
    },
    removeListener: E.removeListener,
    removeAllListeners: E.removeAllListeners,
    uninstall: function(e) {
      if (!e) return b.error("At least one element is required.");
      if (g(e)) e = [e];
      else {
        if (!p(e)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        e = m(e)
      }
      i(e, function(e) {
        E.removeAllListeners(e), n.uninstall(e), u.cleanState(e)
      })
    },
    initDocument: function(e) {
      n.initDocument && n.initDocument(e)
    }
  }
}