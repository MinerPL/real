            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var d = l("913144"),
                a = l("957255"),
                r = l("883069"),
                n = l("49111"),
                o = {
                    async checkGuildTemplateDirty(e) {
                        if (!a.default.canWithPartialContext(n.Permissions.MANAGE_GUILD, {
                                guildId: e
                            })) return;
                        let t = await r.default.loadTemplatesForGuild(e);
                        t.body.length > 0 && d.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                            guildTemplate: t.body[0]
                        })
                    },
                    hideGuildTemplateDirtyTooltip(e) {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                            guildId: e
                        })
                    },
                    hideGuildTemplatePromotionTooltip() {
                        d.default.dispatch({
                            type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
                        })
                    }
                }