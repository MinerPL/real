            "use strict";
            n.r(t), n.d(t, {
                getTutorialPopoutAttributes: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("808072"),
                l = n("714307"),
                i = n("894383"),
                r = n("556684");
            let o = Object.freeze({
                    "voice-conversations": {
                        popoutPosition: "right",
                        highPriority: !0,
                        textAlign: s.TextAlignments.CENTER,
                        media: () => (0, a.jsx)(i.default, {})
                    },
                    "writing-messages": {
                        popoutPosition: "top",
                        highPriority: !0,
                        textAlign: s.TextAlignments.CENTER,
                        spacing: 10,
                        media: () => (0, a.jsx)(r.default, {})
                    },
                    "direct-messages": {
                        popoutPosition: "right"
                    },
                    "create-first-server": {
                        popoutPosition: "right",
                        highPriority: !0
                    },
                    "organize-by-topic": {
                        popoutPosition: "right",
                        textAlign: s.TextAlignments.CENTER,
                        spacing: 8,
                        media: () => (0, a.jsx)(l.default, {})
                    },
                    "instant-invite": {
                        popoutPosition: "right",
                        spacing: 24,
                        highPriority: !0
                    },
                    "whos-online": {
                        spacing: 16,
                        popoutPosition: "left"
                    },
                    "server-settings": {
                        popoutPosition: "bottom",
                        spacing: 10
                    },
                    "friends-list": {
                        spacing: 8,
                        popoutPosition: "right"
                    },
                    "create-more-servers": {
                        spacing: 8,
                        popoutPosition: "right"
                    }
                }),
                u = e => e in o ? o[e] : null