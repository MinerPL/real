"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("781738"), n("222007");
var r = n("446674"),
  l = n("713349"),
  a = n("913144"),
  i = n("240292"),
  u = n("49111"),
  s = n("782340");
let c = {
    MP4: "mp4",
    TINYMP4: "tinymp4",
    NANOMP4: "nanomp4",
    WEBM: "webm",
    TINYWEBM: "tinywebm",
    NANOWEBM: "nanowebm"
  },
  o = {
    FIXED_HEIGHT_MP4: "fixed_height.mp4",
    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
    FIXED_WIDTH_MP4: "fixed_width.mp4",
    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
    ORIGINAL_MP4: "original.mp4"
  },
  d = c.MP4,
  I = null,
  f = "",
  _ = "",
  E = [],
  F = [],
  S = [],
  p = [];

function G(e) {
  return e.replace(/^https?:/, "")
}
class h extends r.default.Store {
  getAnalyticsID() {
    return I
  }
  getQuery() {
    return f
  }
  getResultQuery() {
    return _
  }
  getResultItems() {
    return E
  }
  getTrendingCategories() {
    return F
  }
  getSelectedFormat() {
    return d
  }
  getSuggestions() {
    return S
  }
  getTrendingSearchTerms() {
    return p
  }
}
h.displayName = "GIFPickerViewStore";
var T = new h(a.default, {
  GIF_PICKER_INITIALIZE: function(e) {
    I = e.analyticsID
  },
  GIF_PICKER_QUERY: function(e) {
    "" === (f = e.query) && (_ = "", E = [], S = [])
  },
  GIF_PICKER_QUERY_SUCCESS: function(e) {
    if (null != e.query && f === _) return !1;
    null != e.query && (_ = e.query), E = e.items.map(e => {
      let {
        width: t,
        height: n,
        src: r,
        gif_src: a,
        url: i,
        id: u
      } = e;
      return {
        width: t,
        height: n,
        src: G(r),
        gifSrc: G(a),
        url: i,
        id: u,
        format: ! function(e) {
          switch (e) {
            case o.FIXED_HEIGHT_MP4:
            case o.FIXED_HEIGHT_SMALL_MP4:
            case o.FIXED_WIDTH_MP4:
            case o.FIXED_WIDTH_SMALL_MP4:
            case o.DOWNSIZED_SMALL_MP4:
            case o.ORIGINAL_MP4:
            case c.MP4:
            case c.TINYMP4:
            case c.NANOMP4:
            case c.WEBM:
            case c.TINYWEBM:
            case c.NANOWEBM:
              return !0;
            default:
              return !1
          }
        }(d) ? l.GIFType.IMAGE : l.GIFType.VIDEO
      }
    })
  },
  GIF_PICKER_QUERY_FAILURE: function(e) {
    let {
      query: t
    } = e;
    if (null == t) return !1;
    _ = t, E = []
  },
  GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
    let t = e.trendingCategories,
      n = null != e.trendingGIFPreview ? [{
        type: u.GIFPickerResultTypes.TRENDING_GIFS,
        icon: i.default,
        name: s.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
        src: G(e.trendingGIFPreview.src),
        format: l.GIFType.IMAGE
      }] : [];
    F = [...n, ...t.map(e => ({
      ...e,
      src: G(e.src),
      type: u.GIFPickerResultTypes.TRENDING_CATEGORY,
      format: l.GIFType.VIDEO
    }))]
  },
  GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    S = t
  },
  GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
    let {
      items: t
    } = e;
    p = t
  }
})