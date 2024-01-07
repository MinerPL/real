            "use strict";
            i.r(t), i.d(t, {
                sync: function() {
                    return r
                },
                play: function() {
                    return d
                },
                getMetadata: function() {
                    return o
                }
            }), i("70102");
            var n = i("872717"),
                l = i("913144"),
                a = i("824563"),
                u = i("49111");

            function r(e, t) {
                l.default.dispatch({
                    type: "ACTIVITY_SYNC",
                    activity: e,
                    userId: t
                })
            }

            function d(e, t) {
                o(e, t).then(i => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t,
                    metadata: i
                })).catch(() => l.default.dispatch({
                    type: "ACTIVITY_PLAY",
                    activity: e,
                    userId: t
                }))
            }

            function o(e, t) {
                let i = e.metadata;
                if (null != i) return Promise.resolve(i);
                let r = a.default.getActivityMetadata(t);
                return null != r ? Promise.resolve(r) : null == e.session_id ? Promise.reject(Error("null/undefined session_id")) : n.default.get({
                    url: u.Endpoints.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: i
                    } = e;
                    return l.default.dispatch({
                        type: "ACTIVITY_METADATA_UPDATE",
                        metadata: i,
                        userId: t
                    }), i
                })
            }