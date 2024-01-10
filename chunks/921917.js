            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("866227"),
                l = a.n(s),
                n = a("845579"),
                u = a("599110"),
                r = a("712246"),
                i = a("49111");

            function o(e, t, a, s) {
                let o = e.trim();
                if (o.length > 0 || null != t) {
                    var S;
                    n.CustomStatusSetting.updateSetting({
                        text: o.length > 0 ? o : "",
                        expiresAtMs: null != a ? String(l().add((0, r.default)(a), "ms").toDate().getTime()) : "0",
                        emojiId: null != t && null != t.id ? t.id : "0",
                        emojiName: null != t ? t.name : ""
                    }), u.default.track(i.AnalyticEvents.CUSTOM_STATUS_UPDATED, {
                        location: null != s ? s.location : null,
                        emoji_type: null == (S = t) ? null : null != S.id ? "custom" : "unicode",
                        text_len: o.length,
                        clear_after: null != a ? "".concat(a) : null
                    })
                } else n.CustomStatusSetting.updateSetting(void 0)
            }