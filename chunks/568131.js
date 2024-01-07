            "use strict";
            n.r(e), n.d(e, {
                fetchLibrary: function() {
                    return c
                },
                createTestModeLibraryApplications: function() {
                    return o
                },
                setActiveLaunchOptionId: function() {
                    return l
                }
            });
            var a = n("872717"),
                r = n("913144"),
                i = n("370999"),
                u = n("271560"),
                d = n("49111");
            async function c() {
                try {
                    let t = await (0, u.httpGetWithCountryCodeQuery)({
                        url: d.Endpoints.LIBRARY,
                        oldFormErrors: !0
                    }, !1);
                    r.default.dispatch({
                        type: "LIBRARY_FETCH_SUCCESS",
                        libraryApplications: t.body
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "LIBRARY_FETCH_FAIL",
                        error: t
                    })
                }
            }
            async function o(t) {
                let e = t.primarySkuId;
                if (null == e) return;
                let n = await a.default.get({
                        url: d.Endpoints.APPLICATION_BRANCH_LIST(t.id),
                        oldFormErrors: !0
                    }).then(t => t.body),
                    u = n.map(n => i.default.createForTestMode({
                        id: t.id,
                        skuId: e,
                        branch: n
                    }));
                r.default.dispatch({
                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                    libraryApplications: u
                })
            }

            function l(t, e, n) {
                r.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: t,
                    branchId: e,
                    launchOptionId: n
                })
            }