            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("872717"),
                s = n("271938"),
                i = n("49111"),
                l = {
                    setUserAchievement(e, t, n) {
                        let l = s.default.getId();
                        return a.default.put({
                            url: i.Endpoints.USER_ACHIEVEMENTS_FOR_USER(l, e, t),
                            body: {
                                percent_complete: n
                            },
                            oldFormErrors: !0
                        })
                    },
                    fetchForApplication: e => a.default.get({
                        url: i.Endpoints.USER_ACHIEVEMENTS(e),
                        retries: 1,
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        return t
                    })
                }