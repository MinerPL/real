(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86851"], {
        165590: function(t, e, r) {
            "use strict";

            function n() {
                return {
                    get(t, e) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                miss: () => Promise.resolve()
                            },
                            n = e();
                        return n.then(t => Promise.all([t, r.miss(t)])).then(t => {
                            let [e] = t;
                            return e
                        })
                    },
                    set: (t, e) => Promise.resolve(e),
                    delete: t => Promise.resolve(),
                    clear: () => Promise.resolve()
                }
            }
            r.r(e), r.d(e, {
                createNullCache: function() {
                    return n
                }
            })
        },
        647945: function(t, e, r) {
            var n, i;
            t = r.nmd(t), n = this, i = function() {
                "use strict";

                function t(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), r.push.apply(r, n)
                    }
                    return r
                }

                function e(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? t(Object(n), !0).forEach(function(t) {
                            var r, i, a;
                            r = e, i = t, a = n[t], i in r ? Object.defineProperty(r, i, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[i] = a
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function r(t, e) {
                    if (null == t) return {};
                    var r, n, i = function(t, e) {
                        if (null == t) return {};
                        var r, n, i = {},
                            a = Object.keys(t);
                        for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                        return i
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                    return i
                }

                function n(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                            var r = [],
                                n = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e); n = !0);
                            } catch (t) {
                                i = !0, a = t
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            return r
                        }
                    }(t, e) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i(t) {
                    return function(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                            return r
                        }
                    }(t) || function(t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function a() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        e = {};
                    return {
                        get: function(r, n) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                },
                                a = JSON.stringify(r);
                            if (a in e) return Promise.resolve(t.serializable ? JSON.parse(e[a]) : e[a]);
                            var o = n(),
                                s = i && i.miss || function() {
                                    return Promise.resolve()
                                };
                            return o.then(function(t) {
                                return s(t)
                            }).then(function() {
                                return o
                            })
                        },
                        set: function(r, n) {
                            return e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n, Promise.resolve(n)
                        },
                        delete: function(t) {
                            return delete e[JSON.stringify(t)], Promise.resolve()
                        },
                        clear: function() {
                            return e = {}, Promise.resolve()
                        }
                    }
                }

                function o(t, e, r) {
                    var n = {
                        "x-algolia-api-key": r,
                        "x-algolia-application-id": e
                    };
                    return {
                        headers: function() {
                            return t === l.WithinHeaders ? n : {}
                        },
                        queryParameters: function() {
                            return t === l.WithinQueryParameters ? n : {}
                        }
                    }
                }

                function s(t) {
                    var e = 0;
                    return t(function r() {
                        return e++, new Promise(function(n) {
                            setTimeout(function() {
                                n(t(r))
                            }, Math.min(100 * e, 1e3))
                        })
                    })
                }

                function u(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
                        return Promise.resolve()
                    };
                    return Object.assign(t, {
                        wait: function(r) {
                            return u(t.then(function(t) {
                                return Promise.all([e(t, r), t])
                            }).then(function(t) {
                                return t[1]
                            }))
                        }
                    })
                }

                function c(t, e) {
                    return Object.keys(void 0 !== e ? e : {}).forEach(function(r) {
                        t[r] = e[r](t)
                    }), t
                }

                function f(t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    var i = 0;
                    return t.replace(/%s/g, function() {
                        return encodeURIComponent(r[i++])
                    })
                }
                var l = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function h(t, e) {
                    var r = t || {},
                        n = r.data || {};
                    return Object.keys(r).forEach(function(t) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(t) && (n[t] = r[t])
                    }), {
                        data: Object.entries(n).length > 0 ? n : void 0,
                        timeout: r.timeout || e,
                        headers: r.headers || {},
                        queryParameters: r.queryParameters || {},
                        cacheable: r.cacheable
                    }
                }
                var d = {
                    Read: 1,
                    Write: 2,
                    Any: 3
                };

                function p(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return e({}, t, {
                        status: r,
                        lastUpdate: Date.now()
                    })
                }

                function m(t) {
                    return {
                        protocol: t.protocol || "https",
                        url: t.url,
                        accept: t.accept || d.Any
                    }
                }
                var g = "DELETE",
                    v = "POST";

                function y(t, r, n, a) {
                    var o, s, u, c, f, l, h = [],
                        d = function(t, r) {
                            if ("GET" !== t.method && (void 0 !== t.data || void 0 !== r.data)) return JSON.stringify(Array.isArray(t.data) ? t.data : e({}, t.data, {}, r.data))
                        }(n, a),
                        g = (o = t, s = a, u = e({}, o.headers, {}, s.headers), c = {}, Object.keys(u).forEach(function(t) {
                            var e = u[t];
                            c[t.toLowerCase()] = e
                        }), c),
                        v = n.method,
                        y = "GET" !== n.method ? {} : e({}, n.data, {}, a.data),
                        b = e({
                            "x-algolia-agent": t.userAgent.value
                        }, t.queryParameters, {}, y, {}, a.queryParameters),
                        S = 0,
                        w = function e(r, i) {
                            var o = r.pop();
                            if (void 0 === o) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: _(h)
                            };
                            var s = {
                                    data: d,
                                    headers: g,
                                    method: v,
                                    url: function(t, e, r) {
                                        var n = x(r),
                                            i = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
                                        return n.length && (i += "?".concat(n)), i
                                    }(o, n.path, b),
                                    connectTimeout: i(S, t.timeouts.connect),
                                    responseTimeout: i(S, a.timeout)
                                },
                                u = function(t) {
                                    var e = {
                                        request: s,
                                        response: t,
                                        host: o,
                                        triesLeft: r.length
                                    };
                                    return h.push(e), e
                                },
                                c = {
                                    onSucess: function(t) {
                                        return function(t) {
                                            try {
                                                return JSON.parse(t.content)
                                            } catch (r) {
                                                var e;
                                                throw e = r.message, {
                                                    name: "DeserializationError",
                                                    message: e,
                                                    response: t
                                                }
                                            }
                                        }(t)
                                    },
                                    onRetry: function(n) {
                                        var a = u(n);
                                        return n.isTimedOut && S++, Promise.all([t.logger.info("Retryable failure", P(a)), t.hostsCache.set(o, p(o, n.isTimedOut ? 3 : 2))]).then(function() {
                                            return e(r, i)
                                        })
                                    },
                                    onFail: function(t) {
                                        throw u(t),
                                            function(t, e) {
                                                var r = t.content,
                                                    n = t.status,
                                                    i = r;
                                                try {
                                                    i = JSON.parse(r).message
                                                } catch (t) {}
                                                return {
                                                    name: "ApiError",
                                                    message: i,
                                                    status: n,
                                                    transporterStackTrace: e
                                                }
                                            }(t, _(h))
                                    }
                                };
                            return t.requester.send(s).then(function(t) {
                                var e, r, n, i, a, o, s;
                                return e = t, r = c, (i = (n = e).status, n.isTimedOut || (o = (a = n).isTimedOut, s = a.status, !o && 0 == ~~s) || 2 != ~~(i / 100) && 4 != ~~(i / 100)) ? r.onRetry(e) : 2 == ~~(e.status / 100) ? r.onSucess(e) : r.onFail(e)
                            })
                        };
                    return (f = t.hostsCache, Promise.all((l = r).map(function(t) {
                        return f.get(t, function() {
                            return Promise.resolve(p(t))
                        })
                    })).then(function(t) {
                        var e = t.filter(function(t) {
                                var e;
                                return 1 === (e = t).status || Date.now() - e.lastUpdate > 12e4
                            }),
                            r = t.filter(function(t) {
                                var e;
                                return 3 === (e = t).status && Date.now() - e.lastUpdate <= 12e4
                            }),
                            n = [].concat(i(e), i(r));
                        return {
                            getTimeout: function(t, e) {
                                return (0 === r.length && 0 === t ? 1 : r.length + 3 + t) * e
                            },
                            statelessHosts: n.length > 0 ? n.map(function(t) {
                                return m(t)
                            }) : l
                        }
                    })).then(function(t) {
                        return w(i(t.statelessHosts).reverse(), t.getTimeout)
                    })
                }

                function b(t) {
                    var e = t.hostsCache,
                        r = t.logger,
                        i = t.requester,
                        a = t.requestsCache,
                        o = t.responsesCache,
                        s = t.timeouts,
                        u = t.userAgent,
                        c = t.hosts,
                        f = t.queryParameters,
                        l = {
                            hostsCache: e,
                            logger: r,
                            requester: i,
                            requestsCache: a,
                            responsesCache: o,
                            timeouts: s,
                            userAgent: u,
                            headers: t.headers,
                            queryParameters: f,
                            hosts: c.map(function(t) {
                                return m(t)
                            }),
                            read: function(t, e) {
                                var r = h(e, l.timeouts.read),
                                    i = function() {
                                        return y(l, l.hosts.filter(function(t) {
                                            return 0 != (t.accept & d.Read)
                                        }), t, r)
                                    };
                                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return i();
                                var a = {
                                    request: t,
                                    mappedRequestOptions: r,
                                    transporter: {
                                        queryParameters: l.queryParameters,
                                        headers: l.headers
                                    }
                                };
                                return l.responsesCache.get(a, function() {
                                    return l.requestsCache.get(a, function() {
                                        return l.requestsCache.set(a, i()).then(function(t) {
                                            return Promise.all([l.requestsCache.delete(a), t])
                                        }, function(t) {
                                            return Promise.all([l.requestsCache.delete(a), Promise.reject(t)])
                                        }).then(function(t) {
                                            var e = n(t, 2);
                                            return e[0], e[1]
                                        })
                                    })
                                }, {
                                    miss: function(t) {
                                        return l.responsesCache.set(a, t)
                                    }
                                })
                            },
                            write: function(t, e) {
                                return y(l, l.hosts.filter(function(t) {
                                    return 0 != (t.accept & d.Write)
                                }), t, h(e, l.timeouts.write))
                            }
                        };
                    return l
                }

                function x(t) {
                    return Object.keys(t).map(function(e) {
                        var r;
                        return f("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]))
                    }).join("&")
                }

                function _(t) {
                    return t.map(function(t) {
                        return P(t)
                    })
                }

                function P(t) {
                    var r = t.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return e({}, t, {
                        request: e({}, t.request, {
                            headers: e({}, t.request.headers, {}, r)
                        })
                    })
                }
                var S = function(t) {
                        return function(e, r) {
                            return t.transporter.write({
                                method: v,
                                path: "2/abtests",
                                data: e
                            }, r)
                        }
                    },
                    w = function(t) {
                        return function(e, r) {
                            return t.transporter.write({
                                method: g,
                                path: f("2/abtests/%s", e)
                            }, r)
                        }
                    },
                    T = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("2/abtests/%s", e)
                            }, r)
                        }
                    },
                    O = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "2/abtests"
                            }, e)
                        }
                    },
                    I = function(t) {
                        return function(e, r) {
                            return t.transporter.write({
                                method: v,
                                path: f("2/abtests/%s/stop", e)
                            }, r)
                        }
                    },
                    j = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/strategies/personalization"
                            }, e)
                        }
                    },
                    D = function(t) {
                        return function(e, r) {
                            return t.transporter.write({
                                method: v,
                                path: "1/strategies/personalization",
                                data: e
                            }, r)
                        }
                    };

                function R(t) {
                    return function e(r) {
                        return t.request(r).then(function(n) {
                            if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
                                cursor: n.cursor
                            }) : e({
                                page: (r.page || 0) + 1
                            })
                        })
                    }({})
                }
                var E = function(t) {
                        return function(n, i) {
                            var a = i || {},
                                o = a.queryParameters,
                                c = r(a, ["queryParameters"]),
                                f = e({
                                    acl: n
                                }, void 0 !== o ? {
                                    queryParameters: o
                                } : {});
                            return u(t.transporter.write({
                                method: v,
                                path: "1/keys",
                                data: f
                            }, c), function(e, r) {
                                return s(function(n) {
                                    return L(t)(e.key, r).catch(function(t) {
                                        if (404 !== t.status) throw t;
                                        return n()
                                    })
                                })
                            })
                        }
                    },
                    k = function(t) {
                        return function(e, r, n) {
                            var i = h(n);
                            return i.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                                method: v,
                                path: "1/clusters/mapping",
                                data: {
                                    cluster: r
                                }
                            }, i)
                        }
                    },
                    N = function(t) {
                        return function(e, r, n) {
                            return t.transporter.write({
                                method: v,
                                path: "1/clusters/mapping/batch",
                                data: {
                                    users: e,
                                    cluster: r
                                }
                            }, n)
                        }
                    },
                    q = function(t) {
                        return function(e, r, n) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/operation", e),
                                data: {
                                    operation: "copy",
                                    destination: r
                                }
                            }, n), function(r, n) {
                                return W(t)(e, {
                                    methods: {
                                        waitTask: tV
                                    }
                                }).waitTask(r.taskID, n)
                            })
                        }
                    },
                    A = function(t) {
                        return function(r, n, i) {
                            return q(t)(r, n, e({}, i, {
                                scope: [tW.Rules]
                            }))
                        }
                    },
                    C = function(t) {
                        return function(r, n, i) {
                            return q(t)(r, n, e({}, i, {
                                scope: [tW.Settings]
                            }))
                        }
                    },
                    z = function(t) {
                        return function(r, n, i) {
                            return q(t)(r, n, e({}, i, {
                                scope: [tW.Synonyms]
                            }))
                        }
                    },
                    U = function(t) {
                        return function(e, r) {
                            return u(t.transporter.write({
                                method: g,
                                path: f("1/keys/%s", e)
                            }, r), function(r, n) {
                                return s(function(r) {
                                    return L(t)(e, n).then(r).catch(function(t) {
                                        if (404 !== t.status) throw t
                                    })
                                })
                            })
                        }
                    },
                    L = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/keys/%s", e)
                            }, r)
                        }
                    },
                    G = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/logs"
                            }, e)
                        }
                    },
                    M = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/clusters/mapping/top"
                            }, e)
                        }
                    },
                    V = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/clusters/mapping/%s", e)
                            }, r)
                        }
                    },
                    F = function(t) {
                        return function(e) {
                            var n = e || {},
                                i = n.retrieveMappings,
                                a = r(n, ["retrieveMappings"]);
                            return !0 === i && (a.getClusters = !0), t.transporter.read({
                                method: "GET",
                                path: "1/clusters/mapping/pending"
                            }, a)
                        }
                    },
                    W = function(t) {
                        return function(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return c({
                                transporter: t.transporter,
                                appId: t.appId,
                                indexName: e
                            }, r.methods)
                        }
                    },
                    J = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/keys"
                            }, e)
                        }
                    },
                    H = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/clusters"
                            }, e)
                        }
                    },
                    $ = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/indexes"
                            }, e)
                        }
                    },
                    B = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: "1/clusters/mapping"
                            }, e)
                        }
                    },
                    K = function(t) {
                        return function(e, r, n) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/operation", e),
                                data: {
                                    operation: "move",
                                    destination: r
                                }
                            }, n), function(r, n) {
                                return W(t)(e, {
                                    methods: {
                                        waitTask: tV
                                    }
                                }).waitTask(r.taskID, n)
                            })
                        }
                    },
                    Z = function(t) {
                        return function(e, r) {
                            return u(t.transporter.write({
                                method: v,
                                path: "1/indexes/*/batch",
                                data: {
                                    requests: e
                                }
                            }, r), function(e, r) {
                                return Promise.all(Object.keys(e.taskID).map(function(n) {
                                    return W(t)(n, {
                                        methods: {
                                            waitTask: tV
                                        }
                                    }).waitTask(e.taskID[n], r)
                                }))
                            })
                        }
                    },
                    Q = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: v,
                                path: "1/indexes/*/objects",
                                data: {
                                    requests: e
                                }
                            }, r)
                        }
                    },
                    Y = function(t) {
                        return function(r, n) {
                            var i = r.map(function(t) {
                                return e({}, t, {
                                    params: x(t.params || {})
                                })
                            });
                            return t.transporter.read({
                                method: v,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: i
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    X = function(t) {
                        return function(n, i) {
                            return Promise.all(n.map(function(n) {
                                var a = n.params,
                                    o = a.facetName,
                                    s = a.facetQuery,
                                    u = r(a, ["facetName", "facetQuery"]);
                                return W(t)(n.indexName, {
                                    methods: {
                                        searchForFacetValues: tU
                                    }
                                }).searchForFacetValues(o, s, e({}, i, {}, u))
                            }))
                        }
                    },
                    tt = function(t) {
                        return function(e, r) {
                            var n = h(r);
                            return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                                method: g,
                                path: "1/clusters/mapping"
                            }, n)
                        }
                    },
                    te = function(t) {
                        return function(e, r) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/keys/%s/restore", e)
                            }, r), function(r, n) {
                                return s(function(r) {
                                    return L(t)(e, n).catch(function(t) {
                                        if (404 !== t.status) throw t;
                                        return r()
                                    })
                                })
                            })
                        }
                    },
                    tr = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: v,
                                path: "1/clusters/mapping/search",
                                data: {
                                    query: e
                                }
                            }, r)
                        }
                    },
                    tn = function(t) {
                        return function(e, n) {
                            var i = Object.assign({}, n),
                                a = n || {},
                                o = a.queryParameters,
                                c = r(a, ["queryParameters"]),
                                l = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
                            return u(t.transporter.write({
                                method: "PUT",
                                path: f("1/keys/%s", e),
                                data: o ? {
                                    queryParameters: o
                                } : {}
                            }, c), function(r, n) {
                                return s(function(r) {
                                    return L(t)(e, n).then(function(t) {
                                        var e;
                                        return (e = t, Object.keys(i).filter(function(t) {
                                            return -1 !== l.indexOf(t)
                                        }).every(function(t) {
                                            return e[t] === i[t]
                                        })) ? Promise.resolve() : r()
                                    })
                                })
                            })
                        }
                    },
                    ti = function(t) {
                        return function(e, r) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/batch", t.indexName),
                                data: {
                                    requests: e
                                }
                            }, r), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    ta = function(t) {
                        return function(r) {
                            return R(e({}, r, {
                                shouldStop: function(t) {
                                    return void 0 === t.cursor
                                },
                                request: function(e) {
                                    return t.transporter.read({
                                        method: v,
                                        path: f("1/indexes/%s/browse", t.indexName),
                                        data: e
                                    }, r)
                                }
                            }))
                        }
                    },
                    to = function(t) {
                        return function(r) {
                            var n = e({
                                hitsPerPage: 1e3
                            }, r);
                            return R(e({}, n, {
                                shouldStop: function(t) {
                                    return t.hits.length < n.hitsPerPage
                                },
                                request: function(r) {
                                    return tL(t)("", e({}, n, {}, r)).then(function(t) {
                                        return e({}, t, {
                                            hits: t.hits.map(function(t) {
                                                return delete t._highlightResult, t
                                            })
                                        })
                                    })
                                }
                            }))
                        }
                    },
                    ts = function(t) {
                        return function(r) {
                            var n = e({
                                hitsPerPage: 1e3
                            }, r);
                            return R(e({}, n, {
                                shouldStop: function(t) {
                                    return t.hits.length < n.hitsPerPage
                                },
                                request: function(r) {
                                    return tG(t)("", e({}, n, {}, r)).then(function(t) {
                                        return e({}, t, {
                                            hits: t.hits.map(function(t) {
                                                return delete t._highlightResult, t
                                            })
                                        })
                                    })
                                }
                            }))
                        }
                    },
                    tu = function(t) {
                        return function(e, n, i) {
                            var a = i || {},
                                o = a.batchSize,
                                s = r(a, ["batchSize"]),
                                c = {
                                    taskIDs: [],
                                    objectIDs: []
                                };
                            return u(function r() {
                                var i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    u = [];
                                for (i = a; i < e.length && (u.push(e[i]), u.length !== (o || 1e3)); i++);
                                return 0 === u.length ? Promise.resolve(c) : ti(t)(u.map(function(t) {
                                    return {
                                        action: n,
                                        body: t
                                    }
                                }), s).then(function(t) {
                                    return c.objectIDs = c.objectIDs.concat(t.objectIDs), c.taskIDs.push(t.taskID), r(++i)
                                })
                            }(), function(e, r) {
                                return Promise.all(e.taskIDs.map(function(e) {
                                    return tV(t)(e, r)
                                }))
                            })
                        }
                    },
                    tc = function(t) {
                        return function(e) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/clear", t.indexName)
                            }, e), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tf = function(t) {
                        return function(e) {
                            var n = e || {},
                                i = n.forwardToReplicas,
                                a = h(r(n, ["forwardToReplicas"]));
                            return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/rules/clear", t.indexName)
                            }, a), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tl = function(t) {
                        return function(e) {
                            var n = e || {},
                                i = n.forwardToReplicas,
                                a = h(r(n, ["forwardToReplicas"]));
                            return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/synonyms/clear", t.indexName)
                            }, a), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    th = function(t) {
                        return function(e, r) {
                            return u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/deleteByQuery", t.indexName),
                                data: e
                            }, r), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    td = function(t) {
                        return function(e) {
                            return u(t.transporter.write({
                                method: g,
                                path: f("1/indexes/%s", t.indexName)
                            }, e), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tp = function(t) {
                        return function(e, r) {
                            return u(tm(t)([e], r).then(function(t) {
                                return {
                                    taskID: t.taskIDs[0]
                                }
                            }), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tm = function(t) {
                        return function(e, r) {
                            var n = e.map(function(t) {
                                return {
                                    objectID: t
                                }
                            });
                            return tu(t)(n, tF.DeleteObject, r)
                        }
                    },
                    tg = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.forwardToReplicas,
                                o = h(r(i, ["forwardToReplicas"]));
                            return a && (o.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
                                method: g,
                                path: f("1/indexes/%s/rules/%s", t.indexName, e)
                            }, o), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tv = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.forwardToReplicas,
                                o = h(r(i, ["forwardToReplicas"]));
                            return a && (o.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
                                method: g,
                                path: f("1/indexes/%s/synonyms/%s", t.indexName, e)
                            }, o), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    ty = function(t) {
                        return function(e) {
                            return tw(t)(e).then(function() {
                                return !0
                            }).catch(function(t) {
                                if (404 !== t.status) throw t;
                                return !1
                            })
                        }
                    },
                    tb = function(t) {
                        return function(i, a) {
                            var o = a || {},
                                s = o.query,
                                u = o.paginate,
                                c = r(o, ["query", "paginate"]),
                                f = 0;
                            return function r() {
                                return tz(t)(s || "", e({}, c, {
                                    page: f
                                })).then(function(t) {
                                    for (var e = 0, a = Object.entries(t.hits); e < a.length; e++) {
                                        var o = n(a[e], 2),
                                            s = o[0],
                                            c = o[1];
                                        if (i(c)) return {
                                            object: c,
                                            position: parseInt(s, 10),
                                            page: f
                                        }
                                    }
                                    if (f++, !1 === u || f >= t.nbPages) throw {
                                        name: "ObjectNotFoundError",
                                        message: "Object not found."
                                    };
                                    return r()
                                })
                            }()
                        }
                    },
                    tx = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/indexes/%s/%s", t.indexName, e)
                            }, r)
                        }
                    },
                    t_ = function() {
                        return function(t, e) {
                            for (var r = 0, i = Object.entries(t.hits); r < i.length; r++) {
                                var a = n(i[r], 2),
                                    o = a[0];
                                if (a[1].objectID === e) return parseInt(o, 10)
                            }
                            return -1
                        }
                    },
                    tP = function(t) {
                        return function(n, i) {
                            var a = i || {},
                                o = a.attributesToRetrieve,
                                s = r(a, ["attributesToRetrieve"]),
                                u = n.map(function(r) {
                                    return e({
                                        indexName: t.indexName,
                                        objectID: r
                                    }, o ? {
                                        attributesToRetrieve: o
                                    } : {})
                                });
                            return t.transporter.read({
                                method: v,
                                path: "1/indexes/*/objects",
                                data: {
                                    requests: u
                                }
                            }, s)
                        }
                    },
                    tS = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/indexes/%s/rules/%s", t.indexName, e)
                            }, r)
                        }
                    },
                    tw = function(t) {
                        return function(e) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/indexes/%s/settings", t.indexName),
                                data: {
                                    getVersion: 2
                                }
                            }, e)
                        }
                    },
                    tT = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: "GET",
                                path: f("1/indexes/%s/synonyms/%s", t.indexName, e)
                            }, r)
                        }
                    },
                    tO = function(t) {
                        return function(e, r) {
                            return u(tI(t)([e], r).then(function(t) {
                                return {
                                    objectID: t.objectIDs[0],
                                    taskID: t.taskIDs[0]
                                }
                            }), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tI = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.createIfNotExists,
                                o = r(i, ["createIfNotExists"]),
                                s = a ? tF.PartialUpdateObject : tF.PartialUpdateObjectNoCreate;
                            return tu(t)(e, s, o)
                        }
                    },
                    tj = function(t) {
                        return function(a, o) {
                            var s = o || {},
                                c = s.safe,
                                l = s.autoGenerateObjectIDIfNotExist,
                                h = s.batchSize,
                                d = r(s, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]),
                                p = function(e, r, n, i) {
                                    return u(t.transporter.write({
                                        method: v,
                                        path: f("1/indexes/%s/operation", e),
                                        data: {
                                            operation: n,
                                            destination: r
                                        }
                                    }, i), function(e, r) {
                                        return tV(t)(e.taskID, r)
                                    })
                                },
                                m = Math.random().toString(36).substring(7),
                                g = "".concat(t.indexName, "_tmp_").concat(m),
                                y = tk({
                                    appId: t.appId,
                                    transporter: t.transporter,
                                    indexName: g
                                }),
                                b = [],
                                x = p(t.indexName, g, "copy", e({}, d, {
                                    scope: ["settings", "synonyms", "rules"]
                                }));
                            return b.push(x), u((c ? x.wait(d) : x).then(function() {
                                var t = y(a, e({}, d, {
                                    autoGenerateObjectIDIfNotExist: l,
                                    batchSize: h
                                }));
                                return b.push(t), c ? t.wait(d) : t
                            }).then(function() {
                                var e = p(g, t.indexName, "move", d);
                                return b.push(e), c ? e.wait(d) : e
                            }).then(function() {
                                return Promise.all(b)
                            }).then(function(t) {
                                var e = n(t, 3),
                                    r = e[0],
                                    a = e[1],
                                    o = e[2];
                                return {
                                    objectIDs: a.objectIDs,
                                    taskIDs: [r.taskID].concat(i(a.taskIDs), [o.taskID])
                                }
                            }), function(t, e) {
                                return Promise.all(b.map(function(t) {
                                    return t.wait(e)
                                }))
                            })
                        }
                    },
                    tD = function(t) {
                        return function(r, n) {
                            return tq(t)(r, e({}, n, {
                                clearExistingRules: !0
                            }))
                        }
                    },
                    tR = function(t) {
                        return function(r, n) {
                            return tC(t)(r, e({}, n, {
                                replaceExistingSynonyms: !0
                            }))
                        }
                    },
                    tE = function(t) {
                        return function(e, r) {
                            return u(tk(t)([e], r).then(function(t) {
                                return {
                                    objectID: t.objectIDs[0],
                                    taskID: t.taskIDs[0]
                                }
                            }), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tk = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.autoGenerateObjectIDIfNotExist,
                                o = r(i, ["autoGenerateObjectIDIfNotExist"]),
                                s = a ? tF.AddObject : tF.UpdateObject;
                            if (s === tF.UpdateObject) {
                                var c = !0,
                                    f = !1,
                                    l = void 0;
                                try {
                                    for (var h, d = e[Symbol.iterator](); !(c = (h = d.next()).done); c = !0)
                                        if (void 0 === h.value.objectID) return u(Promise.reject({
                                            name: "MissingObjectIDError",
                                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                                        }))
                                } catch (t) {
                                    f = !0, l = t
                                } finally {
                                    try {
                                        c || null == d.return || d.return()
                                    } finally {
                                        if (f) throw l
                                    }
                                }
                            }
                            return tu(t)(e, s, o)
                        }
                    },
                    tN = function(t) {
                        return function(e, r) {
                            return tq(t)([e], r)
                        }
                    },
                    tq = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.forwardToReplicas,
                                o = i.clearExistingRules,
                                s = h(r(i, ["forwardToReplicas", "clearExistingRules"]));
                            return a && (s.queryParameters.forwardToReplicas = 1), o && (s.queryParameters.clearExistingRules = 1), u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/rules/batch", t.indexName),
                                data: e
                            }, s), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tA = function(t) {
                        return function(e, r) {
                            return tC(t)([e], r)
                        }
                    },
                    tC = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.forwardToReplicas,
                                o = i.replaceExistingSynonyms,
                                s = h(r(i, ["forwardToReplicas", "replaceExistingSynonyms"]));
                            return a && (s.queryParameters.forwardToReplicas = 1), o && (s.queryParameters.replaceExistingSynonyms = 1), u(t.transporter.write({
                                method: v,
                                path: f("1/indexes/%s/synonyms/batch", t.indexName),
                                data: e
                            }, s), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tz = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: v,
                                path: f("1/indexes/%s/query", t.indexName),
                                data: {
                                    query: e
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    tU = function(t) {
                        return function(e, r, n) {
                            return t.transporter.read({
                                method: v,
                                path: f("1/indexes/%s/facets/%s/query", t.indexName, e),
                                data: {
                                    facetQuery: r
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    tL = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: v,
                                path: f("1/indexes/%s/rules/search", t.indexName),
                                data: {
                                    query: e
                                }
                            }, r)
                        }
                    },
                    tG = function(t) {
                        return function(e, r) {
                            return t.transporter.read({
                                method: v,
                                path: f("1/indexes/%s/synonyms/search", t.indexName),
                                data: {
                                    query: e
                                }
                            }, r)
                        }
                    },
                    tM = function(t) {
                        return function(e, n) {
                            var i = n || {},
                                a = i.forwardToReplicas,
                                o = h(r(i, ["forwardToReplicas"]));
                            return a && (o.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
                                method: "PUT",
                                path: f("1/indexes/%s/settings", t.indexName),
                                data: e
                            }, o), function(e, r) {
                                return tV(t)(e.taskID, r)
                            })
                        }
                    },
                    tV = function(t) {
                        return function(e, r) {
                            return s(function(n) {
                                var i;
                                return (i = t, function(t, e) {
                                    return i.transporter.read({
                                        method: "GET",
                                        path: f("1/indexes/%s/task/%s", i.indexName, t.toString())
                                    }, e)
                                })(e, r).then(function(t) {
                                    return "published" !== t.status ? n() : void 0
                                })
                            })
                        }
                    },
                    tF = {
                        AddObject: "addObject",
                        UpdateObject: "updateObject",
                        PartialUpdateObject: "partialUpdateObject",
                        PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
                        DeleteObject: "deleteObject"
                    },
                    tW = {
                        Settings: "settings",
                        Synonyms: "synonyms",
                        Rules: "rules"
                    };

                function tJ(t, r, s) {
                    var u, f, h, p, m, g, v, y, x, _, P = {
                        appId: t,
                        apiKey: r,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function(t) {
                                return new Promise(function(e) {
                                    var r = new XMLHttpRequest;
                                    r.open(t.method, t.url, !0), Object.keys(t.headers).forEach(function(e) {
                                        return r.setRequestHeader(e, t.headers[e])
                                    });
                                    var n, i = function(t, n) {
                                            return setTimeout(function() {
                                                r.abort(), e({
                                                    status: 0,
                                                    content: n,
                                                    isTimedOut: !0
                                                })
                                            }, 1e3 * t)
                                        },
                                        a = i(t.connectTimeout, "Connection timeout");
                                    r.onreadystatechange = function() {
                                        r.readyState > r.OPENED && void 0 === n && (clearTimeout(a), n = i(t.responseTimeout, "Socket timeout"))
                                    }, r.onerror = function() {
                                        0 === r.status && (clearTimeout(a), clearTimeout(n), e({
                                            content: r.responseText || "Network request failed",
                                            status: r.status,
                                            isTimedOut: !1
                                        }))
                                    }, r.onload = function() {
                                        clearTimeout(a), clearTimeout(n), e({
                                            content: r.responseText,
                                            status: r.status,
                                            isTimedOut: !1
                                        })
                                    }, r.send(t.data)
                                })
                            }
                        },
                        logger: {
                            debug: function(t, e) {
                                return Promise.resolve()
                            },
                            info: function(t, e) {
                                return Promise.resolve()
                            },
                            error: function(t, e) {
                                return console.error(t, e), Promise.resolve()
                            }
                        },
                        responsesCache: a(),
                        requestsCache: a({
                            serializable: !1
                        }),
                        hostsCache: function t(e) {
                            var r = i(e.caches),
                                a = r.shift();
                            return void 0 === a ? {
                                get: function(t, e) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return e().then(function(t) {
                                        return Promise.all([t, r.miss(t)])
                                    }).then(function(t) {
                                        return n(t, 1)[0]
                                    })
                                },
                                set: function(t, e) {
                                    return Promise.resolve(e)
                                },
                                delete: function(t) {
                                    return Promise.resolve()
                                },
                                clear: function() {
                                    return Promise.resolve()
                                }
                            } : {
                                get: function(e, n) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return a.get(e, n, i).catch(function() {
                                        return t({
                                            caches: r
                                        }).get(e, n, i)
                                    })
                                },
                                set: function(e, n) {
                                    return a.set(e, n).catch(function() {
                                        return t({
                                            caches: r
                                        }).set(e, n)
                                    })
                                },
                                delete: function(e) {
                                    return a.delete(e).catch(function() {
                                        return t({
                                            caches: r
                                        }).delete(e)
                                    })
                                },
                                clear: function() {
                                    return a.clear().catch(function() {
                                        return t({
                                            caches: r
                                        }).clear()
                                    })
                                }
                            }
                        }({
                            caches: [(u = {
                                key: "".concat("4.1.0", "-").concat(t)
                            }, h = "algoliasearch-client-js-".concat(u.key), p = function() {
                                return void 0 === f && (f = u.localStorage || window.localStorage), f
                            }, m = function() {
                                return JSON.parse(p().getItem(h) || "{}")
                            }, {
                                get: function(t, e) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    };
                                    return Promise.resolve().then(function() {
                                        var r = JSON.stringify(t),
                                            n = m()[r];
                                        return Promise.all([n || e(), void 0 !== n])
                                    }).then(function(t) {
                                        var e = n(t, 2),
                                            i = e[0];
                                        return Promise.all([i, e[1] || r.miss(i)])
                                    }).then(function(t) {
                                        return n(t, 1)[0]
                                    })
                                },
                                set: function(t, e) {
                                    return Promise.resolve().then(function() {
                                        var r = m();
                                        return r[JSON.stringify(t)] = e, p().setItem(h, JSON.stringify(r)), e
                                    })
                                },
                                delete: function(t) {
                                    return Promise.resolve().then(function() {
                                        var e = m();
                                        delete e[JSON.stringify(t)], p().setItem(h, JSON.stringify(e))
                                    })
                                },
                                clear: function() {
                                    return Promise.resolve().then(function() {
                                        p().removeItem(h)
                                    })
                                }
                            }), a()]
                        }),
                        userAgent: (g = {
                            value: "Algolia for JavaScript (".concat("4.1.0", ")"),
                            add: function(t) {
                                var e = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                                return -1 === g.value.indexOf(e) && (g.value = "".concat(g.value).concat(e)), g
                            }
                        }).add({
                            segment: "Browser"
                        })
                    };
                    return y = (v = e({}, P, {}, s, {
                        methods: {
                            search: Y,
                            searchForFacetValues: X,
                            multipleBatch: Z,
                            multipleGetObjects: Q,
                            multipleQueries: Y,
                            copyIndex: q,
                            copySettings: C,
                            copySynonyms: z,
                            copyRules: A,
                            moveIndex: K,
                            listIndices: $,
                            getLogs: G,
                            listClusters: H,
                            multipleSearchForFacetValues: X,
                            getApiKey: L,
                            addApiKey: E,
                            listApiKeys: J,
                            updateApiKey: tn,
                            deleteApiKey: U,
                            restoreApiKey: te,
                            assignUserID: k,
                            assignUserIDs: N,
                            getUserID: V,
                            searchUserIDs: tr,
                            listUserIDs: B,
                            getTopUserIDs: M,
                            removeUserID: tt,
                            hasPendingMappings: F,
                            initIndex: function(t) {
                                return function(e) {
                                    return W(t)(e, {
                                        methods: {
                                            batch: ti,
                                            delete: td,
                                            getObject: tx,
                                            getObjects: tP,
                                            saveObject: tE,
                                            saveObjects: tk,
                                            search: tz,
                                            searchForFacetValues: tU,
                                            waitTask: tV,
                                            setSettings: tM,
                                            getSettings: tw,
                                            partialUpdateObject: tO,
                                            partialUpdateObjects: tI,
                                            deleteObject: tp,
                                            deleteObjects: tm,
                                            deleteBy: th,
                                            clearObjects: tc,
                                            browseObjects: ta,
                                            getObjectPosition: t_,
                                            findObject: tb,
                                            exists: ty,
                                            saveSynonym: tA,
                                            saveSynonyms: tC,
                                            getSynonym: tT,
                                            searchSynonyms: tG,
                                            browseSynonyms: ts,
                                            deleteSynonym: tv,
                                            clearSynonyms: tl,
                                            replaceAllObjects: tj,
                                            replaceAllSynonyms: tR,
                                            searchRules: tL,
                                            getRule: tS,
                                            deleteRule: tg,
                                            saveRule: tN,
                                            saveRules: tq,
                                            replaceAllRules: tD,
                                            browseRules: to,
                                            clearRules: tf
                                        }
                                    })
                                }
                            },
                            initAnalytics: function() {
                                return function(t) {
                                    var r, n, i, a;
                                    return n = (r = e({}, P, {}, t, {
                                        methods: {
                                            addABTest: S,
                                            getABTest: T,
                                            getABTests: O,
                                            stopABTest: I,
                                            deleteABTest: w
                                        }
                                    })).region || "us", i = o(l.WithinHeaders, r.appId, r.apiKey), a = b(e({
                                        hosts: [{
                                            url: "analytics.".concat(n, ".algolia.com")
                                        }]
                                    }, r, {
                                        headers: e({}, i.headers(), {}, {
                                            "content-type": "application/json"
                                        }, {}, r.headers),
                                        queryParameters: e({}, i.queryParameters(), {}, r.queryParameters)
                                    })), c({
                                        appId: r.appId,
                                        transporter: a
                                    }, r.methods)
                                }
                            },
                            initRecommendation: function() {
                                return function(t) {
                                    var r, n, i, a;
                                    return n = (r = e({}, P, {}, t, {
                                        methods: {
                                            getPersonalizationStrategy: j,
                                            setPersonalizationStrategy: D
                                        }
                                    })).region || "us", i = o(l.WithinHeaders, r.appId, r.apiKey), a = b(e({
                                        hosts: [{
                                            url: "recommendation.".concat(n, ".algolia.com")
                                        }]
                                    }, r, {
                                        headers: e({}, i.headers(), {}, {
                                            "content-type": "application/json"
                                        }, {}, r.headers),
                                        queryParameters: e({}, i.queryParameters(), {}, r.queryParameters)
                                    })), c({
                                        appId: r.appId,
                                        transporter: a
                                    }, r.methods)
                                }
                            }
                        }
                    })).appId, x = o(void 0 !== v.authMode ? v.authMode : l.WithinHeaders, y, v.apiKey), c({
                        transporter: _ = b(e({
                            hosts: [{
                                url: "".concat(y, "-dsn.algolia.net"),
                                accept: d.Read
                            }, {
                                url: "".concat(y, ".algolia.net"),
                                accept: d.Write
                            }].concat(function(t) {
                                for (var e = t.length - 1; e > 0; e--) {
                                    var r = Math.floor(Math.random() * (e + 1)),
                                        n = t[e];
                                    t[e] = t[r], t[r] = n
                                }
                                return t
                            }([{
                                url: "".concat(y, "-1.algolianet.com")
                            }, {
                                url: "".concat(y, "-2.algolianet.com")
                            }, {
                                url: "".concat(y, "-3.algolianet.com")
                            }]))
                        }, v, {
                            headers: e({}, x.headers(), {}, {
                                "content-type": "application/x-www-form-urlencoded"
                            }, {}, v.headers),
                            queryParameters: e({}, x.queryParameters(), {}, v.queryParameters)
                        })),
                        appId: y,
                        addAlgoliaAgent: function(t, e) {
                            _.userAgent.add({
                                segment: t,
                                version: e
                            })
                        },
                        clearCache: function() {
                            return Promise.all([_.requestsCache.clear(), _.responsesCache.clear()]).then(function() {})
                        }
                    }, v.methods)
                }
                return tJ.version = "4.1.0", tJ
            }, "object" == typeof e && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : (n = n || self).algoliasearch = i()
        },
        668542: function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), a.test(t)) ? "rtl" : o.test(t) ? "ltr" : "neutral"
            };
            var n = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                a = RegExp("^[^" + i + "]*[" + n + "]"),
                o = RegExp("^[^" + n + "]*[" + i + "]")
        },
        493467: function(t, e, r) {
            t.exports = function(t, e, r, n) {
                for (var i = -1, a = null == t ? 0 : t.length; ++i < a;) {
                    var o = t[i];
                    e(n, o, r(o), t)
                }
                return n
            }
        },
        787595: function(t, e, r) {
            t.exports = function(t, e, r, n) {
                var i = -1,
                    a = null == t ? 0 : t.length;
                for (n && a && (r = t[++i]); ++i < a;) r = e(r, t[i], i, t);
                return r
            }
        },
        805212: function(t, e, r) {
            t.exports = function(t) {
                return t.split("")
            }
        },
        922628: function(t, e, r) {
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            t.exports = function(t) {
                return t.match(n) || []
            }
        },
        167030: function(t, e, r) {
            var n = r("800709");
            t.exports = function(t, e, r, i) {
                return n(t, function(t, n, a) {
                    e(i, t, r(t), a)
                }), i
            }
        },
        594078: function(t, e, r) {
            t.exports = function(t) {
                return function(e) {
                    return null == t ? void 0 : t[e]
                }
            }
        },
        953276: function(t, e, r) {
            var n = r("749064");
            t.exports = function(t, e, r) {
                var i = t.length;
                return r = void 0 === r ? i : r, !e && r >= i ? t : n(t, e, r)
            }
        },
        471346: function(t, e, r) {
            var n = r("493467"),
                i = r("167030"),
                a = r("931971"),
                o = r("349046");
            t.exports = function(t, e) {
                return function(r, s) {
                    var u = o(r) ? n : i,
                        c = e ? e() : {};
                    return u(r, t, a(s, 2), c)
                }
            }
        },
        175145: function(t, e, r) {
            var n = r("953276"),
                i = r("981945"),
                a = r("393208"),
                o = r("497262");
            t.exports = function(t) {
                return function(e) {
                    var r = i(e = o(e)) ? a(e) : void 0,
                        s = r ? r[0] : e.charAt(0),
                        u = r ? n(r, 1).join("") : e.slice(1);
                    return s[t]() + u
                }
            }
        },
        41350: function(t, e, r) {
            var n = r("787595"),
                i = r("202625"),
                a = r("796987"),
                o = RegExp("['’]", "g");
            t.exports = function(t) {
                return function(e) {
                    return n(a(i(e).replace(o, "")), t, "")
                }
            }
        },
        310714: function(t, e, r) {
            var n = r("594078"),
                i = n({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                });
            t.exports = i
        },
        981945: function(t, e, r) {
            var n = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) {
                return n.test(t)
            }
        },
        924299: function(t, e, r) {
            var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            t.exports = function(t) {
                return n.test(t)
            }
        },
        393208: function(t, e, r) {
            var n = r("805212"),
                i = r("981945"),
                a = r("900106");
            t.exports = function(t) {
                return i(t) ? a(t) : n(t)
            }
        },
        900106: function(t, e, r) {
            var n = "\ud800-\udfff",
                i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\ud83c[\udffb-\udfff]",
                o = "[^" + n + "]",
                s = "(?:\ud83c[\udde6-\uddff]){2}",
                u = "[\ud800-\udbff][\udc00-\udfff]",
                c = "(?:" + i + "|" + a + ")?",
                f = "[\\ufe0e\\ufe0f]?",
                l = "(?:\\u200d(?:" + [o, s, u].join("|") + ")" + f + c + ")*",
                h = RegExp(a + "(?=" + a + ")|" + ("(?:" + [o + i + "?", i, s, u, "[" + n + "]"].join("|") + ")") + (f + c + l), "g");
            t.exports = function(t) {
                return t.match(h) || []
            }
        },
        111318: function(t, e, r) {
            var n = "\ud800-\udfff",
                i = "\\u2700-\\u27bf",
                a = "a-z\\xdf-\\xf6\\xf8-\\xff",
                o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                s = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                u = "['’]",
                c = "[" + s + "]",
                f = "[" + a + "]",
                l = "[^" + n + s + "\\d+" + i + a + o + "]",
                h = "(?:\ud83c[\udde6-\uddff]){2}",
                d = "[\ud800-\udbff][\udc00-\udfff]",
                p = "[" + o + "]",
                m = "(?:" + f + "|" + l + ")",
                g = "(?:" + u + "(?:d|ll|m|re|s|t|ve))?",
                v = "(?:" + u + "(?:D|LL|M|RE|S|T|VE))?",
                y = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
                b = "[\\ufe0e\\ufe0f]?",
                x = "(?:\\u200d(?:" + ["[^" + n + "]", h, d].join("|") + ")" + b + y + ")*",
                _ = "(?:" + ["[" + i + "]", h, d].join("|") + ")" + (b + y + x),
                P = RegExp([p + "?" + f + "+" + g + "(?=" + [c, p, "$"].join("|") + ")", "(?:" + p + "|" + l + ")+" + v + "(?=" + [c, p + m, "$"].join("|") + ")", p + "?" + m + "+" + g, p + "+" + v, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", _].join("|"), "g");
            t.exports = function(t) {
                return t.match(P) || []
            }
        },
        275023: function(t, e, r) {
            var n = r("990076"),
                i = r("41350")(function(t, e, r) {
                    return e = e.toLowerCase(), t + (r ? n(e) : e)
                });
            t.exports = i
        },
        990076: function(t, e, r) {
            var n = r("497262"),
                i = r("1718");
            t.exports = function(t) {
                return i(n(t).toLowerCase())
            }
        },
        780128: function(t, e, r) {
            var n = r("749064"),
                i = r("914677"),
                a = r("36971"),
                o = Math.ceil,
                s = Math.max;
            t.exports = function(t, e, r) {
                e = (r ? i(t, e, r) : void 0 === e) ? 1 : s(a(e), 0);
                var u = null == t ? 0 : t.length;
                if (!u || e < 1) return [];
                for (var c = 0, f = 0, l = Array(o(u / e)); c < u;) l[f++] = n(t, c, c += e);
                return l
            }
        },
        977755: function(t, e, r) {
            var n = r("377235"),
                i = r("471346"),
                a = Object.prototype.hasOwnProperty,
                o = i(function(t, e, r) {
                    a.call(t, r) ? ++t[r] : n(t, r, 1)
                });
            t.exports = o
        },
        202625: function(t, e, r) {
            var n = r("310714"),
                i = r("497262"),
                a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            t.exports = function(t) {
                return (t = i(t)) && t.replace(a, n).replace(o, "")
            }
        },
        36971: function(t, e, r) {
            var n = r("292533");
            t.exports = function(t) {
                var e = n(t),
                    r = e % 1;
                return e == e ? r ? e - r : e : 0
            }
        },
        1718: function(t, e, r) {
            var n = r("175145")("toUpperCase");
            t.exports = n
        },
        796987: function(t, e, r) {
            var n = r("922628"),
                i = r("924299"),
                a = r("497262"),
                o = r("111318");
            t.exports = function(t, e, r) {
                return (t = a(t), void 0 === (e = r ? void 0 : e)) ? i(t) ? o(t) : n(t) : t.match(e) || []
            }
        },
        712869: function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                var e, r;
                return (t = String(t).toLowerCase()).length < 3 ? t : (121 === t.charCodeAt(0) && (e = !0, t = "Y" + t.substr(1)), _.test(t) ? t = t.substr(0, t.length - 2) : x.test(t) && (t = t.substr(0, t.length - 1)), (r = b.exec(t)) ? u.test(r[1]) && (t = t.substr(0, t.length - 1)) : (r = v.exec(t)) && l.test(r[1]) && (t = r[1], y.test(t) ? t += "e" : P.test(t) ? t = t.substr(0, t.length - 1) : h.test(t) && (t += "e")), (r = m.exec(t)) && l.test(r[1]) && (t = r[1] + "i"), (r = S.exec(t)) && u.test(r[1]) && (t = r[1] + n[r[2]]), (r = w.exec(t)) && u.test(r[1]) && (t = r[1] + i[r[2]]), (r = T.exec(t)) ? f.test(r[1]) && (t = r[1]) : (r = g.exec(t)) && f.test(r[1]) && (t = r[1]), (r = p.exec(t)) && (f.test(r[1]) || c.test(r[1]) && !h.test(r[1])) && (t = r[1]), d.test(t) && f.test(t) && (t = t.substr(0, t.length - 1)), e && (t = "y" + t.substr(1)), t)
            };
            var n = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                a = "[aeiouy]",
                o = "([^aeiou][^aeiouy]*)",
                s = "(" + a + "[aeiou]*)",
                u = RegExp("^" + o + "?" + s + o),
                c = RegExp("^" + o + "?" + s + o + s + "?$"),
                f = RegExp("^" + o + "?(" + s + o + "){2,}"),
                l = RegExp("^" + o + "?" + a),
                h = RegExp("^" + o + a + "[^aeiouwxy]$"),
                d = /ll$/,
                p = /^(.+?)e$/,
                m = /^(.+?)y$/,
                g = /^(.+?(s|t))(ion)$/,
                v = /^(.+?)(ed|ing)$/,
                y = /(at|bl|iz)$/,
                b = /^(.+?)eed$/,
                x = /^.+?[^s]s$/,
                _ = /^.+?(ss|i)es$/,
                P = /([^aeiouylsz])\1$/,
                S = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                w = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                T = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        881032: function(t, e, r) {
            let n = r("141115"),
                i = r("823300");
            t.exports = {
                TimelineDataSeries: n,
                TimelineGraphView: i
            }
        },
        141115: function(t, e, r) {
            var n = function() {
                "use strict";

                function t() {
                    this.dataPoints_ = [], this.color_ = "red", this.isVisible_ = !0, this.cacheStartTime_ = null, this.cacheStepSize_ = 0, this.cacheValues_ = []
                }

                function e(t, e) {
                    this.time = t, this.value = e
                }
                return t.prototype = {
                    toJSON: function() {
                        if (this.dataPoints_.length < 1) return {};
                        for (var t = [], e = 0; e < this.dataPoints_.length; ++e) t.push(this.dataPoints_[e].value);
                        return {
                            startTime: this.dataPoints_[0].time,
                            endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                            values: JSON.stringify(t)
                        }
                    },
                    addPoint: function(t, r) {
                        var n = new Date(t);
                        this.dataPoints_.push(new e(n, r)), this.dataPoints_.length > 1e3 && this.dataPoints_.shift()
                    },
                    setPoints: function(t) {
                        let e = Math.max(0, t.length - 1e3);
                        this.dataPoints_ = t.slice(e)
                    },
                    isVisible: function() {
                        return this.isVisible_
                    },
                    show: function(t) {
                        this.isVisible_ = t
                    },
                    getColor: function() {
                        return this.color_
                    },
                    setColor: function(t) {
                        this.color_ = t
                    },
                    getCount: function() {
                        return this.dataPoints_.length
                    },
                    getValues: function(t, e, r) {
                        return this.cacheStartTime_ == t && this.cacheStepSize_ == e && this.cacheValues_.length == r ? this.cacheValues_ : (this.cacheValues_ = this.getValuesInternal_(t, e, r), this.cacheStartTime_ = t, this.cacheStepSize_ = e, this.cacheValues_)
                    },
                    getValuesInternal_: function(t, e, r) {
                        for (var n = [], i = 0, a = 0, o = t, s = 0; s < r; ++s) {
                            for (; i < this.dataPoints_.length && this.dataPoints_[i].time < o;) a = this.dataPoints_[i].value, ++i;
                            n[s] = a, o += e
                        }
                        return n
                    }
                }, t
            }();
            t.exports = n
        },
        823300: function(t, e, r) {
            var n = function() {
                "use strict";

                function t(t, e) {
                    this.scrollbar_ = {
                        position_: 0,
                        range_: 0
                    }, this.devicePixelRatio = e || 1, this.canvas_ = t, t.width = parseInt(t.width, 10) * this.devicePixelRatio, t.height = parseInt(t.height, 10) * this.devicePixelRatio, this.gridColor = "#CCC", this.textColor = "#000", this.backgroundColor = "#FFF", this.fontWeight = "normal", this.fontSize = 10, this.fontFamily = "sans-serif", this.timeLocales = [], this.timeOptions = {}, this.startTime_ = 0, this.endTime_ = 1, this.graph_ = null, this.scale_ = 1e3 / this.devicePixelRatio, this.updateScrollbarRange_(!0)
                }
                t.prototype = {
                    setScale: function(t) {
                        this.scale_ = t
                    },
                    getLength_: function() {
                        return Math.floor((this.endTime_ - this.startTime_) / this.scale_)
                    },
                    graphScrolledToRightEdge_: function() {
                        return this.scrollbar_.position_ == this.scrollbar_.range_
                    },
                    updateScrollbarRange_: function(t) {
                        var e = this.getLength_() - this.canvas_.width;
                        e < 0 && (e = 0), this.scrollbar_.position_ > e && (t = !0), this.scrollbar_.range_ = e, t && (this.scrollbar_.position_ = e, this.repaint())
                    },
                    setDateRange: function(t, e) {
                        this.startTime_ = t.getTime(), this.endTime_ = e.getTime(), this.endTime_ <= this.startTime_ && (this.startTime_ = this.endTime_ - 1), this.updateScrollbarRange_(!0)
                    },
                    updateEndDate: function(t) {
                        this.endTime_ = t || new Date().getTime(), this.updateScrollbarRange_(this.graphScrolledToRightEdge_())
                    },
                    getStartDate: function() {
                        return new Date(this.startTime_)
                    },
                    setDataSeries: function(t) {
                        this.graph_ = new e(this.devicePixelRatio);
                        for (var r = 0; r < t.length; ++r) this.graph_.addDataSeries(t[r]);
                        this.repaint()
                    },
                    addDataSeries: function(t) {
                        !this.graph_ && (this.graph_ = new e(this.devicePixelRatio)), this.graph_.addDataSeries(t), this.repaint()
                    },
                    repaint: function() {
                        if (null !== this.canvas_.offsetParent) {
                            this.repaintTimerRunning_ = !1;
                            var t = this.canvas_.width,
                                e = this.canvas_.height,
                                r = this.canvas_.getContext("2d");
                            if (r.fillStyle = this.backgroundColor, r.fillRect(0, 0, t, e), !(4 * this.fontSize > e) && !(t < 50)) {
                                r.save();
                                var n = this.scrollbar_.position_;
                                0 == this.scrollbar_.range_ && (n = this.getLength_() - t);
                                var i = this.startTime_ + n * this.scale_,
                                    a = e;
                                e -= Math.ceil(this.fontSize * this.devicePixelRatio) + 4, this.drawTimeLabels(r, t, e, a, i), r.strokeStyle = this.gridColor, r.lineWidth = this.devicePixelRatio, r.strokeRect(1, 1, t - 1, e - 1), this.graph_ && (this.graph_.layout(t, e, this.fontSize, i, this.scale_), this.graph_.drawTicks(r), this.graph_.drawLines(r), this.graph_.drawLabels(r)), r.restore()
                            }
                        }
                    },
                    drawTimeLabels: function(t, e, r, n, i) {
                        var a = 6e4 * Math.ceil(i / 6e4);
                        for (t.textBaseline = "bottom", t.textAlign = "center", t.fillStyle = this.textColor, t.strokeStyle = this.gridColor, t.lineWidth = this.devicePixelRatio, t.font = "".concat(this.fontWeight, " ").concat(this.fontSize * this.devicePixelRatio, "px ").concat(this.fontFamily);;) {
                            var o = Math.round((a - i) / this.scale_);
                            if (o >= e) break;
                            var s = new Date(a).toLocaleTimeString(this.timeLocales, this.timeOptions);
                            t.fillText(s, o, n), t.beginPath(), t.lineTo(o, 1), t.lineTo(o, r), t.stroke(), a += 6e4
                        }
                    },
                    getDataSeriesCount: function() {
                        return this.graph_ ? this.graph_.dataSeries_.length : 0
                    },
                    hasDataSeries: function(t) {
                        return !!this.graph_ && this.graph_.hasDataSeries(t)
                    }
                };
                var e = function() {
                    function t(t) {
                        this.devicePixelRatio = t || 1, this.dataSeries_ = [], this.width_ = 0, this.height_ = 0, this.fontHeight_ = 0, this.startTime_ = 0, this.scale_ = 0, this.min_ = 0, this.max_ = 0, this.labels_ = []
                    }
                    return t.prototype = {
                        addDataSeries: function(t) {
                            this.dataSeries_.push(t)
                        },
                        hasDataSeries: function(t) {
                            for (var e = 0; e < this.dataSeries_.length; ++e)
                                if (this.dataSeries_[e] == t) return !0;
                            return !1
                        },
                        getValues: function(t) {
                            return t.isVisible() ? t.getValues(this.startTime_, this.scale_, this.width_) : null
                        },
                        layout: function(t, e, r, n, i) {
                            this.width_ = t, this.height_ = e, this.fontHeight_ = r, this.startTime_ = n, this.scale_ = i;
                            for (var a = 0, o = 0, s = 0; s < this.dataSeries_.length; ++s) {
                                var u = this.getValues(this.dataSeries_[s]);
                                if (u)
                                    for (var c = 0; c < u.length; ++c) u[c] > a ? a = u[c] : u[c] < o && (o = u[c])
                            }
                            this.layoutLabels_(o, a)
                        },
                        layoutLabels_: function(t, e) {
                            if (e - t < 1024) {
                                this.layoutLabelsBasic_(t, e, 2);
                                return
                            }
                            var r = ["", "k", "M", "G", "T", "P"],
                                n = 1;
                            for (t /= 1024, e /= 1024; r[n + 1] && e - t >= 1024;) t /= 1024, e /= 1024, ++n;
                            this.layoutLabelsBasic_(t, e, 2);
                            for (var i = 0; i < this.labels_.length; ++i) this.labels_[i] += " " + r[n];
                            this.min_ *= Math.pow(1024, n), this.max_ *= Math.pow(1024, n)
                        },
                        layoutLabelsBasic_: function(t, e, r) {
                            this.labels_ = [];
                            var n = e - t;
                            if (0 == n) {
                                this.min_ = this.max_ = e;
                                return
                            }
                            var i = 2 * this.fontHeight_ + 4,
                                a = 1 + this.height_ / i;
                            a < 2 ? a = 2 : a > 6 && (a = 6);
                            for (var o = Math.pow(10, -r), s = r; !(Math.ceil(n / o) + 1 <= a);) {
                                ;
                                if (Math.ceil(n / (2 * o)) + 1 <= a) {
                                    o *= 2;
                                    break
                                }
                                if (Math.ceil(n / (5 * o)) + 1 <= a) {
                                    o *= 5;
                                    break
                                }
                                o *= 10, s > 0 && --s
                            }
                            this.max_ = Math.ceil(e / o) * o, this.min_ = Math.floor(t / o) * o;
                            for (var u = this.max_; u >= this.min_; u -= o) this.labels_.push(u.toFixed(s))
                        },
                        drawTicks: function(t) {
                            e = this.width_ - 1, r = this.width_ - 1 - 10, t.fillStyle = this.gridColor, t.lineWidth = this.devicePixelRatio, t.beginPath();
                            for (var e, r, n = 1; n < this.labels_.length - 1; ++n) {
                                var i = Math.round(this.height_ * n / (this.labels_.length - 1));
                                t.moveTo(e, i), t.lineTo(r, i)
                            }
                            t.stroke()
                        },
                        drawLines: function(t) {
                            var e = 0,
                                r = this.height_ - 1;
                            this.max_ && (e = r / (this.max_ - this.min_));
                            for (var n = this.dataSeries_.length - 1; n >= 0; --n) {
                                var i = this.getValues(this.dataSeries_[n]);
                                if (i) {
                                    t.strokeStyle = this.dataSeries_[n].getColor(), t.lineWidth = this.devicePixelRatio, t.beginPath();
                                    for (var a = 0; a < i.length; ++a) t.lineTo(a, r - Math.round((i[a] - this.min_) * e));
                                    t.stroke()
                                }
                            }
                        },
                        drawLabels: function(t) {
                            if (0 != this.labels_.length) {
                                var e = this.width_ - 3;
                                t.fillStyle = this.textColor, t.textAlign = "right", t.textBaseline = "top", t.fillText(this.labels_[0], e, 0), t.textBaseline = "bottom";
                                for (var r = (this.height_ - 1) / (this.labels_.length - 1), n = 1; n < this.labels_.length; ++n) t.fillText(this.labels_[n], e, r * n)
                            }
                        }
                    }, t
                }();
                return t
            }();
            t.exports = n
        },
        59744: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return i
                }
            });
            var n = r("773670");

            function i() {
                let t = (0, n.createContext)(void 0);
                return {
                    Provider: e => {
                        let {
                            initialStore: r,
                            createStore: i,
                            children: a
                        } = e, o = (0, n.useRef)();
                        return !o.current && (r && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => r)), o.current = i()), (0, n.createElement)(t.Provider, {
                            value: o.current
                        }, a)
                    },
                    useStore: function(e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, n.useContext)(t);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(e, r)
                    },
                    useStoreApi: () => {
                        let e = (0, n.useContext)(t);
                        if (!e) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, n.useMemo)(() => ({
                            getState: e.getState,
                            setState: e.setState,
                            subscribe: e.subscribe,
                            destroy: e.destroy
                        }), [e])
                    }
                }
            }
        },
        799271: function(t, e, r) {
            "use strict";
            var n, i;
            r.r(e), r.d(e, {
                PollLayoutTypes: function() {
                    return n
                }
            }), (i = n || (n = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.DEFAULT = 1] = "DEFAULT", i[i.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        },
        403809: function(t, e, r) {
            "use strict";
            var n, i;
            r.r(e), r.d(e, {
                SnowflakeSelectDefaultValueTypes: function() {
                    return n
                }
            }), (i = n || (n = {})).USER = "user", i.ROLE = "role", i.CHANNEL = "channel"
        }
    }
]);