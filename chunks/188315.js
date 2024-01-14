"use strict";
n.r(t), n.d(t, {
  MultiBackendImpl: function() {
    return x
  }
}), n("70102"), n("222007"), n("424973");
var r = n("952162");

function o(e, t, n) {
  (function(e, t) {
    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
  })(e, t), t.set(e, n)
}

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function i(e, t) {
  var n = c(e, t, "get");
  return function(e, t) {
    return t.get ? t.get.call(e) : t.value
  }(e, n)
}

function s(e, t, n) {
  var r = c(e, t, "set");
  return function(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
      if (!t.writable) throw TypeError("attempted to set read only private field");
      t.value = n
    }
  }(e, r, n), n
}

function c(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}
var l = new WeakMap,
  u = new WeakMap,
  d = new WeakMap,
  p = new WeakMap,
  f = new WeakMap,
  m = new WeakMap,
  h = new WeakMap,
  g = new WeakMap,
  v = new WeakMap,
  y = new WeakMap,
  b = new WeakMap;
class x {
  constructor(e, t, n) {
    if (o(this, l, {
        writable: !0,
        value: void 0
      }), o(this, u, {
        writable: !0,
        value: void 0
      }), o(this, d, {
        writable: !0,
        value: void 0
      }), o(this, p, {
        writable: !0,
        value: void 0
      }), o(this, f, {
        writable: !0,
        value: void 0
      }), o(this, m, {
        writable: !0,
        value: (e, t, n) => {
          var r, o;
          if (!n.backend) throw Error("You must specify a 'backend' property in your Backend entry: ".concat(JSON.stringify(n)));
          let a = n.backend(e, t, n.options),
            s = n.id,
            c = !n.id && a && a.constructor;
          if (c && (s = a.constructor.name), s) c && console.warn("Deprecation notice: You are using a pipeline which doesn't include backends' 'id'.\n        This might be unsupported in the future, please specify 'id' explicitely for every backend.");
          else throw Error("You must specify an 'id' property in your Backend entry: ".concat(JSON.stringify(n), "\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx"));
          if (i(this, d)[s]) throw Error("You must specify a unique 'id' property in your Backend entry:\n        ".concat(JSON.stringify(n), " (conflicts with: ").concat(JSON.stringify(i(this, d)[s]), ")"));
          return {
            id: s,
            instance: a,
            preview: null !== (r = n.preview) && void 0 !== r && r,
            transition: n.transition,
            skipDispatchOnTransition: null !== (o = n.skipDispatchOnTransition) && void 0 !== o && o
          }
        }
      }), a(this, "setup", () => {
        if ("undefined" != typeof window) {
          if (x.isSetUp) throw Error("Cannot have two MultiBackends at the same time.");
          x.isSetUp = !0, i(this, h).call(this, window), i(this, d)[i(this, l)].instance.setup()
        }
      }), a(this, "teardown", () => {
        "undefined" != typeof window && (x.isSetUp = !1, i(this, g).call(this, window), i(this, d)[i(this, l)].instance.teardown())
      }), a(this, "connectDragSource", (e, t, n) => i(this, b).call(this, "connectDragSource", e, t, n)), a(this, "connectDragPreview", (e, t, n) => i(this, b).call(this, "connectDragPreview", e, t, n)), a(this, "connectDropTarget", (e, t, n) => i(this, b).call(this, "connectDropTarget", e, t, n)), a(this, "profile", () => i(this, d)[i(this, l)].instance.profile()), a(this, "previewEnabled", () => i(this, d)[i(this, l)].preview), a(this, "previewsList", () => i(this, u)), a(this, "backendsList", () => i(this, p)), o(this, h, {
        writable: !0,
        value: e => {
          i(this, p).forEach(t => {
            t.transition && e.addEventListener(t.transition.event, i(this, v))
          })
        }
      }), o(this, g, {
        writable: !0,
        value: e => {
          i(this, p).forEach(t => {
            t.transition && e.removeEventListener(t.transition.event, i(this, v))
          })
        }
      }), o(this, v, {
        writable: !0,
        value: e => {
          let t = i(this, l);
          if (i(this, p).some(t => !!(t.id !== i(this, l) && t.transition && t.transition.check(e)) && (s(this, l, t.id), !0)), i(this, l) !== t) {
            var n;
            i(this, d)[t].instance.teardown(), Object.keys(i(this, f)).forEach(e => {
              let t = i(this, f)[e];
              t.unsubscribe(), t.unsubscribe = i(this, y).call(this, t.func, ...t.args)
            }), i(this, u).backendChanged(this);
            let r = i(this, d)[i(this, l)];
            if (r.instance.setup(), r.skipDispatchOnTransition) return;
            let o = e.constructor,
              a = new o(e.type, e);
            null === (n = e.target) || void 0 === n || n.dispatchEvent(a)
          }
        }
      }), o(this, y, {
        writable: !0,
        value: (e, t, n, r) => i(this, d)[i(this, l)].instance[e](t, n, r)
      }), o(this, b, {
        writable: !0,
        value: (e, t, n, r) => {
          let o = "".concat(e, "_").concat(t),
            a = i(this, y).call(this, e, t, n, r);
          return i(this, f)[o] = {
            func: e,
            args: [t, n, r],
            unsubscribe: a
          }, () => {
            i(this, f)[o].unsubscribe(), delete i(this, f)[o]
          }
        }
      }), !n || !n.backends || n.backends.length < 1) throw Error("You must specify at least one Backend, if you are coming from 2.x.x (or don't understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx");
    s(this, u, new r.PreviewListImpl), s(this, d, {}), s(this, p, []), n.backends.forEach(n => {
      let r = i(this, m).call(this, e, t, n);
      i(this, d)[r.id] = r, i(this, p).push(r)
    }), s(this, l, i(this, p)[0].id), s(this, f, {})
  }
}
a(x, "isSetUp", !1)