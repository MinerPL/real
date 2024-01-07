            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("974667"),
                i = n("446674"),
                a = n("206230");

            function l() {
                return Promise.resolve()
            }

            function r(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
                return (0, s.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: r,
                    scrollToStart: l,
                    scrollToEnd: l
                })
            }