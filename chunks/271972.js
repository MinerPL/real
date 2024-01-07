            "use strict";
            a.r(t), a.d(t, {
                AttachmentListItemSizes: function() {
                    return s
                },
                default: function() {
                    return M
                }
            });
            var l, s, n = a("37983"),
                i = a("884691"),
                r = a("414456"),
                o = a.n(r),
                d = a("974667"),
                u = a("77078"),
                c = a("81594"),
                m = a("149279"),
                h = a("659500"),
                p = a("645406"),
                f = a("49111"),
                g = a("782340"),
                v = a("864147");

            function x(e) {
                e.stopPropagation()
            }(l = s || (s = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM";
            var M = i.forwardRef(function(e, t) {
                let {
                    id: a,
                    channelId: l,
                    className: s,
                    children: i,
                    actions: r,
                    handleEditModal: M,
                    keyboardModeEnabled: E,
                    onKeyDown: j,
                    draftType: A,
                    size: L = 1
                } = e, {
                    onFocus: N,
                    ...S
                } = (0, d.useListItem)(a), {
                    handleFocus: T,
                    handleBlur: I
                } = (0, p.useFocusInside)(N), C = 0 === L, b = null != r;
                return (0, n.jsx)(u.FocusRing, {
                    children: (0, n.jsx)("li", {
                        ...S,
                        onFocus: T,
                        onBlur: I,
                        onKeyDown: e => {
                            if (E) {
                                switch (e.which) {
                                    case f.KeyboardKeys.D:
                                        e.preventDefault(), c.default.remove(l, a, A);
                                        return;
                                    case f.KeyboardKeys.E:
                                        null != M && (e.preventDefault(), M(e));
                                        return;
                                    case f.KeyboardKeys.BACKSPACE:
                                        e.ctrlKey ? (e.preventDefault(), c.default.clearAll(l, A)) : (e.preventDefault(), c.default.remove(l, a, A));
                                        return;
                                    case f.KeyboardKeys.ARROW_UP:
                                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                                        if (t) return;
                                        e.preventDefault(), h.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.FOCUS_MESSAGES, {
                                            atEnd: !0
                                        })
                                }
                                null == j || j(e)
                            }
                        },
                        className: o(v.upload, s),
                        ref: t,
                        children: (0, n.jsxs)("div", {
                            className: v.uploadContainer,
                            children: [i, b ? (0, n.jsx)("div", {
                                className: v.actionBarContainer,
                                children: (0, n.jsx)("div", {
                                    className: o(v.actionBar, {
                                        [v.smallActionBar]: C
                                    }),
                                    onContextMenu: x,
                                    "aria-label": g.default.Messages.ATTACHMENT_UTILITIES,
                                    children: (0, n.jsx)(m.default, {
                                        className: o({
                                            [v.miniPopover]: C
                                        }),
                                        children: r
                                    })
                                })
                            }) : null]
                        })
                    })
                })
            })