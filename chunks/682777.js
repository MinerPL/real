"use strict";
n.r(e), n.d(e, {
  ALL_CATEGORY_ID: function() {
    return L
  },
  isAllCategory: function() {
    return I
  },
  getAllCategory: function() {
    return A
  },
  getCategoryIcon: function() {
    return x
  },
  getCollectionItemAssetUrl: function() {
    return R
  },
  redirectToLogin: function() {
    return T
  }
}), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("511434");
var r = n("447669"),
  i = n("769846"),
  c = n("407063"),
  o = n("393414"),
  l = n("316887"),
  a = n("675918"),
  s = n("564875"),
  u = n("863022"),
  d = n("794352"),
  f = n("855670"),
  h = n("356884"),
  C = n("315102"),
  v = n("49111"),
  p = n("782340");
let L = 0,
  {
    API_ENDPOINT: g,
    CDN_HOST: w
  } = window.GLOBAL_ENV;

function I(t) {
  return t.id === L
}

function A() {
  return {
    id: L,
    name: p.default.Messages.APP_DIRECTORY_ALL_CATEGORY
  }
}

function x(t) {
  switch (t.id) {
    case 0:
      return d.default;
    case 4:
      return f.default;
    case 5:
      return u.default;
    case 6:
      return l.default;
    case 8:
      break;
    case 9:
      return s.default;
    case 10:
      return h.default
  }
  return a.default
}

function R(t) {
  let {
    itemId: e,
    hash: n
  } = t, r = (0, c.getBestMediaProxySize)(parseFloat(i.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, c.getDevicePixelRatio)()).toString(), o = new URLSearchParams({
    size: r
  }).toString(), l = C.SUPPORTS_WEBP ? "webp" : "png";
  return null != w ? "".concat(location.protocol, "//").concat(w, "/app-assets/application-directory/collection-items/").concat(e, "/").concat(n, ".").concat(l, "?").concat(o) : "".concat(location.protocol).concat(g).concat(v.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, l), "?").concat(o)
}

function T() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = new URL(location.href);
  for (let n in t) {
    let r = t[n];
    e.searchParams.set(n, r)
  }
  let n = e.pathname + e.search,
    i = (0, r.getLoginPath)(n, !1);
  (0, o.transitionTo)(i)
}