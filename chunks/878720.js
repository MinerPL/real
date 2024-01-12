            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var l, a, r = n("759843"),
                u = n("872717"),
                i = n("913144"),
                s = n("271938"),
                o = n("840707"),
                d = n("482931"),
                _ = n("49111");
            (l = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", l.USER_SETTINGS_UPDATE = "user_settings_update", l.GUILD_PHONE_REQUIRED = "guild_phone_required", l.MFA_PHONE_UPDATE = "mfa_phone_update", l.CONTACT_SYNC = "contact_sync";
            var E = {
                setCountryCode(e) {
                    i.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => u.default.delete({
                    url: _.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = s.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), u.default.post({
                        url: _.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => u.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => u.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => u.default.post({
                    url: _.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => u.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => u.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => u.default.post({
                    url: _.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        u = s.default.getFingerprint();
                    null != u && "" !== u && (a["X-Fingerprint"] = u), l && (a.authorization = "");
                    let E = await o.default.post({
                        url: _.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && i.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), E.body
                }
            }