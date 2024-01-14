"use strict";
n.r(t), n.d(t, {
  messageHasExpiredAttachmentUrl: function() {
    return f
  },
  maybeRefreshAttachmentUrl: function() {
    return p
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var l, a = n("872717"),
  s = n("519841"),
  i = n("49111");
let r = new Set([window.GLOBAL_ENV.CDN_HOST, null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l ? void 0 : l.substring(2)]),
  o = new Set(["/attachments/", "/ephemeral-attachments/"]);

function u(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : 1e3 * n
  }(e);
  return null == t || t <= Date.now() + 36e5
}

function d(e) {
  let t = new URL(e.url);
  return u(t)
}

function c(e) {
  var t;
  if (null == e) return !1;
  let n = new URL(e.url);
  return t = n, !!(r.has(t.hostname) && Array.from(o).some(e => t.pathname.startsWith(e))) && u(n)
}

function m(e) {
  var t;
  return c(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(c)) || c(e.video)
}

function f(e) {
  return e.attachments.some(d) || e.embeds.some(m)
}
async function h(e) {
  let t = await a.default.post({
    url: i.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function p(e) {
  if (!s.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = new URL(e);
  if (!u(t)) return e;
  let n = await h(e);
  return null != n ? n : e
}