            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("917351"),
                s = n("410328"),
                l = (0, a.memoize)(function(e) {
                    let {
                        theme: t,
                        layoutType: n
                    } = e;
                    return (0, s.buildPlatformPollResources)(t, n)
                }, e => {
                    let {
                        theme: t,
                        layoutType: n
                    } = e;
                    return "".concat(t, ":").concat(n)
                })