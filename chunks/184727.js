            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("272030"),
                r = n("861370"),
                u = n("377114"),
                o = n("907566"),
                d = n("71102"),
                c = n("187163"),
                f = n("782340");

            function h(e) {
                let {
                    entry: t,
                    onSelect: h,
                    closePopout: p,
                    forceLightTheme: m,
                    hideEditButton: E = !1
                } = e, {
                    isEntryAdmin: C,
                    canEdit: S,
                    canRemove: g
                } = (0, c.default)(t), _ = (0, r.default)({
                    id: t.guildId,
                    label: f.default.Messages.COPY_ID_GUILD,
                    onSuccess: p
                });
                l.useEffect(() => {
                    !S && !g && null == _ && (0, i.closeContextMenu)()
                });
                let I = () => {
                    d.removeDirectoryGuildEntry(t.channelId, t.guildId)
                };

                function T() {
                    (0, i.closeContextMenu)(), null == p || p()
                }
                return (0, a.jsxs)(s.Menu, {
                    className: m ? "theme-light" : null,
                    navId: "guild-entry-context",
                    onClose: T,
                    "aria-label": f.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: h,
                    children: [(0, a.jsxs)(s.MenuGroup, {
                        children: [S && !E ? (0, a.jsx)(s.MenuItem, {
                            id: "update-entry",
                            label: f.default.Messages.HUB_ENTRY_UPDATE,
                            action: function() {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("895792").then(n.bind(n, "895792"));
                                    return n => (0, a.jsx)(e, {
                                        ...n,
                                        entry: t
                                    })
                                }), T()
                            }
                        }) : null, g ? (0, a.jsx)(s.MenuItem, {
                            id: "remove-from-hub",
                            label: f.default.Messages.HUB_ENTRY_REMOVE,
                            action: function() {
                                (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
                                    header: f.default.Messages.HUB_ENTRY_REMOVE,
                                    confirmText: f.default.Messages.REMOVE,
                                    cancelText: f.default.Messages.CANCEL,
                                    onConfirm: I,
                                    ...e,
                                    children: (0, a.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: f.default.Messages.HUB_ENTRY_REMOVE_BODY.format({
                                            guildName: t.name
                                        })
                                    })
                                })), T()
                            },
                            color: "danger"
                        }) : null, C ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(s.MenuItem, {
                                id: "report-server-listing",
                                label: f.default.Messages.REPORT_SERVER_NO_NAME,
                                action: function() {
                                    null != t && ((0, u.showReportModalForGuildDirectoryEntry)(t), T())
                                },
                                icon: o.default,
                                color: "danger"
                            })
                        })]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: _
                    })]
                })
            }