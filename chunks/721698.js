            "use strict";
            l.r(e), l.d(e, {
                getEmbedApplication: function() {
                    return _
                },
                getApplication: function() {
                    return E
                },
                getCategories: function() {
                    return A
                },
                getSimilarApplications: function() {
                    return p
                },
                search: function() {
                    return f
                },
                getCollections: function() {
                    return R
                },
                fetchIntegrationApplicationIdsForMyGuilds: function() {
                    return O
                }
            }), l("222007");
            var a = l("981980"),
                i = l("872717"),
                n = l("913144"),
                I = l("915639"),
                c = l("349503"),
                u = l("831109"),
                o = l("810047"),
                d = l("856894"),
                T = l("388647"),
                C = l("506061"),
                r = l("49111");
            let s = new Map;
            async function _(t) {
                var e;
                let l = Date.now(),
                    I = null !== (e = s.get(t)) && void 0 !== e ? e : 0;
                if (c.default.getApplicationFetchState(t) === c.FetchState.FETCHING || c.default.isInvalidApplication(t) || l < I + 6e5) return;
                s.set(t, l), n.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: t
                });
                let u = new a.default(1e3, 5e3),
                    o = (t, e) => 429 === t.status && !!(u.fails < 10) && (u.fail(() => {
                        e(void 0, o)
                    }), !0);
                try {
                    let e = await i.default.get({
                            url: r.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(t),
                            backoff: u,
                            retries: 10,
                            interceptResponse: o
                        }),
                        l = e.body;
                    n.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: l
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: t,
                        isInvalidApplication: !0
                    })
                }
            }
            async function E(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = Date.now(),
                    a = c.default.getApplicationFetchState(t),
                    u = c.default.getApplicationLastFetchTime(t),
                    {
                        dontRefetchMs: o
                    } = e;
                if (a !== c.FetchState.FETCHING) {
                    if (!(null != u && u + (null != o ? o : 6e5) > l)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                            applicationId: t
                        });
                        try {
                            let e = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_APPLICATION(t),
                                query: {
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                                application: e.body
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                                applicationId: t,
                                isInvalidApplication: !0
                            })
                        }
                    }
                }
            }
            async function A() {
                let t = Date.now(),
                    e = u.default.getLastFetchTimeMs();
                if (null != e && e + 6e5 > t) return;
                let l = await i.default.get({
                    url: r.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
                    query: {
                        locale: I.default.locale
                    }
                });
                n.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
                    categories: l.body
                })
            }
            async function p(t) {
                var e;
                let {
                    applicationId: l,
                    guildId: a,
                    options: c
                } = t, {
                    page: u
                } = null != c ? c : {}, o = Date.now(), d = T.default.getFetchState({
                    applicationId: l,
                    guildId: a
                }), {
                    lastFetchTimeMs: C
                } = null !== (e = T.default.getSimilarApplications({
                    applicationId: l,
                    guildId: a
                })) && void 0 !== e ? e : {};
                if (d !== T.FetchState.FETCHING) {
                    if (null == C || !(C + 6e5 > o)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                            applicationId: l,
                            guildId: a,
                            page: u
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_SIMILAR(l),
                                query: {
                                    guild_id: a,
                                    page: u,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                                applicationId: l,
                                guildId: a,
                                similarApplications: t.body.applications,
                                loadId: t.body.load_id,
                                page: u,
                                totalPages: t.body.num_pages
                            })
                        } catch (t) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                                applicationId: l,
                                guildId: a,
                                page: u
                            })
                        }
                    }
                }
            }
            async function f(t) {
                var e;
                let {
                    query: l,
                    guildId: a,
                    options: c,
                    onSuccessCallback: u
                } = t, {
                    page: o,
                    categoryId: T
                } = null != c ? c : {}, C = Date.now(), s = d.default.getFetchState({
                    query: l,
                    guildId: a,
                    page: o,
                    categoryId: T
                }), {
                    lastFetchTimeMs: _
                } = null !== (e = d.default.getSearchResults({
                    query: l,
                    guildId: a,
                    page: o,
                    categoryId: T
                })) && void 0 !== e ? e : {};
                if (s !== d.FetchState.FETCHING) {
                    if (null == _ || !(_ + 6e5 > C)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                            query: l,
                            guildId: a,
                            page: o,
                            categoryId: T
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                                query: {
                                    query: l,
                                    guild_id: a,
                                    page: o,
                                    category_id: T,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                                query: l,
                                guildId: a,
                                page: o,
                                categoryId: T,
                                result: {
                                    results: t.body.results,
                                    countsByCategory: t.body.counts_by_category,
                                    totalCount: t.body.result_count,
                                    totalPages: t.body.num_pages,
                                    type: t.body.type,
                                    loadId: t.body.load_id
                                }
                            }), null == u || u(t.body.result_count)
                        } catch (t) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                                query: l,
                                guildId: a,
                                page: o,
                                categoryId: T
                            })
                        }
                    }
                }
            }
            async function R() {
                let {
                    includesInactive: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = Date.now(), l = o.default.getFetchState({
                    includesInactive: t
                }), a = o.default.getLastFetchTimeMs({
                    includesInactive: t
                });
                if (l !== o.FetchState.FETCHING) {
                    if (null == a || !(a + 6e5 > e)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                            includesInactive: t
                        });
                        try {
                            let e = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                                query: {
                                    includes_inactive: t,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                                collections: e.body,
                                includesInactive: t
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                                includesInactive: t
                            })
                        }
                    }
                }
            }
            async function O() {
                let t = Date.now(),
                    e = C.default.getFetchState(),
                    l = C.default.getLastFetchTimeMs(),
                    a = C.default.getNextFetchRetryTimeMs();
                if (e !== C.FetchState.FETCHING && (null == l || !(l + 864e5 > t))) {
                    if (null == a || !(t < a)) {
                        n.default.dispatch({
                            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                            });
                            n.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                                guildIdToApplicationIds: t.body
                            })
                        } catch (e) {
                            var I;
                            let t = (null == e ? void 0 : e.status) === 429;
                            n.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                                retryAfterSeconds: t ? null == e ? void 0 : null === (I = e.body) || void 0 === I ? void 0 : I.retry_after : void 0
                            })
                        }
                    }
                }
            }