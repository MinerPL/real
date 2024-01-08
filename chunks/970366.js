            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return u
                }
            }), n("222007");
            var i = n("748820"),
                s = n("49671"),
                r = n("599110"),
                l = n("49111");
            let a = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        r.default.track(e, {
                            ... function() {
                                var e, t, n;
                                let i = "--campaign-id=",
                                    r = null !== (n = null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== n ? n : [];
                                for (let e of r)
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
                                        s = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        r = n.transferSize;
                                    null != s && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += s, null != r && (t.total_uncompressed_byte_size += r), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += s, null != r && (t.js_uncompressed_byte_size += r)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += s, null != r && (t.css_uncompressed_byte_size += r))))
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