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