"use strict";
let t;
E.r(_), E.d(_, {
  DispatchBand: function() {
    return n
  },
  default: function() {
    return N
  }
});
var o, n, r, i = E("446674"),
  a = E("120082"),
  I = E("95410"),
  s = E("303167"),
  T = E("9503");
(o = n || (n = {}))[o.Early = 0] = "Early", o[o.Database = 1] = "Database", o[o.Default = 2] = "Default", t = new a.ActionLogger({
  persist: null !== (r = I.default.get(T.STORAGE_KEY_LOG_DISPATCHES)) && void 0 !== r && r
});
let S = new i.Dispatcher(2, t, {
  addBreadcrumb: s.default
});
var N = S