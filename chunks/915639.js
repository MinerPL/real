"use strict";
A.r(N), A.d(N, {
  default: function() {
    return R
  }
});
var O = A("446674"),
  T = A("913144"),
  _ = A("318696"),
  E = A("374363");
let e = A("782340").default.getDefaultLocale();

function V() {
  var I, N;
  let A = null === (N = E.default.settings.localization) || void 0 === N ? void 0 : null === (I = N.locale) || void 0 === I ? void 0 : I.value;
  return null != A && "" !== A && A !== e && (e = A, _.setLocale(e), !0)
}
class G extends O.default.Store {
  initialize() {
    this.waitFor(E.default), V(), _.setLocale(e)
  }
  get locale() {
    return e
  }
}
G.displayName = "LocaleStore";
var R = new G(T.default, {
  OVERLAY_INITIALIZE: V,
  CONNECTION_OPEN: V,
  USER_SETTINGS_PROTO_UPDATE: V,
  USER_SETTINGS_LOCALE_OVERRIDE: function(I) {
    e = I.locale, _.setLocale(e)
  }
})