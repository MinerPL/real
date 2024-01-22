"use strict";
n.r(t), n.d(t, {
  getStoreListingLocation: function() {
    return C
  },
  getApplicationStoreListingLocation: function() {
    return A
  },
  getAssetURL: function() {
    return y
  },
  httpGetWithCountryCodeQuery: function() {
    return N
  },
  nativePlatformTypeToSKUOperatingSystem: function() {
    return R
  },
  skuOperatingSystemToText: function() {
    return O
  },
  getPrimarySKUForApplication: function() {
    return D
  },
  getSocialRecommendationReasons: function() {
    return b
  },
  getNonSocialRecommendationReasons: function() {
    return M
  }
}), n("424973"), n("462568"), n("222007"), n("70102"), n("702976");
var i = n("917351"),
  s = n.n(i),
  r = n("866227"),
  a = n.n(r),
  o = n("642852"),
  l = n.n(o),
  u = n("394846"),
  d = n("872717"),
  c = n("850068"),
  f = n("407063"),
  _ = n("160299"),
  h = n("357957"),
  g = n("521012"),
  m = n("560528"),
  E = n("568734"),
  p = n("449008"),
  v = n("773336"),
  S = n("49111"),
  T = n("782340");
l.shim();
let I = !u.isMobile && !u.isTablet && -1 !== (0, m.getChromeVersion)();

function C(e, t) {
  let {
    analyticsSource: n,
    analyticsProperties: i,
    storeListingId: s,
    slug: r,
    channelId: a,
    guildId: o
  } = t;
  return {
    pathname: null != a && null != o ? S.Routes.CHANNEL(o, a, e) : S.Routes.APPLICATION_STORE_LISTING_SKU(e, r),
    state: {
      analyticsSource: n,
      analyticsProperties: i
    },
    search: null != s ? "?store_listing_id=".concat(s) : ""
  }
}

function A(e, t) {
  let {
    analyticsSource: n,
    analyticsProperties: i,
    slug: s
  } = t;
  return {
    pathname: S.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, s),
    state: {
      analyticsSource: n,
      analyticsProperties: i
    }
  }
}

function y(e, t, n, i) {
  var s;
  let r;
  let a = window.GLOBAL_ENV.CDN_HOST;
  if (null == i) switch (t.mimeType || t.mime_type) {
    case "video/quicktime":
    case "video/mp4":
      i = "mp4";
      break;
    case "image/gif":
      i = "gif";
      break;
    default:
      i = "webp"
  }
  "webp" === i && !I && (i = "png");
  let o = "string" == typeof t ? t : t.id,
    l = (s = "https:", "https:");
  return r = null != a ? "".concat(l, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(i) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(S.Endpoints.STORE_ASSET(e, o, i)), null != n && (r += "?size=".concat((0, f.getBestMediaProxySize)(n * (0, f.getDevicePixelRatio)()))), r
}
async function N(e) {
  var t, n, i, s;
  let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (r) {
    let e = [];
    !h.default.hasFetchedPaymentSources && e.push(null !== (n = _.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, c.fetchPaymentSources)()), !_.default.ipCountryCodeLoaded && e.push((0, c.fetchIpCountryCode)()), e.push(new Promise(async e => {
      if (g.default.hasFetchedSubscriptions()) e();
      else if (_.default.isSubscriptionFetching) {
        let t = () => {
          _.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
        };
        t()
      } else await (0, c.fetchSubscriptions)(), e()
    })), await Promise.allSettled(e)
  }
  let a = h.default.getDefaultBillingCountryCode(),
    o = null !== (i = null === (t = h.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
    l = g.default.getPremiumTypeSubscription();
  null != l && null != l.paymentSourceId && (o = l.paymentSourceId), null === a && (a = null !== (s = _.default.ipCountryCode) && void 0 !== s ? s : null);
  let u = {};
  if (null != a && (u.country_code = a), null != o && (u.payment_source_id = o), null != a || null != o) {
    if ("string" == typeof e) {
      let t = {
        url: e,
        oldFormErrors: !0
      };
      e = t
    }
    if ("string" == typeof e.query) throw Error("string query not supported");
    e.query = {
      ...u,
      ...e.query
    }
  }
  return d.default.get(e)
}

function R(e) {
  switch (e) {
    case v.PlatformTypes.WINDOWS:
      return S.OperatingSystems.WINDOWS;
    case v.PlatformTypes.OSX:
      return S.OperatingSystems.MACOS;
    case v.PlatformTypes.LINUX:
      return S.OperatingSystems.LINUX;
    default:
      return null
  }
}

function O(e) {
  switch (e) {
    case S.OperatingSystems.WINDOWS:
      return T.default.Messages.WINDOWS;
    case S.OperatingSystems.MACOS:
      return T.default.Messages.MACOS;
    case S.OperatingSystems.LINUX:
      return T.default.Messages.LINUX
  }
  throw Error("Unknown operating system value: ".concat(e))
}

function D(e, t, n) {
  let i = t.getApplication(e);
  return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
}
let P = [];

function b(e, t, n, i, r) {
  let a = t.get(e);
  if (null == a) return P;
  let o = a.applicationId,
    l = [],
    u = [],
    d = function(e, t, n) {
      var i;
      let s = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
        r = Object.keys(s),
        a = r.map(e => {
          let n = t.getUser(e);
          return null == n ? null : {
            user: n,
            startTime: s[n.id].startedPlaying
          }
        }).filter(p.isNotNullish).sort((e, t) => t.startTime - e.startTime);
      return 0 === a.length ? null : {
        type: S.StoreRecommendationTypes.NOW_PLAYING,
        userInfo: a
      }
    }(o, n, i);
  null != d && (l.push(d), u = d.userInfo.map(e => {
    let {
      user: t
    } = e;
    return t.id
  }));
  let c = r.getStatisticsForApplication(o);
  if (null != c) {
    let e = c.map(e => e.user_id);
    if (s.difference(e, u).length > 0) {
      let e = function(e, t, n) {
        let i = n.getStatisticsForApplication(e);
        if (null == i) return null;
        let s = i.map(e => {
          let n = t.getUser(e.user_id);
          return null == n ? null : {
            user: n,
            endTime: Date.parse(e.last_played_at)
          }
        }).filter(p.isNotNullish).sort((e, t) => t.endTime - e.endTime);
        return 0 === s.length ? null : {
          type: S.StoreRecommendationTypes.EVER_PLAYED,
          userInfo: s
        }
      }(o, n, r);
      null != e && l.push(e)
    }
  }
  return l
}
let L = [];

function M(e, t, n) {
  let i = t.get(e),
    s = n.getForSKU(e);
  if (null == i || null == s) return L;
  let r = [];
  (0, E.hasFlag)(i.flags, S.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && r.push({
    type: S.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
  });
  let o = i.releaseDate;
  return null != o && 3 > a().diff(o, "months") && (i.accessType === S.SKUAccessTypes.EARLY_ACCESS ? r.push({
    type: S.StoreRecommendationTypes.EARLY_ACCESS,
    releaseDate: o
  }) : r.push({
    type: S.StoreRecommendationTypes.RECENT_RELEASE_DATE,
    releaseDate: o
  })), null != s.flavorText && r.push({
    type: S.StoreRecommendationTypes.FLAVOR_TEXT,
    flavorText: s.flavorText
  }), r
}