            "use strict";
            n.r(t), n.d(t, {
                fetchEULA: function() {
                    return s
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("49111");
            async function s(e) {
                let t = await r.default.get({
                    url: a.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                i.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }