"use strict";
n.r(e), n.d(e, {
  initAndBind: function() {
    return a
  }
});
var r = n("103787"),
  i = n("369590");

function a(t, e) {
  !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.logger.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
  let n = (0, i.getCurrentHub)(),
    a = n.getScope();
  a.update(e.initialScope);
  let s = new t(e);
  n.bindClient(s)
}