"use strict";
n.r(t), n.d(t, {
  DROPS_PLATFORMS: function() {
    return a
  },
  DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS: function() {
    return s
  },
  DropsFaqUrl: function() {
    return i
  },
  PartnerGame: function() {
    return r
  },
  TooltipActions: function() {
    return o
  },
  PartnerGameNameToSearchTermMapping: function() {
    return u
  },
  noticeBannerDateFormat: function() {
    return d
  },
  FORTNITE_QUEST_ID: function() {
    return c
  },
  DROPS_GAMES: function() {
    return f
  }
});
var l = n("782340");
let a = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
  s = 2592e4,
  i = "https://support.discord.com/hc/en-us/articles/9146392276375",
  r = {
    FORTNITE: "FORTNITE"
  },
  o = {
    STREAM_CTA: "STREAM_CTA",
    LOADING_INITIAL_PROGRESS: "LOADING_INITIAL_PROGRESS",
    TRACK_PROGRESS: "TRACK_PROGRESS",
    QUEST_COMPLETION: "QUEST_COMPLETION"
  },
  u = {
    FORTNITE: ["Fortnite"]
  },
  d = "YYYY-MM-DD HH:mm",
  c = "1022633972510752774",
  f = {
    [r.FORTNITE]: {
      title: "Fortnite",
      gameSearchTerm: u[r.FORTNITE],
      assets: {
        iconSrc: n("681388"),
        tooltipSrc: n("249705"),
        rewardSrc: n("283383")
      },
      dropsQuestId: c,
      dropsGameId: "432980957394370572",
      endDate: "2023-05-22 23:59",
      finalClaimDate: "2023-5-29 08:00",
      dropsNoticeBannerDurationDays: 3,
      articleUrl: i,
      messages: {
        claimTip: () => l.default.Messages.FORTNITE_REDEMPTION_TIP.format({
          learnMoreUrl: "https://discord.com/blog/fortnite-quest"
        }),
        giftInfo: () => l.default.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
          guardOutfitName: l.default.Messages.FORNITE_GUARD_OUTPUT,
          rewardName: l.default.Messages.FORTNITE_REWARD_NAME
        }),
        enrollmentTooltip: e => l.default.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
          rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
          streamLengthRequirement: e
        }),
        completionTooltip: e => l.default.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
          rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
          streamLengthRequirement: e
        })
      }
    }
  }