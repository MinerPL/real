"use strict";
A.r(N), A.d(N, {
  setLocaleHack: function() {
    return V
  },
  default: function() {
    return S
  }
});
var O = A("446674"),
  T = A("913144");
let _ = !1,
  E = null,
  e = null;

function V(I) {
  G({
    locale: I
  })
}

function G(I) {
  let {
    locale: N
  } = I;
  _ = !0, E = N
}
class R extends O.default.Store {
  isLoading() {
    return _
  }
  getError() {
    return e
  }
}
R.displayName = "I18nLoaderStore";
var S = new R(T.default, {
  I18N_LOAD_START: G,
  I18N_LOAD_SUCCESS: function(I) {
    let {
      locale: N
    } = I;
    N === E && (_ = !1, e = null, E = null)
  },
  I18N_LOAD_ERROR: function(I) {
    let {
      error: N,
      locale: A
    } = I;
    A === E && (_ = !1, e = null != N ? N : null, E = null)
  }
})