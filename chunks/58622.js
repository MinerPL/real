            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var a = t("37983");
            t("884691");
            var u = t("446674"),
                l = t("77078"),
                s = t("242757"),
                r = t("923959"),
                i = t("957255"),
                d = t("76539"),
                c = t("49111"),
                o = t("782340");

            function f(e) {
                let {
                    source: n,
                    guild: t,
                    channel: a,
                    stageInstance: l
                } = e, d = (0, u.useStateFromStores)([r.default], () => r.default.getDefaultChannel(t.id, !0, c.Permissions.CREATE_INSTANT_INVITE)), o = (0, u.useStateFromStores)([i.default], () => (0, s.canViewInviteModal)(i.default, t, a, l)), f = E(n, t, o && null != a ? a : d), I = _(n);
                return null == a && n === c.InstantInviteSources.GUILD_CONTEXT_MENU ? null : o || null != d ? f : I
            }
            let E = (e, n, u) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: o.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === c.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await t.el("310688").then(t.bind(t, "310688"));
                        return t => (0, a.jsx)(l, {
                            ...t,
                            guild: n,
                            channel: u,
                            source: e
                        })
                    })
                }),
                _ = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: o.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === c.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await t.el("973132").then(t.bind(t, "973132"));
                        return n => (0, a.jsx)(e, {
                            ...n
                        })
                    })
                })