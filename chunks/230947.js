            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                u = a("77078"),
                i = a("750560"),
                d = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                E = a("957255"),
                C = a("697218"),
                h = a("49111"),
                I = a("782340"),
                N = a("460856");

            function _(e) {
                let {
                    guildId: t,
                    userId: _,
                    analyticsLocation: m,
                    analyticsLocations: v,
                    context: g,
                    icon: M
                } = e, p = f.default.getGuild(t), L = o.default.getId(), A = (0, s.useStateFromStores)([C.default], () => C.default.getUser(_)), S = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, _), [t, _]);
                (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let x = n.useMemo(() => ({
                    [t]: [_]
                }), [t, _]);
                (0, i.useSubscribeGuildMembers)(x);
                let T = g === h.AppContext.POPOUT,
                    V = (0, d.default)({
                        guild: p,
                        analyticsLocation: m
                    });
                if (null == p || T) return null;
                let O = L === _ && (E.default.can(h.Permissions.CHANGE_NICKNAME, p) || E.default.can(h.Permissions.MANAGE_NICKNAMES, p)),
                    D = L === _,
                    G = E.default.canManageUser(h.Permissions.MANAGE_NICKNAMES, _, p);
                if (!(O || G || D) || null == A || S) return null;
                let H = p.hasFeature(h.GuildFeatures.HUB),
                    P = H ? I.default.Messages.HUB_EDIT_PROFILE : I.default.Messages.CHANGE_IDENTITY,
                    b = D ? P : I.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: N.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: N.label,
                            children: b
                        })
                    }),
                    icon: M,
                    action: () => {
                        D ? ((0, r.default)(A.id, A.getAvatarURL(t, 80), {
                            guildId: t
                        }), V()) : (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: A,
                                analyticsSource: m,
                                analyticsLocations: v
                            })
                        })
                    }
                })
            }