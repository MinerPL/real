"use strict";
l.r(t), l.d(t, {
  fetchGuildForPopout: function() {
    return i
  }
});
var n = l("872717"),
  a = l("913144"),
  s = l("49111");
async function i(e) {
  a.default.dispatch({
    type: "GUILD_POPOUT_FETCH_START",
    guildId: e
  });
  try {
    let t = await n.default.get({
      url: s.Endpoints.GUILD_PREVIEW(e),
      oldFormErrors: !0
    });
    a.default.dispatch({
      type: "GUILD_POPOUT_FETCH_SUCCESS",
      guildId: e,
      guild: t.body
    })
  } catch (t) {
    a.default.dispatch({
      type: "GUILD_POPOUT_FETCH_FAILURE",
      guildId: e
    })
  }
}