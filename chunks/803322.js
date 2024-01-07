            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                i = n("385887");

            function r(e, t, n) {
                let r = l.useCallback(e => {
                        if (t) return !0;
                        if (!0 === e.defaultPrevented) return !1;
                        let l = n(e);
                        return l && (e.preventDefault(), e.stopPropagation()), l
                    }, [t, n]),
                    o = l.useCallback(t => {
                        let {
                            event: n
                        } = t, l = r(n);
                        !l && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.EditorUtils.focus(e)))
                    }, [e, r]);
                return {
                    handlePaste: r,
                    handleGlobalPaste: o
                }
            }