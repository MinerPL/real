            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691");

            function a(e, t) {
                let n = e.getBoundingClientRect(),
                    l = (t.clientX - n.left) / n.width;
                return Math.min(1, Math.max(0, l))
            }

            function s(e) {
                let {
                    ref: t,
                    onDrag: n,
                    onDragStart: s,
                    onDragEnd: i
                } = e, [r, o] = l.useState(!1);
                l.useEffect(() => {
                    if (r) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", l), () => {
                        window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l)
                    };

                    function e() {
                        null == i || i(), o(!1)
                    }

                    function l(e) {
                        let l = t.current;
                        null != l && (null == n || n(a(l, e)))
                    }
                }, [t, r, i, n]);
                let u = l.useCallback(e => {
                    e.preventDefault();
                    let l = t.current;
                    null != l && (o(!0), null == s || s(), null == n || n(a(l, e)))
                }, [t, s, n]);
                return [r, u]
            }