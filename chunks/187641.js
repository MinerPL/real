            "use strict";
            n.r(t), n.d(t, {
                DnDProvider: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("626326"),
                s = n("192523"),
                a = n("819855"),
                o = n("57406"),
                l = n("999888");
            let u = (0, s.createTransition)("keydown", e => !!(0, l.isDragTrigger)(e) && (e.preventDefault(), !0)),
                c = (0, s.createTransition)("mousedown", e => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.toggleDndMode)(!1), !0)),
                d = {
                    backends: [{
                        id: "html5",
                        backend: r.HTML5Backend,
                        transition: c
                    }, {
                        id: "keyboard",
                        backend: l.default,
                        context: {
                            window,
                            document
                        },
                        options: {
                            onDndModeChanged: o.toggleDndMode,
                            announcer: a.AccessibilityAnnouncer
                        },
                        preview: !0,
                        transition: u
                    }]
                };

            function f(e) {
                let {
                    children: t
                } = e;
                return (0, i.jsx)(s.DndProvider, {
                    options: d,
                    children: t
                })
            }