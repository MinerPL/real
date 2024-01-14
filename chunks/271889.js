"use strict";
s.r(t), s.d(t, {
  fetchDiscoveryChecklist: function() {
    return i
  }
});
var a = s("872717"),
  n = s("913144"),
  l = s("49111");
async function i(e) {
  n.default.dispatch({
    type: "DISCOVER_CHECKLIST_FETCH_START",
    guildId: e
  });
  try {
    let t = await a.default.get({
      url: l.Endpoints.GUILD_DISCOVERY_REQUIREMENTS(e),
      oldFormErrors: !0
    });
    n.default.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
      guildId: e,
      checklist: t.body
    })
  } catch (t) {
    n.default.dispatch({
      type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
      guildId: e
    })
  }
}