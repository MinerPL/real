(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5551"], {
        896982: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("920040");
            l("773670");
            var n = l("498225"),
                u = l("77078"),
                d = l("272030"),
                i = l("851387"),
                s = l("383173"),
                r = l("677099"),
                o = l("542827"),
                c = l("734134"),
                f = l("49111"),
                m = l("782340");

            function E(e) {
                var t;
                let {
                    folderId: E,
                    folderName: _,
                    folderColor: M,
                    unread: p,
                    onSelect: S
                } = e, b = (0, n.useStateFromStores)([r.default], () => r.default.getGuildFolderById(E), [E]), g = (0, c.default)(null !== (t = null == b ? void 0 : b.guildIds) && void 0 !== t ? t : []), L = (0, n.useStateFromStores)([s.default], () => s.default.getExpandedFolders().size > 0);
                return (0, a.jsxs)(u.Menu, {
                    navId: "guild-context",
                    "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onClose: d.closeContextMenu,
                    onSelect: S,
                    children: [(0, a.jsx)(u.MenuGroup, {
                        children: (0, a.jsx)(u.MenuItem, {
                            id: "mark-folder-read",
                            label: m.default.Messages.SERVER_FOLDER_MARK_AS_READ,
                            action: function() {
                                if (null == b) return;
                                let {
                                    guildIds: e
                                } = b;
                                (0, o.default)(e, f.AnalyticsSections.GUILD_LIST)
                            },
                            disabled: !p
                        })
                    }), null != g ? (0, a.jsx)(u.MenuGroup, {
                        children: g
                    }) : null, (0, a.jsxs)(u.MenuGroup, {
                        children: [(0, a.jsx)(u.MenuItem, {
                            id: "folder-settings",
                            label: m.default.Messages.SERVER_FOLDER_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await l.el("892262").then(l.bind(l, "892262"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    folderId: E,
                                    folderName: _,
                                    folderColor: M
                                })
                            })
                        }), L && (0, a.jsx)(u.MenuItem, {
                            id: "folder-collapse",
                            label: m.default.Messages.SERVER_FOLDER_COLLAPSE_ALL,
                            action: () => i.default.collapseAllFolders()
                        })]
                    })]
                })
            }
        },
        734134: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("920040"),
                n = l("773670"),
                u = l("377849"),
                d = l.n(u),
                i = l("498225"),
                s = l("77078"),
                r = l("519705"),
                o = l("531674"),
                c = l("862205"),
                f = l("282109"),
                m = l("782340");
            let E = (0, c.createExperiment)({
                kind: "user",
                id: "2022-02_guild_folder_mute",
                label: "Guild Folder Mute",
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

            function _(e, t) {
                let {
                    enabled: l
                } = E.useExperiment({
                    location: "74d87e_1"
                }, {
                    autoTrackExposure: !1
                }), u = (0, i.useStateFromStoresObject)([f.default], () => Object.fromEntries(e.map(e => [e, f.default.isMuted(e)])), [e]), c = n.useCallback(l => {
                    let a = Object.fromEntries(e.filter(e => !u[e]).map(e => [e, {
                        muted: !0,
                        mute_config: null != l ? {
                            selected_time_window: l,
                            end_time: l > 0 ? d().add(l, "second").toISOString() : null
                        } : void 0
                    }]));
                    r.default.updateGuildNotificationSettingsBulk(a, t)
                }, [e, t, u]), _ = n.useCallback(() => {
                    r.default.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter(e => u[e]).map(e => [e, {
                        muted: !1
                    }])), t)
                }, [e, t, u]);
                return l ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "mute-folder",
                        label: m.default.Messages.SERVER_FOLDER_MUTE_ALL,
                        action: () => c(),
                        children: (0, o.getMuteTimes)().map(e => {
                            let {
                                value: t,
                                label: l
                            } = e;
                            return (0, a.jsx)(s.MenuItem, {
                                id: "".concat(t),
                                label: l,
                                action: () => c(t)
                            }, t)
                        })
                    }), (0, a.jsx)(s.MenuItem, {
                        id: "unmute-folder",
                        label: m.default.Messages.SERVER_FOLDER_UNMUTE_ALL,
                        action: _
                    })]
                }) : null
            }
        }
    }
]);