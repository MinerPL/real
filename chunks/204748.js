"use strict";
n.r(t), n.d(t, {
  ManagerReferenceNodeContext: function() {
    return a
  },
  ManagerReferenceNodeSetterContext: function() {
    return o
  },
  Manager: function() {
    return i
  }
});
var r = n("884691"),
  a = r.createContext(),
  o = r.createContext();

function i(e) {
  var t = e.children,
    n = r.useState(null),
    i = n[0],
    s = n[1],
    u = r.useRef(!1);
  r.useEffect(function() {
    return function() {
      u.current = !0
    }
  }, []);
  var l = r.useCallback(function(e) {
    !u.current && s(e)
  }, []);
  return r.createElement(a.Provider, {
    value: i
  }, r.createElement(o.Provider, {
    value: l
  }, t))
}