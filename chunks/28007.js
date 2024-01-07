            "use strict";
            n.r(t), n.d(t, {
                updatePoggermodeSettings: function() {
                    return d
                },
                updateCombo: function() {
                    return u
                },
                clearMessageCombo: function() {
                    return o
                },
                updateComboOnMessageSend: function() {
                    return c
                }
            });
            var a = n("913144"),
                l = n("271938"),
                s = n("880731"),
                i = n("943551"),
                r = n("767189");

            function d(e) {
                a.default.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                let t = {
                    ...s.default.getState(),
                    ...e
                };
                (0, r.default)(t)
            }

            function u(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    ...e
                })
            }

            function o(e) {
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        ...e,
                        displayed: !0
                    }
                })
            }

            function c(e, t) {
                var n;
                let s = l.default.getId(),
                    r = i.default.getUserCombo(s, e);
                null != r && a.default.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: r,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                let d = null != r && (null == r ? void 0 : r.value) > 0 ? (null !== (n = null == r ? void 0 : r.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
                a.default.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: s,
                    multiplier: d,
                    value: 0
                })
            }