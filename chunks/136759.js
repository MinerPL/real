"use strict";
n.r(t), n.d(t, {
  persist: function() {
    return d
  }
}), n("222007");
Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
var i = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  a = (e, t, n) => t in e ? i(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  u = (e, t) => {
    for (var n in t || (t = {})) l.call(t, n) && a(e, n, t[n]);
    if (s)
      for (var n of s(t)) r.call(t, n) && a(e, n, t[n]);
    return e
  };
let o = e => t => {
    try {
      let n = e(t);
      if (n instanceof Promise) return n;
      return {
        then: e => o(e)(n),
        catch (e) {
          return this
        }
      }
    } catch (e) {
      return {
        then(e) {
          return this
        },
        catch: t => o(t)(e)
      }
    }
  },
  d = (e, t) => (n, i, s) => {
    let l, r, a = u({
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: e => e,
      version: 0,
      merge: (e, t) => u(u({}, t), e)
    }, t);
    (a.blacklist || a.whitelist) && console.warn("The ".concat(a.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
    let d = !1,
      c = new Set,
      h = new Set;
    try {
      l = a.getStorage()
    } catch (e) {}
    if (!l) return e(function() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      console.warn("[zustand persist middleware] Unable to update item '".concat(a.name, "', the given storage is currently unavailable.")), n(...t)
    }, i, s);
    !l.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(a.name, "' does not contain a 'removeItem' method, which will be required in v4."));
    let f = o(a.serialize),
      m = () => {
        let e;
        let t = a.partialize(u({}, i()));
        a.whitelist && Object.keys(t).forEach(e => {
          var n;
          (null == (n = a.whitelist) ? void 0 : n.includes(e)) || delete t[e]
        }), a.blacklist && a.blacklist.forEach(e => delete t[e]);
        let n = f({
          state: t,
          version: a.version
        }).then(e => l.setItem(a.name, e)).catch(t => {
          e = t
        });
        if (e) throw e;
        return n
      },
      p = s.setState;
    s.setState = (e, t) => {
      p(e, t), m()
    };
    let I = e(function() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        n(...t), m()
      }, i, s),
      E = () => {
        var e;
        if (!l) return;
        d = !1, c.forEach(e => e(i()));
        let t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, i())) || void 0;
        return o(l.getItem.bind(l))(a.name).then(e => {
          if (e) return a.deserialize(e)
        }).then(e => {
          if (e) {
            if ("number" != typeof e.version || e.version === a.version) return e.state;
            if (a.migrate) return a.migrate(e.state, e.version);
            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
          }
        }).then(e => {
          var t;
          return n(r = a.merge(e, null != (t = i()) ? t : I), !0), m()
        }).then(() => {
          null == t || t(r, void 0), d = !0, h.forEach(e => e(r))
        }).catch(e => {
          null == t || t(void 0, e)
        })
      };
    return s.persist = {
      setOptions: e => {
        a = u(u({}, a), e), e.getStorage && (l = e.getStorage())
      },
      clearStorage: () => {
        var e;
        null == (e = null == l ? void 0 : l.removeItem) || e.call(l, a.name)
      },
      rehydrate: () => E(),
      hasHydrated: () => d,
      onHydrate: e => (c.add(e), () => {
        c.delete(e)
      }),
      onFinishHydration: e => (h.add(e), () => {
        h.delete(e)
      })
    }, E(), r || I
  }