            "use strict";
            n.r(t), n.d(t, {
                useThreadMemberListSections: function() {
                    return d
                }
            }), n("222007"), n("424973");
            var a = n("884691"),
                l = n("917351"),
                s = n.n(l),
                i = n("446674"),
                r = n("593752"),
                u = n("782340");
            let o = [];

            function d(e, t) {
                let {
                    version: n,
                    members: l
                } = (0, i.useStateFromStoresObject)([r.default], () => ({
                    version: r.default.getMemberListVersion(e),
                    members: r.default.getMemberListSections(e)
                })), d = a.useMemo(() => {
                    if (null == t) return o;
                    let e = s(t.roles).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
                    return e.push("online", "offline"), e.map(e => {
                        var n, a;
                        let s = t.roles[e],
                            i = "online" === e ? u.default.Messages.STATUS_ONLINE : "offline" === e ? u.default.Messages.STATUS_OFFLINE : s.name,
                            r = null !== (a = null == l ? void 0 : null === (n = l[e]) || void 0 === n ? void 0 : n.userIds) && void 0 !== a ? a : [];
                        return {
                            label: i,
                            userIds: r,
                            id: e,
                            roleId: e
                        }
                    })
                }, [null == t ? void 0 : t.roles, l, n]);
                return null != l ? d : o
            }