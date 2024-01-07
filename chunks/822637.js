            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("318981"),
                o = n("49111"),
                s = {
                    search(e, t) {
                        null == r.default.getResults(e, t) && (i.default.dispatch({
                            type: "INTEGRATION_QUERY",
                            integration: e,
                            query: t
                        }), l.default.get({
                            url: o.Endpoints.INTEGRATION_SEARCH("tenor"),
                            query: {
                                q: t
                            },
                            oldFormErrors: !0
                        }).then(n => {
                            i.default.dispatch({
                                type: "INTEGRATION_QUERY_SUCCESS",
                                integration: e,
                                query: t,
                                results: n.body
                            })
                        }, () => i.default.dispatch({
                            type: "INTEGRATION_QUERY_FAILURE",
                            integration: e,
                            query: t
                        })))
                    }
                }