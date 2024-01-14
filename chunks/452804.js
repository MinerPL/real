"use strict";
n.r(t), n.d(t, {
  saveGuildFolders: function() {
    return E
  },
  saveClientTheme: function() {
    return p
  },
  default: function() {
    return _
  }
});
var i = n("151426"),
  r = n("750028"),
  s = n("819855"),
  a = n("913144"),
  o = n("714657"),
  l = n("737292"),
  u = n("161778"),
  c = n("845579"),
  d = n("872173"),
  f = n("116319");

function E(e) {
  return d.PreloadedUserSettingsActionCreators.updateAsync("guildFolders", t => {
    t.folders = e.map(e => {
      let t = i.GuildFolder.create({
        guildIds: e.guildIds
      });
      return null != e.folderId && (t.id = r.Int64Value.create({
        value: String(e.folderId)
      })), null != e.folderColor && (t.color = r.UInt64Value.create({
        value: String(e.folderColor)
      })), null != e.folderName && "" !== e.folderName && (t.name = r.StringValue.create({
        value: String(e.folderName)
      })), t
    })
  }, d.UserSettingsDelay.SLOW_USER_ACTION)
}

function h(e) {
  return (0, s.isThemeLight)(e) ? i.Theme.LIGHT : i.Theme.DARK
}

function p(e) {
  let {
    backgroundGradientPresetId: t,
    theme: n
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.UserSettingsDelay.INFREQUENT_USER_ACTION;
  if (a.default.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: {
        useSystemTheme: "system" === n ? f.SystemThemeState.ON : f.SystemThemeState.OFF
      }
    }), a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            clientThemeSettings: {
              backgroundGradientPresetId: t
            },
            theme: "system" === n ? void 0 : n
          }
        }
      }
    }), l.default.shouldSync("appearance")) return d.PreloadedUserSettingsActionCreators.updateAsync("appearance", e => {
    var i;
    e.theme = h(n), e.clientThemeSettings = {
      backgroundGradientPresetId: null != (i = {
        backgroundGradientPresetId: t
      }).backgroundGradientPresetId ? r.UInt32Value.create({
        value: i.backgroundGradientPresetId
      }) : void 0
    }
  }, i)
}
var _ = {
  overrideLocale(e) {
    a.default.dispatch({
      type: "USER_SETTINGS_LOCALE_OVERRIDE",
      locale: e
    })
  },
  updatedUnsyncedSettings(e) {
    a.default.dispatch({
      type: "UNSYNCED_USER_SETTINGS_UPDATE",
      settings: e
    })
  },
  setShouldSyncTextSettings(e) {
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        text: {
          shouldSync: e,
          settings: e ? {} : {
            inlineAttachmentMedia: c.InlineAttachmentMedia.getSetting(),
            inlineEmbedMedia: c.InlineEmbedMedia.getSetting(),
            renderEmbeds: c.RenderEmbeds.getSetting(),
            renderReactions: c.RenderReactions.getSetting(),
            animateEmoji: c.AnimateEmoji.getSetting(),
            animateStickers: c.AnimateStickers.getSetting(),
            gifAutoPlay: c.GifAutoPlay.getSetting()
          }
        }
      }
    })
  },
  setShouldSyncAppearanceSettings(e) {
    var t;
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          shouldSync: e,
          settings: e ? {} : {
            theme: u.default.theme,
            clientThemeSettings: {
              backgroundGradientPresetId: null === (t = o.default.gradientPreset) || void 0 === t ? void 0 : t.id
            },
            developerMode: c.DeveloperMode.getSetting()
          }
        }
      }
    })
  },
  applySettingsOverride(e) {
    a.default.dispatch({
      type: "USER_SETTINGS_OVERRIDE_APPLY",
      settings: e
    })
  },
  clearSettingsOverride() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    a.default.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: t
    })
  },
  updateLocale: e => d.PreloadedUserSettingsActionCreators.updateAsync("localization", t => {
    t.locale = r.StringValue.create({
      value: e
    })
  }, d.UserSettingsDelay.INFREQUENT_USER_ACTION),
  updateTheme(e) {
    a.default.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        appearance: {
          settings: {
            theme: e
          }
        }
      }
    }), l.default.shouldSync("appearance") && d.PreloadedUserSettingsActionCreators.updateAsync("appearance", t => {
      t.theme = h(e)
    }, d.UserSettingsDelay.INFREQUENT_USER_ACTION)
  }
}