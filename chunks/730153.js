            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return T
                }
            }), u("222007");
            var l = u("37983"),
                s = u("884691"),
                a = u("77078"),
                n = u("272030"),
                d = u("901582"),
                i = u("448993"),
                o = u("861370"),
                r = u("454686"),
                c = u("353575"),
                E = u("702873"),
                _ = u("151866"),
                M = u("155158"),
                f = u("49111"),
                R = u("782340");

            function T(e) {
                let {
                    rule: t,
                    analyticsContext: u,
                    onSelect: T
                } = e, U = (0, r.isBackendPersistedRule)(t), A = function(e) {
                    let {
                        editingRule: t,
                        setEditingRule: u
                    } = (0, _.useAutomodEditingRuleState)();
                    return (0, l.jsx)(a.MenuItem, {
                        id: "edit-automod-rule",
                        label: R.default.Messages.GUILD_AUTOMOD_EDIT_RULE,
                        action: () => {
                            u(e)
                        },
                        disabled: null != t
                    })
                }(t), I = function(e) {
                    let {
                        setEditingRule: t
                    } = (0, _.useAutomodEditingRuleState)(), [u, n] = s.useState(!1), {
                        removeRule: d
                    } = (0, c.useAutomodRulesList)(e.guildId), o = async () => {
                        if (u) return;
                        let l = await (0, M.confirmRuleDelete)(e.name);
                        if (l) {
                            n(!0);
                            try {
                                await (0, E.deleteAutomodRule)(e.id, e.guildId), t(null), d(e.id, e.guildId)
                            } catch (t) {
                                var s;
                                let e = new i.APIError(t);
                                (0, a.showToast)((0, a.createToast)(null !== (s = e.getAnyErrorMessage()) && void 0 !== s ? s : R.default.Messages.ERROR_OCCURRED_TRY_AGAIN, a.ToastType.FAILURE))
                            } finally {
                                n(!1)
                            }
                        }
                    };
                    return (0, l.jsx)(a.MenuItem, {
                        id: "delete-automod-rule",
                        label: R.default.Messages.GUILD_AUTOMOD_DELETE_RULE,
                        action: o
                    })
                }(t), O = (0, o.default)({
                    id: t.id,
                    label: R.default.Messages.COPY_ID_AUTOMOD_RULE
                });
                return (0, l.jsx)(d.default, {
                    context: u,
                    object: f.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(a.Menu, {
                        navId: "automod-rule-context",
                        onClose: n.closeContextMenu,
                        "aria-label": R.default.Messages.GUILD_AUTOMOD_RULE_CONTEXT_MENU,
                        onSelect: T,
                        children: [(0, l.jsxs)(a.MenuGroup, {
                            children: [A, U && I]
                        }), U && (0, l.jsx)(a.MenuGroup, {
                            children: O
                        })]
                    })
                })
            }