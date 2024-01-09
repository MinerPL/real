            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                r = n("468759"),
                d = n("49111"),
                u = n("782340"),
                c = n("363188"),
                f = n("926622");
            let h = 0,
                p = () => "notification-position-selector-".concat(h++),
                g = e => {
                    switch (e) {
                        case d.OverlayNotificationPositions.TOP_LEFT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
                        case d.OverlayNotificationPositions.TOP_RIGHT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
                        case d.OverlayNotificationPositions.BOTTOM_LEFT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
                        case d.OverlayNotificationPositions.BOTTOM_RIGHT:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
                        default:
                            return u.default.Messages.OVERLAY_NOTIFICATIONS_DISABLED
                    }
                },
                m = [d.OverlayNotificationPositions.DISABLED, d.OverlayNotificationPositions.TOP_LEFT, d.OverlayNotificationPositions.TOP_RIGHT, d.OverlayNotificationPositions.BOTTOM_LEFT, d.OverlayNotificationPositions.BOTTOM_RIGHT];

            function E(e) {
                let {
                    position: t,
                    onChange: n
                } = e, [l] = a.useState(() => p()), h = t === d.OverlayNotificationPositions.DISABLED ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                    position: g(t)
                });
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(o.FocusRing, {
                        within: !0,
                        offset: -2,
                        children: (0, i.jsx)("div", {
                            className: s(c.wrapper, {
                                [c.disabledSelected]: t === d.OverlayNotificationPositions.DISABLED
                            }),
                            children: m.map(e => (0, i.jsxs)("label", {
                                className: s({
                                    [c.selected]: e === t,
                                    [c.disabled]: e === d.OverlayNotificationPositions.DISABLED,
                                    [c.topRight]: e === d.OverlayNotificationPositions.TOP_RIGHT,
                                    [c.topLeft]: e === d.OverlayNotificationPositions.TOP_LEFT,
                                    [c.bottomRight]: e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
                                    [c.bottomLeft]: e === d.OverlayNotificationPositions.BOTTOM_LEFT
                                }),
                                children: [g(e), e === d.OverlayNotificationPositions.DISABLED ? (0, i.jsx)(r.default, {
                                    className: c.disabledIcon
                                }) : null, (0, i.jsx)("input", {
                                    type: "radio",
                                    name: l,
                                    value: e,
                                    onChange: t => n(t, e),
                                    className: c.hiddenInput
                                })]
                            }, e))
                        })
                    }), (0, i.jsx)(o.FormText, {
                        type: o.FormTextTypes.DESCRIPTION,
                        className: f.marginTop8,
                        children: h
                    })]
                })
            }
            E.Positions = d.OverlayNotificationPositions;
            var S = E