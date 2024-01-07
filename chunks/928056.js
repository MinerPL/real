            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("77078"),
                r = n("438931"),
                o = n("845579"),
                u = n("577427"),
                d = n("145131"),
                c = n("945330"),
                E = n("599110"),
                f = n("568734"),
                _ = n("602043"),
                h = n("737295"),
                C = n("762448"),
                T = n("49111"),
                I = n("782340"),
                S = n("352561");

            function N(e) {
                let {
                    applicationViewItems: t,
                    restoreApplication: n
                } = e;
                if (0 === t.length) return null;
                let s = t.map(e => {
                    let t = e.libraryApplication.getDistributor();
                    return (0, a.jsxs)("div", {
                        className: S.hiddenLibraryApplication,
                        children: [(0, a.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            className: S.hiddenLibraryApplicationContent,
                            children: [(0, a.jsx)("div", {
                                className: S.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application)
                            }), null != t ? (0, a.jsx)("div", {
                                className: S.applicationSubText,
                                children: T.DistributorNames[t]
                            }) : null]
                        }), (0, a.jsx)(l.Clickable, {
                            className: S.restoreButton,
                            onClick: () => n(e.libraryApplication),
                            children: (0, a.jsx)(c.default, {
                                className: S.restoreIcon
                            })
                        })]
                    }, e.key)
                });
                return (0, a.jsxs)(l.FormSection, {
                    className: S.hiddenLibraryApplications,
                    children: [(0, a.jsx)(l.FormTitle, {
                        className: S.hiddenLibraryApplicationsTitle,
                        children: I.default.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
                    }), s]
                })
            }
            class A extends s.PureComponent {
                handleToggleShortcutDesktop(e) {
                    o.InstallShortcutDesktop.updateSetting(e)
                }
                handleToggleShortcutStartMenu(e) {
                    o.InstallShortcutStartMenu.updateSetting(e)
                }
                trackRestoreApplication(e, t) {
                    E.default.track(T.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
                        hidden_enabled: t,
                        ...e.getAnalyticsData()
                    })
                }
                renderBody() {
                    let {
                        hiddenLibraryApplicationViewItems: e,
                        installShortcutDesktop: t,
                        installShortcutStartMenu: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: S.body,
                        children: [(0, _.isSupportedPlatform)() ? (0, a.jsxs)(s.Fragment, {
                            children: [(0, a.jsx)(l.FormSwitch, {
                                value: t,
                                onChange: this.handleToggleShortcutDesktop,
                                note: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
                                children: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
                            }), (0, a.jsx)(l.FormSwitch, {
                                value: n,
                                onChange: this.handleToggleShortcutStartMenu,
                                note: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
                                children: I.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
                            }), (0, a.jsx)(C.default, {})]
                        }) : null, (0, a.jsx)(N, {
                            restoreApplication: this.handleRestoreHiddenLibraryApplication,
                            applicationViewItems: e
                        })]
                    })
                }
                render() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(h.default, {
                            currentRoute: T.Routes.APPLICATION_LIBRARY_SETTINGS
                        }), (0, a.jsx)(l.ScrollerAuto, {
                            className: S.scroller,
                            children: this.renderBody()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleRestoreHiddenLibraryApplication = e => {
                        let t = f.toggleFlag(e.getFlags(), T.LibraryApplicationFlags.HIDDEN);
                        r.updateFlags(e.id, e.branchId, t), this.trackRestoreApplication(e, f.hasFlag(t, T.LibraryApplicationFlags.HIDDEN))
                    }
                }
            }

            function m() {
                let e = {
                    installShortcutDesktop: o.InstallShortcutDesktop.useSetting(),
                    installShortcutStartMenu: o.InstallShortcutStartMenu.useSetting(),
                    hiddenLibraryApplicationViewItems: (0, i.useStateFromStores)([u.default], () => u.default.hiddenLibraryApplicationViewItems)
                };
                return (0, a.jsx)(A, {
                    ...e
                })
            }