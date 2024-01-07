            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("890503"),
                u = n("784410"),
                l = (e, t) => {
                    let n = (0, i.default)("profile_effect_debug_controls"),
                        {
                            id: l,
                            preset: o,
                            increment: a,
                            decrement: f
                        } = (0, u.default)(e);
                    return r.useEffect(() => {
                        if (!n) return;
                        let e = e => {
                            "ArrowUp" === e.key && (a(), e.preventDefault()), "ArrowDown" === e.key && (f(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
                        };
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, []), {
                        id: null != l ? l : null,
                        preset: o
                    }
                }