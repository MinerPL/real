"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("913144"),
  i = {
    setSection(e) {
      a.default.dispatch({
        type: "FRIENDS_SET_SECTION",
        section: e
      })
    },
    setInitialSection(e) {
      a.default.dispatch({
        type: "FRIENDS_SET_INITIAL_SECTION",
        section: e
      })
    }
  }