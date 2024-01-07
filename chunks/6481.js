            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("448993"),
                i = s("49111");
            let r = {
                [i.HypeSquadHouses.HOUSE_1]: 1,
                [i.HypeSquadHouses.HOUSE_2]: 2,
                [i.HypeSquadHouses.HOUSE_3]: 3
            };
            var o = {
                joinHypeSquadOnline: e => a.default.post({
                    url: i.Endpoints.HYPESQUAD_ONLINE,
                    body: {
                        house_id: r[e.houseID]
                    },
                    oldFormErrors: !0
                }).then(() => n.default.dispatch({
                    type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
                    houseID: e.houseID
                })).catch(e => {
                    throw new l.V6OrEarlierAPIError(e)
                }),
                leaveHypeSquadOnline: () => a.default.delete({
                    url: i.Endpoints.HYPESQUAD_ONLINE,
                    oldFormErrors: !0
                }).then(() => n.default.dispatch({
                    type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS"
                })).catch(e => {
                    throw new l.V6OrEarlierAPIError(e)
                })
            }