"use strict";
E.r(_), E.d(_, {
  getQuestByApplicationId: function() {
    return n
  },
  isQuestExpired: function() {
    return r
  },
  questUserStatusFromServer: function() {
    return a
  },
  questWithUserStatusFromServer: function() {
    return i
  },
  getRewardAssetUrl: function() {
    return I
  },
  getHeroAssetUrl: function() {
    return s
  },
  getQuestBarHeroAssetUrl: function() {
    return T
  },
  getGameTileAssetUrl: function() {
    return S
  },
  getGameLogotypeAssetUrl: function() {
    return N
  },
  getQuestForTargetedContent: function() {
    return O
  }
}), E("222007");
var t = E("2973");
let o = "https://cdn.discordapp.com/assets/quests/";

function n(e) {
  let _;
  for (let [E, o] of t.default.quests)
    if (o.config.applicationId === e) {
      _ = o;
      break
    } return _
}

function r(e) {
  let _ = new Date(e.config.expiresAt);
  return _.valueOf() <= Date.now()
}

function a(e) {
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

function i(e) {
  var _, E, t;
  return {
    id: e.id,
    config: {
      expiresAt: (_ = e.config).expires_at,
      streamDurationRequirementMinutes: _.stream_duration_requirement_minutes,
      gameTitle: _.game_title,
      applicationId: _.application_id,
      messages: {
        questName: (E = _.messages).quest_name,
        rewardName: E.reward_name,
        rewardNameWithArticle: E.reward_name_with_article,
        rewardRedemptionInstructions: E.reward_redemption_instructions,
        gameTitle: E.game_title,
        gamePublisher: E.game_publisher
      },
      colors: {
        primary: (t = _.colors).primary,
        secondary: t.secondary
      }
    },
    userStatus: null == e.user_status ? null : a(e.user_status),
    targetedContent: e.targeted_content
  }
}
let I = e => "".concat(o).concat(e).concat("/reward.png"),
  s = e => "".concat(o).concat(e).concat("/hero.png"),
  T = e => "".concat(o).concat(e).concat("/quest_bar_hero.gif"),
  S = e => "".concat(o).concat(e).concat("/game_tile.png"),
  N = (e, _) => "".concat(o).concat(e, "/").concat(_).concat("/game_logotype.png");

function O(e, _) {
  for (let [E, t] of e)
    if (!r(t) && t.targetedContent.includes(_)) return t;
  return null
}