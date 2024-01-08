            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("808653"), n("222007"), n("424973");
            var a = n("249654"),
                s = n("988415"),
                i = n("455079"),
                l = n("697218"),
                r = n("544556"),
                o = n("138505"),
                u = n("117933"),
                d = n("922832");
            let c = null,
                E = null,
                f = {},
                _ = p(),
                h = g(),
                C = null,
                I = function() {
                    var e, t, n, a;
                    return (null === (t = window) || void 0 === t ? void 0 : null === (e = t.location) || void 0 === e ? void 0 : e.pathname) === d.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY ? d.FamilyCenterSubPages.REQUESTS : (null === (a = window) || void 0 === a ? void 0 : null === (n = a.location) || void 0 === n ? void 0 : n.pathname) === d.FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? d.FamilyCenterSubPages.SETTINGS : d.FamilyCenterSubPages.ACTIVITY
                }(),
                T = !1,
                S = !1,
                N = null,
                A = null,
                m = {};

            function p() {
                return {
                    [d.TeenActionDisplayType.USER_ADD]: {},
                    [d.TeenActionDisplayType.GUILD_ADD]: {},
                    [d.TeenActionDisplayType.USER_INTERACTION]: {},
                    [d.TeenActionDisplayType.GUILD_INTERACTION]: {},
                    [d.TeenActionDisplayType.USER_CALLED]: {}
                }
            }

            function g() {
                return {
                    [d.TeenActionDisplayType.USER_ADD]: 0,
                    [d.TeenActionDisplayType.GUILD_ADD]: 0,
                    [d.TeenActionDisplayType.USER_INTERACTION]: 0,
                    [d.TeenActionDisplayType.GUILD_INTERACTION]: 0,
                    [d.TeenActionDisplayType.USER_CALLED]: 0
                }
            }

            function R() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return f = e.length > 0 ? e.reduce((e, t) => ({
                    ...e,
                    [t.user_id]: t
                }), {}) : {}
            }

            function O(e) {
                void 0 !== e && (h = e)
            }

            function L(e, t) {
                let n = t ? _ : p();
                return _ = e.reduce((e, t) => {
                    let a = t.display_type;
                    return void 0 !== n[a] && void 0 === n[a][t.event_id] && (e[a][t.event_id] = t), e
                }, n)
            }

            function v(e) {
                m = e.reduce((e, t) => ({
                    ...e,
                    [t.id]: new o.FamilyCenterGuild(t)
                }), m)
            }

            function M() {
                S = !0
            }

            function P(e) {
                let {
                    linkedUsers: t,
                    familyCenterTeenActivity: n
                } = e, {
                    actions: s,
                    guilds: i,
                    totals: l,
                    teenId: r,
                    rangeStartId: o
                } = n;
                c = r, E = o, L(s), O(l), v(i), R(t), S = !1, N = a.default.fromTimestamp(Date.now()), T = !0
            }

            function D(e) {
                let {
                    linkedUsers: t
                } = e;
                R(t)
            }

            function y(e) {
                let {
                    linkedUsers: t
                } = e;
                R(t)
            }

            function x(e) {
                let {
                    familyCenterTeenActivity: t
                } = e;
                if (void 0 === t) return;
                let {
                    actions: n,
                    totals: s,
                    guilds: i,
                    teenId: l,
                    rangeStartId: r
                } = t;
                c = l, E = r, L(n), O(s), v(i), S = !1, N = a.default.fromTimestamp(Date.now())
            }

            function b(e) {
                let {
                    familyCenterTeenActivity: t
                } = e, {
                    actions: n,
                    guilds: a
                } = t;
                L(n, !0), v(a)
            }

            function U(e) {
                let {
                    linkedUsers: t
                } = e;
                R(t)
            }

            function G(e) {
                let {
                    linkedUsers: t
                } = e;
                R(t, !0)
            }

            function j(e) {
                let {
                    linkCode: t
                } = e;
                C = t
            }

            function k(e) {
                let {
                    tab: t
                } = e;
                I = t
            }

            function w(e) {
                let {
                    user: t
                } = e;
                if (void 0 === t.linked_users) return;
                let n = l.default.getUsers(),
                    a = t.linked_users.some(e => {
                        let {
                            user_id: t
                        } = e;
                        return void 0 === n[t]
                    });
                a && t.linked_users.length > Object.keys(f).length ? r.default.fetchLinkedUsers() : R(t.linked_users)
            }

            function F(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (A = null !== (t = (0, s.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : null)
            }

            function B() {
                c = null, E = null, f = {}, _ = p(), h = g(), m = {}, S = !1, N = null
            }
            class H extends i.default {
                takeSnapshot() {
                    return {
                        version: H.LATEST_SNAPSHOT_VERSION,
                        data: {
                            linkedUsers: Object.values(f),
                            teenActivityTotals: Object.entries(h).map(e => {
                                let [t, n] = e;
                                return "".concat(t, ":").concat(n)
                            }),
                            teenActivity: function() {
                                let e = [];
                                return Object.entries(_).forEach(t => {
                                    let [n, a] = t;
                                    e.push(...Object.values(a))
                                }), e
                            }(),
                            guilds: Object.values(m)
                        }
                    }
                }
                getSelectedTeenId() {
                    return c
                }
                getLinkedUsers() {
                    return f
                }
                getLinkTimestamp(e) {
                    var t;
                    let n = f[e];
                    return null == n ? null : null !== (t = n.updated_at) && void 0 !== t ? t : n.created_at
                }
                getRangeStartTimestamp() {
                    return null == E ? null : a.default.extractTimestamp(E)
                }
                getActionsForDisplayType(e) {
                    return Object.values(_[e])
                }
                getTotalForDisplayType(e) {
                    return h[e]
                }
                getLinkCode() {
                    return C
                }
                getGuild(e) {
                    return m[e]
                }
                getSelectedTab() {
                    return I
                }
                getStartId() {
                    return E
                }
                getIsInitialized() {
                    return T
                }
                getUserCountry() {
                    return A
                }
                isLoading() {
                    return S
                }
                canRefetch() {
                    return null === N || a.default.age(N) > d.FAMILY_CENTER_REFETCH_COOLDOWN
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(H.LATEST_SNAPSHOT_VERSION);
                        if (null != e) R(e.linkedUsers), v(e.guilds), L(e.teenActivity), h = e.teenActivityTotals.reduce((e, t) => {
                            let [n, a] = t.split(":"), s = (0, u.displayTypeFromString)(n);
                            return void 0 === s ? e : {
                                ...e,
                                [s]: parseInt(a, 10)
                            }
                        }, g())
                    }, this.registerActionHandlers({
                        CURRENT_USER_UPDATE: w,
                        CACHE_LOADED_LAZY: this.loadCache,
                        FAMILY_CENTER_INITIAL_LOAD: P,
                        FAMILY_CENTER_FETCH_START: M,
                        FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: D,
                        FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: x,
                        FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: b,
                        FAMILY_CENTER_REQUEST_LINK_SUCCESS: y,
                        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: U,
                        FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: G,
                        FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: j,
                        FAMILY_CENTER_HANDLE_TAB_SELECT: k,
                        SET_LOCATION_METADATA: F,
                        LOGOUT: B
                    }), this.waitFor(l.default)
                }
            }
            H.displayName = "FamilyCenterStore", H.LATEST_SNAPSHOT_VERSION = 3;
            var V = new H