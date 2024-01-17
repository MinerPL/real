"use strict";
t.r(n), t.d(n, {
  getAmplitudinalSoundboardVolume: function() {
    return T
  },
  canUseSoundboardSound: function() {
    return N
  },
  playSound: function() {
    return L
  },
  maybePlayCustomJoinSound: function() {
    return p
  },
  useSoundBoardDismissContentTypes: function() {
    return O
  },
  removeCustomJoinSound: function() {
    return v
  },
  updateCustomJoinSound: function() {
    return h
  },
  trackCustomCallSoundExternallyDeleted: function() {
    return R
  }
}), t("424973");
var u = t("65597"),
  l = t("151426"),
  i = t("880553"),
  o = t("845579"),
  a = t("872173"),
  d = t("374363"),
  r = t("229502"),
  s = t("233069"),
  c = t("957255"),
  _ = t("697218"),
  f = t("599110"),
  E = t("719923"),
  S = t("158998"),
  C = t("305122"),
  y = t("235004"),
  m = t("389480"),
  A = t("245463"),
  g = t("675961"),
  U = t("846325"),
  I = t("49111");

function T() {
  var e;
  let n = o.SoundboardSettings.getSetting();
  return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
}

function D(e, n) {
  return (null == n ? void 0 : n.guild_id) == null || c.default.can(I.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === U.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
}

function N(e, n, t) {
  let u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (E.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === U.DEFAULT_SOUND_GUILD_ID) && D(n, t) && (!u || n.available)
}

function L(e, n, t) {
  (0, C.playSoundLocally)(n, e, m.LocalSoundTrigger.SOUNDBOARD), (0, r.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
}
async function p(e) {
  let n = _.default.getCurrentUser(),
    t = (0, i.default)(),
    u = (0, g.getCustomJoinSound)(e);
  if (null == t || s.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == u || !E.default.canUseCustomCallSounds(n) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
  await (0, C.maybeFetchSoundboardSounds)();
  let l = u.guildId === U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? U.DEFAULT_SOUND_GUILD_ID : u.guildId,
    o = y.default.getSound(l, u.soundId);
  if (null != o) {
    var a, d;
    if (!D(o, t) || !N(n, o, t, !0)) return null;
    a = o, d = t.id, (0, C.playSoundLocally)(d, a, m.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, r.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
  }
}

function O(e) {
  let {
    isSoundboardButtonDisabled: n = !1
  } = e, t = (0, u.default)([_.default], () => _.default.getCurrentUser()), i = [l.DismissibleContent.SOUNDBOARD_EDUCATION];
  if (!n && ! function() {
      var e, n;
      let t = null !== (n = null === (e = d.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
      return Object.values(t).some(e => null != e.joinSound)
    }()) {
    i.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
    let e = (0, S.ageEligibleForPremiumUpsell)(t);
    (E.default.canUseCustomCallSounds(t) || e) && i.push(l.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
  }
  return i
}

function v(e, n) {
  (0, a.updateUserGuildSettings)(e, t => {
    t.joinSound = void 0, F({
      guildId: e,
      changeType: m.AnalyticsChangeType.REMOVED,
      soundType: m.AnalyticsSoundType.ENTRY,
      location: n
    })
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function h(e, n, t) {
  (0, a.updateUserGuildSettings)(e, u => {
    let l = n.guildId === U.DEFAULT_SOUND_GUILD_ID,
      i = l ? m.AnalyticsSoundSource.DEFAULT : m.AnalyticsSoundSource.CUSTOM,
      o = null != u.joinSound ? m.AnalyticsChangeType.UPDATED : m.AnalyticsChangeType.ADDED;
    u.joinSound = {
      soundId: n.soundId,
      guildId: l ? U.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
    }, F({
      guildId: e,
      changeType: o,
      soundSource: i,
      soundType: m.AnalyticsSoundType.ENTRY,
      location: t
    })
  }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function F(e) {
  let {
    guildId: n,
    changeType: t,
    soundType: u,
    soundSource: l,
    location: i
  } = e;
  f.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
    location_stack: i,
    guild_id: "" === n ? 0 : Number(n),
    change_type: t,
    sound_type: u,
    sound_source: l
  })
}

function R(e) {
  let {
    location: n
  } = e;
  f.default.track(I.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: n
  })
}