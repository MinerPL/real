            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("833395"),
                u = e => {
                    let {
                        profileEffectConfig: t,
                        onReady: n
                    } = e, {
                        pendingRef: u,
                        setPending: l
                    } = (0, i.default)(t.effects, n);
                    return (0, r.jsx)("div", {
                        children: t.effects.map(e => (0, r.jsx)("img", {
                            src: e.src,
                            alt: "Preload Profile Effect Asset",
                            "aria-hidden": !0,
                            style: {
                                opacity: 0,
                                position: "absolute"
                            },
                            onLoad: () => {
                                l(u.current - 1), u.current = u.current - 1
                            }
                        }, e.src))
                    })
                }