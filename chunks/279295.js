"use strict";
E.r(_), E.d(_, {
  navigationStart: function() {
    return t
  },
  timeOrigin: function() {
    return o
  },
  performance: function() {
    return n
  }
}), E("356305");
try {
  null == Date.now && (Date.now = () => new Date().valueOf())
} catch (e) {}
let t = (() => {
    try {
      var e;
      return null !== (e = E.g.performance.timing.navigationStart) && void 0 !== e ? e : E.g.performance.now()
    } catch (e) {}
    return Date.now()
  })(),
  o = (() => {
    try {
      var e;
      return null !== (e = E.g.performance.timeOrigin) && void 0 !== e ? e : t
    } catch (e) {}
    return Date.now()
  })();
if (null == E.g.performance.timing) try {
  E.g.performance.timing = {
    navigationStart: t
  }
} catch (e) {}
if (null == E.g.performance.timeOrigin) try {
  E.g.performance.timeOrigin = o
} catch (e) {}
let n = E.g.performance