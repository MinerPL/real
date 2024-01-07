            "use strict";
            n.r(t), n.d(t, {
                isInFriendSuggestionSeenStateExperiment: function() {
                    return i
                }
            }), n("222007"), n("65597");
            var a = n("862205");
            n("47319"), n("697218"), n("773336"), n("49111");
            (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_friend_finder_launch",
                label: "Friend Finder Launch Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Finder",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-03_friend_finder",
                label: "Friend Finder User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Finder",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_friend_finder_virginia",
                label: "Friend Finder User Experiment for Virginia",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Finder in Virginia",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-03_friend_finder_employees",
                label: "Friend Finder Employees User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Finder",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-06_guild_contact_invite_imessage_overlay",
                label: "Friend Finder guild contact invite imessage overlay",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iMessage Overlay",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_friendfinderincentivizedexistingusers",
                label: "Friend Finder Incentivized Invites for Existing Users",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Incentivized Invites",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_friendfinderincentivizednewusers",
                label: "Friend Finder Incentivized Invites for New Users",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Incentivized Invites",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_friend_finder_incentivized_west_virginia",
                label: "Friend Finder Incentivized Invites for West Virginia",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Incentivized Invites",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_username_lookup_killswitch",
                label: "Friend Finder Username Lookup Killswitch",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the Username Lookup",
                    config: {
                        enabled: !0
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2023-11_friend_finder_sync",
                label: "Friend Finder Sync",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Finder Sync",
                    config: {
                        enabled: !0
                    }
                }]
            });
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-12_friend_suggestion_seen_state",
                label: "Friend Suggestions Seen State",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Friend Suggestion Seen State",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i(e) {
                let {
                    enabled: t
                } = s.getCurrentConfig({
                    location: null != e ? e : "friend_suggestions"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }