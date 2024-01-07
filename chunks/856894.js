            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var a, i, n = l("693566"),
                I = l.n(n),
                c = l("446674"),
                u = l("913144");

            function o(t) {
                let {
                    query: e,
                    guildId: l,
                    page: a,
                    categoryId: i
                } = t;
                return "query:'".concat(e, "' guildId:").concat(l, " page:").concat(a, " categoryId:").concat(i)
            }(a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
            let d = new I({
                    max: 20
                }),
                T = {};
            class C extends c.default.Store {
                getSearchResults(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    return d.get(n)
                }
                getFetchState(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    return T[n]
                }
            }
            C.displayName = "ApplicationDirectorySearchStore";
            var r = new C(u.default, {
                APPLICATION_DIRECTORY_FETCH_SEARCH: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    T = {
                        ...T,
                        [n]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i,
                        result: n
                    } = t, I = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    d.set(I, {
                        lastFetchTimeMs: Date.now(),
                        ...n
                    }), T = {
                        ...T,
                        [I]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    T = {
                        ...T,
                        [n]: 2
                    }
                }
            })