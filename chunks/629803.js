            "use strict";
            n.r(t), n.d(t, {
                fetchConsents: function() {
                    return u
                },
                setConsents: function() {
                    return d
                }
            }), n("70102");
            var a = n("872717"),
                l = n("913144"),
                s = n("49111"),
                i = n("782340");

            function r(e) {
                return null != e && null != e.body && l.default.dispatch({
                    type: "UPDATE_CONSENTS",
                    consents: {
                        ...e.body
                    }
                }), e.body
            }

            function o(e) {
                let t;
                throw Error(t = e.status >= 500 && e.status <= 599 ? i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED : null != e && null != e.body && null != e.body.message ? e.body.message : i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED)
            }

            function u() {
                return a.default.get({
                    url: s.Endpoints.SETTINGS_CONSENT,
                    oldFormErrors: !0
                }).then(r, e => Promise.reject(Error(e.body.message)))
            }

            function d(e, t) {
                return a.default.post({
                    url: s.Endpoints.SETTINGS_CONSENT,
                    body: {
                        grant: e,
                        revoke: t
                    },
                    oldFormErrors: !0
                }).then(r, o)
            }