            "use strict";
            n.r(t), n.d(t, {
                mapError: function() {
                    return i
                },
                openMFAModal: function() {
                    return r
                }
            }), n("70102"), n("581081");
            var s = n("872717"),
                o = n("695501"),
                l = n("49111"),
                a = n("782340");

            function i(e) {
                let t = a.default.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = a.default.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = a.default.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }
            async function d(e) {
                let {
                    ticket: t,
                    mfaType: n,
                    data: o
                } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                try {
                    let e = await s.default.post({
                        url: l.Endpoints.FINISH_MFA_CHECK,
                        body: {
                            ticket: t,
                            mfa_type: n,
                            data: o
                        },
                        retries: a
                    });
                    return e.body
                } catch (e) {
                    var d;
                    if ((null === (d = e.body) || void 0 === d ? void 0 : d.code) === l.AbortCodes.MFA_INVALID_CODE) throw Error(i(n));
                    throw e
                }
            }

            function r(e, t, s) {
                let a = async e => {
                    let n = await d(e),
                        s = {
                            "X-Discord-MFA-Authorization": n.token
                        };
                    return new Promise((n, o) => {
                        t(s, (t, s, a) => {
                            var d, r;
                            return (null === (d = t.body) || void 0 === d ? void 0 : d.code) === l.AbortCodes.MFA_INVALID_CODE || (null === (r = t.body) || void 0 === r ? void 0 : r.code) === l.AbortCodes.MFA_REQUIRED ? (o(Error(i(e.mfaType))), !0) : (n(), !1)
                        })
                    })
                };
                e.methods = e.methods.filter(e => Object.hasOwn(o.SELECT_NAMES, e.type)), n("24287").openMFAModal(e, a, s)
            }