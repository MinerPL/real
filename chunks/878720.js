            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return i
                },
                default: function() {
                    return f
                }
            });
            var a, i, r = n("759843"),
                l = n("872717"),
                u = n("913144"),
                o = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (a = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required", a.USER_SETTINGS_UPDATE = "user_settings_update", a.GUILD_PHONE_REQUIRED = "guild_phone_required", a.MFA_PHONE_UPDATE = "mfa_phone_update", a.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    u.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => l.default.delete({
                    url: c.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = o.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = {},
                        l = o.default.getFingerprint();
                    null != l && "" !== l && (i["X-Fingerprint"] = l), a && (i.authorization = "");
                    let f = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: i,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && u.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), f.body
                }
            }