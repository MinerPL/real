            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Y
                }
            }), l("222007");
            var n = l("448105"),
                a = l.n(n),
                r = l("917351"),
                i = l.n(r),
                u = l("866227"),
                o = l.n(u),
                s = l("446674"),
                c = l("913144"),
                d = l("299285"),
                f = l("860285"),
                p = l("915639"),
                h = l("86878"),
                E = l("546463"),
                g = l("686470"),
                m = l("568307"),
                A = l("102985"),
                L = l("251013"),
                y = l("946749"),
                C = l("535974"),
                S = l("352326"),
                N = l("117362"),
                _ = l("449008"),
                T = l("964889"),
                I = l("773336"),
                R = l("50885"),
                v = l("602043"),
                b = l("9377"),
                U = l("49111");
            let M = o().subtract(1, "week"),
                O = [],
                G = "",
                D = !1;

            function w(e, t) {
                return e.application.name.localeCompare(t.application.name, p.default.locale, {
                    sensitivity: "base"
                })
            }
            let P = {
                    [U.GameTableListKeys.NAME]: w,
                    [U.GameTableListKeys.PLATFORM]: (e, t, l) => {
                        let n = e.libraryApplication.getDistributor(),
                            a = t.libraryApplication.getDistributor();
                        return n === a ? (l === U.TableSortDirections.DESCENDING ? -1 : 1) * w(e, t) : null == n ? 1 : null == a ? -1 : n.localeCompare(a)
                    },
                    [U.GameTableListKeys.LAST_PLAYED]: (e, t) => e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1,
                    [U.GameTableListKeys.ACTIONS]: null
                },
                x = (0, N.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.shouldShowInLibrary)),
                k = (0, N.cachedFunction)(e => e.filter(e => null != e.libraryApplication && C.default.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId))),
                F = (0, N.cachedFunction)((e, t) => e.filter(e => a(t.toLowerCase(), e.application.name.toLowerCase()))),
                H = (0, N.cachedFunction)((e, t, l, n) => {
                    let a = P[t];
                    if (null == a) return e;
                    let r = [...e],
                        i = r.sort(a);
                    return l === U.TableSortDirections.DESCENDING ? i.reverse() : i
                }),
                q = (0, N.cachedFunction)(e => e.filter(e => null != e.libraryApplication && e.libraryApplication.isHidden()));

            function B(e, t) {
                let l = L.default.getCurrentUserStatisticsForApplication(e.id);
                if (null != l) return new Date(l.last_played_at).getTime();
                let n = t[e.id];
                return null != n ? n : 0
            }

            function V() {
                let e = new Set(m.default.getRunningVerifiedApplicationIds()),
                    t = {},
                    l = new Set,
                    n = m.default.getGamesSeen(!1, !1).map(e => {
                        let l = E.default.getGameByGameData(e);
                        return null != l ? (t[l.id] = 1e3 * e.lastFocused, l.id) : null
                    }),
                    a = Object.values(g.default.getAllLibraryApplications()),
                    r = a.map(n => (function(e, t, l, n, a) {
                        var r, i;
                        if (!a && t.has(e.id)) return null;
                        let u = d.default.getApplication(e.id);
                        if (null == u) return null;
                        let s = B(u, l);
                        if (t.add(e.id), !(0, T.isUserEntitledToLibraryApplication)(e) && !C.default.isInstalled(e.id, e.branchId)) return null;
                        return {
                            key: "".concat(e.id, "-").concat(e.branchId),
                            application: u,
                            libraryApplication: e,
                            lastPlayed: s,
                            supportsCloudSync: null != e && C.default.supportsCloudSync(e.id, e.branchId),
                            isNew: (r = e, i = s, null != r && o(r.createdAt).isAfter(M) && 0 === i),
                            isLaunching: f.default.launchingGames.has(e.id),
                            isRunning: n.has(e.id),
                            isLaunchable: (0, v.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: C.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e.id,
                                branchId: e.branchId
                            }),
                            isUpdatingFlags: g.default.isUpdatingFlags(e.id, e.branchId),
                            shouldShowInLibrary: (0, T.shouldShowGameInLibrary)(u, e, A.default),
                            defaultAction: (0, b.getDefaultLibraryApplicationAction)(e, C.default, S.default)
                        }
                    })(n, l, t, e, !0)).filter(_.isNotNullish),
                    u = n.map(n => (function(e, t, l, n) {
                        let a = null != e ? d.default.getApplication(e) : null;
                        if (null == a || null == e || t.has(e)) return null;
                        let r = B(a, l);
                        return t.add(e), {
                            key: e,
                            application: a,
                            lastPlayed: r,
                            supportsCloudSync: !1,
                            isNew: !1,
                            isLaunching: f.default.launchingGames.has(e),
                            isRunning: n.has(e),
                            isLaunchable: (0, v.isLaunchable)({
                                LibraryApplicationStore: g.default,
                                LaunchableGameStore: f.default,
                                DispatchApplicationStore: C.default,
                                ConnectedAppsStore: h.default,
                                applicationId: e,
                                branchId: null
                            }),
                            isUpdatingFlags: !1,
                            shouldShowInLibrary: !1,
                            libraryApplication: null,
                            defaultAction: null
                        }
                    })(n, l, t, e)).filter(_.isNotNullish),
                    s = [...u, ...r].sort((e, t) => e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1);
                return D = null != E.default.lastFetched && g.default.fetched, !i.isEqual(s, O) && (O = s, I.isPlatformEmbedded && R.default.setSystemTrayApplications(k(O).map(e => e.application).slice(0, 5)), !0)
            }
            class K extends s.default.Store {
                initialize() {
                    this.syncWith([d.default, E.default, f.default, m.default, C.default, S.default, g.default, L.default, A.default, h.default], V, 200), this.syncWith([y.default, p.default], () => !0)
                }
                get applicationFilterQuery() {
                    return G
                }
                get applicationViewItems() {
                    return O
                }
                get launchableApplicationViewItems() {
                    return k(O)
                }
                get libraryApplicationViewItems() {
                    return x(O)
                }
                get filteredLibraryApplicationViewItems() {
                    return F(this.libraryApplicationViewItems, G)
                }
                get sortedFilteredLibraryApplicationViewItems() {
                    return H(this.filteredLibraryApplicationViewItems, y.default.sortKey, y.default.sortDirection, p.default.locale)
                }
                get hiddenLibraryApplicationViewItems() {
                    return q(O)
                }
                get hasFetchedApplications() {
                    return D
                }
            }
            K.displayName = "ApplicationViewStore";
            var Y = new K(c.default, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    let {
                        query: t
                    } = e;
                    G = t
                }
            })