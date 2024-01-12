            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                u = n("913144");
            let a = {};
            class l extends r.default.Store {
                getEULA(e) {
                    return a[e]
                }
            }
            l.displayName = "EULAStore";
            var o = new l(u.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    a[t.id] = t
                }
            })