            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return _
                }
            }), n("222007");
            var i, a, l = n("446674"),
                s = n("913144");
            (a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
            let r = {},
                u = {},
                o = new Set,
                d = {};
            class c extends l.default.Store {
                getApplication(e) {
                    if (null != e) return r[e]
                }
                getApplications() {
                    return r
                }
                getApplicationFetchState(e) {
                    if (null != e) return u[e]
                }
                getApplicationFetchStates() {
                    return u
                }
                isInvalidApplication(e) {
                    return null != e && o.has(e)
                }
                getInvalidApplicationIds() {
                    return o
                }
                isFetching(e) {
                    return 0 === this.getApplicationFetchState(e)
                }
                getApplicationLastFetchTime(e) {
                    if (null != e) return d[e]
                }
            }
            c.displayName = "ApplicationDirectoryApplicationsStore";
            var _ = new c(s.default, {
                APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    u = {
                        ...u,
                        [t]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
                    let {
                        application: t
                    } = e;
                    r = {
                        ...r,
                        [t.id]: t
                    }, u = {
                        ...u,
                        [t.id]: 1
                    };
                    let n = Date.now();
                    d = {
                        ...d,
                        [t.id]: n
                    }, o.has(t.id) && (o.delete(t.id), o = new Set(o))
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
                    let {
                        applicationId: t,
                        isInvalidApplication: n
                    } = e;
                    u = {
                        ...u,
                        [t]: 2
                    }, n && (o.add(t), o = new Set(o))
                }
            })