            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("77078"),
                r = a("333987"),
                u = a("975802"),
                o = n.forwardRef(function(e, t) {
                    let {
                        className: a,
                        children: s,
                        ariaLabel: o,
                        onContextMenu: c,
                        onCardClick: f,
                        onItemClick: m,
                        listItemProps: h,
                        itemId: E,
                        selected: g,
                        ...I
                    } = e, [_, x] = (0, r.default)(t), v = n.useRef(null);
                    return (0, l.jsxs)("div", {
                        ref: x,
                        className: i(u.card, u.interactiveCard, {
                            [u.selected]: g
                        }, a),
                        "data-item-id": E,
                        onContextMenu: c,
                        onClick: e => null == f ? void 0 : f(e, _.current),
                        ...I,
                        children: [(0, l.jsx)(d.Clickable, {
                            className: u.clickableTarget,
                            innerRef: v,
                            "aria-label": o,
                            onClick: m,
                            ...h
                        }), s]
                    })
                })