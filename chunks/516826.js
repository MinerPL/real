"use strict";
n.r(t), n.d(t, {
  FormContext: function() {
    return s
  },
  useFormContext: function() {
    return a
  },
  FormContextProvider: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691");
let s = r.createContext({
  titleId: void 0,
  errorId: void 0,
  error: void 0
});

function a() {
  return r.useContext(s)
}

function o(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, i.jsx)(s.Provider, {
    value: n,
    children: t
  })
}