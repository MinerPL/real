            "use strict";
            n.r(t), n.d(t, {
                getNavNotifTabExperiment: function() {
                    return l
                }
            });
            var i = n("868493"),
                r = n("133337");
            let s = {
                    moveFriendRequests: !1,
                    removeNotificationTab: !1,
                    showNewPanels: !1
                },
                a = [{
                    id: 0,
                    label: "Control",
                    config: {
                        ...s,
                        showNewPanels: !0
                    }
                }, {
                    id: 1,
                    label: "Move friend requests out of notification tab.",
                    config: {
                        ...s,
                        showNewPanels: !0,
                        moveFriendRequests: !0
                    }
                }, {
                    id: 2,
                    label: "Remove notification tab and move friend requests out of notification tab.",
                    config: {
                        ...s,
                        showNewPanels: !0,
                        moveFriendRequests: !0,
                        removeNotificationTab: !0
                    }
                }],
                o = (0, i.default)({
                    kind: "user",
                    id: "2023-12_mobile_redesign_notif_tab",
                    label: "Mobile Redesign - Notification Tab",
                    defaultConfig: s,
                    treatments: a
                });

            function l(e, t) {
                return (0, r.getMergedExperimentConfigs)(o.existingUsers, o.newUsers, e, t)
            }