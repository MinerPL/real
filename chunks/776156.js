"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
});
var t = E("872717"),
  o = E("913144"),
  n = E("34966"),
  r = E("234222");

function i() {
  let e = new Date().getMinutes();
  return "x=".concat(Math.floor(e / 5))
}
var a = {
  lockChangeLog(e) {
    o.default.dispatch({
      type: "CHANGE_LOG_LOCK",
      key: e
    })
  },
  unlockChangeLog(e) {
    o.default.dispatch({
      type: "CHANGE_LOG_UNLOCK",
      key: e
    })
  },
  markChangelogAsSeen(e, _) {
    o.default.dispatch({
      type: "CHANGE_LOG_MARK_SEEN",
      changelogId: e,
      changelogDate: _
    })
  },
  setChangelogOverride(e) {
    o.default.dispatch({
      type: "CHANGE_LOG_SET_OVERRIDE",
      id: e
    })
  },
  fetchChangelogConfig() {
    let e = r.ChangelogPlatforms.DESKTOP;
    return t.default.get({
      url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(i())
    })
  },
  async fetchChangelog(e, _) {
    if (null != n.default.getChangelog(e, _)) return null;
    let E = r.ChangelogPlatforms.DESKTOP;
    try {
      let n = await t.default.get({
        url: "https://cdn.discordapp.com/changelogs/".concat(E, "/").concat(e, "/").concat(_, ".json?").concat(i())
      });
      return o.default.dispatch({
        type: "CHANGE_LOG_FETCH_SUCCESS",
        id: e,
        changelog: n.body
      }), n.body
    } catch {
      if (o.default.dispatch({
          type: "CHANGE_LOG_FETCH_FAILED",
          id: e,
          locale: _
        }), "en-US" !== _) return await this.fetchChangelog(e, "en-US");
      return null
    }
  }
}