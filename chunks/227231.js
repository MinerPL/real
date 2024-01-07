            "use strict";
            s.r(t), s.d(t, {
                getQuestByApplicationId: function() {
                    return r
                },
                isQuestExpired: function() {
                    return i
                },
                questUserStatusFromServer: function() {
                    return l
                },
                questWithUserStatusFromServer: function() {
                    return u
                },
                getRewardAssetUrl: function() {
                    return d
                },
                getHeroAssetUrl: function() {
                    return c
                },
                getGameTileAssetUrl: function() {
                    return o
                },
                getGameLogotypeAssetUrl: function() {
                    return E
                }
            }), s("222007");
            var a = s("2973");
            let n = "https://cdn.discordapp.com/assets/quests/";

            function r(e) {
                let t;
                for (let [s, n] of a.default.quests)
                    if (n.config.applicationId === e) {
                        t = n;
                        break
                    } return t
            }

            function i(e) {
                let t = new Date(e.config.expiresAt);
                return t.valueOf() <= Date.now()
            }

            function l(e) {
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

            function u(e) {
                var t, s;
                return {
                    id: e.id,
                    config: {
                        expiresAt: (t = e.config).expires_at,
                        streamDurationRequirementMinutes: t.stream_duration_requirement_minutes,
                        gameTitle: t.game_title,
                        applicationId: t.application_id,
                        messages: {
                            questName: (s = t.messages).quest_name,
                            rewardName: s.reward_name,
                            rewardNameWithArticle: s.reward_name_with_article,
                            rewardRedemptionInstructions: s.reward_redemption_instructions
                        }
                    },
                    userStatus: null == e.user_status ? null : l(e.user_status)
                }
            }
            let d = e => "".concat(n).concat(e).concat("/reward.png"),
                c = e => "".concat(n).concat(e).concat("/hero.png"),
                o = e => "".concat(n).concat(e).concat("/game_tile.png"),
                E = (e, t) => "".concat(n).concat(e, "/").concat(t).concat("/game_logotype.png")