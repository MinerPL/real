            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                o = n("987317"),
                r = n("442939"),
                s = n("713726"),
                d = n("503417"),
                u = n("162236"),
                c = n("546463"),
                p = n("101125"),
                f = n("953109"),
                m = n("474571"),
                h = n("782340"),
                v = n("124705");

            function P() {
                let e = (0, a.useStateFromStores)([p.default], () => p.default.getBroadcast()),
                    t = (0, a.useStateFromStores)([c.default], () => {
                        var t;
                        return null != e ? null === (t = c.default.getDetectableGame(e.applicationId)) || void 0 === t ? void 0 : t.id : null
                    }),
                    n = (0, r.useGetOrFetchApplication)(t);
                if (null == e) return null;
                let P = () => {
                        (0, u.openBroadcastingPrivacySettingsModal)()
                    },
                    I = () => {
                        (0, s.stopBroadcast)(), o.default.disconnect()
                    };
                return (0, i.jsxs)("div", {
                    className: v.container,
                    children: [null != n && (0, i.jsx)(f.default, {
                        game: n,
                        size: f.default.Sizes.LARGE
                    }), (0, i.jsxs)("div", {
                        className: v.content,
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.default.Messages.BROADCASTING_CAPTURE_PAUSED
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: h.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                        }), (0, i.jsxs)("div", {
                            className: v.actions,
                            children: [(0, i.jsx)(l.Tooltip, {
                                text: h.default.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, i.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: P,
                                    children: (0, i.jsx)(m.default, {
                                        className: v.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, i.jsx)(l.Tooltip, {
                                text: h.default.Messages.STOP_BROADCASTING,
                                children: e => (0, i.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: I,
                                    children: (0, i.jsx)(d.default, {
                                        className: v.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }