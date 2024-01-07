            "use strict";
            s.r(t), s.d(t, {
                fetchAuthSessions: function() {
                    return i
                },
                clearAuthSessions: function() {
                    return r
                },
                logOutSessions: function() {
                    return o
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("49111");
            async function i() {
                var e;
                let t = await a.default.get({
                    url: l.Endpoints.AUTH_SESSIONS
                });
                return (null == t ? void 0 : t.ok) && (null === (e = t.body) || void 0 === e ? void 0 : e.user_sessions) != null && n.default.dispatch({
                    type: "FETCH_AUTH_SESSIONS_SUCCESS",
                    sessions: t.body.user_sessions
                }), t
            }

            function r() {
                n.default.dispatch({
                    type: "FETCH_AUTH_SESSIONS_SUCCESS",
                    sessions: []
                })
            }
            async function o(e) {
                if (Array.isArray(e)) {
                    if (0 === e.length) return
                } else e = [e];
                let t = await a.default.post({
                    url: l.Endpoints.AUTH_SESSIONS_LOGOUT,
                    body: {
                        session_id_hashes: e
                    }
                });
                return (null == t ? void 0 : t.ok) && n.default.dispatch({
                    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
                    sessionIdHashes: e
                }), t
            }