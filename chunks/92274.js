            "use strict";
            l.r(t), l.d(t, {
                AddFriendProminenceExperimentDesktop: function() {
                    return a
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence_desktop",
                label: "Make adding friends more prominent (desktop profile)",
                defaultConfig: {
                    moreAddFriend: !1,
                    messageButton: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable add friend button",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !1
                    }
                }, {
                    id: 2,
                    label: "enable both buttons",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !0
                    }
                }]
            });
            (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_add_friend_prominence",
                label: "Make adding friends more prominent (mobile DM)",
                defaultConfig: {
                    moreAddFriend: !1,
                    messageButton: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable",
                    config: {
                        moreAddFriend: !0,
                        messageButton: !1
                    }
                }]
            })