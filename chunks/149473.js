"use strict";

function r() {
  return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
}

function i() {
  return "npm"
}
n.r(e), n.d(e, {
  getSDKSource: function() {
    return i
  },
  isBrowserBundle: function() {
    return r
  }
})