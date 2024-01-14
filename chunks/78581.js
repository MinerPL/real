"use strict";
t.r(n), t.d(n, {
  getAmplitudinalSoundboardVolume: function() {
    return L
  },
  canUseSoundboardSound: function() {
    return N
  },
  playSound: function() {
    return D
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
var l = t("65597"),
  u = t("151426"),
  i = t("880553"),
  o = t("845579"),
  a = t("872173"),
  d = t("374363"),
  r = t("229502"),
  s = t("233069"),
  c = t("957255"),
  f = t("697218"),
  _ = t("599110"),
  E = t("719923"),
  S = t("158998"),
  C = t("305122"),
  y = t("235004"),
  m = t("389480"),
  A = t("245463"),
  g = t("675961"),
  I = t("846325"),
  U = t("49111");

function L() {
  var e;
  let n = o.SoundboardSettings.getSetting();
  return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100
}

function T(e, n) {
  return (null == n ? void 0 : n.guild_id) == null || c.default.can(U.Permissions.USE_EXTERNAL_SOUNDS, n) || e.guildId === I.DEFAULT_SOUND_GUILD_ID || e.guildId === (null == n ? void 0 : n.guild_id)
}

function N(e, n, t) {
  let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (E.default.canUseSoundboardEverywhere(e) || n.guildId === (null == t ? void 0 : t.guild_id) || n.guildId === I.DEFAULT_SOUND_GUILD_ID) && T(n, t) && (!l || n.available)
}

function D(e, n, t) {
  (0, C.playSoundLocally)(n, e, m.LocalSoundTrigger.SOUNDBOARD), (0, r.sendVoiceChannelSoundboardEffect)(n, e, __OVERLAY__, t)
}
async function p(e) {
  let n = f.default.getCurrentUser(),
    t = (0, i.default)(),
    l = (0, g.getCustomJoinSound)(e);
  if (null == t || s.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(t.type) || null == l || !E.default.canUseCustomCallSounds(n) || !(0, A.canSelectedVoiceChannelUseSoundboard)()) return;
  await (0, C.maybeFetchSoundboardSounds)();
  let u = l.guildId === I.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? I.DEFAULT_SOUND_GUILD_ID : l.guildId,
    o = y.default.getSound(u, l.soundId);
  if (null != o) {
    var a, d;
    if (!T(o, t) || !N(n, o, t, !0)) return null;
    a = o, d = t.id, (0, C.playSoundLocally)(d, a, m.LocalSoundTrigger.JOINED_VOICE_CHANNEL), (0, r.sendVoiceChannelCustomCallSoundEffect)(d, a, __OVERLAY__)
  }
}

function O(e) {
  let {
    isSoundboardButtonDisabled: n = !1
  } = e, t = (0, l.default)([f.default], () => f.default.getCurrentUser()), i = [u.DismissibleContent.SOUNDBOARD_EDUCATION];
  if (!n && ! function() {
      var e, n;
      let t = null !== (n = null === (e = d.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {};
      return Object.values(t).some(e => null != e.joinSound)
    }()) {
    i.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_SPARKLES);
    let e = (0, S.ageEligibleForPremiumUpsell)(t);
    (E.default.canUseCustomCallSounds(t) || e) && i.push(u.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
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
  (0, a.updateUserGuildSettings)(e, l => {
    let u = n.guildId === I.DEFAULT_SOUND_GUILD_ID,
      i = u ? m.AnalyticsSoundSource.DEFAULT : m.AnalyticsSoundSource.CUSTOM,
      o = null != l.joinSound ? m.AnalyticsChangeType.UPDATED : m.AnalyticsChangeType.ADDED;
    l.joinSound = {
      soundId: n.soundId,
      guildId: u ? I.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : n.guildId
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
    soundType: l,
    soundSource: u,
    location: i
  } = e;
  _.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
    location_stack: i,
    guild_id: "" === n ? 0 : Number(n),
    change_type: t,
    sound_type: l,
    sound_source: u
  })
}

function R(e) {
  let {
    location: n
  } = e;
  _.default.track(U.AnalyticEvents.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: n
  })
}