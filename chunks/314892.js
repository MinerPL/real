            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("468759"),
                d = s("49111"),
                u = s("782340"),
                c = s("363188"),
                S = s("926622");
            let E = 0,
                f = () => "notification-position-selector-".concat(E++),
                m = e => {
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
                T = [d.OverlayNotificationPositions.DISABLED, d.OverlayNotificationPositions.TOP_LEFT, d.OverlayNotificationPositions.TOP_RIGHT, d.OverlayNotificationPositions.BOTTOM_LEFT, d.OverlayNotificationPositions.BOTTOM_RIGHT];

            function _(e) {
                let {
                    position: t,
                    onChange: s
                } = e, [l] = n.useState(() => f()), E = t === d.OverlayNotificationPositions.DISABLED ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
                    position: m(t)
                });
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(r.FocusRing, {
                        within: !0,
                        offset: -2,
                        children: (0, a.jsx)("div", {
                            className: i(c.wrapper, {
                                [c.disabledSelected]: t === d.OverlayNotificationPositions.DISABLED
                            }),
                            children: T.map(e => (0, a.jsxs)("label", {
                                className: i({
                                    [c.selected]: e === t,
                                    [c.disabled]: e === d.OverlayNotificationPositions.DISABLED,
                                    [c.topRight]: e === d.OverlayNotificationPositions.TOP_RIGHT,
                                    [c.topLeft]: e === d.OverlayNotificationPositions.TOP_LEFT,
                                    [c.bottomRight]: e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
                                    [c.bottomLeft]: e === d.OverlayNotificationPositions.BOTTOM_LEFT
                                }),
                                children: [m(e), e === d.OverlayNotificationPositions.DISABLED ? (0, a.jsx)(o.default, {
                                    className: c.disabledIcon
                                }) : null, (0, a.jsx)("input", {
                                    type: "radio",
                                    name: l,
                                    value: e,
                                    onChange: t => s(t, e),
                                    className: c.hiddenInput
                                })]
                            }, e))
                        })
                    }), (0, a.jsx)(r.FormText, {
                        type: r.FormTextTypes.DESCRIPTION,
                        className: S.marginTop8,
                        children: E
                    })]
                })
            }
            _.Positions = d.OverlayNotificationPositions;
            var g = _