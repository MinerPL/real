"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("446674"),
  n = s("913144");
let l = {};
class i extends a.default.Store {
  hasFetched(e) {
    return null != l[e]
  }
  getTopChannelIds(e) {
    return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : l[e]
  }
}
var r = new i(n.default, {
  GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topChannelIds: s
    } = e;
    l[t] = s
  }
})