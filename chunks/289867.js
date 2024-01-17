"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("913144"),
  s = {
    toggleMembersSection() {
      i.default.dispatch({
        type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
      })
    },
    toggleProfilePanelSection() {
      i.default.dispatch({
        type: "PROFILE_PANEL_TOGGLE_SECTION"
      })
    },
    toggleSummariesSection() {
      i.default.dispatch({
        type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
      })
    }
  }