"use strict";
n.r(t), n.d(t, {
  useFavoriteGIFs: function() {
    return s
  },
  useSortedFavoriteGIFs: function() {
    return c
  },
  useIsFavoriteGIF: function() {
    return o
  }
});
var r = n("884691"),
  l = n("917351"),
  a = n.n(l),
  i = n("42507");
let u = {};

function s() {
  var e, t;
  let n = (0, i.useFrecencySettings)();
  return null !== (t = null === (e = n.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : u
}

function c() {
  let e = s();
  return r.useMemo(() => a(e).map((e, t) => ({
    ...e,
    url: t
  })).sortBy("order").reverse().value(), [e])
}

function o(e) {
  let t = s();
  return null != t[e]
}