"use strict";
l.r(t), l.d(t, {
  acceptPurchaseTerms: function() {
    return s
  },
  acceptEULA: function() {
    return n
  }
});
var a = l("913144");

function s() {
  a.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
  })
}

function n(e) {
  a.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_EULA",
    eulaId: e
  })
}