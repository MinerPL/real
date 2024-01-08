            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("366757"),
                l = n("377253"),
                i = n("49111"),
                r = (e, t) => {
                    let n = (0, s.useShowConvoStarterInDM)(t),
                        r = (0, a.useStateFromStores)([l.default], () => l.default.getMessages(t.id).length > 0, [t]);
                    return null != e && e.hasFlag(i.UserFlags.QUARANTINED) && n && !r
                }