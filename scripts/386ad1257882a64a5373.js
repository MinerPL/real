(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80192"], {
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("685665");

            function r(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: r
                    } = (0, l.default)(t);
                    return (0, s.jsx)(r, {
                        children: (0, s.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: u
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("845579"),
                a = n("662255"),
                u = n("306160");

            function i(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: i,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !u.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, s.jsx)(l.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, u.copy)(n), null == i || i()
                    },
                    icon: a.default,
                    showIconFirst: c
                }, f)
            }
        },
        366416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsIarUserReportingEnabled: function() {
                    return r
                }
            });
            var s = n("862205");
            let l = (0, s.createExperiment)({
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

            function r(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        487956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("424973");
            var s = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("272030"),
                a = n("158534"),
                u = n("812204"),
                i = n("861370"),
                o = n("366416"),
                c = n("49111"),
                d = n("782340"),
                f = (0, a.default)(function(e) {
                    let {
                        user: t,
                        relationshipType: n,
                        onRemoveFriend: a,
                        onBlock: u,
                        onReport: f,
                        onMessage: p,
                        onSelect: h
                    } = e, M = t.isNonUserBot(), E = [], C = (0, o.useIsIarUserReportingEnabled)("User Profile Actions Menu");
                    if (!M) switch (n) {
                        case c.RelationshipTypes.BLOCKED:
                            E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-unblock",
                                label: d.default.Messages.UNBLOCK,
                                action: a
                            }));
                            break;
                        case c.RelationshipTypes.FRIEND:
                            E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-remove",
                                label: d.default.Messages.REMOVE_FRIEND,
                                action: a,
                                color: "danger"
                            })), E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-block",
                                label: d.default.Messages.BLOCK,
                                action: u,
                                color: "danger"
                            })), C && E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-report",
                                label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                                action: f,
                                color: "danger"
                            }));
                            break;
                        case c.RelationshipTypes.NONE:
                        case c.RelationshipTypes.PENDING_INCOMING:
                        default:
                            E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-block",
                                label: d.default.Messages.BLOCK,
                                action: u,
                                color: "danger"
                            })), C && E.push((0, s.jsx)(l.MenuItem, {
                                id: "user-report",
                                label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
                                action: f,
                                color: "danger"
                            }))
                    }!M && n !== c.RelationshipTypes.BLOCKED && E.push((0, s.jsx)(l.MenuItem, {
                        id: "user-message",
                        label: d.default.Messages.USER_POPOUT_MESSAGE,
                        action: p
                    }));
                    let I = (0, i.default)({
                        id: t.id,
                        label: d.default.Messages.COPY_ID_USER,
                        onSuccess: r.closeContextMenu
                    });
                    return (0, s.jsxs)(l.Menu, {
                        navId: "user-profile-actions",
                        "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onClose: r.closeContextMenu,
                        onSelect: h,
                        children: [(0, s.jsx)(l.MenuGroup, {
                            children: E
                        }), null != I ? (0, s.jsx)(l.MenuGroup, {
                            children: I
                        }) : null]
                    })
                }, [u.default.CONTEXT_MENU, u.default.USER_PROFILE_ACTIONS_MENU])
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("35647"),
                a = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);