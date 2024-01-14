"use strict";
n("70102"), n("424973"), n("843762"), n("781738");
var i = n("133331").forEach;
e.exports = function(e) {
  var t = (e = e || {}).reporter,
    n = e.batchProcessor,
    o = e.stateHandler.getState;
  e.stateHandler.hasState;
  var r = e.idHandler;
  if (!n) throw Error("Missing required dependency: batchProcessor");
  if (!t) throw Error("Missing required dependency: reporter.");
  var a = function() {
      var e = document.createElement("div");
      e.style.cssText = c(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
      var t = document.createElement("div");
      t.style.cssText = c(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
      var n = 500 - t.clientWidth,
        i = 500 - t.clientHeight;
      return document.body.removeChild(t), {
        width: n,
        height: i
      }
    }(),
    s = "erd_scroll_detection_container";

  function l(e) {
    (function(e, t, n) {
      if (!e.getElementById(t)) {
        var i, o, r, a = n + "_animation",
          s = "/* Created by the element-resize-detector library. */\n";
        s += "." + n + " > div::-webkit-scrollbar { " + c(["display: none"]) + " }\n\n" + ("." + n + "_animation_active { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + a, "animation-name: " + a]) + " }\n") + ("@-webkit-keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n") + ("@keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }"), i = s, o = o || function(t) {
          e.head.appendChild(t)
        }, (r = e.createElement("style")).innerHTML = i, r.id = t, o(r)
      }
    })(e, "erd_scroll_detection_scrollbar_style", s)
  }

  function c(t) {
    var n = e.important ? " !important; " : "; ";
    return (t.join(n) + n).trim()
  }
  l(window.document);

  function d(e, n, i) {
    if (e.addEventListener) e.addEventListener(n, i);
    else {
      if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
      e.attachEvent("on" + n, i)
    }
  }

  function u(e, n, i) {
    if (e.removeEventListener) e.removeEventListener(n, i);
    else {
      if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
      e.detachEvent("on" + n, i)
    }
  }

  function f(e) {
    return o(e).container.childNodes[0].childNodes[0].childNodes[0]
  }

  function h(e) {
    return o(e).container.childNodes[0].childNodes[0].childNodes[1]
  }
  return {
    makeDetectable: function(e, l, u) {
      var p, m, g;

      function v() {
        if (e.debug) {
          var n = Array.prototype.slice.call(arguments);
          if (n.unshift(r.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
          else
            for (var i = 0; i < n.length; i++) t.log(n[i])
        }
      }!u && (u = l, l = e, e = null), e = e || {};

      function b(e) {
        var t = o(e).container.childNodes[0],
          n = window.getComputedStyle(t);
        return !n.width || -1 === n.width.indexOf("px")
      }

      function y() {
        var e = window.getComputedStyle(l),
          t = {};
        return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
      }

      function w() {
        if (v("storeStyle invoked."), !o(l)) {
          v("Aborting because element has been uninstalled");
          return
        }
        var e = y();
        o(l).style = e
      }

      function E(e, t, n) {
        o(e).lastWidth = t, o(e).lastHeight = n
      }

      function x() {
        return 2 * a.width + 1
      }

      function S() {
        return 2 * a.height + 1
      }

      function k(e) {
        return e + 10 + x()
      }

      function z(e) {
        return e + 10 + S()
      }

      function D(e, t, n) {
        var i = f(e),
          o = h(e),
          r = t + 10 + x(),
          a = n + 10 + S(),
          s = 2 * t + x(),
          l = 2 * n + S();
        i.scrollLeft = r, i.scrollTop = a, o.scrollLeft = s, o.scrollTop = l
      }

      function A() {
        var e = o(l).container;
        if (!e) {
          (e = document.createElement("div")).className = s, e.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(l).container = e, t = e, t.className += " " + s + "_animation_active", l.appendChild(e);
          var t, n = function() {
            o(l).onRendered && o(l).onRendered()
          };
          d(e, "animationstart", n), o(l).onAnimationStart = n
        }
        return e
      }

      function O() {
        if (v("Injecting elements"), !o(l)) {
          v("Aborting because element has been uninstalled");
          return
        }! function() {
          var n = o(l).style;
          if ("static" === n.position) {
            l.style.setProperty("position", "relative", e.important ? "important" : "");
            var i = function(e, t, n, i) {
              var o = n[i];
              if ("auto" !== o && "0" !== o.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0
            };
            i(t, l, n, "top"), i(t, l, n, "right"), i(t, l, n, "bottom"), i(t, l, n, "left")
          }
        }();
        var n, i, r, u, f = o(l).container;
        !f && (f = A());
        var h = a.width,
          p = a.height,
          m = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
        var g = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat((n = -(1 + h), i = -(1 + p), r = -p, ["left: " + (n = n ? n + "px" : "0"), "top: " + (i = i ? i + "px" : "0"), "right: " + (u = (u = -h) ? u + "px" : "0"), "bottom: " + (r = r ? r + "px" : "0")]))),
          b = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
          y = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
          w = c(["position: absolute", "left: 0", "top: 0"]),
          E = c(["position: absolute", "width: 200%", "height: 200%"]),
          x = document.createElement("div"),
          S = document.createElement("div"),
          k = document.createElement("div"),
          z = document.createElement("div"),
          D = document.createElement("div"),
          O = document.createElement("div");

        function T() {
          var e = o(l);
          e && e.onExpand ? e.onExpand() : v("Aborting expand scroll handler: element has been uninstalled")
        }

        function C() {
          var e = o(l);
          e && e.onShrink ? e.onShrink() : v("Aborting shrink scroll handler: element has been uninstalled")
        }
        x.dir = "ltr", x.style.cssText = m, x.className = s, S.className = s, S.style.cssText = g, k.style.cssText = b, z.style.cssText = w, D.style.cssText = y, O.style.cssText = E, k.appendChild(z), D.appendChild(O), S.appendChild(k), S.appendChild(D), x.appendChild(S), f.appendChild(x), d(k, "scroll", T), d(D, "scroll", C), o(l).onExpandScroll = T, o(l).onShrinkScroll = C
      }

      function T() {
        function a(t, n, i) {
          var o = f(t).childNodes[0],
            r = n + 10 + x(),
            a = i + 10 + S();
          o.style.setProperty("width", r + "px", e.important ? "important" : ""), o.style.setProperty("height", a + "px", e.important ? "important" : "")
        }

        function s(i) {
          var s = l.offsetWidth,
            d = l.offsetHeight,
            u = s !== o(l).lastWidth || d !== o(l).lastHeight;
          v("Storing current size", s, d), E(l, s, d), n.add(0, function() {
            if (u) {
              if (!o(l)) {
                v("Aborting because element has been uninstalled");
                return
              }
              if (!c()) {
                v("Aborting because element container has not been initialized");
                return
              }
              if (e.debug) {
                var n = l.offsetWidth,
                  i = l.offsetHeight;
                (n !== s || i !== d) && t.warn(r.get(l), "Scroll: Size changed before updating detector elements.")
              }
              a(l, s, d)
            }
          }), n.add(1, function() {
            if (!o(l)) {
              v("Aborting because element has been uninstalled");
              return
            }
            if (!c()) {
              v("Aborting because element container has not been initialized");
              return
            }
            D(l, s, d)
          }), u && i && n.add(2, function() {
            if (!o(l)) {
              v("Aborting because element has been uninstalled");
              return
            }
            if (!c()) {
              v("Aborting because element container has not been initialized");
              return
            }
            i()
          })
        }

        function c() {
          return !!o(l).container
        }

        function d() {
          v("notifyListenersIfNeeded invoked");
          var e = o(l);
          return void 0 === o(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? v("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? v("Not notifying: Size already notified") : void(v("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, i(o(l).listeners, function(e) {
            e(l)
          }))
        }

        function u() {
          if (v("Scroll detected."), b(l)) {
            v("Scroll event fired while unrendered. Ignoring...");
            return
          }
          s(d)
        }
        if (v("registerListenersAndPositionElements invoked."), !o(l)) {
          v("Aborting because element has been uninstalled");
          return
        }
        o(l).onRendered = function() {
          if (v("startanimation triggered."), b(l)) {
            v("Ignoring since element is still unrendered...");
            return
          }
          v("Element rendered.");
          var e = f(l),
            t = h(l);
          (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (v("Scrollbars out of sync. Updating detector elements..."), s(d))
        }, o(l).onExpand = u, o(l).onShrink = u;
        var p = o(l).style;
        a(l, p.width, p.height)
      }

      function C() {
        if (v("finalizeDomMutation invoked."), !o(l)) {
          v("Aborting because element has been uninstalled");
          return
        }
        var e = o(l).style;
        E(l, e.width, e.height), D(l, e.width, e.height)
      }

      function N() {
        u(l)
      }

      function j() {
        var e;
        v("Installing..."), o(l).listeners = [], e = y(), o(l).startSize = {
          width: e.width,
          height: e.height
        }, v("Element start size", o(l).startSize), n.add(0, w), n.add(1, O), n.add(2, T), n.add(3, C), n.add(4, N)
      }
      if (v("Making detectable..."), (g = (m = p = l).getRootNode && m.getRootNode().contains(m), (m === m.ownerDocument.body || m.ownerDocument.body.contains(m) || g) && null !== window.getComputedStyle(p)) ? 1 : 0) j();
      else v("Element is detached"), A(), v("Waiting until element is attached..."), o(l).onRendered = function() {
        v("Element is now attached"), j()
      }
    },
    addListener: function(e, t) {
      if (!o(e).listeners.push) throw Error("Cannot add listener to an element that is not detectable.");
      o(e).listeners.push(t)
    },
    uninstall: function(e) {
      var t = o(e);
      t && (t.onExpandScroll && u(f(e), "scroll", t.onExpandScroll), t.onShrinkScroll && u(h(e), "scroll", t.onShrinkScroll), t.onAnimationStart && u(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
    },
    initDocument: l
  }
}