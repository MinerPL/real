"use strict";
n.r(t), n.d(t, {
  MAX_THUMBNAIL_COUNT: function() {
    return i
  },
  getEmbedPreviewImageUrl: function() {
    return l
  },
  getThumbnailImage: function() {
    return u
  }
});
var r = n("651693");
let i = 4;

function l(e) {
  var t, n;
  if (null == e) return;
  let {
    thumbnail: r,
    image: i
  } = e;
  return null != r ? null !== (t = r.proxy_url) && void 0 !== t ? t : r.url : null != i ? null !== (n = i.proxy_url) && void 0 !== n ? n : i.url : void 0
}

function u(e) {
  if (null == e) return;
  let {
    url: t,
    proxy_url: n
  } = e;
  if (null != t && null != n) {
    let e = (0, r.isVideoUrl)(t);
    return e ? "".concat(n, "?format=jpeg") : n
  }
  return t
}