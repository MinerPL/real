            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("49111"),
                i = {
                    fetch() {
                        a.default.get({
                            url: l.Endpoints.OAUTH2_TOKENS,
                            oldFormErrors: !0
                        }).then(e => n.default.dispatch({
                            type: "USER_AUTHORIZED_APPS_UPDATE",
                            apps: e.body
                        }), () => n.default.dispatch({
                            type: "USER_AUTHORIZED_APPS_UPDATE",
                            apps: []
                        }))
                    },
                    delete(e) {
                        a.default.delete({
                            url: l.Endpoints.OAUTH2_TOKEN(e),
                            oldFormErrors: !0
                        }).then(() => {
                            this.fetch()
                        })
                    }
                }