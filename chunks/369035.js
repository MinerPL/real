            "use strict";
            n.r(t), n.d(t, {
                getRuleDefaultActionsFromConfig: function() {
                    return o
                },
                getDefaultActions: function() {
                    return i
                }
            });
            var r = n("143460");

            function o(e) {
                let t = i(),
                    n = Array.from(e.defaultActionTypes);
                return n.map(e => t[e])
            }

            function i() {
                return {
                    [r.AutomodActionType.BLOCK_MESSAGE]: {
                        type: r.AutomodActionType.BLOCK_MESSAGE,
                        metadata: {
                            customMessage: void 0
                        }
                    },
                    [r.AutomodActionType.FLAG_TO_CHANNEL]: {
                        type: r.AutomodActionType.FLAG_TO_CHANNEL,
                        metadata: {
                            channelId: void 0
                        }
                    },
                    [r.AutomodActionType.USER_COMMUNICATION_DISABLED]: {
                        type: r.AutomodActionType.USER_COMMUNICATION_DISABLED,
                        metadata: {
                            durationSeconds: 60
                        }
                    },
                    [r.AutomodActionType.QUARANTINE_USER]: {
                        type: r.AutomodActionType.QUARANTINE_USER,
                        metadata: {}
                    }
                }
            }