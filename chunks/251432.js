            "use strict";
            s.r(t), s.d(t, {
                useNewBadgeOverflowAware: function() {
                    return a
                }
            }), s("222007");
            var n = s("884691");

            function a(e, t, s) {
                let a = n.useRef(null),
                    [l, i] = n.useState(!1),
                    r = n.useCallback(() => {
                        if (e && null !== a.current) {
                            var s;
                            i((null === (s = a.current) || void 0 === s ? void 0 : s.offsetHeight) > 2.5 * t)
                        }
                    }, [i, e, t]);
                return n.useLayoutEffect(() => {
                    r()
                }, [r, e, s]), {
                    postTitleRef: a,
                    isNewBadgeOverflow: l
                }
            }