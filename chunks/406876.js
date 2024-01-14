"use strict";
s.r(t), s.d(t, {
  useEditStateContext: function() {
    return i
  },
  EditStateContextProvider: function() {
    return r
  }
}), s("70102");
var a = s("37983"),
  n = s("884691");
let l = n.createContext(void 0);

function i() {
  let e = n.useContext(l);
  if (null == e) throw Error("No edit state; are you missing an <EditStateContextProvider />?");
  return e
}

function r(e) {
  let {
    children: t,
    ...s
  } = e;
  return (0, a.jsx)(l.Provider, {
    value: s,
    children: t
  })
}