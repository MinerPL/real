            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("884691"),
                s = n("659500"),
                l = n("49111");

            function i(e) {
                return Object.keys(e).some(t => e[t])
            }

            function r(e, t) {
                let [n, r] = a.useState(t), [o, u] = a.useState(i(n)), d = a.useRef(o), c = a.useRef(null), f = a.useCallback(e => {
                    r(t => {
                        let n = {
                                ...t,
                                ...e
                            },
                            a = i(n);
                        return a !== d.current && (d.current = a, null != c.current && (cancelAnimationFrame(c.current), c.current = null), a ? u(!0) : c.current = requestAnimationFrame(() => u(!1))), n
                    })
                }, []);
                return a.useEffect(() => {
                    let t = e => {
                        let {
                            emojiPicker: t,
                            emojiBurstPicker: n
                        } = e;
                        return f({
                            emojiPicker: t,
                            emojiBurstPicker: n
                        })
                    };
                    return s.ComponentDispatch.subscribeKeyed(l.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e, t), () => void s.ComponentDispatch.unsubscribeKeyed(l.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e, t)
                }, [e, f]), {
                    popouts: n,
                    setPopout: f,
                    selected: o
                }
            }