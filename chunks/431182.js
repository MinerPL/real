            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("903083");

            function r(e, t, n, r) {
                let o = (0, i.default)(e, t, r),
                    s = (e, t) => n.computeScrollPosition(e, t);
                return {
                    ...o,
                    getScrollPosition: s,
                    isItemVisible(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            [r, o] = s(e, n),
                            l = t();
                        return i ? r >= l.scrollTop && r + o <= l.scrollTop + l.offsetHeight : r + o >= l.scrollTop && r <= l.scrollTop + l.offsetHeight
                    },
                    scrollToIndex(e) {
                        let {
                            section: t,
                            row: n,
                            animate: i,
                            callback: r,
                            padding: l = 0
                        } = e, [a, u] = s(t, n);
                        o.scrollIntoViewRect({
                            start: a,
                            end: a + u,
                            padding: l,
                            animate: i,
                            callback: r
                        })
                    }
                }
            }