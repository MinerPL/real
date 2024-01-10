            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("702976");
            var a = n("819689"),
                i = n("916565");

            function l(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != l.applicationId && (0, i.retryCommandMessage)(t, e, l.applicationId);
                    return
                }
                let {
                    content: s,
                    tts: u,
                    flags: r,
                    nonce: d
                } = t;
                a.default.sendMessage(e.id, {
                    content: s,
                    tts: u,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: d,
                    flags: r,
                    ...l
                })
            }