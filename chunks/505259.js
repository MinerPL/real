            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("271938"),
                l = n("191225");

            function o(e) {
                let t = a.default.getId(),
                    {
                        userActivity: n,
                        inActivity: o
                    } = (0, i.useStateFromStoresObject)([l.default], () => {
                        var n;
                        let i = l.default.getSelfEmbeddedActivityForChannel(e),
                            a = l.default.getEmbeddedActivitiesForChannel(e),
                            o = null === (n = a.find(e => e.application_id === (null == i ? void 0 : i.application_id))) || void 0 === n ? void 0 : n.connections,
                            r = null == o ? void 0 : o.has(t);
                        return {
                            userActivity: i,
                            inActivity: null != r && r
                        }
                    });
                return {
                    userActivity: n,
                    inActivity: o
                }
            }