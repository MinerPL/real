            "use strict";
            n.r(t), n.d(t, {
                useAutomodEditingRuleActions: function() {
                    return g
                },
                useAutomodEditingRuleState: function() {
                    return S
                }
            });
            var r = n("917351"),
                o = n.n(r),
                i = n("308503"),
                u = n("448993"),
                a = n("449008"),
                l = n("600798"),
                d = n("454686"),
                s = n("296839"),
                T = n("702873"),
                E = n("314865"),
                A = n("254365"),
                _ = n("49111"),
                c = n("782340");
            let f = Object.freeze({
                    editingRule: null,
                    hasChanges: !1,
                    isLoading: !1,
                    errorMessage: null
                }),
                I = (0, i.default)((e, t) => ({
                    editingRule: null,
                    hasChanges: !1,
                    setEditingRule: n => {
                        let r = t().editingRule,
                            i = null != n && null != r && n.id === r.id,
                            u = o.cloneDeep(n);
                        null != u && (u = {
                            ...u,
                            actions: u.actions.filter(a.isNotNullish)
                        }), e({
                            editingRule: u,
                            hasChanges: i,
                            errorMessage: null
                        })
                    },
                    createNewEditingRule: (t, n, r) => {
                        let o = {
                            ...(0, d.createDefaultRule)(t, n),
                            ...null != r ? r : {}
                        };
                        return e({
                            editingRule: o,
                            hasChanges: !1
                        }), o
                    },
                    isLoading: !1,
                    errorMessage: null,
                    cancelEditingRule: () => {
                        e({
                            ...f
                        })
                    },
                    saveRule: async (t, n) => {
                        if (null == t) return e({
                            ...f
                        }), null;
                        try {
                            var r, o, i;
                            (0, d.isRuleKeywordFilter)(t) && (t.triggerMetadata.keywordFilter = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : [])), t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (o = t.triggerMetadata.allowList) && void 0 !== o ? o : []))), (0, d.isRuleDefaultKeywordListFilter)(t) && (t.triggerMetadata.allowList = (0, E.sortKeywords)((0, E.dedupeKeywords)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : []))), (0, s.validateRuleByTriggerConfigOrThrow)(t, n), (0, d.validateRuleBeforeSaveOrThrow)(t)
                        } catch (t) {
                            return t instanceof l.InvalidKeywordError ? e({
                                errorMessage: c.default.Messages.GUILD_AUTOMOD_KEYWORD_GENERIC_SAVE_ERROR,
                                isLoading: !1
                            }) : t instanceof l.InvalidRegexPatternError ? e({
                                errorMessage: c.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR,
                                isLoading: !1
                            }) : e({
                                errorMessage: t.message,
                                isLoading: !1
                            }), null
                        }
                        try {
                            e({
                                isLoading: !0
                            });
                            let n = null;
                            return n = (0, d.isBackendPersistedRule)(t) && !(0, A.isDefaultRuleId)(t.id) ? await (0, T.updateAutomodRule)(t) : await (0, T.createAutomodRule)(t), e({
                                ...f
                            }), n
                        } catch (n) {
                            let t = new u.APIError(n);
                            e({
                                isLoading: !1,
                                errorMessage: function(e) {
                                    if (e.code === _.AbortCodes.INVALID_FORM_BODY) {
                                        var t, n;
                                        if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return c.default.Messages.GUILD_AUTOMOD_REGEX_GENERIC_SAVE_ERROR
                                    }
                                    return e.getAnyErrorMessage()
                                }(t)
                            })
                        }
                        return null
                    },
                    saveEditingRule: e => {
                        let {
                            editingRule: n,
                            saveRule: r
                        } = t();
                        return r(n, e)
                    }
                }));

            function g() {
                return I(e => ({
                    hasChanges: e.hasChanges,
                    editingRule: e.editingRule,
                    isLoading: e.isLoading,
                    errorMessage: e.errorMessage,
                    saveRule: e.saveRule,
                    saveEditingRule: e.saveEditingRule,
                    cancelEditingRule: e.cancelEditingRule
                }))
            }

            function S() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = I(e => ({
                        hasChanges: e.hasChanges,
                        editingRule: e.editingRule,
                        setEditingRule: e.setEditingRule,
                        createNewEditingRule: e.createNewEditingRule
                    }));
                return null != e && t.setEditingRule(e), t
            }