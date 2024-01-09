            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("271938"),
                l = n("191542"),
                i = n("880731"),
                r = n("943551"),
                o = n("300586"),
                u = n("39141");

            function d(e) {
                let t = (0, o.default)(u.ShakeLocation.CHAT_INPUT),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.isEnabled({
                        shakeLocation: u.ShakeLocation.CHAT_INPUT
                    }));
                return (0, a.useStateFromStores)([l.default, r.default, s.default], () => n && l.default.isTyping(e, s.default.getId()) ? r.default.getUserComboShakeIntensity(s.default.getId(), e, t) : 0)
            }