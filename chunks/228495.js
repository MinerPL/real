"use strict";
E.r(_), E.d(_, {
  default: function() {
    return S
  }
}), E("222007");
var t = E("249654"),
  o = E("913144"),
  n = E("776156"),
  r = E("689988"),
  i = E("915639"),
  a = E("34966"),
  I = E("473006"),
  s = E("788434");
class T extends r.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }, this.handleConnectionOpen = async e => {
      let _ = await n.default.fetchChangelogConfig(),
        E = _.body,
        r = (0, I.getClientVersionForChangelog)(),
        T = function(e, _) {
          let E = 0,
            t = null;
          for (var [o, {
              min_version: n
            }] of Object.entries(e)) n <= _ && n > E && (E = n, t = o);
          return t
        }(E, r);
      if (o.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: _.body,
          latestChangelogId: T
        }), null == T || !0 !== E[T].show_on_startup) return;
      let S = a.default.lastSeenChangelogId(),
        N = a.default.lastSeenChangelogDate();
      if (null != S && 0 >= t.default.compare(T, S)) return;
      let O = await n.default.fetchChangelog(T, i.default.locale);
      if (null != O) {
        if (null == N || null == a.default.lastSeenChangelogDate()) {
          n.default.markChangelogAsSeen(T, O.date);
          return
        }!a.default.isLocked() && new Date(O.date) > new Date(N) && (0, s.openChangelog)()
      }
    }
  }
}
var S = new T