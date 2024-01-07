            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("837996"),
                r = function(e) {
                    let {
                        className: t,
                        imageClassName: n,
                        boostInCooldown: r,
                        useReducedMotion: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: l(i.imageWrapper, t, {
                            [i.cooldown]: r
                        }),
                        children: (0, a.jsx)("img", {
                            className: l(i.image, n, {
                                [i.cooldownImage]: r
                            }),
                            src: r ? s("834461") : o ? s("591779") : s("106785"),
                            alt: ""
                        })
                    })
                }