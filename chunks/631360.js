            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("267567");
            let i = null,
                r = null;

            function o() {
                let e = l.default.mostRecentLurkedGuildId();
                null != e ? (i = e, r = null) : (null != i ? r = i : r = null, i = null)
            }
            class u extends a.default.Store {
                initialize() {
                    this.syncWith([l.default], o)
                }
                shouldShowPopout(e) {
                    return r === e
                }
            }
            u.displayName = "LurkerModePopoutStore";
            var d = new u(s.default)