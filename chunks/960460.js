            "use strict";
            let n;
            r.r(t), r.d(t, {
                applyStaffBuildOverride: function() {
                    return d
                },
                applyPublicBuildOverride: function() {
                    return o
                },
                clearBuildOverride: function() {
                    return c
                },
                getPublicBuildOverrideLink: function() {
                    return f
                }
            });
            var l = r("872717"),
                i = r("271938"),
                a = r("922932"),
                s = r("355025");
            let u = "/__development/build_overrides";
            async function d(e) {
                try {
                    var t;
                    let r = await l.default.put({
                        url: (0, s.getAPIEndpoint)(u),
                        body: {
                            overrides: e,
                            version: s.APP_VERSION
                        },
                        headers: {
                            Authorization: null !== (t = i.default.getToken()) && void 0 !== t ? t : ""
                        },
                        oldFormErrors: !0
                    });
                    return await n(r), r
                } catch (e) {
                    return e
                }
            }
            async function o(e) {
                try {
                    let t = await l.default.put({
                        url: (0, s.getAPIEndpoint)("/__development/link"),
                        body: {
                            payload: e,
                            token: i.default.getToken(),
                            version: s.APP_VERSION
                        },
                        oldFormErrors: !0
                    });
                    return await n(t), t
                } catch (e) {
                    return e
                }
            }
            async function c() {
                let e = await l.default.delete({
                    url: (0, s.getAPIEndpoint)(u),
                    oldFormErrors: !0
                });
                return await n(e), e
            }

            function f(e) {
                var t;
                return l.default.post({
                    url: (0, s.getAPIEndpoint)("/__development/create_build_override_link"),
                    body: e,
                    headers: {
                        Authorization: null !== (t = i.default.getToken()) && void 0 !== t ? t : ""
                    },
                    oldFormErrors: !0
                }).then(e => ({
                    url: e.body.url,
                    error: !1
                }), e => 400 === e.status ? {
                    url: !1,
                    error: e.body
                } : {
                    url: !1,
                    error: "Error making API request (".concat(e.status, ")")
                })
            }
            n = async e => {
                try {
                    await a.default.flushCookies()
                } catch (e) {}
            }