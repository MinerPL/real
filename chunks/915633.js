"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("789394"),
  o = E("689988"),
  n = E("305961"),
  r = E("702917"),
  i = E("49111");
class a extends o.default {
  handleChannelSelect(e) {
    let {
      guildId: _,
      channelId: E
    } = e;
    if (null != _ && null != E) {
      if (!t.ChannelEmojisExperiment.getCurrentConfig({
          location: "8ce619_1"
        }, {
          autoTrackExposure: !1
        }).enabled) return;
      let e = n.default.getGuild(_);
      null != e && !e.hasFeature(i.GuildFeatures.CHANNEL_ICON_EMOJIS_GENERATED) && (0, r.populateChannelEmojis)(_)
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_SELECT: this.handleChannelSelect
    }
  }
}
var I = new a