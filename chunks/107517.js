            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("884691"),
                l = n("917351"),
                s = n.n(l),
                i = n("748820"),
                r = n("862337"),
                o = n("760679"),
                u = n("315841"),
                d = n("827520");
            let c = s.debounce(o.startEmojiHose, d.EVENT_TICK_RATE, {
                maxWait: d.EVENT_TICK_RATE
            });

            function f(e, t, n) {
                let l = a.useRef((0, i.v4)()),
                    s = a.useRef(new r.Interval),
                    f = a.useCallback(a => {
                        a.lastUpdatedAt = Date.now(), (0, o.updateEmojiHose)(a, e, n), (0, o.startEmojiHose)(t, n, a)
                    }, [t, n, e]),
                    h = a.useCallback((a, r, c) => {
                        l.current = (0, i.v4)();
                        let h = {
                            ...a,
                            id: l.current,
                            x: r,
                            y: c,
                            userId: e,
                            state: u.EmojiHoseState.START,
                            lastUpdatedAt: Date.now()
                        };
                        (0, o.startEmojiHose)(t, n, h), (0, o.updateEmojiHose)(h, e, n), s.current.start(d.EMOJI_HOSE_PING_DELAY, () => f(h))
                    }, [e, t, n, f]),
                    p = a.useCallback((a, i, r) => {
                        let h = {
                            ...a,
                            id: l.current,
                            x: i,
                            y: r,
                            userId: e,
                            state: u.EmojiHoseState.START,
                            lastUpdatedAt: Date.now()
                        };
                        c(t, n, h), (0, o.updateEmojiHose)(h, e, n), s.current.start(d.EMOJI_HOSE_PING_DELAY, () => f(h))
                    }, [e, t, n, f]),
                    m = a.useCallback((a, i, r) => {
                        c.cancel(), (0, o.stopEmojiHose)(t, n, l.current), (0, o.updateEmojiHose)({
                            ...a,
                            id: l.current,
                            x: i,
                            y: r,
                            userId: e,
                            state: u.EmojiHoseState.STOP,
                            lastUpdatedAt: Date.now()
                        }, e, n), s.current.stop()
                    }, [t, n, e]),
                    E = a.useCallback((e, t, n) => p(e, t, n), [p]);
                return a.useMemo(() => ({
                    handleMouseDown: h,
                    handleMouseMove: p,
                    handleMouseUp: m,
                    handleMouseEnter: E
                }), [h, E, p, m])
            }