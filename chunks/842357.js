            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("454686"),
                i = s("254365"),
                r = s("151866"),
                o = s("155158"),
                d = s("872708"),
                u = s("567062"),
                c = s("736523"),
                E = n.memo(function(e) {
                    let {
                        rule: t,
                        persistEdit: s = !1,
                        initWithEdit: E = !1
                    } = e, {
                        hasChanges: _,
                        editingRule: T,
                        createNewEditingRule: I,
                        setEditingRule: S
                    } = (0, r.useAutomodEditingRuleState)(), {
                        isLoading: N
                    } = (0, r.useAutomodEditingRuleActions)(), [g] = n.useState(() => !(0, l.isBackendPersistedRule)(t)), f = (null == T ? void 0 : T.id) === t.id || s, A = (0, i.isDefaultRuleId)(null == t ? void 0 : t.id), L = f && null != T ? T : t, m = n.useMemo(() => (0, o.createOnPreventNavigation)(t.name), [null == t ? void 0 : t.name]), C = n.useCallback(() => {
                        I(t.guildId, t.triggerType)
                    }, [t.guildId, t.triggerType, I]), O = n.useCallback(e => {
                        !N && S(e, !0)
                    }, [N, S]);
                    n.useEffect(() => {
                        E && S(t, !0)
                    }, [E, t, S]);
                    let h = n.useCallback(() => {
                        f ? !_ && S(null) : _ ? m(() => {
                            S(t)
                        }) : S(t)
                    }, [f, _, m, t, S]);
                    return (0, a.jsx)(u.default, {
                        renderHeader: (0, a.jsx)(c.default, {
                            rule: L,
                            forceSetup: g && !f && !A,
                            triggerType: t.triggerType,
                            isEditMode: f,
                            isDefaultRule: A,
                            onChangeRule: O,
                            onSetupRule: C
                        }),
                        isStuck: f && _,
                        isExpanded: f,
                        onExpand: h,
                        children: f && (0, a.jsx)(d.default, {
                            rule: L,
                            isLoading: N,
                            onChangeRule: O
                        })
                    })
                })