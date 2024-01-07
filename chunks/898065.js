            "use strict";
            i.r(t), i.d(t, {
                toggleEnableDeveloperActivityShelf: function() {
                    return l
                },
                toggleUseActivityUrlOverride: function() {
                    return a
                },
                setActivityUrlOverride: function() {
                    return u
                },
                markActivityUsed: function() {
                    return r
                },
                updateFilter: function() {
                    return d
                }
            });
            var n = i("913144");

            function l() {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED"
                })
            }

            function a() {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
                    activityUrlOverride: e
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                    applicationId: e,
                    timestamp: new Date().getTime()
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
                    filter: e
                })
            }