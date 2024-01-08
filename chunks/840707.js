            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("599110");

            function s(e, t, n) {
                let {
                    trackedActionData: i,
                    ...s
                } = t, l = {
                    url: s.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(s).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, s;
                        let o = i.properties;
                        "function" == typeof i.properties && (o = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (s = e.body) || void 0 === s ? void 0 : s.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return s(i.default.get, e, "get")
                },
                post: function(e) {
                    return s(i.default.post, e, "post")
                },
                put: function(e) {
                    return s(i.default.put, e, "put")
                },
                patch: function(e) {
                    return s(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return s(i.default.delete, e, "del")
                }
            }