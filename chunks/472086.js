var n, i;
t = r.nmd(t), r("854508"), r("424973"), r("222007"), r("70102"), r("781738"), n = this, i = function() {
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
          for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
        } catch (t) {
          i = !0, a = t
        } finally {
          try {
            n || null == o.return || o.return()
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
        var s = n(),
          o = i && i.miss || function() {
            return Promise.resolve()
          };
        return s.then(function(t) {
          return o(t)
        }).then(function() {
          return s
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

  function s(t, e, r) {
    var n = {
      "x-algolia-api-key": r,
      "x-algolia-application-id": e
    };
    return {
      headers: function() {
        return t === h.WithinHeaders ? n : {}
      },
      queryParameters: function() {
        return t === h.WithinQueryParameters ? n : {}
      }
    }
  }

  function o(t) {
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

  function l(t) {
    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    var i = 0;
    return t.replace(/%s/g, function() {
      return encodeURIComponent(r[i++])
    })
  }
  var h = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
  };

  function f(t, e) {
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
    var s, o, u, c, l, h, f = [],
      d = function(t, r) {
        if ("GET" !== t.method && (void 0 !== t.data || void 0 !== r.data)) return JSON.stringify(Array.isArray(t.data) ? t.data : e({}, t.data, {}, r.data))
      }(n, a),
      g = (s = t, o = a, u = e({}, s.headers, {}, o.headers), c = {}, Object.keys(u).forEach(function(t) {
        var e = u[t];
        c[t.toLowerCase()] = e
      }), c),
      v = n.method,
      y = "GET" !== n.method ? {} : e({}, n.data, {}, a.data),
      b = e({
        "x-algolia-agent": t.userAgent.value
      }, t.queryParameters, {}, y, {}, a.queryParameters),
      w = 0,
      S = function e(r, i) {
        var s = r.pop();
        if (void 0 === s) throw {
          name: "RetryError",
          message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
          transporterStackTrace: x(f)
        };
        var o = {
            data: d,
            headers: g,
            method: v,
            url: function(t, e, r) {
              var n = _(r),
                i = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
              return n.length && (i += "?".concat(n)), i
            }(s, n.path, b),
            connectTimeout: i(w, t.timeouts.connect),
            responseTimeout: i(w, a.timeout)
          },
          u = function(t) {
            var e = {
              request: o,
              response: t,
              host: s,
              triesLeft: r.length
            };
            return f.push(e), e
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
              return n.isTimedOut && w++, Promise.all([t.logger.info("Retryable failure", P(a)), t.hostsCache.set(s, p(s, n.isTimedOut ? 3 : 2))]).then(function() {
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
                }(t, x(f))
            }
          };
        return t.requester.send(o).then(function(t) {
          var e, r, n, i, a, s, o;
          return e = t, r = c, (i = (n = e).status, n.isTimedOut || (s = (a = n).isTimedOut, o = a.status, !s && 0 == ~~o) || 2 != ~~(i / 100) && 4 != ~~(i / 100)) ? r.onRetry(e) : 2 == ~~(e.status / 100) ? r.onSucess(e) : r.onFail(e)
        })
      };
    return (l = t.hostsCache, Promise.all((h = r).map(function(t) {
      return l.get(t, function() {
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
        }) : h
      }
    })).then(function(t) {
      return S(i(t.statelessHosts).reverse(), t.getTimeout)
    })
  }

  function b(t) {
    var e = t.hostsCache,
      r = t.logger,
      i = t.requester,
      a = t.requestsCache,
      s = t.responsesCache,
      o = t.timeouts,
      u = t.userAgent,
      c = t.hosts,
      l = t.queryParameters,
      h = {
        hostsCache: e,
        logger: r,
        requester: i,
        requestsCache: a,
        responsesCache: s,
        timeouts: o,
        userAgent: u,
        headers: t.headers,
        queryParameters: l,
        hosts: c.map(function(t) {
          return m(t)
        }),
        read: function(t, e) {
          var r = f(e, h.timeouts.read),
            i = function() {
              return y(h, h.hosts.filter(function(t) {
                return 0 != (t.accept & d.Read)
              }), t, r)
            };
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return i();
          var a = {
            request: t,
            mappedRequestOptions: r,
            transporter: {
              queryParameters: h.queryParameters,
              headers: h.headers
            }
          };
          return h.responsesCache.get(a, function() {
            return h.requestsCache.get(a, function() {
              return h.requestsCache.set(a, i()).then(function(t) {
                return Promise.all([h.requestsCache.delete(a), t])
              }, function(t) {
                return Promise.all([h.requestsCache.delete(a), Promise.reject(t)])
              }).then(function(t) {
                var e = n(t, 2);
                return e[0], e[1]
              })
            })
          }, {
            miss: function(t) {
              return h.responsesCache.set(a, t)
            }
          })
        },
        write: function(t, e) {
          return y(h, h.hosts.filter(function(t) {
            return 0 != (t.accept & d.Write)
          }), t, f(e, h.timeouts.write))
        }
      };
    return h
  }

  function _(t) {
    return Object.keys(t).map(function(e) {
      var r;
      return l("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]))
    }).join("&")
  }

  function x(t) {
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
  var w = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: v,
          path: "2/abtests",
          data: e
        }, r)
      }
    },
    S = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: g,
          path: l("2/abtests/%s", e)
        }, r)
      }
    },
    T = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: l("2/abtests/%s", e)
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
    j = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: v,
          path: l("2/abtests/%s/stop", e)
        }, r)
      }
    },
    I = function(t) {
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

  function k(t) {
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
  var R = function(t) {
      return function(n, i) {
        var a = i || {},
          s = a.queryParameters,
          c = r(a, ["queryParameters"]),
          l = e({
            acl: n
          }, void 0 !== s ? {
            queryParameters: s
          } : {});
        return u(t.transporter.write({
          method: v,
          path: "1/keys",
          data: l
        }, c), function(e, r) {
          return o(function(n) {
            return U(t)(e.key, r).catch(function(t) {
              if (404 !== t.status) throw t;
              return n()
            })
          })
        })
      }
    },
    E = function(t) {
      return function(e, r, n) {
        var i = f(n);
        return i.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
          method: v,
          path: "1/clusters/mapping",
          data: {
            cluster: r
          }
        }, i)
      }
    },
    q = function(t) {
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
    N = function(t) {
      return function(e, r, n) {
        return u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/operation", e),
          data: {
            operation: "copy",
            destination: r
          }
        }, n), function(r, n) {
          return F(t)(e, {
            methods: {
              waitTask: tB
            }
          }).waitTask(r.taskID, n)
        })
      }
    },
    C = function(t) {
      return function(r, n, i) {
        return N(t)(r, n, e({}, i, {
          scope: [tF.Rules]
        }))
      }
    },
    A = function(t) {
      return function(r, n, i) {
        return N(t)(r, n, e({}, i, {
          scope: [tF.Settings]
        }))
      }
    },
    z = function(t) {
      return function(r, n, i) {
        return N(t)(r, n, e({}, i, {
          scope: [tF.Synonyms]
        }))
      }
    },
    M = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: g,
          path: l("1/keys/%s", e)
        }, r), function(r, n) {
          return o(function(r) {
            return U(t)(e, n).then(r).catch(function(t) {
              if (404 !== t.status) throw t
            })
          })
        })
      }
    },
    U = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: l("1/keys/%s", e)
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
    V = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/clusters/mapping/top"
        }, e)
      }
    },
    B = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: l("1/clusters/mapping/%s", e)
        }, r)
      }
    },
    L = function(t) {
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
    F = function(t) {
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
    W = function(t) {
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
    H = function(t) {
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
          path: l("1/indexes/%s/operation", e),
          data: {
            operation: "move",
            destination: r
          }
        }, n), function(r, n) {
          return F(t)(e, {
            methods: {
              waitTask: tB
            }
          }).waitTask(r.taskID, n)
        })
      }
    },
    Q = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: "1/indexes/*/batch",
          data: {
            requests: e
          }
        }, r), function(e, r) {
          return Promise.all(Object.keys(e.taskID).map(function(n) {
            return F(t)(n, {
              methods: {
                waitTask: tB
              }
            }).waitTask(e.taskID[n], r)
          }))
        })
      }
    },
    X = function(t) {
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
            params: _(t.params || {})
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
    Z = function(t) {
      return function(n, i) {
        return Promise.all(n.map(function(n) {
          var a = n.params,
            s = a.facetName,
            o = a.facetQuery,
            u = r(a, ["facetName", "facetQuery"]);
          return F(t)(n.indexName, {
            methods: {
              searchForFacetValues: tM
            }
          }).searchForFacetValues(s, o, e({}, i, {}, u))
        }))
      }
    },
    tt = function(t) {
      return function(e, r) {
        var n = f(r);
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
          path: l("1/keys/%s/restore", e)
        }, r), function(r, n) {
          return o(function(r) {
            return U(t)(e, n).catch(function(t) {
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
          s = a.queryParameters,
          c = r(a, ["queryParameters"]),
          h = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
        return u(t.transporter.write({
          method: "PUT",
          path: l("1/keys/%s", e),
          data: s ? {
            queryParameters: s
          } : {}
        }, c), function(r, n) {
          return o(function(r) {
            return U(t)(e, n).then(function(t) {
              var e;
              return (e = t, Object.keys(i).filter(function(t) {
                return -1 !== h.indexOf(t)
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
          path: l("1/indexes/%s/batch", t.indexName),
          data: {
            requests: e
          }
        }, r), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    ta = function(t) {
      return function(r) {
        return k(e({}, r, {
          shouldStop: function(t) {
            return void 0 === t.cursor
          },
          request: function(e) {
            return t.transporter.read({
              method: v,
              path: l("1/indexes/%s/browse", t.indexName),
              data: e
            }, r)
          }
        }))
      }
    },
    ts = function(t) {
      return function(r) {
        var n = e({
          hitsPerPage: 1e3
        }, r);
        return k(e({}, n, {
          shouldStop: function(t) {
            return t.hits.length < n.hitsPerPage
          },
          request: function(r) {
            return tU(t)("", e({}, n, {}, r)).then(function(t) {
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
    to = function(t) {
      return function(r) {
        var n = e({
          hitsPerPage: 1e3
        }, r);
        return k(e({}, n, {
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
          s = a.batchSize,
          o = r(a, ["batchSize"]),
          c = {
            taskIDs: [],
            objectIDs: []
          };
        return u(function r() {
          var i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            u = [];
          for (i = a; i < e.length && (u.push(e[i]), u.length !== (s || 1e3)); i++);
          return 0 === u.length ? Promise.resolve(c) : ti(t)(u.map(function(t) {
            return {
              action: n,
              body: t
            }
          }), o).then(function(t) {
            return c.objectIDs = c.objectIDs.concat(t.objectIDs), c.taskIDs.push(t.taskID), r(++i)
          })
        }(), function(e, r) {
          return Promise.all(e.taskIDs.map(function(e) {
            return tB(t)(e, r)
          }))
        })
      }
    },
    tc = function(t) {
      return function(e) {
        return u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/clear", t.indexName)
        }, e), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tl = function(t) {
      return function(e) {
        var n = e || {},
          i = n.forwardToReplicas,
          a = f(r(n, ["forwardToReplicas"]));
        return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/rules/clear", t.indexName)
        }, a), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    th = function(t) {
      return function(e) {
        var n = e || {},
          i = n.forwardToReplicas,
          a = f(r(n, ["forwardToReplicas"]));
        return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/synonyms/clear", t.indexName)
        }, a), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tf = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/deleteByQuery", t.indexName),
          data: e
        }, r), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    td = function(t) {
      return function(e) {
        return u(t.transporter.write({
          method: g,
          path: l("1/indexes/%s", t.indexName)
        }, e), function(e, r) {
          return tB(t)(e.taskID, r)
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
          return tB(t)(e.taskID, r)
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
        return tu(t)(n, tL.DeleteObject, r)
      }
    },
    tg = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: g,
          path: l("1/indexes/%s/rules/%s", t.indexName, e)
        }, s), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tv = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: g,
          path: l("1/indexes/%s/synonyms/%s", t.indexName, e)
        }, s), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    ty = function(t) {
      return function(e) {
        return tS(t)(e).then(function() {
          return !0
        }).catch(function(t) {
          if (404 !== t.status) throw t;
          return !1
        })
      }
    },
    tb = function(t) {
      return function(i, a) {
        var s = a || {},
          o = s.query,
          u = s.paginate,
          c = r(s, ["query", "paginate"]),
          l = 0;
        return function r() {
          return tz(t)(o || "", e({}, c, {
            page: l
          })).then(function(t) {
            for (var e = 0, a = Object.entries(t.hits); e < a.length; e++) {
              var s = n(a[e], 2),
                o = s[0],
                c = s[1];
              if (i(c)) return {
                object: c,
                position: parseInt(o, 10),
                page: l
              }
            }
            if (l++, !1 === u || l >= t.nbPages) throw {
              name: "ObjectNotFoundError",
              message: "Object not found."
            };
            return r()
          })
        }()
      }
    },
    t_ = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: l("1/indexes/%s/%s", t.indexName, e)
        }, r)
      }
    },
    tx = function() {
      return function(t, e) {
        for (var r = 0, i = Object.entries(t.hits); r < i.length; r++) {
          var a = n(i[r], 2),
            s = a[0];
          if (a[1].objectID === e) return parseInt(s, 10)
        }
        return -1
      }
    },
    tP = function(t) {
      return function(n, i) {
        var a = i || {},
          s = a.attributesToRetrieve,
          o = r(a, ["attributesToRetrieve"]),
          u = n.map(function(r) {
            return e({
              indexName: t.indexName,
              objectID: r
            }, s ? {
              attributesToRetrieve: s
            } : {})
          });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/objects",
          data: {
            requests: u
          }
        }, o)
      }
    },
    tw = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: l("1/indexes/%s/rules/%s", t.indexName, e)
        }, r)
      }
    },
    tS = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: l("1/indexes/%s/settings", t.indexName),
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
          path: l("1/indexes/%s/synonyms/%s", t.indexName, e)
        }, r)
      }
    },
    tO = function(t) {
      return function(e, r) {
        return u(tj(t)([e], r).then(function(t) {
          return {
            objectID: t.objectIDs[0],
            taskID: t.taskIDs[0]
          }
        }), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tj = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.createIfNotExists,
          s = r(i, ["createIfNotExists"]),
          o = a ? tL.PartialUpdateObject : tL.PartialUpdateObjectNoCreate;
        return tu(t)(e, o, s)
      }
    },
    tI = function(t) {
      return function(a, s) {
        var o = s || {},
          c = o.safe,
          h = o.autoGenerateObjectIDIfNotExist,
          f = o.batchSize,
          d = r(o, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]),
          p = function(e, r, n, i) {
            return u(t.transporter.write({
              method: v,
              path: l("1/indexes/%s/operation", e),
              data: {
                operation: n,
                destination: r
              }
            }, i), function(e, r) {
              return tB(t)(e.taskID, r)
            })
          },
          m = Math.random().toString(36).substring(7),
          g = "".concat(t.indexName, "_tmp_").concat(m),
          y = tE({
            appId: t.appId,
            transporter: t.transporter,
            indexName: g
          }),
          b = [],
          _ = p(t.indexName, g, "copy", e({}, d, {
            scope: ["settings", "synonyms", "rules"]
          }));
        return b.push(_), u((c ? _.wait(d) : _).then(function() {
          var t = y(a, e({}, d, {
            autoGenerateObjectIDIfNotExist: h,
            batchSize: f
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
            s = e[2];
          return {
            objectIDs: a.objectIDs,
            taskIDs: [r.taskID].concat(i(a.taskIDs), [s.taskID])
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
        return tN(t)(r, e({}, n, {
          clearExistingRules: !0
        }))
      }
    },
    tk = function(t) {
      return function(r, n) {
        return tA(t)(r, e({}, n, {
          replaceExistingSynonyms: !0
        }))
      }
    },
    tR = function(t) {
      return function(e, r) {
        return u(tE(t)([e], r).then(function(t) {
          return {
            objectID: t.objectIDs[0],
            taskID: t.taskIDs[0]
          }
        }), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tE = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.autoGenerateObjectIDIfNotExist,
          s = r(i, ["autoGenerateObjectIDIfNotExist"]),
          o = a ? tL.AddObject : tL.UpdateObject;
        if (o === tL.UpdateObject) {
          var c = !0,
            l = !1,
            h = void 0;
          try {
            for (var f, d = e[Symbol.iterator](); !(c = (f = d.next()).done); c = !0)
              if (void 0 === f.value.objectID) return u(Promise.reject({
                name: "MissingObjectIDError",
                message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
              }))
          } catch (t) {
            l = !0, h = t
          } finally {
            try {
              c || null == d.return || d.return()
            } finally {
              if (l) throw h
            }
          }
        }
        return tu(t)(e, o, s)
      }
    },
    tq = function(t) {
      return function(e, r) {
        return tN(t)([e], r)
      }
    },
    tN = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = i.clearExistingRules,
          o = f(r(i, ["forwardToReplicas", "clearExistingRules"]));
        return a && (o.queryParameters.forwardToReplicas = 1), s && (o.queryParameters.clearExistingRules = 1), u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/rules/batch", t.indexName),
          data: e
        }, o), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tC = function(t) {
      return function(e, r) {
        return tA(t)([e], r)
      }
    },
    tA = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = i.replaceExistingSynonyms,
          o = f(r(i, ["forwardToReplicas", "replaceExistingSynonyms"]));
        return a && (o.queryParameters.forwardToReplicas = 1), s && (o.queryParameters.replaceExistingSynonyms = 1), u(t.transporter.write({
          method: v,
          path: l("1/indexes/%s/synonyms/batch", t.indexName),
          data: e
        }, o), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tz = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: l("1/indexes/%s/query", t.indexName),
          data: {
            query: e
          },
          cacheable: !0
        }, r)
      }
    },
    tM = function(t) {
      return function(e, r, n) {
        return t.transporter.read({
          method: v,
          path: l("1/indexes/%s/facets/%s/query", t.indexName, e),
          data: {
            facetQuery: r
          },
          cacheable: !0
        }, n)
      }
    },
    tU = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: l("1/indexes/%s/rules/search", t.indexName),
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
          path: l("1/indexes/%s/synonyms/search", t.indexName),
          data: {
            query: e
          }
        }, r)
      }
    },
    tV = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: "PUT",
          path: l("1/indexes/%s/settings", t.indexName),
          data: e
        }, s), function(e, r) {
          return tB(t)(e.taskID, r)
        })
      }
    },
    tB = function(t) {
      return function(e, r) {
        return o(function(n) {
          var i;
          return (i = t, function(t, e) {
            return i.transporter.read({
              method: "GET",
              path: l("1/indexes/%s/task/%s", i.indexName, t.toString())
            }, e)
          })(e, r).then(function(t) {
            return "published" !== t.status ? n() : void 0
          })
        })
      }
    },
    tL = {
      AddObject: "addObject",
      UpdateObject: "updateObject",
      PartialUpdateObject: "partialUpdateObject",
      PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
      DeleteObject: "deleteObject"
    },
    tF = {
      Settings: "settings",
      Synonyms: "synonyms",
      Rules: "rules"
    };

  function tJ(t, r, o) {
    var u, l, f, p, m, g, v, y, _, x, P = {
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
        }, f = "algoliasearch-client-js-".concat(u.key), p = function() {
          return void 0 === l && (l = u.localStorage || window.localStorage), l
        }, m = function() {
          return JSON.parse(p().getItem(f) || "{}")
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
              return r[JSON.stringify(t)] = e, p().setItem(f, JSON.stringify(r)), e
            })
          },
          delete: function(t) {
            return Promise.resolve().then(function() {
              var e = m();
              delete e[JSON.stringify(t)], p().setItem(f, JSON.stringify(e))
            })
          },
          clear: function() {
            return Promise.resolve().then(function() {
              p().removeItem(f)
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
    return y = (v = e({}, P, {}, o, {
      methods: {
        search: Y,
        searchForFacetValues: Z,
        multipleBatch: Q,
        multipleGetObjects: X,
        multipleQueries: Y,
        copyIndex: N,
        copySettings: A,
        copySynonyms: z,
        copyRules: C,
        moveIndex: K,
        listIndices: $,
        getLogs: G,
        listClusters: W,
        multipleSearchForFacetValues: Z,
        getApiKey: U,
        addApiKey: R,
        listApiKeys: J,
        updateApiKey: tn,
        deleteApiKey: M,
        restoreApiKey: te,
        assignUserID: E,
        assignUserIDs: q,
        getUserID: B,
        searchUserIDs: tr,
        listUserIDs: H,
        getTopUserIDs: V,
        removeUserID: tt,
        hasPendingMappings: L,
        initIndex: function(t) {
          return function(e) {
            return F(t)(e, {
              methods: {
                batch: ti,
                delete: td,
                getObject: t_,
                getObjects: tP,
                saveObject: tR,
                saveObjects: tE,
                search: tz,
                searchForFacetValues: tM,
                waitTask: tB,
                setSettings: tV,
                getSettings: tS,
                partialUpdateObject: tO,
                partialUpdateObjects: tj,
                deleteObject: tp,
                deleteObjects: tm,
                deleteBy: tf,
                clearObjects: tc,
                browseObjects: ta,
                getObjectPosition: tx,
                findObject: tb,
                exists: ty,
                saveSynonym: tC,
                saveSynonyms: tA,
                getSynonym: tT,
                searchSynonyms: tG,
                browseSynonyms: to,
                deleteSynonym: tv,
                clearSynonyms: th,
                replaceAllObjects: tI,
                replaceAllSynonyms: tk,
                searchRules: tU,
                getRule: tw,
                deleteRule: tg,
                saveRule: tq,
                saveRules: tN,
                replaceAllRules: tD,
                browseRules: ts,
                clearRules: tl
              }
            })
          }
        },
        initAnalytics: function() {
          return function(t) {
            var r, n, i, a;
            return n = (r = e({}, P, {}, t, {
              methods: {
                addABTest: w,
                getABTest: T,
                getABTests: O,
                stopABTest: j,
                deleteABTest: S
              }
            })).region || "us", i = s(h.WithinHeaders, r.appId, r.apiKey), a = b(e({
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
                getPersonalizationStrategy: I,
                setPersonalizationStrategy: D
              }
            })).region || "us", i = s(h.WithinHeaders, r.appId, r.apiKey), a = b(e({
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
    })).appId, _ = s(void 0 !== v.authMode ? v.authMode : h.WithinHeaders, y, v.apiKey), c({
      transporter: x = b(e({
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
        headers: e({}, _.headers(), {}, {
          "content-type": "application/x-www-form-urlencoded"
        }, {}, v.headers),
        queryParameters: e({}, _.queryParameters(), {}, v.queryParameters)
      })),
      appId: y,
      addAlgoliaAgent: function(t, e) {
        x.userAgent.add({
          segment: t,
          version: e
        })
      },
      clearCache: function() {
        return Promise.all([x.requestsCache.clear(), x.responsesCache.clear()]).then(function() {})
      }
    }, v.methods)
  }
  return tJ.version = "4.1.0", tJ
}, "object" == typeof e && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : (n = n || self).algoliasearch = i()