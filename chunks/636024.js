            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionMemberSearch: function() {
                    return N
                }
            }), l("424973"), l("222007"), l("843762");
            var n = l("884691"),
                a = l("627445"),
                s = l.n(a),
                i = l("316693"),
                r = l("446674"),
                o = l("26989"),
                d = l("305961"),
                u = l("957255"),
                c = l("697218"),
                f = l("991170"),
                m = l("978900"),
                I = l("49111");

            function N(e) {
                let t = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(e));
                s(null != t, "guild must be present to be editing its integration settings");
                let l = (0, r.useStateFromStores)([u.default], () => u.default.getHighestRole(t)),
                    a = (0, r.useStateFromStoresArray)([o.default], () => o.default.getMembers(e), [e]),
                    N = (0, r.useStateFromStoresObject)([c.default], () => c.default.getUsers()),
                    h = (0, r.useStateFromStoresArray)([d.default], () => {
                        var t, l;
                        return Object.values(null !== (l = null === (t = d.default.getGuild(e)) || void 0 === t ? void 0 : t.roles) && void 0 !== l ? l : {})
                    }, [e]),
                    g = n.useMemo(() => {
                        let e = [];
                        for (let l of a) {
                            let n = N[l.userId];
                            if (null == n || n.bot) continue;
                            let a = n.id !== t.ownerId && !f.default.can({
                                permission: I.Permissions.ADMINISTRATOR,
                                user: n,
                                context: t
                            }) && u.default.canManageUser(I.Permissions.USE_APPLICATION_COMMANDS, n, t);
                            e.push({
                                id: n.id,
                                canManage: a,
                                nick: l.nick,
                                username: n.username
                            })
                        }
                        return e
                    }, [t, a, N]),
                    p = e => {
                        var t;
                        return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null
                    },
                    S = n.useMemo(() => {
                        let n = [];
                        for (let a of h) {
                            if (p(a)) continue;
                            let s = !i.default.has(a.permissions, I.Permissions.ADMINISTRATOR) && u.default.isRoleHigher(t, l, a),
                                r = {
                                    id: a.id,
                                    name: a.name,
                                    canManage: s
                                };
                            a.id === e ? n.unshift(r) : n.push(r)
                        }
                        return n
                    }, [h, e, t, l]),
                    [O, _] = n.useState(""),
                    A = n.useMemo(() => {
                        let t = function(e) {
                                return e.startsWith("@") ? e.substr(1) : e
                            }(O),
                            l = O.startsWith("@") ? S.filter(t => t.id === e) : S,
                            n = (0, m.filterPermissionSearchItems)(g, T, t),
                            a = (0, m.filterPermissionSearchItems)(l, E, t);
                        return {
                            members: n,
                            roles: a
                        }
                    }, [e, g, O, S]);
                return {
                    query: O,
                    results: A,
                    setQuery: _,
                    unfilteredCount: A.members.length + A.roles.length
                }
            }

            function T(e) {
                let t = [e.username];
                return (null == e ? void 0 : e.nick) != null && t.push(e.nick), {
                    id: e.id,
                    names: t
                }
            }

            function E(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }