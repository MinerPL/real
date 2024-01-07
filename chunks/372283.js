            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            }), l("222007");
            var n = l("884691");

            function a(e, t) {
                let [l, a] = n.useState(null), s = n.useCallback(e => {
                    a(e)
                }, []), i = n.useCallback(() => {
                    a(null)
                }, []), r = n.useCallback(n => {
                    i();
                    let a = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return l === t
                        }),
                        s = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return n === t
                        });
                    if (null == a || null == s || a === s) return;
                    let r = [...e],
                        o = r.indexOf(a),
                        d = r.indexOf(s),
                        u = d - o > 0 ? 1 : 0;
                    r.splice(o, 1), d = r.indexOf(s), r.splice(d + u, 0, a), t(r)
                }, [e, l, i, t]);
                return {
                    draggingId: l,
                    handleDragStart: s,
                    handleDragReset: i,
                    handleDragComplete: r
                }
            }