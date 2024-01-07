            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("866227"),
                l = s.n(a),
                n = s("845579"),
                u = s("599110"),
                r = s("712246"),
                i = s("49111");

            function o(e, t, s, a) {
                let o = e.trim();
                if (o.length > 0 || null != t) {
                    var S;
                    n.CustomStatusSetting.updateSetting({
                        text: o.length > 0 ? o : "",
                        expiresAtMs: null != s ? String(l().add((0, r.default)(s), "ms").toDate().getTime()) : "0",
                        emojiId: null != t && null != t.id ? t.id : "0",
                        emojiName: null != t ? t.name : ""
                    }), u.default.track(i.AnalyticEvents.CUSTOM_STATUS_UPDATED, {
                        location: null != a ? a.location : null,
                        emoji_type: null == (S = t) ? null : null != S.id ? "custom" : "unicode",
                        text_len: o.length,
                        clear_after: null != s ? "".concat(s) : null
                    })
                } else n.CustomStatusSetting.updateSetting(void 0)
            }