            "use strict";
            n.r(t), n.d(t, {
                registerExperiment: function() {
                    return ee
                },
                default: function() {
                    return es
                }
            }), n("702976"), n("70102"), n("222007"), n("781738");
            var i = n("627445"),
                r = n.n(i),
                s = n("917351"),
                a = n.n(s),
                o = n("210696"),
                l = n.n(o),
                u = n("95410"),
                c = n("355025"),
                d = n("271938"),
                f = n("455079"),
                E = n("599110"),
                h = n("316805"),
                p = n("565034"),
                _ = n("49111");
            let S = "scientist:triggered",
                m = "exerimentOverrides",
                T = "userExperimentOverrides",
                g = "guildExperimentOverrides",
                I = !1,
                C = {},
                v = {},
                A = [],
                R = [],
                N = {},
                O = {},
                D = {},
                y = {},
                P = {},
                L = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
                b = {};

            function M(e) {
                let t = b[e];
                if (void 0 !== t) return t;
                {
                    let t = l.v3(e);
                    return b[e] = t, t
                }
            }
            let U = p.TriggerDebuggingAAExperiments.map(e => M(e)),
                G = {
                    title: "Unnamed Experiment",
                    description: "No description provided"
                };

            function w(e, t) {
                return e || U.includes(t)
            }

            function k(e) {
                var t;
                return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & _.UserFlags.STAFF) === _.UserFlags.STAFF || null != e.personal_connection_id || !1
            }

            function x(e, t, n, i) {
                let r = "".concat(t.type, "|").concat(e),
                    s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
                if (t.type === p.ExperimentTypes.USER) return s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
                if (t.type === p.ExperimentTypes.GUILD) return r += "|".concat(t.guildId), s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
                throw Error()
            }

            function F(e) {
                if (e.type === p.ExperimentTypes.USER) return M("".concat(e.bucket, "|").concat(e.revision));
                if (e.type === p.ExperimentTypes.GUILD) return M("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
                throw Error()
            }
            let V = Date.now();

            function B(e, t, n, i) {
                let r = C[x(e, t, n, i)];
                if (null == r) return !1;
                let s = Date.now() - r.time > 6048e5;
                return !s && r.hash === F(t)
            }

            function H(e) {
                let {
                    experimentId: t,
                    descriptor: n,
                    location: i,
                    location_stack: r,
                    context: s,
                    fingerprint: a,
                    excluded: o,
                    exposureType: l
                } = e;
                if (n.override) return !1;
                let u = l === p.ExposureTypes.AUTO_FALLBACK && !!n.triggerDebuggingEnabled,
                    c = B(t, n, i, u);
                if (c) return !1;
                if (n.type === p.ExperimentTypes.USER) {
                    let e = {
                        name: t,
                        revision: n.revision,
                        population: n.population,
                        bucket: n.bucket,
                        location: i,
                        location_stack: r,
                        hash_result: n.hashResult,
                        excluded: o,
                        exposure_type: l
                    };
                    null != s && (e.context_guild_id = s.guildId);
                    let c = u ? _.AnalyticEvents.EXPERIMENT_USER_TRIGGERED_FALLBACK : _.AnalyticEvents.EXPERIMENT_USER_TRIGGERED;
                    E.default.track(c, e, {
                        flush: !0,
                        fingerprint: a
                    })
                } else if (n.type === p.ExperimentTypes.GUILD) {
                    let e = u ? _.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : _.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED;
                    E.default.track(e, {
                        name: t,
                        revision: n.revision,
                        bucket: n.bucket,
                        guild_id: n.guildId,
                        location: i,
                        location_stack: r,
                        hash_result: n.hashResult,
                        excluded: o,
                        exposure_type: l
                    }, {
                        flush: !0,
                        fingerprint: a
                    })
                }
                C[x(t, n, i, u)] = {
                    time: Date.now(),
                    hash: F(n)
                }, $(C)
            }

            function j(e) {
                let [t, n] = e;
                return null != h.GUILD_FILTERS[t] ? (0, h.GUILD_FILTERS)[t](n) : null
            }

            function Y(e) {
                let [t, n] = e;
                return {
                    buckets: t.map(e => {
                        let [t, n] = e;
                        return {
                            bucket: t,
                            positions: n.map(e => {
                                let {
                                    s: t,
                                    e: n
                                } = e;
                                return {
                                    start: t,
                                    end: n
                                }
                            })
                        }
                    }),
                    filters: n.map(j),
                    rawFilterData: n
                }
            }

            function W(e) {
                !L && "CONNECTION_OPEN" === e.type && k(e.user) && (L = !0), N = {}, O = {}, D = {};
                let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
                    {
                        experiments: n,
                        guildExperiments: i
                    } = e;
                t && K(n, i), I = !0
            }

            function K(e, t) {
                A = e, R = null != t ? t : [], e.forEach(e => {
                    let [t, n, i, r, s, a, o, l] = e;
                    N[t] = {
                        type: "user",
                        revision: n,
                        population: s,
                        bucket: i,
                        override: 0 === r,
                        hashResult: null != a ? a : -1,
                        aaMode: 1 === o,
                        triggerDebuggingEnabled: w(1 === l, t)
                    }
                }), null != t && t.forEach(e => {
                    let [t, n, i, r, s, a, o, l, u, c] = e;
                    O[t] = {
                        hashKey: n,
                        revision: i,
                        populations: r.map(Y),
                        overrides: function(e) {
                            let t = {};
                            if (null == e) return t;
                            for (let {
                                    b: n,
                                    k: i
                                }
                                of e)
                                for (let e of i) t[e] = n;
                            return t
                        }(s),
                        overridesFormatted: (null != a ? a : []).map(e => e.map(Y)),
                        holdoutName: null != o ? o : null,
                        holdoutBucket: null != l ? l : null,
                        aaMode: 1 === u,
                        triggerDebuggingEnabled: w(1 === c, t)
                    }
                })
            }

            function z(e, t, n) {
                let i = null;
                for (let {
                        buckets: s,
                        filters: a
                    }
                    of t) {
                    var r = !0;
                    if (null != a) {
                        for (let t of a)
                            if (null != t && !t(e)) {
                                r = !1;
                                break
                            }
                    }
                    if (!r) continue;
                    let t = s.find(e => {
                        let {
                            positions: t
                        } = e;
                        return t.some(e => {
                            let {
                                start: t,
                                end: i
                            } = e;
                            return n >= t && n < i
                        })
                    });
                    if ((i = null != t ? t.bucket : p.ExperimentBuckets.CONTROL) === p.ExperimentBuckets.NOT_ELIGIBLE) break;
                    return i
                }
                return null
            }

            function q(e) {
                let t = {};
                for (let i in e) {
                    var n;
                    let r = e[i];
                    for (let e of (t[i] = {
                            ...r
                        }, t[i].populations)) e.filters = e.rawFilterData.map(j);
                    for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
                        for (let t of e) t.filters = t.rawFilterData.map(j)
                }
                return t
            }

            function X(e) {
                let {
                    serializedExperimentStore: t,
                    user: n
                } = e;
                !L && k(n) && (L = !0), I = t.hasLoadedExperiments, C = t.trackedExposureExperiments, N = t.loadedUserExperiments, y = t.userExperimentOverrides, P = t.guildExperimentOverrides, O = q(t.loadedGuildExperiments), D = {}
            }

            function Q() {
                I = !0
            }

            function Z(e) {
                let {
                    isSwitchingAccount: t
                } = e;
                u.default.remove(S), !t && (u.default.remove(m), u.default.remove(T), u.default.remove(g), y = {}, P = {}), N = {}, A = [], C = {}, I = !1
            }

            function J() {
                I = !1, C = {}, u.default.remove(S)
            }

            function $(e) {
                u.default.set(S, {
                    v: 1,
                    e: e
                })
            }

            function ee(e) {
                let {
                    experimentId: t,
                    experimentType: n,
                    title: i,
                    description: r,
                    buckets: s
                } = e;
                v = {
                    ...v,
                    [t]: {
                        type: n,
                        title: i,
                        description: r,
                        buckets: s
                    }
                }
            }

            function et(e) {
                let t, n, {
                        store: i,
                        renderFunctions: s
                    } = e,
                    a = "function" == typeof i.getExperimentId ? i.getExperimentId() : null;
                if (!a) throw Error("Experiment Store must have a static getExperimentId method defined");
                let o = "function" == typeof i.getMetaData ? i.getMetaData() : G;
                Object.keys(s).forEach(e => {
                    if (e === p.ExperimentTypes.NONE_LEGACY) return;
                    r(null != s[e], "Unexpected missing renderFunctions"), t = e;
                    let i = Object.keys(s[e]).map(e => parseInt(e));
                    n = i
                }), ee({
                    experimentId: a,
                    experimentType: null != t ? t : p.ExperimentTypes.USER,
                    title: o.title,
                    description: o.description,
                    buckets: null != n ? n : []
                })
            }

            function en(e) {
                let {
                    experimentId: t,
                    experimentBucket: n
                } = e, i = v[t];
                if (null == i) return !1;
                for (let e of (null == n ? (y = {
                        ...y
                    }, delete y[t], P = {
                        ...P
                    }, delete P[t]) : "user" === i.type ? y = {
                        ...y,
                        [t]: {
                            type: i.type,
                            revision: 1,
                            population: 0,
                            bucket: n,
                            override: !0
                        }
                    } : P = {
                        ...P,
                        [t]: {
                            type: i.type,
                            revision: 1,
                            bucket: n,
                            override: !0
                        }
                    }, [y, P]))
                    for (let t in e) null == v[t] && delete y[t];
                u.default.set(T, y), u.default.set(g, P)
            }

            function ei(e) {
                let {
                    guild: t
                } = e;
                for (let e in D) {
                    let [n] = e.split(":");
                    t.id === n && delete D[e]
                }
            }
            class er extends f.default {
                initialize() {
                    C = function() {
                        let e = u.default.get(S);
                        if (null == e || 1 !== e.v) return {};
                        let t = e.e,
                            n = Date.now(),
                            i = !1;
                        for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
                        return i && $(t), t
                    }(), ! function() {
                        var e, t, n;
                        let i = [null !== (e = u.default.get(m)) && void 0 !== e ? e : {}, null !== (t = u.default.get(T)) && void 0 !== t ? t : {}, null !== (n = u.default.get(g)) && void 0 !== n ? n : {}];
                        y = {}, P = {};
                        let r = !a.isEmpty(i[0]);
                        for (let e of i)
                            for (let t in e) {
                                let n = e[t];
                                null == n || n.type !== p.ExperimentTypes.USER && n.type !== p.ExperimentTypes.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], r = !0) : n.type === p.ExperimentTypes.USER ? y[t] = n : P[t] = n
                            }
                        let s = (0, c.getBuildOverrideExperiments)();
                        for (let e in s) y[e] = {
                            type: p.ExperimentTypes.USER,
                            revision: 1,
                            population: 0,
                            override: !0,
                            fromCookie: !0,
                            bucket: s[e]
                        }, P[e] = {
                            type: p.ExperimentTypes.GUILD,
                            revision: 1,
                            override: !0,
                            fromCookie: !0,
                            bucket: s[e]
                        }, r = !0;
                        r && (u.default.set(T, y), u.default.set(g, P))
                    }()
                }
                takeSnapshot() {
                    return {
                        version: er.LATEST_SNAPSHOT_VERSION,
                        data: {
                            rawUserExperiments: A,
                            rawGuildExperiments: R
                        }
                    }
                }
                get hasLoadedExperiments() {
                    return I
                }
                hasRegisteredExperiment(e) {
                    return null != v[e]
                }
                getUserExperimentDescriptor(e) {
                    if (L) {
                        let t = y[e];
                        if (null != t) return t
                    }
                    let t = M(e);
                    return N["".concat(t)]
                }
                getGuildExperimentDescriptor(e, t) {
                    let n = null != t ? t : "",
                        i = P[e];
                    if (L && null != i) return i;
                    let r = "".concat(n, ":").concat(e);
                    if (r in D) return D[r];
                    let s = function e(t, n) {
                        var i, r;
                        let s = M(n),
                            a = O["".concat(s)];
                        if (null == a) return null;
                        let {
                            revision: o,
                            aaMode: l
                        } = a, u = a.overrides[t], c = a.triggerDebuggingEnabled;
                        if (null != u) return u === p.ExperimentBuckets.NOT_ELIGIBLE ? null : {
                            type: p.ExperimentTypes.GUILD,
                            guildId: t,
                            revision: o,
                            bucket: u,
                            override: !0,
                            hashResult: -1,
                            triggerDebuggingEnabled: c
                        };
                        let d = "".concat(null !== (i = a.hashKey) && void 0 !== i ? i : n, ":").concat(t),
                            f = M(d),
                            E = f % 1e4,
                            h = null,
                            _ = null !== (r = a.overridesFormatted) && void 0 !== r ? r : [];
                        for (let e of _)
                            if (null !== (h = z(t, e, E))) return {
                                type: p.ExperimentTypes.GUILD,
                                guildId: t,
                                revision: a.revision,
                                bucket: h,
                                override: !0,
                                hashResult: E,
                                triggerDebuggingEnabled: c
                            };
                        if (null == (h = z(t, a.populations, E))) return null;
                        if (null != a.holdoutName && null != a.holdoutBucket && a.holdoutName !== n) {
                            let n = e(t, a.holdoutName);
                            if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && H({
                                    experimentId: a.holdoutName,
                                    descriptor: n
                                }), (null == n ? void 0 : n.bucket) === a.holdoutBucket)) return null
                        }
                        return {
                            type: p.ExperimentTypes.GUILD,
                            guildId: t,
                            revision: a.revision,
                            bucket: h,
                            hashResult: E,
                            aaMode: l,
                            triggerDebuggingEnabled: c
                        }
                    }(n, e);
                    return D[r] = s, s
                }
                getUserExperimentBucket(e) {
                    let t = this.getUserExperimentDescriptor(e);
                    return null != t ? t.bucket : p.ExperimentBuckets.NOT_ELIGIBLE
                }
                getGuildExperimentBucket(e, t) {
                    let n = this.getGuildExperimentDescriptor(e, t);
                    return null != n ? n.bucket : p.ExperimentBuckets.NOT_ELIGIBLE
                }
                getAllUserExperimentDescriptors() {
                    return N
                }
                getGuildExperiments() {
                    return O
                }
                getLoadedUserExperiment(e) {
                    return N[M(e)]
                }
                getLoadedGuildExperiment(e) {
                    return O[M(e)]
                }
                getRecentExposures(e, t) {
                    let n = "".concat(e, "|").concat(t, "|");
                    return Object.entries(C).filter(e => {
                        let [t] = e;
                        return t.startsWith(n)
                    }).map(e => {
                        let [t, {
                            time: i
                        }] = e;
                        return [t.replace(n, ""), i]
                    })
                }
                getRegisteredExperiments() {
                    return v
                }
                getAllExperimentOverrideDescriptors() {
                    return L ? {
                        ...y,
                        ...P
                    } : {}
                }
                getExperimentOverrideDescriptor(e) {
                    var t;
                    return L ? null !== (t = y[e]) && void 0 !== t ? t : P[e] : null
                }
                getAllExperimentAssignments() {
                    let e = {},
                        t = {};
                    for (let n in Object.keys(v).forEach(e => {
                            t[M("".concat(e))] = e
                        }), N) {
                        let i = t[n];
                        null != i && (e[i] = N[n].bucket)
                    }
                    for (let t in D) {
                        let n = D[t];
                        null != n && (e[t] = n.bucket)
                    }
                    return e
                }
                getSerializedState() {
                    let e = {};
                    for (let t in O)
                        for (let n of (e[t] = JSON.parse(JSON.stringify(O[t])), e[t].populations)) n.filters = [];
                    return {
                        hasLoadedExperiments: I,
                        trackedExposureExperiments: C,
                        loadedUserExperiments: N,
                        loadedGuildExperiments: e,
                        userExperimentOverrides: y,
                        guildExperimentOverrides: P
                    }
                }
                hasExperimentTrackedExposure(e, t, n, i) {
                    return B(e, t, n, i)
                }
                constructor() {
                    super(), this.trackExposure = H, this.loadCache = () => {
                        let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
                        null != e && ("loadedUserExperiments" in e ? (N = e.loadedUserExperiments, O = q(e.loadedGuildExperiments)) : K(e.rawUserExperiments, e.rawGuildExperiments))
                    }, this.registerActionHandlers({
                        LOGOUT: Z,
                        LOGIN_SUCCESS: J,
                        CONNECTION_OPEN: W,
                        EXPERIMENTS_FETCH_SUCCESS: W,
                        OVERLAY_INITIALIZE: X,
                        CACHE_LOADED: this.loadCache,
                        EXPERIMENTS_FETCH_FAILURE: Q,
                        EXPERIMENT_REGISTER_LEGACY: et,
                        EXPERIMENT_OVERRIDE_BUCKET: en,
                        GUILD_CREATE: ei,
                        GUILD_UPDATE: ei
                    })
                }
            }
            er.displayName = "ExperimentStore", er.LATEST_SNAPSHOT_VERSION = 1;
            var es = new er