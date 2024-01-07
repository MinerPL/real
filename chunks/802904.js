            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                u = n("77078"),
                o = n("272030"),
                i = n("430568"),
                r = n("798609"),
                d = n("758710"),
                c = n("306160"),
                m = n("128259"),
                p = n("307311"),
                f = n("192112"),
                E = n("782340"),
                C = n("588005"),
                S = n("736341");

            function T(e) {
                let {
                    url: t,
                    onSelect: n
                } = e;
                return c.SUPPORTS_COPY && null != t ? (0, l.jsx)(u.Menu, {
                    navId: "component-button",
                    onClose: o.closeContextMenu,
                    "aria-label": E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
                    onSelect: n,
                    children: (0, l.jsx)(u.MenuGroup, {
                        children: (0, l.jsx)(u.MenuItem, {
                            id: "copy",
                            label: E.default.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                            action: () => (0, c.copy)(t)
                        })
                    })
                }) : null
            }

            function N(e) {
                let t;
                let {
                    label: n,
                    style: a,
                    disabled: c,
                    emoji: E,
                    url: N
                } = e, {
                    executeStateUpdate: v,
                    visualState: h,
                    isDisabled: _
                } = (0, p.useComponentState)(e), I = null != n && n.length > 0, g = a === r.ButtonStyle.LINK && null != N && N.length > 0, O = h === f.ActionComponentState.LOADING;
                return t = g ? () => {
                    (0, m.handleClick)({
                        href: null != N ? N : "",
                        shouldConfirm: !0
                    })
                } : () => v(), (0, l.jsxs)(u.Button, {
                    className: C.component,
                    color: function(e) {
                        switch (e) {
                            case r.ButtonStyle.PRIMARY:
                                return u.Button.Colors.BRAND;
                            case r.ButtonStyle.SUCCESS:
                                return u.Button.Colors.GREEN;
                            case r.ButtonStyle.DESTRUCTIVE:
                                return u.Button.Colors.RED;
                            default:
                                return u.Button.Colors.PRIMARY
                        }
                    }(a),
                    size: u.Button.Sizes.SMALL,
                    disabled: c || h === f.ActionComponentState.DISABLED || _,
                    onClick: t,
                    onContextMenu: e => {
                        g && (0, o.openContextMenu)(e, e => (0, l.jsx)(T, {
                            ...e,
                            url: N
                        }))
                    },
                    role: g ? "link" : "button",
                    children: [(0, l.jsxs)("div", {
                        className: s(S.content, {
                            [S.hidden]: O
                        }),
                        "aria-hidden": O,
                        children: [null != E ? (0, l.jsx)(i.default, {
                            className: s({
                                [S.textEmoji]: I
                            }),
                            src: E.src,
                            emojiId: E.id,
                            emojiName: E.name,
                            animated: E.animated
                        }) : null, I ? (0, l.jsx)("div", {
                            className: S.label,
                            children: n
                        }) : null, g ? (0, l.jsx)(d.default, {
                            className: S.launchIcon,
                            width: 16,
                            height: 16
                        }) : null]
                    }), O ? (0, l.jsx)("div", {
                        className: S.loading,
                        children: (0, l.jsx)(u.Dots, {
                            dotRadius: 3.5,
                            themed: !0
                        })
                    }) : null]
                })
            }