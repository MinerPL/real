"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("913144"),
  a = {
    setSection(e) {
      i.default.dispatch({
        type: "FRIENDS_SET_SECTION",
        section: e
      })
    },
    setInitialSection(e) {
      i.default.dispatch({
        type: "FRIENDS_SET_INITIAL_SECTION",
        section: e
      })
    }
  }