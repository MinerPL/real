"use strict";
r.r(e), r.d(e, {
  default: function() {
    return i
  }
}), r("70102");
var n = r("884691");

function i() {
  let t = (0, n.createContext)(void 0);
  return {
    Provider: e => {
      let {
        initialStore: r,
        createStore: i,
        children: a
      } = e, s = (0, n.useRef)();
      return !s.current && (r && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => r)), s.current = i()), (0, n.createElement)(t.Provider, {
        value: s.current
      }, a)
    },
    useStore: function(e) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
        i = (0, n.useContext)(t);
      if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return i(e, r)
    },
    useStoreApi: () => {
      let e = (0, n.useContext)(t);
      if (!e) throw Error("Seems like you have not used zustand provider as an ancestor.");
      return (0, n.useMemo)(() => ({
        getState: e.getState,
        setState: e.setState,
        subscribe: e.subscribe,
        destroy: e.destroy
      }), [e])
    }
  }
}