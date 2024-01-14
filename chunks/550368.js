"use strict";
n.r(t), n.d(t, {
  getAssetFromImageURL: function() {
    return T
  },
  getAssetImage: function() {
    return C
  },
  getAssets: function() {
    return S
  },
  fetchAssetIds: function() {
    return N
  },
  getAssetIds: function() {
    return O
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("627445"),
  i = n.n(s),
  r = n("917351"),
  a = n.n(r),
  o = n("872717"),
  d = n("913144"),
  u = n("605250"),
  l = n("407063"),
  f = n("49111");
let _ = "https://i.scdn.co/image/",
  c = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  g = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  m = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  h = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  v = {
    [f.PlatformTypes.SPOTIFY]: {
      deserialize: e => "".concat(_).concat(encodeURIComponent(e)),
      serialize: e => e.split(_)[1]
    },
    [f.PlatformTypes.TWITCH]: {
      deserialize: (e, t) => c(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(g);
        return null != t ? t[1] : null
      }
    },
    [f.PlatformTypes.YOUTUBE]: {
      deserialize: e => m(encodeURIComponent(e)),
      serialize: e => {
        let t = e.match(h);
        return null != t ? t[1] : null
      }
    },
    mp: {
      deserialize: e => (i(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
      serialize: e => e
    }
  },
  E = {},
  p = {};
async function y(e) {
  let {
    body: t
  } = await o.default.get({
    url: f.Endpoints.APPLICATION_ASSETS(e),
    oldFormErrors: !0
  });
  return E[e] = {
    assets: a.keyBy(t, "name"),
    lastUpdated: Date.now()
  }
}

function T(e, t) {
  let n = v[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function C(e, t, n) {
  if (null != t && t.includes(":")) {
    let [e, s] = t.split(":");
    if (e === f.PlatformTypes.TWITCH) {
      if (null == n || "number" == typeof n) {
        new(0, u.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
        return
      }
      return v[f.PlatformTypes.TWITCH].deserialize(s, n)
    }
    return Object.prototype.hasOwnProperty.call(v, e) ? v[e].deserialize(s) : void 0
  }
  if (null == e || null == t) return;
  let s = "number" == typeof n ? "?size=".concat((0, l.getBestMediaProxySize)(n)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(s) : "".concat(o.default.getAPIBaseURL(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(s)
}
async function S(e) {
  let {
    assets: t
  } = await

  function(e) {
    var t;
    let n = E[e];
    return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? y(e) : Promise.resolve(n)
  }(e);
  return t
}
async function I(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(p, e) && null == p[e]);
  if (0 === n.length) return;
  let {
    body: s
  } = await o.default.post({
    url: f.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
    body: {
      urls: n
    },
    oldFormErrors: !0
  });
  for (let {
      url: e,
      external_asset_path: t
    }
    of s) p[e] = t
}

function A(e, t) {
  let n = 0,
    s = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  if (s.length > 0)
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (null == i) continue;
      let r = Object.prototype.hasOwnProperty.call(p, i) ? p[i] : void 0;
      null != r && (t[s] = T("mp", r), n++)
    }
  return n === e.length
}

function D(e, t, n, s) {
  let i = !1;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (null == a || null != t[r]) continue;
    let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
    if (!o) {
      if (null == s || s <= 0) {
        t[r] = null;
        continue
      }
      i = !0
    }
    t[r] = o.id
  }
  return i
}
async function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  d.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let s = [],
    i = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  i.length > 0 && await I(e, i);
  let r = A(t, s);
  if (r) return d.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), s;
  let a = await S(e),
    o = D(t, s, a, n);
  return o ? y(e).then(() => N(e, t, n - 1)) : (d.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), s)
}

function O(e, t) {
  var n;
  let s = [],
    i = A(t, s);
  if (i) return s;
  let r = null === (n = E[e]) || void 0 === n ? void 0 : n.assets;
  return null == r ? s : (D(t, s, r), s)
}