            "use strict";
            E.r(I), E.d(I, {
                default: function() {
                    return N
                }
            });
            var T = E("666038");
            class S extends T.default {
                static createFromServer(_, I) {
                    return new S({
                        id: _.id,
                        subscriptionId: _.subscription_id,
                        premiumGuildSubscription: null != _.premium_guild_subscription ? {
                            id: _.premium_guild_subscription.id,
                            guildId: _.premium_guild_subscription.guild_id
                        } : null,
                        canceled: _.canceled,
                        cooldownEndsAt: _.cooldown_ends_at,
                        subscription: I
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(_) {
                    super(), this.id = _.id, this.subscriptionId = _.subscriptionId, this.premiumGuildSubscription = _.premiumGuildSubscription, this.canceled = _.canceled, this.cooldownEndsAt = _.cooldownEndsAt, this.subscription = _.subscription
                }
            }
            var N = S