            "use strict";
            l.r(t), l.d(t, {
                useRoleRows: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("446674"),
                s = l("305961"),
                i = l("644583");

            function o(e, t, l) {
                return (0, n.useStateFromStoresArray)([s.default], () => {
                    var a, n;
                    return Object.values(null !== (n = null === (a = s.default.getGuild(e)) || void 0 === a ? void 0 : a.roles) && void 0 !== n ? n : {}).filter(e => !t.has(e.id)).filter(t => !l || t.id !== e).map(e => (0, i.roleToPendingAddition)(e).row)
                }, [l, e, t])
            }

            function d(e) {
                let {
                    guildId: t,
                    selectedRoleIds: l,
                    onChange: n,
                    placeholder: s,
                    disableEveryoneRole: d,
                    helperText: C,
                    className: r
                } = e, u = o(t, l, d);
                return (0, a.jsx)(i.default, {
                    roleRows: u,
                    guildId: t,
                    selectedRoleIds: l,
                    onChange: (e, t) => n(t),
                    placeholder: s,
                    helperText: C,
                    className: r
                })
            }