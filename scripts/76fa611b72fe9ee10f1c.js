(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80192"], {
        158534: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return u
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("685665");

            function u(e, n) {
                return function(s) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, a.default)(n);
                    return (0, t.jsx)(u, {
                        children: (0, t.jsx)(e, {
                            ...s
                        })
                    })
                }
            }
        },
        861370: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return i
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("77078"),
                u = s("845579"),
                r = s("662255"),
                l = s("306160");

            function i(e) {
                let {
                    id: n,
                    label: s,
                    onSuccess: i,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !l.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(n);
                return (0, t.jsx)(a.MenuItem, {
                    id: f,
                    label: s,
                    action: function(e) {
                        let s = null != o && e.shiftKey ? o : n;
                        (0, l.copy)(s), null == i || i()
                    },
                    icon: r.default,
                    showIconFirst: c
                }, f)
            }
        },
        366416: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                useIsIarUserReportingEnabled: function() {
                    return u
                }
            });
            var t = s("862205");
            let a = (0, t.createExperiment)({
                kind: "user",
                id: "2023-09_iar_user_reporting",
                label: "Safety Experience IAR User Reporting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u(e) {
                return a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        487956: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                default: function() {
                    return f
                }
            });
            var t = s("37983");
            s("884691");
            var a = s("77078"),
                u = s("272030"),
                r = s("158534"),
                l = s("812204"),
                i = s("861370"),
                o = s("366416"),
                c = s("49111"),
                d = s("782340"),
                f = (0, r.default)(function(e) {
                    let {
                        user: n,
                        relationshipType: s,
                        onRemoveFriend: r,
                        onBlock: l,
                        onReport: f,
                        onMessage: p,
                        onSelect: E
                    } = e, M = n.isNonUserBot(), _ = [], I = (0, o.useIsIarUserReportingEnabled)("User Profile Actions Menu");
                    if (!M) switch (s) {
                        case c.RelationshipTypes.BLOCKED:
                            _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-unblock",
                                label: d.default.Messages.UNBLOCK,
                                action: r
                            }));
                            break;
                        case c.RelationshipTypes.FRIEND:
                            _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-remove",
                                label: d.default.Messages.REMOVE_FRIEND,
                                action: r,
                                color: "danger"
                            })), _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-block",
                                label: d.default.Messages.BLOCK,
                                action: l,
                                color: "danger"
                            })), I && _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-report",
                                label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                                action: f,
                                color: "danger"
                            }));
                            break;
                        case c.RelationshipTypes.NONE:
                        case c.RelationshipTypes.PENDING_INCOMING:
                        default:
                            _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-block",
                                label: d.default.Messages.BLOCK,
                                action: l,
                                color: "danger"
                            })), I && _.push((0, t.jsx)(a.MenuItem, {
                                id: "user-report",
                                label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                                action: f,
                                color: "danger"
                            }))
                    }!M && s !== c.RelationshipTypes.BLOCKED && _.push((0, t.jsx)(a.MenuItem, {
                        id: "user-message",
                        label: d.default.Messages.USER_POPOUT_MESSAGE,
                        action: p
                    }));
                    let b = (0, i.default)({
                        id: n.id,
                        label: d.default.Messages.COPY_ID_USER,
                        onSuccess: u.closeContextMenu
                    });
                    return (0, t.jsxs)(a.Menu, {
                        navId: "user-profile-actions",
                        "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onClose: u.closeContextMenu,
                        onSelect: E,
                        children: [(0, t.jsx)(a.MenuGroup, {
                            children: _
                        }), null != b ? (0, t.jsx)(a.MenuGroup, {
                            children: b
                        }) : null]
                    })
                }, [l.default.CONTEXT_MENU, l.default.USER_PROFILE_ACTIONS_MENU])
        }
    }
]);