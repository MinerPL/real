"use strict";
s.r(t), s.d(t, {
  fetchDiscoverableGuilds: function() {
    return r
  }
});
var a = s("522632"),
  n = s("872717"),
  l = s("913144");
s("794818"), s("804578");
var i = s("49111");
async function r(e) {
  l.default.dispatch({
    type: "DISCOVER_GUILDS_FETCH_START",
    guildIds: e
  });
  try {
    let t = await n.default.get({
        url: i.Endpoints.GUILD_DISCOVERY,
        query: a.stringify({
          guild_ids: e
        }),
        oldFormErrors: !0
      }),
      {
        guilds: s
      } = t.body;
    l.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_SUCCESS",
      guilds: s
    })
  } catch (e) {
    l.default.dispatch({
      type: "DISCOVER_GUILDS_FETCH_FAILURE"
    })
  }
}