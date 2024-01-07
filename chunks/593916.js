            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("808653"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                s = n("448105"),
                l = n.n(s),
                a = n("917351"),
                o = n.n(a),
                u = n("316693"),
                c = n("446674"),
                d = n("77078"),
                f = n("26989"),
                p = n("305961"),
                _ = n("697218"),
                m = n("991170"),
                E = n("479756"),
                I = n("38654"),
                h = n("507950"),
                C = n("49111"),
                S = n("782340"),
                g = n("729320");

            function T(e) {
                var t;
                return (0, r.jsx)("span", {
                    style: {
                        color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
                    },
                    children: e.name
                })
            }

            function N(e) {
                let {
                    guildId: t
                } = e, n = (0, c.useStateFromStores)([_.default], () => _.default.getCurrentUser()), s = (0, c.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
                    impersonateType: a,
                    viewingRoles: N
                } = (0, c.useStateFromStoresObject)([I.default], () => ({
                    impersonateType: I.default.getImpersonateType(t),
                    viewingRoles: I.default.getViewingRoles(t)
                })), A = a === h.ImpersonateType.ROLE_SUBSCRIPTION, v = (0, c.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [R, O] = (0, d.useMultiSelect)(null == N ? [] : Object.keys(N)), x = i.useRef(s);
                i.useEffect(() => {
                    let e = {},
                        t = x.current;
                    if (null != t && null != a) {
                        for (let n of R) {
                            let r = t.getRole(n);
                            null != r && (e[n] = r)
                        }(0, E.updateImpersonating)(t.id, {
                            type: a,
                            roles: e
                        })
                    }
                }, [R, a]);
                let D = null != s && null != n && null != v ? o(s.roles).filter(e => -1 !== v.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
                    b = i.useMemo(() => null != s && null != n ? Object.values(s.roles).filter(e => e.id !== s.id).filter(e => {
                        var t;
                        return !A || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
                    }).filter(e => (null == D ? void 0 : D.id) === e.id || m.default.isRoleHigher(s, n.id, D, e)) : [], [s, n, A, D]);
                if (null == n || null == s || null == v) return null;
                let M = {};
                v.roles.forEach(e => {
                    let t = s.roles[e];
                    null != t && (M[t.id] = t)
                });
                let L = u.default.has(m.default.computePermissionsForRoles({
                    forceRoles: M,
                    context: s
                }), u.default.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES));
                return L || s.isOwner(n.id) ? (0, r.jsx)("div", {
                    className: g.container,
                    children: (0, r.jsx)(d.Combobox, {
                        placeholder: S.default.Messages.SEARCH_ROLES,
                        value: R,
                        onChange: O,
                        autoFocus: !0,
                        children: e => {
                            let t = b.reduce((t, n) => (l(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.ComboboxItem, {
                                    value: n.id,
                                    children: [(0, r.jsx)(d.ComboboxItem.Label, {
                                        children: T(n)
                                    }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
                                }, n.id)), t), []),
                                n = s.getRole(s.id);
                            return null != n && t.push((0, r.jsxs)(d.ComboboxItem, {
                                value: n.id,
                                disabled: !0,
                                children: [(0, r.jsx)(d.ComboboxItem.Label, {
                                    children: T(n)
                                }), (0, r.jsx)(d.ComboboxItem.Checkbox, {
                                    checked: !0
                                })]
                            }, n.id)), t
                        }
                    })
                }) : (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: S.default.Messages.VIEW_AS_ROLES_NO_ACCESS
                })
            }