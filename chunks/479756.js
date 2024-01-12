            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return E
                },
                updateImpersonating: function() {
                    return p
                },
                stopImpersonating: function() {
                    return y
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return I
                }
            }), n("222007");
            var s = n("913144"),
                i = n("716241"),
                r = n("393414"),
                a = n("42203"),
                o = n("923959"),
                d = n("26989"),
                u = n("305961"),
                l = n("957255"),
                f = n("18494"),
                _ = n("282109"),
                c = n("599110"),
                g = n("38654"),
                m = n("507950"),
                h = n("49111"),
                v = n("724210");

            function E(e, t) {
                c.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === m.ImpersonateType.NEW_MEMBER
                }), s.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), T(e)
            }

            function p(e, t) {
                let n = g.default.getData(e);
                null != n && n.type === t.type && (c.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === m.ImpersonateType.NEW_MEMBER
                }), s.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), T(e))
            }

            function y(e) {
                s.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function T(e) {
                let t = f.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    s = null != t && (0, v.isStaticChannelRoute)(t);
                if (!s && !l.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(h.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let s = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => s.add(e)), n.forEach(e => s.delete(e)), p(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    optInChannels: s
                })
            }

            function S(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        s = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = d.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (s.some(e => !t.roles.includes(e))) return !0;
                        let i = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            r = i.filter(e => !n.includes(e));
                        return r.length > 0 && C(e, r, []), !1
                    })
                }(e, t);
                let s = {};
                t.forEach(e => s[e] = n.roles[e]), p(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    roles: s
                })
            }

            function I(e, t) {
                p(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }