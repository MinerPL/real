"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var a, s = n("913144"),
  i = n("316272"),
  l = n("271938"),
  r = n("42887");
a = class extends i.default {
  _initialize() {
    !__OVERLAY__ && (s.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), s.default.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), s.default.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), s.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  _terminate() {
    !__OVERLAY__ && (s.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), s.default.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), s.default.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), s.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  constructor(...e) {
    super(...e), this._playSound = function(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    }, this._stopAndClearSounds = () => {}, this._handleToggleSelfDeafened = () => {
      r.default.isDeaf() && this._stopAndClearSounds()
    }, this._handleSoundboardSoundReceived = e => {
      let {
        soundId: t,
        soundVolume: n,
        userId: a,
        channelId: s
      } = e;
      if (null != t && a !== l.default.getId()) return this._playSound(t, n, a, s)
    }, this._handleSoundboardSoundPlayLocally = e => {
      let {
        sound: t,
        channelId: n
      } = e, a = l.default.getId();
      return this._playSound(t.soundId, t.volume, a, n)
    }, this._handleVoiceChannelSelect = () => {
      this._stopAndClearSounds()
    }
  }
}