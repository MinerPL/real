            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return a
                },
                SafetyWarningFeedbackTypes: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i, l, a, r, s = n("446674"),
                o = n("913144"),
                u = n("42203");
            (i = a || (a = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", (l = r || (r = {}))[l.UPVOTE = 0] = "UPVOTE", l[l.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                c = {};

            function f(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function h() {
                c = {}, Object.values(u.default.getMutablePrivateChannels()).forEach(e => {
                    f(e)
                })
            }
            class E extends s.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : d
                }
            }
            var _ = new E(o.default, {
                CHANNEL_CREATE: function(e) {
                    f(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        f(e)
                    })
                },
                CONNECTION_OPEN: h,
                CONNECTION_OPEN_SUPPLEMENTAL: h,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: i
                    } = e, l = c[t];
                    null != l && (c[t] = l.map(e => e.id === n ? {
                        ...e,
                        feedback_type: i
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
                    } = e, i = c[t];
                    if (null == i) return;
                    let l = Date.now().toString();
                    c[t] = i.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: l
                    } : e)
                }
            })