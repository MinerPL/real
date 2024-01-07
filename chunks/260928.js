            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("165426"),
                r = s("571067"),
                o = s("782340"),
                d = s("49305"),
                u = n.memo(function(e) {
                    let {
                        rule: t,
                        onlyRoles: s = !1,
                        onChangeRule: n
                    } = e, u = (0, a.jsx)(i.default, {
                        guildId: t.guildId,
                        selectedChannelIds: t.exemptChannels,
                        selectedRoleIds: t.exemptRoles,
                        onChange: (e, s) => n({
                            ...t,
                            exemptChannels: e,
                            exemptRoles: s
                        }),
                        disableEveryoneRole: !0,
                        includeRoleRestrictedPrivateChannels: !0
                    });
                    return s && (u = (0, a.jsx)(r.default, {
                        guildId: t.guildId,
                        selectedRoleIds: t.exemptRoles,
                        onChange: e => n({
                            ...t,
                            exemptRoles: e
                        }),
                        placeholder: o.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                        disableEveryoneRole: !0
                    })), (0, a.jsxs)(l.FormItem, {
                        children: [u, (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            className: d.exemptionHint,
                            children: o.default.Messages.GUILD_AUTOMOD_EXEMPTION_HINT
                        })]
                    })
                })