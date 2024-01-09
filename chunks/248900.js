            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("306160"),
                d = n("598639"),
                i = n("49111"),
                r = n("782340");

            function s(e, t, n) {
                let s = null != n,
                    {
                        isMember: o
                    } = (0, d.default)(t, e);
                if (!o) return null;

                function c() {
                    let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))), (0, u.showToast)((0, u.createToast)(r.default.Messages.COPIED_LINK, u.ToastType.SUCCESS))
                }
                return (0, l.jsx)(u.MenuItem, {
                    id: r.default.Messages.COPY_EVENT_LINK,
                    label: r.default.Messages.COPY_EVENT_LINK,
                    action: s ? void 0 : () => c(!0),
                    children: s && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: r.default.Messages.COPY_RECURRENCE_LINK,
                            label: r.default.Messages.COPY_RECURRENCE_LINK,
                            action: () => c(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: r.default.Messages.COPY_SERIES_LINK,
                            label: r.default.Messages.COPY_SERIES_LINK,
                            action: () => c(!0)
                        })]
                    })
                })
            }