            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                o = n("38654"),
                a = n("9294"),
                u = n("26989"),
                s = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    o = !u.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, p = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, S = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var T = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: p,
                submitVerificationForm: S
            }