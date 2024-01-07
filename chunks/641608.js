            "use strict";
            l.r(t), l.d(t, {
                addInstallLocation: function() {
                    return n
                },
                removeInstallLocation: function() {
                    return i
                },
                updateInstallLocation: function() {
                    return r
                },
                fetchMetadata: function() {
                    return c
                }
            }), l("222007");
            var a = l("913144"),
                s = l("152723");

            function n(e) {
                s.default.queryDirectory(e, (t, l) => {
                    null == t && null != l && a.default.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: l
                    })
                })
            }

            function i(e) {
                a.default.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function r(e, t) {
                let {
                    label: l,
                    isDefault: s
                } = t;
                a.default.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: l,
                    isDefault: s
                })
            }

            function c(e) {
                let t = {},
                    l = 0;
                for (let n of e) null != n && "string" == typeof n && s.default.queryDirectory(n, (s, i) => {
                    ++l, null == s && null != i && (t[n] = i), l === e.length && a.default.dispatch({
                        type: "INSTALLATION_LOCATION_FETCH_METADATA",
                        metadataPayload: t
                    })
                })
            }