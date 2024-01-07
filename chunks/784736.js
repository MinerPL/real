            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                i = n("913144");
            let a = {};
            class s extends r.default.Store {
                getEULA(e) {
                    return a[e]
                }
            }
            s.displayName = "EULAStore";
            var o = new s(i.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    a[t.id] = t
                }
            })