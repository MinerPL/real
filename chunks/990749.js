            "use strict";
            n.r(t), n.d(t, {
                DnDKeyboardHelpBar: function() {
                    return E
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("907002"),
                a = n("446674"),
                o = n("533979"),
                l = n("577776"),
                u = n("206230"),
                c = n("57406"),
                d = n("782340"),
                f = n("157372");

            function E() {
                let e = [{
                        keybinds: ["Spacebar", "Enter"],
                        name: d.default.Messages.DND_OPERATION_LABEL_DROP
                    }, {
                        keybinds: ["up", "down"],
                        name: d.default.Messages.DND_OPERATION_LABEL_MOVE
                    }, {
                        keybinds: ["ESC"],
                        name: d.default.Messages.DND_OPERATION_LABEL_CANCEL
                    }],
                    t = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion),
                    n = (0, c.useDndMode)(),
                    E = (0, s.useTransition)(n, {
                        enter: {
                            from: {
                                opacity: 0,
                                y: t ? 0 : 80
                            },
                            to: {
                                opacity: 1,
                                y: 0
                            }
                        },
                        leave: {
                            opacity: 0,
                            y: t ? 0 : 80
                        },
                        config: s.config.stiff
                    });
                return E((t, n) => n ? (0, i.jsx)("div", {
                    className: f.positioner,
                    children: (0, i.jsx)(s.animated.div, {
                        className: f.container,
                        style: t,
                        children: e.map((t, n) => {
                            let {
                                keybinds: s,
                                name: a
                            } = t;
                            return (0, i.jsxs)(r.Fragment, {
                                children: [(0, i.jsx)(l.Text, {
                                    variant: "text-md/semibold",
                                    className: f.bindName,
                                    children: a
                                }), s.map(e => (0, i.jsx)(o.KeyCombo, {
                                    shortcut: e,
                                    className: f.shortcut
                                }, e)), n < e.length - 1 ? (0, i.jsx)("span", {
                                    className: f.separator
                                }) : null]
                            }, a)
                        })
                    })
                }) : null)
            }