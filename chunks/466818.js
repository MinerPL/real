            "use strict";
            n.r(t), n.d(t, {
                canAccessMemberSafetyPage: function() {
                    return E
                },
                useCanAccessMemberSafetyPage: function() {
                    return h
                },
                useCanAccessBulkBanningFeature: function() {
                    return p
                },
                useCanAccessInviteCodeFeature: function() {
                    return T
                },
                useCanBulkBanUser: function() {
                    return C
                },
                canBulkBanUser: function() {
                    return m
                }
            }), n("222007");
            var i = n("316693"),
                a = n("446674"),
                l = n("305961"),
                s = n("957255"),
                r = n("697218"),
                u = n("991170"),
                o = n("536999"),
                d = n("562980"),
                c = n("49111");
            let _ = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, r.default],
                        [n, i] = t,
                        a = n.getGuild(e),
                        s = i.getCurrentUser();
                    return {
                        user: s,
                        guild: a
                    }
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, r.default],
                        n = _(e, t);
                    if (null == n) return !1;
                    let a = i.default.hasAny(u.default.computePermissions({
                        user: n.user,
                        context: n.guild,
                        checkElevated: !1
                    }), d.MemberSafetyPagePermissions);
                    return a
                },
                f = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, r.default],
                        n = _(e, t);
                    return null != n && s.default.can(c.Permissions.MANAGE_GUILD, n.guild) && s.default.can(c.Permissions.BAN_MEMBERS, n.guild)
                };

            function h(e) {
                let t = (0, a.useStateFromStores)([l.default, r.default], () => E(e, [l.default, r.default]), [e]);
                return t
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(e),
                    s = (0, a.useStateFromStores)([l.default, r.default], () => f(e, [l.default, r.default]), [e]),
                    u = (0, o.useIsBulkBanningExperimentEnabled)(e, {
                        location: t,
                        autoTrackExposure: n,
                        disable: !s
                    });
                return i && s && u
            }

            function T(e) {
                return (0, a.useStateFromStores)([l.default, s.default], () => {
                    let t = l.default.getGuild(e);
                    return null != t && s.default.can(c.Permissions.MANAGE_GUILD, t)
                }, [e])
            }

            function C(e, t, n) {
                return (0, a.useStateFromStores)([s.default, l.default], () => {
                    let i = l.default.getGuild(e);
                    return null != i && t && s.default.canManageUser(c.Permissions.BAN_MEMBERS, n, i)
                }, [t, e, n])
            }

            function m(e, t, n) {
                let i = l.default.getGuild(e);
                return null != i && t && s.default.canManageUser(c.Permissions.BAN_MEMBERS, n, i)
            }