            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007"), n("424973");
            var i = n("917351"),
                r = n.n(i),
                s = n("446674"),
                a = n("862337"),
                o = n("913144"),
                l = n("157552"),
                u = n("71313"),
                c = n("190017"),
                d = n("299285"),
                f = n("686470"),
                E = n("535974"),
                h = n("98328"),
                p = n("964889"),
                _ = n("602043");
            let S = new Set,
                m = {},
                T = new Set,
                g = {},
                I = new Set,
                C = {},
                v = new a.Timeout;

            function A(e) {
                v.start(e + 6e5 * Math.random(), l.fetchBranches)
            }

            function R() {
                if (!(0, _.isSupportedPlatform)()) return !1;
                let e = f.default.entitledBranchIds,
                    t = [];
                for (let n of e) !C.hasOwnProperty(n) && (C[n] = null, t.push(n));
                if (0 === t.length) return !1;
                o.default.wait(() => l.fetchBranches(t))
            }

            function N(e, t) {
                if (null != m[t] && h.default.shouldBeInstalled(e, t)) {
                    let n = m[t],
                        i = n.manifestIds,
                        s = E.default.getState(e, t);
                    null != s && s.shouldPatch && (s.buildId !== n.id || !r.isEqual(s.manifestIds, i)) && o.default.wait(() => {
                        let r = d.default.getApplication(e);
                        null != r ? (I.delete((0, p.getComboId)(e, t)), (0, c.updateApplication)(r, t, n.id, i, !0)) : I.add((0, p.getComboId)(e, t))
                    })
                }
            }

            function O() {
                v.stop()
            }
            class D extends s.default.Store {
                initialize() {
                    this.syncWith([f.default], R), this.waitFor(E.default, f.default, d.default)
                }
                getTargetBuildId(e, t) {
                    return null == m[t] ? null : m[t].id
                }
                getTargetManifests(e, t) {
                    return null == m[t] ? null : m[t].manifestIds
                }
                hasNoBuild(e, t) {
                    return T.has(t)
                }
                isFetching(e, t) {
                    return S.has(t)
                }
                needsToFetchBuildSize(e) {
                    return !g.hasOwnProperty(e)
                }
                getBuildSize(e) {
                    return g[e]
                }
            }
            D.displayName = "ApplicationBuildStore";
            var y = new D(o.default, {
                CONNECTION_OPEN: function() {
                    return A(216e5), R()
                },
                GAMES_DATABASE_UPDATE: function() {
                    if (!(0, _.isSupportedPlatform)()) return !1;
                    for (let e of I) {
                        let {
                            applicationId: t,
                            branchId: n
                        } = (0, p.convertComboId)(e), i = d.default.getApplication(t);
                        null != i && (I.delete(e), N(t, n))
                    }
                },
                APPLICATION_BUILD_FETCH_START: function(e) {
                    let {
                        branchId: t
                    } = e;
                    S.add(t)
                },
                APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        branchId: n,
                        locale: i,
                        build: r
                    } = e;
                    S.delete(n);
                    let s = r.manifests.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        }),
                        a = r.id;
                    T.delete(n), m[n] = {
                        id: a,
                        applicationId: t,
                        branchId: n,
                        locale: i,
                        manifestIds: s
                    }, N(t, n)
                },
                APPLICATION_BUILD_NOT_FOUND: function(e) {
                    let {
                        branchId: t
                    } = e;
                    S.delete(t), T.add(t)
                },
                APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
                    let {
                        buildId: t
                    } = e;
                    !g.hasOwnProperty(t) && (g[t] = null)
                },
                APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
                    let {
                        buildId: t,
                        sizeKB: n
                    } = e;
                    g[t] = n
                },
                APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
                    let {
                        buildId: t
                    } = e;
                    null == g[t] && delete g[t]
                },
                APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
                    let {
                        branches: t
                    } = e, n = {};
                    for (let e in f.default.libraryApplications) {
                        let t = f.default.libraryApplications[e];
                        n[t.branchId] = t
                    }
                    for (let e of t) {
                        let {
                            id: t,
                            liveBuildId: i
                        } = e, r = C[t];
                        if (i !== r) {
                            let e = n[t];
                            null != e && o.default.wait(() => u.fetchLiveBuild(e.id, e.branchId, !0))
                        }
                        C[t] = i
                    }
                    A(216e5)
                },
                APPLICATION_BRANCHES_FETCH_FAIL: function() {
                    A(6e5)
                },
                CONNECTION_CLOSED: O,
                LOGOUT: O,
                SKU_PURCHASE_SUCCESS: function(e) {
                    let {
                        entitlements: t
                    } = e;
                    if (!(0, _.isSupportedPlatform)()) return !1;
                    let n = new Set;
                    for (let e of t) n.add(e.application_id);
                    for (let e in f.default.libraryApplications) {
                        let t = f.default.libraryApplications[e];
                        n.has(t.id) && (0, p.isUserEntitledToLibraryApplication)(t) && o.default.wait(() => u.fetchLiveBuild(t.id, t.branchId))
                    }
                }
            })