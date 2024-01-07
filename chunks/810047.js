            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return s
                }
            });
            var a, i, n = l("917351"),
                I = l.n(n),
                c = l("446674"),
                u = l("913144");
            (a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
            let o = {},
                d = {},
                T = {};

            function C(t) {
                let {
                    includesInactive: e
                } = t;
                return "includes_inactive:".concat(e)
            }
            class r extends c.default.Store {
                getLastFetchTimeMs(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return T[C({
                        includesInactive: e
                    })]
                }
                getFetchState(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return d[C({
                        includesInactive: e
                    })]
                }
                getCollections(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return o[C({
                        includesInactive: e
                    })]
                }
            }
            var s = new r(u.default, {
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [C({
                            includesInactive: e
                        })]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(t) {
                    var e;
                    let {
                        collections: l,
                        includesInactive: a
                    } = t, i = C({
                        includesInactive: a
                    });
                    let n = (e = l.map(t => {
                        var e;
                        return t.application_directory_collection_items = (e = t.application_directory_collection_items, I.sortBy(e, ["position", "id"])), t
                    }), I.sortBy(e, ["position", "id"]));
                    o = {
                        ...o,
                        [i]: n
                    }, d = {
                        ...d,
                        [i]: 1
                    };
                    let c = Date.now();
                    T = {
                        ...T,
                        [i]: c
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [C({
                            includesInactive: e
                        })]: 2
                    }
                }
            })