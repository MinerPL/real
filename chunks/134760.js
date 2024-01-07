            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                n = s.n(l),
                r = s("218971"),
                o = s("171599");

            function i(e) {
                let {
                    step: t
                } = e, s = t === r.NUFSlides.AGE_GATE, l = t === r.NUFSlides.CHOOSE_TEMPLATE || t === r.NUFSlides.CREATION_INTENT, i = t === r.NUFSlides.CUSTOMIZE_GUILD, c = t === r.NUFSlides.CHANNEL_PROMPT || t === r.NUFSlides.JOIN_GUILD, u = i || c, d = l || u;
                return (0, a.jsxs)("div", {
                    className: o.sidebar,
                    children: [(0, a.jsx)("div", {
                        className: n(o.step1, {
                            [o.show]: s
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step24Clouds, {
                            [o.show]: d
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step34Flag, {
                            [o.show]: u
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step24Base, {
                            [o.show]: d
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step24Ground, {
                            [o.show]: d
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step2Base, {
                            [o.show]: l
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step2Character, {
                            [o.show]: l
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step34Base, {
                            [o.show]: u
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step3Character, {
                            [o.show]: i
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step4Character, {
                            [o.show]: c
                        })
                    }), (0, a.jsx)("div", {
                        className: n(o.step24Foreground, {
                            [o.show]: d
                        })
                    })]
                })
            }