            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("450911"),
                d = a("272030"),
                u = a("838446"),
                s = a("158534"),
                o = a("846883"),
                r = a("812204"),
                c = a("861370"),
                f = a("972701"),
                I = a("390008"),
                p = a("936947"),
                _ = a("271938"),
                A = a("136207"),
                v = a("44141"),
                T = a("531674"),
                E = a("49111"),
                y = a("782340"),
                M = (0, s.default)((0, u.default)(function(e) {
                    let {
                        channel: t,
                        selected: u,
                        onSelect: s
                    } = e, r = t.isOwner(_.default.getId()), E = (0, v.default)(t), M = (0, T.default)(t), S = (0, A.default)(t, u), h = (0, c.default)({
                        id: t.id,
                        label: y.default.Messages.COPY_ID_CHANNEL
                    }), m = (0, o.default)(t), C = (0, f.useAddToFavoritesItem)(t), N = (0, f.useRemoveFromFavoritesItem)(t), g = (0, I.default)(t), O = (0, p.default)(t);
                    return null == t || t.isManaged() ? null : (0, n.jsxs)(l.Menu, {
                        navId: "gdm-context",
                        "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onClose: d.closeContextMenu,
                        onSelect: s,
                        children: [(0, n.jsx)(l.MenuGroup, {
                            children: E
                        }), (0, n.jsxs)(l.MenuGroup, {
                            children: [C, g, O]
                        }), (0, n.jsxs)(l.MenuGroup, {
                            children: [r ? (0, n.jsx)(l.MenuItem, {
                                id: "instant-invites",
                                label: y.default.Messages.INSTANT_INVITES,
                                action: () => (0, l.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("84279").then(a.bind(a, "84279"));
                                    return a => (0, n.jsx)(e, {
                                        channelId: t.id,
                                        ...a
                                    })
                                })
                            }) : null, (0, n.jsx)(l.MenuControlItem, {
                                id: "change-icon",
                                showDefaultFocus: !0,
                                control: (e, a) => (0, n.jsx)(l.MenuImageUploadControl, {
                                    onChange: a => {
                                        var n;
                                        i.default.setIcon(t.id, a), null === (n = e.onClose) || void 0 === n || n.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": y.default.Messages.CHANGE_ICON,
                                    ...e,
                                    ref: a
                                }),
                                label: y.default.Messages.CHANGE_ICON
                            }), null != t.icon ? (0, n.jsx)(l.MenuItem, {
                                id: "remove-icon",
                                label: y.default.Messages.REMOVE_ICON,
                                action: () => i.default.setIcon(t.id, null)
                            }) : null]
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: M
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: S
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: N
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: h
                        })]
                    })
                }, {
                    object: E.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])