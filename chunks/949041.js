"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("70102");
var i = n("884691");

function s() {
  let e = (0, i.createContext)(void 0);
  return {
    Provider: t => {
      let {
        initialStore: n,
        createStore: s,
        children: r
      } = t, l = (0, i.useRef)();
      return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !s && (s = () => n)), l.current = s()), (0, i.createElement)(e.Provider, {
        value: l.current
      }, r)
    },
    useStore: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        s = (0, i.useContext)(e);
      if (!s) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return s(t, n)
    },
    useStoreApi: () => {
      let t = (0, i.useContext)(e);
      if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, i.useMemo)(() => ({
        getState: t.getState,
        setState: t.setState,
        subscribe: t.subscribe,
        destroy: t.destroy
      }), [t])
    }
  }
}