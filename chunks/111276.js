"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
}), E("222007");
var t = E("689988"),
  o = E("305961"),
  n = E("718517"),
  r = E("388142"),
  i = E("711454"),
  a = E("578899");
let I = 0;
class s extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      IDLE: () => this.handleIdleChange()
    }, this.handleConnectionOpen = e => {
      this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
    }, this.handleIdleChange = () => {
      Date.now() - I > n.default.Millis.HOUR && this._attemptDeadchatPrompt()
    }, this._attemptDeadchatPrompt = () => {
      let e = o.default.getGuilds(),
        _ = Object.keys(e).filter(e => a.SimpleDeadchatPromptExperiment.getCurrentConfig({
          guildId: e,
          location: "manager"
        }).triggerDeadchat);
      _.length > 0 && (I = Date.now(), (0, r.initiateChannelPrompts)(_))
    }, this._triggerGamingStatsSetupExperiment = () => {
      let e = o.default.getGuilds();
      Object.keys(e).forEach(e => {
        i.GamingStatsSetupExperiment.trackExposure({
          guildId: e,
          location: "manager"
        })
      })
    }
  }
}
var T = new s