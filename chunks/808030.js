            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("45299"),
                r = s("880397"),
                o = s("783142"),
                d = s("929423"),
                u = s("424562"),
                c = s("782340");

            function S() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getIsDisableSubmit()),
                    t = (0, l.useStateFromStores)([u.default], () => u.default.getGuild()),
                    s = (0, l.useStateFromStores)([u.default], () => u.default.getErrors()),
                    [S, E] = n.useState(!1),
                    f = n.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? c.default.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]),
                    m = n.useCallback(async () => {
                        var e, s;
                        E(!0);
                        let a = u.default.getAllPending(),
                            n = (0, r.getGuildMemberChangesForUpdateRequest)(a),
                            l = (0, r.getProfileChangesForUpdateRequest)(a),
                            i = !0;
                        if (Object.keys(n).length > 0) {
                            let s = await (0, d.saveGuildIdentityChanges)(null == t ? void 0 : t.id, n);
                            i = i && null !== (e = null == s ? void 0 : s.ok) && void 0 !== e && e, (null == s ? void 0 : s.ok) && (0, d.resetPendingMemberChanges)()
                        }
                        if (Object.keys(l).length > 0) {
                            let e = await (0, o.saveProfileChanges)(l, null == t ? void 0 : t.id);
                            i = i && null !== (s = null == e ? void 0 : e.ok) && void 0 !== s && s, (null == e ? void 0 : e.ok) && (0, d.resetPendingProfileChanges)()
                        }
                        i && (0, d.clearErrors)(), E(!1)
                    }, [null == t ? void 0 : t.id]),
                    T = n.useCallback(() => {
                        (0, d.resetAllPending)()
                    }, []);
                return (0, a.jsx)(i.default, {
                    submitting: S,
                    onSave: m,
                    onReset: T,
                    disabled: e,
                    errorMessage: null != f ? f : void 0
                })
            }