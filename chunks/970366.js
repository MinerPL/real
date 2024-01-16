"use strict";
n.r(t), n.d(t, {
  trackAppUIViewed: function() {
    return u
  }
}), n("222007");
var i = n("748820"),
  r = n("49671"),
  s = n("599110"),
  l = n("49111");
let a = new class e {
  trackEvent(e, t) {
    let n = Date.now();
    requestIdleCallback(() => {
      s.default.track(e, {
        ... function() {
          var e, t, n;
          let i = "--campaign-id=",
            s = null !== (n = null === r.default || void 0 === r.default ? void 0 : null === (t = r.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
          for (let e of s)
            if (e.startsWith(i)) return {
              referrer: e.substr(i.length)
            };
          return {}
        }(),
        ... function() {
          let e = !1,
            t = {
              total_compressed_byte_size: 0,
              total_uncompressed_byte_size: 0,
              total_transfer_byte_size: 0,
              js_compressed_byte_size: 0,
              js_uncompressed_byte_size: 0,
              js_transfer_byte_size: 0,
              css_compressed_byte_size: 0,
              css_uncompressed_byte_size: 0,
              css_transfer_byte_size: 0
            };
          return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
            let i = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
              r = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
              s = n.transferSize;
            null != r && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += r, null != s && (t.total_uncompressed_byte_size += s), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += r, null != s && (t.js_uncompressed_byte_size += s)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += r, null != s && (t.css_uncompressed_byte_size += s))))
          }), e ? t : {}
        }(),
        load_id: this.loadId,
        screen_name: t,
        duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
      })
    })
  }
  trackAppUIViewed(e) {
    !this.appUIViewed && (this.trackEvent(l.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
  }
  constructor() {
    this.loadId = (0, i.v4)(), this.appUIViewed = !1
  }
};

function u(e) {
  a.trackAppUIViewed(e)
}