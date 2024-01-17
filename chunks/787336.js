"use strict";
n.r(t), n.d(t, {
  isAttachmentUrl: function() {
    return d
  },
  removeSignedUrlParameters: function() {
    return f
  },
  messageHasExpiredAttachmentUrl: function() {
    return g
  },
  maybeRefreshAttachmentUrl: function() {
    return y
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var r, i = n("872717"),
  a = n("718517"),
  l = n("519841"),
  s = n("49111");
let o = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
  c = new Set(["/attachments/", "/ephemeral-attachments/"]),
  u = 1 * a.default.Millis.HOUR;

function d(e) {
  return o.has(e.hostname) && Array.from(c).some(t => e.pathname.startsWith(t))
}

function f(e) {
  for (let t of (e = new URL(e), ["ex", "is", "hm"])) e.searchParams.delete(t);
  return e
}

function h(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : n * a.default.Millis.SECOND
  }(e);
  return null == t || t <= Date.now() + u
}

function v(e) {
  let t = new URL(e.url);
  return h(t)
}

function p(e) {
  if (null == e) return !1;
  let t = new URL(e.url);
  return !!d(t) && h(t)
}

function m(e) {
  var t;
  return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video)
}

function g(e) {
  return e.attachments.some(v) || e.embeds.some(m)
}
async function w(e) {
  let t = await i.default.post({
    url: s.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function y(e) {
  if (!l.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = new URL(e);
  if (!h(t)) return e;
  let n = await w(e);
  return null != n ? n : e
}