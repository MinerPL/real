            "use strict";
            n.r(t), n.d(t, {
                NO_MEMBER_VERIFICATION_FORM: function() {
                    return u
                },
                default: function() {
                    return c
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("567054");
            let u = {
                    version: "",
                    description: "",
                    formFields: []
                },
                o = {};
            class d extends l.default.Store {
                get(e) {
                    if (null != e) return o[e]
                }
                getRulesPrompt(e) {
                    var t;
                    return a.find(null === (t = o[e]) || void 0 === t ? void 0 : t.formFields, r.isTermsFormField)
                }
            }
            d.displayName = "MemberVerificationFormStore";
            var c = new d(s.default, {
                INVITE_ACCEPT_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, {
                        member_verification_form: n
                    } = t, {
                        guild: i
                    } = t;
                    if (null != i && null != n) {
                        var a;
                        return o[i.id] = {
                            version: n.version,
                            description: null !== (a = n.description) && void 0 !== a ? a : "",
                            formFields: n.form_fields,
                            guild: i
                        }, !0
                    }
                    return !1
                },
                MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
                    let {
                        form: t,
                        guildId: n
                    } = e;
                    o[n] = null != t ? t : u
                },
                MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
                    var t;
                    let {
                        guildId: n
                    } = e;
                    o[n] = null !== (t = o[n]) && void 0 !== t ? t : u
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete o[null == t ? void 0 : t.id]
                }
            })