"use strict";
E.r(_), E.d(_, {
  statesWillNeverBeEqual: function() {
    return i
  },
  default: function() {
    return a
  },
  useStateFromStoresObject: function() {
    return I
  },
  useStateFromStoresArray: function() {
    return s
  }
}), E("70102"), E("222007");
var t = E("884691"),
  o = E("233736"),
  n = E("995113");

function r(e, _) {
  return e === _
}

function i(e, _) {
  return !1
}

function a(e, _, E) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
    {
      current: a
    } = (0, t.useRef)({
      stores: e,
      areStatesEqual: i,
      getStateFromStores: _,
      prevDeps: void 0,
      state: void 0
    }),
    I = a.state;
  if (null == E || !(0, o.areArraysShallowEqual)(E, a.prevDeps)) {
    let e = _();
    (null == I || !i(I, e)) && (I = e)
  }(0, t.useLayoutEffect)(() => {
    a.getStateFromStores = _, a.prevDeps = E, a.state = I
  });
  let [, s] = (0, t.useState)(null);
  return (0, t.useLayoutEffect)(() => {
    let _ = () => {
      let e = a.getStateFromStores();
      !i(a.state, e) && (a.state = e, s({}))
    };
    _();
    let E = new n.default(e, _);
    return E.attach("useStateFromStores"), () => E.detach()
  }, []), I
}

function I(e, _, E) {
  return a(e, _, E, o.default)
}

function s(e, _, E) {
  return a(e, _, E, o.areArraysShallowEqual)
}