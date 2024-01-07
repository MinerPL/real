            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("446674"),
                a = s("271938"),
                l = s("880731"),
                i = s("943551");

            function r(e, t) {
                return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier) && !0
            }

            function o(e) {
                let t = (0, n.useStateFromStores)([l.default], () => !!l.default.isEnabled() && l.default.combosEnabled);
                return (0, n.useStateFromStores)([i.default, a.default], () => t ? i.default.getUserCombo(a.default.getId(), e) : void 0, [e, t], r)
            }