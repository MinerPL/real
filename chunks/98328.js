            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("781738");
            var r = n("446674"),
                s = n("913144"),
                a = n("49671"),
                o = n("773336"),
                l = n("535974"),
                u = n("782340");
            let c = {},
                d = (0, o.isWindows)() ? "".concat(a.default.process.env.LOCALAPPDATA, "\\DiscordGames") : (0, o.isMac)() ? "/Applications/DiscordGames" : "/tmp";

            function f(e, t) {
                var n;
                c = {
                    ...c,
                    [e]: {
                        ...null !== (n = c[e]) && void 0 !== n ? n : {},
                        ...t
                    }
                }
            }

            function E(e) {
                let {
                    applicationId: t,
                    branchId: n,
                    installationPath: r
                } = e;
                null == i.installations[t] && (i.installations[t] = {}), i.installations[t][n] = {
                    installationPath: r
                }, !i.installationPaths.has(r) && p({
                    path: r,
                    metadata: {}
                })
            }

            function h(e) {
                let {
                    applicationId: t,
                    branchId: n
                } = e;
                if (null == i.installations[t]) return !1;
                delete i.installations[t][n], 0 === Object.keys(i.installations[t]).length && delete i.installations[t]
            }

            function p(e) {
                if (i.installationPaths.has(e.path)) return !1;
                f(e.path, e.metadata);
                let t = new Set(i.installationPaths);
                t.add(e.path), i.installationPaths = t
            }
            class _ extends r.default.PersistedStore {
                initialize(e) {
                    let t = {
                        ...e
                    };
                    null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = d), null == t.installationPaths ? t.installationPaths = new Set([t.defaultInstallationPath]) : t.installationPaths = new Set(Array.from(t.installationPaths)), null == t.pathLabels && (t.pathLabels = {}), i = t
                }
                getState() {
                    return i
                }
                get defaultInstallationPath() {
                    return i.defaultInstallationPath
                }
                get installationPaths() {
                    return Array.from(i.installationPaths).map(e => ({
                        path: e,
                        label: i.pathLabels[e]
                    }))
                }
                get installationPathsMetadata() {
                    return c
                }
                hasGamesInstalledInPath(e) {
                    let {
                        installations: t
                    } = i;
                    for (let n in t)
                        for (let i in t[n])
                            if (t[n][i].installationPath === e) return !0;
                    return !1
                }
                shouldBeInstalled(e, t) {
                    return null != i.installations[e] && null != i.installations[e][t]
                }
                getInstallationPath(e, t) {
                    return null == i.installations[e] || null == i.installations[e][t] ? null : i.installations[e][t].installationPath
                }
                getLabelFromPath(e) {
                    var t, n;
                    return e === d ? u.default.Messages.INSTALL_LOCATION_MAIN : null !== (n = null !== (t = a.default.fileManager.basename(e)) && void 0 !== t ? t : e.replace(/[/\\]+$/, "").split(/[/\\]+/g).slice(-1)[0]) && void 0 !== n ? n : "?"
                }
            }
            _.displayName = "InstallationManagerStore", _.persistKey = "InstallationManagerStore";
            var S = new _(s.default, {
                DISPATCH_APPLICATION_INSTALL: E,
                DISPATCH_APPLICATION_UNINSTALL: h,
                DISPATCH_APPLICATION_CANCEL: function(e) {
                    let {
                        applicationId: t,
                        branchId: n
                    } = e, i = l.default.getState(t, n);
                    null != i && null == i.buildId && null == i.manifestIds && h({
                        applicationId: t,
                        branchId: n
                    })
                },
                INSTALLATION_LOCATION_ADD: p,
                INSTALLATION_LOCATION_REMOVE: function(e) {
                    var t;
                    let {
                        path: n
                    } = e;
                    if (!i.installationPaths.has(n) || i.defaultInstallationPath === n) return !1;
                    let r = new Set(i.installationPaths);
                    r.delete(n), i.installationPaths = r, t = n, c = {
                        ...c
                    }, delete c[t], ! function(e) {
                        if (null == i.pathLabels[e]) return;
                        i.pathLabels = {
                            ...i.pathLabels
                        }, delete i.pathLabels[e]
                    }(n)
                },
                INSTALLATION_LOCATION_UPDATE: function(e) {
                    let {
                        path: t,
                        label: n,
                        isDefault: r
                    } = e;
                    if (!i.installationPaths.has(t)) return !1;
                    if (null != n && "" !== n && i.pathLabels[t] !== n) {
                        var s, a;
                        s = t, a = n, i.pathLabels = {
                            ...i.pathLabels,
                            [s]: a
                        }
                    }
                    r && i.defaultInstallationPath !== t && (i.defaultInstallationPath = t)
                },
                INSTALLATION_LOCATION_FETCH_METADATA: function(e) {
                    let {
                        metadataPayload: t
                    } = e;
                    for (let e in t) f(e, t[e])
                },
                DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: E
            })