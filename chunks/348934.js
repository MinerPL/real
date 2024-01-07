            "use strict";
            n.r(t), n.d(t, {
                canCurrentUserManageMessageFilters: function() {
                    return l
                },
                canCurrentUserManageAutomod: function() {
                    return d
                },
                useCanCurrentUserManageAutomod: function() {
                    return s
                },
                useIsUserProfileRuleEnabled: function() {
                    return T
                }
            }), n("222007");
            var r = n("446674"),
                o = n("305961"),
                i = n("957255"),
                u = n("49111");
            let a = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, i.default],
                    [n, r] = t,
                    a = n.getGuild(e);
                return null != a && r.can(u.Permissions.MANAGE_GUILD, a)
            };

            function l(e) {
                if (null == e) return !1;
                let t = a(e);
                return t
            }

            function d(e) {
                let t = a(e);
                return t
            }

            function s(e) {
                return (0, r.useStateFromStores)([o.default, i.default], () => a(e, [o.default, i.default]), [e])
            }

            function T(e) {
                return (0, r.useStateFromStores)([o.default], () => {
                    let t = o.default.getGuild(e);
                    return (null == t ? void 0 : t.hasFeature(u.GuildFeatures.COMMUNITY)) || !1
                }, [e])
            }