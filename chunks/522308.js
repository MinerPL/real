            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("666038");
            class a extends r.default {
                static createFromServer(t, e) {
                    return new a({
                        id: t.id,
                        subscriptionId: t.subscription_id,
                        premiumGuildSubscription: null != t.premium_guild_subscription ? {
                            id: t.premium_guild_subscription.id,
                            guildId: t.premium_guild_subscription.guild_id
                        } : null,
                        canceled: t.canceled,
                        cooldownEndsAt: t.cooldown_ends_at,
                        subscription: e
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(t) {
                    super(), this.id = t.id, this.subscriptionId = t.subscriptionId, this.premiumGuildSubscription = t.premiumGuildSubscription, this.canceled = t.canceled, this.cooldownEndsAt = t.cooldownEndsAt, this.subscription = t.subscription
                }
            }
            var _ = a