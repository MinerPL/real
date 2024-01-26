"use strict";
n.r(t), n.d(t, {
  tryLoadAsync: function() {
    return o
  },
  tryLoadOrResetCacheGateway: function() {
    return l
  },
  tryLoadOrResetCacheGatewayAsync: function() {
    return u
  }
});
var i = n("913144"),
  s = n("605250"),
  r = n("723939");
let a = new s.default("TryLoad");
async function o(e) {
  try {
    return await e()
  } catch (e) {
    return a.log("database load failed.", e), null
  }
}

function l(e, t) {
  try {
    return t()
  } catch (t) {
    return a.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), r.default.replaceDisableAllDatabases("tryLoadOrResetCacheGateway (".concat(e, ")")), i.default.dispatch({
      type: "RESET_CONNECTION",
      badCache: !0
    }), null
  }
}
async function u(e, t) {
  try {
    return await t()
  } catch (t) {
    return a.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), r.default.replaceDisableAllDatabases("tryLoadOrResetCacheGateway (".concat(e, ")")), i.default.dispatch({
      type: "RESET_CONNECTION",
      badCache: !0
    }), null
  }
}