"use strict";
n.r(t), n.d(t, {
  getInventoryGuildPacksUserExperimentConfig: function() {
    return c
  },
  useInventoryGuildPacksUserExperiment: function() {
    return d
  },
  useInventoryGuildSettingsExperiment: function() {
    return E
  }
});
var r = n("65597"),
  i = n("862205"),
  l = n("697218"),
  o = n("719923"),
  s = n("782340");
let a = (0, i.createExperiment)({
    kind: "user",
    id: "2023-05_inventory_guild_packs",
    label: "Inventory Guild Packs Experiment",
    defaultConfig: {
      desktopViewAndUseAndCollectEnabled: !1,
      mobileViewAndUseEnabled: !1,
      mobileAndFreemiumCollectEnabled: !1,
      autoUnfurlReactionTooltip: !1,
      collectOffOverride: !1
    },
    treatments: [{
      id: 1,
      label: "Desktop view/use/collect",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !1,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 2,
      label: "Desktop view/use/collect and mobile view/use",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 3,
      label: "Read-only pack emoji for logged out users",
      config: {
        desktopViewAndUseAndCollectEnabled: !1,
        mobileViewAndUseEnabled: !1,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 4,
      label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 5,
      label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 6,
      label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !0,
        collectOffOverride: !1
      }
    }, {
      id: 7,
      label: "Nitro same as bucket 4 + auto-unfurl reactions",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !0,
        collectOffOverride: !1
      }
    }, {
      id: 8,
      label: "Collection off everywhere",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !0
      }
    }]
  }),
  u = e => {
    let {
      user: t,
      config: n
    } = e, {
      desktopViewAndUseAndCollectEnabled: r,
      mobileViewAndUseEnabled: i,
      mobileAndFreemiumCollectEnabled: l,
      autoUnfurlReactionTooltip: s,
      collectOffOverride: a
    } = n, u = o.default.isPremium(t);
    return {
      viewAndUseEnabled: r,
      showTryPacksModalAndV2Copy: l,
      collectEnabled: !a && (u ? r : l),
      autoUnfurlReactionTooltip: s
    }
  },
  c = e => {
    let {
      user: t,
      autoTrackExposure: n = !0
    } = e;
    return null == t ? {
      viewAndUseEnabled: !1,
      showTryPacksModalAndV2Copy: !1,
      collectEnabled: !1,
      autoUnfurlReactionTooltip: !1
    } : u({
      user: t,
      config: a.getCurrentConfig({
        location: "inventory_guild_packs_experiment"
      }, {
        autoTrackExposure: n
      })
    })
  },
  d = function() {
    var e;
    let {
      expressionSourceGuild: t,
      autoTrackExposure: n = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      expressionSourceGuild: void 0,
      autoTrackExposure: !0
    }, i = (0, r.default)([l.default], () => l.default.getCurrentUser()), o = a.useExperiment({
      location: "inventory_guild_setting_experiment"
    }, {
      autoTrackExposure: n
    }), {
      viewAndUseEnabled: s,
      showTryPacksModalAndV2Copy: c,
      collectEnabled: d,
      autoUnfurlReactionTooltip: f
    } = u({
      user: i,
      config: o
    }), E = s && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
    return {
      viewAndUseEnabled: s,
      collectEnabled: E,
      showTryPacksModalAndV2Copy: c,
      autoUnfurlReactionTooltip: f
    }
  },
  f = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-06_inventory_guild_setting",
    label: "Inventory Guild Settings Experiment",
    defaultConfig: {
      showSettingsToggle: !1,
      allowCollection: !1,
      getNewSettingsDescriptionLine1: () => null,
      getNewSettingsDescriptionLine2: () => null
    },
    treatments: [{
      id: 1,
      label: "Show settings toggle, but collection is not allowed.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !1,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 2,
      label: "Show settings toggle, and collection is allowed sometime in August.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 3,
      label: "Show settings toggle, and collection is allowed in late August.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 4,
      label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => s.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
        getNewSettingsDescriptionLine2: () => s.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
      }
    }]
  }),
  E = function() {
    let {
      guildId: e,
      autoTrackExposure: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      guildId: void 0,
      autoTrackExposure: !0
    }, n = f.useExperiment({
      guildId: null != e ? e : "",
      location: "482926_3"
    }, {
      autoTrackExposure: void 0 === t || t
    });
    return {
      showSettingsToggle: n.showSettingsToggle,
      allowCollection: n.allowCollection,
      getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
      getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
    }
  }