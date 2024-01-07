            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("299039"),
                i = n("271938"),
                r = n("27618");
            let o = !1;
            class u extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, i.default)
                }
                isEligible() {
                    return o
                }
            }
            u.displayName = "PremiumPromoStore";
            var d = new u(a.default, {
                CONNECTION_OPEN: function() {
                    let e = o;
                    return e !== (o = r.default.getFriendIDs().length >= 10 && s.default.extractTimestamp(i.default.getId()) < Date.now() - 15552e6)
                }
            })