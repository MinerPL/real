            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("118810"),
                l = s("272030"),
                i = e => {
                    let {
                        facepileRef: t,
                        goToThread: i,
                        channel: r
                    } = e;
                    return {
                        handleLeftClick: e => {
                            var s;
                            !((0, a.isElement)(e.target) && (null === (s = t.current) || void 0 === s ? void 0 : s.contains(e.target))) && i(r, e.shiftKey)
                        },
                        handleRightClick: e => (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("994827").then(s.bind(s, "994827"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                channel: r
                            })
                        })
                    }
                }