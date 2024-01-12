            "use strict";
            n.r(t), n.d(t, {
                getQuestByApplicationId: function() {
                    return s
                },
                isQuestExpired: function() {
                    return l
                },
                questUserStatusFromServer: function() {
                    return r
                },
                questWithUserStatusFromServer: function() {
                    return o
                },
                getRewardAssetUrl: function() {
                    return u
                },
                getHeroAssetUrl: function() {
                    return d
                },
                getGameTileAssetUrl: function() {
                    return c
                },
                getGameLogotypeAssetUrl: function() {
                    return f
                }
            }), n("222007");
            var a = n("2973");
            let i = "https://cdn.discordapp.com/assets/quests/";

            function s(e) {
                let t;
                for (let [n, i] of a.default.quests)
                    if (i.config.applicationId === e) {
                        t = i;
                        break
                    } return t
            }

            function l(e) {
                let t = new Date(e.config.expiresAt);
                return t.valueOf() <= Date.now()
            }

            function r(e) {
                return {
                    userId: e.user_id,
                    questId: e.quest_id,
                    enrolledAt: e.enrolled_at,
                    completedAt: e.completed_at,
                    claimedAt: e.claimed_at,
                    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
                    streamProgressSeconds: e.stream_progress_seconds,
                    dismissedQuestContent: e.dismissed_quest_content
                }
            }

            function o(e) {
                var t, n;
                return {
                    id: e.id,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        applicationId: t.application_id,
                        messages: {
                            questName: (n = t.messages).quest_name,
                            rewardName: n.reward_name,
                            rewardNameWithArticle: n.reward_name_with_article,
                            rewardRedemptionInstructions: n.reward_redemption_instructions
                        }
                    },
                    userStatus: null == e.user_status ? null : r(e.user_status)
                }
            }
            let u = e => "".concat(i).concat(e).concat("/reward.png"),
                d = e => "".concat(i).concat(e).concat("/hero.png"),
                c = e => "".concat(i).concat(e).concat("/game_tile.png"),
                f = (e, t) => "".concat(i).concat(e, "/").concat(t).concat("/game_logotype.png")