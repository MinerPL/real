            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("913144"),
                a = {
                    toggleMembersSection() {
                        l.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        l.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        l.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }