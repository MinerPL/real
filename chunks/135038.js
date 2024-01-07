            "use strict";
            n.r(t), n.d(t, {
                getPointFromPosition: function() {
                    return i
                }
            });
            var l = n("385887");

            function i(e, t, n, i) {
                var r, o;
                let s = 0;
                for (let r = 0; r < n.length; r++) {
                    let o = n[r];
                    if (null == o) continue;
                    let a = s + o.length;
                    if (i <= a) {
                        let n = l.PathUtils.child(t, r),
                            o = l.EditorUtils.node(e, n)[0];
                        if (l.TextUtils.isText(o)) return {
                            path: n,
                            offset: Math.min(Math.max(i - s, 0), o.text.length)
                        }
                    }
                    s = a
                }
                let a = n.length - 1;
                return {
                    path: l.PathUtils.child(t, a),
                    offset: null !== (o = null === (r = n[a]) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0
                }
            }