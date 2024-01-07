            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("808653");
            var i = n("446674"),
                a = n("913144"),
                l = n("692038"),
                s = n("457971"),
                r = n("447435");
            let u = {};

            function o(e) {
                return "".concat(e.channel_id, ":").concat(e.id)
            }

            function d() {
                u = {}
            }
            class c extends i.default.Store {
                getMessage(e, t) {
                    return u[o({
                        id: e,
                        channel_id: t
                    })]
                }
            }
            c.displayName = "SearchMessageStore";
            var _ = new c(a.default, {
                SEARCH_FINISH: function(e) {
                    return !!(0, s.isEligibleForExplicitMediaRedaction)() && null != e.messages && (u = e.messages.reduce((e, t) => (t.forEach(t => {
                        e[o(t)] = (0, l.createMessageRecord)(t)
                    }), e), {}), !0)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (!(0, s.isEligibleForExplicitMediaRedaction)() || null == t.id || null == t.channel_id) return !1;
                    let n = o(t),
                        i = u[n];
                    return null != i && (u[n] = (0, l.updateMessageRecord)(i, {
                        attachments: t.attachments,
                        embeds: t.embeds
                    }), !0)
                },
                LOGOUT: function() {
                    (function() {
                        u = {}
                    })()
                },
                CONNECTION_OPEN: function() {
                    (function() {
                        u = {}
                    })()
                },
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e, i = o({
                        id: t,
                        channel_id: n
                    }), a = u[i];
                    null != a && (u[i] = (0, r.handleExplicitMediaScanTimeoutForMessage)(a))
                }
            })