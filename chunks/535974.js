            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007"), n("70102"), n("860677");
            var i, r = n("917351"),
                s = n.n(r),
                a = n("446674"),
                o = n("913144"),
                l = n("49671"),
                u = n("70513"),
                c = n("271938"),
                d = n("686470"),
                f = n("645672"),
                E = n("964889"),
                h = n("773336"),
                p = n("602043"),
                _ = n("352326"),
                S = n("98328"),
                m = n("49111");
            (i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
            let T = {},
                g = "file://",
                I = !1,
                C = 0,
                v = 0,
                A = 0,
                R = [],
                N = [],
                O = [],
                D = !1;

            function y(e) {
                return e.type === m.LocalDispatchApplicationStates.INSTALLING || e.type === m.LocalDispatchApplicationStates.UPDATING || e.type === m.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
            }

            function P(e) {
                return e.type === m.LocalDispatchApplicationStates.INSTALLING || e.type === m.LocalDispatchApplicationStates.UPDATING || e.type === m.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
            }

            function L(e) {
                return e.type === m.LocalDispatchApplicationStates.INSTALLING || e.type === m.LocalDispatchApplicationStates.UPDATING || e.type === m.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
            }
            let b = s.throttle(function(e) {
                    N = (N = [{
                        bytes: e,
                        timestamp: Date.now()
                    }, ...N]).slice(0, 200)
                }, 200),
                M = s.throttle(function(e) {
                    let t = Date.now(),
                        n = t - 6e4;
                    R = (R = [{
                        bytes: e,
                        timestamp: t
                    }, ...R]).slice(0, 200).filter(e => {
                        let {
                            timestamp: t
                        } = e;
                        return t >= n
                    })
                }, 200),
                U = s.throttle(function(e) {
                    O = (O = [{
                        bytes: e,
                        timestamp: Date.now()
                    }, ...O]).slice(0, 200)
                }, 200);

            function w(e, t, n) {
                let i = n(T[t]),
                    r = n(e[t]);
                return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
            }
            class G extends a.default.Store {
                initialize() {
                    this.waitFor(c.default)
                }
                getState(e, t) {
                    let n = (0, E.getComboId)(e, t);
                    return T[n]
                }
                isUpToDate(e, t) {
                    let n = T[(0, E.getComboId)(e, t)];
                    return null != n && n.type === m.LocalDispatchApplicationStates.UP_TO_DATE
                }
                shouldPatch(e, t) {
                    let n = T[(0, E.getComboId)(e, t)];
                    return null != n && !0 === n.shouldPatch
                }
                isInstalled(e, t) {
                    let n = T[(0, E.getComboId)(e, t)];
                    return null != n ? n.type !== m.LocalDispatchApplicationStates.UNINSTALLING : S.default.shouldBeInstalled(e, t)
                }
                supportsCloudSync(e, t) {
                    null == t && (t = e);
                    let n = T[(0, E.getComboId)(e, t)];
                    return null != n && null != n.storage && !!n.storage.sync
                }
                isLaunchable(e, t) {
                    if (!(0, p.isSupportedPlatform)()) return !1;
                    let n = T[(0, E.getComboId)(e, t)];
                    return null != n && n.type === m.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
                }
                getDefaultLaunchOption(e, t) {
                    let n = T[(0, E.getComboId)(e, t)];
                    if (null == n) return null;
                    let {
                        defaultLaunchOptionId: i,
                        launchOptions: r
                    } = n;
                    return null == i || null == r ? null : r[i]
                }
                getLaunchOptions(e, t) {
                    let n = T[(0, E.getComboId)(e, t)];
                    return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
                }
                getHistoricalTotalBytesRead() {
                    return R
                }
                getHistoricalTotalBytesDownloaded() {
                    return N
                }
                getHistoricalTotalBytesWritten() {
                    return O
                }
                whenInitialized(e) {
                    this.addConditionalChangeListener(() => {
                        if (I) return setImmediate(e), !1
                    })
                }
            }
            G.displayName = "DispatchApplicationStore";
            var k = new G(o.default, {
                CONNECTION_OPEN: function() {
                    I = !1
                },
                DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e;
                    I = !0;
                    let n = {},
                        i = t.applications,
                        r = null != t.currentTask ? t.currentTask.branchId : null,
                        a = !1;
                    for (let e in i)
                        for (let t in i[e]) {
                            let c = (0, E.getComboId)(e, t);
                            if (n[c] = function(e) {
                                    let {
                                        build_id: t,
                                        target_build_id: n,
                                        manifest_ids: i,
                                        target_manifest_ids: r,
                                        application_id: a,
                                        branch_id: o,
                                        launch_commands: u,
                                        launch_options: c,
                                        storage: d,
                                        install_path: E,
                                        installed_size: p,
                                        repairing: _
                                    } = e, {
                                        should_patch: S
                                    } = e;
                                    switch (null == S && (S = !0), e.state.type) {
                                        case m.DispatchApplicationStates.COMPLETE: {
                                            let e;
                                            let I = {},
                                                C = null;
                                            if (_) e = m.LocalDispatchApplicationStates.REPAIRING;
                                            else if (null == t) e = m.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                                            else if (S && (t !== n || null != i && 0 !== s.difference(i, r).length)) e = m.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                                            else if (e = m.LocalDispatchApplicationStates.UP_TO_DATE, null != E) {
                                                let e = l.default.fileManager.join(E, "content"),
                                                    t = (0, f.getBuildPlatform)();
                                                if (null != c && 0 !== c.length) {
                                                    var T;
                                                    if (t === m.BuildPlatformTypes.WIN64 && (T = t, !c.some(e => e.platforms.includes(T)))) t = m.BuildPlatformTypes.WIN32;
                                                    for (let n of c)
                                                        if (n.platforms.includes(t)) {
                                                            let t;
                                                            let {
                                                                executable: i,
                                                                name: r,
                                                                working_dir: s
                                                            } = n, a = l.default.fileManager.join(e, i);
                                                            (0, h.isMac)() && !a.startsWith(g) && (a = "".concat(g).concat(a)), t = null != s ? l.default.fileManager.join(e, s) : l.default.fileManager.dirname(a), I[r] = {
                                                                ...n,
                                                                id: r,
                                                                fullExecutablePath: a,
                                                                fullWorkingDir: t
                                                            }, null == C && (C = r)
                                                        }
                                                } else if (null != u) {
                                                    t === m.BuildPlatformTypes.WIN64 && null == u[t] && (t = m.BuildPlatformTypes.WIN32);
                                                    let n = u[t];
                                                    if (null != n) {
                                                        let {
                                                            executable: i
                                                        } = n, r = "Default";
                                                        I[r] = {
                                                            ...n,
                                                            name: r,
                                                            id: r,
                                                            fullExecutablePath: l.default.fileManager.join(e, i),
                                                            fullWorkingDir: e,
                                                            platforms: [t]
                                                        }, C = r
                                                    }
                                                }
                                            }
                                            return {
                                                type: e,
                                                applicationId: a,
                                                branchId: o,
                                                buildId: t,
                                                manifestIds: i,
                                                targetBuildId: n,
                                                targetManifestIds: r,
                                                installPath: E,
                                                installedSize: p,
                                                launchOptions: I,
                                                defaultLaunchOptionId: C,
                                                shouldPatch: S,
                                                storage: d
                                            }
                                        }
                                        case m.DispatchApplicationStates.TRANSITION: {
                                            let s;
                                            let {
                                                stage: l,
                                                disk_progress: u,
                                                network_progress: c,
                                                reader_progress: d,
                                                progress: f,
                                                total: h,
                                                paused: T
                                            } = e.state, g = l.type;
                                            return {
                                                type: s = g === m.DispatchApplicationStages.UNINSTALLING ? m.LocalDispatchApplicationStates.UNINSTALLING : _ ? m.LocalDispatchApplicationStates.REPAIRING : null == t ? m.LocalDispatchApplicationStates.INSTALLING : m.LocalDispatchApplicationStates.UPDATING,
                                                stage: g,
                                                applicationId: a,
                                                branchId: o,
                                                buildId: t,
                                                manifestIds: i,
                                                targetBuildId: n,
                                                targetManifestIds: r,
                                                installPath: E,
                                                installedSize: p,
                                                diskProgress: u,
                                                networkProgress: c,
                                                readerProgress: d,
                                                progress: f,
                                                total: h,
                                                paused: T,
                                                shouldPatch: S
                                            }
                                        }
                                    }
                                    throw Error("Invalid Dispatch State. state=".concat(e.state.type))
                                }(i[e][t]), null != T[c]) {
                                let e = w(n, c, y);
                                e > 0 && b(C += e);
                                let i = w(n, c, P);
                                i > 0 && U(v += i);
                                let s = w(n, c, L);
                                if (s > 0 && M(A += s), r === t) {
                                    let e = n[c];
                                    if (!0 !== e.paused && (e.type === m.LocalDispatchApplicationStates.UNINSTALLING || e.type === m.LocalDispatchApplicationStates.INSTALLING || e.type === m.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
                                        case m.DispatchApplicationStages.PATCHING:
                                        case m.DispatchApplicationStages.FINALIZING:
                                        case m.DispatchApplicationStages.VERIFYING:
                                        case m.DispatchApplicationStages.REPAIRING:
                                        case m.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                                            u.default.setProgress("dispatch_application_progress", (0, E.calculateProgressPercentage)(e.progress, e.total) / 100), a = !0
                                    }
                                }
                            }
                            if (!D) {
                                let i = l.default.fileManager.dirname(n[c].installPath);
                                S.default.getInstallationPath(e, t) !== i && o.default.wait(() => {
                                    o.default.dispatch({
                                        type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
                                        applicationId: e,
                                        branchId: t,
                                        installationPath: i
                                    })
                                }), -1 === _.default.getQueuePosition(e, t) && (n[c].type === m.LocalDispatchApplicationStates.INSTALLING || n[c].type === m.LocalDispatchApplicationStates.UPDATING) && d.default.hasApplication(e, t) && S.default.shouldBeInstalled(e, t) && o.default.wait(() => {
                                    o.default.dispatch({
                                        type: "DISPATCH_APPLICATION_UPDATE",
                                        applicationId: e,
                                        branchId: t,
                                        automatic: !0
                                    })
                                })
                            }
                        }!a && "dispatch_application_progress" === u.default.taskID && u.default.clearProgress("dispatch_application_progress"), T = n, D = !0
                }
            })