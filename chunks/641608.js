            "use strict";
            a.r(t), a.d(t, {
                addInstallLocation: function() {
                    return n
                },
                removeInstallLocation: function() {
                    return r
                },
                updateInstallLocation: function() {
                    return i
                },
                fetchMetadata: function() {
                    return d
                }
            }), a("222007");
            var s = a("913144"),
                l = a("152723");

            function n(e) {
                l.default.queryDirectory(e, (t, a) => {
                    null == t && null != a && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: a
                    })
                })
            }

            function r(e) {
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function i(e, t) {
                let {
                    label: a,
                    isDefault: l
                } = t;
                s.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: a,
                    isDefault: l
                })
            }

            function d(e) {
                let t = {},
                    a = 0;
                for (let n of e) null != n && "string" == typeof n && l.default.queryDirectory(n, (l, r) => {
                    ++a, null == l && null != r && (t[n] = r), a === e.length && s.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }