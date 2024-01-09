            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("242757"),
                d = n("923959"),
                s = n("957255"),
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: i
                } = e, r = (0, l.useStateFromStores)([d.default], () => d.default.getDefaultChannel(n.id, !0, o.Permissions.CREATE_INSTANT_INVITE)), c = (0, l.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, i)), f = _(t, n, c && null != a ? a : r), C = E(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : C
            }
            let _ = (e, t, l) => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(i, {
                            ...n,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                E = e => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })