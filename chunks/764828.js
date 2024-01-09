            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return i
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return S
                }
            });
            var a, r, i, u, o = n("446674"),
                s = n("913144"),
                d = n("42203");
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (r = u || (u = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let l = [],
                f = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function E() {
                f = {}, Object.values(d.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class C extends o.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : l
                }
            }
            var S = new C(s.default, {
                CHANNEL_CREATE: function(e) {
                    c(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != f[e.channel.id] && delete f[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        c(e)
                    })
                },
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, r = f[t];
                    null != r && (f[t] = r.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let r = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: r
                    } : e)
                }
            })