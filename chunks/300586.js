            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("471671"),
                l = n("880731");

            function i(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.isFocused());
                return (0, a.useStateFromStores)([l.default], () => l.default.isEnabled({
                    shakeLocation: e
                }) && t ? l.default.shakeIntensity : 0)
            }