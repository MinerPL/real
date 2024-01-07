            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {};
            class i extends l.default.PersistedStore {
                initialize(e) {
                    null != e && Object.keys(e).forEach(t => {
                        "number" == typeof e[t] && (s[t] = e[t])
                    })
                }
                getState() {
                    return s
                }
                hasViewed(e) {
                    return null != s[e]
                }
            }
            i.displayName = "ViewHistoryStore", i.persistKey = "ViewHistoryStore";
            var r = new i(a.default, {
                VIEW_HISTORY_MARK_VIEW: function(e) {
                    let {
                        key: t
                    } = e;
                    s[t] = Date.now()
                }
            })