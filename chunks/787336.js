"use strict";
n.r(t), n.d(t, {
  isAttachmentUrl: function() {
    return c
  },
  removeSignedUrlParameters: function() {
    return u
  },
  messageHasExpiredAttachmentUrl: function() {
    return p
  },
  maybeRefreshAttachmentUrl: function() {
    return g
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var r, i = n("872717"),
  a = n("519841"),
  l = n("49111");
let s = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
  o = new Set(["/attachments/", "/ephemeral-attachments/"]);

function c(e) {
  return s.has(e.hostname) && Array.from(o).some(t => e.pathname.startsWith(t))
}

function u(e) {
  for (let t of (e = new URL(e), ["ex", "is", "hm"])) e.searchParams.delete(t);
  return e
}

function d(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : 1e3 * n
  }(e);
  return null == t || t <= Date.now() + 36e5
}

function f(e) {
  let t = new URL(e.url);
  return d(t)
}

function h(e) {
  if (null == e) return !1;
  let t = new URL(e.url);
  return !!c(t) && d(t)
}

function v(e) {
  var t;
  return h(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) || h(e.video)
}

function p(e) {
  return e.attachments.some(f) || e.embeds.some(v)
}
async function m(e) {
  let t = await i.default.post({
    url: l.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function g(e) {
  if (!a.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = new URL(e);
  if (!d(t)) return e;
  let n = await m(e);
  return null != n ? n : e
}