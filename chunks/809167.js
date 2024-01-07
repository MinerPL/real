            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var a = n("884691"),
                l = n("133797"),
                s = n("577357"),
                i = n("41391"),
                r = n("782340");

            function o(e) {
                let {
                    includeFlairAsBenefit: t,
                    listing: n,
                    guildId: o
                } = e, u = 0, d = 0;
                for (let e of n.role_benefits.benefits)(0, s.isChannelBenefit)(e) ? u += 1 : (0, s.isIntangibleBenefit)(e) && (d += 1);
                let c = n.role_id,
                    f = (0, i.default)(o),
                    h = f.filter(e => e.roles.includes(c)).length;
                return a.useMemo(() => {
                    let e = [];
                    return !0 === t && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== u && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                        channelCount: u
                    })), 0 !== d && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                        benefitCount: d
                    })), 0 !== h && e.push(r.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({
                        emojiCount: h
                    })), new l.default(e)
                }, [u, d, h, t])
            }