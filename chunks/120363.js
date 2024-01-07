            "use strict";
            n.r(t), n.d(t, {
                useChannelListUpsells: function() {
                    return r
                },
                useChannelListUpsellLocationTrackerRef: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("308503"),
                s = n("16470");
            let i = (0, a.default)(e => ({
                upsellsByGuildId: {}
            }));

            function r(e) {
                return i(t => {
                    var n;
                    let l = {};
                    return null == e ? l : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : l
                }, s.default)
            }

            function o(e) {
                if (null == e) return !1;
                try {
                    let t = window.getComputedStyle(e);
                    return t.overflow.includes("scroll")
                } catch (e) {
                    return !1
                }
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = l.useRef(null);
                return l.useLayoutEffect(() => {
                    let l = a.current,
                        s = () => {
                            requestAnimationFrame(() => {
                                var l, s, r;
                                let o = null !== (s = null === (l = a.current) || void 0 === l ? void 0 : l.getBoundingClientRect()) && void 0 !== s ? s : null;
                                r = {
                                    name: t,
                                    guildId: e,
                                    disabled: n,
                                    boundingRect: null != o ? o : null
                                }, i.setState(e => {
                                    var t, n;
                                    return {
                                        upsellsByGuildId: {
                                            ...null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {},
                                            [r.guildId]: {
                                                ...null !== (n = e.upsellsByGuildId[r.guildId]) && void 0 !== n ? n : {},
                                                [r.name]: r
                                            }
                                        }
                                    }
                                })
                            })
                        };
                    if (null == l) return s(), () => {};
                    let r = function(e) {
                        let t = e.parentNode;
                        for (; null != t && t !== document.body && !o(t);) t = t.parentNode;
                        return o(t) ? t : null
                    }(l);
                    return s(), null == r || r.addEventListener("scroll", s, {
                        passive: !0
                    }), () => {
                        null == r || r.removeEventListener("scroll", s)
                    }
                }, [e, t, n]), a
            }