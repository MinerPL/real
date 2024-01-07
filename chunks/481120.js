            "use strict";
            l.r(t), l.d(t, {
                usePageScrollPosition: function() {
                    return i
                }
            });
            var a = l("884691"),
                s = l("748820"),
                r = l("560103"),
                n = l("599110");
            let o = (e, t, l, a) => {
                    let {
                        scrollTop: s = 0,
                        scrollOffset: r = 0,
                        scrollHeight: o = 0,
                        scrollWidth: i = 0
                    } = a;
                    if (o > 0) {
                        let a = (s + r) / o;
                        a > 0 && n.default.track(e, {
                            scroll_visible_percent: a,
                            source: l,
                            page_height: Math.round(o),
                            page_width: Math.round(i),
                            page_session_id: t
                        })
                    }
                },
                i = (e, t) => {
                    let l = a.useRef(null),
                        n = a.useRef((0, s.v4)()),
                        i = (0, r.useThrottledFunction)(o, 5e3, [], {
                            trailing: !0
                        }),
                        u = a.useCallback(() => {
                            var a;
                            let s = null === (a = l.current) || void 0 === a ? void 0 : a.getScrollerNode();
                            null != s && i(e, n.current, t, {
                                scrollTop: s.scrollTop,
                                scrollOffset: s.offsetHeight,
                                scrollHeight: s.scrollHeight,
                                scrollWidth: s.scrollWidth
                            })
                        }, [i, e, t]);
                    return {
                        scrollerRef: l,
                        scrollHandler: u,
                        sessionId: n.current
                    }
                }