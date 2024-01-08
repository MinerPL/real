            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return T
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return v
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return A
                }
            }), n("222007");
            var i = n("913144"),
                r = n("716241"),
                s = n("393414"),
                l = n("42203"),
                o = n("923959"),
                u = n("26989"),
                a = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                h = n("724210");

            function S(e, t) {
                E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function T(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function N(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = d.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, h.isStaticChannelRoute)(t);
                if (!i && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function v(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function g(e, t) {
                let n = a.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            s = r.filter(e => !n.includes(e));
                        return s.length > 0 && v(e, s, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function A(e, t) {
                T(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }