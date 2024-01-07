            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("627445"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                o = n("901582"),
                u = n("697218"),
                d = n("348852"),
                c = n("873254"),
                f = n("49111"),
                h = n("782340");

            function p(e) {
                let {
                    onClose: t,
                    onSelect: n
                } = e, l = (0, i.useStateFromStores)([u.default], () => {
                    let e = u.default.getCurrentUser();
                    return s(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
                }), p = (0, d.default)(), m = (0, c.default)(l.id);
                return (0, a.jsx)(o.default, {
                    object: f.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, a.jsxs)(r.Menu, {
                        onClose: t,
                        navId: "video-device-context",
                        "aria-label": h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
                        onSelect: n,
                        children: [(0, a.jsx)(r.MenuGroup, {
                            label: h.default.Messages.FORM_LABEL_VIDEO_DEVICE,
                            children: p
                        }), (0, a.jsx)(r.MenuGroup, {
                            children: m
                        })]
                    })
                })
            }