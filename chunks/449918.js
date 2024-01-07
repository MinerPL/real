            "use strict";
            n.r(t), n.d(t, {
                getColor: function() {
                    return f
                },
                useColorValue: function() {
                    return E
                },
                useDesaturatedColorString: function() {
                    return h
                },
                useThemedColorValue: function() {
                    return p
                }
            }), n("781738");
            var i = n("884691"),
                r = n("10371"),
                s = n.n(r),
                a = n("368979"),
                o = n("65597"),
                l = n("669491"),
                u = n("841098"),
                c = n("206230");

            function d(e) {
                return e.toUpperCase().replace(/-/g, "_")
            }

            function f(e) {
                return l.default.unsafe_rawColors[d(e)].css
            }

            function E(e) {
                return null != e ? a.ColorDetails[e] : null
            }

            function h(e) {
                let t = (0, o.default)([c.default], () => c.default.saturation);
                return i.useMemo(() => {
                    if (null == e) return null;
                    if ("currentColor" === e || e.startsWith("var(")) return e;
                    let n = s(e),
                        i = n.set("hsl.s", n.get("hsl.s") * t);
                    return i.hex()
                }, [e, t])
            }

            function p(e, t) {
                let n = (0, u.useTheme)(),
                    r = (0, o.default)([c.default], () => c.default.saturation),
                    s = i.useMemo(() => {
                        if (null == e) return null;
                        let i = l.default.colors[d(e)].resolve({
                                theme: null != t ? t : n,
                                saturation: r
                            }),
                            s = i.hex();
                        return {
                            hex: s
                        }
                    }, [e, r, n, t]);
                return s
            }
            n("49111")