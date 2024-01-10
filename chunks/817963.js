            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return E
                },
                getManageResourcePermissions: function() {
                    return p
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return h
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return C
                }
            }), n("222007");
            var a = n("884691"),
                l = n("316693"),
                i = n("446674"),
                r = n("252931"),
                s = n("813006");
            n("923959");
            var u = n("957255"),
                o = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                m = (e, t, n, a) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return a && null != t && e.creator_id === t.id;
                    if ("userId" in e) return a && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var l;
                        return a && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                E = e => {
                    let [t, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e), [l, r, d, E] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(n, e)]), p = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = a.useCallback(e => m(e, p, r, l), [l, r, p]), C = a.useCallback(e => m(e, p, E, d), [E, d, p]);
                    return null == e ? f : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: h,
                        canManageGuildEvent: C
                    }
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [a, l] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : v(e),
                        i = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(a, e),
                        E = t.can(l, e),
                        p = n.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: E,
                        canManageGuildExpression: e => m(e, p, r, i),
                        canManageGuildEvent: e => m(e, p, E, d)
                    }
                },
                h = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n
                },
                C = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n,
                            getNewSettingsDescriptionLine1: a
                        } = (0, r.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n && null != a()
                }