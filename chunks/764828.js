            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return l
                },
                SafetyWarningFeedbackTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var u, a, l, s, i = n("446674"),
                d = n("913144"),
                r = n("42203");
            (u = l || (l = {}))[u.STRANGER_DANGER = 1] = "STRANGER_DANGER", (a = s || (s = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                c = {};

            function E(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function N() {
                c = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                })
            }
            class f extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : o
                }
            }
            var _ = new f(d.default, {
                CHANNEL_CREATE: function(e) {
                    E(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        E(e)
                    })
                },
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: u
                    } = e, a = c[t];
                    null != a && (c[t] = a.map(e => e.id === n ? {
                        ...e,
                        feedback_type: u
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = c[t];
                    null != n && (c[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, u = c[t];
                    if (null == u) return;
                    let a = Date.now().toString();
                    c[t] = u.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: a
                    } : e)
                }
            })