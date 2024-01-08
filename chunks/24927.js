            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("458960"),
                o = n("974667"),
                u = n("77078"),
                d = n("272030"),
                c = n("973199"),
                E = n("649678"),
                f = function(e) {
                    let {
                        index: t,
                        children: i,
                        user: f,
                        channel: _,
                        onClick: h,
                        isFocused: C,
                        isActive: I,
                        onOtherHover: T,
                        className: S
                    } = e, [N, A] = s.useState(!1), [m, p] = s.useState(!1), g = () => {
                        A(!0), C && !I && !m && (null == T || T())
                    }, R = () => {
                        A(!1)
                    }, O = (e, t) => {
                        null != t && (p(!0), (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                user: t
                            })
                        }, {
                            onClose: () => {
                                p(!1)
                            }
                        }))
                    };
                    return (0, a.jsx)(o.ListNavigatorItem, {
                        id: _.id,
                        children: e => (0, a.jsx)(u.FocusRing, {
                            offset: {
                                left: -8,
                                right: -8
                            },
                            children: (0, a.jsx)(r.default.div, {
                                className: l(E.messageRequestItem, S, {
                                    [E.active]: I || m,
                                    [E.firstItem]: 0 === t
                                }),
                                onContextMenu: e => O(e, f),
                                onMouseEnter: g,
                                onMouseLeave: R,
                                onClick: null != h ? h : void 0,
                                style: {
                                    LIST_ROW_HEIGHT: c.LIST_ROW_HEIGHT,
                                    opacity: 1
                                },
                                ...e,
                                children: i(N || I || m)
                            })
                        })
                    })
                }