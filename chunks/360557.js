"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("689988"),
  o = E("42203"),
  n = E("233965"),
  r = E("699209"),
  a = E("32346"),
  i = E("49111");
class I extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      LOGOUT: () => this.handleLogout()
    }, this.handleVoiceChannelSelect = e => {
      let {
        channelId: _,
        guildId: E
      } = e, {
        enableHangStatus: t
      } = r.HangStatusExperiment.getCurrentConfig({
        guildId: null != E ? E : "",
        location: "HangStatusManager"
      }, {
        autoTrackExposure: !0
      });
      if (null == E && null == _) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = _;
        return
      }
      if (!t || _ === this.previousVoiceChannelId) return;
      if (this.previousVoiceChannelId = _, null == E || null == _) return;
      let I = o.default.getChannel(_);
      if (null == I || I.type !== i.ChannelTypes.GUILD_VOICE) return;
      let s = a.default.getCurrentHangStatus();
      if (null != s) return;
      let T = a.default.getCurrentDefaultStatus();
      if ((null == T ? void 0 : T.expiresAt) != null && (null == T ? void 0 : T.expiresAt) >= Date.now()) {
        if (T.status === i.HangStatusTypes.CUSTOM && null != T.customHangStatus) {
          let {
            status: e,
            emoji: _
          } = T.customHangStatus;
          (0, n.updateCustomHangStatus)(e, _);
          return
        }
        if (null == T.status) return;
        else {
          (0, n.updateHangStatus)(T.status);
          return
        }
      }
    }, this.handleDisconnectFromVoiceChannel = () => {
      (0, n.clearHangStatus)()
    }, this.handleLogout = () => {
      this.handleDisconnectFromVoiceChannel()
    }
  }
}
var s = new I