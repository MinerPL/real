            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("884691"),
                l = i("446674"),
                a = i("872717"),
                u = i("913144"),
                r = i("555179"),
                d = i("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getNote(e));
                return n.useEffect(() => {
                    null == t && s(e)
                }, [t, e]), null != t ? t : {
                    loading: !0,
                    note: null
                }
            }
            async function s(e) {
                u.default.dispatch({
                    type: "USER_NOTE_LOAD_START",
                    userId: e
                });
                try {
                    let {
                        body: t
                    } = await a.default.get({
                        url: d.Endpoints.NOTE(e),
                        oldFormErrors: !0
                    });
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e,
                        note: t
                    })
                } catch (t) {
                    u.default.dispatch({
                        type: "USER_NOTE_LOADED",
                        userId: e
                    })
                }
            }