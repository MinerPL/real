            "use strict";
            a.r(t), a.d(t, {
                fetchBuildSize: function() {
                    return i
                }
            });
            var s = a("872717"),
                l = a("913144"),
                n = a("677225"),
                r = a("49111");
            async function i(e, t, a, i) {
                if (n.default.needsToFetchBuildSize(a)) {
                    l.default.dispatch({
                        type: "APPLICATION_BUILD_SIZE_FETCH_START",
                        buildId: a
                    });
                    try {
                        let n = await s.default.post({
                            url: r.Endpoints.APPLICATION_BUILD_SIZE(e, t, a),
                            body: {
                                manifest_ids: i
                            },
                            oldFormErrors: !0
                        });
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: a,
                            sizeKB: n.body.size_kb
                        })
                    } catch (e) {
                        l.default.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                            buildId: a
                        })
                    }
                }
            }