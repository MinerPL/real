            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var a = s("446674"),
                n = s("256941"),
                l = s("677795");

            function i() {
                return (0, a.useStateFromStores)([n.default], () => (function() {
                    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.default], t = e.getGuildIdsWithPurchasableRoles(), s = !1;
                    return (t.forEach(t => {
                        let a = e.getUserSubscriptionRoles(t);
                        a.size > 0 && (s = !0)
                    }), s) ? l.UserGuildRoleSubscriptionRelationship.SUBSCRIBED : 0 === t.size ? l.UserGuildRoleSubscriptionRelationship.NONE : l.UserGuildRoleSubscriptionRelationship.IN_SUBSCRIPTION_SERVER
                })([n.default]))
            }