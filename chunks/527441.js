            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("913144");
            let l = null;
            class i extends s.default.PersistedStore {
                initialize(e) {
                    var t;
                    l = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : null
                }
                getType() {
                    return l
                }
                getState() {
                    return {
                        type: l
                    }
                }
            }
            i.displayName = "NewUserStore", i.persistKey = "nuf";
            var r = new i(a.default, {
                NUF_NEW_USER: function(e) {
                    let {
                        newUserType: t
                    } = e;
                    l = t
                },
                NUF_COMPLETE: function() {
                    l = null
                }
            })