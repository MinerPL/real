"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("913144"),
  i = {
    toggleMembersSection() {
      s.default.dispatch({
        type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
      })
    },
    toggleProfilePanelSection() {
      s.default.dispatch({
        type: "PROFILE_PANEL_TOGGLE_SECTION"
      })
    },
    toggleSummariesSection() {
      s.default.dispatch({
        type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
      })
    }
  }