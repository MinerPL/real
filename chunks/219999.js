            "use strict";
            n.r(t), n.d(t, {
                isFirefox: function() {
                    return o
                },
                isSafari: function() {
                    return a
                }
            });
            var r = n("988641"),
                o = (0, r.memoize)(function() {
                    return /firefox/i.test(navigator.userAgent)
                }),
                a = (0, r.memoize)(function() {
                    return !!window.safari
                })