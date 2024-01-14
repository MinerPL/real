"use strict";
n.r(t), n.d(t, {
  PoggermodeAchievementId: function() {
    return i
  },
  PoggermodeAchievementRarity: function() {
    return l
  },
  ACHIEVEMENT_LIST: function() {
    return u
  },
  getPoggermodeAchievementData: function() {
    return d
  },
  getAchievementStyles: function() {
    return c
  }
});
var a, s, i, l, r = n("119035"),
  o = n("782340");
(a = i || (i = {}))[a.ENABLE_POGGERMODE = 0] = "ENABLE_POGGERMODE", a[a.DISABLE_POGGERMODE = 1] = "DISABLE_POGGERMODE", a[a.PING_SOMEONE = 2] = "PING_SOMEONE", a[a.PING_ME = 3] = "PING_ME", a[a.COMBO_MULTI_LEVEL_1 = 4] = "COMBO_MULTI_LEVEL_1", a[a.COMBO_MULTI_LEVEL_2 = 5] = "COMBO_MULTI_LEVEL_2", a[a.COMBO_MULTI_LEVEL_3 = 6] = "COMBO_MULTI_LEVEL_3", a[a.COMBO_MULTI_LEVEL_4 = 7] = "COMBO_MULTI_LEVEL_4", a[a.TOTAL_SCORE_LEVEL_1 = 8] = "TOTAL_SCORE_LEVEL_1", a[a.TOTAL_SCORE_LEVEL_2 = 9] = "TOTAL_SCORE_LEVEL_2", a[a.TOTAL_SCORE_LEVEL_3 = 10] = "TOTAL_SCORE_LEVEL_3", a[a.TOTAL_SCORE_LEVEL_4 = 11] = "TOTAL_SCORE_LEVEL_4", a[a.TOTAL_SCORE_LEVEL_5 = 12] = "TOTAL_SCORE_LEVEL_5", a[a.VISITOR_100 = 13] = "VISITOR_100", a[a.CUSTOMIZE_CONFETTI = 14] = "CUSTOMIZE_CONFETTI", a[a.MORE = 15] = "MORE", a[a.COMBO_VALUE_LEVEL_1 = 16] = "COMBO_VALUE_LEVEL_1", a[a.COMBO_VALUE_LEVEL_2 = 17] = "COMBO_VALUE_LEVEL_2", a[a.COMBO_VALUE_LEVEL_3 = 18] = "COMBO_VALUE_LEVEL_3", a[a.COMBO_VALUE_LEVEL_4 = 19] = "COMBO_VALUE_LEVEL_4", (s = l || (l = {}))[s.COMMON = 0] = "COMMON", s[s.UNCOMMON = 1] = "UNCOMMON", s[s.RARE = 2] = "RARE", s[s.EPIC = 3] = "EPIC", s[s.LEGENDARY = 4] = "LEGENDARY";
let u = {
  0: {
    id: 0,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_ENABLE_POGGERMODE_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_ENABLE_POGGERMODE_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  1: {
    id: 1,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_DISABLE_POGGERMODE_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_DISABLE_POGGERMODE_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  13: {
    id: 13,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_VISITOR_100_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_VISITOR_100_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    onAction: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  },
  14: {
    id: 14,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_CUSTOMIZE_CONFETTI_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_CUSTOMIZE_CONFETTI_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  15: {
    id: 15,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_MORE_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_MORE_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  2: {
    id: 2,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_PING_SOMEONE_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_PING_SOMEONE_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1
  },
  3: {
    id: 3,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_PING_ME_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_PING_ME_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1
  },
  4: {
    id: 4,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_1_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_1_DESCRIPTION,
    rarity: 0,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 2
  },
  5: {
    id: 5,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_2_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_2_DESCRIPTION,
    rarity: 1,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 4
  },
  6: {
    id: 6,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_3_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_3_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 5
  },
  7: {
    id: 7,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_4_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_MULTI_LEVEL_4_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !1,
    checkUnlock: e => e.multiplier >= 7
  },
  8: {
    id: 8,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_1_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_1_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 430 === (0, r.getComboScore)(e)
  },
  9: {
    id: 9,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_2_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_2_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 555 === (0, r.getComboScore)(e)
  },
  10: {
    id: 10,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_3_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_3_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 898 === (0, r.getComboScore)(e)
  },
  11: {
    id: 11,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_4_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_4_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 1337 === (0, r.getComboScore)(e)
  },
  12: {
    id: 12,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_5_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_TOTAL_SCORE_LEVEL_5_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 2048 === (0, r.getComboScore)(e)
  },
  16: {
    id: 16,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_1_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_1_DESCRIPTION,
    rarity: 2,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 64 === e.value
  },
  17: {
    id: 17,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_2_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_2_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 88 === e.value
  },
  18: {
    id: 18,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_3_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_3_DESCRIPTION,
    rarity: 3,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 99 === e.value
  },
  19: {
    id: 19,
    name: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_4_NAME,
    description: () => o.default.Messages.POGGERMODE_ACHIEVEMENT_COMBO_VALUE_LEVEL_4_DESCRIPTION,
    rarity: 4,
    hideDescriptionUntilUnlock: !0,
    checkUnlock: e => 113 === e.value
  }
};

function d(e) {
  return u[e]
}
let c = e => {
  switch (e) {
    case 0:
      return {
        color: "#1ABC9C"
      };
    case 1:
      return {
        color: "#3498DB"
      };
    case 2:
      return {
        color: "#9B59B6"
      };
    case 3:
      return {
        color: "#E91E63"
      };
    case 4:
      return {
        color: "#E67E22"
      }
  }
}